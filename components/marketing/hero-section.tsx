import { productPromise } from "@/lib/marketing-content";

const outcomeSteps = [
  { label: "Smart discovery questions", status: "Reviewed" },
  { label: "Clear project requirements", status: "Ready" },
  { label: "Client-ready proposal", status: "Your price" },
] as const;

const trustPoints = [
  "No client account required",
  "Nothing sends without review",
  "Your pricing stays yours",
] as const;

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_26%,rgba(61,85,217,0.13),transparent_27%),radial-gradient(circle_at_12%_10%,rgba(243,199,176,0.22),transparent_24%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <h1
            className="max-w-4xl font-editorial text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4rem]"
            id="hero-title"
          >
            {productPromise}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-ink sm:text-xl sm:leading-9">
            Save the request, let AI suggest the missing questions, collect
            answers without a client login, and shape the final scope,
            timeline, and price before anything is shared.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-cobalt px-6 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(61,85,217,0.22)] transition-colors hover:bg-cobalt-dark sm:w-auto"
              href="#how-it-works"
            >
              See the three-step workflow
            </a>
            <a
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-line bg-paper px-6 py-3 font-semibold text-ink transition-colors hover:border-cobalt hover:text-cobalt sm:w-auto"
              href="#product-preview"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 4.8v10.4c0 .65.72 1.03 1.25.66l7.35-5.2a.8.8 0 0 0 0-1.32l-7.35-5.2A.77.77 0 0 0 6.5 4.8Z" />
              </svg>
              Preview the product demo
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-3 text-sm text-muted-ink sm:flex-row sm:flex-wrap sm:gap-x-6">
            {trustPoints.map((point) => (
              <li className="flex items-center gap-2" key={point}>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-success"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="m4.5 10.5 3.25 3.25 7.75-8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-label="From client message to proposal preview"
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          <div className="absolute -inset-5 -z-10 rotate-2 rounded-[2rem] bg-peach/45" />
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_28px_80px_rgba(32,40,58,0.16)]">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff8c7a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f3c75f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#62b98b]" />
              </div>
              <span className="text-xs font-semibold text-muted-ink">
                New client request
              </span>
            </div>

            <div className="p-5 sm:p-7">
              <div className="max-w-[90%] rounded-xl rounded-tl-sm bg-ivory px-4 py-3 text-sm leading-6 text-ink">
                “I need a website for my salon. Can you tell me the price?”
              </div>

              <div className="my-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-cobalt">
                <span className="h-px flex-1 bg-cobalt/20" />
                ClientFlow adds clarity
                <span className="h-px flex-1 bg-cobalt/20" />
              </div>

              <div className="divide-y divide-line border-y border-line">
                {outcomeSteps.map((step, index) => (
                  <div
                    className="flex items-center gap-3 py-3.5"
                    key={step.label}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cobalt-soft text-xs font-bold text-cobalt-dark">
                      0{index + 1}
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-semibold text-ink">
                      {step.label}
                    </span>
                    <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] text-success">
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-ink px-4 py-3.5 text-paper">
                <div>
                  <p className="text-xs text-paper/65">Next action</p>
                  <p className="mt-0.5 text-sm font-semibold">
                    Review before sharing
                  </p>
                </div>
                <span className="rounded-full bg-peach px-3 py-1.5 text-xs font-bold text-ink">
                  You decide
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
