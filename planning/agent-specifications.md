# Agent Specifications

## 🤖 Agent Overview

This document defines the sub-agents for implementing the Digital Signboard App. Each agent is specialized for a specific phase or task area.

## 📋 Agent List

1. **CMS Setup Agent** - Phase 1-2: Agility CMS content models and structure
2. **Component Development Agent** - Phase 1-2: React component implementation
3. **Content Population Agent** - Phase 2-3: Test content creation
4. **Styling & Display Agent** - Phase 3: Large display optimization
5. **Testing & QA Agent** - Phase 3-4: Quality assurance and testing

---

## 1. CMS Setup Agent

### Purpose
Creates and configures all Agility CMS content models, containers, page templates, and component models required for the digital signage system.

### Responsibilities
- Create content models (Menu, MenuItem, TextBlock, ImageDisplay, PriceList)
- Create containers for content lists
- Set up page templates in Agility CMS
- Create component models that match React components
- Configure content relationships and field types
- Verify all models are properly configured

### Tools Required
- **Agility CMS MCP Server** (Required)
  - `get_available_instances`
  - `get_content_models`
  - `save_content_model`
  - `get_containers`
  - `save_container`
  - `get_component_models`
  - `save_component_model`
  - `get_page_models`
  - `get_locales`

### Key Tasks
1. Verify Agility CMS instance connection
2. Create Menu content model with nested MenuItems
3. Create MenuItem content model
4. Create TextBlock content model
5. Create ImageDisplay content model
6. Create PriceList content model
7. Create containers for each content model
8. Create component models matching React components
9. Verify all relationships are correct

### Success Criteria
- All content models exist in Agility CMS
- All containers are created and configured
- Component models match React component interfaces
- Content relationships work correctly

### Reference Documents
- [Content Strategy](./content-strategy.md)
- [Component Inventory](./component-inventory.md)

---

## 2. Component Development Agent

### Purpose
Builds React components that display content from Agility CMS, following the component specifications.

### Responsibilities
- Implement React components (MenuBoard, TextDisplay, ImageDisplay, PriceList, Header)
- Register components in Agility CMS component registry
- Map CMS field types to component props
- Handle content relationships (nested menus, linked content)
- Ensure components are properly typed with TypeScript
- Export components correctly

### Tools Required
- **Agility CMS MCP Server** (Required)
  - `get_component_models`
  - `save_component_model`
  - `get_content_model_details`
- Standard file editing tools

### Key Tasks
1. Create MenuBoard component with menu display logic
2. Create TextDisplay component
3. Create ImageDisplay component
4. Create PriceList component
5. Create Header component
6. Register all components in `index.ts`
7. Ensure proper TypeScript types
8. Handle nested content (MenuItems within Menu)
9. Handle linked content relationships

### Success Criteria
- All components render correctly
- Components accept props from Agility CMS
- Components handle missing/optional fields gracefully
- Components are registered and discoverable

### Reference Documents
- [Component Inventory](./component-inventory.md)
- [Content Strategy](./content-strategy.md)

---

## 3. Content Population Agent

### Purpose
Creates example content in Agility CMS for testing and demonstration purposes.

### Responsibilities
- Create sample menus (Breakfast, Lunch, Dinner)
- Create menu items with prices and images
- Create example pages/signs
- Create test content for all content models
- Verify content displays correctly
- Set up realistic content scenarios

### Tools Required
- **Agility CMS MCP Server** (Required)
  - `get_content_items`
  - `save_content_items`
  - `get_content_item`
  - `get_containers`
  - `save_page`
  - `get_sitemap`
  - `initialize_media_upload` (for images)

### Key Tasks
1. Create sample Menu content (e.g., "Breakfast Menu", "Lunch Menu")
2. Create MenuItems nested within menus
3. Create example TextBlock content
4. Create example ImageDisplay content
5. Create example PriceList content
6. Create test pages/signs in Agility CMS
7. Link components to content on pages
8. Verify all content displays correctly

### Success Criteria
- Sample content exists for all content models
- Content relationships work (menus contain items)
- Pages can be created and viewed
- Content updates reflect on signs

### Reference Documents
- [Content Strategy](./content-strategy.md)
- [Development Phases](./development-phases.md)

---

## 4. Styling & Display Agent

### Purpose
Optimizes styling for large digital displays, ensuring readability and professional appearance.

### Responsibilities
- Apply large-display typography (48px+ body, 72px+ headings)
- Ensure high contrast (WCAG AA minimum)
- Optimize spacing and padding for readability
- Test on target resolutions (1920x1080, 4K)
- Ensure full-screen display works correctly
- Optimize image display for large screens

### Tools Required
- **Agility CMS MCP Server** (Optional - for content updates)
- **Playwright MCP** (Required - for automated visual testing and validation)
- **Chrome DevTools MCP** (Required - for browser testing and debugging)
- Standard file editing tools

### Key Tasks
1. Update global CSS for large displays
2. Style MenuBoard component (grid layout, large text)
3. Style TextDisplay component (readable fonts)
4. Style ImageDisplay component (optimized sizing)
5. Style PriceList component (clear pricing display)
6. **Use Playwright MCP** to test on different resolutions (1920x1080, 4K)
7. **Use Chrome DevTools MCP** to verify contrast ratios and accessibility
8. **Use Playwright MCP** to capture screenshots and validate visual appearance
9. Optimize for full-screen mode
10. **Use Chrome DevTools MCP** to test browser compatibility

### Success Criteria
- Text is readable from distance (minimum 48px body)
- High contrast ratios (WCAG AA)
- Professional appearance on large displays
- Works correctly in full-screen mode

### Reference Documents
- [Design Requirements](./design-requirements.md)
- [Component Inventory](./component-inventory.md)

---

## 5. Testing & QA Agent

### Purpose
Performs quality assurance, testing, and validation of the complete system.

### Responsibilities
- Test component rendering
- Test content updates from Agility CMS
- Test on different resolutions
- Validate error handling
- Test page routing
- Performance testing
- Browser compatibility testing

### Tools Required
- **Agility CMS MCP Server** (Required - for content testing)
- **Playwright MCP** (Required - for automated visual testing, screenshots, and resolution testing)
- **Chrome DevTools MCP** (Required - for browser automation, performance testing, and debugging)
- Standard testing tools

### Key Tasks
1. **Use Playwright MCP** to test all components render correctly (screenshots, snapshots)
2. **Use Agility CMS MCP** to test content updates reflect on signs
3. **Use Playwright MCP** to test page routing works (navigation testing)
4. **Use Playwright MCP** to test error handling (missing content, etc.)
5. **Use Playwright MCP** to test on target display resolutions (1920x1080, 4K)
6. **Use Chrome DevTools MCP** to validate performance (load times, network requests)
7. **Use Chrome DevTools MCP** to test browser compatibility (Chrome, Edge)
8. **Use Playwright MCP** to create automated test scenarios and validate
9. **Use Chrome DevTools MCP** to capture console errors and network issues
10. **Use Playwright MCP** to test full-screen mode and viewport sizes

### Success Criteria
- All components work correctly
- Content updates work
- Error handling is graceful
- Performance meets targets (< 3s load)
- Works on target browsers

### Reference Documents
- [Technical Requirements](./technical-requirements.md)
- [Development Phases](./development-phases.md)

---

## 🔄 Agent Workflow

### Phase 1-2: Foundation
```
1. CMS Setup Agent → Creates all content models
2. Component Development Agent → Builds React components
3. Content Population Agent → Creates test content
```

### Phase 3: Optimization
```
1. Styling & Display Agent → Optimizes for large displays
2. Testing & QA Agent → Validates everything works
```

### Phase 4: Polish
```
1. Testing & QA Agent → Final validation
2. All agents → Documentation and cleanup
```

---

## 🛠️ MCP Server Setup

### Required
- **Agility CMS MCP Server** - All agents need this
- **Playwright MCP** - Installed and available for Styling & Display Agent and Testing & QA Agent
- **Chrome DevTools MCP** - Installed and available for Styling & Display Agent and Testing & QA Agent

### Usage by Agent
- **CMS Setup Agent**: Agility CMS MCP only
- **Component Development Agent**: Agility CMS MCP only
- **Content Population Agent**: Agility CMS MCP only
- **Styling & Display Agent**: Agility CMS MCP + Playwright MCP + Chrome DevTools MCP
- **Testing & QA Agent**: Agility CMS MCP + Playwright MCP + Chrome DevTools MCP

### Installation Status
- ✅ Agility CMS MCP Server - Configured
- ✅ Playwright MCP - Installed
- ✅ Chrome DevTools MCP - Installed

---

## 📝 Agent Communication

Agents should:
- Document their work in relevant planning documents
- Update component status in [Component Inventory](./component-inventory.md)
- Update phase progress in [Development Phases](./development-phases.md)
- Note any issues or blockers

---

**Last Updated:** [Date]

