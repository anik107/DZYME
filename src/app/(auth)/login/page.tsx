import type { Metadata } from "next";

import { AuthCard } from "@/features/auth/components/auth-card";
import { EmailAuthForm } from "@/features/auth/components/email-auth-form";

export const metadata: Metadata = {
  title: "Log in · dzyne.me",
  description: "Log in to your dzyne.me account.",
};

export default function LoginPage() {
  return (
    <AuthCard title="Welcome to Dzyne.me" subtitle="Publish your portfolio">
      <EmailAuthForm submitLabel="Log in" />
    </AuthCard>
  );
}
