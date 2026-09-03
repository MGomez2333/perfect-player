"""Build the real first-NBA-team destination map for historical draft classes."""

import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
HISTORICAL = ROOT / "assets" / "data" / "historical"


def name_key(value: str) -> str:
    value = unicodedata.normalize("NFKD", value or "")
    return re.sub(r"[^a-z0-9]", "", value.encode("ascii", "ignore").decode().lower())


def main() -> None:
    draft_payload = json.loads((HISTORICAL / "draft_classes.json").read_text(encoding="utf-8"))
    destinations: dict[str, dict[str, str]] = {}

    for year_text, draft_class in draft_payload.get("classes", {}).items():
        year = int(year_text)
        by_real_id: dict[str, dict] = {}
        by_name: dict[str, dict] = {}
        # Some drafted players joined the NBA later (for example David Robinson).
        # The first season found is their locked historical destination.
        for season_end_year in range(year + 1, year + 6):
            season_path = HISTORICAL / f"player_seasons_{season_end_year}.json"
            if not season_path.exists():
                continue
            season_rows = json.loads(season_path.read_text(encoding="utf-8")).get("rows", [])
            for row in season_rows:
                if row.get("type") != "regular" or not row.get("realId") or row.get("team") == "TOT":
                    continue
                key = name_key(row.get("name") or row.get("displayName") or "")
                if row["realId"] not in by_real_id:
                    by_real_id[row["realId"]] = row
                if key and key not in by_name:
                    by_name[key] = row

        year_map: dict[str, str] = {}
        for player in draft_class:
            row = by_real_id.get(player.get("realId", "")) or by_name.get(
                name_key(player.get("nameEn") or player.get("name") or "")
            )
            if row and row.get("team"):
                year_map[player["realId"]] = row["team"]
        if year_map:
            destinations[year_text] = year_map

    output = {
        "version": 1,
        "description": "Historical draft destination is the player's first NBA regular-season team; later movement remains simulated.",
        "destinations": destinations,
    }
    target = HISTORICAL / "draft_destinations.json"
    target.write_text(json.dumps(output, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"wrote {target}: {sum(map(len, destinations.values()))} players across {len(destinations)} years")


if __name__ == "__main__":
    main()
