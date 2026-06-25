import React from "react";
import logoImg from "../assets/images/stichpunch.jpeg";
import { Mail, Phone, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-900 pt-16 pb-8 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center group">
              <img src={logoImg} alt="Stitch Punch Logo" className="h-14 w-14 object-contain group-hover:scale-105 transition-transform duration-300" />
            </a>
            <p className="text-slate-400 text-xs leading-relaxed">
              Industrial grade embroidery digitizing &amp; manual vector path recreations. Built for seamless workshop execution.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-navy-900 hover:bg-navy-850 hover:text-white p-2 rounded-lg border border-navy-800 transition-all text-slate-400" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-navy-900 hover:bg-navy-850 hover:text-white p-2 rounded-lg border border-navy-800 transition-all text-slate-400" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-navy-900 hover:bg-navy-850 hover:text-white p-2 rounded-lg border border-navy-800 transition-all text-slate-400" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-navy-900 hover:bg-navy-850 hover:text-white p-2 rounded-lg border border-navy-800 transition-all text-slate-400" aria-label="Twitter (X)">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-slate-200 text-xs sm:text-sm uppercase tracking-wider">
              Design Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-450 text-slate-400">
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Premium Embroidery Digitizing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Manual Vector Art Reconstruction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  Custom Embroidered Patches
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-gold-400 transition-colors">
                  3D Puff Caps &amp; Specialties
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-gold-400 transition-colors">
                  Full Jacket Back Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-slate-200 text-xs sm:text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-gold-400 transition-colors">
                  Return Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold-400 transition-colors">
                  Production Portfolio
                </a>
              </li>
              <li>
                <a href="#formats" className="hover:text-gold-400 transition-colors">
                  Supported Machine Formats
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  Craft Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">
                  Submit Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-slate-200 text-xs sm:text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <a href="tel:+12135926467" className="hover:text-gold-400 transition-colors">+1 (213) 592-6467</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <a href="mailto:sales@stichpunch.com" className="hover:text-gold-400 transition-colors">sales@stichpunch.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright band */}
        <div className="border-t border-navy-900 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {currentYear} StitchCraft Digitizing. All rights reserved.
          </div>
          <div className="flex space-x-5">
            <a href="#formats" className="hover:text-slate-350 transition-colors">Formats Policy</a>
            <a href="#home" className="hover:text-slate-350 transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-slate-350 transition-colors">Privacy Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
