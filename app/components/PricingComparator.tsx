"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PricingComparator() {
  const [aws, setAws] = useState("");
  const parsedAws = parseFloat(aws) || 0;

  const ogpuCost = parsedAws * 0.25;
  const savings = parsedAws - ogpuCost;
  const percentage = parsedAws > 0 ? Math.round((savings / parsedAws) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        text-white
        shadow-[0_0_28px_rgba(0,233,255,0.18)]
        p-6 md:p-7
        space-y-5
        max-w-3xl
        mx-auto
      "
    >
      {/* Header */}
      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          Compare your GPU costs instantly
        </h3>
        <p className="text-sm text-slate-300 tracking-tight">
          Enter your current bill to see OGPU cost and estimated savings.
        </p>
      </div>

      {/* Input */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-400 tracking-tight">
          Your monthly GPU spend
        </label>

        <input
          value={aws}
          onChange={(e) => setAws(e.target.value)}
          placeholder="$12,000"
          className="
            w-full 
            px-4 py-3 
            rounded-xl 
            bg-[#040814] 
            text-white
            text-sm
            border border-white/10
            placeholder-slate-500
            focus:outline-none
            focus:ring-2
            focus:ring-[#00E9FF]
          "
        />
      </div>

      {/* Results */}
      {parsedAws > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="
            rounded-2xl
            border border-white/10
            bg-white/10
            backdrop-blur-xl
            p-5
            space-y-4
            shadow-[0_0_20px_rgba(0,233,255,0.15)]
          "
        >
          {/* OGPU cost */}
          <div>
            <p className="uppercase text-[11px] font-semibold tracking-wide text-slate-400">
              Estimated OGPU cost
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white mt-1 tracking-tight">
              ${ogpuCost.toLocaleString()}
            </p>
          </div>

          {/* Savings */}
          <div>
            <p className="uppercase text-[11px] font-semibold tracking-wide text-slate-400">
              Estimated savings
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white mt-1 tracking-tight">
              ${savings.toLocaleString()}
            </p>
          </div>

          {/* Percentage pill */}
          <div className="pt-1">
            <span
              className="
                inline-flex 
                items-center 
                rounded-full 
                px-4 py-1.5 
                text-sm 
                font-semibold 
                bg-[#00E9FF]/15 
                text-[#00E9FF]
                tracking-tight
              "
            >
              Estimated savings: {percentage}%
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
