import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    year: "2023",
    title: "The Beginning",
    desc: "Started with digital design and creative layouts — exploring visual storytelling, typography, and the art of making things beautiful on screen.",
    tag: "Origin",
  },
  {
    year: "2024",
    title: "Deeper into the Web",
    desc: "Expanded into website design and user experience — learning how to translate brand identities into digital environments that people actually enjoy navigating.",
    tag: "Evolution",
  },
  {
    year: "2025",
    title: "Premium Focus",
    desc: "Narrowed focus to premium service brands — developing a methodology around strategic design, strong visual hierarchy, and conversion-driven layouts.",
    tag: "Specialization",
  },
  {
    year: "Now",
    title: "Immersive Experiences",
    desc: "Building immersive web experiences that blend strategy, design, and motion — creating digital presences that genuinely feel alive and leave lasting impressions.",
    tag: "Current",
  },
];

function TimelineItem({
  event,
  index,
  total,
}: {
  event: (typeof events)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-8 group"
    >
      <div className="flex flex-col items-center shrink-0 w-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: "backOut" }}
          className="relative"
        >
          <div className="w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-all duration-500 shadow-[0_0_0_0_rgba(168,95,57,0.4)] group-hover:shadow-[0_0_20px_rgba(168,95,57,0.6)]" />
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: index * 0.15 + 0.4, ease: "easeOut" }}
            className="w-px flex-1 mt-3 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
          />
        )}
      </div>

      <div className={`pb-14 ${isLast ? "pb-0" : ""} flex-1`}>
        <div className="glass-panel rounded-2xl p-6 md:p-8 group-hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl font-bold text-primary tabular-nums">{event.year}</span>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs px-2.5 py-1 rounded-full border border-primary/20 text-primary/70 font-medium">
                {event.tag}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{event.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{event.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[600px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Journey</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Creative <span className="text-gradient">Evolution</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-md mx-auto text-sm">
            From first pixels to premium digital experiences — a journey built on curiosity, craft, and continuous growth.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {events.map((event, i) => (
            <TimelineItem key={event.year} event={event} index={i} total={events.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
