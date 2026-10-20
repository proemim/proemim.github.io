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
- Main column with a small hero card, the interactive sketch, About, Background, Projects, and Contact.
- The sketch has three tabs: **Reads**, **Mutations**, and **Ensembles**. They switch between small conceptual diagrams and are keyboard accessible.
- Background presents research projects as short descriptions, plus education and languages.
- Projects currently features the rG4 project with Angelita at IBMC Strasbourg, followed by two placeholders.
- Responsive: the left overview becomes a top profile block on narrow screens.

## Editing

- Update the rG4 project card and replace the remaining placeholders in `index.html` when project details change.
- Update the research projects, education, and languages when they change.
- Update the About and Contact text in `index.html`.
- Replace `assets/img/avatar.png` with a square photo if wanted.
- Colours are defined at the top of `assets/css/style.css`.
- Replace `assets/img/og-card.png` if the name or subtitle changes.

## Public content

The site deliberately omits the phone number, home address, date of birth, and reference contact details from the CV. Only public-facing education, research experience, and language levels are listed.

## Deployment

The repository is named `proemim.github.io`, so GitHub Pages publishes it at the account root.

1. Push changes to `main`.
2. Pages should be configured as **Deploy from a branch → `main` → `/ (root)`**.
3. The site updates after the Pages build completes.

## Contact

- Email: [remimehtali@gmail.com](mailto:remimehtali@gmail.com)
- GitHub: [@proemim](https://github.com/proemim)
- LinkedIn: [Rémi Mehtali](https://www.linkedin.com/in/r%C3%A9mi-mehtali-955739257)
