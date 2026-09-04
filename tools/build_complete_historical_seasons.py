"""Build complete 1946-47 through 2016-17 player-season files.

1950-2017 comes from the public Seasons_Stats Basketball-Reference export.
The first three BAA seasons are read directly from Basketball-Reference's
per-game tables. Existing playoff rows are preserved.
"""

from __future__ import annotations

import csv
import io
import json
import os
import re
import time
import unicodedata
from pathlib import Path

import requests
import urllib3
from bs4 import BeautifulSoup, Comment

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "assets" / "data" / "historical"
CSV_URL = "https://raw.githubusercontent.com/vimalsubbiah/NBA-EDA-and-PPG-prediction/master/Seasons_Stats.csv"
BREF_URL = "https://www.basketball-reference.com/leagues/NBA_{year}_per_game.html"


def norm(value: object) -> str:
    text = unicodedata.normalize("NFKD", str(value or "")).casefold()
    return "".join(ch for ch in text if ch.isalnum())


def number(value: object, default: float = 0) -> float:
    try:
        result = float(str(value or "").strip())
        return result if result == result else default
    except (TypeError, ValueError):
        return default


def position_code(value: object) -> int:
    pos = str(value or "SF").split("-")[0].upper()
    return {"PG": 1, "SG": 2, "SF": 3, "PF": 4, "C": 5, "G": 1, "F": 3}.get(pos, 3)


players = json.loads((DATA / "players.json").read_text(encoding="utf-8")).get("players", [])
identity = {}
for player in players:
    for name in [player.get("name"), player.get("displayName"), player.get("nameEn"), *(player.get("aliases") or [])]:
        if norm(name):
            identity[norm(name)] = player


def player_identity(name: str) -> tuple[str, str, str]:
    meta = identity.get(norm(name)) or {}
    return (
        meta.get("realId") or "stats:" + norm(name),
        meta.get("historyKey") or norm(name),
        meta.get("nameCn") or meta.get("displayName") or name,
    )


def regular_row(year: int, name: str, pos: str, age: float, team: str, games: float,
                minutes: float, fg_pct: float, three_pct: float, ft_pct: float,
                points: float, rebounds: float, assists: float, steals: float, blocks: float,
                source: str) -> dict:
    real_id, history_key, display = player_identity(name)
    return {
        "type": "regular", "season": year - 1, "seasonEndYear": year,
        "team": team, "gp": round(games), "mins": round(minutes, 1),
        "fgPct": round(fg_pct, 1), "tpPct": round(three_pct, 1), "ftPct": round(ft_pct, 1),
        "ppg": round(points, 1), "rpg": round(rebounds, 1), "apg": round(assists, 1),
        "spg": round(steals, 1), "bpg": round(blocks, 1), "source": source,
        "realId": real_id, "historyKey": history_key, "name": name,
        "displayName": display, "position": position_code(pos),
    }


def existing_playoffs(year: int) -> list[dict]:
    path = DATA / f"player_seasons_{year}.json"
    if not path.exists():
        return []
    payload = json.loads(path.read_text(encoding="utf-8"))
    return [row for row in payload.get("rows", []) if row.get("type") == "playoffs"]


def write_year(year: int, rows: list[dict]) -> None:
    rows.extend(existing_playoffs(year))
    payload = {"version": 2, "seasonEndYear": year, "rows": rows}
    (DATA / f"player_seasons_{year}.json").write_text(
        json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
    )
    teams = {row["team"] for row in rows if row.get("type") == "regular" and row.get("team") != "TOT"}
    print(f"{year}: {len(teams)} teams, {len(rows)} rows", flush=True)


def build_csv_years(session: requests.Session) -> None:
    response = session.get(CSV_URL, timeout=90, verify=False)
    response.raise_for_status()
    grouped: dict[int, list[dict]] = {}
    for source in csv.DictReader(io.StringIO(response.text)):
        year = int(number(source.get("Year")))
        if not 1950 <= year <= 2017:
            continue
        games = number(source.get("G"))
        if games <= 0:
            continue
        per_game = lambda key: number(source.get(key)) / games
        grouped.setdefault(year, []).append(regular_row(
            year, str(source.get("Player") or "").replace("*", "").strip(), source.get("Pos") or "SF",
            number(source.get("Age")), source.get("Tm") or "TOT", games, per_game("MP"),
            number(source.get("FG%")) * 100, number(source.get("3P%")) * 100,
            number(source.get("FT%")) * 100, per_game("PTS"), per_game("TRB"), per_game("AST"),
            per_game("STL"), per_game("BLK"), "github_basketball_reference_seasons_stats"
        ))
    for year in range(1950, 2018):
        write_year(year, grouped.get(year, []))


def cell(row, stat: str) -> str:
    node = row.select_one(f"[data-stat='{stat}']")
    return node.get_text(strip=True) if node else ""


def build_early_years(session: requests.Session) -> None:
    for year in range(1947, 1950):
        early_url = BREF_URL.format(year=year).replace("/NBA_", "/BAA_")
        response = session.get(early_url, timeout=45, verify=False)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
            if "per_game_stats" in comment:
                comment.replace_with(BeautifulSoup(str(comment), "html.parser"))
        rows = []
        for tr in soup.select("table#per_game_stats tbody tr"):
            name = cell(tr, "name_display") or cell(tr, "player")
            team = cell(tr, "team_name_abbr") or cell(tr, "team_id")
            games = number(cell(tr, "games"))
            if not name or not team or games <= 0:
                continue
            rows.append(regular_row(
                year, name, cell(tr, "pos"), number(cell(tr, "age")), team, games,
                number(cell(tr, "mp_per_game") or cell(tr, "mp_per_g")), number(cell(tr, "fg_pct")) * 100,
                number(cell(tr, "fg3_pct")) * 100, number(cell(tr, "ft_pct")) * 100,
                number(cell(tr, "pts_per_game") or cell(tr, "pts_per_g")), number(cell(tr, "trb_per_game") or cell(tr, "trb_per_g")),
                number(cell(tr, "ast_per_game") or cell(tr, "ast_per_g")), number(cell(tr, "stl_per_game") or cell(tr, "stl_per_g")),
                number(cell(tr, "blk_per_game") or cell(tr, "blk_per_g")), "basketball_reference_per_game"
            ))
        if not rows:
            raise RuntimeError(f"No early player rows parsed for {year}")
        write_year(year, rows)
        time.sleep(3.2)


def update_manifest() -> None:
    path = DATA / "manifest.json"
    manifest = json.loads(path.read_text(encoding="utf-8"))
    manifest["files"]["playerSeasons"] = [f"player_seasons_{year}.json" for year in range(1947, 2026)]
    manifest["supportedStartYears"] = list(range(1947, 2026))
    path.write_text(json.dumps(manifest, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


def main() -> None:
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    proxy = os.environ.get("HTTPS_PROXY") or "http://127.0.0.1:7897"
    session = requests.Session()
    session.proxies.update({"http": proxy, "https": proxy})
    session.headers["User-Agent"] = "perfect-player historical roster builder (personal project)"
    build_csv_years(session)
    build_early_years(session)
    update_manifest()


if __name__ == "__main__":
    main()
