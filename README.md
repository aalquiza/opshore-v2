# Opshore.co — v2 (React + TypeScript)

This is a TypeScript/React port of the original static `opshore-redesign.html`
single-page site. It preserves the same visual design, copy, and page
behavior (client-side "page" switching between Home, Use Cases, What Clients
Say, and Contact) but implements it as a typed, componentized React app
instead of vanilla JS + inline styles.

## What changed vs. the HTML version

- **Framework**: Plain HTML/CSS/JS → Vite + React 18 + TypeScript.
- **Routing**: The `goTo(page)` global function and `.page.active` class
  toggling is now `App.tsx` state (`useState<PageId>`), passed down via
  props instead of `document.querySelectorAll` / `classList` calls.
- **Content**: All copy (pillars, comparison table rows, use cases, reviews,
  nav items, use-case select options) is extracted into typed data in
  `src/data/content.ts` and `src/types.ts`, instead of being hardcoded in
  markup.
- **Form**: The contact form is a controlled React form
  (`src/components/ContactPage.tsx`) with typed state
  (`ContactFormState`) instead of raw DOM reads on submit.
- **Styling**: The original inline `<style>` block was moved as-is into
  `src/styles/global.css`, keeping all CSS custom properties (`--steel`,
  `--ink`, etc.) and the responsive breakpoints untouched.
- **Assets**: The base64-embedded logo was extracted into
  `src/assets/logo.png` and is imported as a module asset.

## Project structure

```
src/
  main.tsx                 Entry point, mounts <App />
  App.tsx                  Page state + layout (Header, pages, Footer)
  types.ts                 Shared TypeScript types
  data/content.ts           Nav items, pillars, comparison rows, use cases, reviews
  components/
    Header.tsx              Sticky nav + logo
    Hero.tsx                 Hero copy + animated SVG diagram
    Pillars.tsx              "What we do" 4-up grid
    ComparisonTable.tsx      Recruitment vs VA agencies vs Opshore table
    CTABanner.tsx            Reusable dark CTA banner
    HomePage.tsx             Composes Hero + Pillars + ComparisonTable + CTA
    UseCasesPage.tsx         Use-case list + CTA
    ReviewsPage.tsx          Client testimonial grid
    ContactPage.tsx          Controlled contact form
    Footer.tsx               Legal footer
  styles/global.css         Ported global stylesheet (design tokens, layout, responsive rules)
```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
```

## Notes

- Google Fonts (`Poppins`) are loaded the same way as before, via a `<link>`
  tag in `index.html`.
- `prefers-reduced-motion` and the sticky/blurred header behavior are
  preserved from the original.
- The "Submit" button in Contact shows the same inline confirmation message
  as before, now driven by React state instead of toggling `display: none`.
