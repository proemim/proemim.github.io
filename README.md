# proemim.github.io

Personal website for **Rémi Mehtali**.

Live at **https://proemim.github.io/**.

## Stack

Plain HTML, CSS, and a small amount of vanilla JavaScript. No build step, no framework, no package manager. GitHub Pages serves the repository root directly.

## Local preview

```bash
cd proemim.github.io
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
.
├── index.html              # all content
├── assets/
│   ├── css/style.css       # simple layout, light/dark colours
│   ├── js/main.js          # theme toggle and footer year
│   └── img/
│       ├── avatar.png
│       ├── favicon.svg
│       └── og-card.png     # 1200 × 630 social preview
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## Editing

- Replace the project and tool placeholders in `index.html` when they are ready.
- Update the About and Contact text in `index.html`.
- Replace `assets/img/avatar.png` with a square photo if wanted.
- Colours are defined at the top of `assets/css/style.css`.
- Replace `assets/img/og-card.png` if the name or subtitle changes.

## Deployment

The repository is named `proemim.github.io`, so GitHub Pages publishes it at the account root.

1. Push changes to `main`.
2. Pages should be configured as **Deploy from a branch → `main` → `/ (root)`**.
3. The site updates after the Pages build completes.

## Contact

- Email: [remimehtali@gmail.com](mailto:remimehtali@gmail.com)
- GitHub: [@proemim](https://github.com/proemim)
- LinkedIn: [Rémi Mehtali](https://www.linkedin.com/in/r%C3%A9mi-mehtali-955739257)
