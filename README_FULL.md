# HiEnterprises™ Multi-Site Platform

A modern React-based single-page application hosting 11+ interconnected brand microsites with iOS 26-inspired glassmorphic design.

## 🚀 Features

- **11 Brand Microsites** - HiCafe, HiTech, MyLad, weB&B, Harmony, HiOSMobile, and more
- **Single Codebase** - Manage all sites from one React project
- **iOS 26 Design** - Modern glassmorphism, smooth animations, refined typography
- **Responsive** - Mobile-first design with floating navbar and overlay menu
- **Fast** - Built with Vite for lightning-quick dev server and builds
- **No Backend Required** - Static deployment on GitHub Pages or any host

## 📋 Brand Sites

| Site | Path | Description |
|------|------|-------------|
| HiEnterprises™ | `/` | Main hub and portal |
| HiCafe™ | `/hicafe` | Restaurant brand |
| HiTech | `/hitech` | Electronics retailer |
| MyLad | `/mylad` | Retro tech brand |
| weB&B | `/worsteastern` | Hotel/accommodation |
| Harmony | `/harmony` | Mobile app |
| HiOSMobile | `/hiosmobile` | Legacy mobile app |
| Hyped | `/hyped` | Entertainment |
| Nuggetdev | `/nuggetdev` | Development studio |
| CaféFiesta | `/cafefiesta` | Cafe brand |
| Hicard | `/hicard` | Card service |

## 🛠️ Tech Stack

- **React 19.2** - UI framework
- **React Router 7** - Hash-based client-side routing
- **Vite 8** - Build tool and dev server
- **Bootstrap 5.3** - Component styling
- **Tailwind CSS** - Utility-first styling (on select pages)
- **CSS3** - Custom glassmorphism effects

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:5174

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx                 # React Router configuration
├── main.jsx               # Entry point
├── components/GlassNavbar.jsx  # Shared navbar component
├── hooks/
│   ├── useStylesheet.js   # Load CSS dynamically
│   └── useScript.js       # Load JS/configs dynamically
├── layouts/               # Layout wrappers (one per brand)
└── pages/                 # Page components (organized by brand)

public/
├── assets/
│   ├── css/               # Global & brand-specific stylesheets
│   ├── js/                # Tailwind configs for specific pages
│   ├── pics/              # Images by brand
│   └── fonts/             # Web fonts
├── [brand-name]/          # Brand-specific folders
│   ├── css/               # Brand stylesheets
│   ├── pics/              # Brand images
│   └── favicon/           # Brand icons
```

## 🎨 Design System

### Color Palette
- **Primary**: `#a0c9ff` (Light blue)
- **Background**: `#0d0f12` (Near-black)
- **Surface**: `#0d0f12` (Glass panels)
- **Text**: `#e3e2e6` (Light gray)

### Spacing Scale
- `xs`: 8px | `sm`: 12px | `md`: 16px | `lg`: 24px | `xl`: 32px

### Border Radius
- Cards: 28px
- Buttons: 50rem (full pill)
- Inner elements: 20px

### Animations
- Smooth curves: `cubic-bezier(0.16, 1, 0.3, 1)` (iOS spring)
- Transition times: 0.3s - 0.6s for depth

## 🔧 Development

See [DEVELOPMENT.md](./DEVELOPMENT.md) for:
- How to add new pages
- How to create new brand sites
- Styling guidelines
- Component documentation
- Troubleshooting guide

## 📦 Building

```bash
# Development build (watch mode)
npm run dev

# Production build
npm run build

# The 'dist/' folder contains optimized files ready to deploy
```

## 🚀 Deployment

1. Build the project: `npm run build`
2. Deploy `dist/` folder to your hosting:
   - **GitHub Pages**: Push to gh-pages branch
   - **Vercel**: Connect your repo
   - **Netlify**: Drop the dist folder
   - **Any static host**: Upload dist files

## 💡 Key Concepts

### Hash Routing
Uses `#/` URLs because this is a static SPA. Works on GitHub Pages without backend redirects.

```
http://localhost:5174/#/hicafe → HiCafe site
http://localhost:5174/#/hitech → HiTech site
```

### Dynamic Stylesheets
Each brand loads its own CSS via the `useStylesheet()` hook, keeping styles isolated and branded.

### Layout System
Each brand has a layout component that wraps its pages, applying the navbar, theme, and site-specific CSS.

### Shared Navbar
The `GlassNavbar` component is reused across all sites with different logos, names, and links.

## 📝 CSS Files Explained

- **`glass.css`** - iOS 26 theme: navbar, cards, buttons, animations
- **`styles.css`** - Bootstrap overrides and general components
- **`hicafe.css`** - HiCafe brand theme (golden, Caveat font)
- **`hitech.css`** - HiTech brand theme
- **`mylad/css/style.css`** - MyLad brand theme
- Other brand folders have similar CSS files

## 🔗 Navigation

Update navigation by editing layout files:

```jsx
// src/layouts/HiCafeLayout.jsx
const links = [
  { to: '/hicafe', label: 'HOME', end: true },
  { to: '/hicafe/menu', label: 'Menu' },
  // Add more links here
];
```

## 🐛 Troubleshooting

**Dev server not starting?**
- Port 5173 might be in use; Vite will try 5174
- Try: `npm run dev -- --port 3000`

**Styles not loading?**
- Check CSS file path in `useStylesheet()`
- Verify file exists in `public/` folder
- Clear browser cache (Ctrl+Shift+Del)

**Routes not working?**
- Check URL uses hash: `/#/path`
- Verify route exists in `App.jsx`
- Check component is properly exported

**Images not showing?**
- Use absolute paths: `/assets/pics/image.jpg`
- Check file exists in `public/` folder
- Verify case matches exactly (Linux/Mac are case-sensitive)

## 📖 More Info

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Vite Docs](https://vitejs.dev)
- [Bootstrap Docs](https://getbootstrap.com)

## 📄 License

All content and code © 2017-2025 HiEnterprises™ Ltd. All Rights Reserved.

---

**For development help**: See [DEVELOPMENT.md](./DEVELOPMENT.md)
