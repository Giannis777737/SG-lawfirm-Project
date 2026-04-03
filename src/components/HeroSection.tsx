import { Link } from "react-router-dom";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="editorial-container relative z-10 py-28 sm:py-36 md:py-48">
        <AnimatedSection className="flex flex-col gap-8 max-w-2xl">
          <AnimatedItem>
            <p className="editorial-label text-gold font-semibold" aria-hidden="true">Corporate &amp; Commercial Law</p>
          </AnimatedItem>

          <AnimatedItem>
            <h1 id="hero-heading" className="editorial-heading text-white">
              A Dynamic Niche
              <br />
              Culture Law Firm
            </h1>
          </AnimatedItem>

          <AnimatedItem>
            <p className="editorial-body text-white/85">
              Established in 1998 with the aim to be a dynamic, "niche" culture law firm, 
              Selekos-Gouskou &amp; Co has since grown steadily into a trusted name in Greek legal practice.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="pt-4">
                <Link to="/#about-us" className="editorial-btn bg-navy text-gold font-bold hover:bg-navy-light">
                find out more
                <span aria-hidden="true" className="text-lg">→</span>
                </Link>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
