import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const clients = [
  { title: "Public Institutions", description: "Ministries, agencies and regulated bodies operating at the intersection of policy and law." },
  { title: "Private Corporations", description: "Domestic and multinational enterprises across regulated and competitive markets." },
  { title: "Investment Funds", description: "Institutional investors, private equity and family offices pursuing strategic mandates." },
  { title: "Private Individuals", description: "High-net-worth clients and founders seeking discreet, considered counsel." },
];

const sectors = [
  "Finance & Banking",
  "Manufacturing",
  "Construction",
  "Tourism & Hospitality",
  "Telecommunications",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column — sticky title */}
          <AnimatedSection className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-40 lg:self-start">
            <AnimatedItem>
              <span className="editorial-label">— Section IV</span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 id="clients-industries-heading" className="editorial-heading-sm">
                Clients & Industries
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="editorial-body">
                We advise a diverse client base across the sectors shaping the
                Greek and cross-border economy.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right column — content */}
          <AnimatedSection delay={0.15} className="lg:col-span-8 flex flex-col gap-16">
            {/* Clients */}
            <div>
              <AnimatedItem>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Whom we represent
                  </span>
                  <span className="font-body text-xs tabular-nums text-muted-foreground">
                    01
                  </span>
                </div>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {clients.map((item, i) => (
                  <AnimatedItem key={item.title}>
                    <li className="border-t border-border py-6 last:border-b group">
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

            {/* Sectors */}
            <div>
              <AnimatedItem>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Sectors of expertise
                  </span>
                  <span className="font-body text-xs tabular-nums text-muted-foreground">
                    02
                  </span>
                </div>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {sectors.map((sector, i) => (
                  <AnimatedItem key={sector}>
                    <li className="border-t border-border py-5 last:border-b">
                      <div className="flex items-baseline gap-6">
                        <span className="font-body text-xs tabular-nums text-muted-foreground w-6">
                          0{i + 1}
                        </span>
                        <span className="font-heading text-lg md:text-xl text-foreground">
                          {sector}
                        </span>
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

export default ClientsIndustriesSection;
