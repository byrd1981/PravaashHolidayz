# System Architecture Overview

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    LIVE WEBSITE                             │
│    https://byrd1981.github.io/PravaashHolidayz/             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ├─ GitHub Pages
                       ├─ Automatic build on push
                       └─ npm run build → deployed

┌──────────────────────────────────────────────────────────────┐
│                   SOURCE CODE                                │
│      src/ folder in GitHub repository                        │
└──────────────────────┬───────────────────────────────────────┘
                       │
         ┌─────────────┼─────────────┐
         │             │             │
    ┌────▼───┐  ┌─────▼──────┐  ┌──▼──────┐
    │ Pages  │  │ Components │  │  Data   │
    └────────┘  └────────────┘  └─────────┘
         │             │             │
    Tour.jsx      Header.jsx   packages-master.json
    Router.jsx    Destination  ← SINGLE SOURCE OF TRUTH


```

---

## 📊 Data Flow Diagram

```
User visits: https://byrd1981.github.io/PravaashHolidayz/#/destination/gujarat
                                          │
                                          ▼
                        React Router reads URL parameter
                                   :category = "gujarat"
                                          │
                                          ▼
                     DestinationPackages.jsx component loads
                                          │
                                          ▼
                  Queries packages-master.json for "gujarat"
                                          │
                                          ▼
         Found: { id: 1, slug: "gujarat", subPackages: [...] }
                                          │
                                          ▼
                  Maps through subPackages array (4 items)
                                          │
                                          ▼
              Renders 4 PackageCard components with data
                                          │
                                          ▼
                        Display: 4 package cards on page
                        + Sidebar with category links
                        + Back to All Tours button

```

---

## 📁 Project Structure

```
tourm/
├── public/                          # Static files
│   ├── assets/
│   │   ├── css/                    # Stylesheets
│   │   ├── fonts/                  # Font files
│   │   ├── img/                    # Images
│   │   │   └── tour_4_1.jpg        # Package images
│   │   └── js/                     # Scripts
│   └── index.html
│
├── src/
│   ├── Components/
│   │   ├── data/
│   │   │   └── packages-master.json          ← ⭐ EDIT FOR CONTENT
│   │   │
│   │   ├── Destination/
│   │   │   ├── DestinationPackages.jsx       ← Dynamic listings
│   │   │   └── PackageCard.jsx               ← Card display
│   │   │
│   │   ├── Header/
│   │   │   └── HeaderOne.jsx                 ← Navigation menu
│   │   │
│   │   ├── Tour/
│   │   │   ├── TourInner.jsx                 ← Sidebar widgets
│   │   │   ├── TourCard.jsx
│   │   │   └── TourCardTwo.jsx
│   │   │
│   │   ├── BreadCrumb/
│   │   ├── Footer/
│   │   └── ScrollToTop/
│   │
│   ├── Pages/
│   │   ├── Router.jsx                        ← Route definitions
│   │   ├── Tour.jsx                          ← Tour page
│   │   ├── DestinationPackages.jsx           ← Page wrapper
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.js                                ← Main app component
│   └── index.js                              ← Entry point
│
├── package.json                              ← Dependencies
├── .github/
│   └── workflows/
│       └── deploy-pages.yml                  ← Auto-deployment config
│
├── WORK_SESSION_2026-09-27.md               ← Today's summary
├── QUICK_REFERENCE_FUTURE_CHANGES.md        ← How-to guide
└── ARCHITECTURE_OVERVIEW.md                 ← This file

```

---

## 🔄 Component Hierarchy

```
App.js
└── RouterPage.jsx (defines all routes)
    ├── Route: /
    │   └── HomeOne.jsx
    │
    ├── Route: /tour
    │   └── Tour.jsx
    │       ├── HeaderOne.jsx (navigation)
    │       ├── Breadcrumb.jsx
    │       ├── TourInner.jsx
    │       │   ├── TourCard.jsx
    │       │   └── TourCardTwo.jsx
    │       └── FooterFour.jsx
    │
    ├── Route: /destination/:category     ← NEW ROUTE
    │   └── DestinationPackagesPage.jsx
    │       ├── HeaderOne.jsx (navigation)
    │       ├── Breadcrumb.jsx
    │       ├── DestinationPackages.jsx   ← NEW COMPONENT
    │       │   ├── PackageCard.jsx       ← NEW COMPONENT (map)
    │       │   ├── PackageCard.jsx
    │       │   ├── PackageCard.jsx
    │       │   └── PackageCard.jsx
    │       │       (sidebar with category links)
    │       └── FooterFour.jsx
    │
    ├── Route: /about
    │   └── About.jsx
    │
    ├── Route: /contact
    │   └── Contact.jsx
    │
    └── ... other routes

```

---

## 📋 Data Structure

### packages-master.json Format

```json
[
  {
    "id": 1,
    "slug": "gujarat",                        // ← Used in URL /destination/gujarat
    "title": "Gujarat Tour Package",          // ← Main card title
    "image": "tour_4_1.jpg",                 // ← Card image
    "price": "Call for the Cost",            // ← Main card price
    "duration": "4 - 7 Days",                // ← Duration range
    "label": "Gujarat Tour Packages",        // ← Heading on destination page
    "subPackages": [
      {
        "id": "GUJ0001",                     // ← Unique ID
        "tourCode": "GUJ0001",               // ← Display code
        "title": "Gujarat : 3N/4D",          // ← Package title
        "duration": "3N / 4D",               // ← Exact duration
        "itinerary": "Dwarka (2N) – Somnath (1N)",  // ← Destinations
        "price": "Call for the Cost",        // ← Package price
        "image": "tour_4_1.jpg"              // ← Card image
      },
      { ... more packages }
    ]
  },
  { ... more categories }
]
```

### Key Fields:
- **slug**: Used in URL routing (must be unique, lowercase)
- **id**: Unique category ID
- **subPackages**: Array of packages in this category
- **tourCode**: Display code for each package (GUJ0001, RAJ0001, etc.)

---

## 🛣️ URL Routing Map

```
Root: https://byrd1981.github.io/PravaashHolidayz/

Route: /
└── Home page

Route: /tour
└── Tour page (4 main package cards)
    ├── Breadcrumb: "Popular Packages"
    ├── Sidebar: Categories, Recent Posts
    └── Detail View button → /destination/{slug}

Route: /destination/gujarat
├── Shows: 4 Gujarat packages (GUJ0001-GUJ0004)
└── Heading: "Gujarat Tour Packages"

Route: /destination/rajasthan
├── Shows: 2 Rajasthan packages (RAJ0001-RAJ0002)
└── Heading: "Rajasthan Tour Packages"

Route: /destination/karnataka
├── Shows: 9 Karnataka packages (KAR0001-KAR0009)
└── Heading: "Karnataka Tour Packages"

Route: /destination/kerala
├── Shows: 4 Kerala packages (KE0001-KE0004)
└── Heading: "Kerala Tour Packages"

Route: /about
└── About page

Route: /contact
└── Contact page

Route: (others - Gallery, Services, etc.)

```

---

## 🎯 Component Responsibilities

### DestinationPackages.jsx
- **Input**: URL parameter `:category`
- **Logic**:
  1. Read category from URL
  2. Find matching object in packages-master.json
  3. Show error if not found
  4. Map through subPackages array
- **Output**: Category heading + package cards + sidebar

### PackageCard.jsx
- **Input**: tourCode, title, duration, itinerary, price, image
- **Output**: Styled card displaying package info

### HeaderOne.jsx
- **Menu Structure**:
  - Home (now uses React Router Link)
  - About Us
  - Packages (direct to /tour)
  - Gallery (submenu)
  - Contact Us
- **Note**: Pages menu commented out

### Tour.jsx
- **Displays**: Main tour page with 4 package categories
- **Breadcrumb**: "Popular Packages"
- **Sidebar**: Categories + Recent Posts (Popular Tags removed)

---

## 🚀 Deployment Flow

```
1. Developer: Make changes
   ├── Edit packages-master.json (content)
   └── Edit component files (functionality)

2. Developer: Git commit & push
   └── git push origin main

3. GitHub: Webhook triggered
   └── Runs GitHub Actions workflow

4. Build Job:
   ├── Checkout code
   ├── Setup Node.js 22
   ├── npm ci (clean install)
   ├── npm run build
   └── Output: build/ folder

5. Deploy Job:
   ├── Upload build artifacts
   └── Deploy to GitHub Pages

6. Live:
   └── https://byrd1981.github.io/PravaashHolidayz/
       (Updated within 1-2 minutes)

```

---

## 🔑 Key Files to Remember

| File | Purpose | Edit? | Impact |
|------|---------|-------|--------|
| `packages-master.json` | Package data | YES - for content | Live immediately |
| `DestinationPackages.jsx` | Package display | NO - unless logic needed | Component behavior |
| `RouterPage.jsx` | Route definitions | NO - unless adding routes | URL routing |
| `HeaderOne.jsx` | Navigation menu | YES - for menu changes | Menu structure |
| `Tour.jsx` | Tour page | YES - for text/breadcrumb | Tour page display |
| `TourInner.jsx` | Sidebar widgets | YES - to add/remove widgets | Sidebar content |

---

## 📊 Current Statistics

- **Total Categories**: 4
- **Total Packages**: 19
- **Git Commits**: 2 (today)
- **Routes**: 6 main + 4 dynamic
- **Components Created**: 3 new
- **Deployment Time**: ~1-2 minutes

---

## ✅ Latest Changes Summary (2026-09-27)

✅ **Commit f91d830**: Tour package architecture
- Single JSON source for all packages
- Dynamic routing for categories
- New destination page components
- Navigation menu restructured
- Sidebar widgets optimized

✅ **Commit 8edf11e**: Navigation fixes
- Home menu link fixed for GitHub Pages
- Changed from `href` to React Router `Link`

---

## 🎓 Learning Points

1. **Data-Driven UI**: All package content comes from one JSON file
2. **Dynamic Routing**: URL parameter `:category` maps to JSON slug
3. **Component Reusability**: PackageCard used for all package types
4. **SEO-Friendly URLs**: `/destination/gujarat` is semantic
5. **GitHub Pages Deployment**: Automatic build on every push

---

**Document Version**: 1.0
**Last Updated**: 2026-09-27
**Next Review**: When major changes planned

