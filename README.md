# Digital Signage POC

A digital signage system built with Next.js and Agility CMS for displaying menus, text, images, and pricing on large displays. Features a multi-board view that simulates a drive-through display with three 1080x1920 vertical screens arranged in a 3D arc.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# View at http://localhost:3000
```

## ✨ Features

### Multi-Board Display
- **3D Arc Layout**: Simulates a drive-through display with three vertical 1080x1920 screens
- **Auto-Refresh**: All iframes refresh every 10 seconds with smooth fade transitions (no flickering)
- **Responsive Scaling**: Automatically scales to fit any browser size while maintaining correct aspect ratios
- **Synchronized Updates**: All three boards refresh simultaneously

### Components

#### MenuBoard
- Displays menus with nested menu items in a 2x3 grid layout
- Prominent header with gradient background
- Supports up to 6 menu items per board
- Automatic placeholder images for missing content
- Category grouping support

#### MenuItemCard
- Displays individual menu items with images, names, descriptions, and prices
- Responsive text sizing optimized for digital displays
- Alternating background colors for visual distinction

#### Header
- Displays title, subtitle, and optional logo
- Prominent styling for digital signage displays

#### TextDisplay
- Displays text content with configurable sizes
- Supports HTML content

#### ImageDisplay
- Displays images with optional captions
- Automatic placeholder generation for missing images

#### PriceList
- Displays pricing information in a table format
- Supports multiple price items

#### FullScreenImage
- Full-screen image display component

#### RichTextArea
- Rich text/HTML content display

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/[...slug]/    # Dynamic page routing
│   └── multi-board/            # Multi-board demo page
├── components/
│   ├── agility-components/     # CMS components
│   └── agility-pages/          # Page templates
└── lib/
    ├── cms/                    # Agility CMS helpers
    └── i18n/                   # Internationalization
```

## 🎯 What's Implemented

### Infrastructure
- ✅ Next.js 14+ with App Router
- ✅ Agility CMS integration with type-safe helpers
- ✅ Multi-locale support (i18n)
- ✅ TypeScript throughout
- ✅ Tailwind CSS for styling

### Components
- ✅ **MenuBoard** - Menu display with grid layout
- ✅ **MenuItemCard** - Individual menu item cards
- ✅ **Header** - Page headers with logo support
- ✅ **TextDisplay** - Text content display
- ✅ **ImageDisplay** - Image display with captions
- ✅ **PriceList** - Pricing table display
- ✅ **FullScreenImage** - Full-screen image component
- ✅ **RichTextArea** - Rich text content

### Pages
- ✅ Home page with promotional content
- ✅ Breakfast Menu page
- ✅ Lunch Menu page
- ✅ Dinner Menu page
- ✅ Price List page
- ✅ Multi-Board demo page (3D arc layout)

### Features
- ✅ Automatic placeholder images for missing content
- ✅ Price formatting (stored in cents, displayed as dollars)
- ✅ Category support for menu items
- ✅ Smooth iframe refresh with double-buffering (no flickering)
- ✅ Responsive 3D layout that maintains aspect ratios
- ✅ Auto-refresh every 10 seconds

## 🛠️ Development

### Environment Variables

Create a `.env.local` file with:

```env
AGILITY_GUID=your-instance-guid
AGILITY_API_FETCH_KEY=your-fetch-key
AGILITY_API_PREVIEW_KEY=your-preview-key
AGILITY_LOCALES=en-us
```

### Adding New Components

1. Create component in `src/components/agility-components/YourComponent.tsx`
2. Register in `src/components/agility-components/index.ts`
3. Create component model in Agility CMS
4. Add to pages in CMS

### Multi-Board Page

The multi-board page (`/multi-board`) displays three iframes in a 3D arc:
- **Left**: Home page (promotional content)
- **Middle**: Breakfast menu
- **Right**: Price list

All iframes maintain 1080x1920 aspect ratio and refresh every 10 seconds with smooth transitions.

## 📦 Tech Stack

- **Next.js** - React framework with App Router
- **Agility CMS** - Headless CMS for content management
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## 🎨 Design Features

- **Kaushan Script Font** - Used for menu item names and headers
- **Gradient Headers** - Red gradient backgrounds for menu boards
- **Alternating Colors** - Yellow and white backgrounds for menu items
- **3D Perspective** - Arc layout with CSS 3D transforms
- **Smooth Transitions** - Fade transitions for content updates

## 📝 Content Management

All content is managed through Agility CMS:
- Menus and menu items
- Price lists
- Text blocks
- Image displays
- Pages and page structure

Content updates are reflected immediately (with auto-refresh on multi-board view).

## 🔄 Auto-Refresh

The multi-board page uses a double-buffering technique:
- Two sets of iframes per panel (Set A and Set B)
- Hidden set loads fresh content while visible set displays
- Smooth opacity transition when swapping
- No flickering or white flashes

## 📄 License

This is a proof-of-concept project.

---

**Built with Next.js and Agility CMS** 🚀
