"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { OtpField } from "@/components/ui/otp-field";
import { AuthCard } from "@/features/auth/components/auth-card";

/**
 * OTP verification step. Reads the pending email from the query string and
 * verifies the 6-character code. Verification is mocked here (correct code:
 * `123456`) — swap `verifyCode` for the real API call.
 */
function OtpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "your email";

  const [code, setCode] = React.useState("");
  const [invalid, setInvalid] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const isComplete = code.length === 6;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isComplete || submitting) return;

    setSubmitting(true);
    // Mock verification — replace with the real request.
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (code === "123456") {
      router.push("/");
    } else {
      setInvalid(true);
    }
    setSubmitting(false);
  }

  return (
    <AuthCard
      title="Verify your email address"
      subtitleClassName="text-foreground"
      subtitle={
        <>
          Check your email, we have sent a 6-character code to {email}. The code
          expires shortly, so please enter it soon.
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-3">
          <OtpField
            value={code}
            onChange={(value) => {
              setCode(value);
              setInvalid(false);
            }}
            invalid={invalid}
            autoFocus
          />
          {invalid ? (
            <p className="text-center font-heading text-sm font-medium text-[#FF5959]">
              OTP is not correct
            </p>
          ) : null}
        </div>

        <Button
          type="submit"
          size="form"
          disabled={!isComplete || submitting}
          className="disabled:bg-primary-tint-strong disabled:text-white disabled:opacity-100"
        >
          Continue
        </Button>
      </form>
    </AuthCard>
  );
}

export { OtpForm };
