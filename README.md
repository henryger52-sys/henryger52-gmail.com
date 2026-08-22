# SinokorLine — Container Shipping

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-222?style=flat&logo=githubpages&logoColor=white)

**Live site:** https://henryger52-sys.github.io/henryger52-gmail.com/

## About

A single-page marketing site for a container shipping and freight forwarding business. It presents services (FCL, LCL, reefer & special cargo, customs documentation), a global port network with live-status manifest, a cargo & data security section, a free downloadable security checklist (email-gated lead magnet), and an enquiry form that lets prospective customers request a shipping quote directly from the page.

Built with on-page SEO in place: canonical tag, Open Graph/Twitter meta, JSON-LD `Organization` schema, `robots.txt`, and `sitemap.xml`.

## Installation

This is a static site with no build step — plain HTML, CSS, and JavaScript.

1. Clone the repo:
   ```bash
   git clone https://github.com/henryger52-sys/henryger52-gmail.com.git
   cd henryger52-gmail.com
   ```
2. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   npx serve .
   ```

### Forms

Both the quote request form (`#enquiryForm`) and the checklist lead-magnet form (`#checklistForm`) post to [FormSubmit](https://formsubmit.co) via AJAX (`script.js`). Replace the placeholder address in **both** forms' `action` attributes in `index.html` with the destination email before going live:

```html
<form id="enquiryForm" class="enquiry-form" action="https://formsubmit.co/your-email@example.com" method="POST">
...
<form id="checklistForm" class="gate-form" action="https://formsubmit.co/your-email@example.com" method="POST">
```

## Deployment

Pushes to `main` automatically deploy the site to GitHub Pages via the workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

## Credits

- Sinokor Sales ([sales1@sinokor.com.sg](mailto:sales1@sinokor.com.sg))
