import officeImage from "@/assets/office1.webp";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const AboutSection = () => {
  return (
    <section id="about-us" className="editorial-section" aria-labelledby="about-heading">
      <SectionLogo title="About Us" />
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <h2 id="about-heading" className="editorial-heading-sm">
                About the Firm
              </h2>
            </AnimatedItem>

            <AnimatedItem>
            <p className="editorial-body">
                Founded in 1998, Selekos & Gouskou Law Offices has established itself as a
                dynamic and specialized firm, providing high-quality legal services across a wide
                range of sectors. Combining deep academic knowledge with commercial awareness,
                the firm offers strategic legal solutions tailored to the needs of each client.
                Our team advises corporations, institutions, and private entities operating in
                both domestic and international markets.
              </p>
            </AnimatedItem>

            <AnimatedItem>
              <p className="editorial-body">
                The firm’s philosophy is based on professionalism, integrity, and continuous
                development. We focus on building long-term relationships with our clients,
                ensuring consistency, discretion, and efficiency in every case.
              </p>
            </AnimatedItem>

          </AnimatedSection>

          <AnimatedSection className="overflow-hidden group">
            <AnimatedItem>
              <div className="overflow-hidden w-full h-[300px] sm:h-[400px] lg:h-[600px]">
                <img
                  src={officeImage}
                  alt="Modern interior of the Selekos-Gouskou & Co law office with natural lighting"
                  className="w-full h-full object-cover animate-ken-burns motion-reduce:animate-none transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  width={700}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
