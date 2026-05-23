# EPH Portfolio — React + Vite

A minimalist, Apple-inspired single-page portfolio. Built with **React 18**, **Vite**, and hand-written CSS — no TypeScript, no Tailwind, no CSS frameworks.

## Run locally

You'll need [Node.js](https://nodejs.org) 18 or newer.

```bash
cd app
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

The optimised, static site lands in `app/dist/`. You can preview the built output with `npm run preview`.

## Deploy

The `dist/` folder is a plain static site — drop it on any host.

- **Vercel** — `vercel` in the `app/` folder, accept the defaults.
- **Netlify** — drag-and-drop `dist/` onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo and set Build Command: `npm run build`, Publish Directory: `dist`.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package.

## Project structure

```
app/
├── index.html              # Vite entry — loads fonts + mounts React
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # Layout + scroll-spy nav highlight
    ├── styles.css          # All styles (design tokens at the top)
    ├── data.js             # ⭐ Edit me — all content lives here
    └── components/
        ├── Arrow.jsx       # Reused link-arrow svg
        ├── Nav.jsx         # Sticky translucent nav
        ├── Hero.jsx        # Intro + status card + tech marquee
        ├── Projects.jsx    # Project card grid
        ├── Experience.jsx  # Filterable work / education timeline
        ├── Beyond.jsx      # Extracurriculars grid
        └── Footer.jsx      # CTA + contact + meta
```

## Editing content

**Everything you'd want to change is in `src/data.js`.** Open it and edit:

- `projects` — title, blurb, stack, demo URL, GitHub URL, year, glyph
- `experience` — work + education rows (the `kind` field, `'work'` or `'edu'`, drives the filter tabs)
- `extras` — clubs, mentoring, hobbies
- `contact` — email, GitHub handle/URL, phone, LinkedIn, CV URL
- `techMarquee` — the looping list under the hero

Hero copy and the big "let's talk" line in the footer live in their components (`Hero.jsx`, `Footer.jsx`) — search for the strings.

## Design tokens

Open `src/styles.css`. The first block is `:root { ... }` — change `--accent`, `--bg`, `--ink`, fonts, radii, etc. Everything else cascades.

## Notes

- Fonts (Inter Tight, Inter, JetBrains Mono) load from Google Fonts via `<link>` tags in `index.html`. Swap or self-host as you prefer.
- The nav uses an `IntersectionObserver` (in `App.jsx`) for the active-link highlight.
- The experience filter is local component state — no router, no global state.
