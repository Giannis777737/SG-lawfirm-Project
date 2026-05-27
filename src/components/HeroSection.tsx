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
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
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

      <div className="editorial-container relative z-10 py-28 sm:py-36 md:py-48">
        <AnimatedSection className="flex flex-col gap-8 max-w-2xl">
          <AnimatedItem>
            <p className="editorial-label text-gold font-semibold" aria-hidden="true">Corporate &amp; Commercial Law</p>
          </AnimatedItem>

          <AnimatedItem>
            <h1 id="hero-heading" className="editorial-heading text-white">
              Selekos &amp; Gouskou Law Offices
            </h1>

          </AnimatedItem>




        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
