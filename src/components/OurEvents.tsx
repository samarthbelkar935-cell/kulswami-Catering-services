import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Sparkles, Maximize2, MapPin, Calendar, Heart, X, ArrowUpRight } from "lucide-react";

interface EventImage {
  id: number;
  title: string;
  category: "Weddings" | "Traditional" | "Corporate" | "Desserts";
  location: "Aurangabad, MH" | "Chhatrapati Sambhajinagar";
  description: string;
  imageUrl: string;
  tag: string;
}

const EVENT_GALLERY: EventImage[] = [
  {
    id: 1,
    title: "Royal Indian Feast Buffet",
    category: "Traditional",
    location: "Chhatrapati Sambhajinagar",
    description: "A premium selection of freshly prepared Paneer Pasanda, rich Veg Diwani Handi, and saffron-infused basmati rice served in warm metallic handis, styled as a traditional feast.",
    imageUrl: "https://images.unsplash.com/photo-1545247181-516773cae7bc?auto=format&fit=crop&q=80&w=1200",
    tag: "Royal Indian Feast",
  },
  {
    id: 2,
    title: "Traditional Maharashtrian Haldi Feast",
    category: "Traditional",
    location: "Aurangabad, MH",
    description: "Authentic bajot seating arrangement paired with marigold decorations, featuring steaming warm hand-rolled puran polis.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    tag: "Heritage Ceremony",
  },
  {
    id: 3,
    title: "Premium Chafing Dish Buffet Setup",
    category: "Weddings",
    location: "Chhatrapati Sambhajinagar",
    description: "Immaculate chrome chafing dishes lined beautifully with fresh white floral accents and polished decorative river stones, providing an elegant luxury presentation for weddings.",
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200",
    tag: "Luxury Wedding",
  },
  {
    id: 4,
    title: "Signature Sweet & Dessert Showcase",
    category: "Desserts",
    location: "Aurangabad, MH",
    description: "A premium sweet bar loaded with hot syrup-dripping Gulab Jamuns, cardamom-flavored Basundi, and golden Sajuk Tup Gajar Halwa served in elegant glassware.",
    imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1200",
    tag: "Sweet Showcase",
  },
  {
    id: 5,
    title: "Artisanal Welcoming Beverage Bar",
    category: "Corporate",
    location: "Aurangabad, MH",
    description: "Elegantly chilled tall brass dispensers pouring freshly churned Kokum Solkadhi, Mint Shikanji, and seasonal mango beverages.",
    imageUrl: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=1200",
    tag: "Live Beverage Station",
  },
  {
    id: 6,
    title: "Gourmet Live Counter & Starters",
    category: "Weddings",
    location: "Chhatrapati Sambhajinagar",
    description: "Crispy Medu Vadas, paneer delicacies, and pan-fried hot paniyaram served instantly from sizzling hot induction zones to your guests.",
    imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=1200",
    tag: "Live Starters",
  },
];

const CATEGORIES = ["All", "Weddings", "Traditional", "Corporate", "Desserts"];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function OurEvents() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeImage, setActiveImage] = useState<EventImage | null>(null);

  const filteredEvents = EVENT_GALLERY.filter(
    (item) => selectedFilter === "All" || item.category === selectedFilter
  );

  const handleScrollToQuote = () => {
    const element = document.getElementById("quote-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="our-events-section" className="py-24 px-4 md:px-8 bg-[#0c0c0b] text-white overflow-hidden relative border-t border-zinc-900">
      
      {/* Decorative subtle gold grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Real Showcase
          </span>
          <p className="font-script text-gold text-3xl md:text-4xl mt-4 font-normal leading-none">A Vision of Hospitality</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mt-2 mb-6">
            Explore Our Curated <span className="text-gold italic">Catering Setups</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Witness the beauty of our live counters, authentic theme banquets, and customized layouts arranged at prestigious venues across <strong className="text-white font-semibold">Aurangabad (Chhatrapati Sambhajinagar)</strong>.
          </p>

          {/* Categories Tab selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10 p-1.5 bg-[#121212] border border-zinc-800/80 rounded-2xl w-fit mx-auto shadow-xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-gold text-white shadow-md"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cat === "Traditional" ? "Traditional Feasts" : cat === "Corporate" ? "Corporate & Banquets" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid Setup */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                layout
                key={event.id}
                variants={cardVariants}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                className="bg-[#121212] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col group transition-all duration-300"
              >
                {/* Image Showcase Container */}
                <div className="h-64 relative overflow-hidden bg-[#181817] cursor-pointer" onClick={() => setActiveImage(event)}>
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Tag Overlay */}
                  <span className="absolute top-4 left-4 bg-zinc-950/80 text-gold text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border border-gold/20 uppercase backdrop-blur-md">
                    {event.tag}
                  </span>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/10 to-transparent opacity-60" />

                  {/* Hover Quick Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Event Description Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{event.location}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>Real Event Photos</span>
                      </span>
                    </div>

                    <h3 className="font-serif italic font-bold text-lg text-white mb-2 leading-snug group-hover:text-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light mb-6">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold/80 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>Strict Purity Guarantee</span>
                    </span>
                    <button 
                      onClick={handleScrollToQuote}
                      className="text-white hover:text-gold text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Inquire Layout</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Informative reassurance banner below the grid */}
        <div className="mt-16 p-6 bg-[#121212] rounded-2xl border border-zinc-800 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif italic font-semibold text-white text-base">
              Dreaming of a bespoke theme for your upcoming banquet?
            </h4>
            <p className="text-zinc-400 text-xs font-light">
              We design customized live counters, floral layouts, brass warmers, and royal cutlery configurations unique to your event.
            </p>
          </div>
          <button
            onClick={handleScrollToQuote}
            className="whitespace-nowrap bg-gold hover:bg-gold-dark text-white font-bold text-[10px] uppercase tracking-widest py-3 px-6 rounded-xl transition-all shadow-md cursor-pointer shrink-0"
          >
            Design My Layout
          </button>
        </div>

      </div>

      {/* FULL-SCREEN PREMIUM LIGHTBOX ZOOM */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-[#121212] border border-zinc-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1.5 bg-black/60 rounded-full border border-zinc-800/80 hover:bg-zinc-900 transition-all cursor-pointer z-20"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image */}
              <div className="h-[400px] md:h-[480px] bg-black relative">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent p-6 pt-12" />
              </div>

              {/* Details Pane */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  <span className="bg-gold/10 text-gold border border-gold/20 px-2.5 py-0.5 rounded-full">
                    {activeImage.tag}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{activeImage.location}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif italic font-bold text-xl md:text-2xl text-white">
                    {activeImage.title}
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                    {activeImage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[10px] text-zinc-500 italic font-light">
                    *Real photographic records of layouts prepared by Kulswami Catering Services. All rights reserved.
                  </p>
                  <button
                    onClick={() => {
                      setActiveImage(null);
                      handleScrollToQuote();
                    }}
                    className="bg-gold hover:bg-gold-dark text-white font-bold text-[10px] uppercase tracking-widest py-3 px-6 rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Discuss this Layout on WhatsApp
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
