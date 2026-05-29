import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
      data-testid="scroll-progress-bar"
    >
      <div className="w-full h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 shadow-[0_0_8px_rgba(168,95,57,0.8)]" />
    </motion.div>
  );
}
