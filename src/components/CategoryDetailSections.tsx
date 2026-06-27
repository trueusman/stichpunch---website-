import React from "react";
import { ArrowRight, Cpu, Layers, ShieldCheck, GitCompare, Zap } from "lucide-react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data";
import machineImg from "../assets/images/imgi_11_embroidery-machine.png";

interface Props {
  onViewMore: (cat: "digitizing" | "vector" | "patches" | "before_after") => void;
}

const CATS = [
  {
    key: "digitizing" as const,
    label: "Digitizing",
    accent: "#1cb8df",
    accentBg: "rgba(28,184,223,0.08)",
    accentBorder: "rgba(28,184,223,0.2)",
    icon: <Cpu className="h-4 w-4" />,
    portfolioCategory: "embroidery",
    title: "Embroidery Digitizing",
    desc: "Precision stitch files for any machine, any fabric.",
  },
  {
    key: "vector" as const,
    label: "Vector Art",
    accent: "#f96f1f",
    accentBg: "rgba(249,111,31,0.08)",
    accentBorder: "rgba(249,111,31,0.2)",
    icon: <Layers className="h-4 w-4" />,
    portfolioCategory: "vector",
    title: "Vector Art Conversion",
    desc: "Manual redraws into crisp scalable vector files.",
  },
  {
    key: "patches" as const,
    label: "Custom Patches",
    accent: "#22c55e",
    accentBg: "rgba(34,197,94,0.08)",
    accentBorder: "rgba(34,197,94,0.2)",
    icon: <ShieldCheck className="h-4 w-4" />,
    portfolioCategory: "patches",
    title: "Custom Patches",
    desc: "Embroidered, leather & PVC patches with premium finish.",
  },
  {
    key: "before_after" as const,
    label: "Before & After",
    accent: "#a855f7",
    accentBg: "rgba(168,85,247,0.08)",
    accentBorder: "rgba(168,85,247,0.2)",
    icon: <GitCompare className="h-4 w-4" />,
    portfolioCategory: "before_after",
    title: "Before & After",
    desc: "See raw artwork transformed into production-ready files.",
  },
];

export default function CategoryDetailSections({ onViewMore }: Props) {
  const patchItems = PORTFOLIO_DATA.filter(p => p.category === "patches" && p.featured).slice(0, 4);

  return (
    <section id="cat-preview" className="py-20 bg-white border-t border-slate-100 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {CATS.map((cat, idx) => {
          const items = PORTFOLIO_DATA.filter(p => p.category === cat.portfolioCategory).slice(0, 3);
          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              id={`cat-${cat.key}`}
              className="scroll-mt-28"
            >
              {/* Row header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase"
                    style={{ color: cat.accent, background: cat.accentBg, border: `1px solid ${cat.accentBorder}` }}
                  >
                    {cat.icon}
                    {cat.label}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900">{cat.title}</h3>
                    <p className="text-slate-500 text-xs mt-0.5">{cat.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => onViewMore(cat.key)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl border-2 transition-all"
                  style={{ borderColor: cat.accent, color: cat.accent }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = cat.accent; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = cat.accent; }}
                >
                  View More
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* 1 row of 3 images */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group cursor-pointer"
                    onClick={() => onViewMore(cat.key)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-sm line-clamp-1">{item.title}</p>
                      {item.stitchCount && (
                        <p className="text-xs mt-0.5" style={{ color: cat.accent }}>{item.stitchCount}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Patches banner — shown only after patches row */}
              {cat.key === "patches" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col lg:flex-row"
                  style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #1a2540 100%)" }}
                >
                  {/* Left — text + patch grid */}
                  <div className="flex-1 p-8 sm:p-12 flex flex-col justify-between gap-8">
                    <div>
                      <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase mb-4"
                        style={{ color: "#22c55e", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Premium Patches
                      </span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-2 leading-tight">
                        Every Patch, <span style={{ color: "#22c55e" }}>Crafted to Last</span>
                      </h3>
                      <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-sm">
                        From merrowed embroidered emblems to laser-cut leather and PVC — we produce patches built for decades of wear.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-5">
                        {["Iron-on backing", "Velcro backing", "Sew-on", "PVC / Rubber", "Leather"].map(t => (
                          <span key={t} className="text-[10px] font-mono px-3 py-1 rounded-full text-slate-300 border border-slate-700 bg-slate-800/60">{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Patch portfolio mini grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {patchItems.map(item => (
                        <div
                          key={item.id}
                          className="rounded-xl overflow-hidden aspect-square cursor-pointer group"
                          onClick={() => onViewMore("patches")}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onViewMore("patches")}
                      className="self-start flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all hover:brightness-110"
                      style={{ background: "#22c55e", color: "#fff" }}
                    >
                      <Zap className="h-3.5 w-3.5" />
                      View All Patches
                    </button>
                  </div>

                  {/* Right — machine image */}
                  <div className="lg:w-[40%] relative min-h-[300px] lg:min-h-0 flex items-center justify-center overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0f1e] z-10 lg:block hidden" />
                    <img
                      src={machineImg}
                      alt="Embroidery Machine"
                      className="w-full h-full object-contain p-6 relative z-0"
                    />
                  </div>
                </motion.div>
              )}

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
