import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuServices from "./components/MenuServices";
import Testimonials from "./components/Testimonials";
import OurEvents from "./components/OurEvents";
import BookingProcess from "./components/BookingProcess";
import QuoteForm from "./components/QuoteForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { MessageCircle, Menu, X, Sparkles, ChevronUp, Clock, MapPin } from "lucide-react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll Progress Calculation using framer-motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Monitor Scroll for styling and toggles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll while loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const handleScrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0b] font-sans text-zinc-100 antialiased selection:bg-gold selection:text-white scroll-smooth">
      {/* 0. Elegant Gold Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold z-[10000] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* Premium Loader Overlay */}
      <AnimatePresence>
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {/* 1. Header Information Bar */}
      <div className="bg-[#080808] text-zinc-400 py-2.5 px-4 text-[10px] font-semibold uppercase tracking-widest text-center flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 relative z-55 shadow-sm border-b border-zinc-900">
        <span className="flex items-center gap-1.5 justify-center">
          <Sparkles className="w-3.5 h-3.5 text-gold fill-gold/10 animate-pulse" />
          <span>FSSAI Certified Premium Catering</span>
        </span>
        <span className="hidden sm:inline text-zinc-800">|</span>
        <span className="flex items-center gap-1.5 justify-center">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>Exclusively servicing: <strong className="text-white">Aurangabad – [PIN CODE], MH</strong></span>
        </span>
        <span className="hidden sm:inline text-zinc-800">|</span>
        <span className="flex items-center gap-1.5 justify-center">
          <Clock className="w-3.5 h-3.5 text-gold" />
          <span>Consultation: 9 AM - 9 PM</span>
        </span>
      </div>

      {/* 2. Primary Navigation Header */}
      <header
        className={`fixed top-10 sm:top-12 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl rounded-2xl z-50 transition-all duration-300 border ${
          isScrolled
            ? "bg-[#0d0d0c]/95 backdrop-blur-md border-zinc-800/80 py-3.5 px-6 shadow-2xl"
            : "bg-transparent border-transparent py-5 px-4"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Title */}
          <button
            onClick={() => handleScrollToSection("hero-content")}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center font-serif font-black shadow-sm transition-all duration-300 bg-gold text-white shadow-gold/20`}>
              K
            </div>
            <div>
              <span className="block font-serif font-bold text-sm md:text-base tracking-tight leading-none text-white">
                Kulswami
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-widest mt-0.5 text-gold">
                Catering Services
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-widest text-zinc-300">
            <button
              onClick={() => handleScrollToSection("about-section")}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Story
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
              Contact
            </button>
          </nav>

          {/* Desktop Direct WhatsApp Button */}
          <div className="hidden md:block">
            <motion.a
              href="https://wa.me/919665492983"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 font-bold text-[10px] uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-sm bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>

        </div>
      </header>

      {/* 3. Mobile Hamburger Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-28 inset-x-4 bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-6 z-40 md:hidden shadow-2xl text-white"
          >
            <nav className="flex flex-col gap-4 text-center font-bold text-xs uppercase tracking-widest text-zinc-300">
              <button
                onClick={() => handleScrollToSection("about-section")}
                className="py-2.5 border-b border-zinc-800/60 hover:text-gold transition-colors"
              >
                Our Story
              </button>
              <button
                onClick={() => handleScrollToSection("menu-services-section")}
                className="py-2.5 border-b border-zinc-800/60 hover:text-gold transition-colors"
              >
                Services & Menu
              </button>
              <button
                onClick={() => handleScrollToSection("testimonials-section")}
                className="py-2.5 border-b border-zinc-800/60 hover:text-gold transition-colors"
              >
                Guest Reviews
              </button>
              <button
                onClick={() => handleScrollToSection("our-events-section")}
                className="py-2.5 border-b border-zinc-800/60 hover:text-gold transition-colors"
              >
                Catering Setups
              </button>
              <button
                onClick={() => handleScrollToSection("process-section")}
                className="py-2.5 border-b border-zinc-800/60 hover:text-gold transition-colors"
              >
                Booking Process
              </button>
              <button
                onClick={() => handleScrollToSection("quote-section")}
                className="py-2.5 border-b border-zinc-800/60 hover:text-gold transition-colors"
              >
                Quote Request
              </button>
              <button
                onClick={() => handleScrollToSection("contact-section")}
                className="py-2.5 hover:text-gold transition-colors"
              >
                WhatsApp Contact
              </button>
              
              <a
                href="https://wa.me/919665492983"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl text-xs tracking-wider uppercase shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Page Content Wrapper */}
      <main className="pt-0">
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT SECTION */}
        <About />

        {/* MENU & SERVICES SECTION */}
        <MenuServices />

        {/* CUSTOMER TESTIMONIALS SECTION */}
        <Testimonials />

        {/* OUR EVENTS & GALLERY SHOWCASE */}
        <OurEvents />

        {/* BOOKING PROCESS SECTION */}
        <BookingProcess />

        {/* QUOTE OR INQUIRY FORM */}
        <QuoteForm />

        {/* CONTACT COMPONENT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* 5. Sticky Floating Action Elements */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Scroll back to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 shadow-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Sticky Hover Floating WhatsApp Link */}
        <motion.a
          href="https://wa.me/919665492983"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer relative group"
        >
          {/* Subtle elegant pulsing background ripples after page load is complete */}
          {!isLoading && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-500/30 -z-10"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-500/20 -z-10"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 3,
                  delay: 0.75,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          )}

          <MessageCircle className="w-7 h-7 fill-current" />
          <span className="absolute right-16 bg-zinc-900 text-white border border-zinc-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            WhatsApp Online
          </span>
        </motion.a>
      </div>

    </div>
  );
}
