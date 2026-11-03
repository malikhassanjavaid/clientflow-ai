# ClientFlow AI — Phase 1 design QA

## Result

passed

No P0, P1, or P2 issues remain after the browser QA iterations below.

## Visual truth and implementation evidence

- Source visual truth: `C:\Users\lenovo\.codex\generated_images\01a17c94-fbca-7b20-8dbf-fe998f05eef9\exec-65550f2a-8fbc-40fe-8ede-4470a0381eda.png`
- Reused product asset: `public/images/clientflow-discovery-questions.png` (1487 × 1058 source pixels)
- Implementation: `http://127.0.0.1:3000`, inspected in the ChatGPT in-app browser at desktop, 768 px, 390 px, and 320 px viewport widths.
- State inspected: public landing page, default state; product-preview anchor; keyboard-focused skip link; keyboard-focused mobile preview.
- The approved reference is a product-screen direction rather than a landing-page mock. The product region therefore reuses the approved image exactly, while the surrounding marketing page is checked against the approved product specification, tokens, content hierarchy, and responsive layout.

## Full-view comparison

- Typography: Newsreader supplies the editorial display voice and Geist supplies compact interface/body copy. The exact Newsreader Latin variable font is self-hosted so the intended hierarchy renders reliably in development and production.
- Layout and hierarchy: the page progresses from promise, to vague-request transformation, to product evidence, to six-step workflow, to human-control reassurance and final CTA. Desktop uses spacious asymmetric editorial composition; small screens collapse cleanly without page-level horizontal overflow.
- Color and surface: ink, paper, warm accent, lilac, and blue-gray tokens stay consistent with the approved calm, professional direction. Borders and shadows are reserved for the product evidence rather than applied as a generic card grid.
- Copy integrity: the salon request, missing-detail examples, six-stage workflow, editable-AI message, and no-client-account claim remain intact.
- Asset fidelity: the selected product image is used pixel-for-pixel through `next/image`, with its original aspect ratio preserved.

## Focused responsive and interaction checks

| Surface | Evidence | Result |
| --- | --- | --- |
| Desktop | Full-page browser capture; 1265 px content viewport; product image rendered at approximately 1167 × 830 px | passed |
| Tablet | 753 px content viewport; no horizontal document overflow; product preview approximately 687 px wide | passed |
| Mobile 390 | 375 px content viewport; no horizontal document overflow | passed |
| Mobile 320 | 320 px content viewport; 279 px scroll region containing a readable 768 px product image; `tabindex="0"`; no horizontal document overflow | passed |
| Navigation | Every header/CTA hash has a matching target; Product preview settles 96 px below the sticky header | passed |
| Keyboard | Skip link is visibly positioned at the top-left with a 2.67 px outline; focus order reaches header links, hero CTAs, then the scrollable product preview | passed |
| Reduced motion | `prefers-reduced-motion: reduce` disables smooth scrolling and compresses transitions/animations to 0.01 ms | passed |
| Console | No new error or warning after the final reload; the earlier LCP warning was resolved with eager loading | passed |

## Iteration history

1. **P1 — development font request blocked rendering.** `next/font/google` could not fetch Newsreader during local development. Replaced it with the exact Latin variable font already emitted by a verified Next.js build and added an asset test.
2. **P2 — product preview became illegible at narrow widths.** Added a contained horizontal scroll region, a 48rem mobile minimum image width, keyboard focus, and a concise swipe/arrow-key instruction. Rechecked at 320 px with no page overflow.
3. **P2 — Next.js reported the product image as LCP without eager loading.** Added `loading="eager"` and responsive `sizes`; a post-fix reload produced no new warning.

## Deferred considerations

- If ClientFlow later supports non-Latin marketing copy, add the relevant Newsreader subsets rather than relying on the Latin-only Phase 1 asset.
- The wordmark remains typography-only until a real brand mark is designed; this deliberately avoids shipping decorative CSS geometry as a logo.
