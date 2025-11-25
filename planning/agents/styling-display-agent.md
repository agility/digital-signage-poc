# Styling & Display Agent

## 🎯 Agent Profile

**Name:** Styling & Display Agent
**Phase:** 3 (Optimization)
**Primary Tools:** File Editing + Playwright MCP + Chrome DevTools MCP

## 📋 Mission

Optimize styling for large digital displays, ensuring readability and professional appearance.

## ✅ Checklist

### Typography
- [ ] Body text minimum 48px
- [ ] Headings minimum 72px
- [ ] Generous line height (1.5-2x font size)
- [ ] Sans-serif, readable fonts
- [ ] High contrast text (WCAG AA minimum)

### Layout
- [ ] Full-screen display optimized
- [ ] Generous padding (5-10% of screen)
- [ ] Large spacing between elements
- [ ] Clear visual hierarchy

### Components
- [ ] **MenuBoard**: Grid layout, large text, clear prices
- [ ] **TextDisplay**: Readable fonts, high contrast
- [ ] **ImageDisplay**: Optimized sizing, clear captions
- [ ] **PriceList**: Clear pricing display, readable
- [ ] **Header**: Prominent title, optional logo

### Testing
- [ ] Test on 1920x1080 resolution
- [ ] Test on 4K resolution (if applicable)
- [ ] Verify contrast ratios
- [ ] Test full-screen mode
- [ ] Verify readability from distance

## 🔧 Implementation Steps

### Step 1: Global Styles
1. Update `globals.css` for large displays
2. Set base font sizes
3. Configure color palette (high contrast)
4. Set up spacing system

### Step 2: Component Styling
For each component:
1. Apply large font sizes
2. Ensure high contrast
3. Add generous spacing
4. Optimize for full-screen

### Step 3: Responsive Design
1. Test on target resolutions
2. Adjust for different aspect ratios
3. Ensure scaling works correctly

### Step 4: Visual Testing with MCP Tools
1. **Use Playwright MCP** to:
   - Navigate to test pages
   - Resize browser to target resolutions (1920x1080, 3840x2160)
   - Capture screenshots for visual validation
   - Test full-screen mode
   - Verify responsive behavior
2. **Use Chrome DevTools MCP** to:
   - Inspect computed styles and contrast ratios
   - Verify accessibility (WCAG AA compliance)
   - Test browser compatibility
   - Check console for errors
   - Monitor network performance
3. Test on actual displays (if possible)
4. Iterate based on MCP testing results

## 📐 Design Specifications

### Typography Scale
- **H1**: 96px+ (main headings)
- **H2**: 72px+ (section headings)
- **Body**: 48px+ (content text)
- **Small**: 36px+ (captions, labels)

### Spacing
- **Padding**: 5-10% of viewport
- **Gap between items**: 2-4rem
- **Line height**: 1.5-2x font size

### Colors
- **Text**: High contrast (4.5:1 minimum)
- **Background**: Solid colors
- **Accents**: Clear, visible colors

### MenuBoard Specific
- Grid layout: 2-3 columns
- Item spacing: Large gaps
- Price display: Prominent, large font
- Images: High quality, properly sized

## 📚 Reference

- [Design Requirements](../design-requirements.md) - Detailed specifications
- [Component Inventory](../component-inventory.md) - Component requirements

## 🛠️ MCP Tools Usage

### Playwright MCP Tasks
- Navigate to pages: `browser_navigate(url)`
- Resize viewport: `browser_resize(width, height)` - Test 1920x1080, 3840x2160
- Capture screenshots: `browser_take_screenshot()` - Validate visual appearance
- Test full-screen: Resize to full display dimensions
- Snapshot accessibility: `browser_snapshot()` - Check element structure

### Chrome DevTools MCP Tasks
- Inspect elements: Check computed styles, contrast ratios
- Performance monitoring: Network requests, load times
- Console monitoring: Check for errors or warnings
- Accessibility audit: Verify WCAG compliance

## 🎯 Success Criteria

- Text readable from distance (48px+ body) - Verified via Playwright screenshots
- High contrast ratios (WCAG AA) - Verified via Chrome DevTools
- Professional appearance on large displays - Validated via Playwright at target resolutions
- Works correctly in full-screen mode - Tested via Playwright viewport resizing
- All components styled consistently - Verified via visual testing

