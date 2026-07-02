import React from "react";
import { ShieldCheck, Zap, Globe, Lock } from "lucide-react";
import { motion } from "motion/react";

const PAYMENT_METHODS = [
  {
    name: "Visa",
    description: "Pay securely with your Visa card.",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
        <rect x="4" y="12" width="40" height="24" rx="3" fill="#1A1F71"/>
        <path d="M18.5 28.5l1.8-10.8h2.8l-1.8 10.8h-2.8zm13.4-10.5c-.6-.2-1.5-.5-2.6-.5-2.9 0-4.9 1.5-4.9 3.7 0 1.6 1.5 2.5 2.6 3 1.1.5 1.5.9 1.5 1.3 0 .7-.9 1-1.7 1-1.1 0-1.7-.2-2.7-.6l-.4-.2-.4 2.4c.7.3 2 .6 3.3.6 3.1 0 5-1.5 5.1-3.8 0-1.3-.8-2.2-2.5-3-.9-.5-1.5-.8-1.5-1.3 0-.4.5-.8 1.5-.8.9 0 1.5.2 2 .4l.2.1.4-2.3zm5.5-.3h-2.2c-.7 0-1.2.2-1.5.9l-4.2 10h3.1s.5-1.3.6-1.6h3.7c.1.3.4 1.6.4 1.6h2.7l-2.6-10.9zm-3.6 7c.2-.6 1.2-3.2 1.2-3.2s.3-.7.4-1.1l.2 1s.6 2.8.7 3.4h-2.5zm-17.6-7l-2.8 7.4-.3-1.5c-.5-1.7-2.1-3.6-4-4.5l2.5 9.6h3.1l4.7-11h-3.2z" fill="white"/>
        <path d="M13.5 17.7h-4.8l-.1.3c3.7.9 6.1 3.1 7.1 5.8l-1-5.2c-.2-.7-.7-.9-1.2-.9z" fill="#F7B600"/>
      </svg>
    ),
  },
  {
    name: "PayPal",
    description: "Pay securely with your PayPal account.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
        <path d="M38.4 15.2c.3-1.9.1-3.2-.8-4.4C36.4 9.3 34 8 30.8 8H19.6c-.8 0-1.5.6-1.6 1.4L13 38.6c-.1.6.4 1.2 1 1.2h7.3l1.8-11.5-.1.4c.1-.8.8-1.4 1.6-1.4h3.4c6.6 0 11.8-2.7 13.3-10.5.1-.3.1-.7.1-1z" fill="#009cde"/>
        <path d="M38.4 15.2c-.1.4-.2.7-.3 1.1C36.4 24.1 31.2 27 24.6 27H21c-.8 0-1.5.6-1.6 1.4l-2.4 15.4c-.1.6.4 1.2 1 1.2h6.5c.7 0 1.3-.5 1.4-1.2l.1-.3 1.1-7.1.1-.4c.1-.7.7-1.2 1.4-1.2h.9c5.8 0 10.3-2.4 11.6-9.2.6-2.8.3-5.2-1.2-6.8-.4-.4-.9-.7-1.5-1z" fill="#012169"/>
        <path d="M36.8 14.5c-.2-.1-.5-.2-.7-.2-.3-.1-.5-.1-.8-.2-1-.2-2-.2-3.1-.2H22.8c-.3 0-.5.1-.7.2-.5.3-.8.8-.9 1.4l-2.1 13.5-.1.4c.1-.8.8-1.4 1.6-1.4h3.4c6.6 0 11.8-2.7 13.3-10.5.1-.4.1-.7.2-1.1-.4-.2-.9-.5-1.4-.6-.1-.1-.2-.2-.3-.3z" fill="#003087"/>
      </svg>
    ),
  },
  {
    name: "Payoneer",
    description: "Receive payments globally with Payoneer.",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
        <defs>
          <linearGradient id="payoneer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b35"/>
            <stop offset="25%" stopColor="#ffd700"/>
            <stop offset="50%" stopColor="#00c853"/>
            <stop offset="75%" stopColor="#2979ff"/>
            <stop offset="100%" stopColor="#aa00ff"/>
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="18" fill="none" stroke="url(#payoneer-grad)" strokeWidth="4"/>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    description: "Pay easily and securely with your card.",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14">
        <circle cx="18" cy="24" r="13" fill="#eb001b"/>
        <circle cx="30" cy="24" r="13" fill="#f79e1b"/>
        <path d="M24 13.1a13 13 0 0 1 0 21.8A13 13 0 0 1 24 13.1z" fill="#ff5f00"/>
      </svg>
    ),
  },
];

const TRUST_BADGES = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Secure payments", desc: "Your data is always protected" },
  { icon: <Zap className="h-5 w-5" />, title: "Fast & instant", desc: "Quick processing every time" },
  { icon: <Globe className="h-5 w-5" />, title: "Global coverage", desc: "Trusted in 200+ countries" },
];

export default function PaymentSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(28,184,223,0.07)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase mb-5"
            style={{ color: "#1cb8df", background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}>
            <Lock className="h-3.5 w-3.5" />
            Secure &amp; Trusted
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Pay the way you prefer
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            We support secure, fast and convenient payment methods trusted by millions worldwide.
          </p>
        </motion.div>

        {/* Payment cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {PAYMENT_METHODS.map((method, i) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm"
            >
              <div className="mb-3">{method.icon}</div>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">{method.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{method.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {TRUST_BADGES.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-4">
              <div className="flex-shrink-0" style={{ color: "#1cb8df" }}>{badge.icon}</div>
              <div>
                <p className="text-slate-900 text-sm font-semibold">{badge.title}</p>
                <p className="text-slate-500 text-xs">{badge.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom security strip */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-slate-400 text-xs mb-4">
            Encrypted by industry-leading security and trusted by thousands of businesses.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-slate-400" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-700 tracking-wider">256-bit SSL</p>
                <p className="text-[9px] text-slate-400 tracking-widest uppercase">Encryption</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-slate-400" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-700 tracking-wider">PCI DSS</p>
                <p className="text-[9px] text-slate-400 tracking-widest uppercase">Compliant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-slate-400" />
              <div className="text-left">
                <p className="text-[9px] text-slate-400 tracking-widest uppercase">Verified by</p>
                <p className="text-[10px] font-bold text-slate-700 tracking-wider">VISA</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
