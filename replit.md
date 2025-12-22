# ndVOR - Technology Solutions Website

## Overview

ndVOR is a modern, responsive corporate website for a technology solutions and IT services company founded in 2009. The site serves as a marketing and information portal showcasing the company's services, solutions, career opportunities, and contact information. Built as a lightweight static website with a custom Node.js server for local development.

## Recent Changes

- **December 2024**: Complete website redesign with modern UI, responsive layouts, and orange/green brand colors

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Static HTML/CSS/JavaScript Site**
- Single-page design with smooth scrolling between sections
- No frontend framework - uses vanilla HTML, CSS, and JavaScript
- Fully responsive design with mobile-first approach
- CSS custom properties (variables) for theming with orange (#FF6B00) and green (#00A550) brand colors
- Inter font family loaded from Google Fonts
- Modern card-based layouts with hover animations
- Fixed header with scroll-aware styling changes

**Key Sections:**
- Home: Hero section with gradient background, stats, and CTAs
- About: Company mission, vision, and key features
- Services: 6 service cards (App Development, Cloud, Data Analytics, Cybersecurity, IT Consulting, DevOps)
- Solutions: Industry-specific solutions (Enterprise, Banking, Healthcare, Digital Transformation)
- Careers: Job listings and company perks
- Contact: Contact form with company information

### Backend Architecture

**Simple Static File Server**
- Custom Node.js HTTP server (no Express or other frameworks)
- Serves static files (HTML, CSS, JS, images, fonts)
- Falls back to index.html for unmatched routes
- Runs on port 5000, bound to 0.0.0.0 for external access
- Cache-Control headers set to prevent caching issues

### File Structure

```
/
├── index.html      # Main HTML page with all sections
├── style.css       # All styles with CSS variables and responsive breakpoints
├── script.js       # Navigation, scroll interactions, and animations
├── server.js       # Node.js static file server
└── replit.md       # Project documentation
```

## External Dependencies

### Runtime Dependencies
- **Node.js 20** - Required for running the static file server

### External Services
- **Google Fonts** - Inter font family loaded via CDN (fonts.googleapis.com, fonts.gstatic.com)

### No Database
- This is a purely static site with no database requirements
- No user authentication or data persistence needed
- Contact form simulates submission (can be connected to real backend)