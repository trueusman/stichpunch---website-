import React, { useState } from "react";
import { Cpu, Eye, Star, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 18 },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    y: -12,
    transition: { duration: 0.2 },
  },
};

function categoryLabel(category: string) {
  if (category === "before_after") return "Vector Redraw";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState<"all" | "embroidery" | "vector" | "before_after" | "patches">("all");
  const [showAll, setShowAll] = useState(false);

  const featuredItems = PORTFOLIO_DATA.filter((i) => i.featured);

  const limitedFeatured = (() => {
    const counts: Record<string, number> = {};
    return featuredItems.filter((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
      return counts[item.category] <= 3;
    });
  })();

  const filteredItems = (showAll ? PORTFOLIO_DATA : limitedFeatured).filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-20 bg-white border-t border-b border-slate-200 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase"
            style={{ color: "#1cb8df", background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}
          >
            Proof of craft
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-3 tracking-tight leading-tight">
            Our Elite Design Portfolio
          </h2>
          <p className="text-slate-500 mt-2 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Hand-picked highlights from our best production work. Filter by type or view the full collection.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-6 bg-slate-50 p-1.5 rounded-xl max-w-xl mx-auto shadow-sm border border-slate-200">
          {(["all", "embroidery", "vector", "patches", "before_after"] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-3.5 py-2 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors duration-250 cursor-pointer ${
                  isActive ? "text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 rounded-lg shadow-sm -z-10"
                    style={{ background: "#f96f1f" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {filter === "all" ? "All" : filter.replace("_", " ")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured / All toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-full p-1 text-[10px] font-bold">
            <button
              onClick={() => setShowAll(false)}
              className="flex items-center gap-1 px-3 py-1 rounded-full transition-all"
              style={!showAll ? { background: "#f96f1f", color: "#fff" } : { color: "#64748b" }}
            >
              <Star className="h-3 w-3" />
              Featured
            </button>
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-1 px-3 py-1 rounded-full transition-all"
              style={showAll ? { background: "#1cb8df", color: "#fff" } : { color: "#64748b" }}
            >
              View All ({PORTFOLIO_DATA.length})
            </button>
          </div>
        </div>

        {/* Compact portfolio box grid */}
        <div className="min-h-64">
          <motion.div
            layout
            key={`${activeFilter}-${showAll}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  variants={cardVariants}
                  exit="exit"
                  whileHover={{ y: -5 }}
                  transition={{ layout: { type: "spring", stiffness: 200, damping: 26 } }}
                  className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:border-[#f96f1f]/35 transition-colors duration-300 cursor-pointer"
                >
                  {/* Square image box */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />

                    {/* Top badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-start justify-between gap-1 pointer-events-none">
                      <span
                        className="text-[8px] font-mono px-2 py-0.5 rounded-md uppercase tracking-wider border backdrop-blur-sm"
                        style={{ background: "rgba(255,255,255,0.92)", color: "#1cb8df", borderColor: "rgba(28,184,223,0.25)" }}
                      >
                        {categoryLabel(item.category)}
                      </span>
                      {item.featured && (
                        <span
                          className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider"
                          style={{ background: "rgba(249,111,31,0.92)", color: "#fff" }}
                        >
                          <Star className="h-2 w-2" />
                        </span>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <motion.div
                        initial={false}
                        className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out space-y-2"
                      >
                        {item.stitchCount && (
                          <div className="flex gap-2">
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/15 text-white border border-white/20">
                              {item.stitchCount}
                            </span>
                            {item.colors != null && (
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/15 text-white border border-white/20">
                                {item.colors} colors
                              </span>
                            )}
                          </div>
                        )}
                        <p className="text-[10px] text-slate-200 leading-snug line-clamp-2">{item.details}</p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-[9px] font-mono text-slate-300">
                            <Cpu className="h-3 w-3" style={{ color: "#1cb8df" }} />
                            {item.softwareUsed}
                          </span>
                          <span className="flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                            <Eye className="h-3 w-3" />
                            View
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Corner accent on hover */}
                    <div
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ background: "linear-gradient(90deg, #f96f1f, #1cb8df)" }}
                    />
                  </div>

                  {/* Compact footer */}
                  <div className="px-3 py-2.5 flex items-center justify-between gap-2 bg-white">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 tracking-tight truncate group-hover:text-[#f96f1f] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mt-0.5 truncate">
                        {item.softwareUsed}
                      </p>
                    </div>
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                      style={{ background: "rgba(249,111,31,0.1)", border: "1px solid rgba(249,111,31,0.25)" }}
                    >
                      <ArrowUpRight className="h-3 w-3" style={{ color: "#f96f1f" }} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-slate-400 text-sm py-12 font-mono"
            >
              No items in this category.
            </motion.p>
          )}
        </div>

      </div>
    </section>
  );
}
