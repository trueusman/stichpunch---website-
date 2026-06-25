import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logoImg from "../assets/images/stichpunch.png";

interface HeaderProps {
  onQuoteClick: () => void;
  activeSection: string;
}

export default function Header({ onQuoteClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Categories", href: "#categories" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "File Formats", href: "#formats" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ── Top Announcement Bar ── */}
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-2 text-white text-xs" style={{ backgroundColor: "#f96f1f" }}>
        {/* Left */}
        <span className="font-semibold hidden lg:block whitespace-nowrap">
          Welcome to StichPunch — Quality You Can Trust, Every Stitch.
        </span>
        {/* Center */}
        <div className="flex items-center gap-4">
          <a href="mailto:sales@stichpunch.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity whitespace-nowrap">
            <Mail className="w-3.5 h-3.5 flex-shrink-0" />
            <span>sales@stichpunch.com</span>
          </a>
          <span className="text-white/50 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Mon – Friday: 9:00 AM – 6:00 PM</span>
          </div>
        </div>
        {/* Right: socials */}
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity"><Instagram className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="Twitter" className="hover:opacity-75 transition-opacity"><Twitter className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity"><Linkedin className="w-3.5 h-3.5" /></a>
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
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-xs font-bold rounded-lg tracking-wider uppercase transition-all duration-200"
                    style={{
                      color: isActive ? "#1B2A6B" : "#64748b",
                      background: isActive ? "rgba(28,184,223,0.08)" : "transparent",
                      fontWeight: isActive ? 800 : 600,
                    }}
                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#1B2A6B"; }}
                    onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Email Us button */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:sales@stichpunch.com"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border-2"
                style={{ borderColor: "#f96f1f", color: "#f96f1f", background: "transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f96f1f"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#f96f1f"; }}
              >
                <Mail className="w-3.5 h-3.5" />
                Email Us
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2 lg:hidden">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
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
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
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
