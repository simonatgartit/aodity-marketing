# aodity-marketing — Claude Instructions

## What this repo is
Static landing page for the Aodity product. Webpack bundles `src/` → `dist/`. Deployed to Netlify via GitHub Actions on push to main.

## Stack
- Vanilla HTML/CSS (no JS framework)
- Webpack + CopyWebpackPlugin (copies `src/*.html` and `src/*.css` to `dist/`)
- Netlify for hosting (domain: aodity.se)

## Build
```bash
npm install
npm run build        # production
npm run build:dev    # development (source maps)
```

## Deploy
Push to `main` → GitHub Actions → Netlify. No API_URL or other secrets needed — this is a pure static site. Only secrets required: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`.

## Related repos
- **aodity-backend** (`simonatgartit/aodity-backend`) — Laravel API
- **aodity-web** (`simonatgartit/aodity-web`) — Tenant-admin and superadmin portals
- **aodity-excel-addin** (`simonatgartit/aodity-excel-addin`) — Office.js Excel add-in

## Design tokens
Defined as CSS variables in `src/index.html`:
- `--blue`: #0066FF (brand accent)
- `--dark`: #111 (headings/text)
- `--mid`: #444 (body)
- `--light`: #f5f7fa` (backgrounds)
- Font: Inter via Google Fonts

## Conventions
- All styles inline in `<style>` inside `index.html` — no separate CSS file unless the stylesheet grows large
- Mobile-first responsive, breakpoint at 768px
- CTAs use `mailto:hej@aodity.se` until a contact form is added
