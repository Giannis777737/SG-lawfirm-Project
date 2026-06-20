import { Scale } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const pillars = ["Infrastructure", "Energy", "Real Estate Development"];

const stages = [
  "Due Diligence",
  "Structuring",
  "Negotiation",
  "Execution",
  "Compliance",
];

const StrategicProjectsSection = () => {
  return (
    <section
      id="strategic-projects"
      className="editorial-section"
      aria-labelledby="strategic-projects-heading"
    >
      <SectionLogo title="Strategic Projects" />
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - heading */}
          <AnimatedSection className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
            <AnimatedItem>
              <h2 id="strategic-projects-heading" className="editorial-heading-sm">
                Strategic Projects
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="editorial-body">
                Our firm has participated in significant national and cross-border
                projects, providing legal guidance in areas such as infrastructure,
                energy, and real estate development. We offer end-to-end support
                from due diligence to execution, ensuring compliance, clarity, and risk
                mitigation at every stage.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right column - lists */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-14">
            <div>
              <AnimatedItem>
                <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                  Areas of engagement
                </span>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {pillars.map((label) => (
                  <AnimatedItem as="li" key={label} className="border-b border-border py-5 first:border-t flex items-center gap-4">
                    <Scale size={14} className="text-gold/60 shrink-0" aria-hidden="true" />
                    <span className="font-body text-base md:text-lg text-foreground">
                      {label}
                    </span>
                  </AnimatedItem>
                ))}
              </ul>
            </div>

            <div>
              <AnimatedItem>
                <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                  End-to-end engagement
                </span>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {stages.map((label) => (
                  <AnimatedItem as="li" key={label} className="border-b border-border py-5 first:border-t flex items-center gap-4">
                    <Scale size={14} className="text-gold/60 shrink-0" aria-hidden="true" />
                    <span className="font-body text-base md:text-lg text-foreground">
                      {label}
                    </span>
                  </AnimatedItem>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default StrategicProjectsSection;
