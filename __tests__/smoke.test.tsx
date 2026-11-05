import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("marketing page", () => {
  it("introduces ClientFlow with accessible page landmarks", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /turn vague client requests into clear, client-ready proposals/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /primary/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(
      screen.getByRole("link", { name: /see the three-step workflow/i }),
    ).toHaveAttribute("href", "#how-it-works");
    expect(
      screen.getByRole("link", { name: /preview the product demo/i }),
    ).toHaveAttribute("href", "#product-preview");
    expect(
      screen.getByRole("link", { name: /skip to content/i }),
    ).toHaveAttribute("href", "#main-content");
    expect(
      screen.getAllByText(/i need a website for my salon/i),
    ).toHaveLength(2);
    expect(
      screen.getByRole("img", {
        name: /clientflow dashboard demo video placeholder/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/full dashboard demo coming after the product is built/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", {
        name: /from a one-line request to a scope both sides understand/i,
      }),
    ).toBeInTheDocument();

    const workflow = screen.getByRole("list", {
      name: /three-stage clientflow workflow/i,
    });
    expect(within(workflow).getAllByRole("listitem")).toHaveLength(3);
    expect(
      screen.getByRole("heading", {
        name: /ai handles the blank page. you keep the judgment/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/nothing is shared before you review it/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/no client account required/i)).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
