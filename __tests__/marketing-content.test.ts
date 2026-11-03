import { describe, expect, it } from "vitest";

import {
  navigationItems,
  productPromise,
  workflowSteps,
} from "@/lib/marketing-content";

describe("marketing content", () => {
  it("defines the core product promise and complete workflow", () => {
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
  });

  it("keeps Phase 1 navigation on implemented page sections", () => {
    expect(navigationItems.every((item) => item.href.startsWith("#"))).toBe(
      true,
    );
  });
});
