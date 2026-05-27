import { Link } from "react-router-dom";

import { people } from "@/data/people";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const PeopleSection = () => {
  const founderIds = ["petros-selekos", "angelika-gouskou"];
  const founders = people.filter((p) => founderIds.includes(p.id));
  const displayPeople = people.filter((p) => !founderIds.includes(p.id)).slice(0, 5);

  return (
    <section id="our-people" className="editorial-section" aria-labelledby="people-heading">
      <SectionLogo title="Leadership Profiles" />
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - intro + founding partners */}
          <AnimatedSection className="flex flex-col gap-10">
            <AnimatedItem>
              <h2 id="people-heading" className="editorial-heading-sm">
                Meet our Team
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <p className="editorial-body">
                The firm's team comprises highly qualified lawyers with international education
                and professional backgrounds. Our members possess advanced degrees from
                prestigious universities abroad, enabling us to provide cross-border legal
                support and navigate complex international frameworks effectively.
              </p>
            </AnimatedItem>

            <div className="flex flex-col gap-12 mt-2">
              {founders.map((person) => (
                <AnimatedItem key={person.id}>
                  <Link
                    to={`/our-people#${person.id}`}
                    className="group flex flex-col gap-5"
                    aria-label={`${person.name}, ${person.role}`}
                  >
                    {person.photo && (
                      <div className="overflow-hidden rounded-sm">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        {person.role}
                      </p>
                      <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3 group-hover:opacity-70 transition-opacity duration-300">
                        {person.name}
                      </h3>
                      <p className="editorial-body">
                        {person.fullBio}
                      </p>
                    </div>
                  </Link>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>


          {/* Right column - team list */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-8">
            <AnimatedItem>
              <ul className="flex flex-col" role="list">
                {displayPeople.map((person) => (
                  <li key={person.id}>
                    <Link
                      to={`/our-people#${person.id}`}
                      className="border-b border-border py-6 first:border-t group flex gap-6 items-start"
                      aria-label={`${person.name}, ${person.role}`}
                    >
                      {person.photo && (
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-24 h-24 md:w-28 md:h-28 object-cover object-top rounded-sm shrink-0 mt-1"
                          loading="lazy"
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                          {person.role}
                        </p>
                        <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2 group-hover:opacity-60 transition-opacity duration-300">
                          {person.name}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {person.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedItem>

            <AnimatedItem>
              <Link to="/our-people" className="editorial-link mt-4">
                view all team members <span aria-hidden="true">→</span>
              </Link>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
