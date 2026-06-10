import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";
import { Link } from "react-router-dom";

const NewsPage = () => {
  useDocumentTitle("News & Insights");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="News & Insights | Selekos-Gouskou & Co"
        description="Latest news, insights and publications from Selekos-Gouskou & Co."
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-36">
        <div className="editorial-container pt-4">
          <Link to="/#news" className="editorial-link">
            <span>←</span> Back to News & Insights on home
          </Link>
        </div>
        <NewsSection />
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

export default NewsPage;
