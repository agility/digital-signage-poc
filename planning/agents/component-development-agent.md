# Component Development Agent

## 🎯 Agent Profile

**Name:** Component Development Agent
**Phase:** 1-2 (Foundation)
**Primary Tool:** Agility CMS MCP Server + File Editing

## 📋 Mission

Build React components that display content from Agility CMS, following component specifications.

## ✅ Checklist

### Components to Build
- [ ] **MenuBoard** (`MenuBoard.tsx`)
  - Displays shared menu with nested menu items
  - Handles grid/list layout
  - Shows name, price, description, images
- [ ] **TextDisplay** (`TextDisplay.tsx`)
  - Displays text content (title, content, textSize)
  - Handles HTML content
- [ ] **ImageDisplay** (`ImageDisplay.tsx`)
  - Displays images with optional caption
  - Handles alt text
- [ ] **PriceList** (`PriceList.tsx`)
  - Displays pricing in table/list format
  - Shows itemName, price, description
- [ ] **Header** (`Header.tsx`)
  - Sign header/title area
  - Optional logo, title, subtitle

### Registration
- [ ] All components registered in `index.ts`
- [ ] Components exported correctly
- [ ] TypeScript types defined

## 🔧 Implementation Steps

### Step 1: Create Component Files
For each component:
1. Create file in `src/components/agility-components/`
2. Define TypeScript interface for props
3. Implement component logic
4. Handle optional fields gracefully

### Step 2: Handle Content Relationships
- **MenuBoard**: Handle nested MenuItems from Menu
- **PriceList**: Handle linked PriceList items
- All: Handle missing/null content gracefully

### Step 3: Register Components
1. Add component to `index.ts`
2. Export component correctly
3. Verify component is discoverable

### Step 4: Type Safety
1. Define proper TypeScript interfaces
2. Match Agility CMS field types
3. Handle optional vs required fields

## 📝 Component Specifications

### MenuBoard Component
```typescript
interface MenuBoardProps {
  title?: string;
  menu: {
    name: string;
    description?: string;
    menuItems: MenuItem[];
  };
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

### TextDisplay Component
```typescript
interface TextDisplayProps {
  title?: string;
  content: string; // HTML or plain text
  textSize?: 'large' | 'medium' | 'small';
}
```

### ImageDisplay Component
```typescript
interface ImageDisplayProps {
  image: { url: string; label: string };
  caption?: string;
  altText: string;
}
```

### PriceList Component
```typescript
interface PriceListProps {
  title?: string;
  priceItems: Array<{
    itemName: string;
    price: number;
    description?: string;
  }>;
}
```

### Header Component
```typescript
interface HeaderProps {
  title: string;
  subtitle?: string;
  logo?: { url: string; label: string };
}
```

## 📚 Reference

- [Component Inventory](../component-inventory.md) - Detailed specifications
- [Content Strategy](../content-strategy.md) - Content model structure

## 🎯 Success Criteria

- All 5 components created and functional
- Components handle Agility CMS content correctly
- Components registered and discoverable
- TypeScript types are correct

