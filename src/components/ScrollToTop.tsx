"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "./Icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed right-6 bottom-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-secondary)] shadow-lg transition-colors hover:border-accent/30 hover:text-accent"
        >
          <ArrowUpIcon className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
