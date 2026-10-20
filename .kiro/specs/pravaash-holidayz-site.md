# Pravaash Holidayz — Full Site Specification

> **Purpose of this document:** A living reference for every part of the site so that any future change — copy updates, adding a new page, fixing a bug, connecting a backend, redesigning a section — can be planned and implemented without needing to re-explore the codebase from scratch.

---

## 1. Project Overview

| Field | Value |
|---|---|
| Brand name | PRAVAASH HOLIDAYZ |
| Package name | `pravaash` |
| Business type | Travel agency — domestic & international tours |
| Location | Ahmedabad, Gujarat, India |
| Established | 2014 |
| Phone | +91 99090 25094 |
| Email | info@pravaashholidayz.com |
| Website | www.pravaashholidayz.com |
| Address | F/410, SOBO Centre, Nr. Safal Parisar, Gala Gymkhana Road, South Bopal, Bopal, Ahmedabad – 380 058, Gujarat, India |

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router DOM v7 — **HashRouter** (URLs use `#`, e.g. `/#/about`) |
| Sliders | Swiper 11 |
| Modals | react-modal 3 |
| Animated numbers | react-countup 6 + react-intersection-observer 9 |
| Physics animation | matter-js 0.20 |
| Masonry grid | masonry-layout 4 + imagesloaded 5 |
| Custom select | react-select 5 (wrapped in `NiceSelect.jsx`) |
| Mobile nav | react-burger-menu 3 |
| CSS | Bootstrap 5 (CDN/pre-built), FontAwesome (local), custom `style.css` |
| Build tool | Create React App (react-scripts 5) |
| Node version | 22 (CI) |

### Key npm scripts

| Script | Command | Use |
|---|---|---|
| `start` | `react-scripts start` | Local dev server |
| `build` | `react-scripts build` | Production build to `/build` |
| `postbuild` | `node scripts/fix-gh-pages-assets.js` | Patches asset paths for GitHub Pages after build |
| `test` | `react-scripts test` | Run tests |

> **`CI=false` is set in the GitHub Actions workflow** so React build warnings do not fail the pipeline.

---

## 3. Deployment

Deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy-pages.yml`).

- Triggered automatically on push to `main` or `master`, or manually via `workflow_dispatch`.
- Pipeline: checkout → Node 22 setup → `npm ci` → `npm run build` (CI=false) → upload `/build` as Pages artifact → deploy.
- The `postbuild` script `scripts/fix-gh-pages-assets.js` runs automatically after `npm run build` to fix relative asset paths.
- `"homepage": "."` is set in `package.json` so the build works correctly at a subpath URL.

**To deploy manually:** Push to `main` or `master` branch. GitHub Actions handles the rest.

---

## 4. Entry Point & Routing

```
src/index.js  →  renders <App />
src/App.js    →  renders <RouterPage />
src/Pages/RouterPage.jsx  →  defines all routes inside HashRouter
```

`RouterPage.jsx` mounts `<LoadTop />` inside the Router so the page scrolls to the top on every route change.

### Complete Route Map

| Route | Page Component | File |
|---|---|---|
| `/` | HomeOne | `src/Pages/HomeOne.jsx` |
| `/home-tour` | HomeTwo | `src/Pages/HomeTwo.jsx` |
| `/home-agency` | HomeThree | `src/Pages/HomeThree.jsx` |
| `/home-yacht` | HomeFour | `src/Pages/HomeFour.jsx` |
| `/about` | About | `src/Pages/About.jsx` |
| `/destination` | Destination | `src/Pages/Destination.jsx` |
| `/destination/:id` | DestinationDetails | `src/Pages/DestinationDetails.jsx` |
| `/service` | Service | `src/Pages/Service.jsx` |
| `/service/:id` | ServiceDetails | `src/Pages/ServiceDetails.jsx` |
| `/activities` | Activities | `src/Pages/Activities.jsx` |
| `/activities-details` | ActivitiesDetails | `src/Pages/ActivitiesDetails.jsx` |
| `/shop` | Shop | `src/Pages/Shop.jsx` |
| `/shop/:id` | ShopDetails | `src/Pages/ShopDetails.jsx` |
| `/cart` | Cart | `src/Pages/Cart.jsx` |
| `/checkout` | Checkout | `src/Pages/Checkout.jsx` |
| `/wishlist` | Wishlist | `src/Pages/Wishlist.jsx` |
| `/gallery` | Gallery | `src/Pages/Gallery.jsx` |
| `/tour` | Tour | `src/Pages/Tour.jsx` |
| `/tour-details` | TourDetails | `src/Pages/TourDetails.jsx` |
| `/resort` | Resort | `src/Pages/Resort.jsx` |
| `/resort/:id` | ResortDetails | `src/Pages/ResortDetails.jsx` |
| `/tour-guide` | TourGuide | `src/Pages/TourGuide.jsx` |
| `/tour-guide/:id` | TourGuiderDetails | `src/Pages/TourGuiderDetails.jsx` |
| `/faq` | Faq | `src/Pages/Faq.jsx` |
| `/price` | Pricing | `src/Pages/Pricing.jsx` |
| `/error` | Error | `src/Pages/Error.jsx` |
| `/blog` | Blog | `src/Pages/Blog.jsx` |
| `/blog/:id` | BlogDetails | `src/Pages/BlogDetails.jsx` |
| `/contact` | Contact | `src/Pages/Contact.jsx` |

> **Note:** There are 4 homepage variants (HomeOne–HomeFour). Only HomeOne is the live root `/` route. The others exist as alternative layouts but are not linked from the main nav.

---

## 5. Page Compositions

### 5.1 Home Page — `src/Pages/HomeOne.jsx`

Sections assembled in order:

| # | Component | File | Description |
|---|---|---|---|
| 1 | `HeaderOne` | `Header/HeaderOne.jsx` | Sticky top navigation |
| 2 | `BannerOne` | `Banner/BannerOne.jsx` | Full-screen hero slider (3 slides) |
| 3 | `Booking` | `Booking/Booking.jsx` | Search/filter bar |
| 4 | `CategoryOne` | `Category/CategoryOne.jsx` | Tour category carousel |
| 5 | `DestinationOne` | `Destination/DestinationOne.jsx` | Popular destination coverflow slider |
| 6 | `AboutOne` | `About/AboutOne.jsx` | Company intro with images |
| 7 | `TourOne` | `Tour/TourOne.jsx` | 6 service cards carousel |
| 8 | `GalleryOne` | `Gallery/GalleryOne.jsx` | Masonry photo gallery |
| 9 | `CounterOne` | `Counter/CounterOne.jsx` | Animated statistics |
| 10 | `TourGuide` | `Guide/TourGuide.jsx` | Team/guide carousel |
| 11 | `HighlightsOne` | `Highlights/HighlightsHome.jsx` | "Why choose us" checklist |
| 12 | `BrandOne` | `Brand/BrandOne.jsx` | Partner logo strip |
| 13 | `BlogOne` | `Blog/BlogOne.jsx` | Blog post preview carousel |
| 14 | `FooterOne` | `Footer/FooterOne.jsx` | Footer |
| — | `ScrollToTop` | `ScrollToTop.jsx` | Floating scroll-to-top button |

### 5.2 About Page — `src/Pages/About.jsx`

| # | Component | Notes |
|---|---|---|
| 1 | `HeaderOne` | Same header as homepage |
| 2 | `Breadcrumb` | Title: "About PRAVAASH" |
| 3 | `AboutFour` | Company history + 3 feature items |
| 4 | `OfferTwo` | 7 service cards grid |
| 5 | `ElementSection` | Matter.js physics animation |
| 6 | `TourGuideTwo` | 3-up guide cards (placeholder names — needs updating) |
| 7 | `TestimonialOne` | 3-up testimonial carousel (needs real reviews) |
| 8 | `BrandOne` | Partner logo strip |
| 9 | `GalleryFive` | Photo gallery variant |
| 10 | `FooterFour` | Dark footer |

### 5.3 Tour Page — `src/Pages/Tour.jsx`

`HeaderOne` → `Breadcrumb("Popular Tours")` → `TourInner` → `FooterFour`

`TourInner` reads `data-tour.json`. Supports grid/list toggle, search input (UI only), sort dropdown (UI only), 8 per page pagination, sidebar with category filters, recent posts, tags, and CTA widget.

### 5.4 Destination Page — `src/Pages/Destination.jsx`

`HeaderOne` → `Breadcrumb("Destination")` → `DestinationInner` → `FooterFour`

`DestinationInner` reads `data-destination.json`. Same grid/list/pagination/sidebar pattern as Tour.

### 5.5 Blog Page — `src/Pages/Blog.jsx`

`HeaderOne` → `Breadcrumb("Blog Lists View")` → `BlogInner` → `FooterFour`

### 5.6 Contact Page — `src/Pages/Contact.jsx`

| # | Component | Notes |
|---|---|---|
| 1 | `HeaderOne` | |
| 2 | `Breadcrumb` | Title: "Contact Us" |
| 3 | `GetInTouch` | 3 info cards: address, phone, email |
| 4 | `BookATour` | Inquiry form + video modal |
| 5 | `ContactMap` | Embedded Google Maps iframe (SoBo Centre coords) |
| 6 | `FooterFour` | |

---

## 6. Component Reference

### 6.1 Header — `src/Components/Header/HeaderOne.jsx`

**Behaviour:**
- Two-row layout: top info bar + main menu row.
- Sticky: main menu becomes fixed after 500px scroll.
- Desktop nav (`xl+` breakpoint only); mobile hamburger below `xl`.

**Top bar info (to customize):**
- Location text: `"Ahmedabad, India"` (line ~48)
- Hours text: `"Sun to Friday: 8.00 am - 7.00 pm"` (line ~52)
- Language selector options: Language / CNY / EUR / AUD (no real currency switching — cosmetic only)
- Top-right links: FAQ → `/faq`, Support → `/contact`
- "Inquiry Now" CTA button → `/contact`

**Desktop nav structure (live links):**
- Home → `/`
- About Us → `/about`
- Packages → Destination `/destination`, Destination Details `/destination/1`
- Gallery → Services `/service`, Service Details `/service/1`
- Pages → Shop, Cart, Checkout, Wishlist, Gallery, Tour, Resort, Tour Guide, FAQ, Price, Error
- Contact us → `/contact`

**Commented-out nav items** (can be re-enabled by uncommenting JSX blocks):
- Activities submenu (lines ~120–128)
- Blog submenu (lines ~160–170)

**Supporting components:**
- `NiceSelect.jsx` — styled select dropdown wrapper
- `MobileMenu.jsx` — slide-in mobile accordion nav (all links including Blog/Activities are visible in mobile even when commented out in desktop)
- `LoginForm.jsx` — modal triggered by "Sign In / Register" button
- `SideMenu.jsx` — exists but not used in HomeOne

**Logo file:** `/assets/img/logo.png`

---

### 6.2 Banner — `src/Components/Banner/BannerOne.jsx`

Swiper fade-effect hero. Loop enabled. Custom prev/next arrows. Dot pagination.

**To customize slides** — edit the JSX in `BannerOne.jsx`:

| Slide | Sub-title | H1 | CTA Buttons | Background image |
|---|---|---|---|---|
| 1 | "Get unforgetable pleasure with us" | "Natural Wonder of the world" | Explore Tours `/tour`, Our Services `/service` | `/assets/img/hero/hero_bg_1_1.jpg` |
| 2 | "Get unforgetable pleasure with us" | "Let's make your best trip with us" | (same) | `/assets/img/hero/hero_bg_1_2.jpg` |
| 3 | "Get unforgetable pleasure with us" | "Explore beauty of the whole world" | (same) | `/assets/img/hero/hero_bg_1_3.jpg` |

**To add a slide:** Duplicate a `<SwiperSlide>` block, update the `backgroundImage`, sub-title, H1, and buttons.

---

### 6.3 Booking Widget — `src/Components/Booking/Booking.jsx`

Horizontal search bar. 4 NiceSelect dropdowns + submit button. Frontend validation only.

**To customize dropdown options** — edit the arrays in `Booking.jsx`:

| Dropdown | Options |
|---|---|
| Destination | Australia, Dubai, England, Sweden, Thailand, Switzerland |
| Type | Beach, Group Tour, Couple Tour, Family Tour |
| Duration | 1 days – 6 days |
| Tour Category | Luxury, Deluxe, Economy |

**To connect to a backend:** Replace the `handleSubmit` function body to call an API or form service (e.g. EmailJS, Formspree).

---

### 6.4 Category — `src/Components/Category/CategoryOne.jsx`

Autoplay Swiper with tilt animation on drag. Custom numbered pagination. 5 on desktop.

**Section headings (hardcoded in component):** "Wonderful Place For You" / "Tour Categories"

**To update categories** — edit the array inside `CategoryOne.jsx`:

| ID | Title | Image |
|---|---|---|
| 1 | Cruises | `/assets/img/category/category_1_1.jpg` |
| 2 | Hiking | `/assets/img/category/category_1_2.jpg` |
| 3 | Airbirds | `/assets/img/category/category_1_3.jpg` |
| 4 | Wildlife | `/assets/img/category/category_1_4.jpg` |
| 5 | Walking | `/assets/img/category/category_1_5.jpg` |

All category links point to `/destination`. To change, edit the `<Link to>` values.

---

### 6.5 Destination — `src/Components/Destination/DestinationOne.jsx`

Homepage coverflow Swiper. 5 items on desktop.

**Section headings:** "Top Destination" / "Popular Destination"

**Destination cards (hardcoded — NOT from JSON):**

| Name | Listing count | Image |
|---|---|---|
| Maldives | 15 | `destination_1_1.jpg` |
| Thailand | 22 | `destination_1_2.jpg` |
| Belgium | 25 | `destination_1_3.jpg` |
| Island | 28 | `destination_1_4.jpg` |
| Maldives | 30 | `destination_1_5.jpg` |

> The **Destination listing page** (`/destination`) uses `data-destination.json` — a separate data source. Update both when adding/changing destinations.

---

### 6.6 About Section — `src/Components/About/AboutOne.jsx`

Used on the homepage. 2-column: left = 3 overlapping images, right = text + floating badge + CTA.

**To customize text** — edit `AboutOne.jsx`:
- Sub-title: `"In Ahmedabad"`
- H2: `"Best Tour & Travel Agency"`
- Body paragraph: company description text
- Floating badge: `"4.9k"` rating text
- CTA button: "Learn More" → `/about`

**Images:** `about_1_1.jpg`, `about_1_2.jpg`, `about_1_3.jpg` in `/assets/img/bg/`

**Commented-out feature items** (2 items below body text) — uncomment to display Domestic/International package highlight boxes.

---

### 6.7 Tour Services — `src/Components/Tour/TourOne.jsx`

Background-image section. 6-card Swiper carousel. 4 on xl, 3 on lg, 2 on md, 1 on mobile.

**Section headings (hardcoded):**
- Sub-title: `"Top Travel Services"`
- H2: `"In Ahmedabad"`
- Body: `"At PRAVAASH HOLIDAYZ, we offer complete travel solutions under one roof"`
- Background: `/assets/img/bg/tour_bg_1.jpg`

**To update service cards** — edit the `<SwiperSlide>` blocks in `TourOne.jsx`:

| Key | Title | Description | Image |
|---|---|---|---|
| tour1 | Domestic Packages | Goa, Kerala, Himachal, Kashmir, Rajasthan, Andaman and more | `tour_box_1.jpg` |
| tour2 | International Packages | Dubai, Bali, Thailand, Maldives, Singapore, Europe and more | `tour_box_2.jpg` |
| tour3 | Honeymoon Packages | Romantic and specially designed packages | `tour_box_3.jpg` |
| tour4 | Group & Family Tours | Well-organized group departures and family holidays | `tour_box_4.jpg` |
| tour5 | Hotel & Flight Bookings | Best deals on hotels, resorts, and flight tickets | `tour_box_5.jpg` |
| tour6 | Visa Assistance in Ahmedabad | Complete visa guidance and documentation support | `tour_box_6.jpg` |

All cards link to `/tour-details`. To link to individual tour pages, change `<Link to="/tour-details">` to a specific route.

---

### 6.8 Gallery — `src/Components/Gallery/GalleryOne.jsx`

Masonry 5-column grid. 7 images. Lightbox modal on click (custom `Modal` component wrapping react-modal).

**Section headings:** "Make Your Tour More Pleasure" / "Recent Gallery"

**Images (in `/assets/img/gallery/`):** `gallery_1_1.jpg` through `gallery_1_7.jpg`

**To add/remove images:** Edit the array in `GalleryOne.jsx`. Add image files to `/public/assets/img/gallery/`.

---

### 6.9 Counter — `src/Components/Counter/CounterOne.jsx`

4 animated count-up stats. Animation triggers on scroll into viewport (react-intersection-observer).

**To update stats** — edit the data array in `CounterOne.jsx`:

| Label | Value | Suffix |
|---|---|---|
| Years Experience | 12 | — |
| Retention Rate | 97 | % |
| Tour Completed | 8 | k |
| Happy Travellers | 19 | k |

---

### 6.10 Tour Guide — `src/Components/Guide/TourGuide.jsx` (homepage)

Swiper carousel. Autoplay. Pagination. 4 per row on xl, 3 on lg, 2 on md.

**Guide data (hardcoded, cycling 8 entries):** Jacob Jones, Jane Cooper, Guy Hawkins, Jenny Wilson — all "Tourist Guide". All link to `/tour-guide/1`.

Social icons link to generic platform URLs — update `href` values to real profiles.

**About page variant** `TourGuideTwo.jsx`: Grid style. 3 per row. Names currently all "Michel Smith" — placeholder, needs updating.

---

### 6.11 Highlights — `src/Components/Highlights/HighlightsHome.jsx`

Fully hardcoded checklist. No props.

**Body text:** "We are committed to delivering safe, reliable, and memorable travel experiences for families, couples, corporate clients, and groups across Ahmedabad and beyond."

**Checklist items:**
1. Established Travel Agency Since 2014
2. Based in Ahmedabad, Gujarat
3. Experienced Travel Consultants
4. Customized Holiday Planning
5. Affordable & Transparent Pricing
6. End-to-End Travel Management
7. Dedicated Customer Support

**To edit:** Update the `<li>` items and body text directly in `HighlightsHome.jsx`.

---

### 6.12 Brand / Partners — `src/Components/Brand/BrandOne.jsx`

Infinite autoplay logo strip. 8 SVG logos duplicated to 16 for the loop. Shows 8 on xl+, 6 on lg.

**To update logos:**
1. Replace SVG files in `/public/assets/img/brand/brand_1_1.svg` through `brand_1_8.svg`.
2. Update `href` attributes from `#` to real partner URLs in `BrandOne.jsx`.

---

### 6.13 Blog Preview — `src/Components/Blog/BlogOne.jsx`

Swiper (3 per row on lg+). 6 hardcoded blog posts (posts 4–6 repeat posts 1–3).

**⚠️ Section heading needs fixing:** Currently `"About Us Restaurant"` / `"News & Articles From Tourm"` — should be updated to match the brand.

**Hardcoded blog posts:**

| ID | Date | Read | Title | Image |
|---|---|---|---|---|
| 1 | July 05 2024 | 6 min | 10 Reasons why you should visit New Jersey | `blog_1_1.jpg` |
| 2 | July 06 2024 | 7 min | The best time to visit Japan & enjoy the cherry blossoms | `blog_1_2.jpg` |
| 3 | July 07 2024 | 8 min | The 7 amazing destinations for adventure seekers | `blog_1_3.jpg` |

All links → `/blog/1`. **Update to real blog content when blog posts are added.**

---

### 6.14 Footer

Two variants used in the project:

| Variant | Used on | Background |
|---|---|---|
| `FooterOne.jsx` | HomeOne only | Light |
| `FooterFour.jsx` | All other pages | Dark (`bg-title`) |

`FooterFour` additionally has a newsletter subscription form (email + Subscribe Now button — frontend only, no backend).

**Both footers share this content (update in both files when changing):**

**Column 1 — Brand:**
- Logo: `/assets/img/logo.png`
- Tagline: `"Leading Travel Agency in Ahmedabad Since 2014 / Explore More. Travel Smart. Create Memories."`
- Social links (⚠️ all point to generic platform homepages — update to real profiles):
  - Facebook: `https://www.facebook.com/`
  - Twitter: `https://www.twitter.com/`
  - LinkedIn: `https://www.linkedin.com/`
  - WhatsApp: `https://www.whatsapp.com/`
  - Instagram: `https://instagram.com/`

**Column 2 — Quick Links:**
Home → `/`, About us → `/about`, Our Service → `/service`, Terms of Service → `/contact`, Tour Booking Now → `/contact`

**Column 3 — Contact:**
- Phone: `+91 99090 25094` → `tel:+919909025094`
- Email: `info@pravaashholidayz.com`
- Address: F/410, SOBO Centre, Nr. Safal Parisar, South Bopal, Ahmedabad – 380 058, Gujarat, India

**Column 4 — Instagram gallery:** 6 widget thumbnails (`gallery_1_1.jpg` – `gallery_1_6.jpg`). All link to `https://www.instagram.com/` — ⚠️ update to the real Instagram profile URL.

**⚠️ Copyright line:** `"Copyright 2026 Tourm. All Rights Reserved."` — `"Tourm"` should be replaced with `"Pravaash Holidayz"` in both footer files.

---

### 6.15 Contact Info — `src/Components/Contact/GetInTouch.jsx`

3 cards: Address, Phone, Email. All content hardcoded — edit directly in the file.

---

### 6.16 Book a Tour Form — `src/Components/Contact/BookATour.jsx`

Fields: First Name, Email, Tour Type (dropdown), Message. Submit button.

**⚠️ Tour type dropdown options** need to be updated from Africa Adventure / Africa Wild / Asia to the agency's actual tour types. Edit the `countryOptions` array in `BookATour.jsx`.

**Video modal:** Plays YouTube embed `https://www.youtube.com/embed/cQfIUPw72Dk` — ⚠️ replace with the real company video URL.

**⚠️ No backend:** The form has no action handler. To make it functional, either:
- Use **EmailJS** (no backend required): `npm install @emailjs/browser`
- Use **Formspree**: add the Formspree endpoint as the form's `action`
- Build a custom API endpoint

---

### 6.17 Offer Grid — `src/Components/Offer/OfferTwo.jsx`

Used on the About page. 7-card grid. 4 per row on xl, 3 on lg.

**Service cards:**
1. Domestic & International Tour Packages
2. Customized Holiday Planning
3. Flight Bookings
4. Hotel Reservations
5. Visa Assistance
6. Group Tours & Corporate Travel
7. Honeymoon & Luxury Packages

All "Book Now" buttons → `/contact`. An 8th card (Delicious Food) is commented out.

---

### 6.18 Testimonials — `src/Components/Testimonials/TestimonialOne.jsx`

Swiper (3 on xl, 2 on lg, 1 on mobile). 3 entries looped.

**⚠️ All testimonial texts are placeholder real-estate content — must be replaced with real customer reviews.**

**To update:** Edit the hardcoded testimonial data array in `TestimonialOne.jsx`. Each entry needs: name, designation, text, and avatar image path.

---

### 6.19 Breadcrumb — `src/Components/BreadCrumb/Breadcrumb.jsx`

Reusable component used on all inner pages.

**Props:**
- `title` (string) — page heading displayed in the breadcrumb
- `bgImage` (optional string) — custom background image. Defaults to `/assets/img/bg/breadcumb-bg.jpg`

**Breadcrumb trail:** Home → {title}

---

### 6.20 Scroll Utilities

- `ScrollToTop.jsx` — floating button that appears when user scrolls down; smoothly scrolls to top on click
- `LoadTop.jsx` — inside Router; calls `window.scrollTo(0,0)` on every route change

---

## 7. Data Files (`src/Components/data/`)

These JSON files drive the listing pages. Add, edit, or remove entries here to change what appears on the Tour, Destination, Guide, Service, Activities, Resort, Shop, and Blog listing pages.

### `data-tour.json`
24 entries. Schema: `{ id, image, bannerImg, title, price }`

Destinations covered: Greece, Dubai, Belgium, Maldives, Paris, Switzerland, Bali.
**⚠️ All entries currently priced at `$980.00` — needs real pricing.**

### `data-destination.json`
27 entries. Same schema.

Destinations: Dubai ($980), Italy ($880), France ($680), Maldives ($580), Belgium ($480), Brazil ($380), Spain ($580), Greece ($680), Newzealand ($780) — cycling across 3 pages.

### `data-guide.json`
6 entries. Schema: `{ id, image, img, bannerImg, name, designation }`

Guides: Michel Smith, Janny Willson, Jacob Jones, Maria Prova, Rebeka Maliha, Alif Mahmud.

### `data-service.json`
8 entries. Schema: `{ id, image, bannerImg, title, price }`

Services: Photo Shoot, Tour Guide (×3 — ⚠️ duplicate titles), Kayaking, Safe Flight, Entertainment, Delicious Food.

### `data-activities.json`
24 entries. Includes: Paragliding, Coastal Adventure, Departure, Cultural Immersion, Mountain Campaign, Lake Fishing, Cycling, Hammock on Beach.

### `data-resort.json`
3 entries: Ocean View Resort ($350), Premiur Forest Resort ($250), Delux Hilltop Resort ($980).

### `data-shop.json`
24 entries: Beach casual-shoe, Beach football, Hamok, Beach Hat, Sony Black Headphone, Hoodie, Trendy Sunglass, V-Neck T-Shirt.

### `data-post.json`
4 entries. **⚠️ All 4 have the same title** `"Living sustainability: A day in the life at Realar Residence"` — placeholder content that needs to be replaced with real blog posts.

---

## 8. Asset Directory Structure

All static assets live in `/public/assets/` and are referenced with absolute paths starting `/assets/`.

```
/public/assets/
├── css/
│   ├── style.css           ← Primary custom stylesheet (editable)
│   ├── bootstrap.min.css
│   ├── fontawesome.min.css
│   ├── app.min.css
│   ├── swiper-bundle.min.css
│   └── magnific-popup.min.css
├── fonts/fontawesome/      ← FontAwesome font files
└── img/
    ├── logo.png             ← Main logo (light/on-white)
    ├── logo2.svg            ← Alt logo (used in sidebar/mobile)
    ├── hero/                ← Hero slider backgrounds: hero_bg_1_1–3.jpg
    ├── bg/                  ← Section backgrounds (breadcumb-bg.jpg, tour_bg_1.jpg, etc.)
    ├── tour/                ← Tour card images (tour_box_1–6.jpg, tour_4_1–8.jpg)
    ├── destination/         ← Destination images
    ├── gallery/             ← Gallery images (gallery_1_1–7.jpg)
    ├── blog/                ← Blog thumbnail images
    ├── team/                ← Guide photos (team_1_1–4.jpg, team_img_1–6.jpg)
    ├── widget/              ← Footer Instagram thumbnails (gallery_1_1–6.jpg)
    ├── brand/               ← Partner logos (brand_1_1–8.svg)
    ├── testimonial/         ← Reviewer avatar photos
    ├── shape/               ← Decorative shapes/dividers
    ├── normal/              ← About section images
    ├── icon/                ← UI icon SVGs (user.svg, mail.svg, phone.svg, etc.)
    └── category/            ← Category section images
```

---

## 9. Known Issues & Pending Updates

These are issues identified in the current codebase. Each is a standalone task.

### Content Errors (fix priority: high)

| ID | Issue | Location |
|---|---|---|
| C1 | Blog section heading says `"About Us Restaurant"` | `BlogOne.jsx` — section title |
| C2 | Copyright says `"Tourm"` instead of `"Pravaash Holidayz"` | `FooterOne.jsx` + `FooterFour.jsx` |
| C3 | All 3 testimonial texts are real-estate template content, not travel reviews | `TestimonialOne.jsx` — testimonial data array |
| C4 | TourGuideTwo shows "Michel Smith" for all 3 guides | `TourGuideTwo.jsx` — guide data |
| C5 | All 4 blog data entries share the same placeholder title | `data-post.json` |
| C6 | `data-service.json` has "Tour Guide" listed 3 times | `data-service.json` |
| C7 | All 24 tour entries priced at $980.00 | `data-tour.json` |
| C8 | BookATour tour type options are Africa Adventure/Wild/Asia — not relevant | `BookATour.jsx` — `countryOptions` array |
| C9 | ContactOne sidebar phone shows `+256 214 203 215` (placeholder) | Sidebar component |
| C10 | Social media footer links point to generic platform homepages | `FooterOne.jsx`, `FooterFour.jsx` |
| C11 | Footer Instagram column links to `https://www.instagram.com/` (no account) | `FooterOne.jsx`, `FooterFour.jsx` |
| C12 | BookATour YouTube video is a generic demo, not a company video | `BookATour.jsx` — iframe `src` |

### Features Not Connected to Backend (fix priority: medium)

| ID | Feature | File | Notes |
|---|---|---|---|
| B1 | Contact form (BookATour) submits to `mail.php` which doesn't exist | `BookATour.jsx` | Connect to EmailJS / Formspree / API |
| B2 | Newsletter form in footer is UI only | `FooterFour.jsx` | Connect to email service |
| B3 | Booking widget search is frontend only | `Booking.jsx` | Connect to search results page or API |
| B4 | Sort dropdown in Tour/Destination pages is UI only | `TourInner.jsx`, `DestinationInner.jsx` | Implement sort logic |
| B5 | Search input in Tour/Destination pages is UI only | `TourInner.jsx`, `DestinationInner.jsx` | Implement filter logic |
| B6 | Language/currency selector is cosmetic only | `HeaderOne.jsx` — `NiceSelect` | Implement if multi-language needed |
| B7 | Login / Register modal has no auth backend | `LoginForm.jsx` | Implement auth if needed |

### Commented-Out Features (can be re-enabled)

| ID | Feature | How to re-enable |
|---|---|---|
| E1 | Blog dropdown in desktop nav | Uncomment JSX block in `HeaderOne.jsx` (~lines 160–170) |
| E2 | Activities dropdown in desktop nav | Uncomment JSX block in `HeaderOne.jsx` (~lines 120–128) |
| E3 | About Us feature items in `AboutOne` | Uncomment feature item blocks in `AboutOne.jsx` |
| E4 | Newsletter in `FooterOne` | Uncomment the newsletter section in `FooterOne.jsx` |
| E5 | Delicious Food service card | Uncomment 8th card block in `OfferTwo.jsx` |

---

## 10. Common Change Recipes

### Change contact information
Edit these files simultaneously:
- `src/Components/Contact/GetInTouch.jsx` — address, phone, email cards
- `src/Components/Footer/FooterOne.jsx` — Col 3 (phone, email, address)
- `src/Components/Footer/FooterFour.jsx` — Col 3 (same)
- `src/Components/Header/HeaderOne.jsx` — top bar location/hours text

### Add a new tour service card
Open `src/Components/Tour/TourOne.jsx`. Duplicate a `<SwiperSlide>` block, assign a new key, update title, description, image path, and link. Add the corresponding image to `/public/assets/img/tour/`.

### Add a destination to the listing page
Open `src/Components/data/data-destination.json`. Add an entry with the schema:
```json
{ "id": 28, "image": "/assets/img/destination/...", "bannerImg": "/assets/img/destination/...", "title": "Destination Name", "price": "$XXX" }
```
Add images to `/public/assets/img/destination/`.

### Update gallery images
Replace files in `/public/assets/img/gallery/gallery_1_1.jpg` through `gallery_1_7.jpg`. To change the count, also edit the array in `src/Components/Gallery/GalleryOne.jsx` and footer widgets in both footer files.

### Change hero slides
Open `src/Components/Banner/BannerOne.jsx`. Each `<SwiperSlide>` has a `backgroundImage` inline style, `sub-title`, and `H1`. Replace images in `/public/assets/img/hero/`.

### Add a real blog post
1. Add entry to `src/Components/data/data-post.json`
2. Add entry to the hardcoded array in `src/Components/Blog/BlogOne.jsx`
3. Add the blog thumbnail image to `/public/assets/img/blog/`
4. Update `BlogDetails.jsx` if you want a real detail page

### Update statistics
Open `src/Components/Counter/CounterOne.jsx` and edit the value, suffix, and label for each of the 4 counter items.

### Replace partner logos
1. Replace SVG files in `/public/assets/img/brand/brand_1_1.svg` – `brand_1_8.svg`
2. Update the `href` attributes from `#` to real partner website URLs in `BrandOne.jsx`

### Connect a form to EmailJS
1. `npm install @emailjs/browser`
2. Create account at emailjs.com, get service ID, template ID, public key
3. In `BookATour.jsx`, replace the form's `onSubmit` with:
```js
import emailjs from '@emailjs/browser';
emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')
```

### Enable Blog in desktop navigation
In `src/Components/Header/HeaderOne.jsx`, find the commented block:
```jsx
{/* <li className="menu-item-has-children">
    <Link to="#">Blog</Link>
    ...
```
Remove the `{/* ... */}` comment delimiters.

### Fix copyright text in footer
In both `FooterOne.jsx` and `FooterFour.jsx`, find `"Copyright 2026 Tourm"` and replace with `"Copyright 2026 Pravaash Holidayz"`.

---

## 11. Component Architecture Diagram

```
src/index.js
└── src/App.js
    └── src/Pages/RouterPage.jsx  (HashRouter)
        ├── LoadTop               (scroll reset on route change)
        └── Routes
            │
            ├── /  →  HomeOne.jsx
            │         ├── HeaderOne (sticky nav + mobile menu + login modal)
            │         ├── BannerOne (Swiper hero, 3 slides)
            │         ├── Booking (search bar, 4 dropdowns)
            │         ├── CategoryOne (tilt carousel, 5 categories)
            │         ├── DestinationOne (coverflow Swiper)
            │         ├── AboutOne (2-col text + images)
            │         ├── TourOne (6-card service Swiper)
            │         ├── GalleryOne (masonry + lightbox)
            │         ├── CounterOne (4 animated stats)
            │         ├── TourGuide (team carousel)
            │         ├── HighlightsHome (checklist)
            │         ├── BrandOne (logo strip Swiper)
            │         ├── BlogOne (blog card Swiper)
            │         └── FooterOne
            │
            ├── /about  →  About.jsx
            │              ├── HeaderOne, Breadcrumb("About PRAVAASH")
            │              ├── AboutFour, OfferTwo, ElementSection (matter-js)
            │              ├── TourGuideTwo, TestimonialOne
            │              ├── BrandOne, GalleryFive
            │              └── FooterFour
            │
            ├── /destination  →  Destination.jsx
            │                    └── DestinationInner (data-destination.json)
            │
            ├── /destination/:id  →  DestinationDetails.jsx
            │
            ├── /tour  →  Tour.jsx
            │             └── TourInner (data-tour.json)
            │
            ├── /tour-details  →  TourDetails.jsx
            │
            ├── /service  →  Service.jsx
            │                └── reads data-service.json
            │
            ├── /blog  →  Blog.jsx
            │             └── BlogInner (data-post.json)
            │
            ├── /contact  →  Contact.jsx
            │                ├── GetInTouch (3 info cards)
            │                ├── BookATour (form + video modal)
            │                └── ContactMap (Google Maps iframe)
            │
            ├── /gallery, /resort, /tour-guide  →  (respective listing pages)
            ├── /shop, /cart, /checkout, /wishlist  →  (e-commerce pages)
            ├── /faq, /price, /error  →  (utility pages)
            └── /activities, /activities-details  →  (activities pages)
```

---

## 12. Development Workflow

### Run locally
```
npm start
```
Opens at `http://localhost:3000`. Uses Create React App dev server with hot reload.

### Build for production
```
npm run build
```
Outputs to `/build/`. The `postbuild` script automatically patches asset paths for GitHub Pages.

### Deploy
Push to `main` or `master` branch. GitHub Actions runs the build and deploys automatically.

### To test a production-like build locally
```
npm install -g serve
serve -s build
```
