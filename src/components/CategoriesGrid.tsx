import React, { useState } from "react";
import { Sparkles, Compass, Maximize, Palette, Briefcase, ShieldAlert, Cpu, Activity, CircleDot, Hourglass } from "lucide-react";
import { CATEGORIES_DATA } from "../data";
import { motion } from "motion/react";

export default function CategoriesGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Maps icon names to Lucide icons
  const renderCatIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="h-4 w-4 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />;
      case "Compass":
        return <Compass className="h-4 w-4 text-gold-400 group-hover:spin-slow transition-transform" />;
      case "Maximize":
        return <Maximize className="h-4 w-4 text-gold-400 group-hover:scale-110 transition-transform" />;
      case "Palette":
        return <Palette className="h-4 w-4 text-gold-400 group-hover:rotate-6 transition-transform" />;
      case "Briefcase":
        return <Briefcase className="h-4 w-4 text-gold-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="h-4 w-4 text-gold-400" />;
      default:
        return <Cpu className="h-4 w-4 text-gold-400" />;
    }
  };

  // Motion variants for viewport animation triggers
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 15 } 
    }
  };

  return (
    <section id="categories" className="py-24 bg-navy-950 relative overflow-hidden scroll-mt-12">
      
      {/* CNC Axis Measurement Lines Decorator */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-12 left-12 w-32 h-32 opacity-5 pointer-events-none hidden lg:block">
        <div className="border border-slate-800 w-full h-full rounded-full border-dashed animate-spin-slow" />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-slate-500 tracking-wider">
          CNC_COORDS
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest text-gold-400 bg-gold-400/10 border border-gold-500/15 px-3 py-1 rounded-full uppercase">
              Production Styles
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 tracking-tight">
              Specialized Embroidery &amp; Art Layouts
            </h2>
            <p className="text-slate-350 mt-3 text-sm sm:text-base leading-relaxed">
              Each garment type presents unique substrate challenges. We calibrate densities, stitch limits, pull-compensation parameters, and lock-down stitches corresponding exactly to standard placement surfaces.
            </p>
          </div>
          <div className="text-slate-400 text-xs font-mono border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-2 md:pl-6 max-w-sm leading-relaxed">
             Flat hats, tubular collars, heavy canvas jackets, delicate activewear, applique layers, and oversize back panels are digitized and built specifically for zero thread-breaks.
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-55px" }}
        >
          {CATEGORIES_DATA.map((cat, idx) => {
            const isHovered = hoveredId === cat.id;
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                className="group relative bg-navy-950 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-[26rem] flex flex-col justify-end cursor-pointer"
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -6 }}
              >
                {/* Category Image Overlay */}
                <div className="absolute inset-0 z-0 select-none">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-45 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Modern dark radial gradients over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent" />
                  
                  {/* CAD crosshair coordinate simulator lines that show on hover (next-level animation) */}
                  <div className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                    {/* Horizontal & Vertical grid crosshair lines */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold-400/20 border-dashed border-b" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold-400/20 border-dashed border-r" />
                    <div className="absolute bottom-4 left-4 font-mono text-[9px] text-gold-400/60 bg-navy-950/70 py-0.5 px-1.5 rounded">
                      Y: {100 + (idx * 25)}px | X: {50 + (idx * 15)}px
                    </div>
                  </div>
                </div>

                {/* Simulated Stitch Machine Sequence Runner (Next-Level Visual) */}
                {isHovered && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-navy-900 overflow-hidden z-20">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-teal-400 via-gold-400 to-amber-500"
                      initial={{ left: "-100%" }}
                      animate={{ left: "100%" }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.8, 
                        ease: "easeInOut" 
                      }}
                      style={{ position: "absolute", width: "30%" }}
                    />
                  </div>
                )}

                {/* Category Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 space-y-3.5 w-full bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="bg-navy-900/90 border border-gold-500/20 p-2.5 rounded-xl backdrop-blur-sm self-start group-hover:border-gold-300/40 transition-colors">
                        {renderCatIcon(cat.iconName)}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-gold-300 uppercase bg-navy-900/80 px-2.5 py-1 rounded-lg border border-navy-850">
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

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-gold-300 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Expanded metadata shown on hover */}
                  <div className="pt-3 border-t border-navy-850 mt-3 transition-colors group-hover:border-navy-800">
                    <span className="text-[9px] font-mono uppercase text-slate-500 tracking-widest block">
                      Stitch CAD Architecture
                    </span>
                    <span className="text-xs text-gold-300 block font-light mt-1 flex items-center gap-1.5 leading-relaxed">
                      <CircleDot className="h-3.5 w-3.5 text-gold-500 flex-shrink-0 animate-pulse" />
                      {cat.technique}
                    </span>
                  </div>

                  {/* Subtle interactive simulation completion bar */}
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pt-2"
                    >
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 mb-1">
                        <span>Simulation progress</span>
                        <span>100% CAD Optimized</span>
                      </div>
                      <div className="w-full bg-navy-900 h-1 rounded-full overflow-hidden">
                        <motion.div 
                          className="bg-gold-400 h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
