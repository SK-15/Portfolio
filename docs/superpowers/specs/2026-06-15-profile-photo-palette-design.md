# Profile Photo + Palette Update

## Summary

Add profile photo to the home hero section and update the color palette to match the image's warm anime aesthetic.

## Layout

- **Desktop**: Two-column hero — photo left (~220px rounded rect), text right (existing headline/body/CTAs)
- **Mobile**: Single column, photo stacked above text, centered
- Photo source: `public/profile.jpg`
- Photo border: `border border-rule` (warm `#ddd8ce`)
- Photo shape: `rounded-xl` to complement the anime illustration style

## Color Palette

All changes in `tailwind.config.js` and `src/index.css`:

| Token | Old | New |
|---|---|---|
| `accent.DEFAULT` | `#2d5a8e` | `#6b8c6e` |
| `accent.light` | `#e8f0f9` | `#dce8dc` |
| `accent.dark` | `#1e4a72` | `#4a6b4d` |
| `highlight.DEFAULT` | `#e8a838` | `#c8a97e` |
| CSS `--accent` | `#2d5a8e` | `#6b8c6e` |

Background (`#faf8f4`), ink (`#1a1814`), and rule (`#ddd8ce`) unchanged.

## Files Changed

1. `src/pages/Home.jsx` — hero layout restructure
2. `tailwind.config.js` — color token updates
3. `src/index.css` — CSS variable update
