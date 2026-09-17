# Tracking Plan

## Objective
Measure the complete Meta ad funnel from landing-page visit to qualified AI Audit opportunity.

## Recommended Events
1. `PageView` – landing page loads
2. `ViewContent` – meaningful landing-page view
3. `StartApplication` – visitor starts qualification form
4. `Lead` – qualification/contact form successfully submitted
5. `Schedule` or existing appointment event – calendar booking completed
6. `QualifiedLead` – business is determined to qualify for the audit

## Rules
- Inspect existing Meta Pixel, GA4, GTM, and GoHighLevel tracking before adding anything.
- Do not install duplicate Meta Pixels or duplicate GA4/GTM containers.
- Prefer native GHL workflow/event hooks where they already exist.
- Do not fire `Lead` merely because a visitor clicks a CTA.
- Fire `Lead` after successful contact/qualification capture.
- Fire booking event only after appointment confirmation.
- QualifiedLead should represent an actual qualification state, not every form submission.

## Meta Optimization
Initial campaigns may need enough conversion volume before optimizing deeper in the funnel. The long-term objective should be qualified leads/booked audits rather than landing-page clicks.

## Optional Analytics
Microsoft Clarity can be useful for mobile heatmaps/session behavior if the business chooses to install it. Check existing scripts before adding it.
