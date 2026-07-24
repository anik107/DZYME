import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Renders Figma copy that uses `{ts4}…{/ts4}` markers to tint a portion of the
 * string in the brand orange (design token `ts4` = `#CC5500`). Reused across the
 * landing sections for their two-tone headings.
 */
function HighlightText({
  text,
  highlightClassName,
}: {
  text: string;
  highlightClassName?: string;
}) {
  const segments = text.split(/(\{ts4\}[\s\S]*?\{\/ts4\})/g);

  return (
    <>
      {segments.map((segment, index) => {
        const match = segment.match(/^\{ts4\}([\s\S]*)\{\/ts4\}$/);
        if (match) {
          return (
            <span key={index} className={cn("text-primary", highlightClassName)}>
              {match[1]}
            </span>
          );
        }
        return <React.Fragment key={index}>{segment}</React.Fragment>;
      })}
    </>
  );
}

export { HighlightText };
