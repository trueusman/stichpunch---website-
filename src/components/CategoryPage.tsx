import React, { useState } from "react";
import { ArrowLeft, Cpu, Layers, ShieldCheck, GitCompare, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "../data";
import type { PortfolioItem } from "../types";
import machineImg from "../assets/images/imgi_11_embroidery-machine.png";

type CatKey = "digitizing" | "vector" | "patches" | "before_after";

interface Props {
  category: CatKey;
  onBack: () => void;
  onQuoteClick: () => void;
}

const META: Record<CatKey, {
  label: string;
  title: string;
  desc: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  icon: React.ReactNode;
  portfolioCategory: string;
}> = {
  digitizing: {
    label: "Embroidery Digitizing",
    title: "Digitizing Portfolio",
    desc: "Every piece below was digitized by hand — no auto-path shortcuts. Optimized density, pull-compensation, and underlay for production-perfect results.",
    accent: "#1cb8df",
    accentBg: "rgba(28,184,223,0.08)",
    accentBorder: "rgba(28,184,223,0.2)",
    icon: <Cpu className="h-5 w-5" />,
    portfolioCategory: "embroidery",
  },
  vector: {
    label: "Vector Art",
    title: "Vector Art Portfolio",
    desc: "100% manual redraws — every anchor point placed by hand. Clean bezier paths, perfect color separation, and infinite scalability.",
    accent: "#f96f1f",
    accentBg: "rgba(249,111,31,0.08)",
    accentBorder: "rgba(249,111,31,0.2)",
    icon: <Layers className="h-5 w-5" />,
    portfolioCategory: "vector",
  },
  patches: {
    label: "Custom Patches",
    title: "Patches Portfolio",
    desc: "Embroidered, leather, and PVC patches with merrowed borders, ultra-dense coverage, and premium backing options.",
    accent: "#22c55e",
    accentBg: "rgba(34,197,94,0.08)",
    accentBorder: "rgba(34,197,94,0.2)",
    icon: <ShieldCheck className="h-5 w-5" />,
    portfolioCategory: "patches",
  },
  before_after: {
    label: "Before & After",
    title: "Before & After Transformations",
    desc: "Real client work — see exactly how raw artwork gets transformed into production-ready embroidery files and clean vector art.",
    accent: "#a855f7",
    accentBg: "rgba(168,85,247,0.08)",
    accentBorder: "rgba(168,85,247,0.2)",
    icon: <GitCompare className="h-5 w-5" />,
    portfolioCategory: "before_after",
  },
};

const GROUPS = [
  {
    key: "embroidery" as const,
    heading: "Embroidery Transformations",
    subheading: "From flat artwork to production-ready stitch files. See how raw logos and designs become precision-digitized embroidery files optimized for any fabric.",
    accent: "#1cb8df",
    icon: <Cpu className="h-4 w-4" />,
  },
  {
    key: "vector" as const,
    heading: "Vector Art Restorations",
    subheading: "Blurry, pixelated, or hand-drawn originals rebuilt into clean, scalable vector files. Perfect for screen print, vinyl, and large-format output.",
    accent: "#f96f1f",
    icon: <Layers className="h-4 w-4" />,
  },
];

function ImageCard({ item, accent, onClick }: { item: PortfolioItem; accent: string; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-50 border border-slate-200"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <h4 className="font-display font-bold text-slate-900 text-sm">{item.title}</h4>
        <p className="text-slate-500 text-xs mt-1 line-clamp-2 leading-relaxed">{item.details}</p>
        <p className="text-[10px] font-mono mt-2" style={{ color: accent }}>{item.softwareUsed}</p>
      </div>
    </motion.div>
  );
}

export default function CategoryPage({ category, onBack, onQuoteClick }: Props) {
  const meta = META[category];
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const isBeforeAfter = category === "before_after";
  const items = PORTFOLIO_DATA.filter(p => p.category === meta.portfolioCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero strip */}
      <div className="pt-36 pb-12 border-b border-slate-100 overflow-hidden" style={{ background: meta.accentBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Left — content */}
            <div className="flex-1">
              <button
                onClick={onBack}
                className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-base font-semibold group mb-8"
                type="button"
              >
                <div
                  className="rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                  style={{ background: meta.accent }}
                >
                  <ArrowLeft className="h-5 w-5 text-white" />
                </div>
                <p className="translate-x-2">Go Back</p>
              </button>

              <span
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase mb-4"
                style={{ color: meta.accent, background: "white", border: `1px solid ${meta.accentBorder}` }}
              >
                {meta.icon}
                {meta.label}
              </span>

              <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight mt-2">
                {meta.title}
              </h1>
              <p className="text-slate-500 mt-4 text-sm sm:text-base max-w-xl leading-relaxed">{meta.desc}</p>

              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={onQuoteClick}
                  className="px-6 py-3 rounded-xl text-white font-bold text-sm uppercase tracking-wider shadow-md hover:brightness-110 transition-all"
                  style={{ background: meta.accent }}
                >
                  Order This Service
                </button>
                <span className="text-xs text-slate-400 font-mono">{items.length} projects shown</span>
              </div>
            </div>

            {/* Right — machine image (only for digitizing & patches) */}
            {(category === "digitizing" || category === "patches") && (
              <div className="lg:w-[380px] flex items-center justify-center flex-shrink-0">
                <motion.img
                  src={machineImg}
                  alt="Embroidery Machine"
                  className="w-full max-h-72 object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ── Before & After: grouped by type ── */}
        {isBeforeAfter ? (
          <div className="space-y-16">
            {GROUPS.map(group => {
              const groupItems = items.filter(i => i.beforeAfterType === group.key);
              if (groupItems.length === 0) return null;
              return (
                <div key={group.key}>
                  {/* Group heading */}
                  <div className="mb-8 pb-5 border-b border-slate-100">
                    <span
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase mb-3"
                      style={{ color: group.accent, background: `rgba(${group.key === "embroidery" ? "28,184,223" : "249,111,31"},0.08)`, border: `1px solid rgba(${group.key === "embroidery" ? "28,184,223" : "249,111,31"},0.2)` }}
                    >
                      {group.icon}
                      {group.heading}
                    </span>
                    <p className="text-slate-500 text-sm max-w-2xl leading-relaxed mt-1">{group.subheading}</p>
                  </div>

                  {/* Images grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupItems.map(item => (
                      <ImageCard key={item.id} item={item} accent={group.accent} onClick={() => setLightbox(item)} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ── Normal grid ── */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-50 border border-slate-200"
                onClick={() => setLightbox(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-slate-500 text-xs mt-1 line-clamp-2 leading-relaxed">{item.details}</p>
                  {item.stitchCount && (
                    <div className="flex gap-3 mt-2 text-[10px] font-mono">
                      <span style={{ color: meta.accent }} className="font-bold">{item.stitchCount}</span>
                      {item.colors && <span className="text-slate-400">{item.colors} Colors</span>}
                    </div>
                  )}
                  <p className="text-[10px] font-mono text-slate-400 mt-1">{item.softwareUsed}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {items.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            <p className="text-lg font-bold">No items yet</p>
            <p className="text-sm mt-1">Check back soon.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backdropFilter: "blur(12px)", background: "rgba(0,0,0,0.85)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-white"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.imageUrl} alt={lightbox.title} className="w-full max-h-[65vh] object-contain bg-black" />
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-slate-900">{lightbox.title}</h3>
                <p className="text-slate-500 text-sm mt-2">{lightbox.details}</p>
                {lightbox.stitchCount && (
                  <div className="flex gap-4 mt-3 text-xs font-mono">
                    <span style={{ color: meta.accent }} className="font-bold">{lightbox.stitchCount}</span>
                    {lightbox.colors && <span className="text-slate-500">{lightbox.colors} Colors</span>}
                    <span className="text-slate-400">{lightbox.softwareUsed}</span>
                  </div>
                )}
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
