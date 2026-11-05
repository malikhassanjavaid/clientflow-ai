import { describe, expect, it } from "vitest";

import {
  navigationItems,
  productPromise,
  workflowStages,
} from "@/lib/marketing-content";

describe("marketing content", () => {
  it("defines the core product promise and complete workflow", () => {
    expect(productPromise).toBe(
      "Turn vague client requests into clear, client-ready proposals.",
    );
    expect(workflowStages).toHaveLength(3);
    expect(
      workflowStages.flatMap((stage) => stage.steps.map((step) => step.id)),
    ).toEqual([
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
