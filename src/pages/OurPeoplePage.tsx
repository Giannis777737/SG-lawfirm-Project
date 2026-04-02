import { useMemo } from "react";
import { people } from "@/data/people";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import JsonLd from "@/components/JsonLd";
import { getOurPeopleSchema, getBreadcrumbSchema } from "@/data/jsonLdSchemas";

const OurPeoplePage = () => {
  useDocumentTitle("Our People");
  const peopleSchema = useMemo(() => getOurPeopleSchema(people), []);
  const breadcrumbSchema = useMemo(() => getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our People", url: "/our-people" },
  ]), []);
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={peopleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="pt-40 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <p className="editorial-label">Our People</p>

            <h1 className="editorial-heading mb-8">
              A highly qualified team of legal experts
            </h1>

            <p className="editorial-body mb-16">
              Most of our Attorneys-at-law have trained or worked abroad, earned
              law degrees and post graduate degrees from foreign universities and
              have a thorough understanding of the laws and practices of
              countries outside Greece.
            </p>

            <div className="flex flex-col">
              {people.map((person) => (
                <div
                  key={person.id}
                  id={person.id}
                  className="border-b border-border py-12 first:border-t scroll-mt-32"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                    <div className="flex flex-col items-start gap-3">
                      <div className="w-16 h-16 bg-muted flex items-center justify-center">
                        <span className="font-heading text-xl text-muted-foreground">
                          {person.initials}
                        </span>
                      </div>
                      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                        {person.role}
                      </p>
                    </div>

                    <div className="flex flex-col gap-6">
                      <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                        {person.name}
                      </h2>

                      <p className="editorial-body">{person.fullBio}</p>

                      {person.memberships && (
                        <div>
                          <h3 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                            Memberships
                          </h3>
                          <p className="font-body text-sm text-foreground">
                            {person.memberships.join(", ")}
                          </p>
                        </div>
                      )}

                      {person.education && (
                        <div>
                          <h3 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                            Education
                          </h3>
                          <ul className="flex flex-col gap-1">
                            {person.education.map((edu, i) => (
                              <li
                                key={i}
                                className="font-body text-sm text-foreground"
                              >
                                {edu}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h3 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                          Languages
                        </h3>
                        <p className="font-body text-sm text-foreground">
                          {person.languages}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <Link to="/" className="editorial-link">
                <span>←</span> Back to home page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurPeoplePage;
