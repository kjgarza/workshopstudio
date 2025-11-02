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

Displays two introductory paragraphs with the same styling as the about-bio section. This is ideal for a more content-focused, narrative introduction to your workshop services.

**Features:**
- Uses the same `about-bio` CSS class for consistent styling
- Displays two customizable paragraphs
- Responsive typography (6.6vw on mobile, 2.4vw on desktop)
- Content is managed through `src/_data/site.js`

**Usage:**
```njk
{% include "components/projects-section-alt.njk" %}
```

**Customizing Content:**

Edit the content in `src/_data/site.js`:

```javascript
workshopIntro: {
  paragraph1: "Your first paragraph text here...",
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
- `.about-bio` class provides the typography and layout
- Animations and responsive behavior are handled automatically
- Grid positioning works the same as the about section
