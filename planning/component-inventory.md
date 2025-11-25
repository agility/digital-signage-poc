# Component Inventory

List of React components for digital signboard displays.

## 📦 Component List

### Priority: High (Must-Have)

#### 1. MenuBoard
- **File:** `src/components/agility-components/MenuBoard.tsx`
- **Purpose:** Display a shared menu (reusable across multiple signs)
- **Fields:**
  - `title` (Text, Optional) - Override menu title (if not using menu's name)
  - `menu` (LinkedContentSharedLink) - Links to a Menu content item (shared/reusable)
- **Status:** [ ] Not Started | [ ] In Progress | [ ] Complete
- **Note:** Menu contains nested MenuItems, so component displays the menu and its items

#### 2. TextDisplay
- **File:** `src/components/agility-components/TextDisplay.tsx`
- **Purpose:** Display text content (headings, announcements, etc.)
- **Fields:**
  - `title` (Text)
  - `content` (Html or LongText)
  - `textSize` (Text) - "large", "medium", "small"
- **Status:** [ ] Not Started | [ ] In Progress | [ ] Complete

#### 3. ImageDisplay
- **File:** `src/components/agility-components/ImageDisplay.tsx`
- **Purpose:** Display images on signs
- **Fields:**
  - `image` (ImageAttachment, Required)
  - `caption` (Text, Optional)
  - `altText` (Text, Required)
- **Status:** [ ] Not Started | [ ] In Progress | [ ] Complete

#### 4. PriceList
- **File:** `src/components/agility-components/PriceList.tsx`
- **Purpose:** Display pricing information in a table/list
- **Fields:**
  - `title` (Text)
  - `priceItems` (LinkedContent) - Links to PriceList content list
- **Status:** [ ] Not Started | [ ] In Progress | [ ] Complete

### Priority: Medium (Important)

#### 5. RichTextArea
- **File:** `src/components/agility-components/RichTextArea.tsx` (Already exists)
- **Purpose:** Display rich text/HTML content
- **Status:** [x] Complete (already in project)

#### 6. Header
- **File:** `src/components/agility-components/Header.tsx`
- **Purpose:** Sign header/title area
- **Fields:**
  - `title` (Text)
  - `subtitle` (Text, Optional)
  - `logo` (ImageAttachment, Optional)
- **Status:** [ ] Not Started | [ ] In Progress | [ ] Complete

## 🎨 Component Specifications

### MenuBoard Component

**Visual Description:**
Grid or list layout displaying a shared menu with its menu items (name, description, price, images).

**Fields:**
```typescript
interface MenuBoardProps {
  title?: string; // Optional override
  menu: Menu; // Shared menu from Agility CMS
}

interface Menu {
  name: string;
  description?: string;
  menuItems: MenuItem[]; // Nested within menu
}

interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  image?: { url: string; label: string };
  category?: string;
  sortOrder?: number;
}
```

**Display:**
- Large, readable text
- Clear price display
- Optional images
- Grouped by category (if provided)
- Sorted by sortOrder field

**Reusability:**
- Same Menu can be used on multiple signs
- Update menu items once, all signs update automatically
- Example: "Breakfast Menu" used on drive-thru sign, lobby sign, and window sign

### TextDisplay Component

**Fields:**
```typescript
interface TextDisplayProps {
  title?: string;
  content: string; // HTML or plain text
  textSize?: 'large' | 'medium' | 'small';
}
```

**Display:**
- Full-width text area
- Configurable text size
- High contrast for readability

### ImageDisplay Component

**Fields:**
```typescript
interface ImageDisplayProps {
  image: { url: string; label: string };
  caption?: string;
  altText: string;
}
```

**Display:**
- Full-width or contained image
- Optional caption below
- Optimized for large displays

## 📋 Component Checklist

For each component:
- [ ] Component file created in `src/components/agility-components/`
- [ ] Registered in `src/components/agility-components/index.ts`
- [ ] Agility CMS component model created
- [ ] Fields mapped correctly
- [ ] Styled for large displays (readable from distance)
- [ ] Tested on target display resolution
- [ ] Full-screen display optimized

## 🎯 Design Considerations

- **Large Text:** All text must be readable from distance
- **High Contrast:** Ensure text/background contrast
- **Full-Screen:** Components should work in full-screen mode
- **No Interaction:** View-only, no clickable elements
- **Responsive:** Adapt to different display resolutions

## 🔗 Related Documents

- [Content Strategy](./content-strategy.md) - Content models these components use
- [Page Structure](./page-structure.md) - How components are used in pages

---

**Last Updated:** [Date]

