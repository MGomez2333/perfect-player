"""Build real regular-season game counts from Basketball Reference standings.

The output is intentionally small: season ending year -> historical team
abbreviation -> wins + losses.  Keeping the historical abbreviation lets the
browser distinguish relocations before mapping them to the game's canonical
franchises.
"""

from __future__ import annotations

import json
import os
import re
import time
from pathlib import Path

import requests
from bs4 import BeautifulSoup
import urllib3


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "data" / "historical" / "season_team_games.json"
START_YEAR = 1947
END_YEAR = 2025
URL = "https://www.basketball-reference.com/leagues/{league}_{year}_standings.html"


def fetch(year: int, session: requests.Session) -> dict[str, int]:
    for attempt in range(6):
        league = "BAA" if year <= 1949 else "NBA"
        response = session.get(URL.format(league=league, year=year), timeout=30, verify=False)
        if response.status_code != 429:
            response.raise_for_status()
            break
        time.sleep(20 * (attempt + 1))
    else:
        response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    result: dict[str, int] = {}
    for row in soup.select("table[id^='divs_standings_'] tbody tr"):
        team_link = row.select_one("th[data-stat='team_name'] a")
        wins = row.select_one("td[data-stat='wins']")
        losses = row.select_one("td[data-stat='losses']")
        if not team_link or not wins or not losses:
            continue
        match = re.search(r"/teams/([A-Z0-9]+)/", team_link.get("href", ""))
        wins_text = wins.get_text(strip=True)
        losses_text = losses.get_text(strip=True)
        if match and wins_text.isdigit() and losses_text.isdigit():
            result[match.group(1)] = int(wins_text) + int(losses_text)
    if not result:
        raise RuntimeError(f"No standings rows found for {year}")
    return result


def main() -> None:
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    proxy = os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy") or "http://127.0.0.1:7897"
    session = requests.Session()
    session.headers["User-Agent"] = "perfect-player historical schedule builder (personal project)"
    session.proxies.update({"http": proxy, "https": proxy})
    if OUT.exists():
        seasons = json.loads(OUT.read_text(encoding="utf-8")).get("seasons", {})
    else:
        seasons: dict[str, dict[str, int]] = {}
    for year in range(START_YEAR, END_YEAR + 1):
        if str(year) in seasons:
            continue
        seasons[str(year)] = fetch(year, session)
        print(f"{year}: {len(seasons[str(year)])} teams", flush=True)
        payload = {"source": "Basketball Reference season standings (wins + losses)", "range": [START_YEAR, END_YEAR], "seasons": seasons}
        OUT.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        time.sleep(3.2)
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
