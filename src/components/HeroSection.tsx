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

      <div className="editorial-container relative z-10 w-full">
        <AnimatedSection className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <AnimatedItem>
            <h1 id="hero-heading" className="editorial-heading text-white" style={{ fontFamily: "'Tahoma', 'Geneva', 'Verdana', sans-serif", fontWeight: 300, letterSpacing: "0.02em" }}>
              <span className="block">SELEKOS_GOUSKOU &amp; CO</span>
              <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">LAW OFFICES</span>
            </h1>
          </AnimatedItem>

          <AnimatedItem>
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gold" style={{ fontFamily: "'Tahoma', 'Geneva', 'Verdana', sans-serif" }}>BUSINESS LAW FIRM</p>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
