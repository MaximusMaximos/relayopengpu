"use client";

import { motion } from "framer-motion";

export default function ProviderPipeline() {
  const providers = [
    { label: "Data Centers", icon: "/Images/datacenter-icon.png" },
    { label: "Clouds", icon: "/Images/cloud.png" },
    { label: "GPU Farms", icon: "/Images/GPU_Mining_Frame.png" },
    { label: "Home Computers", icon: "/Images/laptop.png" },
    { label: "Enterprises", icon: "/Images/enterprise.png" },
    { label: "Research Labs", icon: "/Images/research.png" }
  ];

  return (
    <div className="w-full bg-[#030711] rounded-3xl border border-cyan-500/20 px-6 md:px-10 py-12 shadow-[0_0_40px_rgba(0,200,255,0.08)]">

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.18em] text-cyan-400 uppercase">
          Providers
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-white">
          Anyone can power OGPU
        </h2>

        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mt-3">
          All provider types route workloads automatically through the global routing layer.
        </p>
      </div>

      {/* Horizontal Pipeline */}
      <div className="relative w-full flex flex-col items-center">

        {/* Moving Pulse Line */}
        <div className="relative w-full h-1 bg-cyan-500/30 rounded-full overflow-hidden mb-10">
          <motion.div
            className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{ x: ["-10%", "1200%"] }}
            transition={{
              repeat: Infinity,
              duration: 10.0,
              ease: "linear"
            }}
          />
        </div>

        {/* Provider Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full text-center">

          {providers.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 p-2 rounded-xl bg-[#0b1220] border border-cyan-500/30 
                              shadow-[0_0_20px_rgba(0,200,255,0.12)] flex items-center justify-center">
                <img src={p.icon} alt={p.label} className="w-8 h-8 object-contain" />
              </div>
              <p className="text-xs text-white/80">{p.label}</p>
            </div>
          ))}

        </div>

        {/* OGPU Core */}
        <div className="mt-12 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 
                          shadow-[0_0_40px_rgba(0,200,255,0.8)] flex items-center justify-center text-white text-sm font-semibold">
            OGPU
          </div>
          <p className="text-slate-400 text-xs mt-3">
            Unified global routing layer
          </p>
        </div>
      </div>
    </div>
  );
}
