# Desmare Design System Guidelines

This guide provides an overview of the Desmare design system and how to maintain consistency across the website.

## Color System

All colors are defined in `tailwind.config.js` and can be accessed through the `theme.ts` file in the `src/lib` directory.

### Primary Colors

The primary color palette is a forest green that conveys sustainability, trust, and environmental responsibility:

- **accent-50** (#E8F5E9): Very light green - Use for card backgrounds, section backgrounds
- **accent-100** (#C8E6C9): Light green - Use for icon backgrounds
- **accent-DEFAULT** (#388E3C): Main green - Use for primary buttons, links, accents
- **accent-700** (#1B5E20): Darker green - Use for hover states

### Secondary & Tertiary Colors

- Blue: Used for secondary actions and complementary UI elements
- Earth tones: Used for tertiary elements and grounding the design

### Semantic UI Elements

We've created semantic names for common UI elements in the `ui` object within `tailwind.config.js`. Use these when styling components:

```js
// Example usage
<div className="bg-ui-card-bg border border-ui-card-border shadow-card">
  Content
</div>
```

## Component System

### Using Card Component

The Card component provides a consistent container for content sections:

```jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

<Card variant="accent">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
</Card>;
```

Variants:

- `default`: White background with subtle border
- `accent`: Light green background with accent border
- `secondary`: Light gray background

### Using Button Component

The Button component ensures consistent styling for all interactive buttons:

```jsx
import { Button } from "@/components/ui/Button";

<Button variant="primary" size="lg" loading={isLoading}>
  Click Me
</Button>;
```

Variants:

- `primary`: Green background with white text
- `secondary`: White background with green text and border
- `outline`: Transparent with green border
- `ghost`: Transparent with hover effect

Sizes:

- `sm`: Small buttons for compact UI
- `md`: Medium buttons for most uses
- `lg`: Large buttons for primary CTAs

## Form Elements

Form inputs have standardized styling with proper focus states. We've defined these in `globals.css`:

```jsx
<label className="block text-sm font-medium mb-1">Label</label>
<input type="text" required />
```

## Section Styling

For consistent section styling:

```jsx
<section className="py-20">
  <div className="container-custom">
    <h2 className="section-title">Section Title</h2>
    <p className="section-subtitle">Section description text</p>

    {/* Content */}
  </div>
</section>
```

## Icon Usage

Use the `icon-container` class for consistent icon styling:

```jsx
<div className="icon-container">
  <svg className="icon">...</svg>
</div>
```

## Updating the Theme

To modify the site's appearance:

1. Edit colors in `tailwind.config.js` - all components will automatically update
2. For more granular control, edit `src/lib/theme.ts`
3. Test changes across different screen sizes and components

## Accessibility Guidelines

- Maintain a minimum contrast ratio of 4.5:1 for text
- Use semantic HTML elements
- Ensure all interactive elements have proper focus states
- Provide alternative text for images
- Test with keyboard navigation

---

By following these guidelines, we maintain a consistent, professional appearance that conveys trust, environmental responsibility, and quality across the Desmare website.
