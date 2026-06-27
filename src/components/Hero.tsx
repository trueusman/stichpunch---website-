import React, { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, ShoppingCart, PackageCheck, UserCheck, Star, Globe } from "lucide-react";
import { motion } from "motion/react";
import heroVideo from "../assets/images/hero-video.mp4";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const play = () => { videoRef.current?.play().catch(() => {}); };
    // Auto-play immediately
    play();
    window.addEventListener("click", play, { once: true });
    window.addEventListener("mouseover", play, { once: true });
    return () => {
      window.removeEventListener("click", play);
      window.removeEventListener("mouseover", play);
    };
  }, []);

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } } };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* No overlay — show video clearly */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-10 w-full">
          <motion.div
            className="max-w-2xl flex flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ paddingTop: "2rem" }}
          >
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#1cb8df" }} />
              <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase font-semibold">
                CAD-Calibrated Embroidery Architects
              </span>
            </motion.div>

            {/* Heading — matches reference exactly */}
            <motion.h1 variants={item} className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight">
              Premium<br />
              <span style={{ color: "#f96f1f" }}>Embroidery<br />Digitizing</span>{" "}
              &amp; Vector<br />
              Art Services
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={item} className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
              Experience CAD-calibrated stitch architecture, designed for zero thread
              breaks, perfect pull-compensation, and stunning physical density.
              Fast{" "}
              <span className="font-semibold" style={{ color: "#f96f1f" }}>2 to 4 hour</span>{" "}
              turnaround. Fast service.
            </motion.p>

            {/* Bullets — 2x2 grid with sky blue checkmarks */}
            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "2–4 Hour Super Fast Turnaround",
                "100% Manual, CAD-Calibrated Stitch Perfection",
                "Logo Puckering & Alignment Engineering",
                "Embroidery File Online Verification & Approval",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white/85 text-sm">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(28,184,223,0.15)", border: "1.5px solid #1cb8df" }}>
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="#1cb8df" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-6 pt-2 items-center">

              {/* Get Quote button */}
              <button onClick={onQuoteClick} className="getquote-btn">
                Get Quote
              </button>
              {/* Hidden SVG filters still needed for Order Now if used elsewhere */}
              <svg height={0} width={0} style={{ position: "absolute" }}>
                <filter id="handDrawnNoise"><feTurbulence result="noise" numOctaves={8} baseFrequency="0.1" type="fractalNoise" /><feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale={3} in2="noise" in="SourceGraphic" /></filter>
                <filter id="handDrawnNoise2"><feTurbulence result="noise" numOctaves={8} baseFrequency="0.1" seed={1010} type="fractalNoise" /><feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale={3} in2="noise" in="SourceGraphic" /></filter>
                <filter id="handDrawnNoiset"><feTurbulence result="noise" numOctaves={8} baseFrequency="0.1" type="fractalNoise" /><feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale={6} in2="noise" in="SourceGraphic" /></filter>
                <filter id="handDrawnNoiset2"><feTurbulence result="noise" numOctaves={8} baseFrequency="0.1" seed={1010} type="fractalNoise" /><feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale={6} in2="noise" in="SourceGraphic" /></filter>
              </svg>

              {/* Animated circle-expand Order Now button */}
              <button onClick={onQuoteClick} className="order-animated-btn">
                <svg viewBox="0 0 24 24" className="order-arr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="order-text">Order Now</span>
                <span className="order-circle" />
                <svg viewBox="0 0 24 24" className="order-arr-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>

            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 border-t border-white/10"
        style={{ background: "rgba(10,15,30,0.85)", backdropFilter: "blur(10px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: <PackageCheck className="h-6 w-6" style={{ color: "#f96f1f" }} />, value: "100+", label: "Daily Orders" },
              { icon: <UserCheck className="h-6 w-6" style={{ color: "#f96f1f" }} />, value: "5+", label: "Years Experience" },
              { icon: <Star className="h-6 w-6" style={{ color: "#f96f1f" }} />, value: "5000+", label: "Satisfied Customers" },
              { icon: <Globe className="h-6 w-6" style={{ color: "#f96f1f" }} />, value: "50+", label: "Countries Served" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-5">
                <div className="p-2 rounded-xl flex-shrink-0" style={{ background: "rgba(249,111,31,0.12)", border: "1px solid rgba(249,111,31,0.2)" }}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
