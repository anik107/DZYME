import { ArrowRight } from "lucide-react";

const FEATURES = [
  {
    title: "AI Chat Interface",
    description: "Make updates to your website by chatting—no manual editing needed.",
  },
  {
    title: "Auto Website Generation",
    description: "Create a polished website from your work in just a few steps.",
  },
  {
    title: "Publication Manager",
    description: "Organise and display your publications in one place.",
  },
  {
    title: "No-Code Simplicity",
    description: "Maintain your site yourself, without writing any code.",
  },
];

/** Highlighted-features section from the landing-page design. */
function Feature() {
  return (
    <section
      aria-labelledby="highlighted-features-heading"
      className="bg-background mt-30 mb-30 w-full lg:h-[466px]"
    >
      <div className="mx-auto grid h-full w-full max-w-[1441px] grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.5fr)]">
        <div className="flex min-h-[236px] flex-col justify-center px-8 py-10 sm:px-16 lg:min-h-0 lg:px-[125px]">
          <p className="font-heading text-[24px] leading-[26px] font-medium tracking-[0] text-[#0057ff]">
            Highlighted Features
          </p>
          <h2
            id="highlighted-features-heading"
            className="font-heading mt-1 text-[48px] leading-[48px] font-semibold tracking-normal text-[#111827]"
          >
            Powerful Features,
            <span className="text-primary block">Simple Interface</span>
          </h2>
          <p className="font-heading mt-2 text-[16px] leading-[18px] font-medium tracking-normal text-[#111827]">
            Everything you need to maintain a professional online presence
          </p>
        </div>

        <ul className="grid h-full grid-cols-1 lg:mr-[125px] lg:h-[466px] lg:w-[620px] lg:grid-cols-[repeat(2,300px)] lg:grid-rows-[repeat(2,222px)] lg:place-content-center lg:gap-5 lg:justify-self-end">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="group bg-background hover:border-primary hover:bg-primary relative flex min-h-[233px] flex-col justify-end overflow-hidden rounded-lg border border-[#ece7e3] p-5 transition-colors duration-500 ease-out lg:h-[222px] lg:min-h-0 lg:w-[300px]"
            >
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-heading max-w-[185px] text-[32px] leading-[0.94] font-medium tracking-[-0.03em] text-[#111827] transition-colors duration-500 ease-out group-hover:text-white">
                  {feature.title}
                </h3>
                <ArrowRight
                  aria-hidden="true"
                  className="text-primary relative z-10 mb-1 size-6 shrink-0 transition-[color,opacity] duration-300 ease-out group-hover:opacity-0"
                  strokeWidth={1.5}
                />
              </div>
              <p className="font-heading max-h-0 overflow-hidden text-base leading-[1.2] text-white opacity-0 transition-[max-height,margin,opacity] duration-500 ease-out group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                {feature.description}
              </p>
              <span aria-hidden="true" className="bg-primary absolute inset-x-0 bottom-0 h-1" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { Feature };
