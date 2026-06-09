import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import JsonLd from "@/components/JsonLd";
import MetaTags from "@/components/MetaTags";
import { getNewsArticleSchema, getBreadcrumbSchema } from "@/data/jsonLdSchemas";

const NewsArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: article, isLoading } = useQuery({
    queryKey: ["news-article", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news_articles")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  useDocumentTitle(article?.title);

  const articleForSchema = article
    ? { ...article, isoDate: article.iso_date }
    : null;

  const articleSchema = useMemo(
    () => (articleForSchema ? getNewsArticleSchema(articleForSchema) : null),
    [articleForSchema]
  );
  const breadcrumbSchema = useMemo(
    () =>
      articleForSchema
        ? getBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "News & Insights", url: "/#news" },
            { name: articleForSchema.title, url: `/news/${articleForSchema.slug}` },
          ])
        : null,
    [articleForSchema]
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 sm:pt-36 md:pt-48">
          <div className="editorial-section">
            <div className="editorial-container text-center text-muted-foreground">Loading…</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        description={article.excerpt}
        title={`${article.title} | Selekos-Gouskou & Co`}
        ogType="article"
      />
      {articleSchema && <JsonLd data={articleSchema} />}
      {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
      <Navbar />
      <main className="pt-28 sm:pt-36 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <Link
              to="/#news"
              className="editorial-link mb-12 inline-flex"
            >
              <span>←</span> Back to News & Insights
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <time className="font-body text-xs text-muted-foreground" dateTime={article.iso_date}>
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

              {article.youtube_url && (() => {
                const m = article.youtube_url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
                const id = m ? m[1] : null;
                if (!id) return null;
                return (
                  <div className="mt-4 aspect-video w-full overflow-hidden bg-muted">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${id}`}
                      title={article.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                );
              })()}

              {article.image_urls && article.image_urls.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {article.image_urls.map((url, i) => (
                    <figure key={i} className="overflow-hidden bg-muted">
                      <img
                        src={url}
                        alt={`${article.title} – photo ${i + 1}`}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  ))}
                </div>
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

export default NewsArticlePage;
