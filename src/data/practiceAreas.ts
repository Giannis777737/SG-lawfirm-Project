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
    title: "EU, Competition Law & Anti-Trust",
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
      "Our firm represents high value global businesses on litigation, arbitration and mediation matters.",
      "Professor Petros Selekos, has acted as president of the Arbitral Tribunal in numerous institutional arbitrations. Under his surveillance, our team of highly qualified lawyers has participated in the arbitration procedures.",
      "We have broad experience in corporate risk and conflict management, and our team understands the importance of finding practical commercial solutions for their clients and are committed to understand their business and objectives. This enables us to view the issues in their entirety and especially from the business point of view and to provide a high level representation combined with high-quality strategic advice on the handling of the case.",
      "Our main priority is to resolve disputes quickly and effectively with as little disruption to business as possible – recognition of this is central to how we approach any matter.",
    ],
  },
  {
    slug: "privatization",
    title: "Privatization",
    content: [
      "We advise international organisations, governments and their agencies. Over the past years we have advised the Greek government's privatization program in mainly the energy program, we are recognized as specialized in the energy field, drafting legislation and advising generally on privatization.",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    content: [
      "We provide advanced and intelligent advice that complements the way our clients work. We counsel on and participate actively in all aspects relating to the development, construction and transaction of commercial property and public works.",
      "Our clients include investors, developers, landlords, tenants and professionals engaged in construction projects, buyers, sellers, institutional and non-institutional lenders, developers, sponsors, public and private funds general and limited partners, and preferred and subordinated equity investors. They rely on our deep experience for their investments in a wide range of real estate-related businesses and asset classes, which have included industrial, office, retail, multi-family, hotel, data center, resort, residential, senior and student housing, timber and agricultural, recreational and mixed-use properties.",
      "We have the commercial and litigation capacity and expertise to handle a diverse range of problems including the preparation and submission of tenders, lease renewals, rent reviews, service charge disputes, planning appeals, construction disputes and professional negligence claims.",
    ],
  },
  {
    slug: "telecommunications-law",
    title: "Telecommunication Law",
    content: [
      "We have a wealth of experience in advising telecommunications operators on day-to-day telecoms matters and related commercial agreements and corporate affairs, in a wide variety of matters, as well as in advising operators, the State and regulators on law, policy, regulatory and licensing matters. We have an extensive expertise handling telecoms complaints, and before courts in litigation, including litigation between operators.",
      "Our team benefits from experience acquired not only in private practice but also in-house at leading telecommunication companies and on corporate and regulatory bodies.",
      "We provide industry-focused advice, delivered promptly and quickly, ensuring that we add value from day one.",
    ],
  },
];
