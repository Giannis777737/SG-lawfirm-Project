import { Scale } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const clients = [
  "Public Institutions",
  "Private Corporations",
  "Investment Funds",
  "Individuals",
];

const sectors = [
  "Finance",
  "Manufacturing",
  "Construction",
  "Tourism",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - heading */}
          <AnimatedSection className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
            <AnimatedItem>
              <h2 id="clients-industries-heading" className="editorial-heading-sm">
                Clients & Industries
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="editorial-body">
                We advise a diverse client base including public institutions, private
                corporations, investment funds, and individuals. Our expertise spans
                sectors such as finance, manufacturing, construction, tourism, and
                telecommunications.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right column - lists */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-14">
            <div>
              <AnimatedItem>
                <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-4">
                  Whom we represent
                </span>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {clients.map((label) => (
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
                  Sectors of expertise
                </span>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {sectors.map((label) => (
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

export default ClientsIndustriesSection;
