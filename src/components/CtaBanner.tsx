import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface CtaBannerProps {
  onQuoteClick: () => void;
}

export default function CtaBanner({ onQuoteClick }: CtaBannerProps) {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#0a0f1e" }}
    >
      {/* Subtle dot-grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(28,184,223,0.07)_1.5px,transparent_1.5px)] [background-size:22px_22px] pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, #1cb8df 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #f96f1f 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase mb-6"
            style={{
              color: "#1cb8df",
              background: "rgba(28,184,223,0.1)",
              border: "1px solid rgba(28,184,223,0.25)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            First Logo FREE
          </span>

          {/* Heading */}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-tight tracking-tight mb-5">
            Ready to Bring Your{" "}
            <span style={{ color: "#1cb8df" }}>Idea to Life?</span>
          </h2>

          {/* Sub-text */}
          <p className="text-slate-400 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Upload your artwork and get a production-ready digitized file in just 2 hours.
            First logo absolutely <span className="text-white font-semibold">FREE</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={onQuoteClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-sm uppercase tracking-widest shadow-lg transition-all duration-300 hover:brightness-110"
              style={{ backgroundColor: "#f96f1f" }}
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-sm uppercase tracking-widest border-2 border-white/30 hover:border-white/70 hover:bg-white/5 transition-all duration-300"
            >
              View Pricing
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
