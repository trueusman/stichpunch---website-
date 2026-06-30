import React, { useState } from "react";
import { HardDrive, HelpCircle, RefreshCw, FileCheck, CheckCircle2 } from "lucide-react";
import { DIGITIZING_FORMATS, VECTOR_FORMATS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "./SectionHeading";

export default function FormatExplainer() {
  const [activeTab, setActiveTab] = useState<"digitizing" | "vector">("digitizing");

  const renderedFormats = activeTab === "digitizing" ? DIGITIZING_FORMATS : VECTOR_FORMATS;

  return (
    <section id="formats" className="py-24 bg-white relative overflow-hidden scroll-mt-12">
      
      {/* Professional stitch technical pattern background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(249,111,31,0.5) 1px, transparent 1px), radial-gradient(rgba(249,111,31,0.5) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
        backgroundPosition: "0 0, 8px 8px"
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="File Deliverables"
          badgeIcon={HardDrive}
          title="Industry Standard Machine & Vector Formats"
          subtitle="Never guess if your production files will load correctly. We deliver clean, double-checked native exports compatible instantly with your workshop systems."
          accent="blue"
          align="center"
        />

        {/* Division Selector Toggles with active layout spring indicators */}
        <div className="flex border border-slate-200 max-w-lg mx-auto mb-14 bg-slate-50 p-1.5 rounded-2xl shadow-sm relative">
          <button
            onClick={() => setActiveTab("digitizing")}
            className={`relative w-1/2 py-3.5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center space-x-2 transition-colors duration-200 z-10 cursor-pointer ${
              activeTab === "digitizing" ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {activeTab === "digitizing" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-xl shadow-md -z-10"
                style={{ background: "#f96f1f" }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <HardDrive className="h-4 w-4" />
            <span>Digitizing Formats</span>
          </button>
          
          <button
            onClick={() => setActiveTab("vector")}
            className={`relative w-1/2 py-3.5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center space-x-2 transition-colors duration-200 z-10 cursor-pointer ${
              activeTab === "vector" ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {activeTab === "vector" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-xl shadow-md -z-10"
                style={{ background: "#f96f1f" }}
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
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {renderedFormats.map((format, idx) => (
                <motion.div
                  key={format.extension + idx}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start space-x-3 sm:space-x-4 hover:shadow-lg hover:border-[#1cb8df]/30 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle design element: corner stitch mark */}
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-10 group-hover:opacity-25 transition-opacity">
                    <div className="absolute top-2 right-2 w-4 h-[2px] bg-slate-700" />
                    <div className="absolute top-2 right-2 w-[2px] h-4 bg-slate-700" />
                  </div>

                  {/* Colored Format Dot/Box Badge */}
                  <div className={`${format.logoColor} text-slate-900 font-mono font-black text-sm sm:text-base rounded-lg w-11 sm:w-12 h-11 sm:h-12 text-center tracking-wider shadow-sm flex-shrink-0 flex items-center justify-center mt-0.5`}>
                    {format.extension}
                  </div>

                  {/* Format Descriptions content */}
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#f96f1f] transition-colors">
                        {format.fullName}
                      </h3>
                      <span className="inline-flex items-center space-x-1 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono tracking-widest font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                        <FileCheck className="h-3 w-3 flex-shrink-0" />
                        <span>VERIFIED</span>
                      </span>
                    </div>

                    {/* Quick description line added */}
                    <p className="text-slate-500 text-xs leading-relaxed font-sans">
                      {format.description}
                    </p>

                    <div className="pt-2.5 border-t border-slate-200 mt-2.5 flex items-center space-x-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 animate-pulse" style={{ color: "#1cb8df" }} />
                      <span className="text-[10px] font-mono text-slate-500 leading-normal">
                        Primary Purpose: <strong className="text-slate-900 font-medium">{format.purpose}</strong>
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
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl text-xs text-slate-500 font-mono shadow-sm">
            <HelpCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#1cb8df" }} />
            <span>Need other files? We support SEW, EXP, JEF, PES, CND, PLT and EPS formats upon custom checkout request.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
