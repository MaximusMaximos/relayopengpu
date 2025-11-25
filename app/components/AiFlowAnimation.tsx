"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AiFlowAnimation() {
  const [step, setStep] = useState(0);

  // Step cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 1100); // Smooth enterprise timing
    return () => clearInterval(interval);
  }, []);

  // Node labels (Option A)
  const nodes = ["Input", "Preprocessing", "Model", "Output"];

  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center gap-6 md:gap-10 relative">

        {/* LINE CONNECTING NODES */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-slate-200 rounded-full -z-10" />

        {/* MOVING DATA PULSE */}
        <motion.div
          className="absolute top-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,200,255,0.6)]"
          animate={{
            x: [
              "0%",
              "33%",
              "66%",
              "100%"
            ],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* NODES */}
        {nodes.map((label, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center"
            animate={{
              y: step === i ? -3 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Node box */}
            <motion.div
              className="px-5 py-3 rounded-lg border border-slate-300 bg-white shadow-sm text-sm font-medium text-slate-700"
              animate={{
                boxShadow:
                  step === i
                    ? "0 0 14px rgba(0,200,255,0.18)"
                    : "0 0 0 rgba(0,0,0,0)",
                scale: step === i ? 1.04 : 1,
              }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {label}
            </motion.div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
