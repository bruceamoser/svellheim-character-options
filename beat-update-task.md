# Beat Update Task List — Svellheim Campaign Expansion

> Generated from deep campaign review. Goal: raise hero level at Grafvitnir (Beat 26) from ~5 to ~8–9 through new beats, side quests, VP expansion, plot-hole fixes, and naming corrections.

---

## Legend

- **Repo tags:** `ERA` = Era-of-Embers, `ACT1` = Svellheim-Act1, `ACT2` = Svellheim-Act2, `ACT3` = Svellheim-Act3, `WORLD` = svellheim-world, `ENTITY` = Svellheim-Entities
- **Priority:** 🔴 Critical (blocks other work), 🟡 Important, 🟢 Nice-to-have
- **Type tags:** `rename`, `new-beat`, `side-quest`, `plot-fix`, `vp-expansion`, `npc`, `monster`, `encounter`, `negotiation`, `montage`

---

## 1. Naming — Rename "Great Green" → "Greenweald" 🔴 `rename`

The dead parent forest should be called **Greenweald** (historically "Great Greenweald"). The **Green Heart** is the specific living grove. Beat 6's title "The Great Green" is confusing and must be renamed.

### 1.1 Adoc Files (Era-of-Embers)

| # | File (ERA) | Change | Tags |
|---|-----------|--------|------|
| 1.1.1 | `campaign/docs/04-Campaign/01-Restore-the-Flame-MODULE.adoc` | Line 92: rename "The Great Green" → "The Greenweald" | `rename` |
| 1.1.2 | `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-1/00-Act-1-Overview.adoc` | Lines 54, 147: update all "Great Green" refs → "Greenweald" | `rename` |
| 1.1.3 | `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-1/05-Finding-Lew.adoc` | Lines 236, 298, 322, 324: update Lew's dialogue and outcome text — "Great Green" → "Greenweald" | `rename` |
| 1.1.4 | `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-1/06-The-Great-Green.adoc` | **Rename file** → `06-The-Greenweald.adoc`. Update title line 1 and all internal "Great Green" / "Great Greenweald" → "Greenweald" (lines 1, 21, 41) | `rename` |
| 1.1.5 | `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-1/06a-The-Ashen-Woods.adoc` | Lines 22, 24, 48, 60: update "Great Greenweald" and "Great Green" refs → "Greenweald" | `rename` |
| 1.1.6 | `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-1/06b-The-Bone-Fields.adoc` | Line 24: update cross-reference to renamed file and title | `rename` |
| 1.1.7 | `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-1/encounters-act1.adoc` | Line 304: "The Great Green" → "The Greenweald" | `rename` |
| 1.1.8 | `campaign/docs/01-The-World/05-Geography/01-The-Atlas.adoc` | Lines 74, 101: "Great Greenweald" → "Greenweald" in geographic descriptions | `rename` |

### 1.2 Foundry Journal Entries

| # | Repo | File | Change | Tags |
|---|------|------|--------|------|
| 1.2.1 | `ACT1` | `data/director-journals/Act-1-Restore-the-Flame-Director-Journal.journal.json` | Multiple references in Beat 5 transition, Beat 6 title, Beat 6 body, route-choice narrative. Replace all "Great Green" / "Great Greenweald" → "Greenweald". Update page `name` field for Beat 6 from "Beat 6 — The Great Green" → "Beat 6 — The Greenweald" | `rename` |
| 1.2.2 | `ACT1` | `data/player-journals/Act-1-Restore-the-Flame-Player-Handouts.journal.json` | Line 30: "Great Greenweald" → "Greenweald" in location description | `rename` |
| 1.2.3 | `WORLD` | `data/player-journals/Svellheim-Gazetteer-Interior-Belt.journal.json` | Lines 74, 118: "Great Greenweald" → "Greenweald" in Ashen Woods and Green Heart entries | `rename` |

### 1.3 Montage Test Files — Rename

| # | Repo | Old Filename | New Filename | Internal `name` Field | Tags |
|---|------|-------------|-------------|----------------------|------|
| 1.3.1 | `ACT1` | `data/montage-tests/beat-06-great-green-ashen-woods.json` | `beat-06-greenweald-ashen-woods.json` | Update `"name"` value: "Beat 6: The Great Green — Ashen Woods Route" → "Beat 6: The Greenweald — Ashen Woods Route" | `rename` |
| 1.3.2 | `ACT1` | `data/montage-tests/beat-06-great-green-bone-fields.json` | `beat-06-greenweald-bone-fields.json` | Update `"name"` value: "Beat 6: The Great Green — Bone Fields Route (Alternate)" → "Beat 6: The Greenweald — Bone Fields Route (Alternate)" | `rename` |

### 1.4 Entity Data

| # | Repo | File | Change | Tags |
|---|------|------|--------|------|
| 1.4.1 | `ENTITY` | `data/npcs/solveig-the-burner.json` | Line 3724: "Great Greenweald" → "Greenweald" (×2 in biography) | `rename` |
| 1.4.2 | `ENTITY` | `output/heroized-npcs/solveig-the-burner.json` | Same as above — regenerate from source after 1.4.1 | `rename` |

### 1.5 Reference / Tracking Files

| # | Repo | File | Change | Tags |
|---|------|------|--------|------|
| 1.5.1 | `ERA` | `reference/VP-RUNNING-TOTALS.md` | Line 19: "The Great Green" → "The Greenweald" | `rename` |
| 1.5.2 | `ACT1` | `VERIFICATION-PLAN.md` | Lines 24-26: update beat references and adoc filename refs | `rename` |

---

## 2. New Beats 🔴 `new-beat`

Three new beats to add narrative depth, VP, and Kaelen's character arc.

### Beat 20a — The Keeper's Confession

**Insert between current Beat 20 and Beat 21 in Act 3.**

| # | Repo | Task | Type | Tags |
|---|------|------|------|------|
| 2.1.1 | `ERA` | Create `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-3/20a-The-Keepers-Confession.adoc` — full beat write-up | `new-beat` |
| 2.1.2 | `ERA` | Update `Act-3/00-Act-3-Overview.adoc` — insert Beat 20a into beat table | `new-beat` |
| 2.1.3 | `ERA` | Update `01-Restore-the-Flame-MODULE.adoc` — insert Beat 20a into master beat table | `new-beat` |
| 2.1.4 | `ACT3` | Add Beat 20a page to `data/director-journals/Act-3-The-Burning-Director-Journal.journal.json` | `new-beat` |
| 2.1.5 | `ACT3` | Create negotiation test JSON in `data/negotiation-tests/` for Dagný negotiation scene | `new-beat`, `negotiation` |
| 2.1.6 | `ERA` | Update `Act-3/negotiations-act3.adoc` — add Dagný negotiation spec | `negotiation` |

**Beat 20a Design Summary:**
- Level 5, 1–2 sessions, ~3–4 VP
- Party meets Dagný (old Heitfolk elder) who reveals the truth about the Keepers
- Kaelen learns Eirik (Third Keeper) was corrupted by Grafvitnir and betrayed the other five Keepers
- The Ember pushed Kaelen away deliberately to save her — she feels betrayed
- Includes Dagný negotiation (Medium difficulty) and roleplaying

### Beat 20b — The Ember's Gift

**Insert after Beat 20a, before Beat 21.**

| # | Repo | Task | Type | Tags |
|---|------|------|------|------|
| 2.2.1 | `ERA` | Create `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-3/20b-The-Embers-Gift.adoc` — full beat write-up | `new-beat` |
| 2.2.2 | `ERA` | Update `Act-3/00-Act-3-Overview.adoc` — insert Beat 20b into beat table | `new-beat` |
| 2.2.3 | `ERA` | Update `01-Restore-the-Flame-MODULE.adoc` — insert Beat 20b into master beat table | `new-beat` |
| 2.2.4 | `ACT3` | Add Beat 20b page to `data/director-journals/Act-3-The-Burning-Director-Journal.journal.json` | `new-beat` |
| 2.2.5 | `ERA` | Update `Act-3/encounters-act3.adoc` if Ember memory vision includes any mechanical element | `new-beat` |

**Beat 20b Design Summary:**
- Level 5, 1 session, ~2–3 VP
- Near the Green Heart boundary, Kaelen experiences a root-memory from the Ember
- She sees the Ember holding the barrier alone for 12 years, deliberately pushing her out to save her
- Emotional payoff: betrayal → understanding; guilt → acceptance
- Kaelen's arc pivot: she stops being the "abandoned one" and becomes the "one who was saved to save"

### Beat 23a — Night of Hunters

**Insert between current Beat 23 and Beat 24 in Act 3.**

| # | Repo | Task | Type | Tags |
|---|------|------|------|------|
| 2.3.1 | `ERA` | Create `campaign/docs/04-Campaign/01-Restore-the-Flame/Act-3/23a-Night-of-Hunters.adoc` — full beat write-up | `new-beat` |
| 2.3.2 | `ERA` | Update `Act-3/00-Act-3-Overview.adoc` — insert Beat 23a into beat table | `new-beat` |
| 2.3.3 | `ERA` | Update `01-Restore-the-Flame-MODULE.adoc` — insert Beat 23a into master beat table | `new-beat` |
| 2.3.4 | `ACT3` | Add Beat 23a page to `data/director-journals/Act-3-The-Burning-Director-Journal.journal.json` | `new-beat` |
| 2.3.5 | `ACT3` | Create montage test JSON in `data/montage-tests/` for the hunted-march survival montage | `new-beat`, `montage` |
| 2.3.6 | `ERA` | Update `Act-3/encounters-act3.adoc` — add Rot-Forged Sentinel encounter | `encounter` |
| 2.3.7 | `ERA` | Update `Act-3/monsters-act3.adoc` — add Rot-Forged Sentinel stat reference | `monster` |

**Beat 23a Design Summary:**
- Level 6–7, 2 sessions, ~3–4 VP
- Grafvitnir sends Rot-Forged Sentinels — direct, personal action for the first time
- Hunted-march montage: party must evade/survive while protecting refugee column
- First time Grafvitnir addresses the party directly (telepathic echo through the Sentinels)
- Raises stakes before the final act stretch

---

## 3. New NPCs 🟡 `npc`

| # | NPC | Used In | Repo Tasks | Tags |
|---|-----|---------|------------|------|
| 3.1 | **Dagný** — Old Heitfolk elder, knows the Keepers' history | Beat 20a | `ENTITY`: Create `data/npcs/dagny-heitfolk-elder.json` (generate via MCP). `ERA`: Add to `NPCs/` adoc directory or update `npcs-act3.adoc` | `npc` |
| 3.2 | **Eirik Greyhand** (expansion) — Already exists at `data/npcs/eirik-greyhand.json` | Beat 20a, Side Quest (Eirik's Chamber) | `ENTITY`: Update existing NPC with expanded backstory (corrupted Third Keeper, focus-stone, tunnel collapse). `ERA`: Update `NPCs/10-Eirik-Greyhand.adoc` with betrayal details | `npc` |
| 3.3 | **Úrn** — Bundingsteinn diver guide | Side Quest 1 (Drowned Messenger) | `ENTITY`: Create `data/npcs/urn-bundingsteinn-diver.json`. `ERA`: Add to `npcs-act2.adoc` | `npc` |

---

## 4. New Monsters 🟡 `monster`

| # | Monster | Used In | Repo Tasks | Tags |
|---|---------|---------|------------|------|
| 4.1 | **Rot-Forged Sentinel** (×2 variants: Brute + Harrier) | Beat 23a | `ENTITY`: Create `data/monsters/rot-forged-sentinel-brute.json` + `rot-forged-sentinel-harrier.json` (generate via MCP). `ERA`: Add stat blocks to `Act-3/monsters-act3.adoc` | `monster` |
| 4.2 | **Rot-Guardian** — Animated construct in Eirik's buried chamber | Side Quest (Eirik's Chamber) | `ENTITY`: Create `data/monsters/rot-guardian.json`. `ERA`: Add stat block to appropriate act monsters adoc | `monster` |
| 4.3 | **Tunnel Blight Swarm** — Small rot creatures in collapsed southern tunnels | Side Quest (Eirik's Chamber) | `ENTITY`: Create `data/monsters/tunnel-blight-swarm.json`. `ERA`: Add stat block to appropriate act monsters adoc | `monster` |

---

## 5. Side Quests 🟡 `side-quest`

Five side quests following the Heitfolk Hospitality model (Beat 17). Each serves the main arc while giving VP outside the linear path.

### SQ1 — The Drowned Messenger (Act 2, near Beat 11)

| # | Task | Repo | Tags |
|---|------|------|------|
| 5.1.1 | Write side quest adoc (encounter + lore reward) | `ERA` — create in `Act-2/` or a new `side-quests/` subfolder | `side-quest`, `encounter` |
| 5.1.2 | Add encounter to `Act-2/encounters-act2.adoc` | `ERA` | `encounter` |
| 5.1.3 | Add content to Act 2 director journal (Part 1, near Beat 11) | `ACT2` | `side-quest` |
| 5.1.4 | Create NPC Úrn if not already done (see §3.3) | `ENTITY` | `npc` |
| **VP:** 2 | | | |

**Summary:** Úrn (Bundingsteinn diver) asks the party to retrieve a drowned messenger's satchel from a reef-cave near the Singing Islands. Contains intelligence about Dreyfus's movements. Underwater encounter.

### SQ2 — The Bundingsteinn Chain (Act 2, Beat 12–13) *(revised — no longer conflates Green Heart / Greenweald)*

| # | Task | Repo | Tags |
|---|------|------|------|
| 5.2.1 | Write side quest adoc — stone-linking ritual at Bundingsteinn waypoints | `ERA` — `Act-2/` | `side-quest` |
| 5.2.2 | Add encounter/montage spec | `ERA` | `encounter`, `montage` |
| 5.2.3 | Add content to Act 2 director journal | `ACT2` | `side-quest` |
| **VP:** 2 | | | |

**Summary:** The Bundingsteinn elders ask the party to re-link broken oath-stones along the coastal route. The chain provides a communication network that aids Act 3 logistics. A montage test with a minor combat interruption.

### SQ3 — The Shape of the Oasis (Act 2, Beat 17 area)

| # | Task | Repo | Tags |
|---|------|------|------|
| 5.3.1 | Write side quest adoc — investigate corrupted hot spring | `ERA` — `Act-2/` | `side-quest` |
| 5.3.2 | Add encounter to `encounters-act2.adoc` | `ERA` | `encounter` |
| 5.3.3 | Add content to Act 2 Part 2 director journal | `ACT2` | `side-quest` |
| **VP:** 2 | | | |

**Summary:** Elder Thyra asks the party to investigate a hot spring going cold. A rot-touched source is corrupting the geothermal feed. Dungeon-style exploration encounter.

### SQ4 — Brynja's Checkpoint (Act 3, Beat 23 area)

| # | Task | Repo | Tags |
|---|------|------|------|
| 5.4.1 | Write side quest adoc — fortify refugee checkpoint | `ERA` — `Act-3/` | `side-quest`, `negotiation` |
| 5.4.2 | Add negotiation spec to `negotiations-act3.adoc` | `ERA` | `negotiation` |
| 5.4.3 | Add content to Act 3 director journal | `ACT3` | `side-quest` |
| **VP:** 2 | | | |

**Summary:** Brynja asks the party to secure a mountain pass checkpoint through negotiation with suspicious local militia. Failure means refugees take a longer, more dangerous route.

### SQ5 — The Söldís Vessel (Act 3, Beat 25 area)

| # | Task | Repo | Tags |
|---|------|------|------|
| 5.5.1 | Write side quest adoc — recover Söldís's lost artifact | `ERA` — `Act-3/` | `side-quest`, `encounter` |
| 5.5.2 | Add encounter to `encounters-act3.adoc` | `ERA` | `encounter` |
| 5.5.3 | Add content to Act 3 director journal | `ACT3` | `side-quest` |
| **VP:** 2 | | | |

**Summary:** Söldís reveals a vessel (container of old fire-magic) was lost in the tunnels near Surt's Forge. Retrieving it strengthens the final ritual and provides a mechanical bonus for Beat 26.

### SQ6 — Eirik's Chamber (Act 2 or Act 3, ties to tunnel plot fix)

| # | Task | Repo | Tags |
|---|------|------|------|
| 5.6.1 | Write side quest adoc — delve into Eirik's sealed chamber in the southern tunnels | `ERA` — place in the act where it's encountered | `side-quest`, `encounter`, `plot-fix` |
| 5.6.2 | Add Rot-Guardian + Tunnel Blight Swarm encounters | `ERA` | `encounter`, `monster` |
| 5.6.3 | Add content to appropriate act director journal | `ACT2` or `ACT3` | `side-quest` |
| 5.6.4 | Create monsters (see §4.2, §4.3) | `ENTITY` | `monster` |
| **VP:** 3 | | | |

**Summary:** The party discovers Eirik's buried focus-stone chamber in the collapsed southern tunnels. A Rot-Guardian protects it. Destroying the corrupted focus-stone cleanses the tunnels and makes them safe for Beat 25's Heitfolk march. Ties directly into Plot Fix A+C.

---

## 6. Plot Hole Fixes 🔴 `plot-fix`

### 6.1 Underground Caves — Why Not Take Them Back? (Fix A+C)

| # | Task | Repo | Tags |
|---|------|------|------|
| 6.1.1 | Add Hildvarð dialogue in Beat 12/13 area explaining southern Heitfolk tunnels were deliberately collapsed after Grafvitnir's forces used them for infiltration | `ERA` — update `12-Rickety-Frets.adoc` or `13-Emergence-Rindgate.adoc` | `plot-fix` |
| 6.1.2 | Mirror the dialogue addition in Act 2 director journal | `ACT2` | `plot-fix` |
| 6.1.3 | Add post-Green-Heart (Beat 22+) note: Kaelen's ember-mark becomes a supernatural beacon that draws Rot in enclosed spaces, making caves dangerous | `ERA` — update `22-The-Green-Heart.adoc` | `plot-fix` |
| 6.1.4 | Mirror in Act 3 director journal | `ACT3` | `plot-fix` |
| 6.1.5 | Eirik's Chamber side quest (SQ6) resolves the tunnel blockage — once the focus-stone is destroyed, tunnels are safe for Beat 25 | Links to §5.6 | `plot-fix` |

---

## 7. Beat Expansions — VP Padding 🟡 `vp-expansion`

Existing beats that are too thin and need additional VP sources.

| # | Beat | Current VP | Change | Repo | Tags |
|---|------|-----------|--------|------|------|
| 7.1 | Beat 15 (Ivory Tower) | 0 mandatory | Make the Keeper Guardian encounter mandatory (not skippable), add 2–3 VP | `ERA`: update `15-The-Ivory-Tower.adoc`. `ACT2`: update director journal Part 2 | `vp-expansion`, `encounter` |
| 7.2 | Beat 23 (The Ashen Road) | 1 VP | Expand with refugee escort complication, add checkpoint negotiation, raise to 3–4 VP | `ERA`: update `23-The-Ashen-Road.adoc`. `ACT3`: update director journal | `vp-expansion` |
| 7.3 | Beat 25 (The Last Flame) | Current VP | Add Söldís vessel recovery tie-in (SQ5 payoff), potential +1 VP | `ERA`: update `25-The-Last-Flame.adoc`. `ACT3`: update director journal | `vp-expansion` |

---

## 8. VP Tracking Updates 🟡

| # | Task | Repo | Tags |
|---|------|------|------|
| 8.1 | Update `reference/VP-RUNNING-TOTALS.md` with all new beats (20a, 20b, 23a) and revised VP for expanded beats | `ERA` | `vp-expansion` |
| 8.2 | Update VP Status banners in each beat's director journal page (the inline "VP Status — Entering This Beat" boxes) to reflect new cumulative totals | `ACT1`, `ACT2`, `ACT3` | `vp-expansion` |
| 8.3 | Verify final VP at Beat 26 reaches target range (~120–135 for Level 8–9) | All | `vp-expansion` |

---

## 9. Kaelen Arc Integration 🟡

Verify and update Kaelen's character arc references across all three acts to reflect the new emotional beats:

| Phase | Beat(s) | Arc State | Task |
|-------|---------|-----------|------|
| Guilt | 7 (The Reluctant Hearth) | "I abandoned the Ember" | Already written — verify consistency |
| Knowledge | 12 (Rickety Frets) | Layer 2 begins | Already written — verify |
| Acceptance | 19 (The Emberwell) | Layer 3 — commune with the Ember's residue | Already written — verify |
| Betrayal | **20a** (Keeper's Confession) | Learns Eirik was the traitor, Ember pushed her out | **NEW — write** |
| Understanding | **20b** (Ember's Gift) | Root-memory: Ember held the door for 12 years | **NEW — write** |
| Sacrifice | 26 (Grafvitnir Rises) | Full circle — she is the flame | Verify Beat 26 references new arc knowledge |

---

## 10. Overview / Cross-Cutting Updates 🟢

| # | Task | Repo | Tags |
|---|------|------|------|
| 10.1 | Update `Act-1/00-Act-1-Overview.adoc` beat table — rename Beat 6 | `ERA` | `rename` |
| 10.2 | Update `Act-2/00-Act-2-Overview.adoc` — add side quest references | `ERA` | `side-quest` |
| 10.3 | Update `Act-3/00-Act-3-Overview.adoc` — add Beats 20a, 20b, 23a + side quest references | `ERA` | `new-beat`, `side-quest` |
| 10.4 | Update `01-Restore-the-Flame-MODULE.adoc` master beat table with all new entries and VP totals | `ERA` | `new-beat`, `vp-expansion` |
| 10.5 | Update module.json `version` in each Svellheim module after changes merge | `ACT1`, `ACT2`, `ACT3`, `WORLD`, `ENTITY` | |

---

## Summary — Task Count by Repo

| Repo | Estimated Tasks |
|------|----------------|
| `Era-of-Embers` (adocs, references) | ~35 |
| `Svellheim-Act1` (journals, montages, verification) | ~6 |
| `Svellheim-Act2` (journals) | ~6 |
| `Svellheim-Act3` (journals, montages, negotiations) | ~10 |
| `svellheim-world` (gazetteer) | ~2 |
| `Svellheim-Entities` (NPCs, monsters) | ~10 |
| **Total** | **~69** |

## Estimated VP Impact

| Source | VP Added |
|--------|----------|
| Beat 20a (Keeper's Confession) | +3–4 |
| Beat 20b (Ember's Gift) | +2–3 |
| Beat 23a (Night of Hunters) | +3–4 |
| Side Quests (SQ1–SQ6, 6 quests × 2–3 avg) | +13–15 |
| Beat Expansions (15, 23, 25) | +4–6 |
| **Total additional VP** | **+25–32** |
| **Projected VP at Beat 26** | **~93–100** |
| **Projected Level at Beat 26** | **~6–7** |

> **Note:** Reaching Level 8–9 (~120–135 VP) will require further expansion beyond what's listed here — either additional side quests, expanding existing beat VP awards, or adding more structural beats. This task list covers the designs agreed upon so far and gets the campaign significantly closer to the target.
