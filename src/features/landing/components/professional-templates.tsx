import Image from "next/image";
import Link from "next/link";

const TEMPLATES = [
  {
    id: "left",
    src: "/assets/landing/profesional-template/temlate-left.png",
    alt: "",
    width: 436,
    height: 651,
    comingSoon: true,
    /** Position on the `lg` stage; ignored at smaller widths, where the previews stack. */
    position: "lg:absolute lg:top-[38px] lg:left-0 lg:w-[440px]",
  },
  {
    id: "middle",
    src: "/assets/landing/profesional-template/template-middle.png",
    alt: "Academic profile template preview",
    width: 497,
    height: 777,
    comingSoon: false,
    position:
      "max-lg:order-first lg:absolute lg:top-0 lg:left-1/2 lg:z-10 lg:w-[497px] lg:-translate-x-1/2 lg:[mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]",
  },
  {
    id: "right",
    src: "/assets/landing/profesional-template/template-right.png",
    alt: "",
    width: 436,
    height: 650,
    comingSoon: true,
    position: "lg:absolute lg:top-[38px] lg:right-0 lg:w-[440px]",
  },
] as const;

/** The "professional templates" section: three template previews with the live one centred. */
function ProfessionalTemplates() {
  return (
    <section
      aria-labelledby="professional-templates-heading"
      className="bg-background relative overflow-hidden py-16 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-0">
        <h2
          id="professional-templates-heading"
          className="font-heading text-center text-4xl leading-[0.92] font-semibold tracking-[-0.03em] text-[#111827] sm:text-5xl lg:text-[56px]"
        >
          Professional Templates <span className="text-primary">for Academics</span>
        </h2>

        {/* Stage: overlapping previews at lg, a plain stack below it. */}
        <div className="relative mt-12 flex flex-col items-center gap-8 lg:mt-16 lg:block lg:h-[760px]">
          {TEMPLATES.map((template) => (
            <figure
              key={template.id}
              className={`relative w-full max-w-[440px] lg:max-w-none ${template.position}`}
            >
              <Image
                src={template.src}
                alt={template.alt}
                width={template.width}
                height={template.height}
                // The sharp preview carries dense UI text; the blurred ones do not.
                quality={template.comingSoon ? 75 : 95}
                sizes={
                  template.comingSoon
                    ? "(min-width: 1024px) 440px, 100vw"
                    : "(min-width: 1024px) 497px, 100vw"
                }
                className={`h-auto w-full ${template.comingSoon ? "opacity-80 blur-[3px]" : ""}`}
              />
              {template.comingSoon ? (
                <figcaption className="font-heading mt-3 text-center text-lg text-[#8b93a7]">
                  coming soon
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>

        {/* Styled as a link rather than <Button>, which is client-only (Radix Slot). */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <Link
            href="/signup"
            className="font-heading border-primary bg-background text-primary hover:bg-primary-tint inline-flex items-center justify-center rounded-lg border px-10 py-3 text-base font-bold transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export { ProfessionalTemplates };
