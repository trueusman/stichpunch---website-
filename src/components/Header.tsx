import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/images/stichpunch.jpeg";

interface HeaderProps {
  onQuoteClick: () => void;
  activeSection: string;
}

export default function Header({ onQuoteClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      id="main-nav-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-navy-800/50 py-3"
          : "bg-gradient-to-b from-navy-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Stitch Punch Logo"
              className="h-20 w-20 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-black text-xl tracking-wide">
                <span className="text-blue-900">Stitch</span>
                <span className="text-yellow-400"> Punch</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                Digitizing & Vector
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 bg-navy-900/40 border border-slate-800/60 backdrop-blur-md px-3 py-2 rounded-full">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full tracking-widest uppercase transition-all duration-300 border ${
                    isActive
                      ? "text-gold-300 bg-gold-500/15 border-gold-500/40 shadow-[0_2px_10px_rgba(212,163,89,0.15)]"
                      : "text-slate-300 hover:text-white bg-transparent border-transparent hover:border-white/10 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right side: Email button + Mobile menu */}
          <div className="flex items-center gap-3">

            {/* Email Button */}
            <a
              href="mailto:sales@stichpunch.com"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full border-2 border-gold-500 text-gold-400 font-bold text-xs uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all duration-300"
            >
              Email Us
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 lg:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-md border-b border-navy-800 animate-fadeIn">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all border ${
                    isActive
                      ? "text-gold-300 bg-gold-500/15 border-gold-500/30"
                      : "text-slate-300 hover:text-white bg-transparent border-transparent hover:bg-white/5 hover:border-slate-800"
                  }`}
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
