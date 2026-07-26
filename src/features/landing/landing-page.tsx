import { Footer } from "@/components/layout/footer";
import { AiAgents } from "@/features/landing/components/ai-agents";
import { Feature } from "@/features/landing/components/feature";
import { Hero } from "@/features/landing/components/hero";
import { ProfessionalTemplates } from "@/features/landing/components/professional-templates";
import { Testimonials } from "@/features/landing/components/testimonials";
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
      <AiAgents />
      <ProfessionalTemplates />
      <Testimonials />
      <Footer />
    </div>
  );
}

export { LandingPage };
