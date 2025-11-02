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

Displays two sections with h2 titles and paragraph text, using the same layout structure as project categories. This is ideal for a more content-focused, narrative introduction to your workshop services.

**Features:**
- Uses `project-category` wrapper for consistent left-aligned layout
- Each section has an h2 title (styled like project category titles)
- Each section has a paragraph with `about-bio` styling
- Responsive typography (h2: 4vw mobile, 1.4vw desktop; p: 6.6vw mobile, 2.4vw on desktop)
- Content is managed through `src/_data/site.js`

**Usage:**
```njk
{% include "components/projects-section-alt.njk" %}
```

**Customizing Content:**

Edit the content in `src/_data/site.js`:

```javascript
workshopIntro: {
  title1: "Your first title",
  paragraph1: "Your first paragraph text here...",
  title2: "Your second title",
  paragraph2: "Your second paragraph text here..."
}
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
