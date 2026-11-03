# ClientFlow Phase 1 Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the create-next-app starter with a responsive, accessible, editorial marketing site that explains ClientFlow AI’s request-to-proposal workflow and establishes the product’s visual system.

**Architecture:** Keep the landing page statically rendered with synchronous Server Components. Store marketing copy and typed workflow data in one content module, compose focused marketing sections in `components/marketing`, and use Tailwind plus a small set of global design tokens for the visual system. Add Vitest and React Testing Library so each behavior is specified before its component is implemented.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, `next/font`, `next/image`, Vitest, React Testing Library, jsdom

**Spec:** `docs/superpowers/specs/2026-11-01-clientflow-ai-product-design.md`

## Global Constraints

- Primary user: freelancers who need to turn vague client requests into clear proposals.
- Visual direction: warm ivory surfaces, deep ink typography, restrained cobalt actions, soft peach AI-assistance accents, editorial serif headings, clean sans-serif UI copy.
- The page must feel like a collaborative document studio rather than a generic CRM dashboard.
- Do not use fake testimonials, fake customer counts, invented integrations, or pricing.
- Do not add authentication, database, AI calls, forms that collect data, or backend behavior in Phase 1.
- Do not add glassmorphism, gradient text, nested cards, repetitive icon-card grids, or excessive pills.
- Every interactive control must be keyboard reachable, every visible image needs useful alternative text, and motion must respect `prefers-reduced-motion`.
- Use the selected ClientFlow concept image as a real product-preview asset; do not recreate it with decorative divs.
- Because authentication arrives in Phase 2, Phase 1 CTAs must link to real sections on the current page rather than broken sign-up routes.
- Explain each task’s concept and expected browser result to the user before editing its production files.

## Review Focus

- **Small viewport:** At 320px wide, navigation, hero copy, buttons, and product preview must fit without horizontal scrolling. Task 6 verifies this in the browser.
- **Keyboard use:** Skip link, navigation links, CTA links, and footer links must have visible focus and a logical tab order. Tasks 3 and 6 verify this.
- **Reduced motion:** Decorative entrance and hover movement must stop when the operating system requests reduced motion. Task 6 owns the CSS check.
- **Content integrity:** The landing page must not imply that authentication, proposal generation, customer adoption, or integrations already exist. Tasks 2 and 5 pin the approved copy.
- **Broken navigation:** Every Phase 1 link must resolve to an existing page section or an intentional external resource. Tasks 3 and 5 test the in-page targets.

---

### Task 1: Install and prove the component-test foundation

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.mts`
- Create: `vitest.setup.ts`
- Create: `__tests__/smoke.test.tsx`

**Interfaces:**
- Consumes: Existing Next.js/React/TypeScript configuration.
- Produces: `npm test`, `npm run test:watch`, jsdom setup, and `@/*` alias support for all later component tests.

- [ ] **Step 1: Install the official Next.js Vitest guide dependencies**

Run:

```powershell
npm.cmd install --save-dev vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom vite-tsconfig-paths
```

Expected: packages are added only to `devDependencies`; application runtime dependencies remain unchanged.

- [ ] **Step 2: Add test scripts to `package.json`**

Add these exact scripts:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Create the Vitest configuration and setup**

`vitest.config.mts` must use `@vitejs/plugin-react`, `vite-tsconfig-paths`, `environment: "jsdom"`, `globals: true`, and `setupFiles: ["./vitest.setup.ts"]`.

`vitest.setup.ts` imports `@testing-library/jest-dom/vitest`.

- [ ] **Step 4: Write the failing smoke test**

Create `__tests__/smoke.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("marketing page", () => {
  it("introduces ClientFlow as a request-to-proposal product", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /turn unclear client requests into proposal-ready projects/i,
      }),
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 5: Run the smoke test and verify RED**

Run: `npm.cmd test -- __tests__/smoke.test.tsx`

Expected: FAIL because the starter page does not contain the ClientFlow heading.

- [ ] **Step 6: Commit the test foundation only**

```powershell
git add package.json package-lock.json vitest.config.mts vitest.setup.ts __tests__/smoke.test.tsx
git commit -m "test: add landing page component test setup"
```

The intentionally failing test remains RED until Task 3 supplies the page’s hero.

---

### Task 2: Establish content contracts, brand tokens, fonts, and metadata

**Files:**
- Create: `lib/marketing-content.ts`
- Create: `__tests__/marketing-content.test.ts`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Test: `__tests__/marketing-content.test.ts`

**Interfaces:**
- Consumes: Product language and visual constraints from the approved spec.
- Produces: `WorkflowStep`, `workflowSteps`, `navigationItems`, `productPromise`, CSS tokens, `--font-editorial`, `--font-sans`, and ClientFlow metadata.

- [ ] **Step 1: Write failing content-contract tests**

Tests must assert:

```ts
expect(productPromise).toBe(
  "Turn unclear client requests into proposal-ready projects.",
);
expect(workflowSteps).toHaveLength(6);
expect(workflowSteps.map((step) => step.id)).toEqual([
  "request",
  "questions",
  "answers",
  "requirements",
  "proposal",
  "decision",
]);
expect(navigationItems.every((item) => item.href.startsWith("#"))).toBe(true);
```

- [ ] **Step 2: Run the content test and verify RED**

Run: `npm.cmd test -- __tests__/marketing-content.test.ts`

Expected: FAIL because `lib/marketing-content.ts` does not exist.

- [ ] **Step 3: Implement typed marketing content**

Create these exact exported interfaces and constants:

```ts
export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface WorkflowStep {
  id: "request" | "questions" | "answers" | "requirements" | "proposal" | "decision";
  number: string;
  title: string;
  description: string;
}

export const productPromise: string;
export const navigationItems: readonly NavigationItem[];
export const workflowSteps: readonly WorkflowStep[];
```

Copy must describe the planned workflow truthfully and avoid claims about existing customers or production functionality.

- [ ] **Step 4: Replace starter metadata and configure fonts**

In `app/layout.tsx`:

- Keep Geist as the sans-serif UI font.
- Replace Geist Mono with `Newsreader` as the editorial display font.
- Expose both as CSS variables.
- Set the default title to `ClientFlow AI — From vague requests to clear proposals`.
- Set the description to `ClientFlow AI helps freelancers turn unclear client requests into reviewed discovery questions, requirements, and professional proposals.`

- [ ] **Step 5: Add the visual-system tokens and base rules**

In `app/globals.css`, define named tokens for ivory, paper, ink, muted ink, cobalt, cobalt-dark, peach, line, success, and focus. Add base typography, selection color, focus-visible treatment, smooth scrolling, and reduced-motion overrides. Do not build section-specific layouts here.

- [ ] **Step 6: Run tests, lint, and build**

Run:

```powershell
npm.cmd test -- __tests__/marketing-content.test.ts
npm.cmd run lint
npm.cmd run build
```

Expected: content tests PASS; lint and build exit 0. The Task 1 hero smoke test is still expected to fail until Task 3.

- [ ] **Step 7: Commit**

```powershell
git add lib/marketing-content.ts __tests__/marketing-content.test.ts app/layout.tsx app/globals.css
git commit -m "feat: establish ClientFlow marketing design system"
```

---

### Task 3: Build the accessible header and hero

**Files:**
- Create: `components/marketing/brand.tsx`
- Create: `components/marketing/site-header.tsx`
- Create: `components/marketing/hero-section.tsx`
- Modify: `app/page.tsx`
- Modify: `__tests__/smoke.test.tsx`
- Test: `__tests__/smoke.test.tsx`

**Interfaces:**
- Consumes: `navigationItems`, `productPromise`, global tokens and font variables.
- Produces: `Brand`, `SiteHeader`, `HeroSection`, page landmarks, `#main-content`, and a working `#how-it-works` CTA target.

- [ ] **Step 1: Extend the failing page test**

Add assertions for:

```tsx
expect(screen.getByRole("banner")).toBeInTheDocument();
expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
expect(screen.getByRole("link", { name: /see how it works/i })).toHaveAttribute(
  "href",
  "#how-it-works",
);
expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute(
  "href",
  "#main-content",
);
```

- [ ] **Step 2: Run the page test and verify RED**

Run: `npm.cmd test -- __tests__/smoke.test.tsx`

Expected: FAIL because the ClientFlow header, landmarks, hero, and anchors do not exist.

- [ ] **Step 3: Implement `Brand()` and `SiteHeader()`**

`Brand()` returns the ClientFlow wordmark with a small abstract flow mark built from text-safe/CSS geometry only for the logo mark, not a fake product image.

`SiteHeader()` renders:

- a skip link,
- the brand linked to `/`,
- primary navigation sourced from `navigationItems`,
- a `See how it works` action linked to `#how-it-works`.

Use semantic `<header>` and `<nav aria-label="Primary">`. Keep the header statically rendered with no mobile JavaScript; navigation wraps or simplifies at narrow widths.

- [ ] **Step 4: Implement `HeroSection()` and compose `Home()`**

`HeroSection()` renders one eyebrow, the exact product promise as the `<h1>`, concise supporting copy, the primary in-page CTA, a secondary link to `#product-preview`, and a small trust statement: `AI drafts. You decide what the client sees.`

`Home()` initially composes `SiteHeader`, `HeroSection`, a temporary empty `<section id="how-it-works" />`, and the main landmark. The temporary section exists only to keep the CTA valid until Task 5 fills it.

- [ ] **Step 5: Run the test and verify GREEN**

Run: `npm.cmd test -- __tests__/smoke.test.tsx`

Expected: PASS.

- [ ] **Step 6: Run the full suite and refactor without changing behavior**

Run: `npm.cmd test`

Expected: all tests PASS. Extract only duplicated class strings or markup that already exists; do not invent a generic button system yet.

- [ ] **Step 7: Commit**

```powershell
git add components/marketing/brand.tsx components/marketing/site-header.tsx components/marketing/hero-section.tsx app/page.tsx __tests__/smoke.test.tsx
git commit -m "feat: add ClientFlow marketing hero"
```

---

### Task 4: Add the real product preview and salon transformation story

**Files:**
- Create: `public/images/clientflow-discovery-questions.png`
- Create: `components/marketing/product-preview.tsx`
- Create: `components/marketing/request-transformation.tsx`
- Modify: `app/page.tsx`
- Modify: `__tests__/smoke.test.tsx`
- Test: `__tests__/smoke.test.tsx`

**Interfaces:**
- Consumes: selected Option 1 image at `C:\Users\lenovo\.codex\generated_images\01a17c94-fbca-7b20-8dbf-fe998f05eef9\exec-65550f2a-8fbc-40fe-8ede-4470a0381eda.png`.
- Produces: `ProductPreview`, `RequestTransformation`, and the `#product-preview` section.

- [ ] **Step 1: Add failing behavior assertions**

Assert that the page contains:

```tsx
expect(screen.getByText("I need a website for my salon.")).toBeInTheDocument();
expect(screen.getByRole("img", { name: /discovery question editor/i })).toBeInTheDocument();
expect(screen.getByRole("region", { name: /from vague request to clear scope/i })).toBeInTheDocument();
```

- [ ] **Step 2: Run the page test and verify RED**

Run: `npm.cmd test -- __tests__/smoke.test.tsx`

Expected: FAIL because the product-preview and transformation sections do not exist.

- [ ] **Step 3: Copy the selected visual asset into the project**

Copy the selected generated image to `public/images/clientflow-discovery-questions.png` without modifying or deleting the source image.

- [ ] **Step 4: Implement the two sections**

`ProductPreview()` uses `next/image` with explicit dimensions, responsive sizing, and descriptive alt text. It must be a real image, not a CSS recreation.

`RequestTransformation()` presents the salon request, four identified information gaps, and the resulting outcome using editorial layout, dividers, and progressive disclosure rather than a repeated card grid.

- [ ] **Step 5: Run the page test and verify GREEN**

Run: `npm.cmd test -- __tests__/smoke.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit**

```powershell
git add public/images/clientflow-discovery-questions.png components/marketing/product-preview.tsx components/marketing/request-transformation.tsx app/page.tsx __tests__/smoke.test.tsx
git commit -m "feat: show the ClientFlow request transformation"
```

---

### Task 5: Complete the workflow, human-control story, CTA, and footer

**Files:**
- Create: `components/marketing/workflow-section.tsx`
- Create: `components/marketing/human-control-section.tsx`
- Create: `components/marketing/final-cta.tsx`
- Create: `components/marketing/site-footer.tsx`
- Modify: `app/page.tsx`
- Modify: `__tests__/smoke.test.tsx`
- Test: `__tests__/smoke.test.tsx`

**Interfaces:**
- Consumes: `workflowSteps`, navigation IDs, product promise, existing marketing sections.
- Produces: `#how-it-works`, `#human-control`, `#why-clientflow`, complete page composition, and footer navigation.

- [ ] **Step 1: Add failing workflow and trust assertions**

Add tests that assert:

```tsx
expect(screen.getAllByRole("listitem", { name: /workflow step/i })).toHaveLength(6);
expect(screen.getByRole("heading", { name: /ai drafts, you approve/i })).toBeInTheDocument();
expect(screen.getByText(/nothing is shared before you review it/i)).toBeInTheDocument();
expect(screen.getByRole("contentinfo")).toBeInTheDocument();
```

If accessible list-item naming proves unnatural in real markup, use `within(workflowList).getAllByRole("listitem")` instead; keep the assertion behavior-focused.

- [ ] **Step 2: Run the page test and verify RED**

Run: `npm.cmd test -- __tests__/smoke.test.tsx`

Expected: FAIL because the workflow, trust section, closing CTA, and footer are missing.

- [ ] **Step 3: Implement the workflow section**

Render `workflowSteps` as one semantic ordered list. Use numbered editorial rows with restrained progress lines, not six identical cards. The section ID is `how-it-works` and the accessible heading describes the request-to-decision journey.

- [ ] **Step 4: Implement human control and value sections**

`HumanControlSection()` explains three boundaries: AI suggests, freelancer edits, freelancer approves. Do not claim AI accuracy or autonomous action.

Use `id="why-clientflow"` for the surrounding value section and `id="human-control"` for the AI boundary section so every navigation link has a real target.

- [ ] **Step 5: Implement the closing CTA and footer**

The Phase 1 primary CTA links back to `#product-preview` or `#how-it-works`; it must not link to an unimplemented sign-up page. The footer repeats only useful navigation and includes the honest product descriptor, not invented company/legal links.

- [ ] **Step 6: Run the full test suite and verify GREEN**

Run: `npm.cmd test`

Expected: all tests PASS.

- [ ] **Step 7: Commit**

```powershell
git add components/marketing/workflow-section.tsx components/marketing/human-control-section.tsx components/marketing/final-cta.tsx components/marketing/site-footer.tsx app/page.tsx __tests__/smoke.test.tsx
git commit -m "feat: complete the ClientFlow landing story"
```

---

### Task 6: Responsive, accessibility, and visual-quality verification

**Files:**
- Modify as findings require: `app/globals.css`
- Modify as findings require: `components/marketing/*.tsx`
- Modify as findings require: `app/page.tsx`
- Test: `__tests__/smoke.test.tsx`

**Interfaces:**
- Consumes: Completed static marketing page.
- Produces: verified 320px, 768px, and desktop layouts; visible focus states; reduced-motion behavior; final polished Phase 1 page.

- [ ] **Step 1: Run the complete automated baseline**

Run:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
git diff --check
```

Expected: all commands exit 0.

- [ ] **Step 2: Start the development server and inspect desktop**

Run `npm.cmd run dev -- --hostname 127.0.0.1 --port 3000`, open the page in the in-app browser, and inspect at a desktop viewport.

Verify:

- the hero has one dominant action,
- the selected editorial visual system is recognizable,
- the real product preview is legible,
- no section looks like a generic repeated-card template,
- all anchors land on the intended section.

- [ ] **Step 3: Inspect mobile and tablet widths**

Check 320px, 390px, 768px, and desktop widths. Verify no horizontal overflow, clipped text, overlapping controls, or unreadable product-preview treatment.

- [ ] **Step 4: Inspect keyboard and reduced-motion behavior**

Tab through the page from the address bar. Verify the skip link appears, focus is visible, order follows the document, and all controls work without a pointer. Emulate or enable reduced motion and verify nonessential animation stops.

- [ ] **Step 5: Write a failing regression test for every functional issue found**

For any broken anchor, missing label, semantic problem, or content behavior found during browser inspection, add the smallest failing assertion to `__tests__/smoke.test.tsx` and verify RED before changing production code. Pure CSS visual corrections do not need a DOM test, but must be rechecked at every affected viewport.

- [ ] **Step 6: Fix findings one at a time and re-verify**

After each behavior fix, run the focused test; after each responsive/visual fix, recapture the affected viewport. Do not bundle unrelated polishing changes.

- [ ] **Step 7: Run the final verification suite**

Run:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
git diff --check
git status --short
```

Expected: tests, lint, and build exit 0; `git diff --check` has no output; `git status --short` lists only the intentional Phase 1 changes.

- [ ] **Step 8: Commit the verified polish**

```powershell
git add app components lib public/images __tests__ package.json package-lock.json vitest.config.mts vitest.setup.ts
git commit -m "style: polish the ClientFlow landing experience"
```

---

## Plan Self-Review

- **Spec coverage:** Hero, salon transformation, six-step workflow, real product preview, human-supervised AI, benefits, responsive design, metadata, accessibility, and honest Phase 1 CTAs are each owned by a task.
- **Type consistency:** `NavigationItem`, `WorkflowStep`, `navigationItems`, `workflowSteps`, and `productPromise` are defined once in Task 2 and consumed unchanged by later tasks.
- **Testing:** Every new component behavior is introduced by a failing test; CSS-only visual work is verified at explicit viewports and with reduced motion.
- **Scope control:** Authentication, database, live AI, email capture, and proposal functionality remain out of Phase 1.
- **Proportion:** Tasks specify interfaces and observable outcomes without transcribing full component implementations.
