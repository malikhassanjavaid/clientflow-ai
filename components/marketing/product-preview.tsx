import Image from "next/image";

export function ProductPreview() {
  return (
    <section
      aria-labelledby="product-preview-title"
      className="border-b border-ink bg-ink text-paper"
      id="product-preview"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid items-end gap-7 lg:grid-cols-[minmax(0,1fr)_25rem]">
          <div>
            <h2
              className="max-w-4xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-paper sm:text-6xl"
              id="product-preview-title"
            >
              Watch the journey from request to proposal.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-paper/70 lg:justify-self-end">
            When the dashboard is complete, this space will hold a short video
            showing the real flow from client request to accepted proposal.
          </p>
        </div>

        <figure className="mt-12">
          <div
            aria-label="ClientFlow dashboard demo video placeholder"
            className="group relative aspect-video overflow-hidden rounded-2xl border border-paper/20 bg-[#11182a] shadow-[0_32px_90px_rgba(0,0,0,0.35)]"
            role="img"
          >
            <Image
              alt=""
              className="object-cover object-top opacity-45 grayscale-[20%]"
              fill
              sizes="(max-width: 1280px) 100vw, 1184px"
              src="/images/clientflow-discovery-questions.png"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,42,0.2),rgba(17,24,42,0.82))]" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/15 bg-ink/45 px-4 py-3 backdrop-blur-sm sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff8c7a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f3c75f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#62b98b]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-paper/70">
                ClientFlow product demo
              </span>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white text-ink shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:h-20 sm:w-20">
                <svg
                  aria-hidden="true"
                  className="ml-0.5 h-5 w-5 sm:ml-1 sm:h-8 sm:w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5.65v12.7c0 .82.9 1.3 1.57.83l8.96-6.35a1 1 0 0 0 0-1.66L9.57 4.82A.97.97 0 0 0 8 5.65Z" />
                </svg>
              </span>
              <p className="mt-3 text-base font-semibold text-white sm:mt-5 sm:text-2xl">
                From first message to signed-off scope
              </p>
              <p className="mt-2 hidden max-w-lg text-sm leading-6 text-paper/70 sm:block sm:text-base">
                Full dashboard demo coming after the product is built.
              </p>
            </div>

            <div className="absolute inset-x-4 bottom-3 sm:inset-x-6 sm:bottom-6">
              <div className="h-1 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[18%] rounded-full bg-peach" />
              </div>
              <div className="mt-2 hidden items-center justify-between text-xs font-semibold text-paper/70 sm:flex">
                <span>00:00</span>
                <span>Demo planned for final product</span>
                <span>01:45</span>
              </div>
            </div>
          </div>

          <figcaption className="mt-5 flex flex-col gap-2 text-sm leading-6 text-paper/65 sm:flex-row sm:items-center sm:justify-between">
            <span>Temporary poster using the current dashboard direction.</span>
            <span>
              Later: replace this frame with an optimized, captioned video.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
