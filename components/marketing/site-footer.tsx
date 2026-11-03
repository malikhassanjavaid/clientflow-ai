import { navigationItems } from "@/lib/marketing-content";

import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
        <div>
          <Brand />
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-ink">
            A proposal-planning workspace for freelancers who want clearer
            client conversations and full control over AI drafts.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3">
          {navigationItems.map((item) => (
            <a
              className="text-sm font-medium text-muted-ink transition-colors hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
