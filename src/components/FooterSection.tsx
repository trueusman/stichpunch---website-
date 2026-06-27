import React from "react";
import { Mail, Phone } from "lucide-react";
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
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">

          {/* Left: social icons + copyright on same line */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-social-btn footer-facebook">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
                <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social-btn footer-instagram">
              <svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" transform="translate(-284 -7279)" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-social-btn footer-twitter">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
            </a>
            <span className="ml-2">&copy; {currentYear} Stich Punch. All rights reserved.</span>
          </div>

          {/* Right: links */}
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
