import { Feature } from "@/features/landing/components/feature";
import { Hero } from "@/features/landing/components/hero";
import { WorkingProcess } from "@/features/landing/components/WorkingProcess";

/**
 * Marketing landing page composition. Sections are appended here as each build
 * step lands (Hero → Features → How it Works → …).
 */
function LandingPage() {
  return (
    <div className="flex flex-1 flex-col gap-10 sm:gap-12">
      <Hero />
      <Feature />
      <WorkingProcess />
    </div>
  );
}

export { LandingPage };
