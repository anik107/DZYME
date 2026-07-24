"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import { SocialButton } from "@/components/ui/social-button";
import { LabeledDivider } from "@/components/ui/labeled-divider";
import { emailAuthSchema, type EmailAuthValues } from "@/features/auth/schemas";

type EmailAuthFormProps = {
  /** Label for the primary submit button (e.g. "Sign up" / "Log in"). */
  submitLabel?: string;
};

/**
 * Email + social entry point of the auth flow. Validates the address with Zod
 * and hands off to the OTP step, carrying the email along in the query string.
 */
function EmailAuthForm({ submitLabel = "Sign up" }: EmailAuthFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<EmailAuthValues>({
    resolver: zodResolver(emailAuthSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const onSubmit = handleSubmit((values) => {
    router.push(`/verify?email=${encodeURIComponent(values.email)}`);
  });

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-8" noValidate>
      <div className="flex w-full flex-col gap-4">
        <SocialButton
          icon={
            <Image src="/assets/auth/google.svg" alt="" width={24} height={24} />
          }
        >
          Continue with Google
        </SocialButton>
        <SocialButton
          icon={
            <Image
              src="/assets/auth/linkedin.svg"
              alt=""
              width={24}
              height={24}
            />
          }
        >
          Continue with Linkedin
        </SocialButton>
      </div>

      <LabeledDivider>OR</LabeledDivider>

      <div className="flex w-full flex-col gap-4">
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="Type your email address"
          error={errors.email?.message}
          {...register("email")}
        />
        <Button
          type="submit"
          size="form"
          disabled={!isValid || isSubmitting}
          className="disabled:bg-primary-tint-strong disabled:text-white disabled:opacity-100"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export { EmailAuthForm };
