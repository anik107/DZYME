import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  Database,
  FileText,
  Folder,
  Globe2,
  Link2,
  LockKeyhole,
  MonitorUp,
  MousePointer2,
  RefreshCw,
  Share2,
  UserRound,
} from "lucide-react";

const steps = [
  {
    title: "Create an account.",
    description: "Sign up in under a minute and instantly claim your website address.",
    illustration: <AccountIllustration />,
  },
  {
    title: "Add your info.",
    description:
      "Build your portfolio (usually in minutes). Import from Mendeley or start from scratch.",
    illustration: <SyncIllustration />,
  },
  {
    title: "Share your link.",
    description: "Share your link everywhere: email signature, faculty profile, and social pages.",
    illustration: <ShareIllustration />,
  },
];

function AccountIllustration() {
  return (
    <div className="relative grid size-full place-items-center overflow-hidden bg-[#fffbf8]">
      <div className="absolute size-[78%] rounded-full bg-[#fdf0e8]" />
      <div className="absolute size-[52%] rounded-full bg-[#fff8f3] shadow-[inset_0_0_24px_rgba(207,85,0,0.08)]" />
      <div className="relative z-10 flex w-[58%] flex-col gap-2 rounded-2xl">
        <div className="flex h-8 items-center gap-2 rounded-full bg-white px-3 shadow-[0_7px_17px_rgba(137,71,29,0.08)]">
          <UserRound className="text-primary size-4" strokeWidth={2.5} />
          <span className="h-1 w-12 rounded-full bg-[#efc5aa]" />
        </div>
        <div className="flex h-8 items-center gap-2 rounded-full bg-white px-3 shadow-[0_7px_17px_rgba(137,71,29,0.08)]">
          <LockKeyhole className="text-primary size-3.5" strokeWidth={2.5} />
          <span className="h-1 flex-1 border-t-2 border-dotted border-[#efc5aa]" />
        </div>
      </div>
    </div>
  );
}

function SyncIllustration() {
  const nodeClass = "absolute z-10 size-6 text-[#a94713]";

  return (
    <div className="relative size-full overflow-hidden bg-[#fffbf8]">
      <div className="absolute top-[31%] left-[27%] h-[30%] w-[28%] border-t border-l border-dashed border-[#f0c5aa]" />
      <div className="absolute top-[39%] right-[23%] h-[22%] w-[22%] border-t border-l border-dashed border-[#f0c5aa]" />
      <MonitorUp className={`${nodeClass} top-[24%] left-[24%]`} strokeWidth={1.5} />
      <FileText className={`${nodeClass} top-[16%] left-[48%]`} strokeWidth={1.5} />
      <Folder className={`${nodeClass} top-[27%] right-[25%]`} strokeWidth={1.5} />
      <Database className={`${nodeClass} top-[35%] right-[11%]`} strokeWidth={1.5} />
      <div className="absolute bottom-[16%] left-1/2 grid size-[40%] -translate-x-1/2 place-items-center rounded-[2rem] bg-[#efc5aa]">
        <RefreshCw className="text-primary size-[42%]" strokeWidth={2} />
      </div>
    </div>
  );
}

function ShareIllustration() {
  return (
    <div className="relative grid size-full place-items-center overflow-hidden bg-[#fffbf8]">
      <Globe2 className="size-[49%] text-[#efc5aa]" strokeWidth={1.7} />
      <MousePointer2
        className="fill-primary text-primary absolute right-[23%] bottom-[25%] size-[30%]"
        strokeWidth={1.5}
      />
      <span className="absolute top-[49%] left-[15%] grid size-9 place-items-center rounded-full bg-white">
        <Link2 className="size-4 text-[#a94713]" strokeWidth={1.5} />
      </span>
      <span className="absolute top-[22%] left-[21%] grid size-9 place-items-center rounded-full bg-white">
        <Share2 className="size-4 text-[#a94713]" strokeWidth={1.5} />
      </span>
      <span className="absolute top-[23%] right-[17%] grid size-9 place-items-center rounded-full bg-white">
        <Cloud className="size-4 text-[#a94713]" strokeWidth={1.5} />
      </span>
    </div>
  );
}
/** The three-step onboarding and social-proof panel from the landing page. */
function WorkingProcess() {
  return (
    <section
      aria-labelledby="working-process-heading"
      className="relative overflow-hidden bg-[#fdfcfb] py-16 sm:py-20 lg:min-h-[1127px] lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_28%,rgba(241,221,210,0.45),transparent_30%),linear-gradient(145deg,transparent_45%,rgba(238,235,232,0.75)_72%,transparent_100%)]" />
      <div className="relative mx-auto w-full max-w-[1190px] px-5 sm:px-8 lg:px-0">
        <div className="max-w-[760px]">
          <p className="font-heading text-[24px] leading-[26px] font-medium tracking-[0] text-[#0057ff]">
            How it Works
          </p>
          <h2
            id="working-process-heading"
            className="font-heading mt-1 text-4xl leading-[0.92] font-medium tracking-[-0.03em] text-[#111827] sm:text-5xl"
          >
            Get started in minutes, see
            <span className="block">
              results <span className="text-primary">in hours</span>
            </span>
          </h2>
          <p className="font-heading mt-3 text-sm text-[#111827]">
            We&apos;re here to help! Start with our simple 3-step process, and access our support
            team whenever you need them.
          </p>
        </div>

        <ol className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-[#f1e8e3] bg-white p-4">
              <div className="aspect-[1.1/0.92] overflow-hidden rounded-sm">
                {step.illustration}
              </div>
              <h3 className="font-heading mt-5 text-base leading-none font-medium text-[#111827]">
                {index + 1}.{step.title}
              </h3>
              <p className="font-heading mt-2 text-xs leading-[1.1] text-[#111827]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="relative mt-5 min-h-[300px] overflow-hidden rounded-lg bg-[linear-gradient(90deg,#111827_0%,#111827_48%,#2A1C1A_68%,#4B2B20_82%,#6A3828_100%)] px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:min-h-[375px] sm:px-14 sm:py-14">
          <Image
            src="/assets/landing/hero-overlay.svg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-30"
          />

          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_50%,rgba(255,115,80,0.22)_0%,rgba(255,115,80,0.08)_35%,transparent_70%)]" />

          {/* Gradient Overlay */}
          <div className="absolute inset-y-0 right-0 w-[55%]">
            <div className="absolute inset-0 bg-gradient-to-l from-[#7b3b25]/50 via-[#5b2d20]/25 to-transparent" />
          </div>

          {/* Ribbon */}
          <div className="pointer-events-none absolute top-[29px] left-[490px] h-[483px] w-[1074px]">
            <Image
            src="/assets/landing/hero-overlay.svg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-30"
          />

            <Image
              src="/ribbon-artwork.png"
              alt=""
              fill
              priority
              className="object-contain object-left-top"
            />
          </div>
          <div className="relative z-10 max-w-[550px]">
            <p className="font-heading text-4xl leading-[0.94] font-medium tracking-[-0.03em] text-white sm:text-5xl">
              Chosen by 300+ professors to power their online presence.
            </p>
            <Link
              href="/signup"
              className="font-heading text-primary mt-6 inline-flex rounded-md bg-white px-10 py-3 text-sm font-semibold transition-colors hover:bg-[#fff5ef]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WorkingProcess };
