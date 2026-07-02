import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, FileText } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleGetQuote = () => {
    onClose();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleEmail = () => {
    window.location.href = "mailto:sales@stichpunch.com";
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-white z-10 rounded-3xl shadow-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-slate-600" />
            </button>

            {/* Content */}
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="flex justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1cb8df, #f96f1f)" }}
                >
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Heading */}
              <div>
                <h3 className="font-display font-black text-2xl mb-2" style={{ color: "#1B2A6B" }}>
                  How would you like to contact us?
                </h3>
                <p className="text-slate-600 text-sm">
                  Choose your preferred method to get in touch
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleGetQuote}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-bold text-base transition-all hover:shadow-xl"
                  style={{ background: "#f96f1f" }}
                >
                  <FileText className="h-5 w-5" />
                  Fill Quote Form
                </button>

                <button
                  onClick={handleEmail}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-base transition-all"
                >
                  <Mail className="h-5 w-5" />
                  Send Direct Email
                </button>
              </div>

              {/* Email address */}
              <p className="text-xs text-slate-400 pt-2">
                📧 sales@stichpunch.com
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
