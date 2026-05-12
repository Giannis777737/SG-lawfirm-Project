import ioannisPhoto from "@/assets/people/ioannis-tsionis.png";
import vickyPhoto from "@/assets/people/vicky-tsapara.png";
import mariaPhoto from "@/assets/people/maria-antoniou.png";
import petrosPhoto from "@/assets/people/petros-selekos.png";
import angelikaPhoto from "@/assets/people/angelika-gouskou.png";
import dimitrisPhoto from "@/assets/people/dimitris-selekos.png";

import katerinaPhoto from "@/assets/people/katerina-malliari.png";

export interface Person {
  id: string;
  name: string;
  initials: string;
  role: string;
  description: string;
  fullBio: string;
  memberships?: string[];
  education?: string[];
  languages: string;
  photo?: string;
}

export const people: Person[] = [
  {
    id: "petros-selekos",
    name: "Prof. Petros Selekos",
    initials: "PS",
    role: "Founding Partner",
    description:
      "Doctor in Law (Ph.D in Business and Commercial Law, University of Athens). Professor of Business Law at the University Law School.",
    fullBio:
      "Founding Partner and Professor of Business Law at the University (DuTh). He specializes in corporate, commercial, and antitrust law and has extensive experience advising on energy regulatory and strategic investments issues.",
    languages: "Greek · English · German",
    photo: petrosPhoto,
  },
  {
    id: "angelika-gouskou",
    name: "Dr. Angelika Gouskou",
    initials: "AG",
    role: "Founding Partner",
    description:
      "Doctor in Law (Ph.D in Business and Commercial Law, University of Athens). Specialized in corporate and banking law.",
    fullBio:
      "Founding Partner with a Ph.D. in Business and Commercial Law. She focuses on corporate governance, commercial transactions, IPOs and privatization frameworks, combining academic rigor with practical expertise.",
    languages: "Greek · English · French",
    photo: angelikaPhoto,
  },
  {
    id: "ioannis-tsionis",
    name: "Ioannis Tsionis",
    initials: "IT",
    role: "Associate · Head of Litigation and Real Estate dep.",
    description:
      "Specialized in commercial litigation and corporate advisory with international experience.",
    fullBio:
      "Ioannis is an Associate since 2016 specializing in Civil, real estate sale, purchase, financing and development. He possesses substantial experience in litigation on real estate and a broad spectrum of civil disputes, including contractual breaches, corporate and shareholder conflicts, and tort-related claims. His practice extends to advising clients on the negotiation and drafting of commercial agreements and complex business and estate transactions. Ioannis represents clients before all levels of the Greek Courts.",
    memberships: ["Athens Bar Association"],
    languages: "Greek · English",
    photo: ioannisPhoto,
  },
  {
    id: "maria-antoniou",
    name: "Maria Antoniou",
    initials: "MA",
    role: "Associate · Head of Banking and Project Finance dep.",
    description:
      "Focused on banking & finance law, real estate transactions and regulatory compliance.",
    fullBio:
      "Maria is an Associate at our Law Firm, focusing on corporate and banking law, finance and capital markets, as well as M&A. She joined our firm in 2017, and since then, she has been contributing her expertise as a lawyer to financing, corporate transactions. Maria has handled bond loan agreements and security documentation, takeover bids, squeeze-out and delisting processes, as well as corporate transformations and restructurings. She has also led legal due diligence exercises, drafted share purchase agreements (SPAs), and reviewed the specific terms of M&A projects. She advises on the establishment of corporate entities, provides day-to-day corporate legal advice, and undertakes the drafting and negotiation of transactional documentation. In addition, Maria is involved in a wide range of real estate transactions and assists in matters of corporate governance and arbitration.",
    memberships: ["Athens Bar Association"],
    education: [
      "University of Piraeus – M.Sc. in Banking and Finance Law, 2019",
      "University of Athens, Faculty of Laws – LL.B., 2016",
    ],
    languages: "Greek · English · French",
    photo: mariaPhoto,
  },
  {
    id: "vicky-tsapara",
    name: "Vicky Tsapara",
    initials: "VT",
    role: "Associate · Head of Investment / Governance and Corporate Law dep.",
    description:
      "Expertise in EU competition law, intellectual property and cross-border transactions.",
    fullBio:
      "Vicky first joined our law firm in 2016, and she is now a key member of our corporate law team with professional qualifications and international working experience in corporate governance. Vicky advises our firm's clients on commercial law matters, including drafting commercial agreements, and day-to-day legal compliance. She also advises on governance investment law matters; civil law cases. In addition, her practice extends to public procurement law, where she provides guidance on regulatory compliance and supports clients throughout the procurement process. She personally handles matters for a diverse range of clients, including one of the largest listed utility services providers and a manufacturer of personal hygiene products with international operations and complex client requirements, reflecting the scope and impact of her practice.",
    memberships: ["Athens Bar Association"],
    education: [
      "University College of London (UCL) – LL.M. in Corporate Law, 2019",
      "University of Athens, Faculty of Laws – LL.B., 2016",
    ],
    languages: "Greek · English · French",
    photo: vickyPhoto,
  },
  {
    id: "dimitris-selekos",
    name: "Dimitris Selekos",
    initials: "DS",
    role: "Associate · Head of Industry Regulation and Antitrust Law",
    description:
      "Specializes in Competition Law, Industrial Property Law, and Corporate Law.",
    fullBio:
      "Dimitris is an Associate at our firm, specializing in Competition Law, Industrial Property Law, and Corporate Law. He first joined the firm in 2020 and has since been involved in a wide range of cases, to ensure fair and responsible operators, protect consumers, employers and the environment including commercial and real estate transactions, proceedings before the Hellenic Competition Commission, and arbitration matters. Dimitris also practices litigation and advises clients on enforcement proceedings.",
    memberships: ["Athens Bar Association"],
    education: [
      "University of Athens, Faculty of Law – LL.M. in Industrial Property and Competition Law, 2023",
      "University of Athens, Faculty of Law – LL.B., 2020",
    ],
    languages: "Greek · English",
    
  },
  {
    id: "katerina-malliari",
    name: "Katerina Malliari",
    initials: "KM",
    role: "Head of IT and Administrating",
    description:
      "Oversees the firm's digital transformation initiatives and ensures seamless coordination and operational efficiency.",
    fullBio:
      "Katerina has provided high-level Executive Support to the firm's partners and management since 2015, ensuring seamless coordination and operational efficiency. She manages key projects, oversees HR and administrating, and ensures alignment and smooth collaboration across all departments. She oversees the firm's digital transformation initiatives, including the responsible integration of Artificial Intelligence tools. Her responsibilities also encompass Compliance and Security, with a focus on GDPR and Cybersecurity, areas in which she holds specialized certification. She brings technical expertise, such as file decryption, supporting effective risk mitigation and ensuring the integrity and confidentiality of the firm's critical information.",
    languages: "Greek · English",
    photo: katerinaPhoto,
  },
];
