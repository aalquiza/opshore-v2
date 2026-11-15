# Opshore — Two-Service Homepage Update (Development Draft)

**Purpose:** Introduce Software Development and Operations & Managed Execution as equally prominent services while preserving Opshore's existing branding, React/Vite architecture, operational use cases, testimonials, enquiry integration, legal pages and cookie consent.

**Status:** Local development draft; NOT deployed, NOT merged, NOT approved for production.
**Target Git branch:** `opshore-homepage-update` (NOT `main`).

## Changes in this draft
- Rebuilt `src/components/HomePage.tsx` as a responsive two-service homepage with an integrated hero, two equal service cards, detailed service sections, operations pillars, engagement models, benefits, process, testimonials, and CTA.
- Updated navbar to link directly to Software Development and Operations sections, plus existing Use Cases, Clients, and Contact pages.
- Updated contact wording and added Software Development enquiry options, preserving the existing POST to `/api/contact`.
- Kept existing four operational pillars and six operations use cases; moved the original agency comparison table to the Use Cases page so the homepage has balanced service visibility.
- Included your corrected testimonials grid layout with `gridColumn: "1 / -1"` on the coming-soon tile.
- Updated the HTML page title and description.
- Left Terms, Privacy, Legal, cookie consent, server/API, and Vercel config untouched.

## Very important checks before production
1. **Service claims:** Confirm that custom software, SaaS, web/mobile apps, AI/automation, API integrations and ongoing support are services Opshore offers. Edit the copy if needed.
2. **Enquiry API:** This ZIP does NOT include the Vercel `/api/contact` backend. The existing React handler is unchanged, but confirm the API accepts the new `useCase` option strings before production, and complete a safe end-to-end form test on a preview environment with server access.
3. **Legal:** Ask the company to review the existing Terms and Privacy copy against its new software development offerings.
4. **Deployment:** Confirm Vercel's production branch remains `main` and that the `opshore-v2` repository is actually the project connected to the production deployment.
5. **Testing:** Run `npm run build` on your Mac; manually inspect desktop and mobile, all navigation links, both testimonials, legal/footer links, cookie consent, and the contact page. Do not assume this draft has passed full tests.

## Safest installation method (on your Mac)
1. Confirm you're on GitHub Desktop branch `opshore-homepage-update`.
2. **Commit or otherwise safely preserve any uncommitted local changes** before applying this package. In particular, preserve your previous ReviewsPage fix (also included in the package).
3. Download `Opshore_Merged_React_Update_PATCH.zip` from ChatGPT into `~/Downloads` and expand it; it contains the files and matching `src/...` folder structure.
4. Open VS Code in your `opshore-v2` repository. Compare the patch files with the existing files first, then copy the updated `src` files and `index.html` into the matching paths in your repo. Do not replace `.env.local`, `.git`, or `node_modules`.
5. With macOS Terminal in your existing `opshore-v2` directory, run `npm run dev` and open the displayed local URL.
6. Run `npm run build`. If it fails, do NOT push; share the terminal error here.
7. Review GitHub Desktop Changes and confirm you're on the new branch. Commit and push only after local checks. Never merge into `main` before client approval.

If you prefer to preview the entire source away from the repository, use the separate `Opshore_Merged_React_Source_DRAFT.zip` archive. That archive intentionally excludes API implementation, local secrets, Git history, and `node_modules`. It needs `npm install` before running on its own.

## Test scope and limitations
- TypeScript/TSX syntax was checked for the local source: **PASS**.
- A full Vite TypeScript build in the assistant's execution environment could NOT be completed because npm dependencies were unavailable and installation timed out. **Run `npm run build` on your Mac.**
- The form UI still uses the original `/api/contact` endpoint; backend behavior is not tested and may differ in Vite local dev vs Vercel.
