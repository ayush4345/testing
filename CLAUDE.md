# Agent Guidelines

## Memory Protocol

As you complete work, store key learnings so future agents don't need to re-discover them:

```bash
bd remember "what you learned" --key descriptive-key
```

**What to capture:**
- How the codebase is structured (e.g. "entry point is src/main.jsx, routing in src/App.jsx")
- Gotchas and non-obvious behavior (e.g. "vite config aliases @ to /src")
- Decisions made and why (e.g. "chose React Router v6 over v5 for future-compat")
- Patterns used (e.g. "components use named exports, not default")
- Commands that work (e.g. "npm run dev starts on port 5173")

**When to save:** Before calling `gt done`, after any non-trivial work session.

**Search existing memories first:**
```bash
bd memories              # list all
bd memories "keyword"    # search
```

This builds a shared knowledge base across all agents working in this rig.
