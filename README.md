# Mohammad AbuJaber — Portfolio

My personal portfolio, built with Next.js, TypeScript and Tailwind CSS and deployed as a static site on GitHub Pages.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Script          | What it does                               |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start the dev server                       |
| `npm run build` | Build the static site into `out/`          |
| `npm run lint`  | Run ESLint                                 |

## Project structure

```
src/
  app/            layout, page, global styles, favicon
  assets/         images imported by components
  components/
    layout/       header and footer
    sections/     one component per page section
    ui/           small reusable building blocks
  data/           all the content: profile, experience, skills, education, projects
  lib/            helpers
```

Most text lives in `src/data`, so updating the site rarely means touching a component.

## Deploying to GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds and publishes the `out/` folder.

The workflow sets the base path automatically, so the site works both at `username.github.io` and at `username.github.io/repo-name`.

### Contact form

GitHub Pages only serves static files, so the form sends messages through [Formspree](https://formspree.io).
Create a form there, then add its ID as a repository variable named `FORMSPREE_ID`
(**Settings → Secrets and variables → Actions → Variables**). Without it, the form opens the visitor's email app instead.
