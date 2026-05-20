import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
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
      <SectionLogo title="News & Publications" />
      <div className="editorial-container">
        <AnimatedSection className="mb-16">
          <AnimatedItem>
            <h2 id="news-heading" className="editorial-heading-sm">Latest Updates</h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection>
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

                    <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:opacity-60 transition-opacity duration-300">
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
                  <AnimatedItem key={item.slug}>
                    <article
                      className="py-4"
                      role="listitem"
                    >
                      {isExternal ? (
                        <a
                          {...linkProps}
                          className="group block"
                          aria-label={`${item.title} — ${item.date}`}
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          to={`/news/${item.slug}`}
                          className="group block"
                          aria-label={`${item.title} — ${item.date}`}
                        >
                          {content}
                        </Link>
                      )}
                    </article>
                  </AnimatedItem>
                );
              })}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsSection;
