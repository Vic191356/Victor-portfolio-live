import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Victor brings a rare mix of creativity, clarity, and professionalism.",
    author: "Sarah M.",
    role: "Brand Strategist",
    initials: "SM",
  },
  {
    quote: "The website experience felt premium from the first screen. Our clients noticed immediately.",
    author: "James K.",
    role: "Luxury Consultant",
    initials: "JK",
  },
  {
    quote: "He understands how to turn a brand into a digital experience. Not just a website.",
    author: "Amara O.",
    role: "Service Brand Owner",
    initials: "AO",
  },
  {
    quote: "Working with Victor felt like having a partner who truly cared about the outcome. Exceptional.",
    author: "Thomas R.",
    role: "Business Coach",
    initials: "TR",
  },
];

const floatVariants = [
  { y: [0, -18, 0], rotate: [0, 1.5, 0], duration: 7 },
  { y: [0, 22, 0], rotate: [0, -2, 0], duration: 9 },
  { y: [0, -14, 0], rotate: [0, 1, 0], duration: 6 },
  { y: [0, 18, 0], rotate: [0, -1.5, 0], duration: 8 },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const fv = floatVariants[index % floatVariants.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: fv.y, rotate: fv.rotate }}
        transition={{
          duration: fv.duration,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
        className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        <div className="relative z-10">
          <div className="text-primary text-4xl font-serif leading-none mb-4 opacity-60">"</div>
          <p className="text-white/75 leading-relaxed text-sm md:text-base mb-6 italic">
            {t.quote}
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary text-xs font-bold">{t.initials}</span>
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{t.author}</div>
              <div className="text-white/40 text-xs">{t.role}</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />

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
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Testimonials</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            What clients <span className="text-gradient">say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
