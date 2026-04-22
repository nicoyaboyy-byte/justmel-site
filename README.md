# JustMel LLC — Website

Professional marketing site for **JustMel LLC**, a licensed general contractor based in Kearny, NJ. Built with [Astro](https://astro.build) and deployed via GitHub Pages.

## Business details

- **Services:** Siding · Roofing · Windows · Gutters
- **Phone:** 973-698-0608
- **WhatsApp:** [wa.me/19736980608](https://wa.me/19736980608)
- **License:** NJ #13VH10743600 — Fully Insured
- **Service area:** Kearny, NJ & surrounding (Hudson / Essex / Bergen counties)

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321/justmel-site/

## Building for production

```bash
npm run build     # outputs to ./dist
npm run preview   # serve the built site locally
```

## Deployment (GitHub Pages)

This repo auto-deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

### First-time setup

1. Push this repo to GitHub.
2. In the repo, go to **Settings -> Pages**.
3. Under **Source**, select **GitHub Actions**.
4. Push to `main` (or re-run the latest workflow in **Actions**).
5. The site will be live at: `https://nicoyaboyy-byte.github.io/justmel-site/`

### Attaching a custom domain later

When the business gets a real domain:

1. Buy the domain (Namecheap, Cloudflare, etc.).
2. In **Settings -> Pages**, enter the domain under **Custom domain** and save.
3. At the registrar, add these DNS records:
   - `A` records pointing to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` pointing to `nicoyaboyy-byte.github.io`
4. Edit `astro.config.mjs`: change `site` to the new domain and set `base: '/'`.
5. Commit and push.

## Project structure

```
src/
├── layouts/
│   └── Layout.astro          # Base HTML, fonts, SEO meta
├── components/
│   ├── Header.astro          # Top bar + sticky nav
│   ├── Hero.astro            # Above-the-fold
│   ├── Services.astro        # 4-service grid (Siding/Roofing/Windows/Gutters)
│   ├── About.astro           # About block with floating stat
│   ├── WhyUs.astro           # 6 reasons to choose JustMel
│   ├── Gallery.astro         # Placeholder project tiles (swap for real photos)
│   ├── Testimonials.astro    # Customer reviews (placeholder copy)
│   ├── Contact.astro         # Info block + lead form
│   ├── Footer.astro          # Site footer
│   └── FloatingCTA.astro     # Sticky WhatsApp button
├── pages/
│   └── index.astro           # Homepage — assembles every component
└── styles/
    └── global.css            # Design tokens, typography, buttons
```

## Things to swap in later

- [ ] Real project photos in `src/components/Gallery.astro` (drop into `public/images/`)
- [ ] Real customer testimonials in `src/components/Testimonials.astro`
- [ ] Hero background image (optional — currently a gradient)
- [ ] Logo file (currently uses text wordmark)
- [ ] Real "years in business" stat (hardcoded `15+`)
- [ ] Contact form backend — currently shows an alert. Hook up [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) for email delivery.
- [ ] Custom domain + SSL

## Design system

- **Navy** `#1a2b5c` — primary brand color
- **Teal** `#4fb6c4` — accent from logo roof
- **Playfair Display** — headings (serif, premium feel)
- **Inter** — body / UI
