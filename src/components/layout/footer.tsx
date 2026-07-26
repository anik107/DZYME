import Link from "next/link";

import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/brand/social-icons";

// TODO: swap the "#" hrefs for real routes once those pages exist.
const LINK_GROUPS = [
  {
    heading: "Legal",
    links: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    heading: "Quick Access",
    links: [
      { label: "Home", href: "/" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
] as const;

// TODO: point these at the real social profiles.
const SOCIALS = [
  { label: "dzyne.me on Facebook", href: "#", Icon: FacebookIcon },
  { label: "dzyne.me on X", href: "#", Icon: XIcon },
  { label: "dzyne.me on LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "dzyne.me on Instagram", href: "#", Icon: InstagramIcon },
] as const;

const CTA_BASE =
  "font-heading inline-flex items-center justify-center rounded-lg border px-10 py-3 text-base font-bold transition-colors";

/** Marketing footer — closing CTA, link columns and socials on a warm gradient. */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fff8f2]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_60%,rgba(241,183,127,0.18)_66%,rgba(241,183,127,0.32)_76%,rgba(241,183,127,0.5)_88%,rgba(241,183,127,0.3)_100%)]"
      />

      {/* Container's gutter, inlined: <Container> pulls in radix-ui and is client-only. */}
      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8 lg:px-8 lg:py-20">
        <div className="flex flex-col">
          <p className="font-heading max-w-[520px] text-2xl leading-[1.1] font-semibold tracking-[-0.02em] text-[#111827] sm:text-3xl">
            <span aria-hidden="true" className="text-primary">
              &ldquo;
            </span>
            Accelerate Your <span className="text-primary">Professional Presence With AI</span>
            <span aria-hidden="true" className="text-primary">
              &rdquo;
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className={`${CTA_BASE} bg-primary text-primary-foreground hover:bg-primary-hover border-transparent`}
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className={`${CTA_BASE} border-primary bg-background text-primary hover:bg-primary-tint`}
            >
              Watch Demo
            </Link>
          </div>

          <p className="font-heading mt-auto pt-16 text-sm text-[#111827]">
            {new Date().getFullYear()} Dzyne.me All rights reserved
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:items-end">
          <div className="flex gap-12 sm:gap-16 lg:justify-end">
            {LINK_GROUPS.map((group) => (
              <nav key={group.heading} aria-label={group.heading} className="lg:text-right">
                <h2 className="font-heading text-base font-semibold text-[#111827]">
                  {group.heading}
                </h2>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-heading hover:text-primary text-sm text-[#4b5563] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <ul className="inline-flex items-center gap-4 self-start rounded-lg bg-[#e8b892]/70 px-4 py-2.5 lg:self-end">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  className="hover:text-primary block text-[#111827] transition-colors"
                >
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
