import { Link } from "react-router-dom";
import officeImage from "@/assets/office1.webp";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about-us" aria-labelledby="about-heading">
      {/* Blue banner with angular logo shape */}
      <div className="relative bg-primary overflow-hidden py-10 sm:py-14 md:py-16">
        <svg
          className="absolute left-0 top-0 h-full w-auto opacity-20"
          viewBox="0 0 120 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0 0 L60 100 L0 200 L40 200 L100 100 L40 0 Z" fill="white" />
        </svg>
        <div className="editorial-container relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white">
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

            <AnimatedItem>
              <div className="pt-4">
                <Link to="/#areas-of-expertise" className="editorial-link">
                  read more <span aria-hidden="true">→</span>
                  <span className="sr-only">about our areas of expertise</span>
                </Link>
              </div>
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
    </section>
  );
};

export default AboutSection;
