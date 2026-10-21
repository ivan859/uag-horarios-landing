# Horarios UAG — landing page

Static landing page for the Horarios UAG kickoff (Spanish). Plain HTML, CSS and JS; no build step.

```
site/
  index.html        page markup
  css/styles.css    styles (light and dark theme via prefers-color-scheme)
  js/main.js        galleries, calendar scroll steps, nav highlight
  img/*.webp        screen captures (sample data)
  .nojekyll
.github/workflows/pages.yml   deploys site/ to GitHub Pages
```

## Preview locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish to GitHub Pages

1. Create a repository on GitHub and push this folder to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Horarios UAG landing page"
   git branch -M main
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```

2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow runs on every push to `main` that touches `site/` (or manually from the **Actions** tab). The URL appears in the workflow run and in Settings → Pages, usually `https://<user>.github.io/<repo>/`.

All paths are relative, so the page works under the `/<repo>/` sub-path without changes.
