import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  subtitle?: string;
  accent?: "blue" | "orange";
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  accent = "blue",
  align = "center",
}: SectionHeadingProps) {
  const accentColor = accent === "blue" ? "#1cb8df" : "#f96f1f";
  const accentBg = accent === "blue" ? "rgba(28,184,223,0.08)" : "rgba(249,111,31,0.08)";
  const accentBorder = accent === "blue" ? "rgba(28,184,223,0.2)" : "rgba(249,111,31,0.2)";

  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const justifyClass = align === "center" ? "justify-center" : "justify-start";

  return (
    <motion.div
      className={`max-w-4xl mb-12 sm:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Badge */}
      {badge && (
        <motion.div 
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold tracking-wide px-4 sm:px-5 py-2 sm:py-2.5 rounded-full uppercase mb-4 sm:mb-5 shadow-sm`}
          style={{ 
            color: accentColor, 
            background: accentBg, 
            border: `2px solid ${accentBorder}` 
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.2 }}
        >
          {BadgeIcon && <BadgeIcon className="h-4 w-4 sm:h-4 sm:w-4" />}
          {badge}
        </motion.div>
      )}

      {/* Title */}
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.1] px-4 sm:px-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-slate-600 mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed px-4 sm:px-0 font-normal ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      <motion.div
        className={`h-1.5 rounded-full mt-6 sm:mt-8 shadow-md ${align === "center" ? "mx-auto" : ""}`}
        style={{ 
          background: `linear-gradient(90deg, ${accentColor}, ${accent === "blue" ? "#f96f1f" : "#1cb8df"})` 
        }}
        initial={{ width: 0 }}
        whileInView={{ width: align === "center" ? "80px" : "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}
