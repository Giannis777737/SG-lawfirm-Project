import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";
import codeOfEthicsPdf from "@/assets/Code_of_Ethics.pdf.asset.json";

const CodeOfEthicsSection = () => {
  return (
    <section id="code-of-ethics" className="editorial-section" aria-labelledby="code-of-ethics-heading">
      <SectionLogo title="Code of Ethics" />
      <div className="editorial-container">
        <AnimatedSection className="flex flex-col gap-8 max-w-4xl">
          <AnimatedItem>
            <h2 id="code-of-ethics-heading" className="editorial-heading-sm">
              Code of Ethics
            </h2>
          </AnimatedItem>

          <AnimatedItem>
            <p className="editorial-body">
              At <strong>Selekos-Gouskou &amp; Associates Law Offices</strong>, our commitment to
              delivering high-quality legal services is founded on the principles of integrity,
              independence, professionalism, and respect for the rule of law.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <p className="editorial-body">
              Our Code of Ethics sets out the fundamental values and standards of professional
              conduct that guide the operation of our Firm and apply to all individuals acting on
              its behalf. It reflects our commitment to responsible, transparent, and ethical
              legal practice, in accordance with Greek law, the Greek Lawyers' Code, the Greek
              Lawyers' Code of Ethics, applicable professional regulations, and all relevant legal
              and regulatory obligations.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <p className="editorial-body">
              By adhering to these principles, we aim to maintain the trust of our clients,
              safeguard the reputation and integrity of our Firm, and uphold the dignity and
              responsibilities of the legal profession.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <p className="editorial-body">The full Code of Ethics is available below.</p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="mt-2">
              <p className="font-body text-base md:text-lg text-foreground font-semibold leading-tight">
                Petros Selekos &amp; Angelika Gouskou
              </p>
              <p className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-widest mt-1">
                Managing Partners
              </p>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <a
              href={codeOfEthicsPdf.url}
              download="Code_of_Ethics.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn mt-4 self-start"
            >
              Download Code of Ethics
              <span aria-hidden="true">↓</span>
            </a>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CodeOfEthicsSection;
