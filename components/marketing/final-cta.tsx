export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-peach"
    >
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[42px] border-white/20" />
      <div className="absolute -bottom-24 left-[12%] h-52 w-52 rounded-full border-[34px] border-cobalt/10" />

      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-12">
        <div>
          <h2
            className="max-w-4xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-ink sm:text-6xl"
            id="final-cta-title"
          >
            Stop turning vague messages into risky promises.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75">
            Create a clear path from first request to approved scope—with the
            client informed and your judgment in control.
          </p>
        </div>

        <a
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-cobalt-dark sm:w-auto"
          href="#product-preview"
        >
          Preview the product story
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 10h12m-4-4 4 4-4 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
