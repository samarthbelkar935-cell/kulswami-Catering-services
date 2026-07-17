import { motion, useScroll, useTransform } from "motion/react";
import { MessageCircle, ArrowRight, Award, ShieldCheck, Sparkles, Flame } from "lucide-react";

// Premium letter-by-letter stagger reveal variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.025, // fine-tuned timing for luxurious flow
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 110,
    },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  // Subtle premium parallax shift & scale of the background image
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -180]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1.1, 1.25]);

  const handleScrollToQuote = () => {
    const element = document.getElementById("quote-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define floating spice elements to replicate the premium image theme
  const floatingSpices = [
    { icon: "🍃", x: "10%", y: "15%", delay: 0, size: "text-2xl" },
    { icon: "🌶️", x: "85%", y: "20%", delay: 1, size: "text-3xl" },
    { icon: "⭐", x: "80%", y: "60%", delay: 2, size: "text-xl text-gold/40" },
    { icon: "🍃", x: "75%", y: "75%", delay: 1.5, size: "text-xl" },
    { icon: "✨", x: "20%", y: "70%", delay: 0.5, size: "text-lg text-gold/30" },
    { icon: "🍂", x: "5%", y: "55%", delay: 2.5, size: "text-lg opacity-60" },
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-[#FCFBF7] text-stone-900 overflow-hidden py-24 px-4 md:px-8">
      {/* Chalkboard Slate Textured Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600"
          alt="Catering Service Background"
          style={{ y: backgroundY, scale: backgroundScale }}
          className="w-full h-full object-cover opacity-[0.07] mix-blend-multiply filter saturate-[0.25] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark radial vignette */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_10%,_#FCFBF7_85%]" />
        {/* Ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBF7] via-transparent to-[#FCFBF7]/50" />
      </div>

      {/* Interactive Floating Spices and Leaves (Mimics the beautiful reference image) */}
      {floatingSpices.map((spice, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + idx * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: spice.delay,
          }}
          style={{ left: spice.x, top: spice.y }}
          className={`absolute z-10 pointer-events-none select-none hidden md:block ${spice.size}`}
        >
          {spice.icon}
        </motion.div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center" id="hero-content">
        
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Elite Indian Culinary Experience</span>
        </motion.div>

        {/* Elegant script typography representing the requested design style */}
        <motion.p
          custom={0.1}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-script text-gold text-4xl md:text-5xl lg:text-6xl font-normal mb-1.5 drop-shadow-sm select-none"
        >
          {"Royal Maharashtrian & North Indian Feasts".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              style={{ whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Brand Name with traditional typography styling */}
        <motion.h1
          custom={0.7}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-8xl font-serif text-stone-900 font-bold tracking-tight mb-6 leading-tight drop-shadow-sm flex flex-wrap justify-center"
        >
          <span className="inline-block mr-[0.25em] whitespace-nowrap">
            {"Kulswami".split("").map((char, index) => (
              <motion.span
                key={`k-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="text-gold italic font-medium inline-block whitespace-nowrap">
            {"Catering".split("").map((char, index) => (
              <motion.span
                key={`c-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Location Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-stone-500 font-semibold tracking-[0.3em] text-xs md:text-sm uppercase mb-6"
        >
          Aurangabad – 431001, Maharashtra, India
        </motion.p>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-stone-650 text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Elevating Aurangabad's grandest celebrations through authentic spices, handpicked premium ingredients, and flawless vegetarian banquet styling.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/919665492983"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-lg shadow-xl shadow-emerald-950/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-xs uppercase tracking-widest">Connect on WhatsApp</span>
          </motion.a>

          {/* Quote CTA */}
          <motion.button
            onClick={handleScrollToQuote}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ivory hover:bg-gold text-stone-800 hover:text-white font-semibold px-8 py-4 rounded-lg border border-stone-200 transition-colors shadow-md"
          >
            <span className="text-xs uppercase tracking-widest">Request Quote</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Quality Pillars with Elegant Styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 border-t border-stone-200/80 pt-10"
        >
          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3.5 border border-gold/20 group-hover:bg-gold/20 transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif italic font-semibold text-stone-850 text-base tracking-wide mb-1.5">Authentic Flavors</h3>
            <p className="text-xs text-stone-500 max-w-xs leading-relaxed">Centuries-old recipes blended in-house with handpicked organic spices.</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3.5 border border-gold/20 group-hover:bg-gold/20 transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif italic font-semibold text-stone-850 text-base tracking-wide mb-1.5">Pure Veg & Pure Purity</h3>
            <p className="text-xs text-stone-500 max-w-xs leading-relaxed">Strict FSSAI standards, specialized vegetarian setups, separate preparations.</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3.5 border border-gold/20 group-hover:bg-gold/20 transition-colors">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif italic font-semibold text-stone-850 text-base tracking-wide mb-1.5">Artisanal Hospitality</h3>
            <p className="text-xs text-stone-500 max-w-xs leading-relaxed">Luxury silverware presentation, live culinary theaters, and elite services.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
