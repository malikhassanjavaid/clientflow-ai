import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const headerNavigation = [
  { href: "#product-preview", label: "Product" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#final-cta", label: "Pricing" },
  { href: "#why-clientflow", label: "Resources" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-line bg-hero-surface">
      <a
        className="fixed left-4 top-4 z-50 -translate-y-24 bg-ink px-4 py-3 text-sm font-semibold text-paper transition-transform focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>

      <div className="mx-auto flex min-h-14 max-w-[120rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-[3.7%]">
        <Link aria-label="ClientFlow AI home" href="/">
          <span className="clientflow-wordmark font-editorial text-[1.75rem] font-semibold leading-none tracking-[-0.04em] text-hero-forest sm:text-[2rem]">
            ClientFlow
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7">
          <nav
            aria-label="Primary"
            className="clientflow-primary-nav hidden min-h-14 items-stretch gap-7 text-sm font-semibold text-hero-forest lg:flex xl:gap-8"
          >
            {headerNavigation.map((item, index) => (
              <a
                className={`relative inline-flex items-center whitespace-nowrap pt-1 transition-colors hover:text-hero-accent ${
                  index === 0
                    ? "text-hero-accent after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-hero-accent"
                    : ""
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <span
            aria-hidden="true"
            className="hidden h-7 w-px bg-line lg:block"
          />

          <a
            className="clientflow-header-login hidden whitespace-nowrap text-sm font-semibold text-hero-forest transition-colors hover:text-hero-accent sm:inline-flex"
            href="#product-preview"
          >
            Log in
          </a>

          <a
            className="clientflow-header-cta inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-hero-accent px-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(125,33,56,0.15)] transition-colors hover:bg-hero-accent-dark"
            href="#final-cta"
          >
            Get started
            <ArrowRight aria-hidden="true" size={16} weight="bold" />
          </a>
        </div>
      </div>
    </header>
  );
}
