const reviewBoundaries = [
  {
    title: "AI suggests",
    description:
      "It can surface missing details and draft useful language from the context you provide.",
  },
  {
    title: "You edit",
    description:
      "Change, remove, reorder, or rewrite anything so the work reflects your judgment and process.",
  },
  {
    title: "You approve",
    description:
      "Nothing is shared before you review it, and AI never chooses your final price or commitment.",
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
        className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12"
        id="human-control"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-peach">
            Human judgment stays in the loop
          </p>
          <h2
            className="mt-5 max-w-xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-paper sm:text-6xl"
            id="human-control-title"
          >
            AI drafts, you approve.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-paper/70">
            ClientFlow is designed as a review workspace, not an autonomous
            agent. Your expertise remains the final checkpoint.
          </p>
        </div>

        <dl className="border-t border-paper/30">
          {reviewBoundaries.map((boundary, index) => (
            <div
              className="grid gap-3 border-b border-paper/20 py-6 sm:grid-cols-[13rem_1fr] sm:gap-5"
              key={boundary.title}
            >
              <dt className="flex gap-5 font-semibold text-paper">
                <span
                  aria-hidden="true"
                  className="font-editorial text-xl font-normal text-peach"
                >
                  0{index + 1}
                </span>
                <span>{boundary.title}</span>
              </dt>
              <dd className="leading-7 text-paper/70">
                {boundary.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
