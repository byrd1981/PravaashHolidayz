# Change Analysis Report - Homepage Updates
**Date**: September 27, 2026  
**User Request**: Homepage cleanup and email/address updates

---

## 🎯 Changes Requested

1. ❌ **Remove complete section of Tour Guide**
2. ❌ **Remove sub sections of Hiking, Airbird, Walking from tour categories**
3. ❌ **Remove "Listing" word from "Our Amazing Services"**
4. ❌ **Remove Visa Assistance**
5. ❌ **Remove Address from bottom section**
6. ✏️ **Change Mail ID to pravaashholidayz@gmail.com**

---

## 📍 Impact Analysis: How Many Places Each Change Affects

### Change 1: Remove Complete Tour Guide Section
**Impact**: **1 File, 1 Location**

| File | Location | Type | Details |
|------|----------|------|---------|
| `src/Pages/HomeOne.jsx` | Line 19 | Component Import & Usage | `<TourGuide />` component |

**Current Code**:
```jsx
import TourGuide from '../Components/Guide/TourGuide'
...
<TourGuide />
```

**Action**: Comment out or remove the import and component usage

---

### Change 2: Remove Hiking, Airbird, Walking from Categories
**Impact**: **1 File, 2 Locations** (array items appear in both the array definition and may be referenced elsewhere)

| File | Location | Type | Details |
|------|----------|------|---------|
| `src/Components/Category/CategoryOne.jsx` | Lines 12-16, 18-22 | Array Data | Category objects in array |

**Current Categories Array** (10 items total):
```
Cruises ✓ (keep)
Hiking ✗ (REMOVE)
Airbirds ✗ (REMOVE)
Wildlife ✓ (keep)
Walking ✗ (REMOVE)
Cruises ✓ (keep - duplicate)
Hiking ✗ (REMOVE - duplicate)
Airbirds ✗ (REMOVE - duplicate)
Wildlife ✓ (keep - duplicate)
Walking ✗ (REMOVE - duplicate)
```

**Result After Change**:
- **Items to Remove**: 6 items (Hiking ×2, Airbirds ×2, Walking ×2)
- **Items to Keep**: 4 items (Cruises ×2, Wildlife ×2)

---

### Change 3: Remove "Listing" Word from Services
**Impact**: **2 Files, 8 Locations**

| File | Location | Type | Count | Details |
|------|----------|------|-------|---------|
| `src/Components/Offer/OfferTwo.jsx` | Lines 21, 31, 41, 51, 61, 71, 81 | Text (p.destination-text) | 7 items | Services section on homepage |
| `src/Components/Services/ServiceCard.jsx` | Line 15 | Text (p.destination-text) | 1 item | Service card component |

**Current Text** (in OfferTwo.jsx):
- "20 Listing" → "20" (or remove entirely)
- "22 Listing" → "22"
- "23 Listing" → "23"
- "24 Listing" → "24"
- "25 Listing" → "25"
- "26 Listing" → "26"
- "27 Listing" → "27"

**Plus 1 in ServiceCard.jsx**: "20 Listing" → "20"

**Total Replacements**: **8 locations**

---

### Change 4: Remove Visa Assistance
**Impact**: **2 Files, 2 Locations**

| File | Location | Type | Details |
|------|----------|------|---------|
| `src/Components/Tour/TourOne.jsx` | Lines 107-120 | SwiperSlide component | "Visa Assistance in Ahmedabad" |
| `src/Components/Offer/OfferTwo.jsx` | Lines 88-101 | col-xl-3 div block | "Visa Assistance" |

**Locations**:

1. **TourOne.jsx** (Travel Services Slider):
```jsx
<SwiperSlide key="tour6">
  <div className="tour-box th-ani gsap-cursor">
    <div className="tour-box_img global-img">
      <img src="/assets/img/tour/tour_box_6.jpg" alt="..." />
    </div>
    <div className="tour-content">
      <h3 className="box-title">
        <Link to="/tour-details">Visa Assistance in Ahmedabad</Link>
      </h3>
      <p class="sec-text">
        Complete visa guidance and documentation support...
      </p>
    </div>
  </div>
</SwiperSlide>
```

2. **OfferTwo.jsx** (Our Amazing Services Grid):
```jsx
<div className="col-xl-3 col-lg-4 col-md-6">
  <div className="destination-item th-ani">
    <div className="destination-item_img global-img">
      <img src="/assets/img/destination/destination_4_5.jpg" alt="" />
    </div>
    <div className="destination-content">
      <h3 className="box-title">
        <Link to="/service/1">Visa Assistance</Link>
      </h3>
      <p className="destination-text">25 Listing</p>
      ...
    </div>
  </div>
</div>
```

**Total Removals**: **2 blocks** (entire SwiperSlide + entire col-xl-3 div)

---

### Change 5: Remove Address from Bottom Section
**Impact**: **1 File, 1 Location** (but it's a multi-line block)

| File | Location | Type | Details |
|------|----------|------|---------|
| `src/Components/Footer/FooterOne.jsx` | Lines 93-101 | div.info-box_text with location icon | Address information block |

**Current Code**:
```jsx
<div className="info-box_text">
  <div className="icon">
    <img src="/assets/img/icon/location-dot.svg" alt="img" />
  </div>
  <div className="details">
    <p>F/410, SOBO Centre, Nr. Safal Parisar, South Bopal, Ahmedabad – 380 058, Gujarat, India</p>
  </div>
</div>
```

**Action**: Remove entire block (9 lines)

---

### Change 6: Change Email to pravaashholidayz@gmail.com
**Impact**: **1 File, 1 Location**

| File | Location | Type | Current | New |
|------|----------|------|---------|-----|
| `src/Components/Footer/FooterOne.jsx` | Line 84 | mailto link | `info@pravaashholidayz.com` | `pravaashholidayz@gmail.com` |

**Current Code**:
```jsx
<Link
  to="mailto:info@pravaashholidayz.com"
  className="info-box_link"
>
  info@pravaashholidayz.com
</Link>
```

**New Code**:
```jsx
<Link
  to="mailto:pravaashholidayz@gmail.com"
  className="info-box_link"
>
  pravaashholidayz@gmail.com
</Link>
```

**Locations**: **2 places in same link** (href + display text)

---

## 📊 Summary Table

| Change | Files Affected | Locations | Type | Complexity |
|--------|----------------|-----------|------|------------|
| Remove Tour Guide | 1 | 1 | Delete component import + usage | Easy |
| Remove Hiking/Airbird/Walking | 1 | 1 | Delete 6 array items | Easy |
| Remove "Listing" word | 2 | 8 | Text replacement | Easy |
| Remove Visa Assistance | 2 | 2 | Delete 2 large blocks | Easy |
| Remove Address | 1 | 1 | Delete block | Easy |
| Change Email | 1 | 2 | Text replacement | Easy |
| **TOTAL** | **5 files** | **15 locations** | Mixed | Simple |

---

## 📋 Detailed Change Locations

### File 1: `src/Pages/HomeOne.jsx`
**Changes**: 1 location
- **Line 11**: Remove import `import TourGuide from '../Components/Guide/TourGuide'`
- **Line 19**: Remove component `<TourGuide />`

---

### File 2: `src/Components/Category/CategoryOne.jsx`
**Changes**: 1 location (6 array items)
- **Lines 12-16**: Remove items:
  - `{ id: 2, title: "Hiking", ... }`
  - `{ id: 3, title: "Airbirds", ... }`
  - `{ id: 5, title: "Walking", ... }`

- **Lines 18-22**: Remove duplicate items:
  - `{ id: 7, title: "Hiking", ... }`
  - `{ id: 8, title: "Airbirds", ... }`
  - `{ id: 10, title: "Walking", ... }`

---

### File 3: `src/Components/Tour/TourOne.jsx`
**Changes**: 1 location
- **Lines 107-120**: Remove entire SwiperSlide with Visa Assistance

---

### File 4: `src/Components/Offer/OfferTwo.jsx`
**Changes**: 2 locations
- **Line 22**: Remove "Listing" from "20 Listing"
- **Line 32**: Remove "Listing" from "22 Listing"
- **Line 42**: Remove "Listing" from "23 Listing"
- **Line 52**: Remove "Listing" from "24 Listing"
- **Lines 88-101**: Remove entire col-xl-3 div block with Visa Assistance
- **Line 62**: Remove "Listing" from "25 Listing" (if Visa stays - but it's being removed)
- **Line 72**: Remove "Listing" from "26 Listing"
- **Line 82**: Remove "Listing" from "27 Listing"

---

### File 5: `src/Components/Footer/FooterOne.jsx`
**Changes**: 2 locations
- **Lines 84 & 85** (in mailto link): 
  - Change: `info@pravaashholidayz.com` → `pravaashholidayz@gmail.com`
  - **2 replacements** (in `to=` attribute and link text)

- **Lines 93-101**: Remove entire address info-box_text block

---

## 🎬 Implementation Order

**Recommended order for making changes**:

1. **First**: `HomeOne.jsx` - Remove TourGuide component
2. **Second**: `CategoryOne.jsx` - Remove category items (Hiking, Airbird, Walking)
3. **Third**: `TourOne.jsx` - Remove Visa Assistance SwiperSlide
4. **Fourth**: `OfferTwo.jsx` - Remove Visa Assistance card + remove "Listing" text
5. **Fifth**: `FooterOne.jsx` - Change email + remove address block

---

## ✅ Verification Checklist

After making changes, verify:

- [ ] Tour Guide section not visible on homepage
- [ ] Only 4 categories show (Cruises ×2, Wildlife ×2)
- [ ] No "Listing" text visible in "Our Amazing Services" section
- [ ] Visa Assistance card removed from both sections
- [ ] Address block removed from footer
- [ ] Email shows as `pravaashholidayz@gmail.com` in footer
- [ ] No broken links or console errors
- [ ] Homepage loads correctly
- [ ] All sections are properly aligned
- [ ] Mobile responsive layout intact

---

## 📝 Files to Modify (Execution Plan)

```
✏️ TO MODIFY:
├── src/Pages/HomeOne.jsx (1 change)
├── src/Components/Category/CategoryOne.jsx (1 change)
├── src/Components/Tour/TourOne.jsx (1 change)
├── src/Components/Offer/OfferTwo.jsx (2 changes)
└── src/Components/Footer/FooterOne.jsx (2 changes)

Total: 5 files
Total: 15 locations to modify/delete
Estimated Time: 5-10 minutes
Complexity: Easy
```

---

**Ready to proceed with changes?**