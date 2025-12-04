"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Livetransactions from "../components/Livetransactions";

export default function Page() {
  const [orbStep, setOrbStep] = useState(0);

  // Fix for undefined variable
  const [heroOpacity, setHeroOpacity] = useState(1);

  return (
    <main>
{/* Hero */}
<section id="hero" className="relative w-full min-h-screen">

  {/* Background video */}
  <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#040814]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      src="/Videos/Hero-Visual-Slow.mp4"
      poster="/Images/hero-poster.jpg"
      className="w-full h-full object-contain object-top"
    />

    {/* Dark gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80 pointer-events-none" />
  </div>

  {/* Glow bar */}
  <div className="relative w-full h-[1.5px] overflow-hidden mt-[62px]">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF] to-transparent opacity-80" />
    <div className="absolute inset-0 bg-[#00E9FF] opacity-40 blur-sm" />
  </div>

  {/* Hero content */}
  <div className="relative z-20 flex flex-col h-full">

    {/* Top spacing */}
    <div className="pt-12 md:pt-20 lg:pt-24" />

{/* HERO COPY BLOCK */}
<div
  style={{ opacity: heroOpacity, transition: "opacity 0.1s linear" }}
  className="flex flex-col items-center text-center w-full mx-auto pb-10 md:pb-14"
>
  <div className="w-full max-w-[1800px] mx-auto px-6">

    {/* HEADLINE */}
    <h1 className="
      text-4xl md:text-6xl lg:text-7xl
      font-bold uppercase
      tracking-normal
      leading-[1.1]
      text-white drop-shadow-xl
    ">
      COMPUTE WITHOUT BOUNDARIES
    </h1>

    {/* SUBTITLE */}
    <h2 className="
      mt-4
      text-2xl md:text-4xl lg:text-5xl
      font-bold uppercase
      tracking-tight lg:tracking-normal
      leading-[1.15]
      bg-gradient-to-r from-[#0A84FF] to-[#00C6FF]
      bg-clip-text text-transparent drop-shadow
      mb-4 md:mb-6
    ">
      The Global Routing Layer For AI
    </h2>

    {/* LIVE TX */}
    <div className="mb-3 md:mb-5">
      <Livetransactions />
    </div>

    {/* TAGLINE */}
    <p className="
      text-base md:text-xl
      text-white font-medium
      leading-relaxed md:leading-normal
      max-w-2xl mx-auto
      mb-4 md:mb-6
      drop-shadow-md
    ">
      Route workloads to any GPU worldwide, instantly and automatically, <br></br> at up to 80% lower cost than traditional cloud. Access high-performance compute without exclusive vendor lock-in.
    </p>

    {/* POETIC LINE */}
    <p className="
      text-sm md:text-lg
      text-gray-200
      leading-relaxed
      max-w-3xl mx-auto
      mb-6 md:mb-8
      drop-shadow
    ">
      <span className="font-semibold">A data center without walls.</span>
    </p>

  </div>
</div>


{/* DOORWAYS */}
<div className="max-w-6xl mx-auto px-6 pb-12 md:pb-20 grid gap-6 md:gap-8 md:grid-cols-3">

  {/* Join the Network */}
  <div className="rounded-2xl p-7 bg-white/5 border border-white/10 
                  backdrop-blur-xl shadow-lg hover:shadow-xl 
                  transition hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-white mb-2">Join the Network</h3>
    <p className="text-slate-300 text-sm mb-5">
      Join the global network to run workloads efficiently, 
      or contribute your GPU capacity to earn revenue.
    </p>
<a href="/getstarted" className="inline-flex items-center justify-center w-full rounded-xl
                               px-5 py-3 text-sm font-semibold text-white 
                               bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] 
                               shadow-[0_0_22px_rgba(0,160,255,0.35)] 
                               hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,160,255,0.55)] 
                               transition" > Get Started → </a>



  </div>

  {/* Enterprise Compute */}
  <div className="rounded-2xl p-7 bg-white/5 border border-white/10 
                backdrop-blur-xl shadow-lg hover:shadow-xl 
                transition hover:-translate-y-1">

  <h3 className="text-xl font-semibold text-white mb-2">
    Enterprise Compute
  </h3>

  <p className="text-slate-300 text-sm mb-5">
    High-performance workloads with global routing and SLAs.
    <span className="font-semibold text-white">
      {" "}Reduce cloud GPU spend by up to 80%. Full fiat invoicing available.
    </span>
  </p>
    <a
      href="/enterprisehome"
      className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 
                 text-sm font-semibold text-[#0A0F2C] bg-white 
                 border border-white/20
                 shadow-[0_0_20px_rgba(255,255,255,0.25)]
                 hover:shadow-[0_0_30px_rgba(255,255,255,0.45)]
                 transition"
    >
      Run a Free Pilot →
    </a>
  </div>

  {/* blockchain */}
  <div className="rounded-2xl p-7 bg-white/5 border border-white/10 
                  backdrop-blur-xl shadow-lg hover:shadow-xl 
                  transition hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-white mb-2">Blockchain</h3>
    <p className="text-slate-300 text-sm mb-5">
       Learn how the OGPU blockchain settles workloads and powers the network’s utility model.
    </p>
<a
  href="/howtobuy"
  className="
    inline-flex items-center justify-center w-full rounded-xl px-5 py-3
    text-sm font-semibold text-white
    bg-gradient-to-r from-[#012A47] via-[#01486F] to-[#007A9F]
    shadow-[0_0_14px_rgba(0,110,160,0.25)]
    hover:shadow-[0_0_22px_rgba(0,110,160,0.35)]
    transition
  "
>
  View Token Guide →
</a>



  </div>

</div>


</div>
</section>
    </main>
  );
}

