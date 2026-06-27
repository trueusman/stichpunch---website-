import React from "react";
import { Zap, CheckCircle, Users, Globe, Cpu, Shield } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Zap,
    title: "2-4 Hour Turnaround",
    description: "Get your digitized logo back in just 2 to 4 hours",
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction",
    description: "Unlimited revisions until you're completely happy",
  },
  {
    icon: Users,
    title: "5000+ Happy Clients",
    description: "Trusted by embroiderers worldwide since day one",
  },
  {
    icon: Globe,
    title: "50+ Countries Served",
    description: "We deliver production-ready files globally",
  },
  {
    icon: Cpu,
    title: "Manual Digitizing Only",
    description: "No auto-software — every stitch path is hand-crafted",
  },
  {
    icon: Shield,
    title: "Secure File Delivery",
    description: "Your artwork is kept private and delivered safely",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(28,184,223,0.05)_1.5px,transparent_1.5px)] [background-size:22px_22px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span
            className="text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase"
            style={{
              color: "#1cb8df",
              background: "rgba(28,184,223,0.08)",
              border: "1px solid rgba(28,184,223,0.2)",
            }}
          >
            Why StichPunch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight leading-tight">
            Why Choose Stich Punch?
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed">
            We combine speed, precision, and world-class customer care to deliver
            production-ready files every single time.
          </p>
        </motion.div>

        {/* 3×2 Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 18px 36px -10px rgba(28,184,223,0.18)" }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col transition-all duration-300 group hover:border-[#1cb8df]/40"
              >
                {/* Top orange accent stripe */}
                <div className="h-1 w-full" style={{ backgroundColor: "#f96f1f" }} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(28,184,223,0.1)", border: "1px solid rgba(28,184,223,0.2)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#1cb8df" }} />
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-1.5 leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
