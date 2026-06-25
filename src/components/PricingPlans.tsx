import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PricingPlansProps {
  onQuoteClick: () => void;
}

const digitizingPlans = [
  {
    id: "chest",
    title: "Chest/Hat Logo Digitizing",
    oldPrice: "$15",
    newPrice: "$10",
    featured: false,
    buttonLabel: "Order Now",
    features: [
      "Clean stitch quality for all fabrics",
      "Delivered in DST, EMB, PDF,  JPG / PNG formats",
      "8–12 hour standard turnaround",
      "Free minor edits included",
      "Source file provided",
    ],
  },
  {
    id: "jacket",
    title: "Jacket Back Logo Digitizing",
    oldPrice: "$30",
    newPrice: "$25 – $35",
    featured: true,
    buttonLabel: "Order Now",
    features: [
      "Ideal for large jacket or back designs",
      "Sharp and detailed stitch output",
      "8–12 hour turnaround",
      "Priority delivery available",
      "Source file provided",
    ],
  },
  {
    id: "per-stitch",
    title: "Per 1000 Stitches Digitizing",
    oldPrice: null,
    newPrice: "$1 PER 1000 STITCHES",
    featured: false,
    buttonLabel: "Order Now",
    features: [
      "Best for 3D puff, appliqué, chenille designs",
      "Available in multiple embroidery formats",
      "Smooth edges, balanced density",
      "Unlimited revisions until perfect",
      "Source file provided",
    ],
  },
];

const vectorPlans = [
  {
    id: "simple-vector",
    title: "Simple Vector Conversion",
    oldPrice: "$18",
    newPrice: "$12",
    featured: false,
    buttonLabel: "Order Now",
    features: [
      "Clean bezier node paths",
      "Delivered in  JPG / PNG AI, SVG, EPS, PDF, formats",
      "8–12 hour standard turnaround",
      "Free minor edits included",
      "Source file provided",
    ],
  },
  {
    id: "complex-vector",
    title: "Complex Logo Redraw",
    oldPrice: "$35",
    newPrice: "$20 – $30",
    featured: true,
    buttonLabel: "Order Now",
    features: [
      "100% manual node path reconstruction",
      "Pantone color matching included",
      "8–12 hour turnaround",
      "Priority delivery available",
      "Source file provided",
    ],
  },
  {
    id: "vector-bundle",
    title: "Vector Bundle Pack",
    oldPrice: null,
    newPrice: "$8 PER DESIGN",
    featured: false,
    buttonLabel: "Order Now",
    features: [
      "Best for bulk logo conversion orders",
      "All scalable formats included",
      "Smooth curves, zero pixelation",
      "Unlimited revisions until perfect",
      "Source file provided",
    ],
  },
];

export default function PricingPlans({ onQuoteClick }: PricingPlansProps) {
  const [activeTab, setActiveTab] = useState<"digitizing" | "vector">("digitizing");
  const plans = activeTab === "digitizing" ? digitizingPlans : vectorPlans;

  return (
    <section id="pricing" className="py-24 bg-navy-950 relative scroll-mt-12 overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(249,111,31,0.04)_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/15 px-3.5 py-1.5 rounded-full uppercase">
            Pricing Plans
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
            Select Your Optimal Design Architecture
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1 gap-1">
            <button
              onClick={() => setActiveTab("digitizing")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "digitizing"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-navy-950 shadow-lg shadow-yellow-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Digitizing
            </button>
            <button
              onClick={() => setActiveTab("vector")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "vector"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-navy-950 shadow-lg shadow-yellow-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Vector
            </button>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
          >
            {plans.map((plan) =>
              plan.featured ? (
                /* ── Featured / Middle Card ── */
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 border-2 border-yellow-300/60 relative"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">{plan.title}</h3>

                    {/* Price */}
                    <div className="mb-6">
                      {plan.oldPrice && (
                        <span className="text-purple-300 line-through text-lg mr-2">{plan.oldPrice}</span>
                      )}
                      <span className="text-4xl font-extrabold text-white">{plan.newPrice}</span>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={onQuoteClick}
                      className="w-full bg-white text-purple-700 font-bold rounded-full py-3 mb-8 hover:bg-purple-50 transition-colors text-sm tracking-wide shadow-md"
                    >
                      {plan.buttonLabel}
                    </button>

                    {/* Features */}
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-purple-100">
                          <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                /* ── Regular Card ── */
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl overflow-hidden shadow-lg flex flex-col bg-navy-900 border border-slate-700/60"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">{plan.title}</h3>

                    {/* Price */}
                    <div className="mb-6">
                      {plan.oldPrice && (
                        <span className="text-slate-500 line-through text-lg mr-2">{plan.oldPrice}</span>
                      )}
                      <span className="text-3xl font-extrabold text-white">{plan.newPrice}</span>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={onQuoteClick}
                      className="w-full border border-slate-600 hover:border-purple-500 text-white font-bold rounded-full py-3 mb-8 hover:bg-purple-500/10 transition-all text-sm tracking-wide"
                    >
                      {plan.buttonLabel}
                    </button>

                    {/* Features */}
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
