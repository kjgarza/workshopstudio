# Projects Section Components

This directory contains two versions of the projects section component:

## 1. `projects-section.njk` (Original)

Displays project categories with links to individual projects. Shows:
- Project categories from `portfolio.js`
- Project listings with titles and dates
- Organized by category (GoMore, The Guardian, Personal Projects)

**Usage:**
```njk
{% include "components/projects-section.njk" %}
```

## 2. `projects-section-alt.njk` (Alternative)

Displays sections with h2 titles and paragraph text using a list-based data structure. The layout iterates through the list, making it easy to add or remove sections. This is ideal for a more content-focused, narrative introduction to your workshop services.

**Features:**
- Uses a list/array structure for flexible content management
- Iterates through sections automatically
- Each section has an h2 title and paragraph with `about-bio` styling
- Uses `project-category` wrapper for consistent left-aligned layout
- Responsive typography (h2: 4vw mobile, 1.4vw desktop; p: 6.6vw mobile, 2.4vw on desktop)
- Easy to add more sections by adding to the array

**Usage:**
```njk
{% include "components/projects-section-alt.njk" %}
```

**Customizing Content:**

Edit the content in `src/_data/site.js`:

```javascript
workshopIntro: [
  {
    title: "Your first title",
    text: "Your first paragraph text here..."
  },
  {
    title: "Your second title",
    text: "Your second paragraph text here..."
  }
  // Add more sections as needed
]
```

## Switching Between Components

To use the alternative version on your homepage:

1. Open `src/index.njk`
2. Replace:
   ```njk
   {% include "components/projects-section.njk" %}
   ```
   
   With:
   ```njk
   {% include "components/projects-section-alt.njk" %}
   ```

3. Run `npm run build` to rebuild the site

## Styling

Both components inherit styles from the existing CSS:
- `.project-category` class provides the left-aligned layout and grid positioning
- `.project-category h2` styles the section titles
- `.about-bio` class provides the paragraph typography and layout
- Animations and responsive behavior are handled automatically
