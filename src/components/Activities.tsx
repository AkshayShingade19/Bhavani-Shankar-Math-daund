import { motion } from "motion/react";
import { Sun, Flame, Calendar, Users } from "lucide-react";
import { ACTIVITIES } from "../constants";

const ICON_MAP = {
  Sun: Sun,
  Flame: Flame,
  Calendar: Calendar,
  Users: Users,
};

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-saffron font-bold uppercase tracking-widest text-sm">Divine Service</h2>
          <h3 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900">Temple Activities</h3>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACTIVITIES.map((activity, index) => {
            const Icon = ICON_MAP[activity.icon as keyof typeof ICON_MAP];
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 bg-cream/30 hover:bg-cream rounded-3xl border border-gold/10 hover:border-gold/30 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-gold/20 transition-all">
                  <Icon className="text-saffron group-hover:text-saffron-dark transition-colors" size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-gray-900 mb-4">{activity.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
