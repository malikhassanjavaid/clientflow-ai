export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-peach">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt-dark">
            Start with clarity
          </p>
          <h2
            className="mt-4 max-w-4xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-ink sm:text-6xl"
            id="final-cta-title"
          >
            A stronger proposal starts with a better brief.
          </h2>
        </div>
        <a
          className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-cobalt-dark sm:w-auto"
          href="#product-preview"
        >
          See the product direction
        </a>
      </div>
    </section>
  );
}
