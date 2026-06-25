import React from "react";
import { ShieldAlert, Award, Star, Watch, Zap } from "lucide-react";
import { motion } from "motion/react";
import patchImg from "../assets/images/embroidered_patch_1782158664945.jpg";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Award className="h-5 w-5" style={{ color: "#1cb8df" }} />,
      title: "Master Level Digitizers",
      desc: "Our senior design team comprises visual trade legends with 15+ years hand-drafting paths under Wilcom and Corell layouts."
    },
    {
      icon: <Watch className="h-5 w-5" style={{ color: "#1cb8df" }} />,
      title: "Surgical Speeds",
      desc: "Get digital file proofs back in average 8-hour delivery. Never stall client uniform sewing runs again."
    },
    {
      icon: <Zap className="h-5 w-5" style={{ color: "#1cb8df" }} />,
      title: "Flawless Path Integrity",
      desc: "Every curve is tested via software simulation first to correct density strains, looping jump threads, and long underlays."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 90, damping: 16 } 
    }
  };

  const imageCardVariants = {
    hidden: { opacity: 0, scale: 0.96, x: 25 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 70, damping: 18, delay: 0.2 } 
    }
  };

  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative overflow-hidden scroll-mt-12">
      <div className="absolute inset-0 bg-[#070b14]/50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(28,184,223,0.04)" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block Content with stagger anim */}
          <motion.div 
            className="lg:col-span-12 xl:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase"
              style={{ color: "#1cb8df", background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}
            >
              WHO WE ARE
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight"
            >
              Mastering the Collision of Threads &amp; Vector Technology
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-light"
            >
              We started StitchCraft with a simple purpose: to build digital files that execute flawlessly in physical production workshops without pulling stitches or splitting curves. 
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-slate-500 text-xs sm:text-xs leading-relaxed max-w-2xl"
            >
              While other sites use generic automatic tracing tools that overload embroidery needles and cause multiple thread breaks, our experts outline and punch every single vector curve and jump thread manually. It is a slow, highly calculated design ritual that saves your physical machines from continuous mechanical wear and ensures perfect stitch registration on any fabric.
            </motion.p>

            {/* Highlights lists with micro spring entries */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {highlights.map((hl, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex space-x-4 bg-slate-50/30 p-4 rounded-xl border border-navy-850 hover:bg-slate-50/60 transition-all cursor-default"
                >
                  <div className="bg-white p-2.5 rounded-lg border border-navy-800/80 self-start" style={{ color: "#1cb8df" }}>
                    {hl.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-100 text-sm sm:text-base tracking-wide">
                      {hl.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-xs mt-1 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Block Media Box with custom zoom reveal */}
          <motion.div 
            className="lg:col-span-12 xl:col-span-5 h-full flex flex-col justify-center"
            variants={imageCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative group">
              {/* Overlapping graphics */}
              <div className="absolute -top-4 -left-4 w-full h-full border rounded-2xl pointer-events-none group-hover:scale-[1.01] transition-transform duration-500" style={{ borderColor: "rgba(28,184,223,0.12)" }} />
              
              <div className="bg-slate-50 border border-navy-850 p-3 rounded-2xl shadow-3xl relative z-10 overflow-hidden">
                <img
                  src={patchImg}
                  alt="Craftsmanship patch closeup"
                  className="w-full h-[22rem] object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro overlay statistics specs on image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 border border-navy-800 p-4 rounded-xl shadow-lg flex items-center justify-between text-xs font-mono text-slate-600">
                  <div className="space-y-1">
                    <span className="text-[9px] text-slate-500 block uppercase tracking-wider">STITCH DENSITY</span>
                    <span className="font-bold text-slate-100 text-xs block">12,400 manual paths</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-500 block uppercase tracking-wider">STABILIZER GUIDE</span>
                    <span className="font-bold text-xs block" style={{ color: "#1cb8df" }}>Cutaway heavy guide</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
