import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Cpu, Layers, ShieldCheck, ChevronDown, GitCompare } from "lucide-react";
import logoImg from "../assets/images/stichpunch.png";

interface HeaderProps {
  onQuoteClick: () => void;
  activeSection: string;
  onCatPageOpen: (cat: "digitizing" | "vector" | "patches" | "before_after") => void;
}

export default function Header({ onQuoteClick, activeSection, onCatPageOpen }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [catDropdown, setCatDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Categories", href: "#cat-preview", hasDropdown: true },
    { label: "Pricing", href: "#pricing" },
    { label: "File Formats", href: "#formats" },
    { label: "Contact", href: "#contact" },
  ];

  const categoryLinks = [
    {
      icon: <Cpu className="h-4 w-4" style={{ color: "#1cb8df" }} />,
      label: "Digitizing",
      desc: "Precision stitch file creation",
      pageKey: "digitizing" as const,
    },
    {
      icon: <Layers className="h-4 w-4" style={{ color: "#f96f1f" }} />,
      label: "Vector Art",
      desc: "Manual vector path redraw",
      pageKey: "vector" as const,
    },
    {
      icon: <ShieldCheck className="h-4 w-4" style={{ color: "#22c55e" }} />,
      label: "Custom Patches",
      desc: "Embroidered & PVC patches",
      pageKey: "patches" as const,
    },
    {
      icon: <GitCompare className="h-4 w-4" style={{ color: "#a855f7" }} />,
      label: "Before & After",
      desc: "Transformation showcase",
      pageKey: "before_after" as const,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ── Top Announcement Bar ── */}
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-2.5 text-white text-xs" style={{ backgroundColor: "#f96f1f" }}>

        {/* Left: Announcement */}
        <span className="font-black hidden lg:flex items-center gap-2 whitespace-nowrap tracking-wide text-[13px]">
          <svg className="w-4 h-4 flex-shrink-0 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.515a1 1 0 011 .196V17.32a1 1 0 01-1 .196C16.457 14.236 12.932 12 8.832 12H7a4 4 0 01-1.564-.317z" />
          </svg>
          Welcome to StichPunch —{" "}
          <span className="font-black text-white">Quality You Can Trust, Every Stitch.</span>
        </span>

        {/* Center: Email + Hours */}
        <div className="flex items-center gap-4">
          <a href="mailto:sales@stichpunch.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity whitespace-nowrap font-bold text-[12px]">
            <Mail className="w-3.5 h-3.5 flex-shrink-0" />
            <span>sales@stichpunch.com</span>
          </a>
          <span className="text-white/50 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1.5 whitespace-nowrap font-semibold text-[11px] text-white/90">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
          </div>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/photo.php?fbid=122100443643372257&set=a.122100443817372257&type=3&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75 transition-opacity"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="https://www.instagram.com/stichpunch?igsh=MWdhbzVmbDRoOG1rdw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity"><Instagram className="w-3.5 h-3.5" /></a>
          <a href="https://x.com/stichpunchpk" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:opacity-75 transition-opacity"><Twitter className="w-3.5 h-3.5" /></a>
        </div>

      </div>

      {/* ── Main Nav ── */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-md border-b border-slate-100" : "border-b border-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
              <img src={logoImg} alt="Stich Punch" className="h-14 w-14 object-contain group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col leading-tight">
                <span className="font-black text-xl tracking-wide">
                  <span style={{ color: "#f96f1f" }}>Stich</span>
                  <span style={{ color: "#1cb8df" }}> Punch</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">Digitizing & Vector</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.href}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setCatDropdown(true)}
                      onMouseLeave={() => setCatDropdown(false)}
                    >
                      <a
                        href={item.href}
                        className={`nav-link flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-lg tracking-wider uppercase transition-all duration-200 ${isActive ? 'active' : ''}`}
                        style={{
                          color: isActive ? "#1B2A6B" : "#64748b",
                          background: isActive ? "rgba(28,184,223,0.08)" : "transparent",
                          fontWeight: isActive ? 800 : 600,
                        }}
                      >
                        {item.label}
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${catDropdown ? "rotate-180" : ""}`} />
                      </a>

                      {/* Dropdown */}
                      {catDropdown && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
                          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
                        >
                          {/* Arrow */}
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />

                          <div className="p-2 pt-3">
                            {categoryLinks.map((cat) => (
                              <button
                                key={cat.label}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item text-left"
                                onClick={() => { setCatDropdown(false); onCatPageOpen(cat.pageKey); }}
                              >
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-100 group-hover/item:bg-white transition-colors">
                                  {cat.icon}
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-slate-900 tracking-wide">{cat.label}</p>
                                  <p className="text-[10px] text-slate-400 mt-0.5">{cat.desc}</p>
                                </div>
                              </button>
                            ))}
                          </div>

                          {/* Footer strip */}
                          <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50">
                            <p className="text-[10px] text-slate-400 font-mono text-center tracking-wider uppercase">2–4 Hour Turnaround</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`nav-link px-4 py-2 text-xs font-bold rounded-lg tracking-wider uppercase transition-all duration-200 ${isActive ? 'active' : ''}`}
                    style={{
                      color: isActive ? "#1B2A6B" : "#64748b",
                      background: isActive ? "rgba(28,184,223,0.08)" : "transparent",
                      fontWeight: isActive ? 800 : 600,
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Email Us button + Animated Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:sales@stichpunch.com"
                className="hidden sm:inline-flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest email-us-btn"
              >
                <Mail className="w-3.5 h-3.5" />
                Email Us
              </a>
              
              {/* Animated Hamburger Menu */}
              <label className="hamburger lg:hidden cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isOpen}
                  onChange={() => setIsOpen(!isOpen)}
                  className="hidden"
                />
                <svg viewBox="0 0 32 32" className="h-8 w-8 transition-transform duration-600 ease-cubic">
                  <path 
                    className="hamburger-line hamburger-line-top-bottom" 
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" 
                  />
                  <path className="hamburger-line" d="M7 16 27 16" />
                </svg>
              </label>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 shadow-md">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}
                  className={`mobile-nav-link block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive ? 'active' : ''}`}
                  style={{ color: isActive ? "#1B2A6B" : "#64748b", background: isActive ? "rgba(28,184,223,0.08)" : "transparent" }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}

    </header>
  );
}
