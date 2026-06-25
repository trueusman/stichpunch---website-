import React from "react";
import { Mail, Phone, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import logoImg from "../assets/images/stichpunch.png";

export default function FooterSection() {
  const currentYear = 2018;

  return (
    <footer className="bg-[#0a0f1e] text-slate-400 border-t border-slate-800 pt-16 pb-8 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <img src={logoImg} alt="Stich Punch" className="h-14 w-14 object-contain group-hover:scale-105 transition-transform" />
              <div>
                <span className="font-black text-lg text-white block">
                  <span className="text-blue-400">Stich</span>
                  <span className="text-[#1cb8df]"> Punch</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Digitizing & Vector</span>
              </div>
            </a>
            <p className="text-slate-500 text-xs leading-relaxed">
              Industrial grade embroidery digitizing & manual vector path recreations. Built for seamless workshop execution.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {[
                { href: "https://facebook.com", icon: <Facebook className="h-4 w-4" /> },
                { href: "https://linkedin.com", icon: <Linkedin className="h-4 w-4" /> },
                { href: "https://instagram.com", icon: <Instagram className="h-4 w-4" /> },
                { href: "https://twitter.com", icon: <Twitter className="h-4 w-4" /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="bg-slate-800 hover:bg-[#1cb8df] hover:text-black text-slate-400 p-2 rounded-lg transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              {["Premium Embroidery Digitizing", "Manual Vector Art Reconstruction", "Custom Embroidered Patches", "3D Puff Caps & Specialties", "Full Jacket Back Engineering"].map((s, i) => (
                <li key={i}><a href="#services" className="hover:text-[#1cb8df] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              {[
                { label: "Home", href: "#home" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "File Formats", href: "#formats" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l, i) => (
                <li key={i}><a href={l.href} className="hover:text-[#1cb8df] transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#1cb8df] flex-shrink-0" />
                <a href="tel:+12135926467" className="hover:text-[#1cb8df] transition-colors">+1 (213) 592-6467</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#1cb8df] flex-shrink-0" />
                <a href="mailto:sales@stichpunch.com" className="hover:text-[#1cb8df] transition-colors">sales@stichpunch.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
          <span>&copy; {currentYear} Stich Punch. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
