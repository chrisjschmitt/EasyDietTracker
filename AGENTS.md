# EasyDiet Tracker

## Cursor Cloud specific instructions

This is a zero-dependency vanilla HTML/CSS/JS Progressive Web App. There is no package manager, no build step, and no backend.

### Running the app

Serve the project root with any static HTTP server. A Service Worker requires HTTP (not `file://`):

```
python3 -m http.server 8080
```

Then open `http://localhost:8080` in Chrome.

### Running tests

Tests run inside the browser DevTools console (not via a CLI test runner). Open the console at `http://localhost:8080` and execute `runTests()`. All 11 tests should pass. See `README.md` § "Running Tests" for details.

### Linting / formatting

No linter or formatter is configured. Static analysis is not part of the workflow.

### Git hooks

A pre-commit hook lives at `.githooks/pre-commit`. It starts a temporary HTTP server on port 8081 to verify the server starts, then exits. To enable it: `git config core.hooksPath .githooks`.

### Key files

| File | Purpose |
|------|---------|
| `index.html` | Single-page app entry |
| `app.js` | All application logic (~129 KB) |
| `db.js` | IndexedDB helper |
| `sw.js` | Service Worker for offline caching |
| `tests.js` | In-browser test suite (`runTests()`) |
| `styles.css` | All styles |
| `default-data.csv` | Built-in food database (70+ categories) |
| `food-database.json` | Searchable food database (280+ items) |
