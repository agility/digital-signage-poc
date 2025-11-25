# Project Planning Guide

Planning structure for the Digital Signboard App (Next.js + Agility CMS).

## 📁 Planning Structure

The planning documents are organized in the `planning/` directory:

```
planning/
├── README.md                      # Planning overview & index
├── project-brief.md              # Goals, scope, requirements
├── content-strategy.md           # Agility CMS content models
├── component-inventory.md        # Signboard components
├── page-structure.md             # Page routing & structure
├── design-requirements.md        # Display design guidelines
├── technical-requirements.md     # Performance & deployment
└── development-phases.md         # Build timeline
```

## 🎯 Key Concepts

**Architecture:**
- Each Agility CMS "Page" = One Signboard Display
- Pages use `SignboardTemplate` with content zones
- Components display content from Agility CMS content models
- URLs automatically generated from page names

**Workflow:**
1. Create page in Agility CMS (e.g., "Drive-Thru Menu")
2. Add components to page zones
3. Configure component content
4. Page automatically routes to `/drive-thru-menu`
5. Display shows signboard content

## 📋 Planning Documents

### Core Documents (Start Here)
1. **[project-brief.md](./planning/project-brief.md)** - Project goals and requirements
2. **[content-strategy.md](./planning/content-strategy.md)** - Agility CMS models needed
3. **[component-inventory.md](./planning/component-inventory.md)** - Components to build
4. **[page-structure.md](./planning/page-structure.md)** - How pages route to signs

### Supporting Documents
5. **[design-requirements.md](./planning/design-requirements.md)** - Display design guidelines
6. **[technical-requirements.md](./planning/technical-requirements.md)** - Technical specs
7. **[development-phases.md](./planning/development-phases.md)** - Build timeline

## 🚀 Quick Start

1. **Read [project-brief.md](./planning/project-brief.md)** - Understand the goals
2. **Review [content-strategy.md](./planning/content-strategy.md)** - Plan Agility CMS models
3. **Check [component-inventory.md](./planning/component-inventory.md)** - See what to build
4. **Follow [development-phases.md](./planning/development-phases.md)** - Build timeline

## 🔗 Related Documentation

- **[planning/README.md](./planning/README.md)** - Planning index
- **[src/DEVELOPMENT.md](./src/DEVELOPMENT.md)** - Development guide
- **[src/docs/README.md](./src/docs/README.md)** - Technical docs

---

**Start building:** Review the planning documents and begin with Phase 1 in [development-phases.md](./planning/development-phases.md)
