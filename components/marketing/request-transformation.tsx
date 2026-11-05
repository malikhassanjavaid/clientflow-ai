const claritySignals = [
  "What needs to be built?",
  "What is the budget and deadline?",
  "What must the client decide?",
] as const;

const proposalDetails = [
  ["Scope", "Booking, services, payments"],
  ["Timeline", "4 milestones · 6 weeks"],
  ["Investment", "Set by the freelancer"],
] as const;

export function RequestTransformation() {
  return (
    <section
      aria-labelledby="transformation-title"
      className="border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-ink sm:text-6xl"
            id="transformation-title"
          >
            From a one-line request to a scope both sides understand.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-ink">
            ClientFlow keeps the client&apos;s exact words visible, fills the
            information gaps, and turns the reviewed answers into a proposal
            you can confidently price.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[0.86fr_auto_1fr_auto_1.05fr] lg:gap-5">
          <article className="flex min-h-72 flex-col justify-between rounded-2xl border border-line bg-ivory p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-ink">
                  Client message
                </p>
                <span className="rounded-full bg-peach/65 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] text-ink">
                  Unclear
                </span>
              </div>
              <blockquote className="mt-8 font-editorial text-3xl leading-tight text-ink sm:text-4xl">
                “I need a website for my salon.”
              </blockquote>
            </div>
            <p className="mt-8 text-sm leading-6 text-muted-ink">
              No feature list. No budget. No deadline. No shared definition of
              done.
            </p>
          </article>

          <div className="hidden items-center text-cobalt lg:flex" aria-hidden="true">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 12h14m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <article className="rounded-2xl border border-cobalt/20 bg-cobalt-soft p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt-dark">
                ClientFlow clarifies
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cobalt text-xs font-bold text-white">
                AI
              </span>
            </div>
            <div className="mt-7 space-y-3">
              {claritySignals.map((signal, index) => (
                <div
                  className="flex items-start gap-3 rounded-xl border border-cobalt/15 bg-white/65 px-4 py-3"
                  key={signal}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-cobalt">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-ink">
                    {signal}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-ink">
              You review every question before the client receives the form.
            </p>
          </article>

          <div className="hidden items-center text-cobalt lg:flex" aria-hidden="true">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 12h14m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <article className="flex min-h-72 flex-col rounded-2xl bg-ink p-6 text-paper sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-peach">
                Proposal-ready output
              </p>
              <span className="rounded-full bg-success px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] text-white">
                Clear
              </span>
            </div>
            <dl className="mt-7 divide-y divide-paper/15 border-y border-paper/15">
              {proposalDetails.map(([label, value]) => (
                <div className="py-3.5" key={label}>
                  <dt className="text-xs text-paper/60">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-paper">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-auto pt-5 text-sm leading-6 text-paper/70">
              One reviewed source of truth for the freelancer and client.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
