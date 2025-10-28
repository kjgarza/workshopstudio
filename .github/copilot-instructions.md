# Copilot Instructions for Workshop Studio

## Project Architecture

This is a **static portfolio/workshop site** built with **11ty (Eleventy)** and deployed to **GitHub Pages** with custom domain `https://theworkshop-studio.xyz`. The site uses Nunjucks templating with custom data files for content management.

## Directory Structure

```
├── src/
│   ├── _data/                    # Global data files (site.js, portfolio.js, author.js)
│   ├── _includes/
│   │   ├── layouts/              # Base templates (base.njk, home.njk, project.njk, presentation.njk)
│   │   ├── components/           # Reusable UI components (project-header.njk, etc.)
│   │   └── partials/             # Head, scripts, project-scripts
│   ├── assets/                   # Static assets (css, js, img, fonts)
│   ├── CNAME                     # Custom domain configuration for GitHub Pages
│   ├── *.njk                     # Page templates (index.njk, berlin-workshop.njk, etc.)
├── _site/                        # Build output (generated, not committed)
└── .eleventy.js                  # 11ty configuration
```

## Critical Deployment Configuration

**Custom Domain Setup**: This site uses a custom domain `theworkshop-studio.xyz` with GitHub Pages. Asset paths use root-relative URLs (no path prefix needed).

### Path Configuration

- **All environments**: Paths are root-relative (`/css/master.css`, `/img/logo.png`)
- **No path prefix needed**: Custom domains don't require subpath prefixes like `/workshopstudio`

**How it's handled:**
1. `.eleventy.js` sets `pathPrefix: '/'` for all environments
2. `src/_data/site.js` exports empty `pathPrefix` for templates
3. Templates use direct root paths: `/css/master.css` or with empty prefix `{{ site.pathPrefix }}/css/master.css`
4. `src/CNAME` file contains the custom domain and is copied to `_site/CNAME`
5. GitHub workflow sets `ELEVENTY_ENV=production` before build to set correct baseURL

### Asset Path Resolution in Templates

**Use root-relative paths for all assets:**

```njk
<!-- Correct - both patterns work -->
<link rel="stylesheet" href="/css/master.css">
<link rel="stylesheet" href="{{ site.pathPrefix }}/css/master.css">
<img src="/img/logo.png">
<a href="/berlin-workshop/">Workshop</a>
```

### Custom Domain Maintenance

The `src/CNAME` file is critical for custom domain support:
- Contains: `theworkshop-studio.xyz`
- Automatically copied to `_site/CNAME` during build
- Tells GitHub Pages to serve site at custom domain
- **Do not delete this file** or GitHub Pages will revert to default URL

## Development Workflow

```bash
npm run dev              # Serve with hot reload on localhost:8080
npm run build            # Build to _site/
npm run build-ghpages    # Build for GitHub Pages (same as build, kept for compatibility)
```

## Content Management Pattern

### Adding New Pages

1. Create `.njk` file in `src/` (e.g., `src/new-workshop.njk`)
2. Add frontmatter with layout: `layout: layouts/presentation.njk`
3. Add to navigation in `src/_data/site.js`
4. Use components from `src/_includes/components/`

### Data Architecture

- **site.js**: Global site config (title, baseURL, navigation) - baseURL uses `theworkshop-studio.xyz` in production
- **portfolio.js**: Project categorization and listings
- **author.js**: Bio, job timeline, contact info
- **gomoreRatings.js**: Content sections for project pages

### Template Hierarchy

```
base.njk              → HTML structure, <head>, <body>, scripts
  ├── home.njk        → Homepage with projects + about sections
  ├── project.njk     → Project case study layout
  └── presentation.njk → Reveal.js presentation layout
```

## Key Conventions

### Nunjucks Auto-Escape is DISABLED

`.eleventy.js` sets `autoescape: false` to allow inline SVGs and complex HTML in data files. Be cautious with user input (though this is a static site).

### Asset Copying Pattern

Assets are copied from `src/assets/` to flat structure in `_site/`:
- `src/assets/css/` → `_site/css/`
- `src/assets/img/` → `_site/img/`
- `src/assets/fonts/` → `_site/fonts/`
- `src/CNAME` → `_site/CNAME` (custom domain configuration)

Both `src/assets/images/` and `src/assets/img/` map to `_site/img/` (legacy support).

### Reveal.js Presentations

Two presentation pages use Reveal.js CDN:
- `berlin-workshop.njk` → "Berlin or Beyond?" workshop
- `end-of-year-workshop.njk` → "Design Your Berlin Life" workshop

Layout: `layouts/presentation.njk` loads Reveal.js from CDN and initializes with markdown plugin.

## Common Pitfalls

1. **Deleting CNAME file** - Will break custom domain deployment on GitHub Pages
2. **Using wrong data file** - `gomoreRatings.js` vs `gomore-ratings.js` (both exist, use `gomoreRatings`)
3. **Not watching assets** - Changes to CSS/JS require server restart unless in `src/assets/`
4. **Wrong environment variable** - Use `ELEVENTY_ENV=production`, not `NODE_ENV`

## Testing Deployment Locally

```bash
ELEVENTY_ENV=production npm run build
cd _site
python3 -m http.server 8000
# Visit http://localhost:8000/
```

This simulates the production environment with the correct baseURL configuration.

## DNS Configuration

The custom domain requires proper DNS setup:
- **A records** pointing to GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153), OR
- **CNAME record** pointing to `kjgarza.github.io`
- Verify in repository Settings → Pages that custom domain is configured
