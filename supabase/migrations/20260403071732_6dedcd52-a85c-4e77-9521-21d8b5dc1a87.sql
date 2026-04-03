
CREATE TABLE public.news_articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  date TEXT NOT NULL,
  iso_date DATE NOT NULL,
  category TEXT NOT NULL DEFAULT 'News',
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "News articles are publicly readable"
  ON public.news_articles FOR SELECT
  USING (true);

INSERT INTO public.news_articles (slug, date, iso_date, category, title, excerpt, content) VALUES
('thessaloniki-summit-2025', '28 July 2025', '2025-07-28', 'News', 'Thessaloniki Summit',
 'The Managing Partner of Selekos-Gouskou & Co Law Offices Angelika Gouskou, participates at Thessaloniki Summit…',
 ARRAY[
   'The Managing Partner of Selekos-Gouskou & Co Law Offices Angelika Gouskou, participates at Thessaloniki Summit 2020, which was organized by the Federation of Industries of Greece (SBE) in cooperation with the Delphi Economic Forum. She referred to the legal framework on empowering woman''s entrepreneurship and woman''s participation in companies'' Boards of Directors, as well as to the Corporate Governance Hub.',
   'The new Law 4688/2020, passed by the Greek parliament, aims to modernize the current legal framework by introducing new forms of tourism. The innovations introduced by the new Law were created by Silia Banou, Attorney at Law – Associate at Selekos-Gouskou & Co Law Offices.',
   'Within the next days, applications will be open for any companies wishing to take part in the Business Support Campaign led by the Hellenic Business Guarantee Fund for COVID-19, offering 7 billion € to support businesses'' liquidity and financing.',
   'A comparative table between the Guarantee Fund and the New Guarantee Fund was created by Maria Antoniou, Attorney at Law – Associate at Selekos-Gouskou & Co Law Offices.'
 ]),
('thessaloniki-summit-aug-2024', '10 August 2024', '2024-08-10', 'News', 'Thessaloniki Summit',
 'The Managing Partner of Selekos-Gouskou & Co Law Offices Angelika Gouskou, participates at Thessaloniki Summit…',
 ARRAY['The Managing Partner of Selekos-Gouskou & Co Law Offices Angelika Gouskou, participates at Thessaloniki Summit 2020, which was organized by the Federation of Industries of Greece (SBE) in cooperation with the Delphi Economic Forum.']),
('thessaloniki-summit-may-2024', '10 May 2024', '2024-05-10', 'News', 'Thessaloniki Summit',
 'The Managing Partner of Selekos-Gouskou & Co Law Offices Angelika Gouskou, participates at Thessaloniki Summit…',
 ARRAY['The Managing Partner of Selekos-Gouskou & Co Law Offices Angelika Gouskou, participates at Thessaloniki Summit 2020, which was organized by the Federation of Industries of Greece (SBE) in cooperation with the Delphi Economic Forum.']),
('thessaloniki-summit-nov-2023', '10 November 2023', '2023-11-10', 'News', 'Thessaloniki Summit',
 'The Managing Partner of Selekos-Gouskou & Co Law Offices Angelika Gouskou, participates at Thessaloniki Summit…',
 ARRAY['The Managing Partner of Selekos-Gouskou & Co Law Offices Angelika Gouskou, participates at Thessaloniki Summit 2020, which was organized by the Federation of Industries of Greece (SBE) in cooperation with the Delphi Economic Forum.']);
