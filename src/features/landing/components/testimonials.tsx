import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Bruce Jahandideh",
    role: "PhD, Macquarie University",
    quote:
      "Dzyne.me really helps academics showcase their personal brand without having to stress about technical issues.",
    portrait: "/assets/landing/talk-about/left.png",
    width: 222,
    height: 238,
  },
  {
    name: "Mahsa N. Shirazi",
    role: "PhD, Postdoctoral fellow at University of California",
    quote: "I never thought having my own academic profile could be this easy! Super exciting!",
    portrait: "/assets/landing/talk-about/middle.png",
    width: 213,
    height: 238,
  },
  {
    name: "Enrique Solera Navarro",
    role: "Data Analyst in MEDAL.vMSc Computational Biology",
    quote:
      "I know web development, but using dzyne.me allows me to focus on what's really important for an academic website: the content!",
    portrait: "/assets/landing/talk-about/right.png",
    width: 239,
    height: 238,
  },
] as const;

/** The "talk about" section: three academics vouching for the product. */
function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-background relative overflow-hidden py-16 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1190px] px-5 sm:px-8 lg:px-0">
        <h2
          id="testimonials-heading"
          className="font-heading text-center text-4xl leading-[0.92] font-semibold tracking-[-0.03em] text-[#111827] sm:text-5xl lg:text-[56px]"
        >
          See what all the <span className="text-primary">talk is about!</span>
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.name} className="rounded-lg border border-[#f1e8e3] bg-white p-4">
              <figure>
                {/* Fixed height, auto width: the arches share a baseline despite differing widths. */}
                <Image
                  src={testimonial.portrait}
                  alt={testimonial.name}
                  width={testimonial.width}
                  height={testimonial.height}
                  sizes="240px"
                  className="h-56 w-auto"
                />
                <figcaption className="mt-5">
                  <p className="font-heading text-lg font-semibold text-[#111827]">
                    {testimonial.name}
                  </p>
                  <p className="font-heading text-sm text-[#6b7280]">{testimonial.role}</p>
                </figcaption>
                <blockquote className="font-heading mt-4 text-[15px] leading-[1.35] text-[#111827]">
                  {testimonial.quote}
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { Testimonials };
