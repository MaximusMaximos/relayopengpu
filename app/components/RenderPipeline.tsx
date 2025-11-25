"use client";

import { motion } from "framer-motion";

export default function RenderPipeline() {
  const steps = [
    {
      title: "Scene Upload",
      desc: "Project files, assets, and rendering configs are submitted.",
    },
    {
      title: "Job Routing",
      desc: "OGPU distributes render tasks across global GPU nodes.",
    },
    {
      title: "Parallel Rendering",
      desc: "Frames, passes, and sims render simultaneously.",
    },
    {
      title: "Frame Output",
      desc: "Rendered outputs are collected and returned to the studio.",
    },
  ];

  return (
    <div className="w-full bg-[#030711] rounded-3xl border border-cyan-500/20 px-6 md:px-10 py-12 shadow-[0_0_40px_rgba(0,200,255,0.08)]">

      {/* HEADER */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.18em] text-cyan-400 uppercase">
          Render Flow
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-white">
          Distributed Rendering Pipeline
        </h2>

        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mt-3">
          Render tasks are automatically split, routed, and processed in parallel for maximum speed.
        </p>
      </div>

      {/* ANIMATED LINE */}
      <div className="relative w-full flex flex-col items-center mb-14">
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
      </div>

      {/* STEPS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-[#0b1220] border border-cyan-500/30 shadow-[0_0_20px_rgba(0,200,255,0.12)] flex items-center justify-center text-cyan-300 font-bold text-lg">
              {index + 1}
            </div>

            <h3 className="text-white text-sm font-semibold mt-4">{step.title}</h3>
            <p className="text-slate-400 text-xs mt-2 leading-relaxed max-w-[180px]">
              {step.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </div>
  );
}
