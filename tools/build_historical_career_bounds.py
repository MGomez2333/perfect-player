"""Generate compact first/last NBA season bounds for historical players."""

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "assets" / "data" / "historical"


def main() -> None:
    bounds: dict[str, dict[str, int]] = {}
    for path in sorted(DATA.glob("player_seasons_*.json")):
        payload = json.loads(path.read_text(encoding="utf-8"))
        end_year = int(payload.get("seasonEndYear") or path.stem.rsplit("_", 1)[-1])
        for row in payload.get("rows", []):
            if row.get("type") != "regular" or not row.get("realId"):
                continue
            item = bounds.setdefault(row["realId"], {"first": end_year, "last": end_year})
            item["first"] = min(item["first"], end_year)
            item["last"] = max(item["last"], end_year)
    players = json.loads((DATA / "players.json").read_text(encoding="utf-8")).get("players", [])
    for player in players:
        real_id, history_key = player.get("realId"), player.get("historyKey")
        if real_id in bounds and history_key:
            bounds[history_key] = bounds[real_id]
    target = DATA / "career_bounds.json"
    target.write_text(json.dumps({"version": 1, "players": bounds}, separators=(",", ":")), encoding="utf-8")
    print(f"wrote {target}: {len(bounds)} players")


if __name__ == "__main__":
    main()
