import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const ClientsIndustriesSection = () => {
  return (
    <section id="clients-industries" className="editorial-section" aria-labelledby="clients-industries-heading">
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
          </AnimatedSection>

          {/* Right column - content */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-8">
            <AnimatedItem>
              <p className="editorial-body">
                We advise a diverse client base including public institutions, private
                corporations, investment funds, and individuals. Our expertise spans
                sectors such as finance, manufacturing, construction, tourism, and
                telecommunications.
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ClientsIndustriesSection;
