#!/usr/bin/env python3
"""Build one career-peak attribute card per player for legend mode."""

from __future__ import annotations

import json
from collections import defaultdict
from datetime import datetime, timezone

import build_perfect_player_pool as pool


OUT_FILE = pool.DATA_DIR / "perfect-player-legend-peaks.json"
TEAM_ABBRS = {
    1:"BOS", 2:"BKN", 3:"NYK", 4:"PHI", 5:"TOR", 6:"CHI", 7:"CLE", 8:"DET", 9:"IND", 10:"MIL",
    11:"ATL", 12:"CHA", 13:"MIA", 14:"ORL", 15:"WAS", 16:"DEN", 17:"MIN", 18:"OKC", 19:"POR", 20:"UTA",
    21:"GSW", 22:"LAC", 23:"LAL", 24:"PHX", 25:"SAC", 26:"DAL", 27:"HOU", 28:"MEM", 29:"NOP", 30:"SAS",
}


def load_real_franchise_affiliations() -> dict[str, set[int]]:
    """Index actual regular-season team rows, including teams omitted by snapshots."""
    affiliations: dict[str, set[int]] = defaultdict(set)
    for path in sorted(pool.HIST_DIR.glob("player_seasons_*.json")):
        payload = json.loads(path.read_text(encoding="utf-8"))
        for row in payload.get("rows", []):
            if row.get("type") != "regular":
                continue
            team_id = int(row.get("teamId") or 0)
            if team_id not in TEAM_ABBRS:
                continue
            for key in (row.get("realId"), pool.norm(row.get("name")), pool.norm(row.get("displayName"))):
                if key:
                    affiliations[str(key)].add(team_id)
    return affiliations


def load_real_peak_teams() -> dict[str, int]:
    """Choose the franchise of each player's strongest real statistical season."""
    best: dict[str, tuple[tuple[float, float, int], int]] = {}
    for path in sorted(pool.HIST_DIR.glob("player_seasons_*.json")):
        payload = json.loads(path.read_text(encoding="utf-8"))
        for row in payload.get("rows", []):
            if row.get("type") != "regular" or row.get("team") == "TOT":
                continue
            team_id = int(row.get("teamId") or 0)
            if team_id not in TEAM_ABBRS:
                continue
            impact = (
                float(row.get("ppg") or 0)
                + float(row.get("rpg") or 0) * .55
                + float(row.get("apg") or 0) * .75
                + float(row.get("spg") or 0) * 2.2
                + float(row.get("bpg") or 0) * 2.2
            )
            score = (impact, float(row.get("mins") or 0), int(row.get("gp") or 0))
            for key in (row.get("realId"), pool.norm(row.get("name")), pool.norm(row.get("displayName"))):
                if key and (str(key) not in best or score > best[str(key)][0]):
                    best[str(key)] = (score, team_id)
    return {key: value[1] for key, value in best.items()}


def main() -> None:
    history_index = pool.load_history_index()
    nba_ids = pool.load_nba_ids()
    affiliations = load_real_franchise_affiliations()
    peak_teams = load_real_peak_teams()
    peaks: dict[str, dict] = {}

    for source in pool.SEASONS:
        for index, row in enumerate(pool.load_csv(pool.DATA_DIR / source["file"]), start=1):
            if not str(row.get("name") or row.get("nameBirth") or "").strip():
                continue
            history = history_index.get(pool.norm(row.get("nameBirth"))) or history_index.get(pool.norm(row.get("name")))
            record = pool.player_record(row, source, history, nba_ids, index)
            identity = str(record.get("identity") or "")
            if not identity:
                continue
            previous = peaks.get(identity)
            score = (record["rating"], record["starScore"], -source["year"])
            previous_score = (
                previous["rating"], previous["starScore"],
                -int((previous.get("source") or {}).get("year") or 0)
            ) if previous else None
            if previous is None or score > previous_score:
                peaks[identity] = record

    candidates: dict[int, dict[int, dict[str, dict]]] = defaultdict(lambda: defaultdict(dict))
    for identity, record in peaks.items():
        teams = set()
        for key in (identity, pool.norm(record.get("nameEn")), pool.norm(record.get("name"))):
            teams.update(affiliations.get(str(key), set()))
        if not teams:
            teams.update(record.get("historicalTeams") or [record.get("teamId")])
        record["historicalTeams"] = sorted(teams)
        peak_team_id = 0
        for key in (identity, pool.norm(record.get("nameEn")), pool.norm(record.get("name"))):
            if str(key) in peak_teams:
                peak_team_id = peak_teams[str(key)]
                break
        if peak_team_id not in TEAM_ABBRS:
            peak_team_id = int(record.get("teamId") or 0)
        if peak_team_id not in TEAM_ABBRS:
            continue
        record["peakTeamId"] = peak_team_id
        position = max(1, min(5, int(record.get("pos") or 3)))
        candidates[peak_team_id][position][identity] = record

    teams_payload: dict[str, list[dict]] = {}
    position_counts: dict[str, dict[str, int]] = {}
    for team_id, abbr in TEAM_ABBRS.items():
        roster: list[dict] = []
        counts: dict[str, int] = {}
        for position in range(1, 6):
            ranked = sorted(
                candidates[team_id][position].values(),
                key=lambda card: (-card["rating"], -card["starScore"], card["nameEn"]),
            )[:5]
            roster.extend(ranked)
            counts[str(position)] = len(ranked)
        teams_payload[abbr] = roster
        position_counts[abbr] = counts

    # 巅峰卡只能出现在其巅峰归属球队，不能复制到其他曾效力球队。
    for team_id, abbr in TEAM_ABBRS.items():
        for card in teams_payload[abbr]:
            if team_id != card.get("peakTeamId"):
                raise ValueError(f"peak-team leak: {abbr} contains {card.get('nameEn') or card.get('name')}")

    payload = {
        "version": 1,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "rule": "one-franchise peak pool: each career-peak card belongs only to the franchise of the player's best statistical season",
        "players": peaks,
        "teams": teams_payload,
        "positionCounts": position_counts,
    }
    OUT_FILE.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"wrote {OUT_FILE} players={len(peaks)} team_cards={sum(map(len, teams_payload.values()))}")


if __name__ == "__main__":
    main()
