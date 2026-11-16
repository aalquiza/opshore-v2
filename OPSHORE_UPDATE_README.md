# Opshore — Two-Service Homepage Update (Pre-Production Review)

**Purpose:** Introduce Software Development and Operations & Managed Execution as equally prominent services while preserving Opshore's existing branding, React/Vite architecture, operational use cases, testimonials, enquiry integration, legal pages and cookie consent.

**Status:** Preview deployed and visually verified. Local production build and offline security tests passed. Contact form submission and customer acknowledgement tested successfully on Vercel Preview. Business mailbox receipt remains unverified. Awaiting final review and production approval.

**Target Git branch:** `opshore-homepage-update` (NOT `main`).

## Changes implemented
- Rebuilt `src/components/HomePage.tsx` as a responsive two-service homepage, presenting Software Development and Operations & Managed Execution.
- Updated desktop and mobile navigation, including the hamburger menu and accessibility improvements.
- Updated contact form wording and enquiry categories while retaining the `/api/contact` endpoint.
- Preserved the operational capabilities, use cases, and client testimonials.
- Updated the Reviews page, page title, descriptions, and responsive styling.
- Strengthened `api/contact.ts` with input validation, request-size limits, HTML escaping, and safer email handling.
- Added security headers through `vercel.json` and verified them on Vercel Preview.
- Configured a Vercel Firewall rate limit for POST requests to `/api/contact`: 5 requests per 600 seconds per IP address.
- Updated project dependencies and removed the unused `@vercel/node` package.
- Added automated security and contact API tests.
- Updated `.gitignore` to exclude generated TypeScript build-cache files.
- Preserved the existing legal pages and cookie consent functionality.


## Production readiness and outstanding checks

### Completed verification

- [x] Homepage redesign reviewed on desktop and mobile.
- [x] Navigation links, buttons, and mobile hamburger menu tested.
- [x] Software Development and Operations sections verified.
- [x] Both client testimonials displayed correctly.
- [x] Contact page and updated enquiry categories verified.
- [x] Privacy Policy and Terms of Service pages open correctly.
- [x] Local TypeScript and Vite production build passed.
- [x] 12 automated source/configuration security checks passed.
- [x] 15 offline contact API security and behavior checks passed.
- [x] Production dependency audit reported zero vulnerabilities.
- [x] Security headers verified on Vercel Preview.
- [x] Contact form submitted successfully on Vercel Preview.
- [x] Automatic acknowledgement email received.
- [x] Vercel logs confirmed a successful POST /api/contact (HTTP 200).
- [x] Vercel Firewall contact form rate-limit rule created and enabled.
- [x] GitHub repository and Vercel integration verified.
- [x] Vercel production branch confirmed as main.

### Outstanding verification and approval

- [ ] Confirm Opshore's advertised software development and operations services are accurate and approved.
- [ ] Obtain company approval for the website's updated content and design.
- [ ] Obtain company review of Terms of Service and Privacy Policy for the expanded services.
- [ ] Confirm the business mailbox received the contact form notification.
- [x] Vercel Firewall rate-limit enforcement verified on Preview: requests 1–5 returned HTTP 400 for invalid data; request 6 returned HTTP 429.
- [ ] Complete final Pull Request review and confirm all required checks pass.
- [ ] Obtain explicit authorization before merging into main.

### Production deployment policy

The opshore-homepage-update branch is for pre-production changes.

Do not merge into main or promote the Preview deployment to production until outstanding checks and approvals are addressed.

Preserve existing production configuration, environment variables, and working functionality.


## Development and verification workflow

The Opshore redesign has been integrated into the existing `opshore-v2` React/Vite project.

The original ZIP installation instructions are no longer applicable.

### Local development

1. Work on the `opshore-homepage-update` branch.
2. Preserve existing project files, backups, and Git history.
3. Run `npm install` when dependencies need to be installed.
4. Run `npm run dev` for local development.
5. Run `npm run build` to verify the production build.
6. Run the automated tests:

   ```bash
   node tests/security-static.mjs
   node tests/contact-smoke.cjs
   ```

7. Run `npm audit --omit=dev` to check production dependencies.
8. Review changes before committing and pushing.

### Deployment workflow

- GitHub repository: `aalquiza/opshore-v2`
- Development branch: `opshore-homepage-update`
- Production branch: `main`
- Hosting platform: Vercel
- Deployment status: Preview verified; production merge pending approval.

Changes pushed to the development branch are reviewed through the existing GitHub Pull Request.

Do not merge into `main` without explicit production approval.

## Test results and limitations

### Verified results

- TypeScript and Vite production build: PASS.
- Static security tests: 12 PASS.
- Offline contact handler tests: 15 PASS.
- Production dependency audit: 0 vulnerabilities.
- Desktop and mobile visual verification: 8/8 PASS.
- Navigation and mobile menu behavior: PASS.
- Security response headers: VERIFIED.
- Vercel Preview contact API: HTTP 200.
- Automatic enquiry acknowledgement email: RECEIVED.
- Vercel Preview deployment: SUCCESS.
- Contact form firewall rate-limit rule: ENABLED and TESTED (HTTP 429 confirmed).

### Known limitations

- Actual receipt of the business notification email has not been independently confirmed.
- A low-severity development dependency advisory remained in the last full npm audit.
- Offline email failure messages are expected when testing simulated delivery failures.
- Successful automated tests do not guarantee the absence of security vulnerabilities.
- Service descriptions, legal content, and production deployment still require company review and approval.

## Production release status

**Current status:** Pre-production review.

The updated website has passed the completed Preview checks, but production release is not yet authorized.

Keep the development branch separate from `main` until all required approvals are obtained.