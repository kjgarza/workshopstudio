# Copilot Instructions for Kristian Garza Portfolio

## Architecture Overview

This is a **dual-architecture hybrid portfolio site** combining:
- **11ty static site generator** (`kjgarza-11ty/`) - the source and build system
- **Pre-compiled Next.js assets** (`_next/` directories) - providing CSS and interactive components
- **Deployed to GitHub Pages** at `https://kjgarza.github.io/`

The site uses Nunjucks templates with Tailwind CSS classes, generating static HTML while leveraging Next.js assets for styling and interactions.

## Key Directory Structure

```
├── kjgarza-11ty/          # 11ty source (working directory)
│   ├── src/
│   │   ├── _data/                 # Global data files (work.js, tools.js, site.js)
│   │   ├── _includes/
│   │   │   ├── layouts/           # Base templates (base.njk, case-study.njk)
│   │   │   └── components/        # Reusable UI components
│   │   ├── work/                  # Case study pages (.njk files)
│   │   └── _next/                 # Pre-compiled Next.js CSS/JS assets
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
- `layouts/base.njk` → provides HTML structure, SEO meta tags, navigation
- `layouts/case-study.njk` → extends base.njk, adds case study-specific layout with password protection
- Individual pages use these layouts via frontmatter `layout: layouts/case-study.njk`

## Critical Configuration Details

### 11ty Configuration (.eleventy.js)
```javascript
// Disables HTML auto-escaping for inline SVGs and complex UI
eleventyConfig.setNunjucksEnvironmentOptions({
  autoescape: false,
});

// Copies Next.js assets for hybrid architecture
eleventyConfig.addPassthroughCopy("src/_next");
```

### Data Architecture
- **Work items** in `src/_data/work.js` use status field: `"published"` (shows case study link) vs `"coming-soon"` (shows placeholder)
- **Grid system** uses `gridClass` property for CSS Grid layout: `"col-span-2 row-span-1"`, `"col-span-1 row-span-2"`
- **Featured content** filtered via `workItem.featured` boolean

### Styling System
- **Tailwind CSS** via pre-compiled Next.js stylesheet: `/_next/static/css/b79f6ce842955dc5.css`
- **Custom design tokens**: `text-primary`, `text-secondary`, `text-accent`, `bg-surface`, `border-card`
- **Component styles**: Complex button classes with hover states, shadow utilities

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

### External Image CDN
- Work images hosted on **cosmicjs.com CDN**
- Hero images use query parameters: `?rect=0,-136,5120,3471` for cropping
- Responsive sizing handled via CDN width parameters: `&w=1920&q=100`

### Static Assets
- Drawings/icons in `src/drawings/` (SVG files for UI decoration)
- Favicon and assets copied via `addPassthroughCopy()`

## Content Patterns

### Case Study Structure
```njk
---
layout: layouts/case-study.njk
title: [Title]
description: [Meta description]
company: [Company name]
tags: [Array of tags]
heroImage: [CDN URL]
permalink: [URL path]
passwordProtected: [boolean]
---

## Overview
[Markdown content]
```

### Work Card Grid System
Cards use dynamic grid classes and responsive image containers:
```javascript
gridClass: "col-span-2 row-span-1",  // CSS Grid positioning
imageContainer: "bg-retro-100 ml-6 w-full rounded-tl-2xl px-6 pt-6"  // Custom styling
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

The pre-compiled Next.js assets must remain in the `src/_next/` directory and be copied to both `_site/_next/` and root `_next/` for deployment.
