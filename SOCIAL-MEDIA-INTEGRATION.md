# Social Media Integration

## Overview

All social media links and icons have been harvested from the original bentownsend.com Drupal site and preserved in this repository.

## Social Media Manifest

See `social-media.json` for the complete list of 15 social media profiles:

1. **Drupal** — https://drupal.org/u/benjaminarthurt
2. **About.me** — https://about.me/ben.townsend
3. **Twitter** — https://twitter.com/benjaminarthurt
4. **Facebook** — https://www.facebook.com/benjaminarthurt
5. **Email** — https://bentownsend.com/contact
6. **GitHub** — https://github.com/benjaminarthurt
7. **Google+** — https://plus.google.com/113930497785230092579 *(deprecated)*
8. **LinkedIn** — https://www.linkedin.com/in/benjaminarthurt
9. **Pinterest** — https://www.pinterest.com/benak2x/
10. **Reddit** — https://www.reddit.com/user/benjaminarthurt
11. **RSS** — https://bentownsend.com/rss.xml
12. **Skype** — skype:benjaminarthurt?call
13. **Stack Exchange** — http://stackexchange.com/users/4848775/benjaminarthurt
14. **Vimeo** — https://vimeo.com/user36517865
15. **YouTube** — https://www.youtube.com/user/MrBenjamintownsend

## Icons

All 15 social media icons (32×32px) are stored in `/media/`:

```
media/
├── drupal-32.png
├── aboutme-32_0.png
├── twitter-32.png
├── facebook-32.png
├── email-32.png
├── github-32.png
├── google-32.png
├── linkedin-32.png
├── pinterest-32.png
├── reddit-32.png
├── rss-32.png
├── skype-32.png
├── stackoverflow-32.png
├── vimeo-32.png
└── youtube-32.png
```

## Logo

The **Dispatch Dataworks LLC** logo is available in two formats:

- **logo_mark.png** — Icon/square version (40×40px recommended)
- **logo_t.png** — Full horizontal logo (variable width, ~600px)

Both are stored in `/media/`.

## HTML Footer Component Template

Include this in your footer or contact section:

```html
<div class="social-media-links">
  <p>Connect with Benjamin:</p>
  <ul class="social-icons">
    <li><a href="https://github.com/benjaminarthurt" title="GitHub"><img src="/media/github-32.png" alt="GitHub" width="32" height="32"></a></li>
    <li><a href="https://twitter.com/benjaminarthurt" title="Twitter"><img src="/media/twitter-32.png" alt="Twitter" width="32" height="32"></a></li>
    <li><a href="https://www.linkedin.com/in/benjaminarthurt" title="LinkedIn"><img src="/media/linkedin-32.png" alt="LinkedIn" width="32" height="32"></a></li>
    <li><a href="https://www.youtube.com/user/MrBenjamintownsend" title="YouTube"><img src="/media/youtube-32.png" alt="YouTube" width="32" height="32"></a></li>
    <li><a href="https://www.facebook.com/benjaminarthurt" title="Facebook"><img src="/media/facebook-32.png" alt="Facebook" width="32" height="32"></a></li>
    <li><a href="https://www.reddit.com/user/benjaminarthurt" title="Reddit"><img src="/media/reddit-32.png" alt="Reddit" width="32" height="32"></a></li>
    <li><a href="https://vimeo.com/user36517865" title="Vimeo"><img src="/media/vimeo-32.png" alt="Vimeo" width="32" height="32"></a></li>
    <li><a href="https://www.pinterest.com/benak2x/" title="Pinterest"><img src="/media/pinterest-32.png" alt="Pinterest" width="32" height="32"></a></li>
    <li><a href="https://drupal.org/u/benjaminarthurt" title="Drupal"><img src="/media/drupal-32.png" alt="Drupal" width="32" height="32"></a></li>
    <li><a href="https://about.me/ben.townsend" title="About.me"><img src="/media/aboutme-32_0.png" alt="About.me" width="32" height="32"></a></li>
    <li><a href="http://stackexchange.com/users/4848775/benjaminarthurt" title="Stack Exchange"><img src="/media/stackoverflow-32.png" alt="Stack Exchange" width="32" height="32"></a></li>
  </ul>
</div>
```

## CSS for Social Icons

```css
.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.social-icons li a {
  display: inline-block;
  text-decoration: none;
  transition: transform 0.2s;
}

.social-icons li a:hover {
  transform: scale(1.1);
}

.social-icons img {
  display: block;
  width: 32px;
  height: 32px;
}
```

## Consulting Page Logo

The consulting page now uses:
- **Logo mark**: `logo_mark.png` (for page header/icon)
- **Full logo**: `logo_t.png` (optional, for prominent display)

Replace the old "Townsend Consulting Services" logo (`tcs_logo_0.png`) with the Dispatch Dataworks LLC logos.

---

**Last Updated**: March 12, 2026
**Source**: bentownsend.com (Drupal site archived and harvested)
