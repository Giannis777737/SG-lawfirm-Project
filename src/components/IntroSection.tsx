import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const IntroSection = () => {
  return (
    <section className="bg-background" aria-labelledby="intro-heading">
      <div className="editorial-container py-20 md:py-28 lg:py-32">
        <AnimatedSection className="max-w-4xl mx-auto flex flex-col gap-8 text-center">
          <AnimatedItem>
            <span className="editorial-label block text-gold">Introduction</span>
          </AnimatedItem>

          <AnimatedItem>
            <h2 id="intro-heading" className="sr-only">
              Introduction
            </h2>
            <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight text-foreground max-w-none">
              Selekos-Gouskou &amp; Co Law Offices was established in 1998 with the aim to
              be a dynamic, &ldquo;niche&rdquo; culture law firm and has since grown steadily.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="mx-auto w-16 h-px bg-gold/60" aria-hidden="true" />
          </AnimatedItem>

          <AnimatedItem>
            <p className="editorial-body mx-auto text-center">
              Our clients operate in many different fields, notably financial services,
              international trade and commodities, manufacturing and broadcasting. They
              include large public corporations, Greek private corporations, institutions,
              private foundations and individuals as well as companies with international
              activities.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IntroSection;
