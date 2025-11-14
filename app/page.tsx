"use client";

import React from "react";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#040814] text-white">

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

      {/* Lightened Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/65"></div>

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

          {/* NAV BUTTON */}
          <button
            className="
              magnetic-btn
              relative overflow-hidden
              px-7 py-2.5
              rounded-lg
              font-semibold
              bg-[#0A84FF]
              hover:bg-[#1A8FFF]
              transition-all duration-300
              text-white
              shadow-[0_0_0_0_rgba(10,132,255,0)]
              hover:shadow-[0_10px_24px_rgba(10,132,255,0.4)]
              hover:-translate-y-[3px]
              active:translate-y-[1px]
            "
          >
            <span className="relative z-20">Get Started</span>
            <span className="highlight absolute inset-0 z-10 bg-white/10 pointer-events-none transition-all duration-300"></span>
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 pt-48">

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
        <div className="flex gap-5 mb-20">

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
              shadow-[0_0_0_0_rgba(0,200,255,0)]
              hover:shadow-[0_14px_36px_rgba(0,160,255,0.45)]
              hover:-translate-y-[4px]
              active:translate-y-[1px]
              active:shadow-[0_6px_16px_rgba(0,150,255,0.3)]
              focus:ring-4 focus:ring-[#00E9FF]/30
            "
          >
            <span className="relative z-20">Run An Enterprise Pilot</span>

            {/* Highlight */}
            <span
              className="
                highlight
                absolute inset-0
                z-10
                bg-white/10
                pointer-events-none
                transition-all duration-300
              "
            ></span>
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
              transition-all duration-300 ease-out
              hover:bg-[#00C8FF]
              hover:text-[#001019]
              hover:shadow-[0_12px_28px_rgba(0,200,255,0.35)]
              hover:-translate-y-[3px]
              active:translate-y-[1px]
              focus:ring-4 focus:ring-[#00E9FF]/40
            "
          >
            <span className="relative z-20">Get Started</span>

            <span
              className="
                highlight
                absolute inset-0
                z-10
                bg-white/10
                pointer-events-none
                transition-all duration-300
              "
            ></span>
          </button>
        </div>

        {/* STATS */}
        <div className="flex gap-16 text-center drop-shadow-md">
          <div>
            <h3 className="text-3xl font-bold text-[#00E9FF]">259+</h3>
            <p className="text-sm text-gray-300">Active GPU Providers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#00E9FF]">60%–80%</h3>
            <p className="text-sm text-gray-300">Cost Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#00E9FF]">99.3%+</h3>
            <p className="text-sm text-gray-300">Network Uptime</p>
          </div>
        </div>

      </div>
    </main>
  );
}
