# Content Strategy

## 📝 Agility CMS Structure

**Key Concept:** Each "Page" in Agility CMS = One Signboard Display

### Page Structure
- Each sign is a **Page** in Agility CMS
- Pages use **Page Templates** (e.g., "SignboardTemplate")
- Pages contain **Content Zones** with **Components**
- Components pull content from **Content Models**

## 🗂️ Content Models Needed

### 1. Menu
- **Purpose:** Reusable menu collection that can be shared across multiple signs
- **Reference Name:** `Menu`
- **Type:** List (allows multiple menus: Breakfast, Lunch, Dinner, etc.)
- **Fields:**
  - `name` (Text, Required) - e.g., "Breakfast Menu", "Lunch Menu"
  - `description` (LongText, Optional) - Menu description
  - `menuItems` (LinkedContentNestedGrid) - Links to MenuItem content (nested)
- **Usage:** Create once, reuse on multiple signs/components

### 2. Menu Item
- **Purpose:** Individual menu items (name, description, price)
- **Reference Name:** `MenuItem`
- **Type:** List (for menu items)
- **Fields:**
  - `name` (Text, Required)
  - `description` (LongText, Optional)
  - `price` (Decimal, Optional)
  - `image` (ImageAttachment, Optional)
  - `category` (Text, Optional) - For grouping within menu (e.g., "Beverages", "Entrees")
  - `sortOrder` (Integer, Optional) - Display order
- **Relationship:** Can be nested within Menu, or linked via Menu's menuItems field

### 3. Text Block
- **Purpose:** Simple text content for signs
- **Reference Name:** `TextBlock`
- **Type:** Single Item
- **Fields:**
  - `title` (Text, Required)
  - `content` (LongText or Html)
  - `textSize` (Text, Optional) - "large", "medium", "small"

### 4. Image Display
- **Purpose:** Display images on signs
- **Reference Name:** `ImageDisplay`
- **Type:** Single Item
- **Fields:**
  - `image` (ImageAttachment, Required)
  - `caption` (Text, Optional)
  - `altText` (Text, Required)

### 5. Price List
- **Purpose:** Display pricing information
- **Reference Name:** `PriceList`
- **Type:** List
- **Fields:**
  - `itemName` (Text, Required)
  - `price` (Decimal, Required)
  - `description` (LongText, Optional)

## 📄 Page Models/Templates

### SignboardTemplate
- **File:** `src/components/agility-pages/SignboardTemplate.tsx`
- **Zones:**
  - `MainContent` - Primary content area
  - `Header` (optional) - Header/title area
  - `Footer` (optional) - Footer area
- **Usage:** All signboard pages use this template

## 🔗 Content Relationships

```
Page (Sign) ──contains──> Components
Component ──displays──> Menu (shared/reusable)
Menu ──contains──> MenuItems (nested or linked)
Component ──displays──> Other Content Models (TextBlock, ImageDisplay, etc.)
```

### Shared Content Pattern
- **Menus are shared:** Create a Menu once (e.g., "Breakfast Menu"), use it on multiple signs
- **Menu Items belong to Menus:** MenuItems are nested within or linked to a Menu
- **Update once, reflect everywhere:** Update menu items in one place, all signs using that menu update automatically

## 📦 Containers (Content Lists)

| Container Name | Reference Name | Content Model | Purpose |
|---------------|----------------|--------------|---------|
| Menus | `menus` | Menu | Shared menus (Breakfast, Lunch, etc.) |
| Menu Items | `menuitems` | MenuItem | Individual menu items (if not nested) |
| Price List | `pricelist` | PriceList | Pricing display |

### Menu Container Strategy
- **Option 1 (Recommended):** MenuItems nested within Menu (nested content)
  - MenuItems live inside each Menu
  - Each Menu has its own set of MenuItems
  - Most flexible for different menus

- **Option 2:** MenuItems in separate container, linked to Menu
  - MenuItems in `menuitems` container
  - Menu links to MenuItems via LinkedContent field
  - Better if items are shared across multiple menus

## 🎨 Media Assets

### Image Requirements
- **Display Resolution:** Match target display (e.g., 1920x1080, 3840x2160)
- **Format:** JPG, PNG, WebP
- **Optimization:** High quality, optimized for large displays

### File Types
- Images: JPG, PNG, WebP (optimized)
- Videos: MP4 (if needed for future)

## 📋 Content Entry Workflow

### Creating a Shared Menu
1. Create Menu in Agility CMS (e.g., "Breakfast Menu")
2. Add MenuItems to the Menu (nested content)
3. Configure menu items (name, price, description, etc.)
4. Menu is now available for use on any sign

### Using a Menu on a Sign
1. Create/Edit Page in Agility CMS (represents a sign)
2. Add MenuBoard component to page zone
3. Link component to existing Menu (shared/reusable)
4. Publish page
5. Sign automatically displays menu and updates when menu changes

### Benefits of Shared Menus
- **Update once, update everywhere:** Change menu items in one place, all signs using that menu update
- **Consistency:** Same menu content across multiple signs
- **Efficiency:** Don't duplicate menu content for each sign

## 🔗 Related Documents

- [Component Inventory](./component-inventory.md) - Components that display this content
- [Page Structure](./page-structure.md) - How pages route to signs

---

**Last Updated:** [Date]

