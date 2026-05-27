import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const pillars = [
  {
    title: "Infrastructure",
    description:
      "Counsel on large-scale public works, concessions and public–private partnership frameworks of national significance.",
  },
  {
    title: "Energy",
    description:
      "Regulatory and transactional guidance across conventional, renewable and transition assets, including cross-border ventures.",
  },
  {
    title: "Real Estate Development",
    description:
      "Comprehensive support for landmark developments, from acquisition and planning through to execution and exit.",
  },
];

const stages = [
  { title: "Due Diligence", description: "Rigorous assessment of legal, regulatory and commercial exposure." },
  { title: "Structuring", description: "Tailored frameworks aligned with strategic and fiscal objectives." },
  { title: "Negotiation", description: "Disciplined representation in high-stakes commercial dialogue." },
  { title: "Execution", description: "Precise closing and post-completion support across jurisdictions." },
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column — sticky title */}
          <AnimatedSection className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-40 lg:self-start">
            <AnimatedItem>
              <span className="editorial-label">— Section III</span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 id="strategic-projects-heading" className="editorial-heading-sm">
                Strategic Projects
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="editorial-body">
                The firm advises on significant national and cross-border
                mandates, providing legal architecture from inception through
                completion.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right column — content */}
          <AnimatedSection delay={0.15} className="lg:col-span-8 flex flex-col gap-16">
            {/* Pillars */}
            <div>
              <AnimatedItem>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Areas of engagement
                  </span>
                  <span className="font-body text-xs tabular-nums text-muted-foreground">
                    01
                  </span>
                </div>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {pillars.map((item, i) => (
                  <AnimatedItem key={item.title}>
                    <li className="border-t border-border py-6 last:border-b">
                      <div className="grid grid-cols-12 gap-6 items-baseline">
                        <span className="col-span-1 font-body text-xs tabular-nums text-muted-foreground pt-1">
                          0{i + 1}
                        </span>
                        <h3 className="col-span-11 md:col-span-4 font-heading text-xl md:text-2xl text-foreground leading-tight">
                          {item.title}
                        </h3>
                        <p className="col-span-12 md:col-span-7 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  </AnimatedItem>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <AnimatedItem>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    End-to-end engagement
                  </span>
                  <span className="font-body text-xs tabular-nums text-muted-foreground">
                    02
                  </span>
                </div>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {stages.map((item, i) => (
                  <AnimatedItem key={item.title}>
                    <li className="border-t border-border py-5 last:border-b">
                      <div className="grid grid-cols-12 gap-6 items-baseline">
                        <span className="col-span-1 font-body text-xs tabular-nums text-muted-foreground">
                          0{i + 1}
                        </span>
                        <h4 className="col-span-11 md:col-span-4 font-heading text-lg md:text-xl text-foreground">
                          {item.title}
                        </h4>
                        <p className="col-span-12 md:col-span-7 font-body text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
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
