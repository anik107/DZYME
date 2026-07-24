import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Triple-sparkle "AI" glyph from the Figma design system (node 34:210).
 * Stroked with `currentColor` so callers set the tone via text colour.
 */
function AiSparkle({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6", className)}
      {...props}
    >
      <path
        d="M14.7059 18.125C15.7647 14.9068 16.9347 13.7456 20 12.875C16.9347 12.0044 15.7647 10.8432 14.7059 7.625C13.6471 10.8432 12.4771 12.0044 9.41176 12.875C12.4771 13.7456 13.6471 14.9068 14.7059 18.125ZM7.64706 10.25C8.17647 8.64 8.76147 8.05988 10.2941 7.625C8.76147 7.19012 8.17647 6.61 7.64706 5C7.11765 6.61 6.53265 7.19012 5 7.625C6.53265 8.05988 7.11765 8.64 7.64706 10.25ZM8.97059 19C9.23529 18.195 9.52735 17.9054 10.2941 17.6875C9.52735 17.4696 9.23529 17.18 8.97059 16.375C8.70588 17.18 8.41382 17.4696 7.64706 17.6875C8.41382 17.9054 8.70588 18.195 8.97059 19Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { AiSparkle };
