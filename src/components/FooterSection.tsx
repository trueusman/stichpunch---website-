import React from "react";
import { Mail, Phone } from "lucide-react";
import logoImg from "../assets/images/stichpunch.png";

export default function FooterSection() {
  const currentYear = 2018;

  return (
    <footer className="bg-gradient-to-b from-[#0a0f1e] to-[#1a2540] text-slate-400 border-t-2 border-[#1cb8df]/20 pt-20 pb-8 text-xs sm:text-sm relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(28,184,223,0.3) 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb8df] to-[#f96f1f] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-white p-2 rounded-2xl">
                  <img src={logoImg} alt="Stich Punch" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div>
                <span className="font-black text-2xl text-white block leading-tight">
                  <span className="text-[#1cb8df]">Stich</span>
                  <span className="text-[#f96f1f]">Punch</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Digitizing Excellence</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Industrial grade embroidery digitizing & manual vector path recreations. Built for seamless workshop execution.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-[#1cb8df]/10 border border-[#1cb8df]/30">
                <span className="text-[#1cb8df] font-bold text-xs">Fast Delivery</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#f96f1f]/10 border border-[#f96f1f]/30">
                <span className="text-[#f96f1f] font-bold text-xs">97% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-black text-white text-base uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-[#1cb8df] to-[#f96f1f] rounded-full" />
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {["Premium Embroidery Digitizing", "Manual Vector Art Reconstruction", "Custom Embroidered Patches", "3D Puff Caps & Specialties", "Full Jacket Back Engineering"].map((s, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-[#1cb8df] transition-colors flex items-center gap-2 group">
                    <span className="text-[#1cb8df] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-black text-white text-base uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-[#1cb8df] to-[#f96f1f] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                { label: "Home", href: "#home" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "File Formats", href: "#formats" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="hover:text-[#1cb8df] transition-colors flex items-center gap-2 group">
                    <span className="text-[#1cb8df] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-black text-white text-base uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-[#1cb8df] to-[#f96f1f] rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#1cb8df]/50 transition-colors group">
                <div className="p-2 rounded-lg bg-[#1cb8df]/10 group-hover:bg-[#1cb8df]/20 transition-colors">
                  <Phone className="h-4 w-4 text-[#1cb8df] flex-shrink-0" />
                </div>
                <a href="tel:+12135926467" className="hover:text-[#1cb8df] transition-colors">
                  <div className="text-xs text-slate-500">Call Us</div>
                  <div className="font-bold text-white">+1 (213) 592-6467</div>
                </a>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#f96f1f]/50 transition-colors group">
                <div className="p-2 rounded-lg bg-[#f96f1f]/10 group-hover:bg-[#f96f1f]/20 transition-colors">
                  <Mail className="h-4 w-4 text-[#f96f1f] flex-shrink-0" />
                </div>
                <a href="mailto:sales@stichpunch.com" className="hover:text-[#f96f1f] transition-colors">
                  <div className="text-xs text-slate-500">Email Us</div>
                  <div className="font-bold text-white break-all">sales@stichpunch.com</div>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t-2 border-slate-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-6">

          {/* Left: social icons + copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Social Icons - Original Style */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61571718309885" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-btn footer-facebook">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
                  <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                </svg>
              </a>
              
              <a href="https://www.instagram.com/stichpunch/" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-btn footer-instagram">
                <svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" transform="translate(-284 -7279)" />
                </svg>
              </a>
              
              <a href="https://twitter.com/stichpunch" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-social-btn footer-twitter">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                  <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <span className="text-slate-400">&copy; {currentYear} <span className="font-bold">Stich<span className="text-[#1cb8df]">Punch</span></span>. All rights reserved.</span>
          </div>

          {/* Right: links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#1cb8df] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1cb8df] transition-colors">Terms of Service</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
