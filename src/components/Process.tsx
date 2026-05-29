import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start by diving deep into your brand, goals, audience, and competitive landscape. I ask the right questions to understand not just what you want — but why. This phase sets the strategic foundation for everything that follows.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "With clarity established, we map out the website's structure, messaging hierarchy, and conversion goals. Every decision has a purpose — nothing is added without intention.",
  },
  {
    num: "03",
    title: "Design Direction",
    desc: "I develop the visual identity and design language — the color palette, typography, mood, and aesthetic that will make your website feel unmistakably premium and uniquely yours.",
  },
  {
    num: "04",
    title: "Experience Design",
    desc: "This is where the magic happens. I craft each page, section, and interaction — balancing beauty with function, motion with clarity, and emotion with conversion.",
  },
  {
    num: "05",
    title: "Development",
    desc: "The design comes to life with clean, performant code. Animations are fine-tuned, responsiveness is verified across all devices, and every detail is polished to perfection.",
  },
  {
    num: "06",
    title: "Optimization",
    desc: "Before launch, we optimize for speed, SEO, and accessibility. Post-launch, I continue refining based on real user behavior to ensure the website keeps delivering results.",
  },
];

function StepItem({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLast = index === steps.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6 md:gap-10 group"
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center relative group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(168,95,57,0.4)] transition-all duration-500">
          <div className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_8px_rgba(168,95,57,1)] transition-shadow duration-300" />
        </div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-primary/40 to-transparent flex-1 mt-2"
          />
        )}
      </div>

      <div className={`pb-12 ${isLast ? "pb-0" : ""} flex-1`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-primary/60">{step.num}</span>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
            {step.title}
          </h3>
        </div>
        <p className="text-white/50 leading-relaxed text-sm md:text-base max-w-xl group-hover:text-white/65 transition-colors duration-300">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              How We Build<br />
              <span className="text-gradient">Together</span>
            </h2>
            <p className="text-white/50 leading-relaxed max-w-sm">
              A thoughtful, collaborative process that ensures every project is delivered with precision, creativity, and strategic purpose.
            </p>
          </motion.div>

          <div className="mt-4">
            {steps.map((step, i) => (
              <StepItem key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
