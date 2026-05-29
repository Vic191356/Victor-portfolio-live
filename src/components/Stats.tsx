import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 3, suffix: "+", label: "Years of Experience", sub: "Dedicated to craft" },
  { value: 30, suffix: "+", label: "Digital Projects", sub: "Delivered with care" },
  { value: 100, suffix: "%", label: "Detail-Focused", sub: "Every pixel matters" },
  { value: 0, suffix: "", label: "Compromise on Quality", sub: "Non-negotiable standard", prefix: "Zero" },
];

function CountUp({ to, suffix, prefix }: { to: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, to, count]);

  if (prefix) {
    return <span ref={ref} className="tabular-nums">{prefix}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative glass-panel rounded-2xl p-8 md:p-10 flex flex-col items-start group hover:border-primary/30 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500">
        <CountUp to={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
      </div>
      <div className="relative z-10 text-base font-semibold text-white/80 mb-1">{stat.label}</div>
      <div className="relative z-10 text-xs text-white/35">{stat.sub}</div>

      <div className="absolute bottom-4 right-4 text-primary/10 group-hover:text-primary/20 text-5xl font-bold select-none transition-colors duration-500">
        {stat.suffix || "∞"}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">By the Numbers</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Numbers that speak <span className="text-gradient">for themselves</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
