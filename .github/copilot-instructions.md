# svellheim-world — Copilot Instructions

World reference data and workspace configuration for the Svellheim campaign.

## File Layout
- `data/player-journals/` — World reference (gazetteer, gods, calendar, languages, imbuing enhancements)
- `data/director-journals/` — GM cheatsheets (downtime rules, montage rules, negotiation rules)
- `.vscode/mcp.json` — MCP server configuration for the workspace
- `full-svellheim-workspace.code-workspace` — Multi-root workspace definition

## Mandatory Workflows

### Creating World Content
- `generate_journal_entry` for new journal pages
- `validate_document` for any JSON document
- `build_pack` to compile packs after data changes

### Searching World Content
- `search_campaign_entities` to find world entities
- `search_campaign_docs` to find narrative source docs

## Conventions
- This repo hosts the workspace `.code-workspace` file — coordinate cross-repo work from here
- Player journals are player-visible world lore; director journals are GM-only references
- Encoding: UTF-8 without BOM
