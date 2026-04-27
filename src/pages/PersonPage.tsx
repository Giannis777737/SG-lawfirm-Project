import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { people } from "@/data/people";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import JsonLd from "@/components/JsonLd";
import MetaTags from "@/components/MetaTags";
import { getBreadcrumbSchema } from "@/data/jsonLdSchemas";

const PersonPage = () => {
  const { id } = useParams<{ id: string }>();
  const person = people.find((p) => p.id === id);

  useDocumentTitle(person ? person.name : "Our People");

  const breadcrumbSchema = useMemo(
    () =>
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Our People", url: "/our-people" },
        ...(person ? [{ name: person.name, url: `/our-people/${person.id}` }] : []),
      ]),
    [person]
  );

  if (!person) {
    return <Navigate to="/our-people" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        description={`${person.name} — ${person.role}. ${person.description}`}
        title={`${person.name} | Selekos-Gouskou & Co Law Offices`}
      />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="pt-28 sm:pt-36 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <p className="editorial-label">Our People</p>

            <div className="border-b border-border py-12 first:border-t">
              <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
                <div className="flex flex-col items-start gap-3">
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-40 h-40 md:w-48 md:h-48 object-cover object-top rounded-sm"
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
                  <h1 className="font-heading text-2xl md:text-3xl text-foreground">
                    {person.name}
                  </h1>

                  <p className="editorial-body">{person.fullBio}</p>

                  {person.memberships && (
                    <div>
                      <h2 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Memberships
                      </h2>
                      <p className="font-body text-sm text-foreground">
                        {person.memberships.join(", ")}
                      </p>
                    </div>
                  )}

                  {person.education && (
                    <div>
                      <h2 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Education
                      </h2>
                      <ul className="flex flex-col gap-1">
                        {person.education.map((edu, i) => (
                          <li key={i} className="font-body text-sm text-foreground">
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h2 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Languages
                    </h2>
                    <p className="font-body text-sm text-foreground">{person.languages}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-8">
              <Link to="/our-people" className="editorial-link">
                <span>←</span> View all team members
              </Link>
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

export default PersonPage;
