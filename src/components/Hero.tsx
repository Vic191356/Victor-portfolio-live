import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingUIElements from "./FloatingUIElements";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "150px" }} />
      </div>

      <FloatingUIElements />

      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 lg:py-0"
      >
        <div className="flex flex-col items-start text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-white/70 uppercase tracking-wider font-medium">Available for new projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Designing Websites That <span className="text-gradient">Feel Alive.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
          >
            Hi, I'm Victor — a website designer crafting immersive, strategic, and premium digital experiences for service brands ready to stand out online.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button 
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(168,95,57,0.3)] hover:shadow-[0_0_40px_rgba(168,95,57,0.6)] hover:scale-105"
            >
              Let's Connect
            </button>
            <button 
              onClick={() => scrollTo("about")}
              className="text-white/70 hover:text-white font-medium flex items-center gap-2 transition-colors group"
            >
              Explore My Approach
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[430px] lg:w-[400px] lg:h-[500px]">
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />

            {/* Outer decorative rings */}
            <div className="absolute -inset-4 border border-white/10 rounded-3xl transform -rotate-6 pointer-events-none" />
            <div className="absolute -inset-8 border border-primary/20 rounded-3xl transform rotate-12 pointer-events-none" />

            {/* Floating accent dots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-primary/60 blur-[2px] pointer-events-none"
            />
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-primary/40 blur-[2px] pointer-events-none"
            />

            {/* Portrait container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass-panel border-white/20 p-2 transform rotate-3 hover:rotate-0 transition-all duration-700">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative group">
                <img
                  src="/victor-portrait.png"
                  alt="Victor"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Name tag overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-panel rounded-xl px-3 py-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-white/80 font-medium tracking-wide">Victor · Website Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
