import Image from "next/image";

import { DzyneMark } from "@/components/brand/dzyne-mark";


const AGENTS = [
  {
    title: "AI Website Builder",
    description: "Create your academic website instantly by simply describing your work.",
    avatar: "/assets/landing/agents/agent-1.png",
    side: "left",
    /** Position on the `lg` stage; ignored at smaller widths, where cards flow in a grid. */
    position: "lg:top-0 lg:left-0",
  },
  {
    title: "Publication Assistant",
    description: "Add, update, and manage your research publications with AI support.",
    avatar: "/assets/landing/agents/agent-2.png",
    side: "right",
    position: "lg:top-0 lg:right-0",
  },
  {
    title: "Bio & Profile Generator",
    description: "Generate and refine your professional bio, experience, and profile effortlessly.",
    avatar: "/assets/landing/agents/agent-3.png",
    side: "left",
    position: "lg:top-[388px] lg:left-0",
  },
  {
    title: "Research Archive",
    description:
      "Organize research projects, journal editorials, and academic achievements with clickable details.",
    avatar: "/assets/landing/agents/agent-4.png",
    side: "right",
    position: "lg:top-[388px] lg:right-0",
  },
] as const;


const CONNECTORS = [
  "M246 56H447a24 24 0 0 1 24 24v156a24 24 0 0 0 24 24",
  "M944 56H743a24 24 0 0 0-24 24v156a24 24 0 0 1-24 24",
  "M246 444H447a24 24 0 0 0 24-24V284a24 24 0 0 1 24-24",
  "M944 444H743a24 24 0 0 1-24-24V284a24 24 0 0 0-24-24",
];


function AgentBadge({ className }: { className?: string }) {
  return (
    <div
      className={`relative rounded-full shadow-[0_18px_44px_rgba(137,71,29,0.18)] ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="animate-spin-reverse absolute inset-0 rounded-full bg-[conic-gradient(from_210deg,var(--primary)_0deg,var(--primary-tint)_30deg,var(--primary-tint)_150deg,var(--primary-hover)_180deg,var(--primary-tint)_210deg,var(--primary-tint)_330deg,var(--primary)_360deg)] motion-reduce:animate-none"
      />
      <div className="bg-background absolute inset-[9%] grid place-items-center rounded-full">
        <DzyneMark className="text-primary w-[40%]" />
      </div>
    </div>
  );
}

/** The "AI agents" section: a 2×2 agent grid orbiting the dzyne mark. */
function AiAgents() {
  return (
    <section
      aria-labelledby="ai-agents-heading"
      className="bg-background relative overflow-hidden py-16 sm:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1190px] px-5 sm:px-8 lg:px-0">
        <h2
          id="ai-agents-heading"
          className="font-heading text-center text-4xl leading-[0.92] font-semibold tracking-[-0.03em] text-[#111827] sm:text-5xl lg:text-[56px]"
        >
          Simple to <span className="text-primary">set up and use AI agents</span>
          <span className="block">for every users need</span>
        </h2>

        {/* Stage: absolute corners at lg, a plain flowing grid below it. */}
        <div className="relative mt-12 lg:mt-16 lg:h-[520px]">
          {/* Full-bleed rules that run behind the whole section in the design. */}
          <span
            aria-hidden="true"
            className="absolute top-[256px] left-1/2 hidden h-px w-screen -translate-x-1/2 bg-[#f3e4da] lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute top-[264px] left-1/2 hidden h-px w-screen -translate-x-1/2 bg-[#f3e4da] lg:block"
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 1190 520"
            fill="none"
            className="pointer-events-none absolute inset-0 hidden size-full text-[#f3e4da] lg:block"
          >
            {CONNECTORS.map((d) => (
              <path key={d} d={d} stroke="currentColor" strokeWidth={1} />
            ))}
          </svg>

          <AgentBadge className="mx-auto size-[144px] lg:absolute lg:top-1/2 lg:left-1/2 lg:size-[155px] lg:-translate-x-1/2 lg:-translate-y-1/2" />

          <ul className="mt-10 grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:mt-0 lg:block">
            {AGENTS.map((agent) => (
              <li
                key={agent.title}
                className={`relative w-full max-w-[246px] overflow-hidden rounded-lg border border-[#f1e8e3] bg-white lg:absolute lg:w-[246px] ${agent.position}`}
              >
                <div className="flex items-center gap-2.5 px-4 py-3.5">
                  <Image
                    src={agent.avatar}
                    alt=""
                    width={28}
                    height={28}
                    className="size-7 shrink-0 rounded-full object-cover"
                  />
                  <h3 className="font-heading text-lg leading-none font-medium text-[#111827]">
                    {agent.title}
                  </h3>
                </div>
                <div className="border-t border-[#f1e8e3] bg-[#f7f6f5] px-4 py-3.5">
                  <p className="font-heading text-[13px] leading-[1.25] text-[#111827]">
                    {agent.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className={`bg-primary absolute top-12 h-4 w-[3px] ${
                    agent.side === "left" ? "right-0" : "left-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export { AiAgents };
