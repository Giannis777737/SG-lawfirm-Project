import { PracticeArea } from "./practiceAreas";
import { NewsArticle } from "./newsArticles";
import { Person } from "./people";

const BASE_URL = "https://saisit.gr";

const orgBase = {
  "@type": "LegalService",
  name: "Selekos-Gouskou & Co",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  telephone: "+302107256523",
  email: "info@selekos-gouskou.gr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skoufa 5-7",
    addressLocality: "Athens",
    postalCode: "10673",
    addressRegion: "Attica",
    addressCountry: "GR",
  },
};

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function getPracticeAreaSchema(area: PracticeArea) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.title,
    description: area.content[0],
    url: `${BASE_URL}/${area.slug}`,
    provider: orgBase,
  };
}

export function getNewsArticleSchema(article: NewsArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.isoDate,
    description: article.excerpt,
    url: `${BASE_URL}/news/${article.slug}`,
    author: orgBase,
    publisher: {
      "@type": "Organization",
      name: "Selekos-Gouskou & Co",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.png` },
    },
  };
}

export function getPersonSchema(person: Person) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    description: person.fullBio,
    url: `${BASE_URL}/our-people#${person.id}`,
    worksFor: orgBase,
    knowsLanguage: person.languages.split(" · "),
    ...(person.memberships && { memberOf: person.memberships.map((m) => ({ "@type": "Organization", name: m })) }),
  };
}

export function getOurPeopleSchema(people: Person[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our People — Selekos-Gouskou & Co",
    url: `${BASE_URL}/our-people`,
    description: "Meet our highly qualified team of legal experts.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: people.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: getPersonSchema(p),
      })),
    },
  };
}
