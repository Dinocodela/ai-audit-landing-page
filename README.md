# DinoCodeLA AI Audit Landing Page

This repository is the source of truth for rebuilding the DinoCodeLA Free AI Business Audit landing page inside GoHighLevel.

## Goal
Build a polished, high-conversion, mobile-responsive landing page that matches DinoCodeLA's current brand and uses GoHighLevel natively for forms, calendars, CRM, workflows, and tracking.

## Important
- Do not redesign the page unless explicitly requested.
- Use the real DinoCodeLA logo assets supplied by Walter.
- Preserve existing GoHighLevel forms, calendars, workflows, CRM, tracking, and automations.
- Build the replacement as a draft/duplicate first.
- Do not replace the published page until Walter approves it.

## Start Here
Read these files in order:
1. `IMPLEMENT-IN-GOHIGHLEVEL.md`
2. `docs/design-spec.md`
3. `src/ai-audit.html`
4. `src/ai-audit.css`
5. `src/ai-audit.js`
6. `QA-CHECKLIST.md`

## Production URL
Existing page: https://aiaudit.dinocodela.com/

## Main Brand Site
https://dinocodela.com/

## Implementation Strategy
Use GoHighLevel native elements where integration matters and custom HTML/CSS/JS where presentation matters.

Native GoHighLevel:
- Forms
- Calendar
- CRM
- Workflows
- Tracking

Custom code:
- Hero
- Trust strip
- Pain points
- Report preview
- Before/After
- On-site section
- How It Works
- Why Free
- Founder
- Industries
- FAQ styling
- CTA sections

All custom classes are prefixed with `dino-` to avoid style conflicts with GoHighLevel.
