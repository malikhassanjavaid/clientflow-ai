import Image from "next/image";

export function ProductPreview() {
  return (
    <section
      aria-labelledby="product-preview-title"
      className="border-b border-line bg-ivory"
      id="product-preview"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid items-end gap-7 md:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">
              Product direction
            </p>
            <h2
              className="mt-5 max-w-3xl font-editorial text-4xl font-medium leading-tight tracking-[-0.035em] text-ink sm:text-6xl"
              id="product-preview-title"
            >
              Review the questions before your client ever sees them.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted-ink md:justify-self-end">
            The workspace keeps the source request, editable AI suggestions,
            project context, and the next human decision visible together.
          </p>
        </div>

        <figure className="mt-12">
          <div className="overflow-hidden border border-line bg-paper shadow-[0_26px_70px_rgba(32,40,58,0.12)]">
            <Image
              alt="ClientFlow discovery question editor showing editable salon website questions"
              className="h-auto w-full"
              height={1058}
              sizes="(max-width: 1280px) 100vw, 1184px"
              src="/images/clientflow-discovery-questions.png"
              width={1487}
            />
          </div>
          <figcaption className="mt-4 flex flex-col gap-2 text-sm leading-6 text-muted-ink sm:flex-row sm:justify-between">
            <span>Concept preview — discovery question editor</span>
            <span>AI suggests. The freelancer reviews and approves.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
