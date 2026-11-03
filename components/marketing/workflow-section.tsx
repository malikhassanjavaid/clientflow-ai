import { workflowSteps } from "@/lib/marketing-content";

export function WorkflowSection() {
  return (
    <section
      aria-labelledby="workflow-title"
      className="border-b border-line bg-paper"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">
              The complete ClientFlow journey
            </p>
            <h2
              className="mt-5 max-w-3xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-ink sm:text-6xl"
              id="workflow-title"
            >
              One clear path from client request to recorded decision.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-muted-ink lg:justify-self-end">
            Each step keeps the source context visible and pauses for your
            review before the project moves forward.
          </p>
        </div>

        <ol
          aria-label="Request-to-decision workflow"
          className="mt-12 border-t-2 border-ink"
        >
          {workflowSteps.map((step) => (
            <li
              className="grid gap-3 border-b border-line py-7 sm:grid-cols-[5rem_minmax(12rem,0.7fr)_1.3fr] sm:items-start sm:gap-8"
              key={step.id}
            >
              <span className="font-editorial text-2xl text-cobalt">
                {step.number}
              </span>
              <h3 className="font-editorial text-2xl leading-8 text-ink">
                {step.title}
              </h3>
              <p className="max-w-2xl leading-7 text-muted-ink">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
