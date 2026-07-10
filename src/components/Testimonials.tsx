import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, Sparkles, Award, MapPin, Calendar } from "lucide-react";

// Framer motion staggered reveal animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1], // premium easeOutQuart
    },
  },
};

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  category: "all" | "wedding" | "family" | "corporate";
  rating: number;
  date: string;
  text: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Anand Deshmukh",
    role: "Grand Wedding of 1,200 Guests",
    location: "Aurangabad Club, MH",
    category: "wedding",
    rating: 5,
    date: "May 2026",
    text: "Kulswami catered our daughter's wedding of 1,200 guests. The authentic Puran Poli, exquisite Shrikhand, and the live paneer station were absolutely stellar. Every single guest was speaking about the authentic flavors and pure hygiene!",
    initials: "PA",
  },
  {
    id: 2,
    name: "Rajesh Kulkarni",
    role: "Griha Pravesh Traditional Pooja",
    location: "Beed Bypass, Aurangabad",
    category: "family",
    rating: 5,
    date: "April 2026",
    text: "For our new home, we wanted strict traditional vegetarian food without onion and garlic for the holy pooja. Kulswami prepared a divine menu of Dal Baati and traditional Maharashtrian usal. Truly pristine hospitality!",
    initials: "RK",
  },
  {
    id: 3,
    name: "Dr. Meenakshi Salunke",
    role: "Silver Jubilee Celebration",
    location: "Shehnai Garden, Aurangabad",
    category: "family",
    rating: 5,
    date: "March 2026",
    text: "Impeccable presentation! The premium brass cutlery setups and their courteous staff dressed in traditional attire elevated our celebration. The live Jalebi counter was a grand hit for all our invitees.",
    initials: "MS",
  },
  {
    id: 4,
    name: "Vikas Shah",
    role: "Corporate Gala Dinner",
    location: "CIDCO Industrial Zone, Aurangabad",
    category: "corporate",
    rating: 5,
    date: "January 2026",
    text: "Extremely professional execution. We had diverse regional requirements (North Indian, South Indian, and authentic Maharashtrian) for our partners. The flavors were exceptionally balanced, clean, and perfectly timed.",
    initials: "VS",
  },
  {
    id: 5,
    name: "Sunita & Devendra Patil",
    role: "Traditional Muhurat & Engagement",
    location: "Saraswati Lawns, Aurangabad",
    category: "wedding",
    rating: 5,
    date: "February 2026",
    text: "From the traditional welcome drinks to the final desserts, Kulswami team managed everything flawlessly. Their dry-fruit basundi was rich and outstanding. Highly recommend them for weddings!",
    initials: "SD",
  },
  {
    id: 6,
    name: "Nikhil Joshi",
    role: "Executive Launch Event",
    location: "Hotel Rama International Area",
    category: "corporate",
    rating: 5,
    date: "December 2025",
    text: "Amazing high-tea catering! The live chaat counter, premium starters, and flawless presentation impressed our senior management team. They take safety and hygiene very seriously.",
    initials: "NJ",
  }
];

const CATEGORIES = [
  { id: "all", label: "All Reviews" },
  { id: "wedding", label: "Royal Weddings" },
  { id: "family", label: "Family Milestones" },
  { id: "corporate", label: "Corporate Galas" },
];

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTestimonials = TESTIMONIALS.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <section id="testimonials-section" className="py-24 px-4 md:px-8 bg-[#0c0c0b] text-white overflow-hidden relative border-t border-zinc-900/60">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={itemVariants} className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Client Gratitude
          </motion.span>
          <motion.p variants={itemVariants} className="font-script text-gold text-3xl md:text-4xl mt-4 font-normal leading-none">Voices of Delighted Hosts</motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mt-2 mb-6">
            Words of Appreciation & <span className="text-gold italic font-medium">Memorable Reviews</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Discover why prestigious families and corporate organizations across <strong className="text-white font-semibold">Aurangabad, Maharashtra</strong> trust Kulswami to design their grand banquet feasts.
          </motion.p>

          {/* Filtering Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 mt-10 p-1 bg-[#121212] rounded-xl border border-zinc-800/80 inline-flex max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-gold text-white shadow-md"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((review) => (
              <motion.div
                key={review.id}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, borderColor: "rgba(175, 148, 97, 0.3)", boxShadow: "0 15px 35px -15px rgba(175,148,97,0.15)" }}
                className="bg-[#121212] border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background quote illustration in bottom right */}
                <div className="absolute right-6 bottom-6 text-zinc-800/20 pointer-events-none group-hover:text-gold/5 transition-colors duration-300">
                  <Quote className="w-20 h-20 rotate-180" />
                </div>

                <div>
                  {/* Rating Stars and Date */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-gold">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-gold" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                      {review.date}
                    </span>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 italic relative z-10 font-light">
                    "{review.text}"
                  </p>
                </div>

                {/* User Profile Footer */}
                <div className="border-t border-zinc-900/80 pt-6 flex items-center gap-4 relative z-10">
                  {/* Monogram Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-serif font-bold tracking-tight text-sm shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-white tracking-tight leading-snug group-hover:text-gold transition-colors duration-200">
                      {review.name}
                    </h4>
                    <p className="text-zinc-500 text-xs font-medium tracking-wide leading-none mt-0.5">
                      {review.role}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-zinc-500 mt-1.5">
                      <MapPin className="w-3 h-3 text-gold" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary Metric / Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#161615] border border-zinc-800/80 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif italic font-bold text-lg text-white">Trustworthy Culinary Hospitality</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Recommended by top venues, planners, and families across Maharashtra.</p>
            </div>
          </div>
          <div className="flex items-center gap-8 border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-8 shrink-0">
            <div className="text-center">
              <span className="block font-serif text-3xl font-bold text-gold">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Vegetarian Purity</span>
            </div>
            <div className="text-center">
              <span className="block font-serif text-3xl font-bold text-gold">5.0</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Average Star Rating</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
