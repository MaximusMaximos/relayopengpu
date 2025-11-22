"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PricingComparator() {
  const [aws, setAws] = useState("");
  const parsedAws = parseFloat(aws) || 0;

  const ogpuCost = parsedAws * 0.25;   // adjust your logic
  const savings = parsedAws - ogpuCost;
  const percentage = parsedAws > 0 ? Math.round((savings / parsedAws) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-3xl
        border border-[#00C8FF]/40
        bg-[#020617]
        text-white
        shadow-[0_0_40px_rgba(0,200,255,0.25)]
        p-8
        space-y-6
        max-w-3xl
        mx-auto
      "
    >
      {/* Header */}
      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Compare your cloud spend instantly
        </h3>
        <p className="text-sm text-slate-300">
          Enter your current GPU bill to see the real OGPU cost and savings.
        </p>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-400">
          Your monthly AWS / GCP GPU spend
        </label>

        <input
          value={aws}
          onChange={(e) => setAws(e.target.value)}
          placeholder="$12,000"
          className="
            w-full 
            px-4 py-3 
            rounded-xl 
            bg-[#0A0F2C] 
            text-white
            text-sm
            border border-slate-700
            placeholder-slate-500
            focus:outline-none
            focus:ring-2
            focus:ring-[#00C8FF]
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
            border border-[#00C8FF]/50
            bg-[#001123]
            p-6
            space-y-4
            shadow-[0_0_30px_rgba(0,200,255,0.18)]
          "
        >
          {/* OGPU cost */}
          <div>
            <p className="uppercase text-[11px] font-semibold tracking-wide text-slate-400">
              Estimated OGPU cost
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[#00C8FF] mt-1">
              ${ogpuCost.toLocaleString()}
            </p>
          </div>

          {/* Savings */}
          <div>
            <p className="uppercase text-[11px] font-semibold tracking-wide text-slate-400">
              Estimated savings
            </p>
            <p className="text-xl md:text-2xl font-semibold text-emerald-400 mt-1">
              ${savings.toLocaleString()}
            </p>
          </div>

          {/* Percentage pill */}
          <div className="pt-2">
            <span
              className="
                inline-flex 
                items-center 
                rounded-full 
                px-4 py-1.5 
                text-sm 
                font-semibold 
                bg-emerald-500/15 
                text-emerald-300
              "
            >
              Save approx {percentage}% with OGPU
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
