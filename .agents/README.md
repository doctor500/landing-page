# Project Context Index

This folder is the canonical context for this project — the single place agents read from
and write to. Platform shims (CLAUDE.md, .cursorrules, GEMINI.md, .windsurfrules,
.aider.conf.yml) and AGENTS.md all point here.

## Router Table

| Task | Read |
|------|------|
| Orientation | PROJECT.md |
| Design / architecture | ARCHITECTURE.md |
| Coding standards | CONVENTIONS.md |
| Prior decisions | DECISIONS.md |
| Session state / lessons | memory/memory.md |
| Deep reference | docs/README.md |

## Write Rules

- Facts live in exactly one file. Move + update, never copy.
- Append to DECISIONS.md for decisions with rationale.
- Update memory/memory.md at session end (state, blockers, lessons).
- Never create loose `.md` files at repo root for context — extend this folder.
