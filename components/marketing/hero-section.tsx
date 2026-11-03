import { productPromise } from "@/lib/marketing-content";

export function HeroSection() {
  return (
    <section className="border-b border-line" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-12 lg:py-32">
        <div>
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-cobalt">
            A clearer start for freelance projects
          </p>
          <h1
            className="max-w-5xl font-editorial text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-ink sm:text-7xl lg:text-[5.4rem]"
            id="hero-title"
          >
            {productPromise}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-ink sm:text-xl sm:leading-9">
            ClientFlow helps you move from a client&apos;s first vague message
            to reviewed discovery questions, clear requirements, and a
            proposal you are ready to stand behind.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-cobalt px-6 py-3 font-semibold text-white transition-colors hover:bg-cobalt-dark sm:w-auto"
              href="#how-it-works"
            >
              See how it works
            </a>
            <a
              className="border-b border-ink pb-1 font-semibold text-ink transition-colors hover:border-cobalt hover:text-cobalt"
              href="#product-preview"
            >
              Preview the workflow
            </a>
          </div>
        </div>

        <aside className="self-end border-l-2 border-peach pl-6 lg:mb-2">
          <p className="font-editorial text-2xl leading-8 text-ink">
            AI drafts. You decide what the client sees.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-ink">
            Edit every suggestion, set your own price, and approve each client
            touchpoint before it is shared.
          </p>
        </aside>
      </div>
    </section>
  );
}
