import * as React from "react";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * Centres page content and applies the shared responsive gutter.
 *
 * The Figma canvas is 1440px wide with ~1234px of live content, which maps to a
 * ~1280px max width with a fluid gutter that tightens on small screens.
 */
function Container({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div";

  return (
    <Comp
      data-slot="container"
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}

export { Container };
