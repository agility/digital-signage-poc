# Documentation

This project's comprehensive documentation is located in the **[`.claude/`](../.claude/)** directory.

## 📚 Quick Links

- **[Quick Start Guide](../.claude/QUICK-START.md)** - Get started in 5 minutes
- **[AI Assistant Guide](../.claude/docs/00-ai-assistant-guide.md)** - For AI coding tools
- **[Agility CMS Overview](../.claude/docs/01-agility-cms-overview.md)** - Understanding the CMS
- **[Creating Components](../.claude/docs/03-creating-components.md)** - Build features
- **[Common Components](../.claude/docs/08-common-components.md)** - Examples
- **[Full Documentation Index](../.claude/README.md)** - Complete guide

## 🤖 Using with AI Assistants

This documentation is optimized for AI coding assistants:

- **Claude Code**: Automatically discovers `.claude/` directory
- **Cursor**: Reference with `@.claude/docs/filename.md`
- **GitHub Copilot**: Use `@workspace` and mention `.claude` folder
- **Google AI Studio**: Share and reference the docs
- **Continue.dev**: Automatically reads project files
- **Windsurf/Codeium**: Discovers documentation

## 📖 What's Documented

### Core Concepts (Start Here)
1. **Agility CMS Overview** - How the CMS works with Next.js
2. **Page Routing** - Dynamic routes and URL structure
3. **Creating Components** - Build CMS components (modules)
4. **Data Fetching** - Get content from Agility CMS

### Building Features
5. **Containers & Lists** - Blog posts, testimonials, etc.
6. **Localization** - Multi-language support
7. **Caching Strategies** - Performance optimization
8. **Common Components** - Ready-to-use examples

### Reference
9. **What's Included** - Feature checklist
10. **Quick Start** - 5-minute setup guide

## 🎯 Common Tasks

### Add a Blog
```bash
# 1. Read the guide
# See: .claude/docs/05-containers-and-lists.md

# 2. Create component
# src/components/agility-components/PostListing.tsx

# 3. Register component
# In: src/components/agility-components/index.ts

# 4. Configure in Agility CMS
```

### Add a Hero Section
```bash
# 1. See examples
# .claude/docs/08-common-components.md

# 2. Create Hero.tsx in agility-components/

# 3. Register in index.ts

# 4. Add to page in CMS
```

## 🚀 AI Prompt Examples

Tell your AI assistant:

```
"Following the patterns in .claude/docs/03-creating-components.md,
create a testimonials carousel component"

"Add a blog with pagination using the examples from .claude/docs/"

"Create a contact form following the hybrid pattern in the documentation"
```

## 📂 File Locations

```
.claude/
├── README.md                        # Documentation index
├── QUICK-START.md                   # 5-minute guide
└── docs/
    ├── 00-ai-assistant-guide.md     # For AI tools
    ├── 01-agility-cms-overview.md   # CMS concepts
    ├── 02-page-routing.md           # Routing
    ├── 03-creating-components.md    # Build components
    ├── 04-data-fetching.md          # Fetch data
    ├── 05-containers-and-lists.md   # Content lists
    ├── 06-localization.md           # Multi-language
    ├── 07-caching-strategies.md     # Performance
    ├── 08-common-components.md      # Examples
    └── 09-whats-included.md         # Features
```

## 🔗 Related Files

- **[DEVELOPMENT.md](../DEVELOPMENT.md)** - Development guide (this directory's parent)
- **[README.md](../README.md)** - Main project README

## 💡 Why `.claude/`?

The `.claude` directory is automatically discovered by Claude Code, making it easier for AI assistants to find and use the documentation. However, the documentation works with **all AI tools** - you just need to reference it explicitly in other platforms.

---

**Start building:** [.claude/QUICK-START.md](../.claude/QUICK-START.md) 🚀
