# vishwanathrajasekaran.in

Landing page for the main domain. Plain static HTML/CSS — no build step, no
framework. Links out to the subdomains, which are separate repos/Vercel
projects of their own.

## Structure

```
index.html      the page
style.css       all styling
assets/shield.png   crest mark, cropped from the source logo
favicon.png, apple-touch-icon.png
```

## Deploy

Push to `main` (or merge a feature branch into it) and Vercel auto-deploys —
no build command or output directory needed, it serves the repo root as-is.

In Vercel: point this project at `vishwanathrajasekaran.in`. Each subdomain
(`movies.`, `reading.`, `ui-playground.`, …) stays on its own separate Vercel
project/domain, same as today.

## Adding another subdomain to the directory

Copy one `<a class="entry">…</a>` block in `index.html`, and fill in:
- `href` — the subdomain URL
- `entry__title` — short name
- `entry__desc` — one line, plain language, what it does
- `entry__url` — the subdomain shown as text

No other files need to change.
