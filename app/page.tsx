"use client";

import React from "react";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#040814] text-white pb-12">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://digitalgramophone.com/ogpu/Videos/MAIN-loop.mp4"
        style={{ filter: "brightness(1.4)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75 pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-7 z-20">
        <div className="flex items-center gap-3">
          <img
            src="https://digitalgramophone.com/ogpu/Images/OGPU-LOGO-Main.png"
            alt="OGPU Logo"
            className="h-16 w-auto"
            style={{ filter: "brightness(1.2)" }}
          />
        </div>

        <div className="flex items-center gap-10 text-sm text-gray-200 font-medium">
          <a href="#" className="hover:text-white transition">Platform</a>
          <a href="#" className="hover:text-white transition">Solutions</a>
          <a href="#" className="hover:text-white transition">Docs</a>
          <a href="#" className="hover:text-white transition">Company</a>

          <button
            className="
              magnetic-btn
              relative overflow-hidden
              px-7 py-2.5
              rounded-lg
              font-semibold
              bg-[#0A84FF]
              text-white
              transition-all duration-300
              hover:bg-[#1A8FFF]
              hover:shadow-[0_10px_24px_rgba(10,132,255,0.4)]
              hover:-translate-y-[3px]
              active:translate-y-[1px]
              z-20
            "
          >
            <span className="relative z-20">Get Started</span>
            <span className="highlight absolute inset-0 z-10 bg-white/10 pointer-events-none transition-all duration-300"></span>
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 pt-48 pb-24">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-xl">
          A Datacenter<br />Without Walls
        </h1>

        <p className="text-xl text-[#00E9FF] font-semibold mb-5 drop-shadow-md">
          A global compute network for AI workloads.
        </p>

        <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mb-6 drop-shadow">
          OGPU routes workloads to the best available GPU capacity across data centers,
          cloud providers, and independent operators, without splitting jobs.
          This improves performance, reliability and cost efficiency at scale.
        </p>

        <p className="text-lg font-semibold text-white mb-12 drop-shadow-lg">
          We don’t replace the cloud, we route across it.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-5 mb-32 z-20">

          {/* PRIMARY BUTTON */}
          <button
            className="
              magnetic-btn
              relative overflow-hidden
              bg-gradient-to-r from-[#0A84FF] to-[#00C8FF]
              text-white
              px-10 py-3.5
              rounded-xl
              font-semibold text-lg
              transition-all duration-300 ease-out
              hover:shadow-[0_14px_36px_rgba(0,160,255,0.45)]
              hover:-translate-y-[4px]
              active:translate-y-[1px]
              focus:ring-4 focus:ring-[#00E9FF]/30
            "
          >
            <span className="relative z-20">Run An Enterprise Pilot</span>
            <span className="highlight absolute inset-0 z-10 bg-white/10 pointer-events-none transition-all duration-300"></span>
          </button>

          {/* SECONDARY BUTTON */}
          <button
            className="
              magnetic-btn
              relative overflow-hidden
              px-10 py-3.5
              rounded-xl
              font-semibold text-lg
              border border-[#00C8FF]
              text-[#00E9FF]
              transition-all duration-300
              hover:bg-[#00C8FF]
              hover:text-[#001019]
              hover:shadow-[0_12px_28px_rgba(0,200,255,0.35)]
              hover:-translate-y-[3px]
              active:translate-y-[1px]
              focus:ring-4 focus:ring-[#00E9FF]/40
            "
          >
            <span className="relative z-20">Get Started</span>
            <span className="highlight absolute inset-0 z-10 bg-white/10 pointer-events-none transition-all duration-300"></span>
          </button>

        </div>

        {/* BACKED BY GLOBAL SCALE */}
<div className="text-center max-w-3xl mx-auto mb-16 z-20">

  <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-xl">
    Backed by Global Scale
  </h2>

  <p className="text-lg text-gray-300 drop-shadow">
    The OGPU Network is live, production-tested, and running real AI workloads worldwide.
  </p>

</div>
        {/* STATS */}
        <div className="flex gap-16 text-center drop-shadow-md">

          <div className="max-w-[180px]">
            <h3 className="text-3xl font-bold text-[#00E9FF]">259+</h3>
            <p className="text-sm text-white font-medium">Active GPU Providers</p>
            <p className="text-xs text-gray-300 mt-1">Distributed across 40+ countries.</p>
          </div>

          <div className="max-w-[180px]">
            <h3 className="text-3xl font-bold text-[#00E9FF]">60%–80%</h3>
            <p className="text-sm text-white font-medium">Cost Reduction</p>
            <p className="text-xs text-gray-300 mt-1">Compared to centralized cloud pricing.</p>
          </div>

          <div className="max-w-[180px]">
            <h3 className="text-3xl font-bold text-[#00E9FF]">99.3%+</h3>
            <p className="text-sm text-white font-medium">Network Uptime</p>
            <p className="text-xs text-gray-300 mt-1">Automated failover and redundancy.</p>
          </div>
         
        </div>
 <p className="text-sm text-gray-400 mt-6 mb-24 text-center z-20">
  Real Providers. Real Workloads. No hypothetical capacity claims.
</p>
      </div>

    </main>
  );
}
