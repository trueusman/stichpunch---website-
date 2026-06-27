import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/images/stichpunch.png";

interface Props {
  onDone: () => void;
}

const FULL_TEXT = "Welcome to Stich Punch";

export default function IntroSplash({ onDone }: Props) {
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState("");

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(interval);
    }, 55); // speed per character
    return () => clearInterval(interval);
  }, []);

  // Exit timing
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), 2800);
    const t2 = setTimeout(() => onDone(), 3300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-6"
          style={{ background: "#0a0f1e" }}
        >
          {/* Lottie */}
          <motion.div
            className="w-52 h-52"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <DotLottieReact
              src="https://lottie.host/fe370ec5-cd5d-40b1-9020-d8eb147bd0b6/ZJNA43WBCy.lottie"
              loop
              autoplay
            />
          </motion.div>

          {/* Welcome text block */}
          <motion.div
            className="flex flex-col items-center gap-3 text-center px-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {/* Logo row */}
            <div className="flex items-center gap-3 mb-1">
              <img src={logoImg} alt="Stich Punch" className="h-12 w-12 object-contain" />
              <div className="text-left">
                {/* Typewriter line */}
                <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-none">
                  {typed.startsWith("Welcome to ") ? (
                    <>
                      <span className="text-white">Welcome to </span>
                      <span style={{ color: "#f96f1f" }}>Stich</span>
                      <span style={{ color: "#1cb8df" }}> Punch</span>
                      {/* blinking cursor */}
                      {typed.length < FULL_TEXT.length && (
                        <span className="animate-pulse text-white">|</span>
                      )}
                    </>
                  ) : (
                    <>
                      <span className="text-white">{typed}</span>
                      <span className="animate-pulse text-white">|</span>
                    </>
                  )}
                </h1>
              </div>
            </div>

            <p className="text-slate-500 text-xs font-mono tracking-[0.2em] uppercase">
              Digitizing &amp; Vector Art
            </p>

            {/* Loading bar */}
            <div className="w-56 h-[3px] bg-slate-800 rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #f96f1f, #1cb8df)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 2.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
