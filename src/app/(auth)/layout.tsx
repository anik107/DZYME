import Image from "next/image";

/**
 * Centres the auth cards on the soft `#F6F6F6` surface with the faint abstract
 * backdrop from Figma (15% opacity).
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-secondary px-4 py-12">
      <Image
        src="/assets/auth/auth-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-[0.15]"
      />
      {children}
    </main>
  );
}
