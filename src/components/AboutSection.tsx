import React from "react";
import { Award, Clock, Users, Globe, ShieldCheck, Handshake, Star, Package } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import logoImg from "../assets/images/stichpunch.png";
import aboutImg from "../assets/images/about.png";

const stats = [
  {
    icon: <Package className="h-6 w-6" style={{ color: "#1cb8df" }} />,
    value: "100+",
    label: "Daily Orders",
    sub: "Completed with care and precision.",
  },
  {
    icon: <Users className="h-6 w-6" style={{ color: "#1cb8df" }} />,
    value: "5+",
    label: "Years Experience",
    sub: "In embroidery digitizing and vector art.",
  },
  {
    icon: <Star className="h-6 w-6" style={{ color: "#1cb8df" }} />,
    value: "1500+",
    label: "Happy Clients",
    sub: "Trusted by businesses worldwide.",
  },
  {
    icon: <Globe className="h-6 w-6" style={{ color: "#1cb8df" }} />,
    value: "50+",
    label: "Countries Served",
    sub: "Global clients, local support.",
  },
];

const values = [
  {
    icon: <Award className="h-6 w-6" style={{ color: "#1cb8df" }} />,
    title: "Quality First",
    desc: "We never compromise on quality. Every stitch is carefully crafted.",
  },
  {
    icon: <Clock className="h-6 w-6" style={{ color: "#1cb8df" }} />,
    title: "Fast Turnaround",
    desc: "We respect your time and deliver in record time without compromising.",
  },
  {
    icon: <Handshake className="h-6 w-6" style={{ color: "#1cb8df" }} />,
    title: "Customer Focused",
    desc: "Our customers are at the heart of everything we do.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" style={{ color: "#1cb8df" }} />,
    title: "Secure & Reliable",
    desc: "Your files are safe with us. We ensure 100% privacy and security.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-12 bg-white">

      {/* ── Part 1: Story Block ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Dotted decoration */}
            <div
              className="absolute -bottom-4 -left-4 w-40 h-40 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgba(249,111,31,0.35) 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
            <img
              src={aboutImg}
              alt="Embroidery machine stitching SP logo"
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
              style={{ maxHeight: "480px" }}
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-5"
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#f96f1f" }}>
                OUR STORY
              </span>
              <div className="h-[2px] w-8 rounded" style={{ background: "#f96f1f" }} />
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight" style={{ color: "#1B2A6B" }}>
              Precision. Passion. Perfection.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              StichPunch was founded with a simple mission — to provide world-class
              embroidery digitizing and vector art services with unmatched quality
              and fast turnaround.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              Our team of CAD-calibrated embroidery architects ensures every stitch
              is perfect, every file is clean, and every client is satisfied.
            </p>

            {/* Team signature */}
            <div className="flex items-center gap-3 pt-2">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(249,111,31,0.1)", border: "1.5px solid rgba(249,111,31,0.3)" }}
              >
                <img src={logoImg} alt="SP" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#1B2A6B" }}>The StichPunch Team</p>
                <p className="text-xs text-slate-400">Quality You Can Trust, Every Stitch.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Part 3: Values Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Values header */}
        <SectionHeading
          badge="Our Values"
          badgeIcon={ShieldCheck}
          title="The Principles That Drive Us"
          accent="orange"
          align="center"
        />

        {/* Values 4-col grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {values.map((val, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 16 } },
              }}
              className="flex flex-col gap-3"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(28,184,223,0.08)", border: "1px solid rgba(28,184,223,0.2)" }}
              >
                {val.icon}
              </div>

              {/* Title + orange underline */}
              <div>
                <p className="font-bold text-sm" style={{ color: "#1B2A6B" }}>{val.title}</p>
                <div className="h-[2px] w-6 rounded mt-1" style={{ background: "#f96f1f" }} />
              </div>

              <p className="text-slate-500 text-xs leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}
