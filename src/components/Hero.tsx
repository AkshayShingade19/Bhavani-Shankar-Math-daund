import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { TEMPLE_NAME } from "../constants";
import HeroMainImage from "./images/HeroMainImage";
import HeroBackgroundImage from "./images/HeroBackgroundImage";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#050505] flex items-center">
      {/* Background Lighting Effect */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Optional: Full background image if needed */}
      {/* <HeroBackgroundImage className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-left"
          >
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-sans font-black text-white leading-[0.9] uppercase tracking-tighter">
                {TEMPLE_NAME.split(' ')[0]} <br />
                <span className="text-saffron">
                  {TEMPLE_NAME.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <h2 className="text-4xl sm:text-5xl font-sans font-black text-white leading-none uppercase tracking-tighter">
                Gopalwadi Daund
              </h2>
            </div>

            <p className="mt-8 max-w-md text-base sm:text-lg text-gray-400 font-mono leading-relaxed">
              A sacred place of devotion and deep spiritual peace. Our mission is to preserve the ancient Vedic traditions for the modern seeker.
            </p>

            <div className="mt-12 relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="w-32 h-32"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white/20">
                  <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[9px] uppercase font-mono font-bold tracking-[0.2em] fill-white/40">
                    <textPath href="#textPath">
                      • VISIT THE TEMPLE • EXPLORE DIVINITY • VISIT THE TEMPLE • 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <a 
                href="#darshan" 
                className="absolute inset-0 flex items-center justify-center text-white hover:text-saffron transition-colors"
                title="Enter Temple"
              >
                <ArrowRight size={32} />
              </a>
            </div>
          </motion.div>

          {/* Right Image (The Koala-style circle) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]">
              {/* The Circle Background */}
              <div className="absolute inset-0 rounded-full bg-saffron" />
              
              {/* The Image inside/overlapping the circle */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-[#050505]">
                <HeroMainImage className="w-full h-full object-cover transition-all duration-700" />
              </div>
              
              {/* Floating Accent (Like the leaf in the Koala image) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-10 -right-5 w-32 h-32 bg-gold/20 backdrop-blur-3xl rounded-full border border-gold/30 flex items-center justify-center p-4"
              >
                <span className="text-gold font-serif text-5xl">ॐ नमः शिवाय</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
