# Inder Sawhney — Portfolio

Personal resume/portfolio site for **Inder Sawhney**, QA/QE Leader & Product Delivery Leader with 20+ years of experience in enterprise software delivery, quality engineering transformation, and large-scale modernization programs.

**Live site:** https://indersawhney.github.io *(update if hosted elsewhere)*

## What's inside

```
├── index.html          # Page structure and content
├── style.css           # Design system, layout, and responsive styles
├── script.js           # Scroll-reveal animations and footer year
├── inder-headshot.jpg  # Web-optimized headshot
└── README.md
```

## Design notes

- **Palette** — drawn from the headshot: charcoal (`#101820`), cool white (`#F4F7FA`), steel blue (`#7FB0D8` / `#2E5F8A`), with green (`#35A87A`) reserved exclusively for "pass" status signals.
- **Typography** — Schibsted Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels and metadata), loaded from Google Fonts.
- **Signature element** — the experience section is rendered as a delivery pipeline: each role is a stage on a vertical rail, with the current position marked by a pulsing `ACTIVE` node.
- No frameworks or build step — plain HTML, CSS, and vanilla JavaScript.
- Responsive down to mobile, keyboard-focus styles included, and `prefers-reduced-motion` is respected.

## Running locally

No build required. Either open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a repository named `indersawhney.github.io` (or any repo name).
2. Push all files to the root of the `main` branch.
3. In the repo: **Settings → Pages → Source → Deploy from a branch**, select `main` / root.
4. The site goes live at `https://<username>.github.io/` (or `https://<username>.github.io/<repo-name>/`).

## Updating content

- **Roles and experience** — edit the `.stage` blocks in the Experience section of `index.html`.
- **Stats** — the three dashboard tiles live in the `.dash` section.
- **Skills** — each `.skill-row` in the Skills section holds one category of chips.
- **Contact info** — links are in the `.contact` footer.
- **Colors and fonts** — all design tokens are CSS variables at the top of `style.css`.

## Contact

- Email: imssawhney@gmail.com
- LinkedIn: [linkedin.com/in/indersawhney](https://linkedin.com/in/indersawhney)
- Location: Parkland, FL
