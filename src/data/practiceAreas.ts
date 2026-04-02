export interface PracticeArea {
  slug: string;
  title: string;
  content: string[];
  listItems?: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "banking-finance",
    title: "Banking, Finance & Capital Markets",
    content: [
      "We have a broad range of experience in most types of financial transactions and have acted on behalf of both borrowers and lenders.",
      "We have an excellent understanding of the commercial aspects of finance work with sound and use our experience to help solve problems, which are not ordinarily within the purview of Greek practice. Moreover, we advise on every aspect of the capital markets, including takeover bid, tender offers, and investment services or day-to-day compliance issues.",
      "By combining our extensive expertise of the relevant industry with our business orientated and practical approach to issues, we remain at the forefront of developments as market regulations and capital flows keep evolving.",
    ],
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial Law",
    content: [
      "Commercial and corporate law has been traditionally one of the main areas of our expertise. With our detailed and deep knowledge we advise both national and international clients with respect to issues arising from duties and liabilities of directors and administrators, capital requirements, establishment of legal entities, shareholder agreements, memorandum of understanding etc.",
      "We proceed with every tax, legal and procedural step which is required for the establishment of Greek legal entities.",
      "Each member of our company has the practical experience and knowledge required in order to correspond to our client's frequently complicated issues.",
    ],
  },
  {
    slug: "corporate-governance",
    title: "Corporate Governance",
    content: [
      "Our lawyers advise on a wide range of domestic and international governance issues, including regulation and investigations, special committees, professional negligence, crisis management, special committees, internal investigations, conflicts of interests etc. Our expertise includes advising on board and committee composition regarding board's diversity, board functions and duties, codes of ethics and every other related matter designed to comply with legal and regulatory requirements and best practices.",
      'Ms. Angelika Gouskou is the founding member of the Corporate Governance Hub 2020. The CG Hub 2020 is a think tank where executives from Greece and abroad cooperate, interact, network, learn and develop business. Its main objective is to form a critical mass of senior executives, current or potential Board members, so as to disseminate a new culture of "conforming and performing" — a common goal rather than a sole necessity.',
    ],
  },
  {
    slug: "eu-competition-law",
    title: "EU & Competition Law",
    content: [
      "We advise on all aspects of EU law, often in collaboration with Brussels-based law firms, as they affect the interests of our clients. We not only advise in relation to a particular case or transaction, but also give more general assistance in relation to developments in particular fields.",
      "We have particular expertise with respect to the application of Greek competition (anti-trust) law to mergers, cartel and abuse of dominance/monopolisation, antitrust disputes including judicial review and private damages, compliance and counselling, sector regulation and market investigations, public procurement and competitive tendering, and state aid. We also advise on the application of EU competition law to individual agreements, mergers and acquisitions, procurement, state aid and intellectual property rights.",
    ],
  },
  {
    slug: "hotels-leisure",
    title: "Hotels & Leisure",
    content: [
      "We are involved in the sector since 2004 and have continuously developed our practice since then. We advise some of the largest and most prestigious hotel chains in Greece such as investors on the full range of legal services.",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property & Trademarks",
    content: [
      "Our firm has extensive experience in advising on patent and trademark matters and the closely related fields of computer law and telecommunications. In addition to their legal training, many of our lawyers have particular expertise in the pharmaceutical, biotechnology, chemicals, petrochemicals, computers and electronics industries.",
      "We advise on contentious and non-contentious aspects of:",
    ],
    listItems: [
      "Patents",
      "IP portfolio development counseling",
      "IP due diligence",
      "Drafting of IP licensing/assignment agreements copyright including piracy, technology, database and design rights",
      "Acquisitions and divestitures of IP and technology assets",
      "Copyrights and Designs",
      "Computer Contracts",
      "Technology services agreements",
      "Internet and new media issues",
    ],
  },
  {
    slug: "litigation-arbitration",
    title: "Litigation & Arbitration",
    content: [
      "Our litigation team has extensive experience in representing clients before all levels of the Greek courts, as well as in domestic and international arbitration proceedings. We handle complex commercial disputes, corporate conflicts, banking litigation, and real estate cases.",
      "We provide strategic advice on dispute resolution, including negotiation, mediation, and arbitration, always aiming to achieve the best possible outcome for our clients while managing risk effectively.",
    ],
  },
  {
    slug: "privatization",
    title: "Privatization",
    content: [
      "We have been involved in major privatization projects in Greece and have advised both governmental bodies and private investors on legal aspects of privatization transactions.",
      "Our team provides comprehensive legal support throughout the privatization process, including regulatory compliance, transaction structuring, due diligence, and post-transaction advisory.",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    content: [
      "Our real estate practice covers the full spectrum of property transactions, including acquisitions, dispositions, financing, development, leasing, and property management.",
      "We advise domestic and international clients on complex real estate matters, including due diligence, title examination, zoning and planning issues, construction contracts, and environmental compliance.",
    ],
  },
  {
    slug: "telecommunications-law",
    title: "Telecommunications Law",
    content: [
      "We advise telecommunications operators, service providers, and technology companies on regulatory matters, licensing, spectrum management, interconnection agreements, and competition issues in the telecommunications sector.",
      "Our team stays at the forefront of the rapidly evolving telecommunications regulatory landscape, providing practical and commercially-focused legal advice.",
    ],
  },
];
