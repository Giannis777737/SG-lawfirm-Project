import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 112;
    const top = Math.max(el.getBoundingClientRect().top + window.scrollY - offset, 0);
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-[12vh] overflow-hidden" aria-labelledby="hero-heading">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="editorial-container relative z-10">
        <AnimatedSection className="flex flex-col gap-8 max-w-2xl">
          <AnimatedItem>
            <h1 id="hero-heading" className="editorial-heading text-white">
              <span className="block">Selekos – Gouskou &amp; Co</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">Law Offices</span>
            </h1>
          </AnimatedItem>

          <AnimatedItem>
            <p className="editorial-label text-gold font-semibold text-center">Business Lawyer Office</p>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
