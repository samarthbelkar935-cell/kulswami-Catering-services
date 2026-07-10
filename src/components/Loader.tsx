import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

const STEPS = [
  "Curating authentic spices...",
  "Perfecting royal vegetarian menus...",
  "Arranging luxury banquet setups...",
  "Polishing traditional hospitality..."
];

export default function Loader({ onComplete }: LoaderProps) {
  const [currentStep, setCurrentStep] = useState(0);

  // Cycle through the steps to simulate a bespoke premium preparation
  useEffect(() => {
    if (currentStep < STEPS.length - 1) {
      const stepTimer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(stepTimer);
    } else {
      const endTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(endTimer);
    }
  }, [currentStep, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 bg-[#0c0c0b] z-[9999] flex flex-col items-center justify-center text-white select-none pointer-events-auto"
    >
      {/* Decorative ambient gold glow */}
      <div className="absolute w-[350px] h-[350px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main loading container */}
      <div className="relative flex flex-col items-center text-center px-4 max-w-sm">
        
        {/* Animated Mandala/Floral frame + Monogram */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-8">
          
          {/* Rotating Dotted Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-gold/40"
          />

          {/* Slower Counter-rotating Inner Mandala Accents */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-double border-gold/25"
          />

          {/* Glowing central golden orb */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 rounded-full bg-gold/5 border border-gold/30 flex items-center justify-center shadow-[0_0_20px_rgba(175,148,97,0.15)]"
          />

          {/* Royal Monogram "K" */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative font-serif font-black text-3xl text-gold tracking-tight"
          >
            K
          </motion.span>

          {/* Mini Sparkles */}
          <div className="absolute -top-1 -right-1 text-gold/60 animate-pulse">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <span className="block font-serif font-bold text-xl tracking-wide text-white uppercase">
            Kulswami
          </span>
          <span className="block text-[10px] font-bold text-gold uppercase tracking-[0.25em] mt-1">
            Catering Services
          </span>
        </motion.div>

        {/* Segment separator */}
        <div className="w-12 h-[1px] bg-gold/20 mb-6" />

        {/* Dynamic Status Text */}
        <div className="h-6 overflow-hidden relative w-full">
          <motion.p
            key={currentStep}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="text-xs text-zinc-400 font-light tracking-widest uppercase"
          >
            {STEPS[currentStep]}
          </motion.p>
        </div>

        {/* Linear progress bar */}
        <div className="w-40 h-[2px] bg-zinc-900 rounded-full overflow-hidden mt-6">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-gold/50 to-gold"
          />
        </div>

      </div>
    </motion.div>
  );
}
