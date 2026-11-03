import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("component test foundation", () => {
  it("renders React and exposes DOM matchers", () => {
    render(<h1>ClientFlow test foundation</h1>);

    expect(
      screen.getByRole("heading", { name: /clientflow test foundation/i }),
    ).toBeInTheDocument();
  });
});
