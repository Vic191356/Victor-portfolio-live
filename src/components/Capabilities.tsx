import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "Premium UI Systems",
    desc: "Cohesive design systems built for scale, consistency, and breathtaking visual quality.",
    icon: "◈",
  },
  {
    title: "Immersive Web Experiences",
    desc: "Scroll-driven narratives and motion-rich interfaces that hold attention and inspire action.",
    icon: "◉",
  },
  {
    title: "Strategic Website Structure",
    desc: "Architecture that guides users through intentional journeys toward conversion.",
    icon: "◐",
  },
  {
    title: "Responsive Layout Design",
    desc: "Flawless across every device — desktop, tablet, and mobile without compromise.",
    icon: "⬡",
  },
  {
    title: "Conversion-Focused Pages",
    desc: "Every section, headline, and CTA placement is driven by psychology and results.",
    icon: "◇",
  },
  {
    title: "Motion Design Integration",
    desc: "Purposeful animation that makes interfaces feel alive, smooth, and premium.",
    icon: "◌",
  },
  {
    title: "Brand-Led Visual Direction",
    desc: "Deep visual identity alignment — the website becomes an extension of the brand.",
    icon: "◆",
  },
  {
    title: "Performance-Aware Design",
    desc: "Beautiful and blazing fast. Optimized for Core Web Vitals and real-world speed.",
    icon: "⬟",
  },
];

function CapabilityCard({
  cap,
  index,
}: {
  cap: (typeof capabilities)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-panel rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-default"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent rounded-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="absolute top-4 right-4 text-primary/0 group-hover:text-primary/30 text-3xl font-thin transition-all duration-500 select-none">
        {cap.icon}
      </div>

      <div className="relative z-10">
        <div className="text-2xl text-primary/60 mb-4 group-hover:text-primary transition-colors duration-300 select-none">
          {cap.icon}
        </div>
        <h3 className="text-base font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
          {cap.title}
        </h3>
        <p className="text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
          {cap.desc}
        </p>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_30px_rgba(168,95,57,0.06)]" />
    </motion.div>
  );
}

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What I Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Selected<br />
              <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-white/50 max-w-xs md:text-right text-sm leading-relaxed">
              A focused set of skills honed for premium outcomes — every capability serves a single purpose: making your brand unforgettable online.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
