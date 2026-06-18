import SectionLogo from "@/components/SectionLogo";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const coreValues = [
  { title: "Excellence", description: "Delivering high-quality legal advice with precision and depth." },
  { title: "Integrity", description: "Acting with honesty, ethics, and responsibility." },
  { title: "Client Focus", description: "Providing bespoke services aligned with client objectives." },
  { title: "Innovation", description: "Adapting to evolving markets and modern business challenges." },
];

const PhilosophySection = () => {
  return (
    <section className="editorial-section" aria-labelledby="philosophy-heading" id="philosophy">
      <SectionLogo title="Philosophy & Core Values" />
      <div className="editorial-container">
        <AnimatedSection className="mb-12">
          <AnimatedItem>
            <h2 id="philosophy-heading" className="editorial-heading-sm">
              Philosophy & Core Values
            </h2>
          </AnimatedItem>
        </AnimatedSection>
        <AnimatedSection>
          <AnimatedItem>
            <p className="editorial-body mb-10">
              Our work is guided by four core principles:
            </p>
          </AnimatedItem>
          <ul className="flex flex-col" role="list">
            {coreValues.map((item) => (
              <AnimatedItem as="li" key={item.title} className="border-b border-border py-5 first:border-t">
                <div className="flex flex-col gap-1">
                  <span className="font-body text-base md:text-lg font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="font-body text-base md:text-lg text-muted-foreground">
                    {item.description}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PhilosophySection;
