import React, { useState } from "react";
import { Sparkles, Compass, Maximize, Palette, Briefcase, ShieldAlert, Cpu, Activity, CircleDot, X, ZoomIn } from "lucide-react";
import { CATEGORIES_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function CategoriesGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lightboxItem, setLightboxItem] = useState<typeof CATEGORIES_DATA[0] | null>(null);

  const renderCatIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles": return <Sparkles className="h-4 w-4" style={{ color: "#1cb8df" }} />;
      case "Compass":  return <Compass className="h-4 w-4" style={{ color: "#1cb8df" }} />;
      case "Maximize": return <Maximize className="h-4 w-4" style={{ color: "#1cb8df" }} />;
      case "Palette":  return <Palette className="h-4 w-4" style={{ color: "#1cb8df" }} />;
      case "Briefcase":return <Briefcase className="h-4 w-4" style={{ color: "#1cb8df" }} />;
      case "ShieldAlert": return <ShieldAlert className="h-4 w-4" style={{ color: "#1cb8df" }} />;
      default: return <Cpu className="h-4 w-4" style={{ color: "#1cb8df" }} />;
    }
  };

  return (
    <section id="categories" className="py-24 bg-white relative overflow-hidden scroll-mt-12">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase" style={{ color: "#1cb8df", background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}>
              Production Styles
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
              Specialized Embroidery &amp; Art Layouts
            </h2>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat, idx) => {
            const isHovered = hoveredId === cat.id;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 90, damping: 15, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-[26rem] flex flex-col justify-end cursor-pointer"
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setLightboxItem(cat)}
              >
                {/* Image */}
                <div className="absolute inset-0 z-0 select-none">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-45 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                  {/* Click to zoom hint */}
                  <div className={`absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                    <ZoomIn className="h-4 w-4 text-slate-900" />
                  </div>
                </div>

                {/* Running bar on hover */}
                {isHovered && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-slate-50 overflow-hidden z-20">
                    <motion.div
                      className="h-full"
                      style={{ background: "#1cb8df", position: "absolute", width: "30%" }}
                      initial={{ left: "-100%" }}
                      animate={{ left: "100%" }}
                      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    />
                  </div>
                )}

                {/* Content — always show title & tag, show description only on hover */}
                <div className="relative z-10 p-6 sm:p-8 w-full bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent">

                  {/* Tag + Running badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="bg-slate-50/90 border p-2 rounded-xl backdrop-blur-sm" style={{ borderColor: "rgba(28,184,223,0.25)" }}>
                        {renderCatIcon(cat.iconName)}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-lg" style={{ color: "#1cb8df", background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}>
                        {cat.tag}
                      </span>
                    </div>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center space-x-1.5 text-teal-400 text-[10px] font-mono bg-teal-500/10 border border-teal-500/20 py-0.5 px-2 rounded-full"
                      >
                        <Activity className="h-3 w-3 animate-pulse" />
                        <span>RUNNING</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Title — always visible */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight transition-colors" style={{ color: isHovered ? "#f96f1f" : undefined }}>
                    {cat.title}
                  </h3>

                  {/* Description + technique — only on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2">
                          {cat.description}
                        </p>
                        <div className="pt-3 border-t border-navy-800 mt-3">
                          <span className="text-[9px] font-mono uppercase text-slate-500 tracking-widest block">
                            Stitch CAD Architecture
                          </span>
                          <div className="flex items-center gap-1.5 mt-1">
                            <CircleDot className="h-3 w-3 flex-shrink-0 animate-pulse" style={{ color: "#1cb8df" }} />
                            <span className="text-xs line-clamp-1" style={{ color: "#1cb8df" }}>{cat.technique}</span>
                          </div>
                        </div>
                        <div className="pt-2 mt-1">
                          <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 mb-1">
                            <span>Simulation progress</span>
                            <span>100% CAD Optimized</span>
                          </div>
                          <div className="w-full bg-slate-50 h-1 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: "#1cb8df" }}
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backdropFilter: "blur(12px)", background: "rgba(0,0,0,0.85)" }}
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="w-full max-h-[80vh] object-cover"
              />
              {/* Info overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "#1cb8df" }}>{lightboxItem.tag}</span>
                <h3 className="text-slate-900 font-bold text-2xl mt-1">{lightboxItem.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{lightboxItem.description}</p>
              </div>
              {/* Close button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-slate-900 p-2 rounded-full transition-all backdrop-blur-sm"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
