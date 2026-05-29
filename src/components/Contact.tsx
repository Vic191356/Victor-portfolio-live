import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactItems = [
  {
    label: "Email",
    value: "olatidevictor@gmail.com",
    href: "mailto:olatidevictor@gmail.com",
    icon: "✉",
  },
  {
    label: "Instagram",
    value: "@victor_tide",
    href: "https://instagram.com/victor_tide",
    icon: "◎",
  },
  {
    label: "Fiverr",
    value: "fiverr.com/vic_0lat",
    href: "https://fiverr.com/vic_0lat",
    icon: "◈",
  },
  {
    label: "Phone (NG)",
    value: "+234 810 484 0265",
    href: "tel:+2348104840265",
    icon: "◉",
  },
  {
    label: "Phone (UK)",
    value: "+44 7988 508 998",
    href: "tel:+447988508998",
    icon: "◉",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/8 blur-[200px]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[8%] w-40 h-28 glass-panel rounded-2xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-[6%] w-32 h-32 glass-panel rounded-full border-primary/20"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Get In Touch</span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.0] mb-6">
            Let's Build Something<br />
            <span className="text-gradient">That Feels Alive.</span>
          </h2>

          <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Ready to create a website that feels premium, strategic, and unforgettable? Let's connect and bring your online presence to life.
          </p>

          <motion.a
            href={`https://wa.me/447988508998?text=${encodeURIComponent("Hello Victor👋\nMy name is __________ and I came across your portfolio website. I really love your work and I'll be needing your help with a website project. Looking forward to discussing it with you.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-lets-connect-contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-white font-semibold text-base shadow-[0_0_50px_rgba(168,95,57,0.35)] hover:shadow-[0_0_70px_rgba(168,95,57,0.6)] transition-all duration-300"
          >
            Let's Connect
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-panel rounded-3xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/35 font-semibold mb-8 text-center">
              Contact Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-testid={`link-contact-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="group flex flex-col gap-1.5 p-4 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-primary/60 group-hover:text-primary transition-colors text-sm">
                      {item.icon}
                    </span>
                    <span className="text-xs text-white/35 uppercase tracking-wider">{item.label}</span>
                  </div>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300 font-medium truncate">
                    {item.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
