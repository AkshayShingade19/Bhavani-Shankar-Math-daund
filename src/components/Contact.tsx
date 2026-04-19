import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-5/12 space-y-12">
            <div className="space-y-4">
              <h2 className="text-saffron font-bold uppercase tracking-widest text-sm">Get in Touch</h2>
              <h3 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900">Reach Out to Us</h3>
              <p className="text-gray-500 leading-relaxed italic">
                We are always available for devotees. Whether you want to know about special pujas or contribute to the math, feel free to contact us.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center shrink-0 group-hover:bg-saffron transition-colors text-saffron group-hover:text-white">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600 italic">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center shrink-0 group-hover:bg-saffron transition-colors text-saffron group-hover:text-white">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 font-bold group-hover:text-saffron transition-colors">+{CONTACT_INFO.phone}</p>
                  <p className="text-sm text-gray-400">Monday - Sunday: 5 AM - 9:30 PM</p>
                </div>
              </a>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center shrink-0 group-hover:bg-saffron transition-colors text-saffron group-hover:text-white">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 italic">info@bhavanishankarmath.org</p>
                </div>
              </div>
            </div>

            {/* Google Map Mini */}
            <div className="rounded-3xl overflow-hidden border-8 border-cream shadow-2xl h-64">
              <iframe
                src={CONTACT_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-cream/50 p-8 sm:p-12 rounded-[40px] border border-gold/10 shadow-xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-saffron focus:ring-4 focus:ring-saffron/5 outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-4">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Your Phone Number" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-saffron focus:ring-4 focus:ring-saffron/5 outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-saffron focus:ring-4 focus:ring-saffron/5 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-4">Your Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="How can we help you?" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-saffron focus:ring-4 focus:ring-saffron/5 outline-none transition-all placeholder:text-gray-300 resize-none"
                  />
                </div>
                <button className="w-full flex items-center justify-center gap-3 bg-saffron text-white py-5 rounded-3xl font-bold text-lg hover:bg-saffron-dark transition-all transform hover:scale-[1.02] shadow-xl shadow-saffron/20 group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
