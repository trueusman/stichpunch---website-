import React, { useState } from "react";
import { HardDrive, HelpCircle, RefreshCw, FileCheck, CheckCircle2 } from "lucide-react";
import { DIGITIZING_FORMATS, VECTOR_FORMATS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function FormatExplainer() {
  const [activeTab, setActiveTab] = useState<"digitizing" | "vector">("digitizing");

  const renderedFormats = activeTab === "digitizing" ? DIGITIZING_FORMATS : VECTOR_FORMATS;

  return (
    <section id="formats" className="py-24 bg-navy-950 relative overflow-hidden scroll-mt-12">
      
      {/* Professional stitch technical pattern background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(249,111,31,0.5) 1px, transparent 1px), radial-gradient(rgba(249,111,31,0.5) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
        backgroundPosition: "0 0, 8px 8px"
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/15 px-3.5 py-1.5 rounded-full uppercase">
            File Deliverables
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 leading-tight">
            Industry Standard Machine &amp; Vector Formats
          </h2>
          <p className="text-slate-355 text-slate-350 mt-4 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Never guess if your production files will load correctly. We deliver clean, double-checked native exports compatible instantly with your workshop systems.
          </p>
        </motion.div>

        {/* Division Selector Toggles with active layout spring indicators */}
        <div className="flex border border-slate-800 max-w-lg mx-auto mb-14 bg-navy-900 p-1.5 rounded-2xl shadow-sm relative">
          <button
            onClick={() => setActiveTab("digitizing")}
            className={`relative w-1/2 py-3.5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center space-x-2 transition-colors duration-200 z-10 cursor-pointer ${
              activeTab === "digitizing" ? "text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeTab === "digitizing" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-gold-500 rounded-xl shadow-md -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <HardDrive className="h-4 w-4" />
            <span>Digitizing Formats</span>
          </button>
          
          <button
            onClick={() => setActiveTab("vector")}
            className={`relative w-1/2 py-3.5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center space-x-2 transition-colors duration-200 z-10 cursor-pointer ${
              activeTab === "vector" ? "text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeTab === "vector" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-gold-500 rounded-xl shadow-md -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <RefreshCw className="h-4 w-4" />
            <span>Vector Formats</span>
          </button>
        </div>

        {/* Formats Grid Cards wrapped in AnimatePresence for tab switching transitions */}
        <div className="min-h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {renderedFormats.map((format, idx) => (
                <motion.div
                  key={format.extension + idx}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="bg-navy-900 border border-slate-800 rounded-2xl p-6 sm:p-7 flex items-start space-x-4 sm:space-x-5 hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle design element: corner stitch mark */}
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-10 group-hover:opacity-25 transition-opacity">
                    <div className="absolute top-2 right-2 w-4 h-[2px] bg-slate-700" />
                    <div className="absolute top-2 right-2 w-[2px] h-4 bg-slate-700" />
                  </div>

                  {/* Colored Format Dot/Box Badge */}
                  <div className={`${format.logoColor} text-white font-mono font-black text-base sm:text-lg rounded-xl w-14 sm:w-16 h-14 sm:h-16 text-center tracking-wider shadow-sm flex-shrink-0 flex items-center justify-center mt-1`}>
                    {format.extension}
                  </div>

                  {/* Format Descriptions content */}
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-gold-400 transition-colors">
                        {format.fullName}
                      </h3>
                      <span className="inline-flex items-center space-x-1 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono tracking-widest font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                        <FileCheck className="h-3 w-3 flex-shrink-0" />
                        <span>VERIFIED</span>
                      </span>
                    </div>

                    {/* Quick description line added */}
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {format.description}
                    </p>

                    <div className="pt-2.5 border-t border-slate-800 mt-2.5 flex items-center space-x-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold-500 flex-shrink-0 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400 leading-normal">
                        Primary Purpose: <strong className="text-white font-medium">{format.purpose}</strong>
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Support Help Footer */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center space-x-2 bg-navy-900 border border-slate-800 px-4 py-2.5 rounded-2xl text-xs text-slate-350 font-mono shadow-sm">
            <HelpCircle className="h-4 w-4 text-gold-500" />
            <span>Need other files? We support SEW, EXP, JEF, PES, CND, PLT and EPS formats upon custom checkout request.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
