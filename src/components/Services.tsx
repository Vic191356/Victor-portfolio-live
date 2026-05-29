import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Website Design & Redesign",
    desc: "From blank canvas to breathtaking digital presence. Full custom website design that reflects your brand's premium identity.",
  },
  {
    num: "02",
    title: "Premium Business Websites",
    desc: "High-end websites built specifically for service businesses that need to attract serious clients and command premium prices.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Intuitive user experiences that feel effortless. Wireframes, prototypes, and polished high-fidelity designs that convert.",
  },
  {
    num: "04",
    title: "Landing Pages",
    desc: "High-conversion landing pages engineered to turn visitors into leads and leads into clients — every element earns its place.",
  },
  {
    num: "05",
    title: "Mobile Responsive Design",
    desc: "Flawless across every screen. Mobile-first thinking that never compromises on beauty or usability.",
  },
  {
    num: "06",
    title: "Website Optimization",
    desc: "Speed, performance, and Core Web Vitals optimization that keeps your audience engaged and search engines happy.",
  },
  {
    num: "07",
    title: "Creative Direction",
    desc: "Strategic visual direction that aligns your brand identity, messaging, and design into one cohesive and powerful presence.",
  },
];

function ServiceCard({ s, index }: { s: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-b border-white/5 hover:border-primary/20 py-8 px-2 flex gap-8 items-start cursor-default transition-all duration-400 overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/3 transition-all duration-500" />
      <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-0.5 bg-primary transition-all duration-500" />

      <div className="relative z-10 shrink-0">
        <span className="text-xs font-mono text-primary/50 group-hover:text-primary transition-colors duration-300">
          {s.num}
        </span>
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors duration-300">
          {s.title}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300 max-w-xl">
          {s.desc}
        </p>
      </div>

      <div className="relative z-10 shrink-0 hidden md:block">
        <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-primary/40 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(168,95,57,0.3)]">
          <span className="text-white/30 group-hover:text-primary text-xs transition-colors duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            What I <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="border-t border-white/5">
          {services.map((s, i) => (
            <ServiceCard key={s.num} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
