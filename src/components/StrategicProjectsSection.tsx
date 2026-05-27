import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const StrategicProjectsSection = () => {
  return (
    <section id="strategic-projects" className="editorial-section" aria-labelledby="strategic-projects-heading">
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
          </AnimatedSection>

          {/* Right column - content */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default StrategicProjectsSection;
