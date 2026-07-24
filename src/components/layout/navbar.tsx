import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/brand/logo";

/**
 * Floating marketing navbar — a white pill with the wordmark on the left and the
 * auth actions on the right. Matches the Figma landing hero: both actions stay
 * visible on every breakpoint (no hamburger), tightening their padding on
 * mobile.
 */
function Navbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header className={cn("w-full", className)} {...props}>
      <Container>
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-3 rounded-lg bg-background px-2 py-2 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] sm:px-5"
        >
          <Link
            href="/"
            aria-label="dzyne.me home"
            className="inline-flex shrink-0 items-center rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <Logo className="h-3.5 sm:h-6" />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              variant="ghost"
              size="xl"
              className="px-4 py-2 text-sm text-[#111827] sm:px-12 sm:py-[15px] sm:text-base"
            >
              <Link href="/login">Log in</Link>
            </Button>
            <Button
              asChild
              variant="outline-primary"
              size="xl"
              className="px-4 py-2 text-sm sm:px-10 sm:py-3 sm:text-base"
            >
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export { Navbar };
