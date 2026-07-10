import SectionLogo from "@/components/SectionLogo";
import sectionLogo from "@/assets/section-logo.svg";
import elizaImage from "@/assets/eliza-forese-tin-kardia.png.asset.json";
import dynameImage from "@/assets/dyname-upscaled.png.asset.json";
import iLiveForMeImage from "@/assets/i-live-for-me-upscaled.png.asset.json";

type Initiative = {
  name: string;
  description: string;
  extra?: string;
  url: string;
  linkLabel: string;
  image?: string;
};

const initiatives: Initiative[] = [
  {
    name: "ELIZA – Society for the Prevention of Cruelty to Children",
    description:
      'Our Firm proudly supports ELIZA – Society for the Prevention of Cruelty to Children through its "Wear the Heart, Spread the Message" campaign, contributing to the prevention of child abuse.',
    extra:
      "The Firm's partner, Dr Angelika Gouskou, has additionally a seat on a pro bono basis at ELIZA's Board of Directors for two consecutive terms, contributing to the organization's mission for the legal protection of children's rights.",
    url: "https://eliza.org.gr/forese-tin-kardia/",
    linkLabel: "Visit ELIZA's website",
    image: elizaImage.url,
  },
  {
    name: "DYNAME",
    description:
      "DYNAME is a non-profit organization based in Athens, Greece, that develops evidence-based educational programs and tools to promote healthy, equal, and non-violent relationships across society. Our Firm proudly supports its mission and initiatives.",
    url: "https://dyname.org/",
    linkLabel: "Visit DYNAME's website",
    image: dynameImage.url,
  },
  {
    name: "I LIVE FOR ME",
    description:
      "I LIVE FOR ME is a non-profit organization based in Athens, Greece, that helps patients with serious illnesses, such as cancer, and their families cope with the psychological and everyday challenges associated with the disease. Our Firm proudly supports its valuable work.",
    url: "https://www.drmetaxotos.com/i-live-for-me.html",
    linkLabel: "Visit I LIVE FOR ME's website",
    image: iLiveForMeImage.url,
  },
];

const GivingBackSection = () => {
  return (
    <section id="giving-back" className="editorial-section" aria-labelledby="giving-back-heading">
      <SectionLogo title="Giving Back" />
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          <div className="flex flex-col gap-8">
            <h2 id="giving-back-heading" className="editorial-heading-sm">
              Giving Back
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="editorial-body">
              At Selekos-Gouskou &amp; Associates Law Offices, we are deeply committed to
              driving positive social impact and standing by organizations that champion
              human dignity, health, and equal opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 items-stretch" role="list">
          {initiatives.map((item) => (
            <article key={item.name} className="h-full" role="listitem">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col"
                aria-label={item.name}
              >
                <div className="relative mb-5 overflow-hidden aspect-[16/10] bg-muted flex items-center justify-center p-6">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                    />

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

                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3 leading-snug">
                  {item.name}
                </h3>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                  {item.description}
                </p>

                {item.extra && (
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.extra}
                  </p>
                )}

                <span className="inline-flex items-center gap-1 mt-4 font-body text-xs uppercase tracking-widest text-muted-foreground">
                  ↗ {item.linkLabel}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GivingBackSection;
