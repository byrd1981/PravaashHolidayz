# Quick Reference Guide - Making Future Changes

## 📌 For Content Updates (Non-Technical)

### Add or Update Tour Packages
**File to Edit**: `src/Components/data/packages-master.json`

#### To Add a New Package to Existing Category:
1. Open the JSON file
2. Find the category (e.g., "gujara", "rajasthan", "karnataka", "kerala")
3. Add to the `subPackages` array:
```json
{
  "id": "GUJ0005",
  "tourCode": "GUJ0005",
  "title": "Gujarat : 7N/8D",
  "duration": "7N / 8D",
  "itinerary": "New destination info here",
  "price": "Call for the Cost",
  "image": "tour_4_1.jpg"
}
```
4. Save file
5. Push to GitHub

#### To Add a Completely New Category:
1. Add new object to root array in JSON:
```json
{
  "id": 5,
  "slug": "goa",  // ← This creates the URL: /destination/goa
  "title": "Goa Tour Package",
  "image": "tour_4_5.jpg",
  "price": "Call for the Cost",
  "duration": "3 - 5 Days",
  "label": "Goa Tour Packages",
  "subPackages": [
    // Add packages here
  ]
}
```
2. Save file
3. Push to GitHub

---

## 🛠 For Technical Updates

### Change Menu Items
**File**: `src/Components/Header/HeaderOne.jsx`

Current Menu Structure:
- Home
- About Us
- Packages (direct link to /tour)
- Gallery (with submenu)
- Contact Us

### Change Breadcrumb Text
**File**: `src/Pages/Tour.jsx`

Current: `title="Popular Packages"`

### Modify Sidebar Widgets
**File**: `src/Components/Tour/TourInner.jsx`

Currently showing: Categories, Recent Posts
Commented out: Popular Tags, Need Help widget

---

## 📂 File Structure

```
src/
├── Components/
│   ├── data/
│   │   └── packages-master.json          ← EDIT THIS FOR CONTENT
│   ├── Destination/
│   │   ├── DestinationPackages.jsx       ← Dynamic page
│   │   └── PackageCard.jsx               ← Package display
│   ├── Header/
│   │   └── HeaderOne.jsx                 ← Navigation
│   └── Tour/
│       └── TourInner.jsx                 ← Tour page widgets
└── Pages/
    ├── Tour.jsx                          ← Main tour page
    ├── DestinationPackages.jsx           ← Page wrapper
    └── RouterPage.jsx                    ← Routes
```

---

## 🔄 Git Workflow for Changes

### Step 1: Make Changes
- Edit JSON for content
- Edit React files for functionality

### Step 2: Stage Files
```bash
git add src/Components/data/packages-master.json
# Or for code changes:
git add src/Components/Header/HeaderOne.jsx
```

### Step 3: Commit
```bash
git commit -m "Brief description of changes"
```

### Step 4: Push
```bash
git push origin main
```

### Step 5: Deploy
- GitHub Actions automatically runs
- Build and deploy happens automatically
- Check: https://github.com/byrd1981/PravaashHolidayz/actions

---

## 🧪 Testing URLs After Changes

### Before Going Live:
Test locally in terminal:
```bash
npm start
# Navigate to: http://localhost:3000
```

### After Push to GitHub:
Test these URLs:

1. Main tour page:
   - https://byrd1981.github.io/PravaashHolidayz/#/tour

2. Each category:
   - https://byrd1981.github.io/PravaashHolidayz/#/destination/gujarat
   - https://byrd1981.github.io/PravaashHolidayz/#/destination/rajasthan
   - https://byrd1981.github.io/PravaashHolidayz/#/destination/karnataka
   - https://byrd1981.github.io/PravaashHolidayz/#/destination/kerala

---

## ⚡ Common Tasks

### Task 1: Update Gujarat Package Price
1. Edit `packages-master.json`
2. Find Gujarat → subPackages → GUJ0001
3. Change `"price": "Call for the Cost"` to desired price
4. Push to GitHub
5. Check live site after ~1-2 minutes

### Task 2: Add New Tour Code GUJ0005
1. Edit `packages-master.json`
2. In Gujarat → subPackages array, add new package object
3. Fill in: tourCode, title, duration, itinerary, price, image
4. Push to GitHub
5. It appears automatically at https://byrd1981.github.io/PravaashHolidayz/#/destination/gujarat

### Task 3: Create New State/Destination Category
1. Edit `packages-master.json`
2. Add new object to root array with:
   - New `slug` (e.g., "himachal")
   - `id` (next available number)
   - `title`, `image`, `price`, `duration`, `label`
   - `subPackages` array with packages
3. Push to GitHub
4. New URL automatically works: `/destination/himachal`

### Task 4: Change Navigation Menu
1. Edit `src/Components/Header/HeaderOne.jsx`
2. Find the menu section (search for `<nav className="main-menu"`)
3. Modify link names or add/remove menu items
4. Push to GitHub
5. Changes appear on all pages after 1-2 minutes

---

## 🐛 Troubleshooting

### Issue: New package doesn't appear
- Check JSON syntax (missing comma, bracket)
- Ensure `slug` matches the URL you're visiting
- Wait 2-3 minutes for GitHub Pages to rebuild

### Issue: "No packages found for this destination"
- Verify the URL slug matches the JSON `slug` exactly
- Check for typos in the JSON file
- Ensure category object has `subPackages` array

### Issue: Menu link broken
- Ensure using `<Link to="">` not `<a href="">`
- For React Router links, use `to` prop
- For external links, use `<a href="">`

### Issue: Changes not showing on live site
1. Verify commit was pushed: `git log --oneline -3`
2. Check GitHub Actions: https://github.com/byrd1981/PravaashHolidayz/actions
3. Wait 2-3 minutes for build and deployment
4. Clear browser cache: Ctrl+Shift+Delete or Cmd+Shift+Delete

---

## 📊 Current Site Statistics

- **Total Packages**: 19
- **Categories**: 4 (Gujarat, Rajasthan, Karnataka, Kerala)
- **Pages**: 
  - Tour page: /tour
  - 4 destination pages: /destination/{category}
  - Other pages: Home, About, Gallery, Contact

---

## 💡 Pro Tips

1. **Before making big changes**: Create a backup of `packages-master.json`
2. **Always test locally first**: Run `npm start` to see changes before pushing
3. **Use descriptive commit messages**: "Added 2 new Kerala packages" instead of "Update"
4. **Check GitHub Actions after push**: Verify the build succeeded
5. **Keep JSON properly formatted**: Use a JSON validator if unsure

---

## 📞 Need Help?

- **Content questions**: Edit `packages-master.json` - it's well-commented
- **Routing questions**: Check `RouterPage.jsx` for all available routes
- **Component questions**: Look at `DestinationPackages.jsx` and `PackageCard.jsx`
- **Navigation questions**: Check `HeaderOne.jsx` for menu structure

---

**Last Updated**: 2026-09-27
**Last Session**: Work_Session_2026-09-27.md

