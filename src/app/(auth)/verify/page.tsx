import type { Metadata } from "next";
import { Suspense } from "react";

import { OtpForm } from "@/features/auth/components/otp-form";

export const metadata: Metadata = {
  title: "Verify email · dzyne.me",
  description: "Enter the 6-character code we emailed you.",
};

export default function VerifyPage() {
  return (
    <Suspense>
      <OtpForm />
    </Suspense>
  );
}
