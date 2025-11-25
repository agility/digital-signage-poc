# Content Population Agent

## 🎯 Agent Profile

**Name:** Content Population Agent
**Phase:** 2-3 (Content & Testing)
**Primary Tool:** Agility CMS MCP Server

## 📋 Mission

Create example content in Agility CMS for testing and demonstration purposes.

## ✅ Checklist

### Sample Menus to Create
- [ ] **Breakfast Menu**
  - Menu items: Coffee, Pancakes, Eggs, Toast, etc.
- [ ] **Lunch Menu**
  - Menu items: Burgers, Sandwiches, Salads, etc.
- [ ] **Dinner Menu**
  - Menu items: Steaks, Pasta, Seafood, etc.

### Sample Menu Items
- [ ] At least 5-10 items per menu
- [ ] Items with prices
- [ ] Items with images (use `initialize_media_upload`)
- [ ] Items with descriptions
- [ ] Items with categories

### Sample Content
- [ ] **TextBlock** examples (2-3)
- [ ] **ImageDisplay** examples (2-3)
- [ ] **PriceList** examples (1-2)

### Sample Pages/Signs
- [ ] Menu board sign (using MenuBoard component)
- [ ] Text display sign (using TextDisplay component)
- [ ] Image display sign (using ImageDisplay component)
- [ ] Combined sign (multiple components)

## 🔧 Implementation Steps

### Step 1: Create Menus
1. Create Menu content items
2. Add nested MenuItems to each menu
3. Set prices, descriptions, images
4. Organize by category if needed

### Step 2: Create Other Content
1. Create TextBlock items
2. Create ImageDisplay items (upload images)
3. Create PriceList items

### Step 3: Create Pages
1. Get sitemap structure (`get_sitemap`)
2. Create pages for each sign type
3. Add components to page zones
4. Link components to content
5. Publish pages

### Step 4: Verify
1. Check all content displays correctly
2. Verify relationships work (Menu → MenuItems)
3. Test page routing
4. Verify content updates

## 📝 Content Examples

### Menu Example: "Lunch Menu"
```json
{
  "name": "Lunch Menu",
  "description": "Our delicious lunch offerings",
  "menuItems": [
    {
      "name": "Cheese Burger",
      "description": "Classic burger with cheese",
      "price": 4.25,
      "category": "Burgers",
      "sortOrder": 1
    },
    {
      "name": "Chicken Burger",
      "description": "Grilled chicken burger",
      "price": 3.00,
      "category": "Burgers",
      "sortOrder": 2
    }
  ]
}
```

### Page Example: Menu Board Sign
- Page name: `menu-board-lunch`
- Page title: "Lunch Menu Board"
- Zone: MainContent
  - Component: MenuBoard
    - Linked to: "Lunch Menu" (shared menu)

## 🖼️ Image Handling

For images:
1. Use `initialize_media_upload` to get upload URL
2. Upload image file to URL
3. Use returned asset URL in content

## 📚 Reference

- [Content Strategy](../content-strategy.md) - Content model details
- [Development Phases](../development-phases.md) - Phase requirements

## 🎯 Success Criteria

- Sample content exists for all content models
- At least 3 menus with items created
- Multiple test pages/signs created
- Content displays correctly on signs
- Content relationships work (menus contain items)

