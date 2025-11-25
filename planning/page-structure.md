# Page Structure

## 🗺️ Signboard Structure

**Key Concept:** Each Agility CMS Page = One Signboard URL

### URL Pattern
- Each page in Agility CMS gets a URL based on its page name
- Example: Page named "Drive-Thru Menu" → `/drive-thru-menu`
- Example: Page named "Lobby Display" → `/lobby-display`

## 📄 Routing Structure

### Dynamic Routing
- **Route:** `/[locale]/[...slug]` (already exists in project)
- **Handler:** `src/app/[locale]/[...slug]/page.tsx`
- **Function:** Fetches page from Agility CMS based on slug

### Example Sign URLs
```
/                           → Home/default sign (if configured)
/drive-thru-menu            → Drive-thru menu signboard
/lobby-display              → Lobby information sign
/breakfast-menu             → Breakfast menu sign
/promotions                 → Promotional content sign
```

## 📱 Page Template

### SignboardTemplate
- **File:** `src/components/agility-pages/SignboardTemplate.tsx` (create this)
- **Zones:**
  - `Header` (optional) - Top area for title/logo
  - `MainContent` (required) - Primary content area
  - `Footer` (optional) - Bottom area
- **Layout:** Full-screen, optimized for digital displays
- **Used By:** All signboard pages

### Layout Structure
```
┌─────────────────────────────┐
│      Header (optional)       │
│   (Title, Logo, etc.)        │
├─────────────────────────────┤
│                             │
│    MainContent Zone         │
│   (Components go here)      │
│                             │
├─────────────────────────────┤
│      Footer (optional)      │
│   (Additional info)         │
└─────────────────────────────┘
```

## 🎨 Page Examples

### Drive-Thru Menu Sign
- **Agility Page Name:** "Drive-Thru Menu"
- **URL:** `/drive-thru-menu`
- **Components:**
  - Header (with logo/title)
  - MenuBoard (displays menu items)
  - Footer (optional)

### Promotional Sign
- **Agility Page Name:** "Promotions"
- **URL:** `/promotions`
- **Components:**
  - ImageDisplay (promotional image)
  - TextDisplay (promotional text)
  - PriceList (special pricing)

### Information Sign
- **Agility Page Name:** "Lobby Display"
- **URL:** `/lobby-display`
- **Components:**
  - TextDisplay (announcements)
  - ImageDisplay (images)
  - RichTextArea (additional content)

## 🔗 How It Works

1. **Create Page in Agility CMS:**
   - Name: "Drive-Thru Menu"
   - Template: SignboardTemplate
   - Add components to zones

2. **Page Routes Automatically:**
   - Agility page name → URL slug
   - Next.js fetches page data
   - Components render based on page configuration

3. **Display on Sign:**
   - Navigate to sign URL (e.g., `/drive-thru-menu`)
   - Full-screen display
   - Auto-refresh (if configured)

## 🌍 Localization (if needed)

### URL Structure
- `/en-us/drive-thru-menu` - English version
- `/fr-ca/drive-thru-menu` - French version (if needed)

### Default Locale
- Default locale can be configured
- Falls back to default if locale not specified

## 🔗 Related Documents

- [Content Strategy](./content-strategy.md) - Content models
- [Component Inventory](./component-inventory.md) - Components used

---

**Last Updated:** [Date]

