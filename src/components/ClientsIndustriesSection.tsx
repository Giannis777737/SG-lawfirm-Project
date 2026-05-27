import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";
import { Building2, Landmark, TrendingUp, User, Banknote, Factory, HardHat, Plane, Radio } from "lucide-react";

const clients = [
  { icon: Landmark, label: "Public Institutions" },
  { icon: Building2, label: "Private Corporations" },
  { icon: TrendingUp, label: "Investment Funds" },
  { icon: User, label: "Individuals" },
];

const sectors = [
  { icon: Banknote, label: "Finance" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HardHat, label: "Construction" },
  { icon: Plane, label: "Tourism" },
  { icon: Radio, label: "Telecommunications" },
];

const ClientsIndustriesSection = () => {
  return (
    <section
      id="clients-industries"
      className="editorial-section"
      aria-labelledby="clients-industries-heading"
    >
      <SectionLogo title="Clients & Industries" />
      <div className="editorial-container">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <AnimatedSection className="lg:col-span-5">
            <AnimatedItem>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — Reach
              </span>
            </AnimatedItem>
            <AnimatedItem>
              <h2
                id="clients-industries-heading"
                className="editorial-heading-lg mt-6"
              >
                Clients <span className="italic font-light">&</span>
                <br />
                Industries
              </h2>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-7 lg:pt-6">
            <AnimatedItem>
              <p className="editorial-body text-lg">
                We advise a diverse client base — from sovereign institutions to
                private founders — across the sectors shaping the modern Greek
                and cross-border economy.
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>

        {/* Clients */}
        <AnimatedSection className="mb-20">
          <AnimatedItem>
            <div className="flex items-baseline justify-between border-b border-border/40 pb-4 mb-10">
              <span className="font-heading text-sm uppercase tracking-widest text-muted-foreground">
                Who we represent
              </span>
              <span className="font-body text-xs text-muted-foreground">01 / 02</span>
            </div>
          </AnimatedItem>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
            {clients.map(({ icon: Icon, label }, i) => (
              <AnimatedItem key={label} delay={i * 0.05}>
                <div className="group relative h-44 bg-background flex flex-col justify-between p-6 transition-colors duration-500 hover:bg-primary/5">
                  <Icon
                    className="w-7 h-7 text-primary/80 transition-transform duration-500 group-hover:-translate-y-1"
                    strokeWidth={1.2}
                  />
                  <div>
                    <span className="font-body text-[10px] text-muted-foreground tabular-nums">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-xl text-foreground leading-tight mt-1">
                      {label}
                    </h3>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        {/* Sectors */}
        <AnimatedSection>
          <AnimatedItem>
            <div className="flex items-baseline justify-between border-b border-border/40 pb-4 mb-10">
              <span className="font-heading text-sm uppercase tracking-widest text-muted-foreground">
                Sectors we serve
              </span>
              <span className="font-body text-xs text-muted-foreground">02 / 02</span>
            </div>
          </AnimatedItem>
          <div className="flex flex-wrap gap-3">
            {sectors.map(({ icon: Icon, label }, i) => (
              <AnimatedItem key={label} delay={i * 0.05}>
                <div className="group inline-flex items-center gap-3 border border-border/60 rounded-full pl-4 pr-6 py-3 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon className="w-4 h-4" strokeWidth={1.4} />
                  <span className="font-heading text-base">{label}</span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClientsIndustriesSection;
