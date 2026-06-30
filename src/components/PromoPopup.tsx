import React, { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PromoPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 40000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #f96f1f, #1cb8df)" }} />

            {/* Close button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors bg-slate-100 hover:bg-slate-200 rounded-full p-1.5"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="px-8 py-10 text-center flex flex-col items-center gap-5">

              {/* Badge */}
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: "rgba(249,111,31,0.08)", border: "1px solid rgba(249,111,31,0.2)" }}>
                <Sparkles className="h-3.5 w-3.5 animate-pulse" style={{ color: "#f96f1f" }} />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase" style={{ color: "#f96f1f" }}>
                  Stitch Punch — Limited Offer
                </span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  Get Your First<br />
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #f96f1f, #1cb8df)" }}>
                    Left Chest Logo
                  </span><br />
                  Absolutely FREE
                </h2>
              </div>

              {/* Subtext */}
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Try our premium digitizing & vector art service — your first left chest logo is on us. No strings attached.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col w-full gap-3 mt-2">
                <a
                  href="mailto:sales@stichpunch.com?subject=Free Left Chest Logo Claim&body=Hi, I want to claim my free left chest logo!"
                  className="w-full text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg text-center hover:brightness-110"
                  style={{ background: "#f96f1f" }}
                >
                  🎁 Try This Opportunity
                </a>
                <button
                  onClick={() => setShow(false)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  No Thanks
                </button>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
