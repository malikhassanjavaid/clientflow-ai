import {
  ArrowRight,
  ChatCircleDots,
  FileText,
  PlayCircle,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { productPromise } from "@/lib/marketing-content";

const transformationSteps = [
  {
    description: "“I need a website for my salon. Can you tell me the price?”",
    icon: ChatCircleDots,
    title: "Vague request",
  },
  {
    description: "Clear scope, timeline, and price, all in one place.",
    icon: FileText,
    title: "Ready to review",
  },
  {
    description: "Project won",
    icon: Trophy,
    title: "Proposal accepted —",
  },
] as const;

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-hero-surface"
    >
      <div className="relative mx-auto w-full max-w-[120rem] px-5 py-8 sm:px-8 sm:py-10 lg:h-[calc(100svh-3.5rem)] lg:min-h-[30rem] lg:max-h-[49rem] lg:px-0 lg:py-0">
        <div className="clientflow-hero-copy relative z-20 min-w-0 max-w-2xl lg:absolute lg:left-[3.7%] lg:top-[6%] lg:w-[44%]">
          <h1
            className="clientflow-hero-title max-w-full font-editorial text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.04em] text-hero-forest sm:max-w-[42rem] sm:text-[3.5rem] sm:leading-[0.98] lg:text-[3rem]"
            id="hero-title"
          >
            {productPromise}
          </h1>

          <p className="clientflow-hero-description mt-4 max-w-full text-base leading-6 text-hero-muted sm:max-w-[36rem] sm:text-lg sm:leading-7 lg:text-base lg:leading-6">
            Collect the missing details, define the scope, prepare the timeline
            and price, then review everything before it reaches your client.
          </p>

          <div className="clientflow-hero-actions mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <a
              className="clientflow-hero-primary inline-flex min-h-11 w-full items-center justify-center whitespace-nowrap rounded-md bg-hero-accent px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(125,33,56,0.17)] transition-[background-color,transform,box-shadow] hover:-translate-y-0.5 hover:bg-hero-accent-dark hover:shadow-[0_14px_28px_rgba(125,33,56,0.22)] sm:w-auto"
              href="#how-it-works"
            >
              See the three-step workflow
            </a>
            <a
              className="clientflow-hero-secondary inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap px-1 py-2 text-sm font-bold text-hero-forest underline decoration-hero-forest/35 underline-offset-4 transition-colors hover:text-hero-accent hover:decoration-hero-accent sm:w-auto"
              href="#product-preview"
            >
              <PlayCircle
                aria-hidden="true"
                className="text-hero-accent"
                size={26}
                weight="regular"
              />
              Preview the product demo
            </a>
          </div>

          <p className="clientflow-hero-trust mt-3 max-w-xl text-xs leading-4 text-hero-muted">
            No client account required · Nothing sends without review · Your
            pricing stays yours
          </p>
        </div>

        <figure className="clientflow-hero-visual hero-visual-in relative mt-8 h-[22rem] overflow-hidden rounded-[2.5rem] sm:h-[28rem] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[62%] lg:rounded-none lg:[clip-path:ellipse(70%_80%_at_76%_60%)]">
          <Image
            alt="Freelancer celebrating after winning a client project with a clear ClientFlow proposal."
            className="object-cover object-[61%_center] lg:object-[74%_center]"
            fill
            preload
            sizes="(max-width: 1023px) 100vw, 62vw"
            src="/images/clientflow-freelancer-celebration.png"
          />
        </figure>

        <div className="clientflow-workflow-card hero-outcome-in relative z-30 -mt-8 overflow-hidden rounded-2xl bg-paper px-5 py-4 text-hero-forest shadow-[0_18px_45px_rgba(16,35,63,0.13)] sm:mx-8 sm:px-6 lg:absolute lg:bottom-[3%] lg:left-[15%] lg:mt-0 lg:min-h-24 lg:w-[70%] lg:px-5 lg:py-3">
          <ol
            aria-label="From vague request to accepted proposal"
            className="clientflow-workflow-list grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1.08fr] lg:items-center lg:gap-3"
          >
            {transformationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  className="contents"
                  key={step.title}
                >
                  <div className="clientflow-workflow-step grid min-w-0 grid-cols-[2.5rem_1fr] items-start gap-2.5">
                    <Icon
                      aria-hidden="true"
                      className={`clientflow-workflow-icon mt-0.5 h-10 w-10 ${
                        index === 2 ? "text-hero-forest" : ""
                      }`}
                      size={40}
                      weight="regular"
                    />
                    <div className="min-w-0">
                      <p className="clientflow-workflow-title font-editorial text-base font-bold leading-5">
                        {step.title}
                      </p>
                      <p
                        className={`clientflow-workflow-description mt-0.5 text-xs leading-4 text-hero-muted ${
                          index === 2 ? "font-semibold" : "italic"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < transformationSteps.length - 1 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="clientflow-workflow-arrow hidden text-hero-accent lg:block"
                      size={22}
                      weight="bold"
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
