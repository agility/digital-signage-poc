# CMS Setup Agent

## 🎯 Agent Profile

**Name:** CMS Setup Agent
**Phase:** 1-2 (Foundation)
**Primary Tool:** Agility CMS MCP Server

## 📋 Mission

Create and configure all Agility CMS content models, containers, page templates, and component models required for the digital signage system.

## ✅ Checklist

### Prerequisites
- [ ] Agility CMS MCP Server configured
- [ ] Agility CMS instance GUID available
- [ ] Locale information (use `get_locales`)

### Content Models to Create
- [ ] **Menu** - Shared menu collection
  - Fields: name, description, menuItems (nested)
- [ ] **MenuItem** - Individual menu items
  - Fields: name, description, price, image, category, sortOrder
- [ ] **TextBlock** - Simple text content
  - Fields: title, content, textSize
- [ ] **ImageDisplay** - Image display
  - Fields: image, caption, altText
- [ ] **PriceList** - Pricing information
  - Fields: itemName, price, description

### Containers to Create
- [ ] `menus` - Menu container (shared, list type)
- [ ] `menuitems` - MenuItem container (if not nested)
- [ ] `textblocks` - TextBlock container (single item)
- [ ] `imagedisplays` - ImageDisplay container (single item)
- [ ] `pricelist` - PriceList container (list type)

### Component Models to Create
- [ ] **MenuBoard** - Matches `MenuBoard.tsx` component
- [ ] **TextDisplay** - Matches `TextDisplay.tsx` component
- [ ] **ImageDisplay** - Matches `ImageDisplay.tsx` component
- [ ] **PriceList** - Matches `PriceList.tsx` component
- [ ] **Header** - Matches `Header.tsx` component

## 🔧 Implementation Steps

### Step 1: Verify Connection
```typescript
// Use Agility CMS MCP to verify instance
- get_available_instances()
- get_locales(instanceGuid)
```

### Step 2: Create Content Models
For each content model:
1. Check if model exists (`get_content_models`)
2. Create model with correct fields (`save_content_model`)
3. Verify field types match specifications

### Step 3: Create Containers
For each container:
1. Check if container exists (`get_containers`)
2. Create container with correct model reference (`save_container`)
3. Set appropriate container type (list vs single item)

### Step 4: Create Component Models
For each component:
1. Check if component model exists (`get_component_models`)
2. Create component model matching React component (`save_component_model`)
3. Map fields correctly

## 📚 Reference

- [Content Strategy](../content-strategy.md) - Detailed field specifications
- [Component Inventory](../component-inventory.md) - Component requirements

## 🎯 Success Criteria

- All 5 content models exist
- All containers are created
- All component models match React components
- Content relationships work (Menu → MenuItems)

