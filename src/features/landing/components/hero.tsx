"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { HighlightText } from "@/components/ui/highlight-text";
import { AiSparkle } from "@/components/brand/ai-sparkle";

const HEADLINE = "“Build your website by {ts4}Chatting{/ts4}”";

/**
 * Landing hero — a rounded orange panel washed with the plexus/network image
 * and a soft glow. Hosts the floating navbar, the two-tone headline, the "chat"
 * status pill and the primary/secondary calls to action.
 */
function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-6 sm:pt-5 lg:px-10">
      <div className="relative isolate overflow-hidden rounded-lg bg-primary">
        {/* Plexus background — normal blend at 46% over the orange surface. */}
        <Image
          src="/assets/landing/hero-abstract-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 -z-10 object-cover object-[50%_25%] opacity-[0.46]"
        />
        {/* Warm glow anchored bottom-right. */}
        <div className="pointer-events-none absolute -right-24 bottom-[-12rem] -z-10 size-[32rem] rounded-full bg-primary opacity-35 blur-[120px]" />

        <Navbar className="relative z-10 pt-5 sm:pt-8" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-4 pt-16 pb-24 text-center sm:pt-24 sm:pb-32"
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-heading text-4xl leading-[1.05] font-semibold text-[#111827] sm:text-5xl lg:text-[56px] lg:leading-[48px]">
              <HighlightText text={HEADLINE} />
            </h1>
            <p className="font-heading text-base font-medium text-[#111827] sm:text-lg">
              Built for researchers &amp; professionals — live website in minutes,
              no code required, Editable anytime.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-4">
            {/* "Chat" status pill. */}
            <div className="flex w-full items-center gap-2.5 rounded-lg bg-[#111827] px-4 py-4 text-left sm:py-5">
              <AiSparkle className="size-6 shrink-0 text-[#F17720]" />
              <span className="font-heading text-sm font-semibold text-white sm:text-base">
                Make any changes by chatting — your site updates instantly.
              </span>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline-primary"
                size="xl"
                className="w-full bg-background sm:w-auto"
              >
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Hero };
