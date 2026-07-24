import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Horizontal rule with a centred label (e.g. "OR"). Matches the Figma auth
 * divider: 1px `#EFEFEF` rules flanking a Darker Grotesque SemiBold label.
 */
function LabeledDivider({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      role="separator"
      className={cn("flex w-full items-center gap-3", className)}
      {...props}
    >
      <span className="h-px flex-1 bg-border" />
      <span className="font-heading text-base font-semibold text-foreground">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export { LabeledDivider };
