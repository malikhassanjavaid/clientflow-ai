import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const globalsCss = readFileSync("app/globals.css", "utf8");

function readColorToken(name: string) {
  const match = globalsCss.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i"));

  if (!match) {
    throw new Error(`Missing color token: --${name}`);
  }

  return match[1];
}

function relativeLuminance(hex: string) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)!
    .map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) =>
      channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4,
    );

  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrastRatio(foreground: string, background: string) {
  const lighter = Math.max(
    relativeLuminance(foreground),
    relativeLuminance(background),
  );
  const darker = Math.min(
    relativeLuminance(foreground),
    relativeLuminance(background),
  );

  return (lighter + 0.05) / (darker + 0.05);
}

describe("marketing color tokens", () => {
  it.each(["ivory", "paper"])(
    "keeps muted text readable on the %s surface",
    (surface) => {
      expect(
        contrastRatio(readColorToken("muted-ink"), readColorToken(surface)),
      ).toBeGreaterThanOrEqual(4.5);
    },
  );
});
