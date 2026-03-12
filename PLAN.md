# Benjamin Townsend Portfolio — Website Implementation Plan

> **Status:** Documentation only. No code has been written yet.
> **Hosting Target:** GitHub Pages (`benjaminarthurt.github.io/ben-townsend` or custom domain `bentownsend.com`)
> **Stack:** Plain HTML5, CSS3, Vanilla JavaScript — no build tools required.
> **Purpose:** Personal portfolio, consulting services showcase, and technical blog.

---

## Table of Contents

1. [Goals & Guiding Principles](#1-goals--guiding-principles)
2. [Site Architecture & URL Structure](#2-site-architecture--url-structure)
3. [Page Inventory & Content Mapping](#3-page-inventory--content-mapping)
4. [Design System](#4-design-system)
5. [HTML Structure & Component Library](#5-html-structure--component-library)
6. [CSS Strategy](#6-css-strategy)
7. [JavaScript Functionality](#7-javascript-functionality)
8. [SEO Strategy](#8-seo-strategy)
9. [Media Handling & Optimization](#9-media-handling--optimization)
10. [Redirect Strategy](#10-redirect-strategy)
11. [GitHub Pages Deployment](#11-github-pages-deployment)
12. [Implementation Phases](#12-implementation-phases)
13. [File-System Layout](#13-file-system-layout)

---

## 1. Goals & Guiding Principles

### Primary Goals
- Migrate all content from legacy Drupal CMS (`bentownsend.com`) to a modern static site.
- Establish Benjamin Townsend as an expert in software development, consulting, and amateur radio.
- Present a professional, clean portfolio with clear calls-to-action for consulting inquiries.
- Preserve every legacy URL via client-side redirects for SEO and existing links.
- Showcase technical writing (articles on home lab, bird identification, AI/birdwatching).

### Design Principles

| Principle | Rationale |
|-----------|-----------|
| **Professional & minimalist** | Portfolio sites benefit from clean, uncluttered design. Avoid unnecessary decoration. |
| **Content-first** | Detailed CV, consulting services, and technical articles are more valuable than flashy visuals. |
| **Accessible** | WCAG 2.1 AA minimum — proper heading hierarchy, color contrast, keyboard navigation. |
| **Responsive** | Mobile, tablet, and desktop. Portfolio must look polished on all devices. |
| **Fast** | Static files served from GitHub Pages. No JavaScript framework; no runtime dependencies. |
| **Personable** | Mix professional credentials with genuine interests (photography, amateur radio, birdwatching). |

---

## 2. Site Architecture & URL Structure

### Domain & Hosting

Two deployment options:

| Option | URL | Setup |
|--------|-----|-------|
| **GitHub Pages default** | `https://benjaminarthurt.github.io/ben-townsend/` | Configure Pages to deploy from `main` root |
| **Custom domain** | `https://bentownsend.com/` | Add `CNAME` file, configure DNS A records |

**Preferred:** Custom domain `bentownsend.com` to maintain existing SEO and brand continuity.

### Proposed URL Structure

```
/                              ← index.html  (Home)
/about/                        ← about/index.html
/cv/                           ← cv/index.html  (Resume/CV)
/consulting/                   ← consulting/index.html  (Dispatch Dataworks LLC)

/articles/                     ← articles/index.html  (Blog hub)
/articles/home-labbing/        ← articles/home-labbing/index.html
/articles/birdwatching-ai/     ← articles/birdwatching-ai/index.html

/birds/                        ← birds/index.html  (Bird species directory)
/birds/blue-jay/               ← birds/blue-jay/index.html
/birds/hairy-woodpecker/       ← birds/hairy-woodpecker/index.html
/birds/white-breasted-nuthatch/← birds/white-breasted-nuthatch/index.html

/archive/                      ← archive/index.html  (Category/tag archive)
```

> **URL Strategy:** Clean, human-readable paths with no file extensions or `index.php`. GitHub Pages automatically serves `index.html` for directory requests.

---

## 3. Page Inventory & Content Mapping

### 3.1 Core Pages (9 pages)

| Page | Source File | Content | Purpose |
|------|------------|---------|---------|
| **Home** | `content/index.md` | Headline, intro, featured projects, CTA | First impression; drive consulting inquiries |
| **About** | `content/about.md` | Benjamin's background, credentials, interests | Build credibility and personal connection |
| **CV / Resume** | `content/cv.md` | Full employment history, education, skills, certifications | Detailed professional profile |
| **Consulting** | `content/consulting.md` | **UPDATED** Dispatch Dataworks LLC services, contact, case studies | Primary business conversion page |
| **Articles Hub** | `content/article_*.md` (2 main articles) | List of technical blog posts | Content marketing hub |
| **Article: Home Labbing** | `content/article_home-labbing-14.md` | Deep dive into home lab setup, networking, virtualization | Thought leadership |
| **Article: Birdwatching AI** | `content/article_enhancing-birdwatching-ai-technology-13.md` | Using AI/ML for bird identification | Showcase AI expertise + personal passion |
| **Birds Directory Hub** | `content/birds.md` | Overview of bird species pages | Collection intro |
| **Bird Species Pages** | `content/birds_*.md` (3 species) | Blue Jay, Hairy Woodpecker, White-Breasted Nuthatch with photos | Combine photography + field guide |

### 3.2 Article Pages (2 main + 20+ referenced)

| Article | Source File | Content Type |
|---------|------------|--------------|
| Home Labbing 2024 | `content/article_home-labbing-14.md` | Technical article with code examples, hardware reviews |
| Birdwatching AI | `content/article_enhancing-birdwatching-ai-technology-13.md` | Case study mixing AI/ML with ornithology |
| [Legacy Articles] | `content/node_*.md` (8 files) | Older posts, archived for completeness |

### 3.3 Bird Species Pages (3 main pages)

| Species | Source File | Content |
|---------|------------|---------|
| Blue Jay | `content/birds_blue-jay.md` | Photo gallery, field guide info, local sightings |
| Hairy Woodpecker | `content/birds_male-hairy-woodpecker.md` | Identification tips, habitat info, photos |
| White-Breasted Nuthatch | `content/birds_white-breasted-nuthatch.md` | Behavior notes, conservation status, photos |

### 3.4 Archive / Category Pages

Legacy Drupal taxonomy pages (30+ category pages) collapsed into optional `/archive/` index:

| Page | Content |
|------|---------|
| `/archive/` | List of all legacy Drupal categories (for SEO and discoverability) |

---

## 4. Design System

### 4.1 Color Palette

Minimal, professional palette inspired by Benjamin's technical background:

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#2C3E50` | Deep navy — headers, primary CTAs, accents |
| `--color-primary-light` | `#34495E` | Slightly lighter navy for hover states |
| `--color-accent` | `#E74C3C` | Vibrant red — important links, highlights, code blocks |
| `--color-accent-alt` | `#27AE60` | Green — secondary highlights, success states |
| `--color-surface` | `#FFFFFF` | Main background |
| `--color-surface-alt` | `#ECF0F1` | Code blocks, quote backgrounds |
| `--color-border` | `#BDC3C7` | Dividers, card outlines |
| `--color-text-primary` | `#2C3E50` | Body text (matches primary) |
| `--color-text-secondary` | `#7F8C8D` | Captions, metadata |
| `--color-text-inverse` | `#FFFFFF` | Text on dark backgrounds |

### 4.2 Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| **Page Title (h1)** | `'Fira Sans'`, sans-serif | `clamp(2rem, 5vw, 3rem)` | 700 |
| **Section Heading (h2)** | `'Fira Sans'`, sans-serif | `clamp(1.5rem, 3.5vw, 2rem)` | 600 |
| **Sub-heading (h3)** | `'Fira Sans'`, sans-serif | `1.25rem` | 600 |
| **Body** | `'Lato'`, sans-serif | `1.0625rem` | 400 |
| **Small / Meta** | `'Lato'`, sans-serif | `0.9375rem` | 400 |
| **Code / Monospace** | `'Monaco'` / `'Courier New'` | `0.95em` | 400 |

Fonts loaded from Google Fonts with `display=swap`. System font fallback ensures text remains readable before web fonts load.

### 4.3 Spacing & Layout

- Base unit: `8px` (0.5rem)
- Content max-width: `900px`, centered
- Gutter: `1.5rem` (24px) on mobile, `2rem` (32px) on tablet+
- Grid: CSS Grid for multi-column; Flexbox for navigation and card rows

### 4.4 Elevation & Depth

Minimal shadows; focus on typography and whitespace:
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);  /* Very subtle */
```

No gradients, heavy shadows, or visual clutter.

### 4.5 Icons

Minimal inline SVG icons only where needed:
- External link
- Code brackets (for articles)
- Camera (for photography)
- Menu (hamburger)
- Close (×)

---

## 5. HTML Structure & Component Library

### 5.1 Document Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] — Benjamin Townsend | Software & Consulting</title>

  <!-- SEO -->
  <meta name="description" content="[page-specific]">
  <meta name="keywords" content="[page-specific]">
  <link rel="canonical" href="https://bentownsend.com/[path]/">
  <meta name="author" content="Benjamin Townsend">

  <!-- Open Graph -->
  <meta property="og:title" content="[Page Title]">
  <meta property="og:description" content="[description]">
  <meta property="og:url" content="https://bentownsend.com/[path]/">
  <meta property="og:image" content="https://bentownsend.com/media/og-default.jpg">
  <meta property="og:type" content="website">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">{ ... }</script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600;700&family=Lato:wght@400;600&display=swap">
  <link rel="stylesheet" href="/css/main.css">

  <!-- Favicon -->
  <link rel="icon" href="/media/tcs_logo_0.png" type="image/png">
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <header class="site-header" role="banner">
    <!-- Logo/name + nav -->
  </header>

  <main id="main-content">
    <!-- Page content -->
  </main>

  <footer class="site-footer" role="contentinfo">
    <!-- Contact, social, copyright -->
  </footer>

  <script src="/js/main.js" defer></script>
</body>
</html>
```

### 5.2 Header Component

**Simple, professional header:**

```
Benjamin Townsend    [Nav: Home | About | CV | Consulting | Articles | Birds]
```

- No logo image, just name as text (clean, minimal)
- Navigation links; mobile hamburger menu
- Active page highlighted with underline
- `position: sticky; top: 0` for easy navigation

### 5.3 Navigation Structure

| Label | URL | Purpose |
|-------|-----|---------|
| Home | `/` | Main page |
| About | `/about/` | Background & bio |
| CV | `/cv/` | Full resume |
| Consulting | `/consulting/` | **Dispatch Dataworks LLC** services & contact |
| Articles | `/articles/` | Blog / technical writing hub |
| Birds | `/birds/` | Photography + field guide |

### 5.4 Footer Component

**Two-column on desktop, stacked on mobile:**

| Column 1 | Column 2 |
|----------|----------|
| Contact: hello@dispatchdataworks.com | Social: GitHub, Twitter/X, LinkedIn |
| Copyright © 2026 Benjamin Townsend | Links: Privacy, Colophon |

### 5.5 Reusable Components

#### Info Card
For showcasing articles or bird species:
```
┌────────────────────────────┐
│ [Thumbnail image]          │
│ Title                      │
│ Brief description          │
│ [Category / Date]          │
│ [ Read More → ]            │
└────────────────────────────┘
```

#### Article Metadata
Published date, reading time, category tags.

#### Code Block
Monospace text with light gray background:
```css
background-color: var(--color-surface-alt);
border-left: 4px solid var(--color-accent);
padding: 1rem;
font-family: 'Monaco', monospace;
```

#### Photo Gallery
CSS Grid, `auto-fill, minmax(250px, 1fr)`. Clicking image opens lightbox (CSS `<dialog>` or minimal JS modal).

#### Bird Species Card
Includes common name, scientific name, identification tips, local habitat, photo gallery.

#### Contact Form (optional)
For consulting inquiries; could route to email or CMS endpoint (Formspree, Netlify Forms, etc.).

---

## 6. CSS Strategy

### 6.1 File Structure

```
/css/
  main.css          ← entry point: imports all partials
  _variables.css    ← design tokens (colors, spacing, fonts)
  _reset.css        ← modern CSS reset
  _typography.css   ← heading scale, body, links
  _layout.css       ← grid, container, spacing utilities
  _header.css       ← site header and nav
  _footer.css       ← site footer
  _components.css   ← cards, code blocks, article metadata
  _forms.css        ← contact form styling (if needed)
  _pages.css        ← page-specific overrides
  _print.css        ← print styles
```

### 6.2 Responsive Breakpoints

| Name | Min-width | Usage |
|------|-----------|-------|
| `sm` | `480px` | Phones in landscape |
| `md` | `768px` | Tablets |
| `lg` | `1024px` | Desktops |
| `xl` | `1280px` | Large screens |

Mobile-first approach: base styles for the smallest screen, then `@media (min-width: ...)` add complexity.

### 6.3 Key Layout Patterns

**Hero intro (narrow page width):**
```css
.hero {
  max-width: 600px;
  margin: 3rem auto 2rem;
  text-align: center;
}
```

**Two-column (content + sidebar):**
```css
.page-with-sidebar {
  display: grid;
  grid-template-columns: 1fr;  /* mobile: single */
}
@media (min-width: 768px) {
  .page-with-sidebar {
    grid-template-columns: 2fr 1fr;  /* tablet+: 2/3 + 1/3 */
    gap: 2rem;
  }
}
```

**Card grid:**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
```

---

## 7. JavaScript Functionality

Minimal vanilla ES6+ JavaScript. No frameworks.

### 7.1 `main.js` — Shared Utilities

| Function | Purpose |
|----------|---------|
| `initMobileNav()` | Toggle hamburger menu; manage focus; update aria attributes |
| `highlightCurrentNav()` | Mark current page in nav with `aria-current="page"` |
| `initSkipLink()` | Ensure skip-to-content link works |
| `initExternalLinks()` | Mark external links with `target="_blank"` and " (external link)" label |

### 7.2 `redirect.js` — Client-Side Redirects

Single `404.html` page serves as redirect handler:
- Reads `window.location.pathname`
- Looks up path in redirect map (from `media-map.json` converted to JS)
- Calls `window.location.replace(newUrl)`

**Redirect map derived from Drupal legacy URLs:**

```javascript
const REDIRECTS = {
  "/about":                            "/about/",
  "/cv":                               "/cv/",
  "/consulting":                       "/consulting/",
  "/content/about":                    "/about/",
  "/article_home-labbing-14":          "/articles/home-labbing/",
  "/article_enhancing-birdwatching":   "/articles/birdwatching-ai/",
  "/birds":                            "/birds/",
  "/birds_blue-jay":                   "/birds/blue-jay/",
  "/birds_male-hairy-woodpecker":      "/birds/hairy-woodpecker/",
  "/birds_white-breasted-nuthatch":    "/birds/white-breasted-nuthatch/",
  "/node/[id]":                        "/archive/",
  "/taxonomy/term/[id]":               "/archive/",
  // ... full list generated from redirects.json
};
```

### 7.3 `gallery.js` — Photo Lightbox (Optional)

For bird species pages with photo galleries:
- Click thumbnail → opens `<dialog>` with full image
- Keyboard navigation: Escape closes, arrow keys navigate
- Fallback: images link directly if JS disabled

### 7.4 `forms.js` — Contact Form (Optional)

If a contact form is added:
- Form validation (email, required fields)
- Submit via Fetch API to Formspree or Netlify Forms
- Success/error feedback

---

## 8. SEO Strategy

### 8.1 Per-Page Title & Description

| Page | Title | Meta Description |
|------|-------|-------------------|
| Home | `Benjamin Townsend — Software Developer & Consultant` | `Custom software development, system architecture, and strategic consulting via Dispatch Dataworks LLC. 20+ years of experience.` |
| About | `About Benjamin Townsend — Background & Expertise` | `Benjamin Townsend is a software architect and consultant specializing in custom applications, data integration, and legacy modernization.` |
| CV | `Benjamin Townsend — CV / Resume` | `Full employment history, education, technical skills, and certifications in software development, database design, and system architecture.` |
| Consulting | `Consulting Services — Dispatch Dataworks LLC` | `Custom software development, data pipelines, system architecture, and strategic technology consulting for businesses and organizations.` |
| Articles Hub | `Articles — Benjamin Townsend` | `Technical writing on home lab setup, AI/ML applications, bird identification, and software engineering best practices.` |
| Home Labbing | `Home Lab Setup & Networking Guide` | `Deep dive into building a home lab for development and networking, covering virtualization, containerization, and infrastructure.` |
| Birdwatching AI | `Using AI for Bird Identification & Classification` | `How machine learning and deep learning models improve bird species identification, with practical implementation examples.` |
| Birds Hub | `Bird Photography & Species Guide` | `Field guide and photography collection featuring Blue Jays, Hairy Woodpeckers, White-Breasted Nuthatches, and more from Central New York.` |
| Blue Jay | `Blue Jay — Field Guide & Photography` | `Blue Jay identification, habitat, behavior, and stunning photography from the photographer's collection in Oswego County, NY.` |

### 8.2 Open Graph Tags

All pages include:
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Benjamin Townsend">
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Description]">
<meta property="og:url" content="https://bentownsend.com/[path]/">
<meta property="og:image" content="https://bentownsend.com/media/og-default.jpg">
```

### 8.3 Canonical URLs

```html
<link rel="canonical" href="https://bentownsend.com/[path]/">
```

Prevents duplicate-content issues.

### 8.4 Schema.org JSON-LD

#### Person (sitewide)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Benjamin Townsend",
  "url": "https://bentownsend.com/",
  "jobTitle": "Software Developer & Consultant",
  "worksFor": { "@type": "Organization", "name": "Dispatch Dataworks LLC" },
  "email": "hello@dispatchdataworks.com",
  "sameAs": [
    "https://github.com/benjaminarthurt",
    "https://www.linkedin.com/in/benjamin-townsend"
  ]
}
```

#### Organization (Dispatch Dataworks LLC)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dispatch Dataworks LLC",
  "url": "https://dispatchdataworks.com/",
  "founder": { "@type": "Person", "name": "Benjamin Townsend" },
  "email": "hello@dispatchdataworks.com",
  "contactPoint": { "@type": "ContactPoint", "contactType": "customer service" }
}
```

#### Article pages
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Article Title]",
  "datePublished": "[YYYY-MM-DD]",
  "author": { "@type": "Person", "name": "Benjamin Townsend" },
  "publisher": {
    "@type": "Organization",
    "name": "Benjamin Townsend",
    "logo": { "@type": "ImageObject", "url": "https://bentownsend.com/media/og-default.jpg" }
  }
}
```

#### Photograph pages (bird species, etc.)
```json
{
  "@context": "https://schema.org",
  "@type": "Photograph",
  "name": "[Bird Species Name]",
  "photographer": { "@type": "Person", "name": "Benjamin Townsend" },
  "datePublished": "[YYYY-MM-DD]",
  "description": "[Species description]"
}
```

### 8.5 `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bentownsend.com/</loc><priority>1.0</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://bentownsend.com/about/</loc><priority>0.8</priority><changefreq>yearly</changefreq></url>
  <url><loc>https://bentownsend.com/cv/</loc><priority>0.8</priority><changefreq>quarterly</changefreq></url>
  <url><loc>https://bentownsend.com/consulting/</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://bentownsend.com/articles/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://bentownsend.com/articles/home-labbing/</loc><priority>0.7</priority><changefreq>never</changefreq></url>
  <url><loc>https://bentownsend.com/articles/birdwatching-ai/</loc><priority>0.7</priority><changefreq>never</changefreq></url>
  <url><loc>https://bentownsend.com/birds/</loc><priority>0.7</priority><changefreq>quarterly</changefreq></url>
  <url><loc>https://bentownsend.com/birds/blue-jay/</loc><priority>0.6</priority><changefreq>never</changefreq></url>
  <url><loc>https://bentownsend.com/birds/hairy-woodpecker/</loc><priority>0.6</priority><changefreq>never</changefreq></url>
  <url><loc>https://bentownsend.com/birds/white-breasted-nuthatch/</loc><priority>0.6</priority><changefreq>never</changefreq></url>
  <url><loc>https://bentownsend.com/archive/</loc><priority>0.4</priority><changefreq>yearly</changefreq></url>
</urlset>
```

### 8.6 `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://bentownsend.com/sitemap.xml
```

### 8.7 Heading Hierarchy

- Exactly one `<h1>` per page (the page title)
- `<h2>` for major sections
- `<h3>` for subsections
- No skipped heading levels

---

## 9. Media Handling & Optimization

### 9.1 Source Media

15 images recovered from the original site, stored in `media/`:

| File | Purpose |
|------|---------|
| `tcs_logo_0.png` | Company logo (32×32px in favicon) |
| `bzm.jpg` | Benjamin's headshot (about page) |
| `DSC_*.JPG` (6 files) | Blue Jay photography |
| `DSCF*.JPG` (5 files) | Hairy Woodpecker & Nuthatch photos |
| `birdnet1.png` | BirdNET ML model screenshot |
| `newplot.png` | Data visualization from article |
| `video.png` | Placeholder for embedded content |
| `messages_0.jpeg` | Nuthatch field photo |

Plus references to legacy bird images in `media-map.json`.

### 9.2 Image Optimization (Pre-Launch)

| Task | Tool | Action |
|------|------|--------|
| Resize | ImageMagick | Scale bird photos to max 1200px; thumbnails to 400px |
| Convert to WebP | `cwebp` | Convert JPG/PNG to WebP for modern browsers |
| Compress | `jpegoptim` | Lossless compression on JPEG originals |
| Create OG image | Figma / GIMP | 1200×630px image for social sharing |
| Favicon set | `realfavicongenerator` | Generate favicon, apple-touch-icon, etc. |

### 9.3 HTML Image Implementation

Use `<picture>` with WebP + JPEG fallback:

```html
<picture>
  <source srcset="/media/blue-jay-thumb.webp" type="image/webp">
  <img
    src="/media/blue-jay-thumb.jpg"
    alt="Male Blue Jay perched on oak branch, Oswego County, New York"
    width="600"
    height="400"
    loading="lazy"
    decoding="async"
  >
</picture>
```

**Always include:**
- Descriptive `alt` text (derived from original captions)
- Explicit `width` and `height` (prevents CLS)
- `loading="lazy"` for below-fold images
- `loading="eager"` for hero/above-fold images

### 9.4 Media-Map Integration

`media-map.json` maps 20+ legacy image paths to local files. A one-time script (not committed) will:
1. Parse `media-map.json`
2. Replace legacy paths in HTML with local `/media/[filename]` paths
3. Generate updated HTML files

This ensures no broken image references at launch.

---

## 10. Redirect Strategy

### 10.1 Client-Side Redirects via GitHub Pages

GitHub Pages doesn't support server-side HTTP 301 redirects. Solution:

1. Create `404.html` page that GitHub Pages serves for unknown URLs
2. `404.html` contains `<script>` that reads `window.location.pathname`, looks it up in a redirect table, and calls `window.location.replace(newUrl)`
3. This is a JavaScript redirect (not HTTP 301), with minor SEO cost. Once new URLs are indexed, traffic naturally migrates.

> **Future improvement:** If custom domain + Cloudflare is used, proper HTTP 301 redirects can be configured at the CDN level.

### 10.2 `404.html` Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redirecting… — Benjamin Townsend</title>
  <script>
    (function() {
      var path = window.location.pathname.replace(/\/$/, '');
      var REDIRECTS = {
        "/about": "/about/",
        "/cv": "/cv/",
        "/consulting": "/consulting/",
        "/articles": "/articles/",
        "/birds": "/birds/",
        "/taxonomy/term/1": "/birds/",
        "/node/10": "/articles/",
        // ... full map generated from redirects.json
      };
      
      var dest = REDIRECTS[path];
      if (dest) {
        window.location.replace(dest);
      }
    })();
  </script>
</head>
<body>
  <h1>Page Not Found</h1>
  <p><a href="/">Return to the Home Page</a></p>
</body>
</html>
```

### 10.3 Redirect Table

Generated from legacy Drupal URLs:

| Legacy Path | New Path | Notes |
|------------|----------|-------|
| `/` | `/` | No change |
| `/about` | `/about/` | Added trailing slash |
| `/cv` | `/cv/` | Added trailing slash |
| `/consulting` | `/consulting/` | Added trailing slash, company info updated |
| `/articles` | `/articles/` | Hub page |
| `/article_*` | `/articles/[slug]/` | Article URLs simplified |
| `/birds` | `/birds/` | Species directory |
| `/birds_*` | `/birds/[species]/` | Individual species pages |
| `/node/[id]` | `/archive/` | Legacy blog posts → archive |
| `/taxonomy/term/[id]` | `/archive/` | Legacy categories → archive |

---

## 11. GitHub Pages Deployment

### 11.1 Repository Configuration

1. All files live in **`main` branch root** (not in `/docs` subdirectory).
2. Enable GitHub Pages in **Settings → Pages → Source: `main` / (root)**.
3. Add `CNAME` file containing `bentownsend.com` for custom domain.
4. GitHub Pages provides HTTPS via Let's Encrypt automatically.

### 11.2 DNS Configuration (Custom Domain)

| Record Type | Host | Value |
|-------------|------|-------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `benjaminarthurt.github.io` |

### 11.3 Required Root Files

| File | Purpose |
|------|---------|
| `index.html` | Home page |
| `CNAME` | Custom domain (`bentownsend.com`) |
| `404.html` | Redirect handler + 404 page |
| `sitemap.xml` | Search engine sitemap |
| `robots.txt` | Crawler instructions |
| `.nojekyll` | Disables Jekyll processing; speeds up builds |

### 11.4 Deployment Workflow

No build step required:
1. Commit updated HTML/CSS/JS to `main`
2. GitHub Pages automatically deploys within ~1 minute

**Optional — GitHub Actions CI:**
A workflow (`.github/workflows/validate.yml`) can validate HTML and check for broken links on each push, without changing deployment.

---

## 12. Implementation Phases

### Phase 1 — Foundation (1 day)
- [ ] Set up file structure (directories, `.nojekyll`, `CNAME`, `404.html`, `robots.txt`, `sitemap.xml`)
- [ ] Write `css/_variables.css`, `css/_reset.css`, `css/_typography.css`
- [ ] Build header and footer components (HTML + CSS)
- [ ] Write `js/main.js` (mobile nav, current page highlighting, external link handling)
- [ ] Write `js/redirect.js` (redirect map from legacy paths)

### Phase 2 — Core Pages (1–2 days)
- [ ] **Home page** (`index.html`) — intro, featured work, consulting CTA
- [ ] **About page** (`about/index.html`) — bio, credentials, headshot
- [ ] **CV page** (`cv/index.html`) — employment history, skills, education
- [ ] **Consulting page** (`consulting/index.html`) — **DISPATCH DATAWORKS LLC** services, contact

### Phase 3 — Content Pages (1 day)
- [ ] **Articles hub** (`articles/index.html`) — list of articles
- [ ] **Home Labbing article** (`articles/home-labbing/index.html`) — detailed technical post
- [ ] **Birdwatching AI article** (`articles/birdwatching-ai/index.html`) — case study with screenshots
- [ ] **Birds hub** (`birds/index.html`) — species directory intro
- [ ] **Three bird species pages** (`birds/[species]/index.html`) — with photos and field guide info

### Phase 4 — Archive & Redirects (0.5 day)
- [ ] **Archive hub** (`archive/index.html`) — legacy content directory
- [ ] Finalize `404.html` with complete redirect map
- [ ] Test all legacy URL redirects

### Phase 5 — SEO & Optimization (0.5 day)
- [ ] Add all JSON-LD structured data blocks
- [ ] Add Open Graph and Twitter card tags
- [ ] Optimize images (resize, WebP conversion, compression)
- [ ] Create OG image (1200×630px)
- [ ] Generate favicon set
- [ ] Finalize `sitemap.xml`

### Phase 6 — QA & Launch (0.5 day)
- [ ] Run HTML validation (`html-validate`)
- [ ] Run accessibility audit (Lighthouse, axe-core)
- [ ] Test all redirects manually
- [ ] Configure custom domain in GitHub Pages settings
- [ ] Configure DNS records
- [ ] Verify HTTPS certificate
- [ ] Submit `sitemap.xml` to Google Search Console

---

## 13. File-System Layout

Final repository structure after full implementation:

```
/                              ← repo root
├── index.html                 ← Home
├── 404.html                   ← Redirect handler
├── sitemap.xml
├── robots.txt
├── CNAME                      ← bentownsend.com
├── .nojekyll
├── PLAN.md                    ← This file
├── README.md                  ← Overview

├── about/
│   └── index.html

├── cv/
│   └── index.html

├── consulting/
│   └── index.html             ← DISPATCH DATAWORKS LLC

├── articles/
│   ├── index.html             ← Articles hub
│   ├── home-labbing/
│   │   └── index.html
│   └── birdwatching-ai/
│       └── index.html

├── birds/
│   ├── index.html             ← Species hub
│   ├── blue-jay/
│   │   └── index.html
│   ├── hairy-woodpecker/
│   │   └── index.html
│   └── white-breasted-nuthatch/
│       └── index.html

├── archive/
│   └── index.html             ← Legacy content directory

├── css/
│   ├── main.css
│   ├── _variables.css
│   ├── _reset.css
│   ├── _typography.css
│   ├── _layout.css
│   ├── _header.css
│   ├── _footer.css
│   ├── _components.css
│   ├── _forms.css
│   ├── _pages.css
│   └── _print.css

├── js/
│   ├── main.js
│   ├── redirect.js
│   ├── gallery.js              ← Optional lightbox
│   └── forms.js                ← Optional contact form

├── media/
│   ├── tcs_logo_0.png          ← Company logo
│   ├── bzm.jpg                 ← Headshot
│   ├── DSC_*.JPG               ← Blue Jay photos (6 files)
│   ├── DSCF*.JPG               ← Woodpecker/Nuthatch photos (5 files)
│   ├── birdnet1.png            ← Article screenshot
│   ├── newplot.png             ← Data viz
│   ├── og-default.jpg          ← OG image (to be created)
│   ├── favicon.ico             ← (to be created)
│   ├── apple-touch-icon.png    ← (to be created)
│   └── [other media files]

└── content/                    ← Source markdown (read-only reference)
    ├── [all existing .md files unchanged]
```

---

## Key Differences from FARC

| Aspect | FARC | bentownsend.com |
|--------|------|-----------------|
| **Scope** | Club website (9 core + 26 meeting pages) | Personal portfolio (9 core pages) |
| **Navigation** | ~9 main sections + subnav | ~6 main sections, simpler |
| **Events** | Heavy photo gallery integration | Minimal; focus on articles & photography |
| **Color Palette** | Navy + green (radio theme) | Navy + red (professional) |
| **Content Focus** | Club meetings, repeaters, education | Consulting, expertise, personal interests |
| **CTA** | "Join us", "Register for exam" | "Let's discuss your project" |
| **Social Elements** | Facebook, Twitter, email | GitHub, LinkedIn, email |
| **Archive Strategy** | Taxonomy pages & RSS feeds | Simple legacy directory |

---

*Document prepared for the benjaminarthurt/ben-townsend repository. All content sourced from the `content/` and `media/` directories. This is a planning document; no implementation code has been written yet.*
