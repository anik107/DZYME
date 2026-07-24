import * as React from "react";

import { cn } from "@/lib/utils";

type SocialButtonProps = React.ComponentProps<"button"> & {
  icon: React.ReactNode;
};

/**
 * OAuth provider button — outlined pill with a leading brand icon and centred
 * label. Matches the Figma "Input field WITH ICON" component (16px padding,
 * #B8B8B8 border, 8px radius).
 */
const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ icon, children, className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 py-4 font-heading text-base font-semibold text-foreground transition-colors outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <span className="flex size-6 shrink-0 items-center justify-center">
          {icon}
        </span>
        {children}
      </button>
    );
  },
);
SocialButton.displayName = "SocialButton";

export { SocialButton };
