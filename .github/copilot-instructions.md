# AI Coding Guidelines for reback.dev

## Project Overview
**reback.dev** is a personal portfolio/game site hosted on GitHub Pages (see `CNAME` for domain binding). The project has two main entry points:
- **Root pages**: `index.html`, `index1.html`, `index3.html` (alternate versions/experiments)
- **Game**: HTML5 export of a Godot game in `firstGame/` directory

The site is static and deployable directly from the repository.

## Architecture & Key Components

### Frontend Stack
- **Bootstrap 5.3.7** - Used via CDN (see links in HTML head sections)
- **Local Bootstrap files** - `css/` and `js/` directories contain minified Bootstrap bundles (for offline use)
- **No build process** - HTML files are served directly; no compilation or bundling required

### Game Integration (Godot HTML5)
The `firstGame/` directory is a self-contained Godot engine export:
- **First Game.html** - Game launcher entry point
- **First Game.js** - Godot engine runtime loader
- **First Game.wasm** - WebAssembly runtime (~38MB)
- **First Game.pck** - Game data package (~1.7MB)
- **Audio worklets** - `First Game.audio.worklet.js` and `First Game.audio.position.worklet.js` handle Web Audio API processing

The game is **completely independent** - do not edit generated Godot files. To update: re-export from Godot project and replace files in `firstGame/`.

## Project-Specific Patterns

### Page Structure
- **Minimal body content** - Most pages have sparse HTML bodies with styling in `<head>` 
- **External CDN dependencies** - Bootstrap and icons loaded from jsDelivr CDN by default
- **Fallback local assets** - Favicon files (`favicon-*.png`) and apple-touch-icon available locally
- **Google verification** - Meta tag for Google Search Console present in main index.html

### File Organization Notes
- **Multiple index variants**: `index.html`, `index1.html`, `index3.html` suggest experimentation/iterations
  - Only edit **active** version; consider removing obsolete variants or documenting purpose
- **Images directory** - Empty in structure; likely for future use or unused assets
- **Video directory** - Empty; ready for multimedia content
- **Bootstrap versions**: Local files match the 5.3.7 CDN version exactly

## Development Workflow

### Deployment Strategy
1. **No build step** - Edit `.html` files directly
2. **Git push** - Changes auto-deploy via GitHub Pages (check repository settings)
3. **Clear browser cache** - CDN-linked Bootstrap may be cached; use dev tools to force refresh

### Testing Game Updates
- Replace all files in `firstGame/` from fresh Godot export
- Map filenames exactly: `First Game.[extension]` format (spaces in name intentional)
- Verify game loads on `firstGame/First Game.html` before committing

### Adding Pages
1. Use existing HTML as template (e.g., `index1.html`)
2. Ensure Bootstrap links match version: `5.3.7` current
3. Add links to new pages in navigation (none currently implemented)

## Critical Conventions & Gotchas

- **Do not modify Godot game files** - Regenerate from source instead
- **Favicon paths** - Reference `/favicon-*.png` (root path, with leading slash)
- **CDN integrity hashes** - Update if Bootstrap version changes; hashes prevent tampering
- **Audio worklets** - Required for game audio; both worklet files must be present
- **Case sensitivity** - Filenames use "First Game" (with space) - keep exact casing

## Key Files Reference
- Main entry: [index.html](../index.html)
- Game entry: [firstGame/First Game.html](../firstGame/First Game.html)
- Bootstrap CSS: [css/bootstrap.min.css](../css/bootstrap.min.css)
- Game launcher: [firstGame/First Game.js](../firstGame/First Game.js)
