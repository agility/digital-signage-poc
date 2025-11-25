# MCP Tool Reference Guide

## 🛠️ Available MCP Servers

- ✅ **Agility CMS MCP Server** - Content management
- ✅ **Playwright MCP** - Browser automation and visual testing
- ✅ **Chrome DevTools MCP** - Browser debugging and performance

## 📋 Tool Usage by Agent

### CMS Setup Agent
**Tools:** Agility CMS MCP only
- `get_available_instances()`
- `get_content_models()`
- `save_content_model()`
- `get_containers()`
- `save_container()`
- `get_component_models()`
- `save_component_model()`
- `get_locales()`

### Component Development Agent
**Tools:** Agility CMS MCP only
- `get_component_models()`
- `save_component_model()`
- `get_content_model_details()`

### Content Population Agent
**Tools:** Agility CMS MCP only
- `get_content_items()`
- `save_content_items()`
- `get_content_item()`
- `get_containers()`
- `save_page()`
- `get_sitemap()`
- `initialize_media_upload()`

### Styling & Display Agent
**Tools:** Agility CMS MCP + Playwright MCP + Chrome DevTools MCP

#### Playwright MCP Tasks
- `browser_navigate(url)` - Navigate to pages for testing
- `browser_resize(width, height)` - Test different resolutions
  - 1920x1080 (Full HD)
  - 3840x2160 (4K)
- `browser_take_screenshot()` - Capture visual validation
- `browser_snapshot()` - Accessibility snapshot
- `browser_wait_for()` - Wait for content to load

#### Chrome DevTools MCP Tasks
- Inspect computed styles
- Verify contrast ratios (WCAG AA)
- Check console for errors
- Monitor network performance
- Test browser compatibility

### Testing & QA Agent
**Tools:** Agility CMS MCP + Playwright MCP + Chrome DevTools MCP

#### Playwright MCP Tasks
- `browser_navigate(url)` - Test all page routes
- `browser_resize(width, height)` - Test target resolutions
- `browser_take_screenshot()` - Visual regression testing
- `browser_snapshot()` - Component structure validation
- `browser_click()` - Test interactions (if needed)
- `browser_wait_for()` - Wait for content/errors

#### Chrome DevTools MCP Tasks
- `browser_network_requests()` - Performance monitoring
- `browser_console_messages()` - Error checking
- Browser compatibility testing
- Accessibility audit
- Network analysis

## 🎯 Common Testing Workflows

### Visual Testing Workflow (Styling & Display Agent)
1. Use Playwright to navigate to page
2. Resize to target resolution (1920x1080 or 4K)
3. Capture screenshot
4. Use Chrome DevTools to verify contrast ratios
5. Check console for errors
6. Iterate based on findings

### Performance Testing Workflow (Testing & QA Agent)
1. Use Playwright to navigate to page
2. Use Chrome DevTools to monitor network requests
3. Measure load times
4. Check console for errors
5. Verify performance targets (< 3s load)
6. Document findings

### Resolution Testing Workflow
1. Use Playwright `browser_resize()` to test:
   - 1920x1080 (Full HD - most common)
   - 3840x2160 (4K - high-end displays)
2. Capture screenshots at each resolution
3. Verify layout and readability
4. Test full-screen mode

### Error Testing Workflow
1. Use Playwright to navigate to pages with missing content
2. Capture screenshots of error states
3. Use Chrome DevTools to check console errors
4. Verify graceful error handling
5. Test error page display

## 📝 Best Practices

### Playwright MCP
- Always resize viewport before taking screenshots
- Use `browser_wait_for()` to ensure content is loaded
- Capture screenshots at multiple resolutions
- Test full-screen mode by resizing to display dimensions

### Chrome DevTools MCP
- Check console messages after each navigation
- Monitor network requests for performance issues
- Verify accessibility compliance
- Test in multiple browsers when possible

### Combined Usage
- Use Playwright for navigation and visual testing
- Use Chrome DevTools for debugging and performance
- Combine results for comprehensive testing

## 🔗 Related Documentation

- [Agent Specifications](../agent-specifications.md) - Complete agent overview
- [Styling & Display Agent](./styling-display-agent.md) - Detailed styling tasks
- [Testing & QA Agent](./testing-qa-agent.md) - Detailed testing tasks

---

**Note:** All MCP servers are installed and ready to use. Agents will automatically use the appropriate tools based on their phase and responsibilities.

