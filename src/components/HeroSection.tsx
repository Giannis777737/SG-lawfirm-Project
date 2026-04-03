import heroImage from "@/assets/hero-athens.jpg";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const HeroSection = () => {
  return (
    <section className="editorial-section pt-28 sm:pt-36 md:pt-48" aria-labelledby="hero-heading">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedItem className="order-2 lg:order-1 overflow-hidden">
            <img
              src={heroImage}
              alt="Panoramic view of the Acropolis of Athens illuminated at dusk, representing our Greek legal heritage"
              className="w-full h-[300px] sm:h-[400px] lg:h-[700px] object-cover"
              width={700}
              height={700}
              fetchPriority="high"
              decoding="sync"
            />
          </AnimatedItem>

          <AnimatedSection className="order-1 lg:order-2 flex flex-col gap-8">
            <AnimatedItem>
              <p className="editorial-label text-gold font-semibold" aria-hidden="true">Corporate &amp; Commercial Law</p>
            </AnimatedItem>

            <AnimatedItem>
              <h1 id="hero-heading" className="editorial-heading">
                A Dynamic Niche
                <br />
                Culture Law Firm
              </h1>
            </AnimatedItem>

            <AnimatedItem>
              <p className="editorial-body">
                Established in 1998 with the aim to be a dynamic, "niche" culture law firm, 
                Selekos-Gouskou &amp; Co has since grown steadily into a trusted name in Greek legal practice.
              </p>
            </AnimatedItem>

            <AnimatedItem>
              <div className="pt-4">
                <a href="#about-us" className="editorial-btn bg-navy text-gold font-bold hover:bg-navy-light">
                  find out more
                  <span aria-hidden="true" className="text-lg">→</span>
                </a>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
