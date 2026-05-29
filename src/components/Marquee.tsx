import { motion } from "framer-motion";

const phrases = [
  "PREMIUM DIGITAL EXPERIENCES",
  "IMMERSIVE WEB DESIGN",
  "UI/UX FOCUSED",
  "MODERN WEBSITE DESIGNER",
  "DESIGNING EXPERIENCES THAT FEEL ALIVE",
  "BUILT FOR PREMIUM SERVICE BRANDS",
];

export default function Marquee() {
  const text = phrases.join("   ·   ") + "   ·   ";

  return (
    <div className="py-6 border-y border-white/5 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-xs font-semibold tracking-[0.25em] text-white/25 uppercase mr-0 inline-block">
            {text}&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}
