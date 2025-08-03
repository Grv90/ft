# Custom Icons Library

This directory contains your custom SVG icons organized as React components.

## Structure

```
src/components/Icons/
├── index.ts              # Exports all icons
├── BaseIcon.tsx          # Base icon component
├── MenuIcon.tsx          # Menu icon component
└── README.md             # This file
```

## How to Add Your SVG Icons

### 1. Create a New Icon Component

Create a new file for each icon, following this pattern:

```typescript
// src/components/Icons/YourIconName.tsx
import React from "react";
import BaseIcon, { IconProps } from "./BaseIcon";

const YourIconName: React.FC<IconProps> = (props) => {
  return (
    <BaseIcon {...props}>
      {/* Paste your SVG path here */}
      <path
        d="your-svg-path-data"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default YourIconName;
```

### 2. Add Export to index.ts

Add your new icon to the exports in `index.ts`:

```typescript
export { default as YourIconName } from "./YourIconName";
```

### 3. Use in Components

Import and use your icons:

```typescript
import { YourIconName } from "../components/Icons";

// In your component
<YourIconName size={24} color="white" />;
```

## Converting Your SVG Files

### For Stroke-based Icons:

- Use `stroke="currentColor"` for the stroke color
- Set `strokeWidth="2"` for consistent stroke width
- Use `strokeLinecap="round"` and `strokeLinejoin="round"` for rounded ends

### For Fill-based Icons:

- Use `fill="currentColor"` for the fill color
- Remove stroke attributes

### Example Conversion:

**Original SVG:**

```svg
<svg width="24" height="24" viewBox="0 0 24 24">
  <path d="M3 12h18M3 6h18M3 18h18" stroke="black" stroke-width="2"/>
</svg>
```

**Converted to Component:**

```typescript
const MenuIcon: React.FC<IconProps> = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M3 12h18M3 6h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};
```

## Available Props

All icons accept these props:

- `size?: number` - Icon size (default: 24)
- `color?: string` - Icon color (default: currentColor)
- `className?: string` - Additional CSS classes
- `onClick?: () => void` - Click handler

## Usage Examples

```typescript
// Basic usage
<MenuIcon />

// With custom size and color
<UserIcon size={32} color="blue" />

// With click handler
<SearchIcon onClick={() => console.log('clicked')} />

// With custom classes
<HomeIcon className="my-custom-class" />
```

## Current Icons

- `MenuIcon` - Hamburger menu icon (from Name=Menu.svg)

Add your own SVG icons by following the pattern above!
