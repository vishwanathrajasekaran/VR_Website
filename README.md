# vishwanathrajasekaran.in

Personal portfolio — replaces the old static hub at the root domain. React +
Vite, deployed to Vercel same as everything else.

## Structure

```
index.html
src/
  App.jsx              page shell — rail + all sections in order
  data.js              ALL content lives here: bio, skills, projects, experience
  index.css            design tokens + all styles (no CSS-in-JS, no Tailwind)
  useScrollSpy.js       tracks which section is in view, drives the rail
  components/
    Rail.jsx            desktop sticky nav + mobile top strip
    Hero.jsx             terminal boot animation + name/title
    About.jsx            bio paragraphs + tagline strip
    GithubPanel.jsx       live fetch from api.github.com (client-side, no key needed)
    Stack.jsx             skills, grouped and tagged
    Projects.jsx           project list with live/building status
    Experience.jsx         career timeline
    Contact.jsx             LinkedIn/GitHub + footer
public/
  assets/shield.png    the crest mark
  favicon.png, apple-touch-icon.png, site.webmanifest
```

## Editing content

Everything text-based — bio, skills, project descriptions, links, career
history — lives in `src/data.js`. Edit that file for content changes; you
shouldn't need to touch a component unless you're changing layout or adding
a new section.

To add or update a project, add/edit an entry in the `projects` array:
```js
{
  name: "Project Name",
  status: "live" | "building",
  statusLabel: "Live" | "In progress",
  description: "One or two sentences.",
  stack: ["Tech", "Tags"],
  url: "https://subdomain.vishwanathrajasekaran.in",
  repo: "https://github.com/vishwanathrajasekaran/repo-name",  // or null
}
```

## Local dev

```
npm install
npm run dev
```

## Deploy

```
npm run build
```
produces `dist/`. On Vercel: framework preset "Vite", build command
`npm run build`, output directory `dist`. Push to a feature branch, open a
PR, merge to `main` — Vercel auto-deploys same as your other projects.

Point `vishwanathrajasekaran.in` at this project (replacing the old static
hub). Subdomains (`movies.`, `reading.`, `home.`, `ui-playground.`) are
untouched — separate projects, linked from here.

## Known gaps

- `Home Console` and `UI Automation Playground` project entries don't have
  a `repo` link yet — add the GitHub URLs in `src/data.js` once those repos
  are public/ready to link.
