import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";

const NewsPage = () => {
  useDocumentTitle("News & Publications");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="News & Publications | Demo Company"
        description="Latest news, insights and publications from Demo Company."
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-36">
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
