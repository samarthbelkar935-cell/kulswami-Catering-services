import { motion } from "motion/react";
import { CheckCircle2, Flame, Star, Compass } from "lucide-react";
import LazyImage from "./LazyImage";

// Framer motion staggered variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // premium easeOutQuart
    },
  },
};

export default function About() {
  const highlights = [
    "Centuries-old secret spices blended in-house for traditional curries",
    "Tailored culinary choices from purely classic to heritage regional Indian cuisines",
    "Premium quality ingredients sourced from premium farms",
    "Highly trained service personnel dedicated to warmth and hospitality",
    "Absolute focus on sanitation and neat presentation"
  ];

  return (
    <section id="about-section" className="py-24 px-4 md:px-8 bg-[#FAF7F2] text-stone-900 overflow-hidden relative border-b border-stone-200/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Images Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-md border border-stone-200/80 h-48 md:h-64"
              >
                <LazyImage
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600"
                  alt="Traditional Vegetarian Feast"
                  className="w-full h-full object-cover filter brightness-95"
                />
              </motion.div>
              <div className="bg-ivory rounded-2xl p-6 flex flex-col justify-between h-40 md:h-48 border border-stone-200/80 shadow-md">
                <Flame className="w-8 h-8 text-gold" />
                <div>
                  <h4 className="font-serif italic font-bold text-xl text-stone-950">Slow Cooked</h4>
                  <p className="text-xs text-stone-500 mt-1">Preserving traditional flavors via ancestral methods.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-8">
              <div className="bg-ivory text-stone-900 rounded-2xl p-6 flex flex-col justify-between h-40 md:h-48 border border-gold/25 shadow-md">
                <Compass className="w-8 h-8 text-gold" />
                <div>
                  <h4 className="font-serif italic font-bold text-lg text-stone-950">Pure Vegetarian</h4>
                  <p className="text-xs text-stone-500 mt-1">Specialized purely vegetarian banquet arrangements.</p>
                </div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-md border border-stone-200/80 h-48 md:h-64"
              >
                <LazyImage
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
                  alt="Premium Presentation"
                  className="w-full h-full object-cover filter brightness-95"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                Our Story & Promise
              </span>
              <p className="font-script text-gold text-3xl md:text-4xl mt-4 font-normal leading-none">A Heritage of Culinary Perfection</p>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 font-bold tracking-tight mt-2 leading-tight">
                An Absolute Legacy of <span className="text-gold italic">Exquisite Taste</span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Founded in <strong className="text-stone-950 font-semibold">Aurangabad – 431001, Maharashtra, India</strong>, Kulswami Catering Services has built a stellar reputation based on quality, integrity, and rich taste. We believe that fine food is the soul of any happy celebration, and we are dedicated to making every event an extraordinary gastronomic journey.
            </motion.p>
            <motion.p variants={itemVariants} className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Whether you are planning a grand royal wedding for thousands of guests or an intimate family celebration at home, our meticulous attention to detail ensures that the preparation, presentation, and service are nothing short of perfect.
            </motion.p>

            {/* List of Highlights */}
            <motion.div variants={containerVariants} className="space-y-3.5 pt-2">
              {highlights.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-stone-800 text-sm md:text-base font-light">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Micro-interactive Review Callout */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-ivory rounded-xl p-5 shadow-md border border-stone-200 flex items-center gap-4 mt-6"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-xs text-stone-600 italic">"Our promise is simple: to serve food with unmatched purity, exquisite taste, and loving hospitality, ensuring your guests leave with happy hearts."</p>
                <p className="text-xs font-bold text-gold mt-1.5">— Kulswami Management Team</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
