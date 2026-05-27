import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const values = [
  {
    title: "Excellence",
    description: "Delivering high-quality legal advice with precision and depth.",
  },
  {
    title: "Integrity",
    description: "Acting with honesty, ethics, and responsibility.",
  },
  {
    title: "Client Focus",
    description: "Providing bespoke services aligned with client objectives.",
  },
  {
    title: "Innovation",
    description: "Adapting to evolving markets and modern business challenges.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="editorial-section" aria-labelledby="philosophy-heading">
      <SectionLogo title="Philosophy &amp; Core Values" />
      <div className="editorial-container">
        <AnimatedSection className="flex flex-col gap-12">
          <AnimatedItem>
            <p className="editorial-label">Our work is guided by four core principles:</p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col gap-3 border-t border-border pt-6">
                  <h3 className="text-lg md:text-xl font-medium text-foreground tracking-tight">
                    {value.title}
                  </h3>
                  <p className="editorial-body !max-w-none">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PhilosophySection;
