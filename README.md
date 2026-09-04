# Honeylie Patricio, RN — Healthcare & Operations Virtual Assistant Portfolio

A modern, responsive portfolio website built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS.

## Before you launch

1. **Add your photo** — put a real photo at `public/images/profile.jpg` (see `public/images/README.txt`).
2. **Update your contact details** — open `src/lib/site.ts` and replace the placeholder email, LinkedIn, Upwork, and Facebook links with your real ones.
3. **Update your domain** — once you connect a custom domain, update `url` in `src/lib/site.ts` so SEO tags and the sitemap point to the right place.
4. **Edit your content** — all page copy (services, experience, skills, portfolio, FAQ) lives in one place: `src/data/content.ts`. Edit text there instead of hunting through page files.

## Project structure

```
src/
  app/            Pages (App Router) — one folder per route
    sitemap.ts    Auto-generated sitemap.xml
    robots.ts     Auto-generated robots.txt
  components/     Reusable UI building blocks
  data/
    content.ts    All page copy — services, experience, skills, portfolio, FAQ
  lib/
    site.ts       Site name, nav links, contact placeholders, domain
    metadata.ts   Helper for building consistent SEO tags per page
public/
  images/         Static images (add profile.jpg here)
```

## 1. Install

Requires [Node.js](https://nodejs.org/) 18.18 or later.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Visit http://localhost:3000 in your browser. The page auto-reloads as you edit files.

## 3. Build for production

```bash
npm run build
npm start
```

`npm run build` compiles and type-checks the whole site; `npm start` runs the production build locally so you can double-check it before deploying.

## 4. Deploy to GitHub

If you haven't already, initialize a git repository and push it to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME/YOUR-REPO-NAME` with your actual GitHub repository (create an empty one first at github.com/new).

## 5. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (you can sign in with your GitHub account).
2. Click **Add New → Project**.
3. Select the GitHub repository you just pushed.
4. Vercel auto-detects Next.js — leave the default build settings as-is.
5. Click **Deploy**.

Within a minute or two, Vercel gives you a live URL like `your-project.vercel.app`. Every time you push to `main` on GitHub, Vercel automatically redeploys.

## 6. Connect a custom domain later

1. In your Vercel project, go to **Settings → Domains**.
2. Enter your domain (e.g. `haniva.com`) and click **Add**.
3. Vercel shows you DNS records to add at your domain registrar (usually an `A` record or `CNAME`).
4. Add those records at your registrar (GoDaddy, Namecheap, Google Domains, etc.).
5. Once DNS propagates (usually minutes to a few hours), your site is live on your custom domain with automatic HTTPS.
6. Don't forget to update `url` in `src/lib/site.ts` to your new domain and redeploy, so SEO metadata and the sitemap are correct.

## Notes on the contact form

The contact form on `/contact` opens the visitor's email app with a pre-filled message addressed to the email in `src/lib/site.ts` — it does not send email directly from the page (no backend/server required). If you'd like true in-page form submission later, you can connect a service like Formspree, Resend, or a custom API route.

## SEO

The site includes:
- Descriptive page titles and meta descriptions per page
- Canonical URLs
- Open Graph and Twitter card metadata
- An auto-generated `sitemap.xml` and `robots.txt`
- JSON-LD structured data: `Person`, `WebSite`, `Service`, `FAQPage`, and `BreadcrumbList`

All of this pulls from `src/lib/site.ts` and `src/data/content.ts`, so keeping those files accurate keeps your SEO accurate too.
