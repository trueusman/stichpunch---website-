import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

// Import modular layouts
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopBanner from "./components/TopBanner";
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
import FloatingDiscountCard from "./components/FloatingDiscountCard";

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
    // Add smooth fade out animation before opening category page
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      mainContent.style.opacity = '0';
      mainContent.style.transform = 'translateY(-20px)';
    }
    
    setTimeout(() => {
      setCatPage(cat);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const closeCatPage = () => {
    // Add smooth fade out animation before closing category page
    const categoryContent = document.querySelector('.category-page-content');
    if (categoryContent) {
      categoryContent.classList.add('fade-out');
    }
    
    setTimeout(() => {
      setCatPage(null);
      // Scroll back to the preview section
      setTimeout(() => {
        document.getElementById("cat-preview")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 400);
  };

  // ── Category full-page view ──
  if (catPage) {
    return (
      <div className="relative min-h-screen bg-white">
        {showIntro && <IntroSplash onDone={() => setShowIntro(false)} />}
        <TopBanner />
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

      {/* Top Banner - Static Center Text with Fade Animation */}
      <TopBanner />

      <Header onQuoteClick={handleScrollToQuote} activeSection={activeTab} onCatPageOpen={openCatPage} />

      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >

        {/* 1. Home */}
        <Hero onQuoteClick={handleScrollToQuote} />

        {/* 2. About — right after Hero */}
        <AboutSection />

        {/* 3. Services */}
        <ServicesList onQuoteClick={handleScrollToQuote} />
        <WhyChooseUs />

        {/* 4. Portfolio */}
        <PortfolioShowcase onCatPageOpen={openCatPage} />

        {/* 5. Categories */}
        <CategoryDetailSections onViewMore={openCatPage} />

        {/* 6. Pricing */}
        <PricingPlans onQuoteClick={handleScrollToQuote} />

        {/* 7. File Formats */}
        <FormatExplainer />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Contact */}
        <CtaBanner onQuoteClick={handleScrollToQuote} />
        <OrderForm />
        <PaymentSection />

      </motion.main>

      <FooterSection />
      <CookieCard />
      <PromoPopup />
      <FloatingDiscountCard onQuoteClick={handleScrollToQuote} />

    </div>
  );
}
