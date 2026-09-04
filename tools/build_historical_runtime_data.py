"""Build compact browser-facing historical metadata without altering source data."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "assets" / "data" / "historical"


def read(name):
    return json.loads((DATA / name).read_text(encoding="utf-8"))


def write(name, payload):
    (DATA / name).write_text(
        json.dumps(payload, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )


def compact_snapshot(snapshot):
    honors = snapshot.get("honors") or {}
    return {
        "startYear": snapshot.get("startYear"),
        "teamId": snapshot.get("teamId"),
        "age": snapshot.get("age"),
        "rating": snapshot.get("rating"),
        "potential": snapshot.get("potential"),
        "honors": {key: honors.get(key, 0) for key in ("mvp", "dpoy", "allNba1")},
    }


players_source = read("players.json")
players = []
for player in players_source.get("players", []):
    players.append({
        "realId": player.get("realId"),
        "historyKey": player.get("historyKey"),
        "name": player.get("name"),
        "displayName": player.get("displayName"),
        "nameCn": player.get("nameCn"),
        "nameEn": player.get("nameEn"),
        "draft": player.get("draft") or {},
        "position": player.get("position") or {},
        "rosterSnapshots": [compact_snapshot(item) for item in player.get("rosterSnapshots", [])],
        "photoLocal": player.get("photoLocal") or "",
    })
write("players_runtime.json", {"version": 1, "players": players})


draft_source = read("draft_classes.json")
keep = (
    "realId", "historyKey", "name", "displayName", "nameCn", "nameEn",
    "pos", "pos2", "pick", "draftYear", "draftTeam", "age",
    "ratingSeed", "potentialSeed", "photoLocal", "photoStatus",
)
classes = {
    year: [{key: item.get(key) for key in keep if item.get(key) not in (None, "")} for item in entries]
    for year, entries in draft_source.get("classes", {}).items()
}
write("draft_classes_runtime.json", {"version": 1, "classes": classes})

print("players_runtime.json", (DATA / "players_runtime.json").stat().st_size)
print("draft_classes_runtime.json", (DATA / "draft_classes_runtime.json").stat().st_size)
