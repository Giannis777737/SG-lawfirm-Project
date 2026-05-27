import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";
import { Building, Zap, Hammer, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Building,
    title: "Infrastructure",
    description:
      "Strategic counsel on large-scale public works, concessions and PPP frameworks shaping national connectivity.",
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "Regulatory and transactional guidance across renewables, transition assets and cross-border energy ventures.",
  },
  {
    icon: Hammer,
    title: "Real Estate Development",
    description:
      "End-to-end support for landmark developments — from acquisition and zoning to execution and exit.",
  },
];

const stages = [
  "Due Diligence",
  "Structuring",
  "Negotiation",
  "Compliance",
  "Execution",
];

const StrategicProjectsSection = () => {
  return (
    <section
      id="strategic-projects"
      className="editorial-section bg-secondary/30"
      aria-labelledby="strategic-projects-heading"
    >
      <SectionLogo title="Strategic Projects" />
      <div className="editorial-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <AnimatedSection className="lg:col-span-5">
            <AnimatedItem>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — Mandates
              </span>
            </AnimatedItem>
            <AnimatedItem>
              <h2
                id="strategic-projects-heading"
                className="editorial-heading-lg mt-6"
              >
                Strategic
                <br />
                <span className="italic font-light">Projects</span>
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-7 lg:pt-6">
            <AnimatedItem>
              <p className="editorial-body text-lg">
                The firm advises on significant national and cross-border
                projects — providing legal architecture at every stage, from
                early due diligence to flawless execution.
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 mb-20">
          {pillars.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <AnimatedItem>
                <article className="group relative h-full bg-background p-10 flex flex-col gap-8 transition-colors duration-500 hover:bg-primary hover:text-primary-foreground overflow-hidden">
                  <div className="flex items-start justify-between">
                    <span className="font-body text-xs tabular-nums opacity-60">
                      0{i + 1} / 03
                    </span>
                    <ArrowUpRight
                      className="w-5 h-5 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                      strokeWidth={1.2}
                    />
                  </div>

                  <Icon className="w-12 h-12" strokeWidth={0.8} />

                  <div className="mt-auto">
                    <h3 className="font-heading text-3xl leading-tight mb-4">
                      {title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed opacity-80">
                      {description}
                    </p>
                  </div>
                </article>
              </AnimatedItem>
            </AnimatedSection>
          ))}
        </div>

        {/* Process timeline */}
        <AnimatedSection>
          <AnimatedItem>
            <div className="flex items-baseline justify-between border-b border-border/40 pb-4 mb-10">
              <span className="font-heading text-sm uppercase tracking-widest text-muted-foreground">
                End-to-end engagement
              </span>
              <span className="font-body text-xs text-muted-foreground">
                Process
              </span>
            </div>
          </AnimatedItem>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-10">
            {stages.map((stage, i) => (
              <AnimatedItem key={stage}>
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-body text-xs tabular-nums text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="h-px bg-border/60 w-full" />
                  <h4 className="font-heading text-lg text-foreground leading-tight">
                    {stage}
                  </h4>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StrategicProjectsSection;
