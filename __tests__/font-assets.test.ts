import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

describe("font assets", () => {
  it("self-hosts the editorial font used by local preview and production", () => {
    expect(
      existsSync(resolve(process.cwd(), "app/fonts/newsreader-latin.woff2")),
    ).toBe(true);
  });
});
