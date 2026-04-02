import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { newsArticles } from "@/data/newsArticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import JsonLd from "@/components/JsonLd";
import { getNewsArticleSchema, getBreadcrumbSchema } from "@/data/jsonLdSchemas";

const NewsArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = newsArticles.find((a) => a.slug === slug);
  useDocumentTitle(article?.title);

  const articleSchema = useMemo(() => article ? getNewsArticleSchema(article) : null, [article]);
  const breadcrumbSchema = useMemo(() => article ? getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "News & Publications", url: "/#news" },
    { name: article.title, url: `/news/${article.slug}` },
  ]) : null, [article]);

  if (!article) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      {articleSchema && <JsonLd data={articleSchema} />}
      {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
      <Navbar />
      <main className="pt-40 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <Link
              to="/#news"
              className="editorial-link mb-12 inline-flex"
            >
              <span>←</span> Back to News & Publications
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <time className="font-body text-xs text-muted-foreground" dateTime={article.isoDate}>
                {article.date}
              </time>
              <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                {article.category}
              </span>
            </div>

            <h1 className="editorial-heading mb-12">{article.title}</h1>

            <div className="max-w-3xl flex flex-col gap-6">
              {article.content.map((paragraph, i) => (
                <p key={i} className="editorial-body">
                  {paragraph}
                </p>
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

export default NewsArticlePage;
