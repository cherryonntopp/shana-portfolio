# shana's portfolio ✿

built with react, vite, tailwind css, framer motion, and react router.

## run it

```bash
npm install     # first time only
npm run dev     # opens a local preview at http://localhost:5173
npm run build   # makes the final site in dist/
```

## where things live

| want to change...            | edit this file                    |
| ---------------------------- | --------------------------------- |
| name, tagline, bio, links    | `src/data/site.js`                |
| projects (add / edit)        | `src/data/projects.js`            |
| colors & fonts               | `src/index.css` (the `@theme` block) |
| videos, pdfs, images         | put them in `public/media/`       |
| homepage layout              | `src/pages/Home.jsx`              |
| project detail page layout   | `src/pages/ProjectPage.jsx`       |

### adding a project
1. drop its demo file (if any) into `public/media/`
2. copy one `{ ... }` block in `src/data/projects.js`, paste it, and change the fields

it'll show up on the homepage and get its own page at `/projects/<slug>`.

## deploying
vercel or netlify: import the repo; the defaults (`npm run build`, output `dist`) just work.
for pretty urls like `/projects/...` to survive a page refresh, add a rewrite to `index.html`
(netlify: a `public/_redirects` file containing `/* /index.html 200`; vercel handles vite apps automatically).
