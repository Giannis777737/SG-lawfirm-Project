import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { practiceAreas } from "@/data/practiceAreas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import JsonLd from "@/components/JsonLd";
import MetaTags from "@/components/MetaTags";
import { getPracticeAreaSchema, getBreadcrumbSchema } from "@/data/jsonLdSchemas";

const PracticeAreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreas.find((a) => a.slug === slug);
  useDocumentTitle(area?.title);

  const serviceSchema = useMemo(() => area ? getPracticeAreaSchema(area) : null, [area]);
  const breadcrumbSchema = useMemo(() => area ? getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Areas of Expertise", url: "/expertise" },
    { name: area.title, url: `/${area.slug}` },
  ]) : null, [area]);

  if (!area) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <MetaTags description={area.description} title={`${area.title} | Selekos-Gouskou & Co`} />
      {serviceSchema && <JsonLd data={serviceSchema} />}
      {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
      <Navbar />
      <main className="pt-28 sm:pt-36 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <nav aria-label="Breadcrumb" className="mb-12 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link to="/#areas-of-expertise" className="editorial-link inline-flex">
                <span>←</span> Back to Areas of Expertise
              </Link>
            </nav>

            <p className="editorial-label">Areas of Expertise</p>

            <h1 className="editorial-heading mb-12">{area.title}</h1>

            <div className="max-w-3xl flex flex-col gap-6">
              {area.content.map((paragraph, i) => (
                <p key={i} className="editorial-body">
                  {paragraph}
                </p>
              ))}

              {area.listItems && (
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4">
                  {area.listItems.map((item, i) => (
                    <li
                      key={i}
                      className="font-body text-base text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
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

export default PracticeAreaPage;
