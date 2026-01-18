"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SystemStatus() {
  return (
    <motion.div
      className="absolute top-6 right-6 hidden lg:block text-right z-20"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      aria-hidden="true"
    >
      <div className="text-xs font-mono text-cyan-400/70 tracking-widest flex items-center justify-end gap-2">
        <motion.span
          className="inline-block w-2 h-2 bg-cyan-400 rounded-full"
          animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>
          SYSTEM STATUS: <span className="text-cyan-400">ONLINE</span>
        </span>
      </div>

      <div className="text-xs font-mono text-white/40 mt-1">
        NODES ACTIVE: <span className="text-white/60">GLOBAL</span>
      </div>
    </motion.div>
  );
}
