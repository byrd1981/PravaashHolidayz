# Pravaash Holidayz — Package Content Maintenance Guide

**File to edit:** `src/Components/data/packages-master.json`  
**Who maintains it:** Content team / tour manager  
**Technical knowledge required:** Basic JSON editing (no coding needed)

---

## What This File Controls

Editing `packages-master.json` updates two pages on the website automatically:

| Page URL | What changes |
|---|---|
| `/#/tour` | The 4 main package cards (title, image, price, duration) |
| `/#/destination/gujarat` | All Gujarat sub-package cards |
| `/#/destination/rajasthan` | All Rajasthan sub-package cards |
| `/#/destination/karnataka` | All Karnataka sub-package cards |
| `/#/destination/kerala` | All Kerala sub-package cards |

---

## File Location

```
tourm/
└── src/
    └── Components/
        └── data/
            └── packages-master.json   ← THIS IS THE FILE TO EDIT
```

---

## File Structure — Overview

The file is a list (array) of **category entries**. Each category has:

1. Basic info shown on the `/tour` page card
2. A list of sub-packages shown on the `/destination/[name]` page

```
[
  { Category 1 — Gujarat  },
  { Category 2 — Rajasthan },
  { Category 3 — Karnataka },
  { Category 4 — Kerala    }
]
```

---

## Field Reference — Category Entry

Each category entry has these fields:

| Field | What it controls | Example |
|---|---|---|
| `id` | Unique number — do not change | `1` |
| `slug` | URL keyword — do not change | `"gujarat"` |
| `title` | Card title on `/tour` page | `"Gujarat Tour Package"` |
| `image` | Card image on `/tour` page | `"tour_4_1.jpg"` |
| `price` | Price shown on `/tour` card | `"Call for the Cost"` |
| `duration` | Duration shown on `/tour` card | `"4 - 7 Days"` |
| `label` | Heading on the detail page | `"Gujarat Tour Packages"` |
| `subPackages` | List of individual packages shown on detail page | *(see below)* |

---

## Field Reference — Sub-Package Entry

Each entry inside `subPackages` has these fields:

| Field | What it controls | Example |
|---|---|---|
| `id` | Unique code — do not repeat | `"GUJ0001"` |
| `tourCode` | Tour code shown on the card | `"GUJ0001"` |
| `title` | Package name shown on card | `"Gujarat : 3N/4D"` |
| `duration` | Nights/days shown with clock icon | `"3N / 4D"` |
| `itinerary` | Route shown below title | `"Dwarka (2N) – Somnath (1N)"` |
| `price` | Price shown on card | `"Call for the Cost"` |
| `image` | Card image (file in `/assets/img/tour/`) | `"tour_4_1.jpg"` |

---

## How To: Change a Package Title

**Example:** Change "Gujarat Tour Package" to "Gujarat Special Tour Package"

Find this line:

```json
"title": "Gujarat Tour Package",
```

Change it to:

```json
"title": "Gujarat Special Tour Package",
```

Save the file. The website updates automatically.

---

## How To: Change a Price

Find the entry you want to update and change the `"price"` value.

**Example — add a price:**

```json
"price": "Call for the Cost",
```

Change to:

```json
"price": "₹12,999",
```

> **Note:** If the price is `"Call for the Cost"`, the `/Person` text is automatically hidden on the card. Any other value will show as written.

---

## How To: Change Duration

**On the `/tour` page card** — change the `"duration"` in the category entry:

```json
"duration": "4 - 7 Days",
```

**On the detail page card** — change the `"duration"` inside the sub-package entry:

```json
"duration": "4N / 5D",
```

---

## How To: Change an Itinerary

Find the sub-package entry and update the `"itinerary"` field:

```json
"itinerary": "Dwarka (2N) – Somnath (1N) – Diu (1N)",
```

Use `–` (en dash) between locations to keep the style consistent.

---

## How To: Add a New Sub-Package

Open `packages-master.json`, find the correct category (e.g. Gujarat), and add a new entry inside its `subPackages` array.

**Example — adding GUJ0005 to Gujarat:**

```json
"subPackages": [
    {
        "id": "GUJ0001",
        ...existing entry...
    },
    {
        "id": "GUJ0005",
        "tourCode": "GUJ0005",
        "title": "Gujarat : 7N/8D",
        "duration": "7N / 8D",
        "itinerary": "Ahmedabad (1N) – Dwarka (2N) – Somnath (1N) – Gir (1N) – Diu (2N)",
        "price": "Call for the Cost",
        "image": "tour_4_1.jpg"
    }
]
```

> **Important:** Make sure every entry is separated by a comma `,` except the last one.

---

## How To: Remove a Sub-Package

Find the entry in `subPackages` and delete it including the surrounding `{ }` and the comma before it.

**Before:**

```json
{ "id": "GUJ0003", ... },
{ "id": "GUJ0004", ... }
```

**After removing GUJ0003:**

```json
{ "id": "GUJ0004", ... }
```

---

## How To: Add a Completely New Category (e.g. Goa)

Add a new entry at the end of the main array. Copy an existing entry as a template and fill in the new details.

**Step 1 — Add the entry:**

```json
{
    "id": 5,
    "slug": "goa",
    "title": "Goa Tour Packages",
    "image": "tour_4_5.jpg",
    "price": "Call for the Cost",
    "duration": "3 - 5 Days",
    "label": "Goa Tour Packages",
    "subPackages": [
        {
            "id": "GOA0001",
            "tourCode": "GOA0001",
            "title": "Goa : 3N/4D",
            "duration": "3N / 4D",
            "itinerary": "North Goa (2N) – South Goa (1N)",
            "price": "Call for the Cost",
            "image": "tour_4_5.jpg"
        }
    ]
}
```

**Step 2 — Tell your developer:**  
The developer needs to add one line to the website's URL system:

```
Route: /destination/goa  →  DestinationPackagesPage
```

> Everything else (card on tour page, detail page, sidebar links) will work automatically.

---

## How To: Change an Image

Images are stored in the folder:

```
tourm/public/assets/img/tour/
```

Available images: `tour_4_1.jpg`, `tour_4_2.jpg`, `tour_4_3.jpg`, `tour_4_4.jpg`, `tour_4_5.jpg`, `tour_4_6.jpg`, `tour_4_7.jpg`, `tour_4_8.jpg`

To use a new image:
1. Copy the image file into `tourm/public/assets/img/tour/`
2. Update the `"image"` field in the JSON:

```json
"image": "your-new-image.jpg"
```

---

## JSON Rules — Common Mistakes to Avoid

| Rule | Wrong | Correct |
|---|---|---|
| All text values must be in double quotes | `price: Call for the Cost` | `"price": "Call for the Cost"` |
| Comma after every entry except the last | `{ ... },` ← last item has comma | `{ ... }` ← no comma on last item |
| Do not change `slug` or `id` values | `"slug": "gujrat"` | `"slug": "gujarat"` |
| Use straight quotes only | `"title": "Gujarat"` (curly) | `"title": "Gujarat"` (straight) |

---

## Quick Validation Tool

Before saving, you can check your JSON is valid at:  
**https://jsonlint.com** — paste the file content and click Validate JSON.

A green message means the file is correct. A red message shows exactly which line has an error.

---

## Current Package Summary

| # | Category | Slug | Sub-Packages | Detail Page URL |
|---|---|---|---|---|
| 1 | Gujarat Tour Package | `gujarat` | 4 | `/#/destination/gujarat` |
| 2 | Rajasthan Tour Packages | `rajasthan` | 2 | `/#/destination/rajasthan` |
| 3 | Karnataka Tour Packages | `karnataka` | 9 | `/#/destination/karnataka` |
| 4 | Kerala Tour Packages | `kerala` | 4 | `/#/destination/kerala` |

**Total active sub-packages: 19**

---

## Contact for Technical Help

Any changes beyond editing text in the JSON file (adding new images, adding new categories, changing page layout) should be handled by the development team.

---

*Document version: 1.0 — Pravaash Holidayz Website*
