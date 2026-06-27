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
      "Delivered in DST, EMB, PDF, JPG / PNG formats",
      "2–4 hour standard turnaround",
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
      "2–4 hour turnaround",
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
      "Delivered in AI, SVG, EPS, PDF, JPG / PNG formats",
      "2–4 hour standard turnaround",
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
      "2–4 hour turnaround",
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
    <section id="pricing" className="py-24 bg-white relative scroll-mt-12 overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(249,111,31,0.04)_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-10">
          <span
            className="text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase"
            style={{
              color: "#f96f1f",
              background: "rgba(249,111,31,0.08)",
              border: "1px solid rgba(249,111,31,0.2)",
            }}
          >
            Pricing Plans
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base">
            No hidden fees. Pay once, get production-ready files.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-100 border border-slate-200 rounded-full p-1 gap-1">
            <button
              onClick={() => setActiveTab("digitizing")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "digitizing"
                  ? "text-white shadow-lg"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              style={
                activeTab === "digitizing"
                  ? { background: "linear-gradient(135deg, #f96f1f, #e55e0e)" }
                  : undefined
              }
            >
              Digitizing
            </button>
            <button
              onClick={() => setActiveTab("vector")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "vector"
                  ? "text-white shadow-lg"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              style={
                activeTab === "vector"
                  ? { background: "linear-gradient(135deg, #f96f1f, #e55e0e)" }
                  : undefined
              }
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
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-stretch"
          >
            {plans.map((plan) =>
              plan.featured ? (
                /* ── Featured / Middle Card ── */
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -6 }}
                  className="rounded-xl overflow-hidden shadow-xl flex flex-col relative"
                  style={{
                    background: "linear-gradient(160deg, #f96f1f 0%, #e55e0e 55%, #c44d0a 100%)",
                    border: "2px solid rgba(249,111,31,0.5)",
                  }}
                >
                  {/* Most Popular badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-[#f96f1f] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1 pt-12">
                    <h3 className="text-base font-bold text-white mb-3 leading-snug pr-4">
                      {plan.title}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      {plan.oldPrice && (
                        <span className="text-orange-200 line-through text-base mr-2">
                          {plan.oldPrice}
                        </span>
                      )}
                      <span className="text-3xl font-extrabold text-white">{plan.newPrice}</span>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={onQuoteClick}
                      className="w-full bg-white font-bold rounded-full py-2.5 mb-5 hover:bg-orange-50 transition-colors text-sm tracking-wide shadow-md"
                      style={{ color: "#f96f1f" }}
                    >
                      {plan.buttonLabel}
                    </button>

                    {/* Features */}
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-orange-100">
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
                  className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-white border border-slate-200 hover:border-[#1cb8df]/40 transition-all duration-300"
                >
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                      {plan.title}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      {plan.oldPrice && (
                        <span className="text-slate-400 line-through text-base mr-2">
                          {plan.oldPrice}
                        </span>
                      )}
                      <span className="text-2xl font-extrabold text-slate-900">{plan.newPrice}</span>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={onQuoteClick}
                      className="w-full font-bold rounded-full py-2.5 mb-5 transition-all text-sm tracking-wide border-2"
                      style={{
                        borderColor: "#1cb8df",
                        color: "#1cb8df",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1cb8df";
                        (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.color = "#1cb8df";
                      }}
                    >
                      {plan.buttonLabel}
                    </button>

                    {/* Features */}
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: "#1cb8df" }}
                          />
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
