import { motion } from "motion/react";
import AboutMainImage from "./images/AboutMainImage";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <AboutMainImage className="w-full aspect-[4/5] object-cover" />
            </div>
            {/* Background frame */}
            <div className="absolute -top-6 -left-6 bottom-6 right-6 border-2 border-saffron/20 rounded-2xl -z-0" />
            <div className="absolute top-6 left-6 -bottom-6 -right-6 bg-gold/10 rounded-2xl -z-0" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-saffron font-bold uppercase tracking-widest text-sm">Divine Heritage</h2>
              <h3 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Welcome to Bhavani Shankar Math
              </h3>
              <div className="w-20 h-1 bg-saffron rounded-full" />
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg italic">
              <p>
                Nestled in the peaceful outskirts of Daund at Gopalwadi, Bhavani Shankar Math stands as a beacon of spiritual solace and divine grace. Established with the vision of preserving Vedic traditions and fostering deep devotion, the math is a second home to seekers of peace.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <h4 className="font-serif text-2xl font-bold text-saffron-dark underline decoration-gold/30 underline-offset-8">Bhavani Mata</h4>
                  <p className="text-base not-italic text-gray-600">
                    The embodiment of Shakti, our Bhavani Mata blesses her children with courage and protection. Her presence fills the math with maternal warmth.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-serif text-2xl font-bold text-saffron-dark underline decoration-gold/30 underline-offset-8">Lord Shankar</h4>
                  <p className="text-base not-italic text-gray-600">
                    The supreme yogi, Lord Shankar (Shiva) represents the ultimate silence and destructive power of ego, guiding devotees towards inner liberation.
                  </p>
                </div>
              </div>

              <p className="border-l-4 border-gold pl-6 py-2 bg-white/50 rounded-r-lg">
                "Spiritual growth is not a destination, but a continuous journey of the soul towards the infinite light of the divine."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
