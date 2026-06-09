ALTER TABLE public.news_articles ADD COLUMN IF NOT EXISTS sort_order INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.news_articles ADD COLUMN IF NOT EXISTS link_label TEXT;
CREATE INDEX IF NOT EXISTS news_articles_sort_order_idx ON public.news_articles (sort_order);