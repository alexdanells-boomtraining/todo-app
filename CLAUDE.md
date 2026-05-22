# Habit Tracker

A single-screen habit tracking app. No build step — open `index.html` directly in Chrome.

## Stack

- **HTML**: `index.html` — structure and markup only
- **CSS**: `style.css` — all styles
- **JS**: `app.js` — all logic and DOM interaction
- **Storage**: `localStorage` — all persistence, no backend

## Conventions

- One file per concern. Do not split any of these three files further.
- Do not add pages or routes. Everything lives on one screen.
- Do not add external libraries or packages without asking first.
- No build tools, bundlers, transpilers, or package managers.
- No frameworks (React, Vue, etc.).
- JS must run natively in Chrome — use modern ES2020+ features freely, no polyfills needed.

## Running the app

Open `index.html` in Chrome. No server required.

## Data

All state is persisted in `localStorage`. Keys should be namespaced with a `habitTracker_` prefix to avoid collisions.
