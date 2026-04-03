import { Link } from "react-router-dom";
import officeImage from "@/assets/office1.webp";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about-us" className="editorial-section" aria-labelledby="about-heading">
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

          <AnimatedItem className="overflow-hidden">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
