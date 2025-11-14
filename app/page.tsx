"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const controls = useAnimation();

  const baseLogos = [
    { src: "https://digitalgramophone.com/ogpu/Images/nosana.png", alt: "Nosana" },
    { src: "https://digitalgramophone.com/ogpu/Images/lena.png", alt: "Lena AI" },
    { src: "https://digitalgramophone.com/ogpu/Images/ozak.png", alt: "Ozak AI" }
  ];

  const logos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 28,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <main className="relative w-full bg-[#040814] text-white">

     
{/* ========================================= */}
{/* HERO SECTION */}
{/* ========================================= */}
<section className="relative w-full min-h-screen">

  {/* Background video + overlay wrapper */}
  <div className="absolute inset-0 overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      src="https://digitalgramophone.com/ogpu/Videos/MAIN-loop.mp4"
      style={{ filter: "brightness(1.4)" }}
    />

    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75 pointer-events-none" />
  </div>

  {/* HERO CONTENT */}
  <div className="relative z-20 flex flex-col h-full">

    {/* NAVBAR */}
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-12 py-7">
      <div className="flex items-center gap-3">
        <img
          src="https://digitalgramophone.com/ogpu/Images/OGPU-LOGO-Main.png"
          alt="OGPU Logo"
          className="h-16 w-auto"
        />
      </div>

      <div className="flex items-center gap-10 text-sm text-gray-200 font-medium">
        <a href="#" className="hover:text-white transition">Platform</a>
        <a href="#" className="hover:text-white transition">Solutions</a>
        <a href="#" className="hover:text-white transition">Docs</a>
        <a href="#" className="hover:text-white transition">Company</a>

        <button
          className="
            px-7 py-2.5 rounded-lg font-semibold
            bg-[#0A84FF] text-white
            transition-all duration-300
            hover:bg-[#1A8FFF]
            hover:shadow-[0_10px_24px_rgba(10,132,255,0.4)]
            hover:-translate-y-[2px]
            active:translate-y-[1px]
          "
        >
          Get Started
        </button>
      </div>
    </nav>

    {/* HERO TEXT BLOCK */}
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24">

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-xl">
        A Datacenter<br />Without Walls
      </h1>

      <p className="text-xl text-[#00E9FF] font-semibold mb-5 drop-shadow-md">
        A global compute network for AI workloads.
      </p>

      <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mb-6 drop-shadow">
        OGPU routes workloads to the best available GPU capacity across data centers,
        cloud providers and independent operators without splitting jobs.
        This improves performance, reliability and cost efficiency at scale.
      </p>

      <p className="text-lg font-semibold text-white mb-10 drop-shadow-lg">
        We don’t replace the cloud, we route across it.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-5">

        <button
          className="
            bg-gradient-to-r from-[#0A84FF] to-[#00C8FF]
            text-white px-10 py-3.5 rounded-xl font-semibold text-lg
            shadow-[0_4px_14px_rgba(0,160,255,0.45)]
            transition-all duration-300
            hover:shadow-[0_10px_30px_rgba(0,160,255,0.55)]
            hover:scale-[1.02]
          "
        >
          Run An Enterprise Pilot
        </button>

        <button
          className="
            px-10 py-3.5 rounded-xl font-semibold text-lg
            border border-[#00C8FF]
            text-[#00E9FF]
            transition-all duration-300
            hover:bg-[#00C8FF]
            hover:text-[#001019]
            hover:shadow-[0_10px_30px_rgba(0,200,255,0.45)]
            hover:scale-[1.02]
          "
        >
          Get Started
        </button>

      </div>

    </div>

  </div>
</section>



      {/* STATS SECTION */}
      <section className="w-full bg-[#000104] pt-20 pb-16 px-6">

  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-xl">
      Backed by Global Scale
    </h2>
    <p className="text-lg text-gray-300 drop-shadow">
      The OGPU Network is live, production-tested and running real AI workloads worldwide.
    </p>
  </div>

  <div className="flex justify-center gap-16 text-center mb-10">
    <div>
      <h3 className="text-3xl font-bold text-[#00E9FF]">259+</h3>
      <p className="text-sm text-white font-medium">Active GPU Providers</p>
      <p className="text-xs text-gray-300 mt-1">Distributed across 40+ countries.</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-[#00E9FF]">60%–80%</h3>
      <p className="text-sm text-white font-medium">Cost Reduction</p>
      <p className="text-xs text-gray-300 mt-1">Compared to centralized cloud pricing.</p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-[#00E9FF]">99.3%+</h3>
      <p className="text-sm text-white font-medium">Network Uptime</p>
      <p className="text-xs text-gray-300 mt-1">Automated failover and redundancy.</p>
    </div>
  </div>

  <p className="text-sm text-gray-400 text-center">
    Real Providers. Real Workloads. No hypothetical capacity claims.
  </p>

</section>

      {/* GRADIENT */}
      <div className="w-full h-48 bg-gradient-to-b from-[#000104] to-white" />

      {/* PARTNER LOGO SLIDER */}
      <section className="w-full bg-white py-20 overflow-hidden relative">

        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#0A0F2C] mb-10">
          Trusted by teams building the future of AI infrastructure
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-20 px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...baseLogos, ...baseLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-14 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* WHY OGPU SECTION */}
      <section className="w-full bg-[#F7F9FC] py-28 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[52%_48%] gap-20 items-center">

          <div>
            <img
              src="https://digitalgramophone.com/ogpu/Images/screenmain-transparant.png"
              alt="OGPU Platform Screens"
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="max-w-xl">

            <span className="text-[#007BFF] font-semibold tracking-wide text-base">
              WHY OGPU
            </span>

            <h2 className="
  text-4xl md:text-[2.4rem] lg:text-[2.6rem]
  font-bold leading-tight mt-3 mb-1 text-[#0A0F2C] whitespace-nowrap">
  Decentralized compute,
</h2>

<h2 className="
  text-4xl md:text-[2.4rem] lg:text-[2.6rem]
  font-bold leading-tight mb-6
  bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] bg-clip-text text-transparent
  whitespace-nowrap">
  built for real AI workloads.
</h2>




            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              AI workloads are outgrowing centralized cloud capacity. OGPU connects GPU
              providers across data centers, clouds and independent operators into one
              network, routing workloads to available capacity. This improves reliability
              and reduces cost.
            </p>

            <button
              className="
                px-10 py-4
                rounded-xl
                font-semibold text-white text-lg
                bg-gradient-to-r from-[#0A84FF] to-[#00C8FF]
                hover:shadow-[0_12px_32px_rgba(0,160,255,0.35)]
                transition-all duration-300
                hover:-translate-y-[3px]
              "
            >
              Explore dApp
            </button>

          </div>

        </div>

        <div className="h-16" />

        <div className="max-w-7xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: "🌐",
              title: "Global Capacity Network",
              text: "Access GPU capacity worldwide. OGPU routes tasks instantly to available compute.",
            },
            {
              icon: "📈",
              title: "Elastic Scaling",
              text: "On-demand scale inference or fine-tuning. No reservations, queuing or region limits.",
            },
            {
              icon: "💸",
              title: "Lower Operational Cost",
              text: "Pay only for executed work. Task-based billing cuts idle costs by 60–80%.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl p-10 flex flex-col border border-gray-100
                shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                transition-all duration-300 ease-out
                hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]
                hover:-translate-y-2 hover:scale-[1.02]
              "
            >
              <div className="text-[#0A84FF] mb-5 text-4xl">{card.icon}</div>
              <h3 className="font-semibold text-xl text-[#0A0F2C] mb-3">{card.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

      </section>
      
import { motion } from "framer-motion";

export default function HowOGPUWorks() {
  return (
    <section className="w-full bg-white py-28 px-6 relative overflow-hidden">

      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 z-10">

        {/* LEFT SIDE (Unchanged) */}
        <div className="space-y-10">

          <h2 className="text-4xl md:text-5xl font-semibold text-[#0A0F2C]">
            How OGPU Works
          </h2>

          <p className="text-lg text-[#475569] max-w-lg leading-relaxed">
            OGPU automatically routes each workload to the best available GPU across the network...
          </p>

          {/* Steps */}
          <div className="space-y-10 border-l-2 border-cyan-400/50 pl-6">

            {/* Step 1 */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-medium text-[#1E293B]">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600
                                 text-white flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
                  </svg>
                </span>
                Step 1 – Submit a Workload
              </h3>
              <p className="text-[#475569] mt-2">
                You send an AI or rendering task…
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-medium text-[#1E293B]">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600
                                 text-white flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.125 1.125 0 011.591 0L21.75 12M4.5 9.75V21h15V9.75" />
                  </svg>
                </span>
                Step 2 – Routing & Provider Selection
              </h3>
              <p className="text-[#475569] mt-2">
                OGPU compares GPUs worldwide…
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-medium text-[#1E293B]">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600
                                 text-white flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Step 3 – Execute End-to-End
              </h3>
              <p className="text-[#475569] mt-2">
                Your workload runs start-to-finish…
              </p>
            </div>

          </div>

          <p className="text-[#0A0F2C] font-medium border-t border-gray-200 pt-5">
            Single-executor by design…
          </p>

          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-700 to-cyan-400 text-white rounded-xl">
            See Real Workloads Running →
          </button>
        </div>

        {/* RIGHT COLUMN DIAGRAM (OGPU EXACT STYLE) */}
<div className="flex flex-col items-center space-y-16">

  {/* NODE 1 */}
  <motion.div
    className="flex flex-col items-center"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-cyan-100 flex items-center justify-center">
      <img src="/icons/upload.svg" className="w-8 h-8 text-cyan-600" />
    </div>
    <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
      Submit Workload
    </p>
  </motion.div>

  {/* CONNECTOR 1 (SEPARATE, SHORT, ANIMATED) */}
  <motion.div 
    className="w-[3px] h-24 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full relative overflow-hidden"
  >
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-200 via-cyan-400 to-blue-500 opacity-70"
      animate={{ y: ["-100%", "100%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>

  {/* NODE 2 */}
  <motion.div
    className="flex flex-col items-center"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
  >
    <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-cyan-100 flex items-center justify-center">
      <img src="/icons/clock.svg" className="w-8 h-8 text-cyan-600" />
    </div>
    <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
      Relay Routing Engine
    </p>
  </motion.div>

  {/* CONNECTOR 2 (SEPARATE, SHORT, ANIMATED) */}
  <motion.div 
    className="w-[3px] h-24 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full relative overflow-hidden"
  >
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-200 via-cyan-400 to-blue-500 opacity-70"
      animate={{ y: ["-100%", "100%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    />
  </motion.div>

  {/* NODE 3 */}
  <motion.div
    className="flex flex-col items-center"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
  >
    <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-cyan-100 flex items-center justify-center">
      <img src="/icons/gpu.svg" className="w-8 h-8 text-cyan-600" />
    </div>
    <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
      GPU Provider
    </p>
  </motion.div>

</div>


      </div>

    </section>
  );
}

  

    </main>
  );
}
