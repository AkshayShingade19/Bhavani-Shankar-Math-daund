import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { DARSHAN_TIMINGS } from "../constants";

export default function Timings() {
  return (
    <section id="darshan" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-saffron p-12 text-white flex flex-col justify-center">
            <Clock size={48} className="mb-6 opacity-30" />
            <h3 className="text-4xl font-serif font-bold mb-6">Darshan & Aarti Timings</h3>
            <p className="text-white/80 leading-relaxed mb-8 italic">
              "Experience the divine aura during our sacred hours of worship. We welcome all devotees to participate in the daily rituals."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm font-medium">Daily Rituals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm font-medium">Spiritual Discourse</span>
              </div>
            </div>
          </div>

          {/* Table Side */}
          <div className="lg:w-2/3 p-8 sm:p-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 italic">
                    <th className="text-left py-4 text-gray-400 font-medium text-sm uppercase tracking-widest">Activity</th>
                    <th className="text-right py-4 text-gray-400 font-medium text-sm uppercase tracking-widest">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {DARSHAN_TIMINGS.map((item, index) => (
                    <motion.tr
                      key={item.activity}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group hover:bg-cream/20 transition-colors"
                    >
                      <td className="py-6 font-serif text-xl font-bold text-gray-800">{item.activity}</td>
                      <td className="py-6 text-right">
                        <span className="inline-block px-4 py-1 rounded-full bg-saffron/10 text-saffron font-bold text-sm">
                          {item.time}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
