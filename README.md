## Rukmale Hotel — Luxury Resort SPA

A single-page application for a luxury resort built with React, TypeScript, and Vite. The site uses hash-based navigation to work seamlessly on static hosting while preserving deep links and refresh behavior. Styling is powered by Tailwind CSS, and UI primitives come from Radix UI with a set of reusable components.

---

## Features
- Fast, static SPA powered by Vite
- Hash-based navigation with deep links and state restore on refresh
- Responsive, accessible UI using Tailwind CSS and Radix UI primitives
- Reusable component library in `src/components/ui`
- Image/video assets served from `public/`
- Forms via `react-hook-form` and EmailJS integration
- Interactive elements: carousel, charts, calendar, accordions, dialogs, etc.

## Tech Stack
- React 19 + React DOM
- TypeScript 5
- Vite 7
- Tailwind CSS 3 (+ `tailwindcss-animate`)
- Radix UI primitives (`@radix-ui/react-*`)
- Utility libraries: `clsx`, `class-variance-authority`, `tailwind-merge`
- Interactions and data viz: `framer-motion`, `embla-carousel-react`, `recharts`, `react-day-picker`, `date-fns`
- Forms and UX: `react-hook-form`, `lucide-react`, `sonner`
- Optional integrations: `@emailjs/browser`, `next-themes`

## Project Structure
Top-level folders and notable paths:

```
.
├── index.html
├── public/
│   ├── images/           # Static images
│   └── videos/           # Static videos
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (Radix + Tailwind)
│   │   ├── shared/       # Site-wide shared blocks (nav, footer, etc.)
│   │   ├── figma/        # Figma-driven pieces
│   │   ├── AboutUsPage.tsx
│   │   ├── AccommodationPage.tsx
│   │   ├── BookingPage.tsx
│   │   └── GalleryPage.tsx
│   ├── imports/          # Assembled pages/sections
│   ├── assets/           # Local assets, styles
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
├── eslint.config.js
└── package.json
```

## Getting Started

Prerequisites
- Node.js 18+ (recommended) and npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Typecheck, build, and preview production output:

```bash
npm run build
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

## Navigation and Refresh Behavior (Hash-based)

This app preserves the current page on refresh by syncing navigation to the URL hash.

- Examples: `/#home`, `/#gallery?section=bedroom01`, `/#booking?section=bedroom02`
- On reload or back/forward, the app reads the hash and restores the same page/section

Want clean URLs without hashes? Configure your hosting to serve `index.html` for all routes (SPA fallback) and migrate to a router (e.g., `react-router-dom`).

High-level steps to switch:
1) Add a client router and map routes to pages
2) Remove hash-based navigation logic
3) Ensure your host falls back to `index.html` for unknown routes

## Styling
- Tailwind CSS lives in `src/styles/globals.css` and `src/assets/css/*`
- Component-level styles and variants rely on `clsx` and `class-variance-authority`

## Assets
- Add images/videos to `public/images` and `public/videos` so they’re served statically
- Reference them with absolute paths like `/images/your-file.jpg`

## Scripts (from package.json)
- `npm run dev` — Start Vite dev server
- `npm run build` — Typecheck and create a production build
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

## Deployment
This is a static site—any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

Basic flow:
1) Build locally or in CI: `npm run build`
2) Deploy the generated `dist/` folder

Notes:
- For hash-based URLs no special server config is needed
- If you migrate to clean URLs via a router, enable SPA fallback to `index.html`

## Contributing & Maintenance
- Keep components in `src/components/ui` small and reusable
- Prefer composition over complex props
- Run `npm run lint` before commits

Helper scripts in the repo (optional):
- `fix-imports.js` — normalize/adjust imports
- `fix-fonts.js` — update font paths if needed

## License
This is a private project. No license specified.

