import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SectionLogo from "@/components/SectionLogo";
import sectionLogo from "@/assets/section-logo.svg";


const NewsSection = () => {
  const { data: newsArticles = [], isLoading } = useQuery({
    queryKey: ["news-articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news_articles")
        .select("slug, date, iso_date, category, title, excerpt, external_url, link_label, sort_order, youtube_url, image_urls")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const getYouTubeId = (url?: string | null) => {
    if (!url) return null;
    const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  };

  return (
    <section id="news" className="editorial-section" aria-labelledby="news-heading">
      <SectionLogo title="News & Insights" />
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          {/* Left column - heading */}
          <div className="flex flex-col gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 items-stretch" role="list">
              {newsArticles.map((item) => {
                const hasGallery = (item.image_urls && item.image_urls.length > 0) || !!item.youtube_url;
                const forceInternal = item.slug === "cghub-mononews-2019";
                const isExternal = !!item.external_url && !hasGallery && !forceInternal;
                const linkProps = isExternal
                  ? { href: item.external_url!, target: "_blank" as const, rel: "noopener noreferrer" }
                  : {};

                const ytId = getYouTubeId(item.youtube_url);
                const thumb = ytId
                  ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`
                  : item.image_urls && item.image_urls.length > 0
                  ? item.image_urls[0]
                  : null;

                const content = (
                  <div className="flex h-full flex-col">
                    <div className="relative mb-5 overflow-hidden aspect-[16/10] bg-muted">
                      {thumb ? (
                        <>
                          <img
                            src={thumb}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {ytId && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                                <span className="ml-1 border-y-[10px] border-y-transparent border-l-[16px] border-l-foreground" aria-hidden="true" />
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/40">
                          <img
                            src={sectionLogo}
                            alt=""
                            aria-hidden="true"
                            className="w-16 h-16 opacity-30"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <time className="font-body text-xs text-muted-foreground" dateTime={item.iso_date}>
                        {item.date}
                      </time>
                      <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3 leading-snug line-clamp-2 min-h-[3.5rem]">
                      {item.title}
                    </h3>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>

                    {isExternal && (
                      <span className="inline-flex items-center gap-1 mt-4 font-body text-xs uppercase tracking-widest text-muted-foreground">
                        ↗ {item.link_label || "External article"}
                      </span>
                    )}
                  </div>
                );

                return (
                  <article key={item.slug} className="h-full" role="listitem">
                    {isExternal ? (
                      <a {...linkProps} className="group flex h-full flex-col" aria-label={`${item.title} — ${item.date}`}>
                        {content}
                      </a>
                    ) : (
                      <Link to={`/news/${item.slug}`} className="group flex h-full flex-col" aria-label={`${item.title} — ${item.date}`}>
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
