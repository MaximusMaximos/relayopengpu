"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingComparator() {
  const [aws, setAws] = useState("");
  
  const parsedAws = parseFloat(aws.replace(/[^0-9.]/g, "")) || 0;

  const ogpuCost = parsedAws * 0.25;
  const savings = parsedAws - ogpuCost;
  const percentage = parsedAws > 0 ? Math.round((savings / parsedAws) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        w-full
        max-w-[1000px]
        mx-auto
        bg-white
        rounded-[40px]
        border border-gray-100
        shadow-[0_20px_50px_rgba(0,0,0,0.05)]
        p-8 md:p-12
        text-left
      "
    >
      {/* Header Area - Font size set to ensure one-line display */}
      <div className="mb-10">
        <h3 className="text-2xl md:text-[32px] font-bold tracking-tight mb-2 whitespace-nowrap">
          <span className="bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] bg-clip-text text-transparent">
            Compare your cloud spend instantly
          </span>
        </h3>
        <p className="text-[#64748b] text-base md:text-lg font-normal tracking-tight">
          Enter your current GPU bill to see the real OpenGPU cost and savings.
        </p>
      </div>

      {/* Input Field Area */}
      <div className="space-y-3">
        <label className="text-[14px] font-medium text-[#334155] tracking-tight block ml-1">
          Your monthly AWS / GCP GPU spend
        </label>
        <div className="relative max-w-2xl">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94a3b8] text-lg">$</span>
          <input
            type="text"
            value={aws}
            onChange={(e) => setAws(e.target.value)}
            placeholder="12,000"
            className="
              w-full 
              pl-10 pr-6 py-3.5 
              rounded-xl 
              bg-white
              text-[#64748b]
              text-lg
              border border-[#e2e8f0]
              placeholder-[#cbd5e1]
              focus:outline-none
              focus:ring-2
              focus:ring-[#0A84FF]/10
              focus:border-[#0A84FF]
              transition-all
            "
          />
        </div>
      </div>

      {/* Results Section */}
      <AnimatePresence>
        {parsedAws > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-8 mt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest">
                  Estimated OGPU Cost
                </p>
                <p className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] bg-clip-text text-transparent">
                  ${Math.round(ogpuCost).toLocaleString()}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest">
                  Monthly Savings
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-4xl font-bold tracking-tighter text-[#0f172a]">
                    ${Math.round(savings).toLocaleString()}
                  </p>
                  <span className="text-base font-bold text-[#10b981]">
                    -{percentage}%
                  </span>
                </div>
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full mt-10 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] text-white text-base font-bold rounded-xl shadow-lg shadow-blue-500/10 hover:brightness-105 transition-all"
            >
              Start Saving with OpenGPU
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}