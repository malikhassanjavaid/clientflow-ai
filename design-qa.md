# ClientFlow compact hero design QA

- Source visual truth: `C:/Users/lenovo/AppData/Local/Temp/codex-clipboard-499c4cc5-98e5-47d4-9dfe-a823e86c2b69.png`
- Implementation screenshot: unavailable; the Codex in-app browser opened the local page but did not expose a capture back to this task.
- Source pixels: 1884 × 876.
- Implementation viewport and density: pending a refreshed screenshot from the same browser/window state.
- State: desktop homepage, light theme, initial hero state.

## Full-view comparison evidence

The source screenshot shows the navbar, hero copy, CTAs, trust line, and photograph, but only the top edge of the workflow panel. The previous `40rem` desktop minimum hero height was larger than the available CSS viewport after display scaling, forcing the panel below the fold.

The implementation now uses the available safe viewport height below a 56-pixel navbar, reduces the desktop minimum from 40rem to 30rem, and activates a compact composition for desktop viewports 720 CSS pixels tall or shorter. The responsive rules are present in the production stylesheet, but a post-fix browser capture is still required for visual confirmation.

## Focused region comparison evidence

A post-fix focused comparison of the lower hero and workflow panel is blocked because the in-app browser did not provide an implementation screenshot. The source clearly establishes the affected region: the workflow panel begins below the visible fold.

## Required fidelity surfaces

- Fonts and typography: the existing Newsreader and Geist families are preserved. Short desktop screens use a 48–64px fluid hero title while retaining the three-line hierarchy.
- Spacing and layout rhythm: navbar height is 56px; short-screen hero spacing, CTA height, trust-line spacing, and workflow padding are reduced together rather than independently.
- Colors and visual tokens: the approved ivory, navy, burgundy, and paper tokens are unchanged.
- Image quality and asset fidelity: the existing high-resolution celebratory freelancer image, crop, and Next.js optimization remain unchanged.
- Copy and content: all approved ClientFlow copy, navigation labels, CTAs, and workflow stages remain unchanged.

## Findings

- [P1] Post-fix visual evidence unavailable
  - Location: desktop hero lower edge and workflow panel.
  - Evidence: the source shows the panel clipped; code and production CSS contain the responsive fix, but no revised browser screenshot is available for a visible comparison.
  - Impact: the implementation cannot be truthfully declared visually verified at the user's exact display scaling.
  - Fix: refresh `http://localhost:3000` at the same window size and capture one screenshot showing the full first viewport.

## Comparison history

1. Source capture: the 40rem hero minimum forced the workflow panel below the fold on the user's scaled desktop viewport.
2. Implementation pass: reduced the navbar to 56px, changed the hero to `calc(100svh - 3.5rem)` with a 30rem minimum, moved the copy upward, tightened vertical copy/CTA spacing, reduced the workflow panel to a 96px minimum on short screens, and added a `max-height: 720px` compact layout.
3. Production verification: ESLint, TypeScript, and the Next.js production build pass; generated CSS contains the viewport-height media query and compact dimensions.
4. Visual verification: blocked until a refreshed implementation screenshot is available.

## Implementation checklist

- [x] Remove the oversized 40rem desktop minimum.
- [x] Keep the hero tied to safe viewport height.
- [x] Compact the navbar, headline rhythm, CTAs, trust line, and workflow panel together.
- [x] Preserve copy, colors, imagery, links, and accessibility semantics.
- [x] Pass ESLint, TypeScript, and production build.
- [ ] Compare a refreshed implementation screenshot against the source at the same window size.

final result: blocked
