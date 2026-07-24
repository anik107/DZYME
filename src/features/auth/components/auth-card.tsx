import * as React from "react";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";

type AuthCardProps = {
  title: string;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared auth card shell — a full-bleed dark logo header over a white body.
 * Matches the Figma "Sign up / Login" and "OTP" cards (530px, 8px radius,
 * 32px section gap, 56px bottom padding).
 */
function AuthCard({
  title,
  subtitle,
  subtitleClassName,
  children,
  className,
}: AuthCardProps) {
  return (
    <section
      className={cn(
        "flex w-full max-w-[530px] flex-col items-center gap-8 overflow-hidden rounded-lg bg-white pb-14 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      <div className="flex w-full justify-center bg-[#111827] px-8 py-8 sm:px-16">
        <Logo className="h-6 text-white" />
      </div>

      <div className="flex w-full flex-col items-center gap-8 px-6 sm:px-8">
        <header className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                "font-heading text-base font-medium text-[#555555]",
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </header>

        {children}
      </div>
    </section>
  );
}

export { AuthCard };
