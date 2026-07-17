import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Sparkles, Maximize2, MapPin, Calendar, Heart, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import LazyImage from "./LazyImage";

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
    title: "Grand Royal Wedding Buffet",
    category: "Weddings",
    location: "Chhatrapati Sambhajinagar",
    description: "Stunning presentation of royal brass handis, rich curries, saffron pulao, and fresh naan arranged beautifully under warm golden canopy lights.",
    imageUrl: "https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?auto=format&fit=crop&q=80&w=1200",
    tag: "Royal Feast",
  },
  {
    id: 2,
    title: "Traditional Maharashtrian Haldi Feast",
    category: "Traditional",
    location: "Aurangabad, MH",
    description: "Authentic bajot seating arrangement with rich banana leaf platters, golden brass katoris, marigold decor, and hot puran polis.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    tag: "Heritage Ceremony",
  },
  {
    id: 3,
    title: "Premium Luxury Chafing Setup",
    category: "Weddings",
    location: "Chhatrapati Sambhajinagar",
    description: "Polished chrome and gold chafing dishes decorated elegantly with white roses, hydrangeas, and warm ambient tealights.",
    imageUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=1200",
    tag: "Luxury Reception",
  },
  {
    id: 4,
    title: "Royal Shahi Sweet & Dessert Bar",
    category: "Desserts",
    location: "Aurangabad, MH",
    description: "A gorgeous dessert station presenting hot Gulab Jamuns, cardamom-infused Basundi, Rasgullas, and pistachio-garnished Gajar Halwa.",
    imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1200",
    tag: "Shahi Dessert",
  },
  {
    id: 5,
    title: "Traditional Spiced Buttermilk & Lassi Bar",
    category: "Traditional",
    location: "Chhatrapati Sambhajinagar",
    description: "Cool refreshing traditional spiced buttermilk (Mattha), creamy sweet mango lassi, and mint-garnished lassi served in royal brass containers.",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=1200",
    tag: "Heritage Drinks",
  },
  {
    id: 6,
    title: "Live Sizzling Chat & Starters Counter",
    category: "Weddings",
    location: "Chhatrapati Sambhajinagar",
    description: "Guests enjoying hot live delicacies like crispy samosas, mini-vadas, and sizzling appetizers prepared fresh on induction plates.",
    imageUrl: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=1200",
    tag: "Live Counters",
  },
  {
    id: 7,
    title: "Live Saffron Jalebi & Rabdi Station",
    category: "Desserts",
    location: "Aurangabad, MH",
    description: "Crispy hot golden-fried jalebis swirled on live tawas and served with thick, slow-cooked cardamom rabdi in earthenware cups.",
    imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=1200",
    tag: "Live Sweets",
  },
  {
    id: 8,
    title: "Corporate Gala Banquet Dinner",
    category: "Corporate",
    location: "Aurangabad, MH",
    description: "Spacious, elegantly lit tables with premium fine-dining plate arrangements, crystal glassware, and minimalist floral centerpieces.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    tag: "Gala Banquet",
  },
  {
    id: 9,
    title: "Artisanal Welcome Drinks Bar",
    category: "Corporate",
    location: "Aurangabad, MH",
    description: "Fruity coolers, signature non-alcoholic punches, chilled Solkadhi, and citrus infusions served in premium stemware.",
    imageUrl: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=1200",
    tag: "Premium Welcome",
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

  const handleNextImage = () => {
    if (!activeImage) return;
    const currentIndex = filteredEvents.findIndex((img) => img.id === activeImage.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredEvents.length;
    setActiveImage(filteredEvents[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!activeImage) return;
    const currentIndex = filteredEvents.findIndex((img) => img.id === activeImage.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredEvents.length) % filteredEvents.length;
    setActiveImage(filteredEvents[prevIndex]);
  };

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, filteredEvents]);

  const handleScrollToQuote = () => {
    const element = document.getElementById("quote-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="our-events-section" className="py-24 px-4 md:px-8 bg-[#FCFBF7] text-stone-900 overflow-hidden relative border-b border-stone-200/40">
      
      {/* Decorative subtle light grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e0_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-25" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Real Showcase
          </span>
          <p className="font-script text-gold text-3xl md:text-4xl mt-4 font-normal leading-none">A Vision of Hospitality</p>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 font-bold tracking-tight mt-2 mb-6">
            Explore Our Curated <span className="text-gold italic">Catering Setups</span>
          </h2>
          <p className="text-stone-650 text-sm md:text-base leading-relaxed font-light">
            Witness the beauty of our live counters, authentic theme banquets, and customized layouts arranged at prestigious venues across <strong className="text-stone-950 font-semibold">Aurangabad (Chhatrapati Sambhajinagar)</strong>.
          </p>

          {/* Categories Tab selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10 p-1.5 bg-stone-100 border border-stone-200 rounded-2xl w-fit mx-auto shadow-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-gold text-white shadow-md"
                    : "text-stone-500 hover:text-stone-850"
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
                className="bg-ivory border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300"
              >
                {/* Image Showcase Container */}
                <div className="h-64 relative overflow-hidden bg-[#F5F2EC] cursor-pointer" onClick={() => setActiveImage(event)}>
                  <LazyImage
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  />
                  
                  {/* Category Tag Overlay */}
                  <span className="absolute top-4 left-4 bg-ivory/90 text-gold text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border border-gold/20 uppercase backdrop-blur-sm shadow-sm">
                    {event.tag}
                  </span>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/10 to-transparent opacity-80" />

                  {/* Hover Quick Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-900/10 backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-full bg-gold/90 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Event Description Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">
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

                    <h3 className="font-serif italic font-bold text-lg text-stone-900 mb-2 leading-snug group-hover:text-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-stone-600 text-xs leading-relaxed font-light mb-6">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold/80 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>Strict Purity Guarantee</span>
                    </span>
                    <button 
                      onClick={handleScrollToQuote}
                      className="text-stone-700 hover:text-gold text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
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
        <div className="mt-16 p-6 bg-ivory rounded-2xl border border-stone-200 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif italic font-semibold text-stone-900 text-base">
              Dreaming of a bespoke theme for your upcoming banquet?
            </h4>
            <p className="text-stone-655 text-xs font-light">
              We design customized live counters, floral layouts, brass warmers, and royal cutlery configurations unique to your event.
            </p>
          </div>
          <button
            onClick={handleScrollToQuote}
            className="whitespace-nowrap bg-gold hover:bg-gold-dark text-white font-bold text-[10px] uppercase tracking-widest py-3 px-6 rounded-xl transition-all shadow-md cursor-pointer shrink-0 animate-pulse-slow"
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

            {/* Left Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 text-zinc-400 hover:text-white p-2.5 md:p-3 bg-black/65 hover:bg-black/90 rounded-full border border-zinc-800/80 hover:border-gold/50 transition-all cursor-pointer shadow-2xl flex items-center justify-center group"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-gold transition-colors" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 text-zinc-400 hover:text-white p-2.5 md:p-3 bg-black/65 hover:bg-black/90 rounded-full border border-zinc-800/80 hover:border-gold/50 transition-all cursor-pointer shadow-2xl flex items-center justify-center group"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-gold transition-colors" />
            </button>

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-white border border-stone-200 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative z-10 mx-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 p-1.5 bg-stone-100/80 rounded-full border border-stone-200 hover:bg-stone-200 transition-all cursor-pointer z-20 shadow-sm"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image with Cross-fade transition */}
              <div className="h-[300px] sm:h-[400px] md:h-[480px] bg-black relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={activeImage.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    src={activeImage.imageUrl}
                    alt={activeImage.title}
                    className="w-full h-full object-cover absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/30 to-transparent p-6 pt-12 z-10" />
              </div>

              {/* Details Pane */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest">
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
                  <h4 className="font-serif italic font-bold text-xl md:text-2xl text-stone-900">
                    {activeImage.title}
                  </h4>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">
                    {activeImage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[10px] text-stone-400 italic font-light">
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
