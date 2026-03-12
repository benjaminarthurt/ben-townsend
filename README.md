# Benjamin Townsend Website Archive

Static content archive of bentownsend.com with updated company information.

## Structure

```
.
├── content/          # Markdown pages (159 files)
│   ├── index.md         # Homepage
│   ├── about.md         # About page
│   ├── consulting.md    # Consulting/Services (UPDATED with Dispatch Dataworks LLC info)
│   ├── cv.md            # CV/Resume
│   ├── birds/           # Bird photography & species pages
│   ├── articles/        # Blog articles & tech posts
│   └── taxonomy_*.md    # Category/tag pages
├── media/            # Images and media (15 files)
│   ├── .jpg, .png, .gif, etc.
│   └── ...
├── media-map.json    # URL → local path mappings
└── README.md         # This file
```

## Changes Made

### ✅ Consulting Page Updated
- **Old company name**: Townsend Consulting Service
- **New company name**: Dispatch Dataworks LLC
- **Updated services**: Added software development, data integration, consulting details
- **Updated contact**: hello@dispatchdataworks.com
- **New service offerings**: Custom applications, data pipelines, system architecture, etc.

### Cleanup
- Removed `index.php_*` duplicate pages (Drupal routing artifacts)
- Removed login/password pages
- **Total pages**: 159 markdown files (clean, deduplicated)
- **Total media**: 15 images recovered from the site

## Building a Static Site

This archive is ready to be built into a static site using:
- **Hugo**: Place `content/` → `config.toml` + theme
- **11ty/Eleventy**: Use markdown directly with `.eleventy.js` config
- **Jekyll**: Use `_posts/` + Jekyll markdown syntax
- **Next.js/Astro**: Convert markdown to MDX or component props

### Quick Start (Hugo)

```bash
hugo new site mysite
cp -r content/ mysite/content/
cp -r media/ mysite/static/media/
# Add theme, build
hugo
```

## Media

All images are stored in `media/` and referenced from markdown files via:
```markdown
![alt text](media/filename.jpg)
```

See `media-map.json` for old URL → local path mappings.

## Notes

- All content is preserved as markdown
- Internal links have been converted to relative paths
- Images are deduplicated (no thumbnails or variants stored separately)
- The site is ready to rebuild as static HTML or integrate into modern JAMstack frameworks

---

Archive generated: 2026-03-12
Source: https://bentownsend.com/
