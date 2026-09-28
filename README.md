# ReachCo Website — Version 3

This version keeps the requested parts and removes only what you asked to remove.

## Kept
- Header with ReachCo branding and a unique tagline.
- Business and creator hero cards.
- **I need a creator →** button.
- **I need opportunities →** button.
- The full "No more endless searching..." section.
- The three information cards.
- The final "Ready to find your match?" section.
- Both final CTA buttons.
- Instagram footer: @reachco.in.
- New ReachCo logo and Instagram profile SVG.

## Removed
- Header links: How it works / Businesses / Influencers & Creators.
- Header Get started button.
- Extra action links from the three information cards.

## Google Forms
The buttons are ready for Google Forms. Open `script.js` and replace:

BUSINESS_FORM_URL = "PASTE_BUSINESS_GOOGLE_FORM_URL_HERE";
CREATOR_FORM_URL = "PASTE_CREATOR_GOOGLE_FORM_URL_HERE";

with your real Google Form URLs.

The same links are used by:
- I need a creator
- I need opportunities
- I need a creator (final section)
- I need business opportunities (final section)

## Logo
The new mark uses a simple connected form that works as a favicon/profile icon and can scale cleanly. Startup logo guidance generally recommends simple, memorable, scalable marks that also work at small sizes and in monochrome. This version is intentionally simple rather than using a detailed illustration.

## Run
Open `index.html` in Chrome.

Or:

python -m http.server 8000

Then open http://localhost:8000

## GitHub Pages
Upload the whole folder to your GitHub repository, then:
Settings → Pages → Deploy from branch → main → /(root) → Save.

## Domain
After GitHub Pages is working, add your custom domain in Settings → Pages and configure the DNS records GitHub gives you at your domain provider.
