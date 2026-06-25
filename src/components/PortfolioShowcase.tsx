import React, { useState } from "react";
import { Cpu, Eye } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState<"all" | "embroidery" | "vector" | "before_after" | "patches">("all");

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-24 bg-navy-950 border-t border-b border-slate-800 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/15 px-3.5 py-1.5 rounded-full uppercase">
            Proof of craft
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
            Our Elite Design Portfolio
          </h2>
          <p className="text-slate-350 mt-4 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Inspect authentic production runs modeling our micro-precision specifications. Filter by work type to explore our full range of digitizing and vector artwork.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-14 bg-navy-900 p-2 rounded-2xl max-w-2xl mx-auto shadow-sm border border-slate-800">
          {(["all", "embroidery", "vector", "patches", "before_after"] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors duration-250 cursor-pointer ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 bg-gold-500 rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">
                  {filter === "all" ? "All Masterpieces" : filter.replace("_", " ")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid — all cards same style */}
        <div className="min-h-96">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-navy-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col hover:border-gold-500/40"
                >
                  {/* Image */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <span className="absolute top-4 left-4 bg-navy-950/95 text-white text-[10px] font-mono px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-wider border border-navy-850">
                      {item.category === "before_after" ? "Vector Redraw" : item.category}
                    </span>
                    {item.stitchCount && (
                      <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 text-white p-3.5 rounded-xl backdrop-blur-sm flex items-center justify-between text-xs border border-navy-800 shadow-lg">
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] block uppercase tracking-wider">Stitch Count</span>
                          <span className="font-bold text-sm text-gold-400 mt-0.5 block">{item.stitchCount}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] block uppercase tracking-wider">Thread Colors</span>
                          <span className="font-bold text-slate-200 mt-0.5 text-right block">{item.colors} Colors</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-gold-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-350 text-xs leading-relaxed">{item.details}</p>
                    </div>
                    <div className="border-t border-slate-800 pt-4 mt-6 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <div className="flex items-center space-x-1.5">
                        <Cpu className="h-3.5 w-3.5 text-gold-500 flex-shrink-0" />
                        <span>Platform: <strong className="text-white font-semibold">{item.softwareUsed}</strong></span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                        <span>Specs Verified</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
