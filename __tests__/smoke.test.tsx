import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("marketing page", () => {
  it("introduces ClientFlow with accessible page landmarks", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /turn unclear client requests into proposal-ready projects/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /primary/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(
      screen
        .getAllByRole("link", { name: /see how it works/i })
        .every((link) => link.getAttribute("href") === "#how-it-works"),
    ).toBe(true);
    expect(
      screen.getByRole("link", { name: /skip to content/i }),
    ).toHaveAttribute("href", "#main-content");
    expect(
      screen.getByText("I need a website for my salon."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /discovery question editor/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", {
        name: /from vague request to clear scope/i,
      }),
    ).toBeInTheDocument();

    const workflow = screen.getByRole("list", {
      name: /request-to-decision workflow/i,
    });
    expect(within(workflow).getAllByRole("listitem")).toHaveLength(6);
    expect(
      screen.getByRole("heading", { name: /ai drafts, you approve/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/nothing is shared before you review it/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
