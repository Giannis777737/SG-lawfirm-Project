import officeImage from "@/assets/office1.webp";
import firmLogo from "@/assets/firm-logo.png";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about-us" aria-labelledby="about-heading">
      {/* "What we do" blue banner with geometric X-logo overlay */}
      <div
        className="relative w-full overflow-hidden bg-[hsl(220_85%_55%)] flex items-center"
        style={{ minHeight: "180px" }}
        aria-hidden="false"
      >
        {/* Decorative oversized faded logo on the left (creates the triangle/X look) */}
        <img
          src={firmLogo}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[260%] w-auto opacity-90 pointer-events-none select-none"
          style={{ filter: "brightness(0) invert(1)", left: "-2%" }}
        />
        <div className="editorial-container relative z-10 w-full">
          <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-6xl font-normal text-center tracking-tight">
            What we do
          </h2>
        </div>
      </div>

      <div className="editorial-section">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <p className="editorial-label" aria-hidden="true">about us</p>
            </AnimatedItem>

            <AnimatedItem>
              <h2 id="about-heading" className="editorial-heading-sm">
                A Greek law firm with a unique international orientation
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <p className="editorial-body">
                Selekos-Gouskou &amp; Co Law Offices was established in 1998 with the aim to be a
                dynamic, "niche" culture law firm and has since grown steadily.
              </p>
            </AnimatedItem>

            <AnimatedItem>
              <p className="editorial-body">
                Our clients operate in many different fields, notably financial services, 
                international trade and commodities, manufacturing and broadcasting. They include 
                large public corporations, Greek private corporations, institutions, private 
                foundations and individuals as well as companies with international activities.
              </p>
            </AnimatedItem>

          </AnimatedSection>

          <AnimatedSection className="overflow-hidden">
            <AnimatedItem>
              <img
                src={officeImage}
                alt="Modern interior of the Selekos Gouskou law office with natural lighting"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                width={700}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
