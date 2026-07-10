import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, CheckCircle, Calendar, Users, Send, MapPin, Sparkles } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    eventType: "Wedding",
    guests: "150",
    date: "",
    notes: "",
    consent: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const eventTypes = [
    "Wedding",
    "Engagement",
    "Pre-Wedding Ceremony",
    "Corporate Event",
    "Birthday Celebration",
    "Traditional Puja / Festival",
    "Family Gathering / Private Party"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Simple Validation
    if (!formData.name.trim()) {
      setValidationError("Please provide your full name.");
      return;
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 10) {
      setValidationError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.date) {
      setValidationError("Please select your event date.");
      return;
    }

    setIsSubmitted(true);

    // Generate Pre-filled WhatsApp Link for Seamless Dispatch
    const messageText = `*Kulswami Catering Quote Request*
---------------------------------------------
*Client Name:* ${formData.name}
*WhatsApp Phone:* ${formData.whatsapp}
*Event Category:* ${formData.eventType}
*Expected Guests:* ${formData.guests}
*Event Date:* ${formData.date}
*Event Location:* Aurangabad – [PIN CODE], Maharashtra, India
*Menu / Custom Notes:* ${formData.notes || "Standard curated menu options preferred."}
---------------------------------------------
Please provide us a personalized budget range based on our event requirements. Thank you!`;

    const whatsappUrl = `https://wa.me/919665492983?text=${encodeURIComponent(messageText)}`;

    // Auto open after a small delay to let user see success screen
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 2500);
  };

  const handleQuickWhatsAppInquiry = () => {
    const nameStr = formData.name.trim() ? formData.name : "Valued Guest";
    const dateStr = formData.date ? formData.date : "(Date to be specified)";
    const eventTypeStr = formData.eventType;
    const guestsStr = formData.guests;
    const notesStr = formData.notes.trim() ? formData.notes : "Standard curated menu options preferred.";

    const messageText = `*Kulswami Catering Quick Inquiry*
---------------------------------------------
*Client Name:* ${nameStr}
*Event Category:* ${eventTypeStr}
*Expected Guests:* ${guestsStr}
*Event Date:* ${dateStr}
*Event Location:* Aurangabad, Maharashtra, India
*Menu Notes:* ${notesStr}
---------------------------------------------
I would like to discuss my catering options directly with you. Please guide me!`;

    const whatsappUrl = `https://wa.me/919665492983?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="quote-section" className="py-24 px-4 md:px-8 bg-[#0a0a09] text-white overflow-hidden relative">
      {/* Decorative Blur Background Element */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Instant Inquiry
          </span>
          <p className="font-script text-gold text-3xl md:text-4xl mt-4 font-normal leading-none">We craft memories, not just menus</p>
          <h2 className="text-3xl md:text-5xl font-serif text-amber-50 font-bold tracking-tight mt-2 mb-6">
            Plan Your <span className="text-gold italic">Culinary Feast</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Submit your event details below to design a personalized menu. Based on your guest count and dish selection, we will formulate a customized <strong className="text-gold font-semibold">budget range</strong> and reach out to you directly via WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-zinc-900 border border-zinc-800/80 rounded-3xl p-6 md:p-12 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              /* FORM STATE */
              <motion.form
                key="quote-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Form Validation Errors */}
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-950/40 border border-red-500/30 rounded-xl text-red-400 text-xs font-semibold"
                  >
                    {validationError}
                  </motion.div>
                )}

                {/* Grid Inputs (Name & Phone) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Your Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kulkarni"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      WhatsApp Contact Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="e.g. 9665492983"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                </div>

                {/* Grid Inputs (Event Type & Guest Count) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold" />
                      <span>Event Category</span>
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    >
                      {eventTypes.map((type) => (
                        <option key={type} value={type} className="bg-zinc-905 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      <span>Expected Guests</span>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    >
                      <option value="50-100">50 to 100 guests</option>
                      <option value="100-250">100 to 250 guests</option>
                      <option value="250-500">250 to 500 guests</option>
                      <option value="500-1000">500 to 1000 guests</option>
                      <option value="1000+">1000+ guests (Grand Banquet)</option>
                    </select>
                  </div>
                </div>

                {/* Grid Inputs (Date & Location Notice) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>Event Date</span>
                    </label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>Service Location</span>
                    </label>
                    <input
                      disabled
                      type="text"
                      value="Aurangabad – [PIN CODE], Maharashtra, India"
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-xl px-4 py-3 text-sm cursor-not-allowed font-medium"
                    />
                  </div>
                </div>

                {/* Custom Notes / Menu Preference */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Menu Preferences & Special Instructions
                  </label>
                  <textarea
                    rows={4}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Describe your preferred dishes (e.g. traditional Maharashtrian pangat with Puran Poli, live South Indian appam counters, specific sweet priorities, etc.)."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold resize-none"
                  />
                </div>

                {/* Policy consent & WhatsApp promise info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      required
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 rounded accent-gold focus:ring-gold"
                    />
                    <label htmlFor="consent" className="text-xs text-zinc-400 leading-relaxed cursor-pointer select-none">
                      I understand that Kulswami Catering Services will generate a tailored <strong className="text-gold">budget range</strong> based on this custom inquiry and dispatch it directly via WhatsApp. No fixed prices or ₹ estimates are displayed here.
                    </label>
                  </div>
                </div>

                {/* Submit button & Quick Inquiry Button */}
                <div className="pt-4 border-t border-zinc-850 flex flex-col sm:flex-row items-center gap-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "tween", duration: 0.15 }}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-white font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-widest shadow-xl shadow-gold/5 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Request Quote</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleQuickWhatsAppInquiry}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "tween", duration: 0.15 }}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-widest shadow-xl shadow-emerald-900/10 transition-colors cursor-pointer border border-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Quick WhatsApp Inquiry</span>
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              /* SUCCESS CONFIRMATION STATE */
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="text-center py-12 md:py-16 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8 fill-current" />
                </div>
                
                <h3 className="font-serif font-bold text-2xl md:text-4xl text-amber-50">
                  Inquiry Successfully Compiled!
                </h3>
                
                <div className="max-w-md mx-auto space-y-4">
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your custom inquiry details for your upcoming <strong className="text-white">{formData.eventType}</strong> on <strong className="text-white">{formData.date}</strong> have been saved.
                  </p>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    Our team is currently calculating your personalized <strong className="text-gold font-semibold">budget range</strong> based on your selections. 
                  </p>
                  <p className="text-emerald-400 text-xs md:text-sm font-semibold flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Now redirecting you safely to WhatsApp to initiate the final quote conversation...</span>
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href={`https://wa.me/919665492983?text=${encodeURIComponent(
                      `*Kulswami Catering Quote Request* \n*Client Name:* ${formData.name}\n*Event:* ${formData.eventType}\n*Guests:* ${formData.guests}\n*Date:* ${formData.date}\n*Location:* Aurangabad – [PIN CODE], Maharashtra, India\nPlease provide us a custom budget range.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg"
                  >
                    <span>Click here if not redirected automatically</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
