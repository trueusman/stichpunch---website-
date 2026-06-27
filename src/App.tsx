import React, { useState, useEffect } from "react";

// Import modular layouts
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";
import WhyChooseUs from "./components/WhyChooseUs";
import PricingPlans from "./components/PricingPlans";
import CategoryDetailSections from "./components/CategoryDetailSections";
import CategoryPage from "./components/CategoryPage";
import PortfolioShowcase from "./components/PortfolioShowcase";
import Testimonials from "./components/Testimonials";
import FormatExplainer from "./components/FormatExplainer";
import AboutSection from "./components/AboutSection";
import CtaBanner from "./components/CtaBanner";
import OrderForm from "./components/OrderForm";
import PaymentSection from "./components/PaymentSection";
import FooterSection from "./components/FooterSection";
import CookieCard from "./components/CookieCard";
import PromoPopup from "./components/PromoPopup";
import IntroSplash from "./components/IntroSplash";

type CatPage = "digitizing" | "vector" | "patches" | "before_after" | null;

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [catPage, setCatPage] = useState<CatPage>(null);
  const [showIntro, setShowIntro] = useState(true);

  // When a category page opens scroll to top, when closed restore position
  useEffect(() => {
    if (catPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [catPage]);

  // Track scroll position to update header nav highlighted state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "pricing", "portfolio", "cat-preview", "formats", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToQuote = () => {
    // If on a cat page, go back first then scroll
    if (catPage) {
      setCatPage(null);
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openCatPage = (cat: "digitizing" | "vector" | "patches" | "before_after") => {
    setCatPage(cat);
  };

  const closeCatPage = () => {
    setCatPage(null);
    // Scroll back to the preview section
    setTimeout(() => {
      document.getElementById("cat-preview")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ── Category full-page view ──
  if (catPage) {
    return (
      <div className="relative min-h-screen bg-white">
        {showIntro && <IntroSplash onDone={() => setShowIntro(false)} />}
        <Header onQuoteClick={handleScrollToQuote} activeSection="" onCatPageOpen={openCatPage} />
        <CategoryPage
          category={catPage}
          onBack={closeCatPage}
          onQuoteClick={handleScrollToQuote}
        />
      </div>
    );
  }

  // ── Main website ──
  return (
    <div className="relative min-h-screen bg-navy-950 flex flex-col justify-between selection:bg-gold-500/20">

      {showIntro && <IntroSplash onDone={() => setShowIntro(false)} />}

      <Header onQuoteClick={handleScrollToQuote} activeSection={activeTab} onCatPageOpen={openCatPage} />

      <main className="flex-grow">

        <Hero onQuoteClick={handleScrollToQuote} />

        <PortfolioShowcase />
        <CategoryDetailSections onViewMore={openCatPage} />

        <ServicesList onQuoteClick={handleScrollToQuote} />
        <WhyChooseUs />
        <PricingPlans onQuoteClick={handleScrollToQuote} />

        <Testimonials />
        <FormatExplainer />
        <AboutSection />
        <CtaBanner onQuoteClick={handleScrollToQuote} />
        <OrderForm />
        <PaymentSection />

      </main>

      <FooterSection />
      <CookieCard />
      <PromoPopup />

    </div>
  );
}
