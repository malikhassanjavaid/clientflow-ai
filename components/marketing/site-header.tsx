import Link from "next/link";

import { navigationItems } from "@/lib/marketing-content";

import { Brand } from "./brand";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-ivory">
      <a
        className="fixed left-4 top-4 z-50 -translate-y-24 bg-ink px-4 py-3 text-sm font-semibold text-paper transition-transform focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 sm:px-8 lg:px-12">
        <Link aria-label="ClientFlow AI home" href="/">
          <Brand />
        </Link>

        <nav
          aria-label="Primary"
          className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-3 text-sm font-medium text-muted-ink md:order-none md:w-auto md:border-0 md:pt-0"
        >
          {navigationItems.map((item) => (
            <a
              className="transition-colors hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex min-h-11 items-center justify-center rounded-sm bg-cobalt px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cobalt-dark"
          href="#how-it-works"
        >
          See how it works
        </a>
      </div>
    </header>
  );
}
