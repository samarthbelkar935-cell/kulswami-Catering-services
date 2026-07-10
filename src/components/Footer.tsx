import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Shield, Cookie, FileText, Check } from "lucide-react";

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#131313] text-zinc-500 border-t border-zinc-900 py-16 px-4 md:px-8 overflow-hidden relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          
          {/* Logo Brand */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-serif italic font-bold text-xl text-amber-50 tracking-tight">
              Kulswami <span className="text-gold">Catering Services</span>
            </h3>
            <p className="text-xs text-zinc-500 font-medium tracking-wide">
              Aurangabad – 431001, Maharashtra, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs font-semibold uppercase tracking-widest">
            <button
              onClick={() => handleScrollToSection("hero-content")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection("about-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Our Story
            </button>
            <button
              onClick={() => handleScrollToSection("menu-services-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Services & Menu
            </button>
            <button
              onClick={() => handleScrollToSection("testimonials-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => handleScrollToSection("our-events-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Setups
            </button>
            <button
              onClick={() => handleScrollToSection("process-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Process
            </button>
            <button
              onClick={() => handleScrollToSection("quote-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Request Quote
            </button>
            <button
              onClick={() => handleScrollToSection("contact-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Contact Chat
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-semibold tracking-widest uppercase text-zinc-600">
          
          {/* Location limit warning */}
          <div className="text-center md:text-left tracking-wider">
            <span>Servicing Exclusively in: </span>
            <strong className="text-zinc-400 font-bold">Aurangabad – 431001, Maharashtra, India</strong>
          </div>

          {/* Copyright + Privacy + WhatsApp quick link */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <span>© {new Date().getFullYear()} Kulswami Catering Services. All rights reserved.</span>
            <span className="hidden md:inline text-zinc-850">|</span>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-gold transition-colors cursor-pointer text-zinc-500 hover:underline"
            >
              Privacy & Cookies
            </button>
            <span className="hidden md:inline text-zinc-850">|</span>
            <a
              href="https://wa.me/919665492983"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-500 hover:text-emerald-400 transition-colors normal-case"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>

      </div>

      {/* PREMIUM PRIVACY & COOKIES MODAL */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacyModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="bg-[#121212] border border-zinc-800 rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative z-110 overflow-hidden"
            >
              {/* Premium Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white p-1 rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Title */}
              <div className="flex items-center gap-3 border-b border-zinc-900 pb-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif italic font-bold text-lg text-white leading-tight">
                    Privacy Policy & Cookie Usage
                  </h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-0.5">
                    Kulswami Catering Premium Standards
                  </p>
                </div>
              </div>

              {/* Modal Body Scrollable Content */}
              <div className="space-y-6 max-h-[320px] overflow-y-auto pr-2 scrollbar-none text-zinc-300 text-xs leading-relaxed font-light">
                {/* Privacy Block */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-white font-serif italic text-sm">
                    <FileText className="w-4 h-4 text-gold shrink-0" />
                    <span>Personal Data Protection</span>
                  </div>
                  <p>
                    We value the trust you place in us for your landmark events. When you submit catering inquiries or request pricing, the personal details you share (including name, contact number, event date, venue, and guest count) are processed exclusively to formulate custom menu estimates.
                  </p>
                  <ul className="space-y-1.5 pl-1.5">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>We do not sell, rent, or lease your personal information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>Data access is limited strictly to our culinary planning staff.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>All records are stored securely, aligned with Indian privacy rules.</span>
                    </li>
                  </ul>
                </div>

                {/* Cookies Block */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-white font-serif italic text-sm">
                    <Cookie className="w-4 h-4 text-gold shrink-0" />
                    <span>Cookie Usage Policy</span>
                  </div>
                  <p>
                    Our application uses essential first-party cookies and local client-side storage to deliver an elegant experience. These are strictly used for functional preferences, such as:
                  </p>
                  <ul className="space-y-1.5 pl-1.5">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>Remembering your selected menu categories or active tabs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>Preserving temporary search queries during active session visits.</span>
                    </li>
                  </ul>
                  <p>
                    We do not deploy invasive third-party cross-site behavioral tracking pixel engines. Your browsing privacy remains absolutely uncompromised.
                  </p>
                </div>

                {/* Aurangabad note */}
                <p className="text-[11px] text-zinc-500 italic border-t border-zinc-900 pt-3">
                  Last Updated: July 2026. Governed under the judicial standards of Aurangabad, Maharashtra, India.
                </p>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-end">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="bg-gold hover:bg-gold-light text-black font-bold uppercase tracking-widest text-[10px] px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Understood & Accept
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
