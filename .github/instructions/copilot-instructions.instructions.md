# Copilot Instructions for Kristian Garza Portfolio

## Architecture Overview

This is a **pure 11ty static site generator** project:
- **11ty static site generator** - the source and build system
- **Custom CSS and JavaScript** - located in `src/assets/`
- **Deployed to GitHub Pages** at `https://kjgarza.github.io/workshopstudio`

The site uses Nunjucks templates with custom CSS, generating static HTML for a workshop studio portfolio.

## Key Directory Structure

```
├── workshopstudio/          # 11ty source (working directory)
│   ├── src/
│   │   ├── _data/                 # Global data files (site.js, portfolio.js, author.js)
│   │   ├── _includes/
│   │   │   ├── layouts/           # Base templates (base.njk, home.njk, project.njk, presentation.njk)
│   │   │   ├── components/        # Reusable UI components
│   │   │   └── partials/          # Partial templates (head.njk, scripts.njk)
│   │   ├── assets/                # Static assets (CSS, JS, images, fonts)
│   │   │   ├── css/               # Custom CSS files
│   │   │   ├── js/                # JavaScript files
│   │   │   ├── img/               # Images and icons
│   │   │   └── fonts/             # Web fonts
│   │   └── *.njk                  # Page templates (index.njk, presentations)
│   ├── _site/                     # 11ty build output
│   └── .eleventy.js               # 11ty configuration
```

## Development Workflow

### Building and Serving
- **Development**: `npm run dev` (serves with hot reload on `http://localhost:8080`)
- **Build**: `npm run build` (outputs to `_site/`)
- **Watch mode**: `npm run watch` (rebuilds on file changes)

### Content Management Patterns

1. **Work/Case Studies**: Create `.njk` files in `src/work/` with frontmatter, add entries to `src/_data/work.js`
2. **Tools**: Add entries to `src/_data/tools.js` for tools page grid
3. **Site metadata**: Edit `src/_data/site.js` for global site information

### Template Hierarchy
- `layouts/base.njk` → provides HTML structure, SEO meta tags, scripts
- `layouts/home.njk` → extends base.njk for homepage with project sections
- `layouts/project.njk` → extends base.njk for individual project pages
- `layouts/presentation.njk` → extends base.njk for Reveal.js presentation slides
- Individual pages use these layouts via frontmatter `layout: layouts/home.njk`

## Critical Configuration Details

### 11ty Configuration (.eleventy.js)
```javascript
// Copy static assets with proper path mapping
eleventyConfig.addPassthroughCopy({"src/assets/css": "css"});
eleventyConfig.addPassthroughCopy({"src/assets/js": "js"});
eleventyConfig.addPassthroughCopy({"src/assets/images": "img"});
eleventyConfig.addPassthroughCopy({"src/assets/img": "img"});
eleventyConfig.addPassthroughCopy({"src/assets/fonts": "fonts"});

// Disables HTML auto-escaping for inline SVGs
eleventyConfig.setNunjucksEnvironmentOptions({
  autoescape: false,
});
```

### Data Architecture
- **Portfolio projects** in `src/_data/portfolio.js` organized by categories (braze, hellofresh, gameduell)
- **Site metadata** in `src/_data/site.js` includes navigation, SEO settings, and analytics
- **Author information** in `src/_data/author.js` contains bio, job timeline, and contact details
- **Project data** includes specialized data files like `gomoreRatings.js` for detailed case studies

### Styling System
- **Custom CSS** in `src/assets/css/master.css` with custom design system
- **Custom design tokens**: CSS custom properties for colors, typography, and spacing
- **Component-based styles**: Modular CSS for project cards, navigation, and layout components
- **Responsive design**: Mobile-first approach with custom breakpoints

## Navigation and State Management

### Dynamic Navigation
- Case studies show back button: `onclick="history.back()"`
- Navigation items in `src/_data/navigation.js`
- Current page detection via `{% if page.url == item.href %}`

### Password Protection Pattern
```njk
{% if passwordProtected %}
<!-- Overlay with authentication form -->
{% endif %}
```
Used for client case studies requiring access control.

## Image and Asset Handling

### Static Assets
- **Images** stored in `src/assets/img/` with organized subdirectories
- **Interface assets** in `src/assets/img/interface/` (favicons, backgrounds)
- **Project images** in categorized folders (gomore, logflumes, mckatsu, etc.)
- **Fonts** in `src/assets/fonts/` (Lausanne typeface)
- **JavaScript** in `src/assets/js/` for interactive components
- All assets copied via `addPassthroughCopy()` configuration

## Content Patterns

### Project Page Structure
```njk
---
layout: layouts/project.njk
bodyClass: project_name
title: [Project Title]
description: [Meta description]
---

[Project content using components]
```

### Presentation Structure
```njk
---
layout: layouts/presentation.njk
title: [Presentation Title]
theme: "black"
permalink: "/presentation-name/"
---

[Reveal.js slides content]
```

### Portfolio Grid System
Portfolio items organized in categories with custom CSS classes:
```javascript
cssClass: "gomore",  // CSS class for styling
items: [{
  id: "unique-id",
  title: "Project Title",
  time: "Timeline",
  url: "/project-url"
}]
```

## SEO and Meta Management

- **Open Graph** and **Twitter Card** meta tags in `base.njk`
- **Dynamic titles** and descriptions from page frontmatter
- **Site URL** configuration in `src/_data/site.js` (`https://kjgarza.github.io/`)

## Deployment Considerations

This hybrid architecture requires:
1. Building 11ty site (`npm run build`)
2. Copying `_site/` contents to repository root
3. Ensuring `_next/` assets are properly copied and accessible

