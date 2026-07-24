import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TextFieldProps = React.ComponentProps<"input"> & {
  label?: string;
  error?: string;
};

/**
 * Labelled text input with an inline error slot. `forwardRef` keeps it drop-in
 * compatible with `react-hook-form`'s `register`. Styling matches the Figma
 * "Input field with text" component: 16px padding, 8px radius, #B8B8B8 border.
 */
const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="flex w-full flex-col gap-2">
        {label ? (
          <Label
            htmlFor={inputId}
            className="font-heading text-sm font-semibold text-foreground"
          >
            {label}
          </Label>
        ) : null}
        <Input
          id={inputId}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={cn(
            "h-auto rounded-lg border-input px-4 py-4 font-heading text-base placeholder:text-[#555555] md:text-base",
            error && "border-[#F92D2D] focus-visible:border-[#F92D2D]",
            className,
          )}
          {...props}
        />
        {error ? (
          <p id={errorId} className="font-heading text-sm font-medium text-[#F92D2D]">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);
TextField.displayName = "TextField";

export { TextField };
