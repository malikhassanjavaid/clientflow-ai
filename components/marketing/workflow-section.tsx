import { workflowStages } from "@/lib/marketing-content";

export function WorkflowSection() {
  return (
    <section
      aria-labelledby="workflow-title"
      className="border-b border-line bg-ivory"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-end">
          <div>
            <h2
              className="max-w-4xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-ink sm:text-6xl"
              id="workflow-title"
            >
              The whole project becomes easier to follow.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-muted-ink lg:justify-self-end">
            Instead of six disconnected tools, ClientFlow guides the work
            through three understandable phases—with your review between each
            one.
          </p>
        </div>

        <ol
          aria-label="Three-stage ClientFlow workflow"
          className="mt-14 grid overflow-hidden rounded-2xl border border-line bg-paper lg:grid-cols-3"
        >
          {workflowStages.map((stage, index) => (
            <li
              className="relative p-6 sm:p-8 lg:min-h-[25rem] lg:border-r lg:border-line lg:last:border-r-0"
              key={stage.id}
            >
              {index < workflowStages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 right-6 h-px bg-line lg:bottom-auto lg:left-auto lg:right-[-0.7rem] lg:top-10 lg:z-10 lg:h-6 lg:w-6 lg:rounded-full lg:border lg:border-line lg:bg-ivory"
                />
              ) : null}

              <div className="flex items-center justify-between">
                <span className="font-editorial text-4xl text-cobalt">
                  {stage.number}
                </span>
                <span className="rounded-full bg-cobalt-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-cobalt-dark">
                  {stage.eyebrow}
                </span>
              </div>

              <h3 className="mt-12 font-editorial text-3xl leading-tight text-ink">
                {stage.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-muted-ink">
                {stage.description}
              </p>

              <div className="mt-8 border-t border-line pt-5">
                {stage.steps.map((step) => (
                  <div
                    className="flex items-center gap-3 py-2 text-sm font-semibold text-ink"
                    key={step.id}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10 text-success">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="m2.25 6.25 2.1 2.1 5.4-5.2"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.4"
                        />
                      </svg>
                    </span>
                    {step.label}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
