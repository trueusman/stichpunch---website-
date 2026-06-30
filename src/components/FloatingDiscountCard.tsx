import React, { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingDiscountCardProps {
  onQuoteClick: () => void;
}

export default function FloatingDiscountCard({ onQuoteClick }: FloatingDiscountCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show card after 5 seconds (more natural timing)
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  const handleGetDiscount = () => {
    setIsVisible(false);
    onQuoteClick();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -400, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -400, opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="fixed left-6 bottom-6 z-[9999]"
        >
          {/* Badge Style Card - Compact & Clean */}
          <motion.div 
            className="relative flex items-stretch shadow-2xl cursor-pointer rounded-xl overflow-hidden"
            onClick={handleGetDiscount}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Left Part - Cyan "GET" */}
            <div className="relative bg-[#1cb8df] text-white px-4 py-2 flex items-center justify-center">
              {/* Sparkles decoration */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-0.5 -left-0.5"
              >
                <div className="w-1 h-2.5 bg-white/50 rounded-full rotate-45" />
                <div className="w-1 h-1.5 bg-white/50 rounded-full rotate-45 absolute -top-0.5 left-0.5" />
              </motion.div>
              
              <span className="font-black text-base tracking-tight">GET</span>
            </div>

            {/* Right Part - Orange "30% OFF" */}
            <div className="relative bg-gradient-to-r from-[#f96f1f] to-[#ff8c42] text-white px-4 py-2 flex flex-col items-center justify-center">
              <div className="font-black text-xl leading-none">30%</div>
              <div className="font-bold text-[10px] tracking-wider">OFF</div>
            </div>

            {/* Close Button - Clear & Visible */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white hover:bg-red-500 hover:text-white text-slate-800 flex items-center justify-center transition-all shadow-xl border-2 border-slate-300 hover:border-red-500 z-10"
              aria-label="Close"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-4 w-4" strokeWidth={3} />
            </motion.button>

            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-xl border-3 border-[#f96f1f]"
              animate={{ 
                scale: [1, 1.08, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Tooltip on hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none"
          >
            Click to claim your discount! 🎉
            <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-900 rotate-45" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
