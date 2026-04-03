import { Link } from "react-router-dom";
import { practiceAreas } from "@/data/practiceAreas";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const ExpertiseSection = () => {
  return (
    <section id="areas-of-expertise" className="editorial-section bg-foreground" aria-labelledby="expertise-heading">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <p className="editorial-label text-gold font-semibold" aria-hidden="true">Areas of Expertise</p>
            </AnimatedItem>

            <AnimatedItem>
              <h2 id="expertise-heading" className="editorial-heading-sm text-white">
                Specialized legal counsel across key practice areas
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <p className="editorial-body text-white/80">
                Our lawyers are leading experts in Greek commercial law, recognised for their
                expertise in delivering innovative customised solutions to complex legal matters.
              </p>
            </AnimatedItem>

          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <nav aria-label="Practice areas">
              <ul className="flex flex-col" role="list">
                {practiceAreas.map((area, index) => (
                  <AnimatedItem key={area.slug}>
                    <li>
                      <Link
                        to={`/${area.slug}`}
                        className="border-b border-white/20 py-5 first:border-t group flex items-center justify-between"
                      >
                        <span className="font-body text-base md:text-lg text-white/90 group-hover:text-gold transition-colors duration-300">
                          {area.title}
                        </span>
                        <span className="font-body text-xs text-white/50" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  </AnimatedItem>
                ))}
              </ul>
            </nav>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
