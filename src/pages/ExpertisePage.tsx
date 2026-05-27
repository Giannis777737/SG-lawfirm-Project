import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpertiseSection from "@/components/ExpertiseSection";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";

const ExpertisePage = () => {
  useDocumentTitle("Our Expertise");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Our Expertise | Demo Company"
        description="Specialized legal counsel across banking, corporate, competition, real estate, IP, litigation, hotels, telecommunications and more."
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-36">
        <ExpertiseSection />
      </main>
      <Footer />
    </div>
  );
};

export default ExpertisePage;
