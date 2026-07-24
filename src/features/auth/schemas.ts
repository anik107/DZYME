import { z } from "zod";

/** Email step of the auth flow. Message mirrors the Figma error state. */
export const emailAuthSchema = z.object({
  email: z
    .string()
    .min(1, "Email type is not correct")
    .email("Email type is not correct"),
});

export type EmailAuthValues = z.infer<typeof emailAuthSchema>;

/** OTP verification step — a 6-character code. */
export const otpSchema = z.object({
  code: z.string().length(6, "OTP is not correct"),
});

export type OtpValues = z.infer<typeof otpSchema>;
