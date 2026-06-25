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
    <section id="portfolio" className="py-24 bg-white border-t border-b border-slate-200 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase" style={{ color: "#1cb8df", background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}>
            Proof of craft
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight leading-tight">
            Our Elite Design Portfolio
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Inspect authentic production runs modeling our micro-precision specifications. Filter by work type to explore our full range of digitizing and vector artwork.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-14 bg-slate-50 p-2 rounded-2xl max-w-2xl mx-auto shadow-sm border border-slate-200">
          {(["all", "embroidery", "vector", "patches", "before_after"] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors duration-250 cursor-pointer ${
                  isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 rounded-lg shadow-sm -z-10"
                    style={{ background: "#f96f1f" }}
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
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col hover:border-[#f96f1f]/30"
                >
                  {/* Image */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <span className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-wider border" style={{ background: "rgba(28,184,223,0.12)", color: "#1cb8df", borderColor: "rgba(28,184,223,0.3)" }}>
                      {item.category === "before_after" ? "Vector Redraw" : item.category}
                    </span>
                    {item.stitchCount && (
                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 text-slate-900 p-3.5 rounded-xl backdrop-blur-sm flex items-center justify-between text-xs border border-navy-800 shadow-lg">
                        <div>
                          <span className="text-slate-500 font-mono text-[9px] block uppercase tracking-wider">Stitch Count</span>
                          <span className="font-bold text-sm mt-0.5 block" style={{ color: "#f96f1f" }}>{item.stitchCount}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 font-mono text-[9px] block uppercase tracking-wider">Thread Colors</span>
                          <span className="font-bold text-slate-200 mt-0.5 text-right block">{item.colors} Colors</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-[#f96f1f] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.details}</p>
                    </div>
                    <div className="border-t border-slate-200 pt-4 mt-6 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <div className="flex items-center space-x-1.5">
                        <Cpu className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#1cb8df" }} />
                        <span>Platform: <strong className="text-slate-900 font-semibold">{item.softwareUsed}</strong></span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
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
