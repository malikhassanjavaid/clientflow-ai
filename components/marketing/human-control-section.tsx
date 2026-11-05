const controlPromises = [
  {
    number: "01",
    title: "Clients answer without an account",
    description:
      "Share a focused link instead of asking a client to create another login before the project has even started.",
  },
  {
    number: "02",
    title: "AI never sends on your behalf",
    description:
      "Questions, requirements, and proposal language remain drafts until you review and approve them.",
  },
  {
    number: "03",
    title: "Your price stays your decision",
    description:
      "AI can organize the scope, but only you set the investment, terms, exclusions, and final commitment.",
  },
] as const;

export function HumanControlSection() {
  return (
    <section
      aria-labelledby="human-control-title"
      className="border-b border-ink bg-ink text-paper"
      id="why-clientflow"
    >
      <div
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        id="human-control"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div>
            <h2
              className="max-w-4xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-paper sm:text-6xl"
              id="human-control-title"
            >
              AI handles the blank page. You keep the judgment.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-paper/70 lg:justify-self-end">
            ClientFlow speeds up the repetitive thinking without pretending it
            knows your client, reputation, or business better than you do.
          </p>
        </div>

        <div className="mt-14 grid border-y border-paper/20 lg:grid-cols-3">
          {controlPromises.map((promise) => (
            <article
              className="border-b border-paper/15 py-7 last:border-b-0 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              key={promise.number}
            >
              <div className="flex items-center gap-3">
                <span className="font-editorial text-xl text-peach">
                  {promise.number}
                </span>
                <span className="h-px w-8 bg-paper/25" />
              </div>
              <h3 className="mt-7 max-w-xs font-editorial text-3xl leading-tight text-paper">
                {promise.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-paper/65">
                {promise.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-xl border border-peach/30 bg-paper/5 px-5 py-4 text-sm leading-6 text-paper/80 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span className="font-semibold text-paper">
            The rule stays simple:
          </span>
          <span>
            Nothing is shared before you review it. Nothing becomes final
            without you.
          </span>
        </div>
      </div>
    </section>
  );
}
