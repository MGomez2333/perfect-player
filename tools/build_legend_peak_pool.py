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


def main() -> None:
    history_index = pool.load_history_index()
    nba_ids = pool.load_nba_ids()
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
        teams = record.get("historicalTeams") or [record.get("teamId")]
        position = max(1, min(5, int(record.get("pos") or 3)))
        for team_id in teams:
            team_id = int(team_id or 0)
            if team_id not in TEAM_ABBRS:
                continue
            previous = candidates[team_id][position].get(identity)
            if previous is None or record["rating"] > previous["rating"]:
                candidates[team_id][position][identity] = record

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

    payload = {
        "version": 1,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "rule": "all-time franchise pool: top five career-peak cards at each position",
        "players": peaks,
        "teams": teams_payload,
        "positionCounts": position_counts,
    }
    OUT_FILE.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"wrote {OUT_FILE} players={len(peaks)} team_cards={sum(map(len, teams_payload.values()))}")


if __name__ == "__main__":
    main()
