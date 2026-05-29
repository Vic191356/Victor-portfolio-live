import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["About", "Capabilities", "Services", "Process", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 400 : 0);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? "py-4 glass-panel" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div
            className="text-xl font-bold tracking-tighter text-white cursor-pointer z-10"
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            VICTOR<span className="text-primary">.</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            {navLinks.map((item) => (
              <button
                key={item}
                data-testid={`nav-link-${item.toLowerCase()}`}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            data-testid="button-lets-connect-nav"
            onClick={() => scrollTo("contact")}
            className="hidden md:block px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,95,57,0.2)] hover:shadow-[0_0_25px_rgba(168,95,57,0.5)] font-medium text-sm"
          >
            Let's Connect
          </button>

          <button
            data-testid="button-hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden relative z-10 w-9 h-9 flex flex-col justify-center items-center gap-[5px] group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[80vw] max-w-xs md:hidden flex flex-col"
              style={{ background: "rgba(10,10,10,0.97)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none" />
              <div className="absolute top-1/3 right-0 w-[200px] h-[200px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex flex-col justify-center flex-1 px-10 py-24 relative z-10">
                <p className="text-xs uppercase tracking-[0.2em] text-white/25 font-semibold mb-8">Navigation</p>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((item, i) => (
                    <motion.button
                      key={item}
                      data-testid={`mobile-nav-link-${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => scrollTo(item.toLowerCase())}
                      className="group flex items-center justify-between py-4 border-b border-white/5 text-left"
                    >
                      <span className="text-2xl font-bold tracking-tight text-white/70 group-hover:text-white transition-colors duration-200">
                        {item}
                      </span>
                      <span className="text-primary/0 group-hover:text-primary transition-colors duration-200 text-sm">→</span>
                    </motion.button>
                  ))}
                </nav>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: navLinks.length * 0.06 + 0.1 }}
                  data-testid="button-lets-connect-mobile"
                  onClick={() => scrollTo("contact")}
                  className="mt-10 w-full py-4 rounded-full bg-primary text-white font-semibold text-sm shadow-[0_0_30px_rgba(168,95,57,0.35)] hover:shadow-[0_0_50px_rgba(168,95,57,0.55)] transition-all duration-300 hover:bg-primary/90"
                >
                  Let's Connect
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-white/5"
                >
                  <p className="text-xs text-white/20">olatidevictor@gmail.com</p>
                  <p className="text-xs text-white/20 mt-1">@victor_tide</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
