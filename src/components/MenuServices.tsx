import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_CATEGORIES, MENU_ITEMS, SERVICES } from "../data/menu";
import { Search, Sparkles, Utensils, ArrowUpRight, CheckCircle2 } from "lucide-react";

// Framer motion staggered variants
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

const iconVariants = {
  hidden: { opacity: 0, rotate: -60, scale: 0.7 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 150,
    },
  },
};

const COURSE_TAGS = ["All", "Starters", "Main Course", "Desserts", "Beverages"];
const SERVICE_CATEGORIES = ["All", "Weddings", "Corporate", "Traditional"];

export default function MenuServices() {
  const [activeTab, setActiveTab] = useState("services"); // "services" or "menu"
  const [selectedCategory, setSelectedCategory] = useState(MENU_CATEGORIES[0]);
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = SERVICES.filter((service) => {
    if (selectedServiceCategory === "All") return true;
    return service.category === selectedServiceCategory;
  });

  const filteredMenuItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeTab === "menu" ? item.category === selectedCategory : true;
    const matchesCourse = selectedCourse === "All" ? true : item.course === selectedCourse;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesCourse && matchesSearch;
  });

  const handleScrollToQuote = () => {
    const element = document.getElementById("quote-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="menu-services-section" className="py-24 px-4 md:px-8 bg-[#080808] text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Our Offerings
          </span>
          <p className="font-script text-gold text-3xl md:text-4xl mt-4 font-normal leading-none">Traditional Culinary Craftsmanship</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mt-2 mb-6">
            Elegantly Curated Menus & <span className="text-gold italic">Premium Services</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            From signature Maharashtrian delicacies to royal Indian banquets, we design exquisite food menus tailored for each of your special events in <strong className="text-white font-semibold">Aurangabad – 431001, Maharashtra, India</strong>.
          </p>

          {/* Tab Selection */}
          <div className="inline-flex p-1 bg-[#121212] rounded-xl mt-10 border border-zinc-800/80 shadow-2xl">
            <button
              onClick={() => {
                setActiveTab("services");
                setSearchQuery("");
              }}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === "services"
                  ? "bg-gold text-white shadow-md"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Catering Services
            </button>
            <button
              onClick={() => {
                setActiveTab("menu");
                setSearchQuery("");
                setSelectedCourse("All");
              }}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === "menu"
                  ? "bg-gold text-white shadow-md"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Signature Dish Menus
            </button>
          </div>
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "services" ? (
            /* SERVICES PANEL */
            <motion.div
              key="services-panel"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Specializations Category Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#121212] p-4 rounded-xl border border-zinc-800/80">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 shrink-0">
                  Catering Specializations:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedServiceCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-150 cursor-pointer ${
                        selectedServiceCategory === cat
                          ? "bg-gold border-gold text-white shadow-md"
                          : "bg-transparent border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/40"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of filtered services */}
              <motion.div
                key={selectedServiceCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="bg-[#121212] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Service Image */}
                      <div className="h-56 relative overflow-hidden bg-[#181817]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 filter brightness-90"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
                      </div>

                      {/* Service Info */}
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/5 px-2.5 py-0.5 rounded border border-gold/10">
                            {service.category}
                          </span>
                        </div>
                        <h3 className="font-serif italic font-bold text-xl text-white mb-3 flex items-center justify-between">
                          <span>{service.title}</span>
                          <motion.div variants={iconVariants}>
                            <Utensils className="w-5 h-5 text-gold" />
                          </motion.div>
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                          {service.description}
                        </p>

                        {/* Feature Checklist */}
                        <ul className="space-y-2.5">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-medium overflow-hidden">
                              <motion.div variants={iconVariants} className="shrink-0">
                                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                              </motion.div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Service Footer Button */}
                    <div className="p-8 pt-0">
                      <button
                        onClick={handleScrollToQuote}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#181817] hover:bg-gold text-white hover:text-black font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest transition-colors border border-zinc-800 hover:border-transparent shadow-md"
                      >
                        <span>Inquire for this Service</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            /* SIGNATURE MENU PANEL */
            <motion.div
              key="menu-panel"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -35 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Menu Categories Bar + Search Bar */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
                {/* Scrollable Categories List */}
                <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
                  {MENU_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSelectedCourse("All"); // Reset subcourse filter when main cuisine changes
                      }}
                      className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                        selectedCategory === category
                          ? "bg-gold border-gold text-white shadow-md"
                          : "bg-[#121212] border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Instant Search input */}
                <div className="relative w-full lg:w-80">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-500">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search master dishes..."
                    className="w-full pl-10 pr-4 py-2.5 bg-[#121212] border border-zinc-800 rounded-full text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                  />
                </div>
              </div>

              {/* Clickable Course Sub-categories Tag Row */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 bg-[#121212] p-4 rounded-xl border border-zinc-800/80">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 shrink-0">
                  Course Filter:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {COURSE_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedCourse(tag)}
                      className={`px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider border transition-all duration-150 cursor-pointer ${
                        selectedCourse === tag
                          ? "bg-gold/15 border-gold text-gold shadow-sm"
                          : "bg-transparent border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Dishes with luxury chalkboard styled card frames and staggered motion */}
              {filteredMenuItems.length > 0 ? (
                <motion.div
                  key={`${selectedCategory}-${selectedCourse}-${searchQuery}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredMenuItems.map((item) => (
                      <motion.div
                        layout
                        variants={itemVariants}
                        key={item.name}
                        whileHover={{
                          y: -4,
                          borderColor: "rgba(175, 148, 97, 0.3)",
                          boxShadow: "0 10px 30px -10px rgba(175,148,97,0.15)",
                        }}
                        className="bg-[#121212] rounded-2xl p-6 border border-zinc-800/80 flex flex-col justify-between transition-colors duration-200"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h4 className="font-serif italic font-bold text-lg text-white leading-tight">
                              {item.name}
                            </h4>
                            {item.isPopular && (
                              <span className="inline-flex items-center gap-1 bg-gold/15 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full border border-gold/30 uppercase shrink-0">
                                <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                                <span>Popular</span>
                              </span>
                            )}
                          </div>
                          <p className="text-zinc-400 text-xs leading-relaxed mb-4 font-light">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-[11px] font-semibold text-gold uppercase tracking-wider pt-3 border-t border-zinc-900/80 flex items-center justify-between">
                          <span className="bg-gold/5 px-2 py-0.5 rounded border border-gold/10">{item.course}</span>
                          <span className="text-zinc-500 italic normal-case font-light">Strict Purity Guarantee</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="text-center py-12 bg-[#121212] rounded-2xl border border-dashed border-zinc-800">
                  <p className="text-zinc-500 text-sm font-medium">No dishes match your course or search query.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCourse("All");
                    }}
                    className="text-gold text-xs font-semibold underline mt-2 hover:text-gold/80 cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* No prices note */}
              <div className="p-6 bg-[#161615] text-[#fcfaf9] rounded-2xl border border-zinc-800 max-w-2xl mx-auto text-center shadow-2xl">
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Note: All of our food services are custom-designed around your unique guest counts, layouts, and menus. We do not support cookie-cutter pricing. We will formulate a comprehensive <span className="text-gold font-semibold">budget range</span> suited directly to your needs via WhatsApp.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
