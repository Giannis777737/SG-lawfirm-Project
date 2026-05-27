export interface PracticeArea {
  slug: string;
  title: string;
  /** Short SEO description (max ~160 chars) used for meta description on the practice area page. */
  description: string;
  content: string[];
  listItems?: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    description:
      "Regulatory compliance, lending structures, and financial documentation.",
    content: [
      "We advise on regulatory compliance, lending structures, and financial documentation. Our team provides strategic counsel to financial institutions, corporates, and investors on complex financing arrangements, regulatory requirements, and the preparation and negotiation of all relevant financial documentation.",
    ],
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial Law",
    description:
      "M&A, company formation, and contract management.",
    content: [
      "We provide comprehensive corporate and commercial legal services, including mergers and acquisitions, company formation and restructuring, and the management and negotiation of commercial contracts. Our expertise spans due diligence, shareholder agreements, and day-to-day corporate governance matters.",
    ],
  },
  {
    slug: "corporate-governance",
    title: "Corporate Governance",
    description:
      "Board advisory and compliance frameworks.",
    content: [
      "Our corporate governance practice advises boards and senior management on compliance frameworks, ethical standards, and best practices. We assist with board advisory, internal investigations, and the design of governance structures that meet regulatory expectations and support sustainable business growth.",
    ],
  },
  {
    slug: "eu-competition-law",
    title: "EU & Competition Law",
    description:
      "Antitrust matters and cross-border regulatory advice.",
    content: [
      "We advise on all aspects of EU and Greek competition law, including antitrust matters, mergers and acquisitions, cartel investigations, and abuse of dominance. Our team provides cross-border regulatory advice, often collaborating with leading Brussels-based law firms, to ensure compliance and manage risk across jurisdictions.",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    description:
      "IP protection, registration, and enforcement.",
    content: [
      "We offer full-spectrum intellectual property services, including the protection, registration, and enforcement of patents, trademarks, copyrights, and designs. Our team handles IP due diligence, licensing agreements, and disputes, ensuring that our clients' innovations and brands are safeguarded.",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description:
      "Property acquisitions, leases, and development law.",
    content: [
      "Our real estate practice covers property acquisitions, leasing, development, and construction. We advise investors, developers, and lenders on all aspects of real estate transactions, from due diligence and contract negotiation to planning appeals and dispute resolution.",
    ],
  },
  {
    slug: "litigation-arbitration",
    title: "Litigation & Arbitration",
    description:
      "Representation before national and international courts.",
    content: [
      "We represent clients in litigation and arbitration before national and international courts and tribunals. Led by Prof. Petros Selekos, our team brings extensive experience in institutional arbitration, commercial disputes, and strategic conflict management, always aiming for efficient and effective resolution.",
    ],
  },
  {
    slug: "privatization",
    title: "Privatization & Investments",
    description:
      "Advisory for strategic transactions and investment projects.",
    content: [
      "We advise on privatization and strategic investment projects, working with international organisations, governments, and investors. Our expertise includes regulatory frameworks, due diligence, and transaction structuring for complex privatization and investment mandates.",
    ],
  },
];
