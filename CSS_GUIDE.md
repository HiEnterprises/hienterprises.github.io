# CSS Architecture Guide

This guide explains how the site's styling system works and how to customize it.

## Overview

The site uses a **layered CSS approach** for maintainability:

1. **Global Base** (`glass.css`) - iOS 26 theme, shared components
2. **Component Overrides** (`styles.css`) - Bootstrap overrides, general utilities  
3. **Brand-Specific** (e.g., `hicafe.css`) - Brand colors, fonts, unique styling

## File Organization

```
public/assets/css/
├── glass.css          # iOS 26 glassmorphism (navbar, cards, animations)
├── styles.css         # Bootstrap overrides, utility classes
├── hicafe.css         # HiCafe theme (golden tones, Caveat font)
├── hitech.css         # HiTech theme (modern, tech colors)
├── harmony.css        # Harmony theme
├── worsteastern.css   # weB&B theme
├── hiosmobile.css     # HiOSMobile theme
├── m3.css            # Material Design 3 theme
├── fonts.css         # Font imports
└── [other].css

/mylad/css/
└── style.css         # MyLad theme (retro tech styling)
```

## CSS Variables (glass.css)

All design tokens are stored as CSS variables in the `:root` selector. Customize here:

```css
:root {
    /* Color Palette */
    --primary: #a0c9ff;              /* Main accent color */
    --onPrimary: #00325a;            /* Text on primary color */
    --primaryContainer: #1b2431;     /* Subtle primary background */
    --onPrimaryContainer: #d2e4ff;   /* Text on container */
    --secondary: #bbc7db;            /* Secondary accent */
    --background: #0d0f12;           /* Page background */
    --onBackground: #e3e2e6;         /* Primary text color */
    --surface: #0d0f12;              /* Card/panel backgrounds */
    --onSurface: #e3e2e6;            /* Text on surfaces */
    --outline: rgba(255, 255, 255, 0.12);  /* Border color */
    
    /* Spacing Scale (follow this for consistency) */
    --spacing-xs: 8px;               /* Smallest gaps */
    --spacing-sm: 12px;              /* Small spacing */
    --spacing-md: 16px;              /* Standard spacing */
    --spacing-lg: 24px;              /* Large spacing */
    --spacing-xl: 32px;              /* Extra large spacing */
    
    /* Border Radius (iOS-style) */
    --radius-card: 28px;             /* Card roundness */
    --radius-button: 50rem;          /* Full pill buttons */
    --radius-inner: 20px;            /* Inner element roundness */
}
```

## Component Styling

### Navbar (.navbar)

The floating capsule navigation bar at the top of each page.

```css
.navbar {
    position: fixed;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    /* ... more styles ... */
}
```

**Customization:**
- Position: Adjust `top` value to move vertically
- Width: Modify `width` and `max-width`
- Blur: Change `backdrop-filter: blur(40px)` for more/less transparency
- Colors: Update background and border colors

### Cards (.card)

Glassmorphic panels used throughout the site.

```css
.card {
    background: rgba(13, 15, 18, 0.4);
    backdrop-filter: blur(30px) saturate(180%);
    border-radius: var(--radius-card);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}
```

**Customization:**
- Opacity: Change `rgba(13, 15, 18, 0.4)` first value (0-255 = 0-100%)
- Blur: Adjust `blur(30px)` for more/less frosted glass effect
- Roundness: Change `--radius-card` value
- Shadow: Modify shadow values (offset, blur, color)

### Buttons

Multiple button styles for different contexts.

```css
.btn-card          /* Full-width card button */
.btn-large-cta     /* Large call-to-action */
.btn-nav-cta       /* Navigation button (highlighted) */
```

**Customization:**
- Color: Change background and text color values
- Size: Modify padding values
- Shape: Adjust border-radius

### Mobile Menu (.mobile-overlay-menu)

Full-screen navigation menu for mobile devices.

```css
.mobile-overlay-menu {
    background: rgba(13, 15, 18, 0.95);
    backdrop-filter: blur(50px) saturate(200%);
}
```

## Brand-Specific Styling

Each brand can have its own color scheme and fonts.

### Example: HiCafe (hicafe.css)

```css
/* Override primary color for golden theme */
:root {
    --primary: #d4a574;    /* Golden color */
    --accent: #c9a961;     /* Darker gold */
}

/* Custom fonts for HiCafe */
@font-face {
    font-family: 'Caveat';
    src: url('/fonts/Caveat.woff2');
}

body {
    font-family: 'Caveat', cursive;  /* Unique handwriting style */
}

/* Brand-specific card styling */
.hicafe .card {
    border: 1px solid var(--primary);
}
```

## Animations

### Spring Animation Curve

The site uses iOS-style smooth animations:

```css
cubic-bezier(0.16, 1, 0.3, 1)  /* Spring curve - natural, bouncy feel */
```

Use this in transitions for consistency:

```css
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
```

### Keyframe Animations

Define reusable animations:

```css
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.element {
    animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Responsive Design

The site uses Bootstrap 5 breakpoints:

```css
/* Mobile first approach */
.element { /* Mobile styles by default */ }

/* Small devices (576px+) */
@media (min-width: 576px) { }

/* Medium devices (768px+) */
@media (min-width: 768px) { }

/* Large devices (992px+) */
@media (min-width: 992px) {
    /* Desktop navbar visible here */
}

/* Extra large devices (1200px+) */
@media (min-width: 1200px) { }
```

## Customization Examples

### Change the Primary Color (All Sites)

Edit `glass.css`:

```css
:root {
    --primary: #00FF00;  /* Changed from #a0c9ff to green */
}
```

This affects all text headings, links, and accent colors globally.

### Create a New Brand Theme

1. Create `public/assets/css/mybrand.css`:

```css
/* MyBrand Color Palette */
:root {
    --primary: #FF6B9D;        /* Pink */
    --background: #F7F3FF;     /* Light purple */
    --surface: #F7F3FF;
    --onBackground: #2D1B4E;   /* Dark purple text */
    --onSurface: #2D1B4E;
}

/* Custom font */
@font-face {
    font-family: 'MyBrandFont';
    src: url('/fonts/myfont.woff2');
}

body {
    font-family: 'MyBrandFont', sans-serif;
}

/* Brand-specific card styling */
.card {
    border: 2px solid var(--primary);
}
```

2. Load it in your layout: `useStylesheet('/assets/css/mybrand.css')`

### Increase Card Roundness

Edit `glass.css`:

```css
:root {
    --radius-card: 48px;  /* Increased from 28px */
}
```

### Disable Glass Effect (Solid Colors)

Edit `.card` in `glass.css`:

```css
.card {
    background: #1a1a1a;  /* Solid color instead of rgba */
    backdrop-filter: none;  /* Remove blur effect */
    border: 1px solid #333;
}
```

### Change Navbar Position

Edit `.navbar` in `glass.css`:

```css
.navbar {
    top: 24px;            /* Move down */
    width: 95%;           /* Wider navbar */
    border-radius: 20px;  /* Less rounded */
}
```

## Performance Tips

1. **Minimize CSS Files** - Remove unused styles
2. **Use CSS Variables** - Easier to maintain and update
3. **Lazy Load Fonts** - Use font-display: swap in @font-face
4. **Compress Images** - Smaller images = faster load
5. **Cache Busting** - Update filenames to force browser cache refresh

## Debugging

### Check Applied Styles

Use browser DevTools (F12):

1. Right-click element → Inspect
2. Go to Styles tab
3. See what CSS is applied
4. Check for `!important` rules overriding your changes

### CSS Not Working?

- **Specificity**: More specific selectors override general ones
- **Cascade**: Later rules override earlier ones  
- **Order**: CSS files loaded later take precedence
- **!important**: Forces a rule to apply (use sparingly)

### Common Issues

**Styles not appearing:**
- Check file path is correct
- Verify file exists
- Check for typos in class/id names
- Clear browser cache (Ctrl+Shift+Del)

**Styles conflicting:**
- Increase specificity: `.container .card` instead of `.card`
- Use `!important` as last resort
- Check Bootstrap's default styles aren't overriding

## CSS Naming Conventions

The site uses BEM-inspired naming:

```css
/* Block - Main component */
.card { }

/* Element - Part of block */
.card-body { }
.card-img-top { }

/* Modifier - Variation */
.card.active { }
.btn-card:hover { }
```

This keeps styles organized and prevents naming conflicts.

## Resources

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

Remember: Keep CSS maintainable by using consistent naming, organizing by component, and documenting custom properties!
