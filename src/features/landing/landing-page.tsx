import { Hero } from "@/features/landing/components/hero";

/**
 * Marketing landing page composition. Sections are appended here as each build
 * step lands (Hero → Features → How it Works → …).
 */
function LandingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
    </div>
  );
}

export { LandingPage };
