import React, { useState, useEffect } from "react";
import { Cpu, Eye, Star, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, Pause, Play } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "./SectionHeading";

// Select one best featured item per category
const getFeaturedByCategory = () => {
  const categories = ["embroidery", "vector", "patches", "before_after"];
  return categories.map(cat => 
    PORTFOLIO_DATA.find(item => item.category === cat && item.featured)
  ).filter(Boolean);
};

interface PortfolioShowcaseProps {
  onCatPageOpen?: (cat: "digitizing" | "vector" | "patches") => void;
}

export default function PortfolioShowcase({ onCatPageOpen }: PortfolioShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredItems = getFeaturedByCategory();
  const currentItem = featuredItems[currentIndex];
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    
    const autoPlayInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoPlayInterval);
  }, [currentIndex, isPaused, featuredItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
  };

  const openCategoryPage = () => {
    if (!currentItem || !onCatPageOpen) return;
    
    // Map portfolio categories to category page types
    const categoryMap: Record<string, "digitizing" | "vector" | "patches"> = {
      "embroidery": "digitizing",
      "vector": "vector",
      "patches": "patches",
      "before_after": "vector" // Before/after usually shows vector work
    };
    
    const catPageType = categoryMap[currentItem.category];
    if (catPageType) {
      onCatPageOpen(catPageType);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 scroll-mt-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeading
          badge="Featured Work"
          badgeIcon={Sparkles}
          title="Our Premium Portfolio Showcase"
          subtitle="Hand-selected examples of our finest digitizing, vector art, and patch design work."
          accent="blue"
          align="center"
        />

        {/* Portfolio Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            {currentItem && (
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 hover:shadow-3xl transition-shadow duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  
                  {/* Image Side */}
                  <motion.div 
                    className="relative aspect-square md:aspect-auto bg-slate-100 overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    onClick={openCategoryPage}
                  >
                    <motion.img
                      src={currentItem.imageUrl}
                      alt={currentItem.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    
                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span
                        className="text-xs font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md"
                        style={{ background: "rgba(255,255,255,0.95)", color: "#1cb8df", border: "1px solid rgba(28,184,223,0.3)" }}
                      >
                        {currentItem.category}
                      </span>
                    </motion.div>

                    {/* Featured Star */}
                    {currentItem.featured && (
                      <motion.div 
                        className="absolute top-4 right-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      >
                        <span
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md"
                          style={{ background: "rgba(249,111,31,0.95)", color: "#fff" }}
                        >
                          <Star className="h-3 w-3 fill-white" />
                          Featured
                        </span>
                      </motion.div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Hover Zoom Icon */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl">
                        <Eye className="h-8 w-8 text-[#f96f1f]" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Details Side */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    
                    {/* Title */}
                    <motion.h3 
                      className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentItem.title}
                    </motion.h3>

                    {/* Stats Row */}
                    {(currentItem.stitchCount || currentItem.colors) && (
                      <motion.div 
                        className="flex flex-wrap gap-3 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {currentItem.stitchCount && (
                          <motion.span 
                            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                            whileHover={{ scale: 1.05, backgroundColor: "#1cb8df", color: "#fff", borderColor: "#1cb8df" }}
                            transition={{ duration: 0.2 }}
                          >
                            {currentItem.stitchCount}
                          </motion.span>
                        )}
                        {currentItem.colors && (
                          <motion.span 
                            className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                            whileHover={{ scale: 1.05, backgroundColor: "#f96f1f", color: "#fff", borderColor: "#f96f1f" }}
                            transition={{ duration: 0.2 }}
                          >
                            {currentItem.colors} Colors
                          </motion.span>
                        )}
                      </motion.div>
                    )}

                    {/* Description */}
                    <motion.p 
                      className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {currentItem.details}
                    </motion.p>

                    {/* Software Used */}
                    <motion.div 
                      className="flex items-center gap-2 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Cpu className="h-5 w-5 text-slate-400" />
                      <span className="text-sm font-medium text-slate-500">
                        {currentItem.softwareUsed}
                      </span>
                    </motion.div>

                    {/* View Button */}
                    <motion.button
                      onClick={openCategoryPage}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm uppercase tracking-wider shadow-lg w-full md:w-auto"
                      style={{ background: "#f96f1f" }}
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249,111,31,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Eye className="h-4 w-4" />
                      View Full Details
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.button>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border-2 border-slate-200 flex items-center justify-center transition-all z-20 hover:border-[#f96f1f]"
            whileHover={{ scale: 1.15, x: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous work"
          >
            <ChevronLeft className="h-7 w-7 text-slate-700" strokeWidth={3} />
          </motion.button>
          
          <motion.button
            onClick={handleNext}
            className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border-2 border-slate-200 flex items-center justify-center transition-all z-20 hover:border-[#f96f1f]"
            whileHover={{ scale: 1.15, x: 8, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next work"
          >
            <ChevronRight className="h-7 w-7 text-slate-700" strokeWidth={3} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-4 mt-8">
          
          {/* Play/Pause Button */}
          <motion.button
            onClick={() => setIsPaused(!isPaused)}
            className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-[#f96f1f] transition-colors shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <Play className="h-4 w-4 text-slate-700 ml-0.5" fill="currentColor" />
            ) : (
              <Pause className="h-4 w-4 text-slate-700" fill="currentColor" />
            )}
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2">
            {featuredItems.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPaused(true); // Pause when manually selecting
                }}
                className="rounded-full relative overflow-hidden"
                style={{
                  width: idx === currentIndex ? "32px" : "8px",
                  height: "8px",
                  backgroundColor: idx === currentIndex ? "#f96f1f" : "#cbd5e1",
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {/* Progress bar for active slide */}
                {idx === currentIndex && !isPaused && (
                  <motion.div
                    className="absolute inset-0 bg-[#1cb8df]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
