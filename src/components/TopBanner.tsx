import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const messages = [
  "🎉 Welcome to StichPunch — Quality You Can Trust, Every Stitch",
  "📧 Contact: sales@stichpunch.com",
  "⏰ Mon - Fri: 8:00 AM - 6:00 PM",
  "🎁 5% Flat Off On Advance Payments",
  "⚡ Fast 2-4 Hours Turnaround Time",
  "🌟 200+ Happy Clients Worldwide",
];

export default function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#f96f1f] to-[#ff8c42] py-2.5 overflow-hidden border-b-2 border-white/20">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-white font-bold text-xs sm:text-sm tracking-wide">
              {messages[currentIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
