import { Link } from "react-router-dom";
import { newsArticles } from "@/data/newsArticles";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const NewsSection = () => {
  return (
    <section id="news" className="editorial-section" aria-labelledby="news-heading">
      <div className="editorial-container">
        <AnimatedSection className="mb-16">
          <AnimatedItem>
            <p className="editorial-label" aria-hidden="true">News & Publications</p>
          </AnimatedItem>
          <AnimatedItem>
            <h2 id="news-heading" className="editorial-heading-sm">Latest Updates</h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0" role="list">
            {newsArticles.map((item, index) => (
              <AnimatedItem key={index}>
                <article
                  className="border-b border-border md:odd:border-r py-10 md:odd:pr-12 md:even:pl-12"
                  role="listitem"
                >
                  <Link
                    to={`/news/${item.slug}`}
                    className="group block"
                    aria-label={`${item.title} — ${item.date}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <time className="font-body text-xs text-muted-foreground" dateTime={item.isoDate}>
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
                  </Link>
                </article>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsSection;
