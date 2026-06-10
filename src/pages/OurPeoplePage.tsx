import { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { people } from "@/data/people";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import JsonLd from "@/components/JsonLd";
import MetaTags from "@/components/MetaTags";
import { getOurPeopleSchema, getBreadcrumbSchema } from "@/data/jsonLdSchemas";

const OurPeoplePage = () => {
  useDocumentTitle("Our People");
  const location = useLocation();
  const { id: paramId } = useParams<{ id: string }>();
  const targetId = paramId || location.hash.replace("#", "");

  useEffect(() => {
    if (!targetId) return;
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };
    tryScroll();
  }, [targetId]);

  const peopleSchema = useMemo(() => getOurPeopleSchema(people), []);
  const breadcrumbSchema = useMemo(() => getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our People", url: "/our-people" },
  ]), []);
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        description="Meet the highly qualified team behind Selekos-Gouskou & Co — attorneys with international training and deep expertise across Greek and EU law."
        title="Our People | Selekos-Gouskou & Co"
      />
      <JsonLd data={peopleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="pt-28 sm:pt-36 md:pt-48">
        <div className="editorial-container pb-4">
          <Link to="/#our-people" className="editorial-link">
            <span>←</span> Back to Our People on home
          </Link>
        </div>
        <section className="editorial-section">
          <div className="editorial-container">
            <p className="editorial-label">Our People</p>

            <h1 className="editorial-heading mb-8">
              A highly qualified team of legal experts
            </h1>

            <p className="editorial-body mb-16">
              The firm's team comprises highly qualified lawyers with international
              education and professional backgrounds. Our members possess advanced
              degrees from prestigious universities abroad, enabling us to provide
              cross-border legal support and navigate complex international
              frameworks effectively.
            </p>

            <div className="flex flex-col">
              {people.map((person) => (
                <div
                  key={person.id}
                  id={person.id}
                  className="border-b border-border py-12 first:border-t scroll-mt-32"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
                    <div className="flex flex-col items-start gap-3">
                      {person.photo ? (
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-40 h-40 md:w-48 md:h-48 object-cover object-top rounded-sm"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-muted flex items-center justify-center">
                          <span className="font-heading text-xl text-muted-foreground">
                            {person.initials}
                          </span>
                        </div>
                      )}
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
