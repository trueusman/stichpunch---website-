import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
  initials: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Apparel Brand Owner",
    text: "StichPunch delivered my logo digitized perfectly in under 2 hours. The quality was outstanding — zero thread breaks on the first run!",
    stars: 5,
    initials: "SJ",
    avatarColor: "#1cb8df",
  },
  {
    name: "Mike Torres",
    role: "Print Shop Manager",
    text: "I've used many digitizing services but none match StichPunch. Fast, professional, and the vector redraw was pixel perfect.",
    stars: 5,
    initials: "MT",
    avatarColor: "#f96f1f",
  },
  {
    name: "Emma Williams",
    role: "Embroidery Studio Owner",
    text: "Their team is fantastic. Great designs, excellent customer service, and they handle revisions so quickly. Highly recommended!",
    stars: 5,
    initials: "EW",
    avatarColor: "#1B2A6B",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#f8fafc" }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(28,184,223,0.04)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

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
              color: "#f96f1f",
              background: "rgba(249,111,31,0.08)",
              border: "1px solid rgba(249,111,31,0.2)",
            }}
          >
            Client Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed">
            Thousands of businesses trust StichPunch for fast, flawless embroidery
            digitizing and vector art.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-5 relative transition-all duration-300"
            >
              {/* Sky blue quote mark */}
              <Quote
                className="absolute top-6 right-6 w-9 h-9 opacity-15"
                style={{ color: "#1cb8df" }}
              />

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "#f96f1f" }}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                {/* Avatar with initials */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-slate-900 text-sm">{t.name}</span>
                  <span className="text-xs text-slate-400">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
