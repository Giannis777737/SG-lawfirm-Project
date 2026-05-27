import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SectionLogo from "@/components/SectionLogo";

const NewsSection = () => {
  const { data: newsArticles = [], isLoading } = useQuery({
    queryKey: ["news-articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news_articles")
        .select("slug, date, iso_date, category, title, excerpt, external_url")
        .order("iso_date", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="news" className="editorial-section" aria-labelledby="news-heading">
      <SectionLogo title="News & Insights" />
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          {/* Left column - heading */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
            <h2 id="news-heading" className="editorial-heading-sm">News & Insights</h2>
          </div>

          {/* Right column - intro text */}
          <div className="flex flex-col gap-8">
            <p className="editorial-body">
              The firm actively participates in conferences, academic discussions,
              and policy initiatives. Our partners frequently publish articles on
              corporate governance, investment law, and business regulation.
            </p>
          </div>
        </div>

        <div>
          {isLoading ? (
            <div className="py-10 text-center text-muted-foreground">Loading…</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" role="list">
              {newsArticles.map((item) => {
                const isExternal = !!item.external_url;
                const linkProps = isExternal
                  ? { href: item.external_url!, target: "_blank" as const, rel: "noopener noreferrer" }
                  : {};

                const content = (
                  <>
                    <div className="flex items-center gap-4 mb-4">
                      <time className="font-body text-xs text-muted-foreground" dateTime={item.iso_date}>
                        {item.date}
                      </time>
                      <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl text-foreground mb-3">
                      {item.title}
                    </h3>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.excerpt}
                    </p>

                    {isExternal && (
                      <span className="inline-flex items-center gap-1 mt-3 font-body text-xs text-muted-foreground">
                        ↗ External article
                      </span>
                    )}
                  </>
                );

                return (
                  <article key={item.slug} className="py-4" role="listitem">
                    {isExternal ? (
                      <a {...linkProps} className="group block" aria-label={`${item.title} — ${item.date}`}>
                        {content}
                      </a>
                    ) : (
                      <Link to={`/news/${item.slug}`} className="group block" aria-label={`${item.title} — ${item.date}`}>
                        {content}
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
