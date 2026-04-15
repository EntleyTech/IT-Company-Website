# Light & Dark Mode Implementation Guide

## Features Implemented

### 1. **Theme Toggle Button**
   - Fixed position button in the top-right corner of the page
   - Displays moon icon (🌙) in light mode and sun icon (☀️) in dark mode
   - Smooth transitions between modes
   - Responsive design that adjusts for mobile devices

### 2. **CSS Variables Theme System**
   - **Light Mode** (default):
     - Light backgrounds (#ffffff, #f2f2f2)
     - Dark text (#000000, #333333)
     - Primary color: #002e5f (dark blue)
     - Accent color: #00bfff (cyan)

   - **Dark Mode**:
     - Dark backgrounds (#1a1a1a, #2d2d2d)
     - Light text (#ffffff, #e0e0e0)
     - Primary color: #002e5f (maintains consistency)
     - Accent color: #00bfff (maintains consistency)

### 3. **Persistent Theme Storage**
   - Theme preference is saved to browser's localStorage
   - User's choice persists across page refreshes and visits
   - Falls back to system preference if available

### 4. **Smooth Transitions**
   - 0.3s ease transitions for background-color, color, and border-color
   - Ensures smooth switching between themes without jarring changes

## Files Modified/Created

### New Files:
1. **css/theme.css** - Contains all theme variables and CSS rules
2. **js/theme-switcher.js** - JavaScript logic for theme switching

### Updated Files:
1. **index.html** - Added theme.css link and theme-switcher.js script
2. **careers.html** - Added theme.css link and theme-switcher.js script

## How to Use

1. **Toggle Theme**: Click the circular button in the top-right corner to switch between light and dark modes
2. **Automatic Detection**: On first visit, the theme will use your system's preference (if available)
3. **Persistence**: Your theme choice is automatically saved and restored on future visits

## Browser Compatibility

- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled for theme switching
- Gracefully degrades to light mode if JavaScript is disabled

## Customization

If you want to modify colors, update the CSS variables in `css/theme.css`:

```css
:root {
    /* Light Mode */
    --bg-primary: #ffffff;  /* Change background color */
    --text-primary: #000000;  /* Change text color */
    --color-accent: #00bfff;  /* Change accent color */
    /* ... other variables */
}

[data-theme="dark"] {
    /* Dark Mode */
    --bg-primary: #1a1a1a;  /* Change dark background */
    /* ... other variables */
}
```

## Elements Styled with Theme Support

- Header and navigation
- Main sections (home, about, services, portfolio, team, testimonials)
- Buttons and interactive elements
- Cards and containers
- Input fields and forms
- Text and headings
- Footer
- All background colors and text colors
