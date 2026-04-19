import { motion } from "motion/react";
import { EVENTS } from "../constants";

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative lotus background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor" className="text-saffron">
          <path d="M50 0C50 0 40 20 40 40C40 60 50 100 50 100C50 100 60 60 60 40C60 20 50 0 50 0Z" />
          <path d="M50 0C50 0 40 20 40 40C40 60 50 100 50 100C50 100 60 60 60 40C60 20 50 0 50 0Z" transform="rotate(45 50 50)" />
          <path d="M50 0C50 0 40 20 40 40C40 60 50 100 50 100C50 100 60 60 60 40C60 20 50 0 50 0Z" transform="rotate(90 50 50)" />
          <path d="M50 0C50 0 40 20 40 40C40 60 50 100 50 100C50 100 60 60 60 40C60 20 50 0 50 0Z" transform="rotate(135 50 50)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-saffron font-bold uppercase tracking-widest text-sm">Festivals</h2>
          <h3 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900">Annual Events</h3>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Participate in our vibrant celebrations throughout the year as we honor the traditions and legends of our faith.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group p-10 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-saffron transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="mb-6 px-4 py-2 rounded-full bg-cream text-saffron-dark font-bold text-xs uppercase tracking-widest border border-gold/10">
                {event.date}
              </div>
              
              <h4 className="text-3xl font-serif font-bold text-gray-900 mb-4">{event.name}</h4>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow italic">
                {event.description}
              </p>

              <button className="w-full py-4 rounded-2xl bg-gray-50 text-gray-900 font-bold hover:bg-saffron hover:text-white transition-all transform group-hover:scale-[1.02] border border-gray-100 group-hover:border-saffron">
                Event Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
