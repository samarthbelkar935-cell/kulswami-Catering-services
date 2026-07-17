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
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 bg-[#0a0a09] z-[9999] flex flex-col items-center justify-center text-white select-none pointer-events-auto"
    >
      {/* Decorative ambient pulsing gold glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-[450px] h-[450px] bg-gradient-to-r from-[#af9461]/20 to-transparent rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Main loading container */}
      <div className="relative flex flex-col items-center text-center px-4 max-w-sm">
        
        {/* Animated Mandala/Floral frame + Monogram */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-8">
          
          {/* Outer Ambient Golden Halo */}
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#af9461] to-amber-200 blur-md opacity-20"
          />

          {/* Rotating Dotted Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-1 rounded-full border border-dashed border-[#af9461]/40"
          />

          {/* Elegant SVG Custom Branded Mandala Accent */}
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            viewBox="0 0 100 100"
            className="absolute inset-3 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] text-[#af9461]/35 fill-none"
          >
            {/* Elegant luxury circular geometry lines representing premium catering hospitality */}
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 50 12 L 50 88 M 12 50 L 88 50 M 23 23 L 77 77 M 23 77 L 77 23" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
            <path d="M 50 20 Q 40 35 50 50 Q 60 35 50 20 Z" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 50 80 Q 40 65 50 50 Q 60 65 50 80 Z" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 20 50 Q 35 40 50 50 Q 35 60 20 50 Z" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 80 50 Q 65 40 50 50 Q 65 60 80 50 Z" stroke="currentColor" strokeWidth="0.75" />
          </motion.svg>

          {/* Glowing central golden orb */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-6 rounded-full bg-stone-900 border border-[#af9461]/60 flex items-center justify-center shadow-[0_0_25px_rgba(175,148,97,0.3)] z-10"
          />

          {/* Royal Monogram "K" with a glowing custom drop shadow */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative font-serif font-black text-4xl text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-[#af9461] to-amber-300 tracking-tight z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            K
          </motion.span>

          {/* Floating Sparkle Accents */}
          <motion.div 
            animate={{ 
              scale: [0.6, 1.2, 0.6],
              opacity: [0.3, 0.9, 0.3],
              y: [-2, 2, -2]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 right-2 text-amber-200/80 z-20"
          >
            <Sparkles className="w-5 h-5 drop-shadow-[0_0_5px_rgba(251,191,36,0.6)]" />
          </motion.div>
        </div>

        {/* Brand Name with continuous gold gradient shine */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4"
        >
          <span className="block font-serif font-bold text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-amber-100 to-stone-100 uppercase bg-[length:200%_auto] animate-pulse">
            Kulswami
          </span>
          <span className="block text-[11px] font-bold text-[#af9461] uppercase tracking-[0.3em] mt-1.5 font-sans">
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
