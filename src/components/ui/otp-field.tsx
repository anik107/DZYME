"use client";

import * as React from "react";
import { OTPInput, type SlotProps } from "input-otp";

import { cn } from "@/lib/utils";

function OtpSlot({ slot, invalid }: { slot: SlotProps; invalid?: boolean }) {
  return (
    <div
      className={cn(
        "relative flex size-14 items-center justify-center rounded-lg border-[1.5px] bg-background font-heading text-2xl font-semibold text-foreground transition-all",
        invalid
          ? "border-[#FF5959]"
          : "border-border data-[active=true]:border-primary data-[active=true]:ring-2 data-[active=true]:ring-primary/20",
      )}
      data-active={slot.isActive}
    >
      {slot.char}
      {slot.hasFakeCaret ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      ) : null}
    </div>
  );
}

type OtpFieldProps = {
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  length?: number;
  invalid?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
};

/**
 * Six separated code boxes (56×56, 16px gap) built on `input-otp`. Matches the
 * Figma "OTP" component including the error (red border) state via `invalid`.
 */
function OtpField({
  value,
  onChange,
  onComplete,
  length = 6,
  invalid,
  disabled,
  autoFocus,
  className,
}: OtpFieldProps) {
  return (
    <OTPInput
      maxLength={length}
      value={value}
      onChange={onChange}
      onComplete={onComplete}
      disabled={disabled}
      autoFocus={autoFocus}
      aria-invalid={invalid ? true : undefined}
      containerClassName={cn(
        "flex items-center justify-center gap-4 has-disabled:opacity-50",
        className,
      )}
      render={({ slots }) => (
        <>
          {slots.map((slot, index) => (
            <OtpSlot key={index} slot={slot} invalid={invalid} />
          ))}
        </>
      )}
    />
  );
}

export { OtpField };
