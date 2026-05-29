import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative border-t border-white/5 py-12 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div
              className="text-2xl font-bold tracking-tighter text-white mb-1 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              VICTOR<span className="text-primary">.</span>
            </div>
            <p className="text-white/35 text-xs">
              Designing digital experiences that feel alive.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-white/30">
            {["about", "capabilities", "services", "process", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="capitalize hover:text-white/70 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="text-xs text-white/25 text-center md:text-right">
            <p>© {new Date().getFullYear()} Victor. All rights reserved.</p>
            <p className="mt-1 text-white/15">Premium Website Designer</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
