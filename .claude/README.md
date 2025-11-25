# Agility CMS + Next.js Documentation

This directory contains comprehensive documentation for building websites with Agility CMS and Next.js. The documentation is optimized for AI coding assistants (Claude Code, Cursor, GitHub Copilot, etc.) to help developers build full-featured websites quickly.

## Quick Start

1. **Setup MCP**: Read [docs/10-mcp-server-setup.md](./docs/10-mcp-server-setup.md) - Connect your AI assistant to Agility CMS
2. **Start Here**: Read [docs/00-ai-assistant-guide.md](./docs/00-ai-assistant-guide.md)
3. **Learn Basics**: Read [docs/01-agility-cms-overview.md](./docs/01-agility-cms-overview.md)
4. **Create Modules**: Read [docs/03-creating-components.md](./docs/03-creating-components.md)
5. **See Examples**: Read [docs/08-common-components.md](./docs/08-common-components.md)

## Documentation Index

### Core Concepts
- **[00-ai-assistant-guide.md](./docs/00-ai-assistant-guide.md)** - Guide for AI coding assistants
- **[01-agility-cms-overview.md](./docs/01-agility-cms-overview.md)** - How Agility CMS works
- **[02-page-routing.md](./docs/02-page-routing.md)** - Dynamic routing and URLs

### Development
- **[03-creating-components.md](./docs/03-creating-components.md)** - Create module components
- **[04-data-fetching.md](./docs/04-data-fetching.md)** - Fetch content from CMS
- **[05-containers-and-lists.md](./docs/05-containers-and-lists.md)** - Work with content lists
- **[08-common-components.md](./docs/08-common-components.md)** - Ready-to-use examples

### Advanced Features
- **[06-localization.md](./docs/06-localization.md)** - Multi-language support
- **[07-caching-strategies.md](./docs/07-caching-strategies.md)** - Performance optimization
- **[10-mcp-server-setup.md](./docs/10-mcp-server-setup.md)** - AI assistant MCP integration

## Common Use Cases

### I want to add a blog
1. Read [05-containers-and-lists.md](./docs/05-containers-and-lists.md)
2. Create a PostListing module using the examples
3. Configure "posts" container in Agility CMS
4. Add content and it works!

### I want to add a hero section
1. Read [08-common-components.md](./docs/08-common-components.md)
2. Copy the Hero component example
3. Register in `agility-components/index.ts`
4. Create Hero module in Agility CMS

### I want multi-language support
1. Read [06-localization.md](./docs/06-localization.md)
2. Update `AGILITY_LOCALES` env variable
3. Update `lib/i18n/config.ts`
4. Add locale-specific content in Agility CMS

### I want to improve performance
1. Read [07-caching-strategies.md](./docs/07-caching-strategies.md)
2. Configure revalidation time
3. Set up webhooks for on-demand revalidation
4. Monitor cache performance

## Project Architecture

```
src/
├── app/
│   └── [locale]/
│       ├── [...slug]/
│       │   └── page.tsx           # All pages route here
│       └── layout.tsx
├── components/
│   ├── agility-components/        # CMS modules (Hero, Blog, etc.)
│   │   ├── index.ts               # Component registry
│   │   ├── Hero.tsx
│   │   ├── PostListing.tsx
│   │   └── ...
│   └── agility-pages/             # Page templates
│       ├── index.ts               # Template registry
│       ├── MainTemplate.tsx
│       └── ...
├── lib/
│   ├── cms/                       # CMS helper functions
│   │   ├── getAgilityPage.ts
│   │   ├── getContentItem.ts
│   │   ├── getContentList.ts
│   │   └── ...
│   └── i18n/
│       └── config.ts              # Locale configuration
└── middleware.ts                   # Routing middleware
```

## Key Concepts

### Modules
Reusable components that editors add to pages in Agility CMS. Examples: Hero, Blog Listing, Testimonials, Contact Form.

### Page Templates
Define the layout structure of pages. Each template has named zones where modules can be placed.

### Content Lists
Collections of content items (posts, testimonials, team members, etc.) that can be fetched and displayed.

### Locales
Multi-language support with clean URLs. Default locale has no prefix, others do (/fr/, /es/).

### Caching
Automatic caching with time-based revalidation and on-demand updates via webhooks.

## CMS Helper Functions

| Function | Purpose |
|----------|---------|
| `getAgilityPage()` | Fetch complete page data with modules |
| `getContentItem()` | Fetch single content item |
| `getContentList()` | Fetch content collection (posts, etc.) |
| `getSitemapFlat()` | Fetch flat sitemap |
| `getSitemapNested()` | Fetch hierarchical sitemap |

## AI Assistant Features

This documentation enables AI coding assistants to:
- ✅ Generate production-ready module components
- ✅ Fetch content correctly with proper types
- ✅ Handle locales, caching, and routing
- ✅ Follow established patterns automatically
- ✅ Create type-safe TypeScript code
- ✅ Connect directly to Agility CMS via MCP server

## Contributing to Documentation

When adding new features, update the relevant documentation:
1. Add examples to appropriate `.md` files
2. Update this README if adding new docs
3. Keep examples simple and copy-paste ready
4. Include TypeScript types in all examples

## Getting Help

- **For CMS concepts**: Read docs starting with 01-
- **For development**: Read docs 03-05
- **For examples**: Check 08-common-components.md
- **For advanced topics**: Read docs 06-07

## Documentation Philosophy

This documentation is designed for:
1. **AI-First**: Optimized for AI coding assistants
2. **Example-Driven**: Lots of copy-paste ready code
3. **Pattern-Based**: Consistent patterns throughout
4. **Production-Ready**: Real-world examples that work

## Success Metrics

You're using the docs effectively when:
- ✅ You can build new features without checking other files
- ✅ Generated code follows existing patterns
- ✅ TypeScript types are always included
- ✅ CMS integration "just works"
- ✅ Code is maintainable and understandable

---

**Built for the future of AI-assisted web development** 🚀
