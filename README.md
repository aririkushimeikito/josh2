# Shipley Pediatrics — Wix-Ready Website Prototype

**Client:** Shipley Pediatrics (Shipley Neuro Pediatrics, LLC) · Montana
**Provider:** Jennifer Shipley, CPNP
**Deliverable:** HTML/CSS/vanilla-JS prototype intended to be rebuilt 1:1 in **Wix Builder**
**Build date:** September 2026

---

## 1. How to view the prototype

1. Extract the ZIP.
2. Open `index.html` in any modern browser (Chrome, Safari, Firefox, Edge).
3. Navigate using the header, footer, and in-page buttons — every internal link works locally.

No server, build tools, Node, or frameworks are required. The only external request is Google Fonts (Fraunces + Figtree); if offline, the site gracefully falls back to Georgia / system sans-serif.

---

## 2. Project structure

```
shipley-pediatrics-wix-ready-website/
│
├── index.html                       Home
├── pediatric-dpc.html               Pediatric Direct Primary Care
├── expanded-pediatric-care.html     Expanded Pediatric Care
├── pans-pandas.html                 PANS & PANDAS Care
├── about.html                       About / Meet Jennifer Shipley
├── contact.html                     Contact (routing + Wix Form)
├── schedule-meet-and-greet.html     Meet & Greet page (Wix Bookings placeholder)
├── resources.html                   Resources hub (optional landing for the dropdown)
├── patient-portal.html              Interstitial — becomes an external link in Wix
├── after-hours-care.html            After-Hours Care  [CONTENT NEEDED]
├── new-patient-information.html     New patient pathways
├── faqs.html                        All FAQs combined
├── privacy-policy.html              Website Privacy Policy (legal review draft)
├── terms-of-service.html            Website Terms of Service (legal review draft)
│
├── css/styles.css                   Design system + all styles (documented, not minified)
├── js/main.js                       Mobile menu, dropdown, reveal, form validation
├── images/
│   ├── logo/                        All supplied logo variants (renamed for clarity)
│   └── placeholders/                Labelled SVG placeholders — NO real photos were supplied
├── favicon/                         Generated from the supplied logo mark
└── README.md                        This file
```

### Intended Wix URL slugs

| Prototype file | Wix slug |
|---|---|
| `index.html` | `/` |
| `pediatric-dpc.html` | `/pediatric-dpc` |
| `expanded-pediatric-care.html` | `/expanded-pediatric-care` |
| `pans-pandas.html` | `/pans-pandas` |
| `about.html` | `/about` |
| `contact.html` | `/contact` |
| `schedule-meet-and-greet.html` | `/meet-and-greet` |
| `resources.html` | `/resources` (optional — Resources can be a dropdown-only item) |
| `patient-portal.html` | *external link to the portal — no Wix page needed* |
| `after-hours-care.html` | `/after-hours-care` |
| `new-patient-information.html` | `/new-patients` |
| `faqs.html` | `/faqs` |
| `privacy-policy.html` | `/privacy-policy` |
| `terms-of-service.html` | `/terms-of-service` |

---

## 3. Brand system (→ Wix Site Styles / Theme Manager)

All tokens live at the top of `css/styles.css` under `:root`.

### Colors (sampled from the supplied logo)

| Token | Hex | Use in Wix |
|---|---|---|
| `--color-violet-500` | `#7F69FF` | Logo gradient start · accents, decorative node lines |
| `--color-teal-500` | `#00929E` | Logo gradient end · accents |
| `--color-primary` (teal-600) | `#067580` | **Primary buttons, links** (AA-contrast safe on white) |
| `--color-primary-hover` | `#075E67` | Button hover |
| `--color-secondary` (violet-600) | `#5F4EDB` | Secondary CTA (Expanded Care / PANS buttons), eyebrows |
| `--color-ink` | `#23262B` | Headings (matches logo wordmark) |
| `--color-text` | `#33383F` | Body text |
| `--color-muted` | `#5E6570` | Secondary text |
| `--color-background` | `#FAF7F2` | Page background (warm cream) |
| `--color-sand` | `#F1ECE4` | Alternating section background |
| `--color-surface` | `#FFFFFF` | Cards |
| `--color-dark` | `#1D2A2E` | Dark CTA bands |
| `--color-dark-2` | `#16333A` | Footer |
| `--gradient-brand` | violet → teal 135° | Thin accent rules, tile dots, step 1 badge only — used sparingly |

### Typography (→ Wix Text Themes)

- **Headings:** Fraunces (Google Font), weight 500, soft optical axis. Fallback: Georgia.
- **Body:** Figtree (Google Font), 400/600/700. Fallback: system sans.

| Text theme | Size |
|---|---|
| Heading 1 / Hero | clamp 2.4–4.1 rem (display 2.7–4.8 rem) |
| Heading 2 | clamp 1.85–2.6 rem |
| Heading 3 | 1.5 rem |
| Heading 4 | 1.25 rem |
| Paragraph 1 (lead) | 1.19 rem |
| Paragraph 2 (body) | 1.06 rem |
| Paragraph 3 (small/captions) | 0.94 rem |
| Eyebrow/labels | 0.81 rem, uppercase, tracking .14em |

Both fonts are available in the Wix font picker (Google Fonts). Add them via *Site Design → Text → Upload/Google fonts*.

### Buttons (→ Wix Button styles)

| Prototype class | Wix button style | Where used |
|---|---|---|
| `.btn` (teal, pill) | **Primary** | Schedule a Meet & Greet, Explore DPC |
| `.btn--secondary` (teal outline) | **Secondary** | Patient Portal, Meet Jennifer Shipley |
| `.btn--violet` | Primary variant, violet fill | Schedule a Consultation, Contact Us to Learn More |
| `.btn--ghost` (text + arrow) | Text button | Card CTAs |
| `.btn--light` / `.btn--outline-light` | On-dark variants | Dark CTA bands + footer |

All buttons: 999px radius, 50px min height, hover lifts 2px with soft shadow, visible focus ring.

### Visual signature
A decorative **"node network"** motif (dots connected by thin gradient lines) echoes the two connected figures in the logo. In the prototype it is an inline SVG at 18% opacity behind the sand sections. In Wix, upload `images/decor/node-network.svg` as a background layer (set ~18% opacity) on those sections, or omit — it is decorative only.

---

## 4. Navigation (matches the supplied Sitemap Brief exactly)

**Desktop header:** Logo · Home · Pediatric DPC · Expanded Pediatric Care · PANS & PANDAS · About · Resources ▼ · Contact · **[Patient Portal]** (outline) · **[Schedule a Meet & Greet]** (primary)

**Resources dropdown:** Patient Portal · After-Hours Care · New Patient Information · FAQs · Contact

**Mobile:** hamburger opens a full-height panel with both CTAs at the top, then the menu; Resources is an expandable sub-list.

**Footer:** Brand + description + 2 CTAs · Care Pathways · Resources · Contact (address/phone/hours placeholders + emergency notice) · legal links · `© 2026 Shipley Neuro Pediatrics, LLC | Shipley Pediatrics`

### CTA rules (from the brief — please preserve)
| Audience | CTA label | Destination |
|---|---|---|
| Pediatric DPC prospects | **Schedule a Meet & Greet** | `schedule-meet-and-greet.html` → Wix Bookings / booking link |
| Expanded Pediatric Care | **Schedule a Consultation** | `contact.html?interest=expanded#message` |
| PANS & PANDAS | **Contact Us to Learn More** | `contact.html?interest=pans#message` |
| Existing patients | **Patient Portal** | external portal URL |

Do **not** use "Schedule a Meet & Greet" as a universal CTA.

---

## 5. Wix component mapping

| Prototype component | Wix Builder equivalent |
|---|---|
| Sticky header + logo + menu + 2 buttons | **Wix Header** (freeze position) + **Wix Menu** (horizontal, with submenu) + 2 **Buttons** |
| Resources dropdown | **Wix Menu submenu** (add child pages under a "Resources" folder/dropdown item) |
| Mobile hamburger panel | **Wix Mobile Menu** |
| Hero (text + blob-shaped image) | **Section** + 2 **Containers**; image with rounded/blob mask (Wix Shape Mask) |
| Three care-pathway cards | **Repeater** (3 items) or 3 Containers |
| "What's included" / "Who it's for" / "Why Shipley" grids | **Repeater** |
| Pricing cards | **Repeater** (4 items) — or Wix Pricing Plans app if you later sell memberships online |
| Numbered steps | **Repeater** (vertical list) or Wix "Steps" strip |
| Symptom tile grid (PANS) | **Repeater** (13 items) |
| Callout boxes | **Container** with tinted background |
| FAQ accordion | **Wix Accordion** (Collapsible) — one per FAQ |
| Contact form | **Wix Forms** (see §7) |
| Meet & Greet scheduling | **Wix Bookings** service ("Complimentary Meet & Greet", 20–30 min, free) or external scheduling embed |
| Patient Portal button | **Button** → external URL, open in new tab |
| Dark CTA bands | **Section** with dark background + Heading + Text + Button |
| Footer | **Wix Footer** |
| Reveal-on-scroll | Wix **Animation → Fade in / Slide up** on each container |
| Legal pages | Plain Wix pages with Text elements (or Wix Rich Content) |
| Structured data (JSON-LD) | Wix **SEO Settings → Advanced → Structured data** per page (copy from each HTML `<head>`) |

Nothing in the prototype requires Velo/custom code.

---

## 6. Section-by-section Wix implementation guide

### Global — Header
- **HTML:** `<header class="site-header">` with logo, `<nav>`, utility buttons; sticky with blur.
- **Wix:** Header → Freeze position on scroll. Logo image (`logo-full-color.png`, height ~48px). Horizontal Menu. Two Buttons right-aligned.
- **Editable:** Logo, menu items, button labels/links.
- **Notes:** In Wix Menu settings, set "Resources" as a dropdown containing the 5 pages. Mark Patient Portal as an external link opening in a new tab. Reduce menu font to ~15px so it fits at 1280px.

### Global — Footer
- **HTML:** 4-column grid.
- **Wix:** Footer with 4 Containers; use `logo-white-text-horizontal.png`.
- **Editable:** Description text, link lists, address, phone, hours, legal links, copyright.
- **Notes:** Replace every `[bracketed]` placeholder before launch.

### Home — Hero
- **HTML:** Two-column: eyebrow, H1 with gradient italic "Whole Child.", italic lead, body, 2 buttons; right column blob-masked image + floating "Jennifer Shipley, CPNP" badge.
- **Wix:** Section → Container (text) + Container (image w/ shape mask) + small Container badge overlapping image.
- **Editable:** Eyebrow, H1, lead, paragraph, button labels/links, hero image, badge text.
- **Notes:** Use a real photo of Jen (portrait orientation). The gradient text can be a Wix "Text with gradient" or simply teal.

### Home — Intro ("A Different Approach")
- **Wix:** Section → centered Container (max 720px) with short gradient rule, H2, italic line, paragraph.

### Home — Care Pathways
- **Wix:** Section (sand background) → Repeater, 3 items. Each: small tag, H3, paragraph, small paragraph, text button. Left gradient bar = 6px colored strip element or container border.
- **Notes:** Keep exactly three; this replaces any diagnosis-based "Services" dropdown.

### Home — Meet Jennifer Shipley
- **Wix:** Section → 2 Containers (text | image). Button "Meet Jen" → About.

### Home — Final CTA
- **Wix:** Section (dark `#1D2A2E`, optional violet/teal radial glow image) → H2, paragraph, Button (white), italic note.

### Pediatric DPC page
| Section | Wix build | Editable |
|---|---|---|
| Hero | Section + 2 Containers + Button (Meet & Greet) + text button (#pricing anchor) | copy, image |
| What is DPC | 2 Containers (text \| checklist card) | copy |
| What's included | Repeater ×6 with icon | icon, H3, text |
| Complex kids | 2 Containers + Button → About | copy, image |
| Pricing | Repeater ×4 (first item dark) | label, amount, note |
| Insurance & eligibility | Text Container + Callout Container + Button → Contact (interest=dpc) | copy |
| How to become a member | Text + Repeater ×5 numbered | copy |
| FAQ | Wix Accordion ×6 | Q/A |
| Final CTA | Dark Section + Button | copy |

### Expanded Pediatric Care page
Same pattern. Notable: **"Who it's for"** Repeater ×7 (borderless, top rule); **DPC vs Expanded** comparison = 2 Containers stacked; **PANS cross-link** = single wide Container with icon; all CTAs = "Schedule a Consultation" (violet) → contact form with Expanded pre-selected.

### PANS & PANDAS page
Notable: **Symptom grid** Repeater ×13 (4 columns desktop / 2 mobile) followed by an amber callout; **"What care includes"** Repeater ×7; **"What PANS & PANDAS Care is not"** tinted Container; **Care team** = chips (small pill text elements or one Repeater); **Pricing** = single Container stating pricing is being finalized; all CTAs = "Contact Us to Learn More" (violet) → contact form with PANS pre-selected.

### About page
Notable: hero portrait (real photo required); **Experience & Credentials** sidebar Container `[CONTENT NEEDED]`; **Why Shipley** Repeater ×5; **Specialized care** Repeater ×7 tiles; two philosophy cards.

### Contact page
Order is intentional (from build notes): routing cards **before** the form.
1. Hero (centered)
2. **How Can We Help?** Repeater ×3 routing cards (DPC → Bookings; Expanded → form; PANS → form)
3. **Existing patient** Container → Patient Portal button
4. **Office info** (phone/address/hours placeholders + Get Directions + map/photo) | **Wix Form** (see §7)
5. **After hours** Container + emergency line
6. **Not sure?** 3 buttons

### Schedule a Meet & Greet page
Wix Bookings widget replaces the dashed placeholder panel. Create one free service: "Complimentary Meet & Greet (Pediatric DPC)". The callout clarifies it is non-clinical and DPC-specific.

### Resources / Patient Portal / After-Hours / New Patient / FAQs
Simple pages built from Containers + Repeaters. **Patient Portal** page exists only so the prototype works offline — in Wix, point the button/menu item at the real portal URL and delete this page. **After-Hours** page needs confirmed content.

### Privacy Policy / Terms of Service
Full supplied text is in the prototype (legal review drafts). Build as plain text pages; keep the "Effective / Last Updated" meta bar. Both contain italic *pre-publication* notes that should be removed after counsel review.

---

## 7. Contact form → Wix Forms

Create one Wix Form ("General Inquiry") with these fields, in this order:

| Field | Type | Required |
|---|---|---|
| Parent/Guardian Name | Short text | ✅ |
| Email Address | Email | ✅ |
| Phone Number | Phone | – |
| Child's Age | Short text / number | – |
| What are you interested in? | Dropdown: Pediatric Direct Primary Care · Expanded Pediatric Care · PANS & PANDAS Care · Existing Patient Question · General Question · Other | ✅ (triage) |
| How can we help? | Paragraph | ✅ |
| Consent checkbox | "I understand this form is for general, non-urgent inquiries…" | ✅ |

- Add the helper text under the message field: *"Please do not include medical history, symptoms, diagnoses, medication information, or other private health information in this form."*
- Success message: *"Thank you — your message has been received. Our team will review your inquiry and help point you toward the right next step."*
- Notifications → practice admin email `[EMAIL]`.
- **Pre-selecting the dropdown:** the prototype uses `?interest=expanded|pans|dpc|general`. Wix Forms cannot read URL parameters natively; options are (a) three separate lightweight forms on the Contact page with the dropdown pre-set, or (b) a small Velo snippet (`wixLocation.query`) to set the dropdown value. Option (a) is fully native.
- Do **not** collect PHI in this form (per Privacy Policy §5).

---

## 8. Placeholders to replace before launch

Search the project for `placeholder` / `[` to find every one. Summary:

| Placeholder | Where |
|---|---|
| `[Practice Phone Number]`, `[After-Hours Phone Number]` | Footer, Contact, After-Hours, legal pages |
| `[Street Address]`, `[City, Montana ZIP]`, `[Practice Mailing Address]` | Footer, Contact, legal pages |
| `[Days and Hours]` | Footer, Contact, After-Hours |
| `[PATIENT PORTAL LINK]` | Header button, Resources menu, Patient Portal page, Contact |
| `[BOOKING LINK / WIX BOOKINGS EMBED]` | Schedule a Meet & Greet page |
| `Get Directions` link | Contact page |
| `[Privacy/Administrative Email Address]`, `[General Administrative Email Address]` | Legal pages, form notifications |
| `[Insert Effective Date]`, `[Insert Date]` | Privacy Policy, Terms |
| `[CONTENT NEEDED]` — After-hours process | After-Hours Care page |
| `[CONTENT NEEDED]` — Education / prior organizations / certifications | About sidebar |
| `[CONTENT NEEDED]` — Optional new-patient forms | New Patient Information |
| `[IMAGE NEEDED]` ×8 | All hero/portrait/candid images (see `images/placeholders/`) |
| `https://[YOUR-DOMAIN]` | Canonical + OG URLs in every `<head>` |

### Content items flagged in the supplied copy ("Items to Confirm Before Publishing")
- Define what DPC "direct access" includes (messaging, phone, hours, response expectations).
- Confirm visit limits / excluded services for both memberships.
- **DPC family cap:** at $89 + $65×3 = $284 for four children, the $295 cap first applies at five children — confirm intended rule.
- Confirm final insurance/eligibility language (BCBS + Montana Medicaid exclusion).
- Expanded Care: visit frequency, messaging access, included vs. separately charged functional-medicine testing, medication-management scope.
- PANS/PANDAS: finalize service structure and pricing; review all clinical language with Jennifer Shipley.
- Legal pages: Montana healthcare counsel review; confirm analytics/cookie disclosures.

No testimonials, reviews, awards, statistics, or biographical details beyond the supplied copy were invented.

---

## 9. SEO & structured data

Every page has a unique `<title>`, meta description, canonical placeholder, Open Graph tags, one H1, and logical H2/H3s. JSON-LD included (copy into Wix SEO → Structured Data):

- `index.html` — `MedicalBusiness` (name, legal name, logo, founder, area served). **Add address/phone once confirmed.**
- `pediatric-dpc.html`, `expanded-pediatric-care.html` — `Service` + `FAQPage` + `BreadcrumbList`
- `pans-pandas.html`, `faqs.html` — `FAQPage` + `BreadcrumbList`
- `about.html` — `Person` (Jennifer Shipley, CPNP) + `BreadcrumbList`
- all other inner pages — `BreadcrumbList`

---

## 10. Accessibility & responsive notes

- Semantic landmarks, skip link, one H1 per page, alt text on every image, labelled form fields, visible focus rings, `aria-expanded` on menu/dropdown, `prefers-reduced-motion` respected.
- FAQs use native `<details>` so they work with JS disabled (Wix Accordion is equivalent).
- Breakpoints: ≥1500 (wide), 1041–1500 (desktop/laptop), 761–1040 (tablet: nav collapses to hamburger, grids → 2 col), ≤760 (mobile: single column, full-width buttons, header CTA moves into the menu panel), ≤420 (symptom tiles → 1 col).
- Verified: no horizontal scrolling at 390 / 768 / 1280 / 1440 / 1920.

---

## 11. QA performed on this prototype

- All 14 pages open locally; 0 broken internal links or missing assets.
- Mobile menu, Resources dropdown (hover, click, Esc, outside-click), FAQ accordions, form validation + success state, and `?interest=` pre-selection all tested in headless Chromium at 390px and 1440px.
- HTML tag balance validated; no JavaScript console errors (only Google Fonts is external).
- No frameworks or build tooling; CSS/JS un-minified and commented.
