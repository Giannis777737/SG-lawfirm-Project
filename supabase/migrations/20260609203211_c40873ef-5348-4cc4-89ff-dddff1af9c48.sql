ALTER TABLE public.news_articles ADD COLUMN IF NOT EXISTS youtube_url TEXT;
ALTER TABLE public.news_articles ADD COLUMN IF NOT EXISTS image_urls TEXT[] NOT NULL DEFAULT '{}';