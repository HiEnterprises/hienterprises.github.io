# Development Guide for HiEnterprises™

This guide will help you understand and maintain the HiEnterprises site without needing AI assistance.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5174)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── App.jsx                 # Main router configuration
├── main.jsx               # React entry point
├── components/
│   └── GlassNavbar.jsx    # Reusable navigation component
├── hooks/
│   ├── useStylesheet.js   # Dynamically load CSS for each site
│   └── useScript.js       # Dynamically load JS/Tailwind configs
├── layouts/
│   ├── RootLayout.jsx     # Main HiEnterprises site layout
│   ├── HiCafeLayout.jsx   # HiCafe restaurant layout
│   ├── HiTechLayout.jsx   # HiTech electronics layout
│   ├── MyladLayout.jsx    # MyLad retro tech layout
│   └── [other layouts]    # One layout per brand site
└── pages/
    ├── Root/             # Pages for main HiEnterprises site
    ├── HiCafe/          # Pages for HiCafe site
    ├── HiTech/          # Pages for HiTech site
    └── [other brands]   # One folder per brand
```

## How It Works

### Multi-Site Architecture

The site runs as a **Single Page Application (SPA)** with multiple micro-sites accessible via hash routing:

- **Hash Router** (`#/path`) - Navigation works by changing the URL hash
- **Each brand has its own layout** - Example: `HiCafeLayout.jsx` wraps all HiCafe pages
- **Each layout loads site-specific CSS** - Uses `useStylesheet()` hook
- **Shared GlassNavbar** - Same navbar component, different branding per site

### Site Routes

```
/ or /#/                      → HiEnterprises™ homepage
/#/hicafe                     → HiCafe™ restaurant site
/#/hitech                     → HiTech electronics retailer
/#/mylad                      → MyLad retro tech brand
/#/worsteastern               → weB&B hotel
/#/harmony                    → Harmony mobile app
/#/hiosmobile                 → HiOSMobile app (legacy)
```

Each route automatically loads the correct layout and applies the site-specific styling.

## Adding a New Page

### Step 1: Create the Page Component

Create a new file in `src/pages/[BrandName]/PageName.jsx`:

```jsx
export default function PageName() {
  return (
    <div className="container mt-5">
      <h1>Page Title</h1>
      <p>Your content here</p>
    </div>
  );
}
```

### Step 2: Add the Route

Edit `src/App.jsx` and add a new route in the appropriate brand section:

```jsx
{
  path: '/brandname/page-name',
  element: <PageName />
}
```

### Step 3: Add Navigation Link

Edit the corresponding layout file (e.g., `src/layouts/HiCafeLayout.jsx`):

```jsx
const links = [
  { to: '/hicafe', label: 'HOME', end: true },
  { to: '/hicafe/page-name', label: 'Page Name' },  // ← Add this line
  // ... other links
];
```

## Styling

### Global Styles
- **`public/assets/css/glass.css`** - iOS 26 glassmorphism theme (navbar, cards, buttons)
- **`public/assets/css/styles.css`** - General component styling

### Site-Specific Styles
Each brand has its own CSS file:
- `/assets/css/hicafe.css` - HiCafe theme (golden colors)
- `/assets/css/hitech.css` - HiTech theme (modern tech)
- `/mylad/css/style.css` - MyLad theme (retro)

These load automatically via the `useStylesheet()` hook in each layout.

### CSS Variables (in glass.css)

Customize the design by editing these variables in `:root`:

```css
:root {
    --primary: #a0c9ff;           /* Main accent color */
    --background: #0d0f12;         /* Dark background */
    --surface: #0d0f12;            /* Card/panel backgrounds */
    --radius-card: 28px;           /* Card border radius */
    --spacing-lg: 24px;            /* Large padding/margin */
}
```

## Components

### GlassNavbar

Reusable floating navigation component. Props:

```jsx
<GlassNavbar
  brandLogo="/path/to/logo.png"      // Logo image URL
  brandName="Site Name"               // Brand name text
  brandLink="/site-path"              // Where logo clicks to
  links={[                            // Navigation links array
    { to: '/page', label: 'Page', end: true },
    { to: '/external', label: 'Link', isExternal: true },
    { to: '/cta', label: 'CTA', isCta: true }  // Highlighted button
  ]}
/>
```

### useStylesheet Hook

Dynamically load CSS files for each site:

```jsx
import useStylesheet from '../hooks/useStylesheet';

function MyLayout() {
  useStylesheet('/path/to/stylesheet.css');  // Loads when component mounts
  return <div>Content</div>;
}
```

## Common Tasks

### Change Navbar Branding

Edit the layout file for your site (e.g., `src/layouts/HiCafeLayout.jsx`):

```jsx
<GlassNavbar
  brandLogo="/new/logo.png"    // Change this
  brandName="New Brand Name"    // Change this
  brandLink="/new-route"        // Change this
  links={links}
/>
```

### Update Navigation Links

In the same layout file, modify the `links` array:

```jsx
const links = [
  { to: '/route1', label: 'Link 1', end: true },
  { to: '/route2', label: 'Link 2' },
  { to: '/', label: '← Back' }
];
```

### Add a New Brand Site

1. Create a new layout: `src/layouts/NewBrandLayout.jsx`
2. Create pages folder: `src/pages/NewBrand/`
3. Create CSS file: `public/assets/css/newbrand.css`
4. Add routes to `src/App.jsx` with the layout wrapper
5. Update the root navigation to link to your new site

### Change Site Colors

1. Create/edit the brand CSS file (e.g., `/assets/css/mybrand.css`)
2. Override colors with CSS variables or custom classes
3. Load it via `useStylesheet()` in the layout

### Modify the iOS 26 Design

All design settings are in `public/assets/css/glass.css`:

- **Navbar styling** - Look for `.navbar` class
- **Card styling** - Look for `.card` class
- **Button styling** - Look for `.btn-card`, `.btn-nav-cta` classes
- **Colors** - Edit CSS variables in `:root`
- **Animations** - Search for `@keyframes`

## Troubleshooting

### Page Not Loading

1. Check that the route exists in `App.jsx`
2. Verify the component path is correct
3. Check browser console for errors (F12 → Console)
4. Make sure the component exports correctly

### Styling Not Applied

1. Check that the CSS file path is correct in `useStylesheet()`
2. Verify CSS file exists at that path
3. Use `!important` to override existing styles if needed
4. Check browser inspector (F12 → Styles) to debug CSS

### Navigation Links Not Working

1. Ensure the route exists in `App.jsx`
2. Check that the `to` prop matches a defined route
3. Verify hash routing is working (check URL with `#/`)

## Important Notes

- **Hash Routing**: All URLs use `#/` because this is a static SPA. This works on GitHub Pages without a backend.
- **CSS Files Must Exist**: If a CSS file referenced in `useStylesheet()` doesn't exist, it won't load silently.
- **Images Paths**: Images use absolute paths like `/assets/pics/` - these are relative to the `public/` folder.
- **Build Output**: `npm run build` creates a `dist/` folder with production files.

## Testing Your Changes

1. Start dev server: `npm run dev`
2. Open browser to `http://localhost:5174`
3. Navigate using hash routes: `/#/site-name`
4. Test on mobile using DevTools (F12 → responsive mode)
5. Check mobile menu opens correctly

## Deployment

The `dist/` folder created by `npm run build` is ready to deploy to GitHub Pages or any static host. For GitHub Pages, ensure your repo settings point to the build output.

## Questions?

- Check the component files - they have descriptive names and structure
- Look at existing layouts as templates for new ones
- CSS files are well-commented with sections for each component
- Review `App.jsx` to understand the routing system
