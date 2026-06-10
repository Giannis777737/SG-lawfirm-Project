import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpertiseSection from "@/components/ExpertiseSection";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";
import { Link } from "react-router-dom";

const ExpertisePage = () => {
  useDocumentTitle("Our Expertise");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Our Expertise | Selekos-Gouskou & Co"
        description="Specialized legal counsel across banking, corporate, competition, real estate, intellectual property, litigation, privatization and investments."
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-36">
        <ExpertiseSection />
        <div className="editorial-container pb-20">
          <Link to="/" className="editorial-link">
            <span>←</span> Back to home page
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExpertisePage;
