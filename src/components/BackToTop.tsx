import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="button-back-to-top"
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center border border-primary/30 bg-background/80 backdrop-blur-md text-primary shadow-[0_0_20px_rgba(168,95,57,0.25)] hover:shadow-[0_0_30px_rgba(168,95,57,0.5)] hover:border-primary/60 transition-shadow duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
