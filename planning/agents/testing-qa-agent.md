# Testing & QA Agent

## 🎯 Agent Profile

**Name:** Testing & QA Agent
**Phase:** 3-4 (Quality Assurance)
**Primary Tools:** Agility CMS MCP + Playwright MCP + Chrome DevTools MCP

## 📋 Mission

Perform quality assurance, testing, and validation of the complete system.

## ✅ Checklist

### Component Testing
- [ ] All components render correctly
- [ ] Components handle missing content gracefully
- [ ] Components handle optional fields
- [ ] Error states work correctly

### Content Testing
- [ ] Content updates reflect on signs
- [ ] Content relationships work (Menu → MenuItems)
- [ ] Images load and display correctly
- [ ] Text content displays properly

### Routing Testing
- [ ] Page routing works correctly
- [ ] URLs match Agility CMS page names
- [ ] 404 handling works
- [ ] Error pages display correctly

### Display Testing
- [ ] Test on 1920x1080 resolution
- [ ] Test on 4K resolution (if applicable)
- [ ] Test full-screen mode
- [ ] Test different aspect ratios

### Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Images load efficiently
- [ ] No layout shifts
- [ ] Smooth content updates

### Browser Testing
- [ ] Chrome (latest) - Primary
- [ ] Edge (latest) - Alternative
- [ ] Safari (if needed for preview)

### Error Handling
- [ ] Missing content handled gracefully
- [ ] Network errors handled
- [ ] Invalid content handled
- [ ] Loading states work

## 🔧 Implementation Steps

### Step 1: Component Testing
1. Test each component individually
2. Test with various content scenarios
3. Test error states
4. Verify TypeScript types

### Step 2: Integration Testing
1. Test pages with multiple components
2. Test content relationships
3. Test content updates
4. Verify routing

### Step 3: Display Testing with MCP Tools
1. **Use Playwright MCP** to:
   - Navigate to all test pages
   - Test on target resolutions (1920x1080, 3840x2160)
   - Capture screenshots for each component/page
   - Test full-screen mode (resize viewport)
   - Verify visual consistency across resolutions
   - Test different aspect ratios
2. **Use Chrome DevTools MCP** to:
   - Verify browser compatibility
   - Check console for errors
   - Monitor network requests
   - Validate performance metrics

### Step 4: Performance Testing with MCP Tools
1. **Use Chrome DevTools MCP** to:
   - Monitor network requests (`browser_network_requests()`)
   - Measure page load times
   - Check image loading performance
   - Identify performance bottlenecks
2. **Use Playwright MCP** to:
   - Test load times across different network conditions
   - Verify First Contentful Paint < 3 seconds
   - Test with slow network simulation
3. Optimize based on findings

### Step 5: Error Scenarios
1. Test missing content
2. Test network failures
3. Test invalid data
4. Verify error messages

## 🧪 Test Scenarios

### Scenario 1: Menu Display
- Create menu with items
- Display on sign
- Verify all items show
- Verify prices display
- Verify images load

### Scenario 2: Content Update
- Update menu item in CMS
- Verify sign updates
- Check update time

### Scenario 3: Missing Content
- Create page with missing component content
- Verify graceful error handling
- Verify fallback display

### Scenario 4: Multiple Signs
- Create multiple pages/signs
- Verify each displays correctly
- Verify routing works

## 📚 Reference

- [Technical Requirements](../technical-requirements.md) - Performance targets
- [Development Phases](../development-phases.md) - Phase requirements

## 🛠️ MCP Tools Usage

### Playwright MCP Tasks
- **Navigation Testing**: `browser_navigate(url)` - Test all page routes
- **Resolution Testing**: `browser_resize(width, height)` - Test 1920x1080, 3840x2160
- **Screenshot Testing**: `browser_take_screenshot()` - Visual regression testing
- **Accessibility Snapshot**: `browser_snapshot()` - Verify component structure
- **Error Testing**: Navigate to pages with missing content, verify error handling
- **Full-Screen Testing**: Resize to display dimensions, verify layout

### Chrome DevTools MCP Tasks
- **Performance Monitoring**: `browser_network_requests()` - Track load times
- **Console Monitoring**: `browser_console_messages()` - Check for errors
- **Browser Compatibility**: Test in Chrome, Edge (via DevTools)
- **Accessibility Audit**: Verify WCAG compliance
- **Network Analysis**: Monitor image loading, API calls

### Test Automation Workflow
1. Use Playwright to navigate and capture screenshots
2. Use Chrome DevTools to analyze performance and errors
3. Compare screenshots across resolutions
4. Validate all test scenarios pass
5. Document findings and issues

## 🎯 Success Criteria

- All components work correctly - Verified via Playwright navigation and screenshots
- Content updates work - Tested via Agility CMS MCP + Playwright validation
- Error handling is graceful - Verified via Playwright error scenario testing
- Performance meets targets (< 3s load) - Measured via Chrome DevTools network monitoring
- Works on target browsers - Tested via Chrome DevTools compatibility checks
- All test scenarios pass - Automated via Playwright test execution

