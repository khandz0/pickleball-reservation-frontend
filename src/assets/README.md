# Assets Directory

This directory contains all the static assets used in the project.

## Structure

```
assets/
├── images/     # For larger images, photos, and backgrounds
├── icons/      # For SVG icons and small images
└── fonts/      # For custom font files
```

## Usage

### Images

Place your image files in the `images` directory. For example:

```typescript
import { IMAGES } from "../assets";
// Then use it in your component
<img src={IMAGES.yourImage} alt="description" />;
```

### Icons

Place your icon files (preferably SVGs) in the `icons` directory. For example:

```typescript
import { ICONS } from "../assets";
// Then use it in your component
<img src={ICONS.yourIcon} alt="icon description" />;
```

### Fonts

Place your custom font files in the `fonts` directory and import them in your CSS files.

## Best Practices

1. Use meaningful and descriptive filenames
2. Use lowercase letters and hyphens for filenames (e.g., `hero-image.png`)
3. Optimize images before adding them to reduce file size
4. Use SVG format for icons when possible
5. Add new assets to the appropriate category in `index.ts`
