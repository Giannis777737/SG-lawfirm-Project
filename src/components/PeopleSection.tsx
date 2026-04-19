import { Link } from "react-router-dom";

import { people } from "@/data/people";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const PeopleSection = () => {
  const displayPeople = people.slice(0, 5);

  return (
    <section id="our-people" className="editorial-section" aria-labelledby="people-heading">
      <SectionLogo title="Our People" />
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimatedSection>
            <AnimatedItem>
              <p className="editorial-body">
                Most of our Attorneys-at-law have trained or worked abroad, earned law degrees 
                and post graduate degrees from foreign universities and have a thorough understanding 
                of the laws and practices of countries outside Greece.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <h2 id="people-heading" className="editorial-heading-sm">
                A highly qualified team of legal experts
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <ul className="flex flex-col mt-4" role="list">
                {displayPeople.map((person) => (
                  <li key={person.id}>
                    <Link
                      to={`/our-people#${person.id}`}
                      className="border-b border-border py-6 first:border-t group flex gap-4 items-start"
                      aria-label={`${person.name}, ${person.role}`}
                    >
                      {person.photo && (
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-14 h-14 object-cover rounded-sm shrink-0 mt-1"
                          loading="lazy"
                        />
                      )}
                      <div>
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
