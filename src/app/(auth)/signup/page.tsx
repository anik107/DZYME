import type { Metadata } from "next";

import { AuthCard } from "@/features/auth/components/auth-card";
import { EmailAuthForm } from "@/features/auth/components/email-auth-form";

export const metadata: Metadata = {
  title: "Sign up · dzyne.me",
  description: "Create your dzyne.me account and publish your portfolio.",
};

export default function SignupPage() {
  return (
    <AuthCard title="Welcome to Dzyne.me" subtitle="Publish your portfolio">
      <EmailAuthForm submitLabel="Sign up" />
    </AuthCard>
  );
}
