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
│   ├── css/style.css       # layout, light/dark colours, responsive rules
│   ├── js/main.js          # theme, sketch tabs, active nav, copy email
│   └── img/
│       ├── avatar.png
│       ├── favicon.svg
│       └── og-card.png     # 1200 × 630 social preview
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## Layout

- Sticky left overview with avatar, name, short description, social links, navigation, and the theme toggle.
- Main column with a small hero card, the interactive sketch, About, placeholder Projects and Tools, and Contact.
- The sketch has three tabs: **Reads**, **Mutations**, and **Ensembles**. They switch between small conceptual diagrams and are keyboard accessible.
- Responsive: the left overview becomes a top profile block on narrow screens.

## Editing

- Replace the project placeholders in `index.html` with real project cards.
- Replace the tool placeholders with real tools or methods.
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
