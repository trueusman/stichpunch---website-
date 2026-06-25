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
            className="relative bg-navy-900 border border-slate-700 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Top gradient accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500" />

            {/* Close button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 rounded-full p-1.5"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="px-8 py-10 text-center flex flex-col items-center gap-5">

              {/* Badge */}
              <div className="flex items-center gap-2 bg-[#1cb8df]/10 border border-[#1cb8df]/20 px-4 py-1.5 rounded-full">
                <Sparkles className="h-3.5 w-3.5 text-[#1cb8df] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#1cb8df] uppercase">
                  Stitch Punch — Limited Offer
                </span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Get Your First<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
                    Custom Logo
                  </span><br />
                  Absolutely FREE
                </h2>
              </div>

              {/* Subtext */}
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Try our premium digitizing & vector art service — your first logo is on us. No strings attached.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col w-full gap-3 mt-2">
                <a
                  href="mailto:sales@stichpunch.com?subject=Free Logo Claim&body=Hi, I want to claim my free custom logo!"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:brightness-110 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg text-center"
                >
                  🎁 Try This Opportunity
                </a>
                <button
                  onClick={() => setShow(false)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
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
