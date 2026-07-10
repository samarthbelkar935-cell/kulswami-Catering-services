import { motion } from "motion/react";
import { MessageCircle, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact-section" className="py-24 px-4 md:px-8 bg-[#0d0d0c] text-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Contact Container with clean shadow */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#121212] border border-zinc-800/80 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gold" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                  Contact Channel
                </span>
                <p className="font-script text-gold text-3xl md:text-4xl mt-4 font-normal leading-none">Exclusively via WhatsApp</p>
                <h2 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mt-1 mb-4">
                  Let's Discuss Your <span className="text-gold italic font-medium">Event</span>
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  We are available exclusively on WhatsApp to help plan your customized menu, guest configuration, and catering logistics. Contact our team today!
                </p>
              </div>

              {/* Unique Location Reference */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Catering Service Area</h4>
                  <p className="text-zinc-300 text-sm font-light mt-0.5">
                    Aurangabad – [PIN CODE], Maharashtra, India
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">Strictly limited to Aurangabad city regions.</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Inquiry Timings</h4>
                  <p className="text-zinc-300 text-sm font-light mt-0.5">Available Daily: 9:00 AM – 9:00 PM</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Usually replies within minutes via WhatsApp chat.</p>
                </div>
              </div>

              {/* Guarantee */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Hygiene & Safety</h4>
                  <p className="text-zinc-300 text-sm font-light mt-0.5">FSSAI Standards Compliant</p>
                  <p className="text-xs text-zinc-500 mt-0.5">All staff fully trained under direct chef supervision.</p>
                </div>
              </div>
            </div>

            {/* Unique WhatsApp CTA Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#181817] text-white border border-zinc-800 rounded-2xl p-8 text-center space-y-6 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shadow-inner">
                <MessageCircle className="w-8 h-8 fill-current" />
              </div>
              
              <div className="space-y-1">
                <p className="text-[10px] text-gold uppercase font-bold tracking-widest">Chat Directly</p>
                <h4 className="font-serif italic font-bold text-lg text-amber-50">Direct WhatsApp Link</h4>
                <p className="text-xs text-zinc-400">Fast, convenient, and completely digital menu tailoring.</p>
              </div>

              <motion.a
                href="https://wa.me/919665492983"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md shadow-emerald-600/10 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Message +91 96654 92983</span>
              </motion.a>

              <span className="text-[9px] text-zinc-500 font-semibold tracking-wider uppercase">
                No other contact methods accepted
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
