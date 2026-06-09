# Maintenance Checklist & Common Tasks

Quick reference for common development tasks on the HiEnterprises site.

## Before You Start

- [ ] Clone the repo: `git clone [repo-url]`
- [ ] Install dependencies: `npm install`
- [ ] Start dev server: `npm run dev`
- [ ] Open browser to `http://localhost:5174`

## Adding New Content

### Add a Page to an Existing Brand

**Example: Add "Gallery" page to HiCafe**

- [ ] Create file: `src/pages/HiCafe/Gallery.jsx`
- [ ] Export from `src/pages/HiCafe/Pages.jsx`:
  ```jsx
  export { default as HiCafeGallery } from './Gallery';
  ```
- [ ] Import in `src/App.jsx`:
  ```jsx
  import { HiCafeGallery } from './pages/HiCafe/Pages';
  ```
- [ ] Add route in `src/App.jsx`:
  ```jsx
  <Route path="gallery" element={<HiCafeGallery />} />
  ```
- [ ] Add nav link in `src/layouts/HiCafeLayout.jsx`:
  ```jsx
  { to: '/hicafe/gallery', label: 'Gallery' },
  ```
- [ ] Test at `http://localhost:5174/#/hicafe/gallery`

### Add a New Brand Site

**Example: Add "TechCafe" brand**

- [ ] Create layout: `src/layouts/TechCafeLayout.jsx`
- [ ] Create pages folder: `src/pages/TechCafe/`
- [ ] Create pages file: `src/pages/TechCafe/Pages.jsx` with Home component
- [ ] Create CSS file: `public/assets/css/techcafe.css`
- [ ] Add import to `src/App.jsx`:
  ```jsx
  import TechCafeLayout from './layouts/TechCafeLayout';
  import { TechCafeHome } from './pages/TechCafe/Pages';
  ```
- [ ] Add route section to `src/App.jsx`:
  ```jsx
  <Route path="/techcafe" element={<TechCafeLayout />}>
    <Route index element={<TechCafeHome />} />
  </Route>
  ```
- [ ] Add link to Root site to access new brand
- [ ] Test at `http://localhost:5174/#/techcafe`

### Update Navigation Links

**For HiCafe:**
1. Open `src/layouts/HiCafeLayout.jsx`
2. Find the `links` array
3. Add/edit/remove items:
   ```jsx
   const links = [
     { to: '/hicafe', label: 'HOME', end: true },
     { to: '/hicafe/new-page', label: 'New Page' },  // ← Add here
   ];
   ```
4. Navbar updates automatically

## Design & Styling

### Change Brand Colors

**Global Colors (All Sites):**
1. Open `public/assets/css/glass.css`
2. Edit `:root` variables:
   ```css
   --primary: #NEW_COLOR;
   ```

**Brand-Specific Colors (HiCafe Only):**
1. Open `public/assets/css/hicafe.css`
2. Add color override:
   ```css
   :root {
       --primary: #GOLD_COLOR;
   }
   ```

### Change Fonts

**Global Font:**
1. Open `index.html`
2. Add Google Font import to `<head>`
3. Update CSS variable in `glass.css`:
   ```css
   --fontPrimary: "New Font Name", sans-serif;
   ```

**Brand Font:**
1. Edit brand CSS file (e.g., `hicafe.css`)
2. Add font import and apply:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=FontName');
   body { font-family: 'FontName', sans-serif; }
   ```

### Update Navbar Branding

1. Open layout file (e.g., `src/layouts/HiCafeLayout.jsx`)
2. Update GlassNavbar props:
   ```jsx
   <GlassNavbar
     brandLogo="/new/logo.png"     // ← Change logo
     brandName="New Name"          // ← Change name
     brandLink="/new-route"        // ← Change link
     links={links}
   />
   ```

### Adjust Spacing

In `glass.css`, modify CSS variables:

```css
:root {
    --spacing-md: 20px;  /* Default 16px - increase for more space */
    --spacing-lg: 32px;  /* Default 24px */
}
```

All components using these variables update automatically.

## Images & Assets

### Add Images

1. Place image in appropriate folder:
   - Global: `public/assets/pics/`
   - Brand-specific: `public/[brand]/pics/`

2. Use in HTML with absolute path:
   ```jsx
   <img src="/assets/pics/image.jpg" alt="Description" />
   ```

3. For brand images:
   ```jsx
   <img src="/hicafe/pics/image.jpg" alt="Description" />
   ```

### Optimize Images

- Use PNG for graphics, JPG for photos
- Compress before uploading (TinyPNG, ImageOptim)
- Name clearly: `menu-salad.jpg` not `image1.jpg`

## Maintenance Tasks

### Regular Backups

- [ ] Commit code regularly: `git add .` → `git commit -m "message"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Keep raw HTML files as backup

### Check for Broken Links

```bash
npm run dev
# Test navigation between all brand sites
# Check external links work
# Test on mobile view
```

### Update Dependencies

```bash
npm outdated                # See outdated packages
npm update                  # Update packages
npm audit                   # Check for vulnerabilities
npm audit fix              # Fix security issues
```

### Clear Build Artifacts

```bash
rm -rf dist node_modules   # Clean everything
npm install                # Reinstall
npm run build              # Rebuild
```

## Deployment

### Build for Production

```bash
npm run build
# Creates optimized 'dist/' folder
```

### Deploy to GitHub Pages

1. Ensure `dist/` folder is built
2. Deploy (method depends on your setup):
   - Manual upload to gh-pages branch
   - Use GitHub Actions
   - Use netlify-cli

### Test Production Build Locally

```bash
npm run preview
# Opens local preview of built site
# http://localhost:4173
```

## Troubleshooting

### Page Not Showing

- [ ] Check route exists in `App.jsx`
- [ ] Verify component is exported from Pages.jsx
- [ ] Check URL hash: `/#/brand/page`
- [ ] Clear browser cache (Ctrl+Shift+Del)

### Styles Not Applied

- [ ] Verify CSS file path is correct
- [ ] Check file exists in `public/` folder
- [ ] Confirm useStylesheet() hook called
- [ ] Open DevTools (F12) → Elements to check loaded CSS

### Images Not Showing

- [ ] Check path is absolute: `/assets/pics/image.jpg`
- [ ] Verify file exists in `public/` folder
- [ ] Check filename case exactly matches
- [ ] Open DevTools → Network tab to see 404 errors

### Navigation Broken

- [ ] Verify all routes exist in `App.jsx`
- [ ] Check links use correct paths
- [ ] Verify layout wraps correct pages
- [ ] Test hash navigation: `http://localhost:5174/#/brand`

### Dev Server Won't Start

- [ ] Port 5173 in use? Vite auto-tries 5174
- [ ] Try: `npm run dev -- --port 3000`
- [ ] Clear node_modules: `rm -rf node_modules && npm install`
- [ ] Restart terminal

## Performance Optimization

### Reduce Bundle Size

- [ ] Remove unused CSS rules
- [ ] Compress images
- [ ] Use CSS variables instead of duplicate values
- [ ] Lazy load components if possible

### Improve Load Speed

- [ ] Minimize CSS files (`npm run build`)
- [ ] Use CDN for external libraries
- [ ] Enable caching on server
- [ ] Monitor with Lighthouse (F12 → Lighthouse)

## Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Fix navbar on mobile"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

## Documentation

- **General questions** → See [DEVELOPMENT.md](./DEVELOPMENT.md)
- **CSS help** → See [CSS_GUIDE.md](./CSS_GUIDE.md)
- **React questions** → [React Docs](https://react.dev)
- **Routing questions** → [React Router Docs](https://reactrouter.com)

## Quick Commands Reference

```bash
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
npm install [package]   # Install new package
npm update             # Update all packages
npm run build           # Production build
```

## Common File Locations

| What | Location |
|------|----------|
| Main layout | `src/layouts/` |
| Pages | `src/pages/[Brand]/` |
| Components | `src/components/` |
| Global CSS | `public/assets/css/` |
| Brand CSS | `public/[brand]/css/` |
| Images | `public/assets/pics/` or `public/[brand]/pics/` |
| Routing | `src/App.jsx` |
| Config | `vite.config.js`, `package.json` |

---

**Need more help?** Check DEVELOPMENT.md for detailed guides!
