"use client";

import { motion } from "framer-motion";

// CONSTANTS
const RADIUS = 170;
const ANIMATION_DURATION = 25; // seconds per full rotation

export default function ProviderAnimation() {
  const providers = [
    { label: "Data Centers", icon: "🏢" },
    { label: "Cloud Providers", icon: "☁️" },
    { label: "GPU Farms", icon: "🖥️" },
    { label: "Home Labs", icon: "💻" },
    { label: "Edge Devices", icon: "📦" },
    { label: "Research Labs", icon: "🎓" },
    { label: "Enterprise Clusters", icon: "🏬" },
  ];

  return (
    <div className="w-full bg-[#030711] text-white rounded-3xl border border-cyan-500/20 px-6 md:px-10 py-16 shadow-[0_0_40px_rgba(0,200,255,0.08)]">

      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.18em] text-cyan-400 uppercase">
          Providers
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-2">
          Anyone can power OpenGPU
        </h2>

        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mt-3">
          From hyperscale data centers to laptops and edge devices.  
          OpenGPU connects everything through the global routing layer.
        </p>
      </div>

      {/* ORBIT CONTAINER */}
      <div className="relative flex items-center justify-center py-45">

        {/* Rotating ring */}
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: ANIMATION_DURATION,
            ease: "linear"
          }}
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
          }}
        >
          {/* Provider nodes */}
          {providers.map((p, idx) => {
            const angle = (idx / providers.length) * Math.PI * 2;
            const x = Math.cos(angle) * RADIUS;
            const y = Math.sin(angle) * RADIUS;

            return (
              <div
                key={p.label}
                className="absolute"
                style={{
                  left: RADIUS + x - 40,
                  top: RADIUS + y - 40,
                }}
              >
                {/* This counter-rotates the node so it stays upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: ANIMATION_DURATION,
                    ease: "linear"
                  }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#0b1220] 
                    border border-cyan-500/30 
                    shadow-[0_0_25px_rgba(0,200,255,0.15)]
                    flex flex-col items-center justify-center"
                  >
                    <span className="text-2xl mb-1">{p.icon}</span>
                    <p className="text-[10px] text-white/80 text-center leading-tight px-1">
                      {p.label}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* OGPU CORE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        
          className="absolute w-28 h-28 flex items-center justify-center 
                     rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 
                     shadow-[0_0_50px_rgba(0,200,255,0.9)] z-10"
        >
          <span className="text-base font-semibold tracking-wide">OpenGPU</span>
        </motion.div>

      </div>

      <p className="text-center text-slate-400 text-xs mt-12">
        All providers route tasks automatically through the OpenGPU global routing layer
      </p>
    </div>
  );
}
