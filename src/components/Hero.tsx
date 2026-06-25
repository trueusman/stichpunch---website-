import React, { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, ShoppingCart, PackageCheck, UserCheck, Star, Globe } from "lucide-react";
import { motion } from "motion/react";
import heroVideo from "../assets/hero-video.mp4";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      const v = videoRef.current;
      if (v && v.paused) v.play().catch(() => {});
    };
    window.addEventListener("click", playVideo, { once: true });
    window.addEventListener("touchstart", playVideo, { once: true });
    window.addEventListener("mouseover", playVideo, { once: true });
    return () => {
      window.removeEventListener("click", playVideo);
      window.removeEventListener("touchstart", playVideo);
      window.removeEventListener("mouseover", playVideo);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0a]">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-60"
          autoPlay muted loop playsInline preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 w-full">
          <motion.div
            className="max-w-2xl flex flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 bg-black/50 border border-white/15 px-4 py-2 rounded-full w-fit backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase font-bold">
                CAD-Calibrated Embroidery Architects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={item} className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
              Premium{" "}
              <span className="text-yellow-400">Embroidery<br />Digitizing</span>{" "}
              &amp; Vector Art<br />Services
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={item} className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
              Experience CAD-calibrated stitch architecture, designed for zero thread breaks, perfect pull-compensation, and stunning physical density. Our master digitizers deliver industry-grade embroidery files in a fast{" "}
              <span className="text-yellow-400 font-semibold underline decoration-yellow-400/40 underline-offset-4">8 to 12 hour cycle.</span>
            </motion.p>

            {/* Bullet points 2x2 */}
            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "8 to 12 Hour Super Fast Turnaround",
                "100% Manual, CAD-Calibrated Stitch Perfection",
                "Logo Puckering & Alignment Engineering",
                "Embroidery File Online Verification & Approval",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2.5 text-white/80 text-xs sm:text-sm">
                  <div className="mt-0.5 h-4 w-4 rounded-full border border-yellow-400/60 bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <svg className="h-2.5 w-2.5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onQuoteClick}
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-7 py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all shadow-lg shadow-yellow-400/20 active:scale-95"
              >
                <Sparkles className="h-4 w-4" />
                Get Quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onQuoteClick}
                className="flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-yellow-400 text-white hover:text-yellow-400 font-bold px-7 py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all active:scale-95"
              >
                <ShoppingCart className="h-4 w-4" />
                Order Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: <PackageCheck className="h-6 w-6 text-yellow-400" />, value: "100+", label: "Daily Orders" },
              { icon: <UserCheck className="h-6 w-6 text-yellow-400" />, value: "5+", label: "Years Experience" },
              { icon: <Star className="h-6 w-6 text-yellow-400" />, value: "5000+", label: "Satisfied Customers" },
              { icon: <Globe className="h-6 w-6 text-yellow-400" />, value: "50+", label: "Countries Served" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-5">
                <div className="bg-yellow-400/10 border border-yellow-400/20 p-2 rounded-xl flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-black text-yellow-400 leading-none">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
