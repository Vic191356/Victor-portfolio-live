import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { label: "Clarity", desc: "Clean structure that guides visitors effortlessly" },
  { label: "Performance", desc: "Fast, smooth, and technically sound at every level" },
  { label: "Conversion", desc: "Every design decision serves a business goal" },
  { label: "Modern UI/UX", desc: "Intuitive, delightful interactions by design" },
  { label: "First Impressions", desc: "Instant trust and credibility from the first pixel" },
  { label: "Digital Presence", desc: "Premium positioning that elevates your brand online" },
];

function PillarCard({ label, desc, index }: { label: string; desc: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-panel rounded-2xl p-5 hover:border-primary/40 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:shadow-[0_0_8px_rgba(168,95,57,0.8)] transition-shadow duration-300" />
          <span className="text-sm font-semibold text-white/90 tracking-wide">{label}</span>
        </div>
        <p className="text-xs text-white/45 leading-relaxed pl-4">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-8">
                Design that works as hard as it{" "}
                <span className="text-gradient">looks.</span>
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p className="text-lg">
                  Hi, I'm Victor — a passionate and experienced website designer dedicated to helping local businesses and premium service brands show up powerfully online.
                </p>
                <p>
                  I design websites that don't just look beautiful, but work strategically to attract the right audience, build trust, and convert visitors into customers. Every project is an opportunity to craft something that truly represents a brand at its best.
                </p>
                <p>
                  My approach blends creative vision with strategic thinking — making sure every pixel earns its place and every interaction moves visitors closer to saying yes.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                  <img src="/victor-portrait.png" alt="Victor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Victor</div>
                  <div className="text-white/45 text-xs">Premium Website Designer</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">Built around</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <PillarCard key={p.label} label={p.label} desc={p.desc} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
