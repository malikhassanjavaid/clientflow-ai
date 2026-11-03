const informationGaps = [
  {
    label: "Booking flow",
    detail: "Should visitors request, schedule, or pay for appointments online?",
  },
  {
    label: "Services and pricing",
    detail: "Which treatments, packages, and prices need to be presented?",
  },
  {
    label: "Audience and style",
    detail: "Who is the salon trying to reach, and what should the brand feel like?",
  },
  {
    label: "Budget and deadline",
    detail: "What investment range and launch date should shape the scope?",
  },
] as const;

export function RequestTransformation() {
  return (
    <section
      aria-labelledby="transformation-title"
      className="border-b border-line bg-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">
              One message is not a project plan
            </p>
            <h2
              className="mt-5 max-w-xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-ink sm:text-6xl"
              id="transformation-title"
            >
              From vague request to clear scope
            </h2>
            <blockquote className="mt-10 border-l-2 border-peach pl-6 font-editorial text-3xl leading-tight text-ink sm:text-4xl">
              I need a website for my salon.
            </blockquote>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-ink">
              The original request stays visible, so every later decision can
              be traced back to what the client actually asked for.
            </p>
          </div>

          <div>
            <p className="border-b border-line pb-4 text-sm font-semibold text-ink">
              ClientFlow helps you uncover what is still missing
            </p>
            <ul className="divide-y divide-line" aria-label="Information gaps">
              {informationGaps.map((gap, index) => (
                <li
                  className="grid gap-2 py-5 sm:grid-cols-[3rem_11rem_1fr] sm:items-start"
                  key={gap.label}
                >
                  <span className="font-editorial text-xl text-cobalt">
                    0{index + 1}
                  </span>
                  <span className="font-semibold text-ink">{gap.label}</span>
                  <span className="leading-7 text-muted-ink">{gap.detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t-2 border-ink pt-6 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-success">
                The outcome
              </p>
              <p className="mt-3 font-editorial text-2xl leading-8 text-ink sm:mt-0">
                A reviewed brief with the features, constraints, timeline, and
                open assumptions needed to write a confident proposal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
