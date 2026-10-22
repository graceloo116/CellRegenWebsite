# CellRegenWebsite

Rebuild of cellregen365.com as a plain HTML, CSS and JavaScript site, so it can be hosted for free on GitHub Pages without WordPress. Planned address: `cellregenplus.zinzinobalanceoils.com`.

## Files

- `index.html` – all page content (text, sections, WhatsApp links)
- `styles.css` – shared layout from the Zinzino site, plus the purple CELLREGEN365 theme at the bottom
- `script.js` – mobile menu, image carousels and footer year
- `images/` – WebP images with descriptive names
- `sitemap.xml`, `robots.txt` – for search engines

## Edit it

- Text: open `index.html` and change the words between the tags.
- WhatsApp number: search `index.html` for `60183125308` and replace every match.
- Prices: search `index.html` for `RM` (they appear in the offer section, the FAQ and the structured data at the top).

## Content left out of the old site

- Customer quotes that used stock model photos (Mei Chen, Annie, Kelvin, Lisa, Mr. Liao).
- The 3 AFC story posts (car accident, coma, diabetes).
- A testimonial claiming a cancer tumour disappeared, two third-party infographics, and a YouTube video about rheumatoid arthritis.
- Disease and cure claims (cancer, tumours, viruses, blood pressure, blood clots, stem-cell treatment) and the money-back guarantee.

## Publish with GitHub Pages

1. On GitHub, open the repo's **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**, then pick `main` and `/ (root)`.
3. After a minute, the site will be live at `https://graceloo116.github.io/CellRegenWebsite/`.
4. For the subdomain: add `cellregenplus.zinzinobalanceoils.com` under **Custom domain**, and add a CNAME DNS record `cellregenplus` → `graceloo116.github.io`. Then replace every `https://graceloo116.github.io/CellRegenWebsite/` in `index.html`, `sitemap.xml` and `robots.txt` with `https://cellregenplus.zinzinobalanceoils.com/`.
