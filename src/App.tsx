import React, { useState, useEffect } from "react";

// Import modular layouts
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";
import PricingPlans from "./components/PricingPlans";
import CategoriesGrid from "./components/CategoriesGrid";
import PortfolioShowcase from "./components/PortfolioShowcase";
import FormatExplainer from "./components/FormatExplainer";
import AboutSection from "./components/AboutSection";
import OrderForm from "./components/OrderForm";
import FooterSection from "./components/FooterSection";
import CookieCard from "./components/CookieCard";
import PromoPopup from "./components/PromoPopup";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");

  // Track scroll position to update header nav highlighted state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "pricing", "categories", "portfolio", "formats", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
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
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-950 flex flex-col justify-between selection:bg-gold-500/20">
      
      {/* Universal Headings & Sticky Nav */}
      <Header onQuoteClick={handleScrollToQuote} activeSection={activeTab} />

      <main className="flex-grow">
        
        {/* Row 1: Hero Segment with Stitching video loops */}
        <Hero onQuoteClick={handleScrollToQuote} />

        {/* Row 2: Diagnostic Summary & Core Service Divisions */}
        <ServicesList onQuoteClick={handleScrollToQuote} />

        {/* Row 2.5: Pricing Plans & Custom Pro Plan */}
        <PricingPlans onQuoteClick={handleScrollToQuote} />

        {/* Row 3: Specialized Categories grid */}
        <CategoriesGrid />

        {/* Row 4: Design Portfolio and slider */}
        <PortfolioShowcase />

        {/* Row 5: Accepted Machine & Vector File format details */}
        <FormatExplainer />

        {/* Row 6: About the Digitizing brand */}
        <AboutSection />

        {/* Row 7: Order Intake & Interactive AI Station */}
        <OrderForm />

      </main>

      {/* Footer layout containing quick navigate paths */}
      <FooterSection />

      {/* Floating Cookie Consent Consent Module */}
      <CookieCard />

      {/* Promo Popup — appears after 3 seconds */}
      <PromoPopup />

    </div>
  );
}
