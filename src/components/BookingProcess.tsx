import { motion } from "motion/react";
import { ClipboardCheck, MessageSquare, Sparkles, ChefHat, CalendarDays, GlassWater } from "lucide-react";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: any;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Seamless Inquiry",
    subtitle: "Share Your Vision",
    description: "Start by filling out our digital quote form or initiating a quick inquiry directly over WhatsApp with your tentative date, guest count, and location in Aurangabad.",
    details: [
      "Flexible guest ranges",
      "Immediate WhatsApp receipt",
      "No obligation estimation"
    ],
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Personalized Consultation",
    subtitle: "Curate Your Royal Menu",
    description: "We host an interactive menu tailoring session, discussing traditional recipes, customizable live counters, aesthetic copper-brass serving setups, and visual themes.",
    details: [
      "Custom flavor profiles",
      "Live counter selection",
      "Floral & cutlery styling"
    ],
    icon: ChefHat,
  },
  {
    number: "03",
    title: "Grand Celebration",
    subtitle: "Pristine Execution",
    description: "Our highly trained service personnel arrive at your venue, setting up magnificent visual banquet counters and serving steaming, pure vegetarian delights with absolute warmth.",
    details: [
      "On-time venue setup",
      "Strict hygiene protocols",
      "Flawless hospitality"
    ],
    icon: Sparkles,
  },
];

export default function BookingProcess() {
  const handleScrollToQuote = () => {
    const element = document.getElementById("quote-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="process-section" className="py-24 px-4 md:px-8 bg-[#0a0a09] text-white relative overflow-hidden border-t border-zinc-900">
      {/* Soft warm ambient radial gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Our Booking Journey
          </span>
          <p className="font-script text-gold text-3xl md:text-4xl mt-4 font-normal leading-none">Simple, Transparent & Premium</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mt-2 mb-6">
            The Culinary <span className="text-gold italic">Roadmap</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            From the initial spark of an inquiry to the final traditional sweet served at your banquet, we ensure your hosting experience is entirely stress-free.
          </p>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0" />

          {STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#121212] border border-zinc-800/60 rounded-2xl p-8 relative flex flex-col justify-between group hover:border-gold/30 transition-all duration-300 shadow-2xl z-10"
              >
                {/* Step Number Badge */}
                <div className="absolute top-6 right-8 font-serif italic text-4xl font-extrabold text-gold/10 group-hover:text-gold/25 transition-colors select-none">
                  {step.number}
                </div>

                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-300 shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Header Titles */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold/80 block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif italic font-bold text-xl text-white mb-4 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>

                  {/* Descriptive Text */}
                  <p className="text-zinc-400 text-xs leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Micro checklist per step */}
                <div className="pt-6 border-t border-zinc-900">
                  <ul className="space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 animate-pulse" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Dynamic CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={handleScrollToQuote}
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-xl shadow-xl shadow-gold/5 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Begin Step 01: Request Free Quote</span>
            <span className="text-base font-light">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
