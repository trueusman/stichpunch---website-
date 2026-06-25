import React from "react";
import { Cpu, Layers, ShieldCheck, ArrowRight, Zap, CheckCircle } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { motion } from "motion/react";
import patchesBg from "../assets/images/patches-bg.jpg.jpg";

interface ServicesProps {
  onQuoteClick: () => void;
}

export default function ServicesList({ onQuoteClick }: ServicesProps) {
  // Simple renderer mapping iconName string to a React component
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="h-6 w-6 text-navy-950 group-hover:rotate-45 transition-transform duration-500" />;
      case "Layers":
        return <Layers className="h-6 w-6 text-navy-950 group-hover:scale-110 transition-transform duration-300" />;
      case "Shield":
        return <ShieldCheck className="h-6 w-6 text-navy-950 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Cpu className="h-6 w-6 text-navy-950" />;
    }
  };

  // Motion variants
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: -25 },
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
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 16 }
    }
  };


  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-12 overflow-hidden">
      
      {/* Absolute decorative background canvas lines */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(249,111,31,0.06)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-800/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionHeaderVariants}
        >
          <span className="text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase" style={{ color: "#1cb8df", background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}>
            Core Master Crafts
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight leading-tight">
            Professional Multi-Format Design Solutions
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base leading-relaxed">
            Our specialized workspace houses deep technical knowledge in both traditional physical stitch mechanics and high-definition raster-to-vector mathematics.
          </p>
        </motion.div>

        {/* Services Grid with cascading entry */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(249,111,31,0.2)" }}
              className="bg-white border border-slate-200 shadow-sm/80 rounded-2xl shadow-md overflow-hidden transition-all duration-300 flex flex-col h-full group hover:border-[#f96f1f]/30"
            >
              {/* Animated top stripe color accent */}
              <div className="h-[5px] w-full origin-left scale-x-100 transition-transform duration-500" style={{ background: "#f96f1f" }} />
              
              <div className="p-8 flex flex-col flex-grow">
                {/* Icon & Specs Bar */}
                <div className="px-4 py-3 rounded-xl flex items-center justify-between mb-6 shadow-sm ring-4 ring-[#f96f1f]/10 group-hover:ring-[#f96f1f]/20 transition-all duration-300 w-full" style={{ background: "#f96f1f" }}>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0">
                      {renderIcon(service.iconName)}
                    </span>
                    <span className="font-mono text-xs font-bold text-navy-950 uppercase tracking-wider">
                      {service.id === "digitizing" && "Wilcom Digitizing"}
                      {service.id === "vector-art" && "Vector Art Redraw"}
                      {service.id === "patches" && "Custom Patch Tech"}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-white/20 text-navy-950 px-2.5 py-1 rounded uppercase tracking-wider">
                    {service.id === "digitizing" && "DST / EMB"}
                    {service.id === "vector-art" && "AI / SVG"}
                    {service.id === "patches" && "PVC / TEXTILE"}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3 transition-colors group-hover:text-[#f96f1f]">
                  {service.title}
                </h3>

                {/* Main Description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Production Specs box */}
                <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="flex items-center text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2.5">
                    <Zap className="h-3 w-3 mr-1.5 flex-shrink-0 animate-pulse" style={{ color: "#1cb8df" }} />
                    <span>Production Strategy</span>
                  </div>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-600 leading-relaxed">
                        <span className="mr-2 font-bold" style={{ color: "#1cb8df" }}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-600">
                      <div className="h-4.5 w-4.5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(28,184,223,0.1)", border: "1px solid rgba(28,184,223,0.25)" }}>
                        <CheckCircle className="h-3 w-3" style={{ color: "#1cb8df" }} />
                      </div>
                      <span className="text-slate-600 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Turnaround promise banner */}
                <div className="border-t border-slate-200 pt-5 mt-auto flex items-center gap-2.5 rounded-xl px-4 py-3" style={{ background: "rgba(249,111,31,0.08)", border: "1px solid rgba(249,111,31,0.2)" }}>
                  <Zap className="h-4 w-4 flex-shrink-0" style={{ color: "#f96f1f" }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: "#f96f1f" }}>
                    We will ready your logo in just 2 hours
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Highlight Banner Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-8 sm:p-12 text-center text-slate-900 mt-16 shadow-2xl overflow-hidden relative group"
          style={{ backgroundImage: `url(${patchesBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-white/75 pointer-events-none" />
          {/* Visual gradient orb structures */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-b from-[#f96f1f]/8 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-t from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="font-display font-medium text-xl sm:text-2xl text-slate-100 tracking-tight">
              Unsure if Digitizing or Vector Art is right for you?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our live virtual engine maps clarity coordinates, counts estimated stitches, and diagnoses fabric compatibility before you sew. Experience premium file-ready standards.
            </p>
            <div className="pt-4">
              <button
                onClick={onQuoteClick}
                className="text-white font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center space-x-2.5 mx-auto cursor-pointer"
                style={{ background: "#f96f1f" }}
              >
                <span>Launch Smart Diagnostics</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
