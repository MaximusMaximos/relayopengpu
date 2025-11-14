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
        style={{ filter: "brightness(1.25)" }}
      />

      {/* Lightened Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60"></div>

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-6 z-20">
        <div className="flex items-center gap-3">
          <img
            src="https://digitalgramophone.com/ogpu/Images/OGPU-LOGO-Main.png"
            alt="OGPU Logo"
            className="h-12 w-auto"
            style={{ filter: "brightness(1.15)" }}
          />
        </div>

        <div className="flex items-center gap-10 text-sm text-gray-200 font-medium">
          <a href="#" className="hover:text-white transition">Platform</a>
          <a href="#" className="hover:text-white transition">Solutions</a>
          <a href="#" className="hover:text-white transition">Docs</a>
          <a href="#" className="hover:text-white transition">Company</a>

          <button className="
            magnetic-btn
            px-6 py-2.5
            rounded-lg
            font-semibold
            bg-[#0A84FF]
            hover:bg-[#1A8FFF]
            transition-all duration-300
            text-white
            shadow-[0_0_0_0_rgba(10,132,255,0)]
            hover:shadow-[0_10px_24px_rgba(10,132,255,0.35)]
            hover:-translate-y-[3px]
            active:translate-y-[1px]
          ">
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 pt-40">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          A Datacenter<br />Without Walls
        </h1>

        <p className="text-xl text-[#00E9FF] font-medium mb-6 drop-shadow-md">
          A global compute network for AI workloads.
        </p>

        <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mb-6 drop-shadow">
          OGPU routes workloads to the best available GPU capacity across data centers,
          cloud providers, and independent operators, without splitting jobs.
          This improves performance, reliability, and cost efficiency at scale.
        </p>

        <p className="text-lg font-semibold text-white mb-10 drop-shadow-lg">
          We don’t replace the cloud, we route across it.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mb-16">

          {/* Premium Primary Button */}
          <button
            className="
              magnetic-btn
              bg-gradient-to-r from-[#0A84FF] to-[#00C8FF]
              text-white
              px-9 py-3.5
              rounded-xl
              font-semibold text-lg
              transition-all duration-300 ease-out
              shadow-[0_0_0_0_rgba(0,200,255,0)]
              hover:shadow-[0_12px_32px_rgba(0,150,255,0.45)]
              hover:-translate-y-[4px]
              active:translate-y-[1px]
              active:shadow-[0_6px_16px_rgba(0,150,255,0.3)]
              focus:ring-4 focus:ring-[#00E9FF]/30
              relative overflow-hidden
            "
          >
            <span className="relative z-10">Run An Enterprise Pilot</span>
            <span
              className="
                absolute inset-0 
                bg-gradient-to-r from-white/10 to-transparent
                opacity-0 hover:opacity-100
                transition-opacity duration-500
              "
            ></span>
          </button>

          {/* Premium Secondary Button */}
          <button
            className="
              magnetic-btn
              px-9 py-3.5
              rounded-xl
              font-semibold text-lg
              border border-[#00C8FF]
              text-[#00E9FF]
              transition-all duration-300 ease-out
              hover:bg-[#00C8FF]
              hover:text-[#001019]
              hover:shadow-[0_10px_26px_rgba(0,200,255,0.35)]
              hover:-translate-y-[3px]
              active:translate-y-[1px]
              focus:ring-4 focus:ring-[#00E9FF]/40
              relative overflow-hidden
            "
          >
            <span className="relative z-10">Get Started</span>
            <span
              className="
                absolute inset-0 
                bg-gradient-to-r from-white/10 to-transparent
                opacity-0 hover:opacity-100
                transition-opacity duration-500
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
