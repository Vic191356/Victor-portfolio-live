import { motion } from "framer-motion";

export default function FloatingUIElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">
      {/* Element 1 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-[10%] w-48 h-32 glass-panel rounded-2xl p-4 flex flex-col gap-3 opacity-60"
      >
        <div className="w-full h-2 bg-white/10 rounded-full" />
        <div className="w-3/4 h-2 bg-white/10 rounded-full" />
        <div className="mt-auto flex justify-between items-center">
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30" />
          <div className="w-16 h-4 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      {/* Element 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 left-[5%] w-40 h-40 glass-panel rounded-full border-primary/20 flex items-center justify-center opacity-40"
      >
        <div className="w-20 h-20 rounded-full border border-primary/40 animate-[spin_10s_linear_infinite] border-t-transparent" />
      </motion.div>
      
      {/* Element 3 */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-[15%] w-32 h-12 glass-panel rounded-full flex items-center justify-center gap-2 opacity-50"
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs text-white/50">SYSTEM ACTIVE</span>
      </motion.div>
    </div>
  );
}
