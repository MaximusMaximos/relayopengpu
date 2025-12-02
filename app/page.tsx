"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import featured from "@/data/featured.json";
import news from "@/data/news.json";

import Nav from "./components/Nav";
import LiveStats from "./components/LiveStats";
import SafeInput from "./components/SafeInput";
import PricingComparator from "./components/PricingComparator";
import Livetransactions from "./components/Livetransactions";
import FooterSubscribe from "./components/FooterSubscribe";

export default function Page() {
  // Orb workflow
  const [orbStep, setOrbStep] = useState(0);

  // Hero fade on scroll
  const [heroOpacity, setHeroOpacity] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const fadeStart = 200;
      const fadeEnd = 900;

      if (y < fadeStart) setHeroOpacity(1);
      else if (y > fadeEnd) setHeroOpacity(0.45);
      else {
        const progress = (y - fadeStart) / (fadeEnd - fadeStart);
        setHeroOpacity(1 - progress * 0.55);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Partner logo scroller
  const baseLogos = [
    { src: "/Images/Partners/nosana.png", alt: "Nosana" },
    { src: "/Images/Partners/lenaai.png", alt: "Lena" },
    { src: "/Images/Partners/ozakai.png", alt: "Ozak" },
    { src: "/Images/Partners/seeweb.png", alt: "SeeWeb" },
    { src: "/Images/Partners/ovhcloud.png", alt: "OVH Cloud" }
  ];

  const logos = [...baseLogos, ...baseLogos];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <main className="relative w-full bg-[#040814] text-white overflow-x-hidden">

      {/* Nav */}
      <Nav />

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

    {/* Top spacing — MOBILE NORMALIZED */}
    <div className="pt-12 md:pt-20 lg:pt-24" />

    {/* HERO COPY */}
    <div
      style={{ opacity: heroOpacity, transition: "opacity 0.1s linear" }}
      className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pb-12 md:pb-14"
    >
   
   <h1
      className="
        text-3xl md:text-6xl font-bold leading-tight
        mb-3 md:mb-4 drop-shadow-xl
      "
    >
      Compute Without Boundaries
    </h1>

    <h2
      className="
        text-base md:text-2xl font-semibold text-white/90
        mb-3 md:mb-4 drop-shadow
      "
    >
      A Data Center Without Walls
    </h2>

    <p
      className="
        text-base md:text-xl text-[#00e9ff] font-semibold
        mb-3 md:mb-4 drop-shadow-md
      "
    >
      Global GPU routing for high-demand AI workloads.
    </p>

    <p
      className="
        text-sm md:text-lg text-gray-200 leading-relaxed max-w-3xl
        mb-3 md:mb-4 drop-shadow
      "
    >
      Faster execution, enterprise reliability and up to 60–80 percent lower cost
      compared to traditional cloud compute.
    </p>

    <p
      className="
        text-sm md:text-lg font-semibold text-white
        mb-6 md:mb-8 drop-shadow-lg
      "
    >
      We do not replace the cloud, we route across it.
    </p>

    </div>


{/* Doorways */}
<div className="max-w-6xl mx-auto px-6 pb-12 md:pb-20 grid gap-6 md:gap-8 md:grid-cols-3">


  {/* Join the Network */}
  <div className="rounded-2xl p-7 bg-white/5 border border-white/10 
                  backdrop-blur-xl shadow-lg hover:shadow-xl 
                  transition hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-white mb-2">Join the Network</h3>

    <p className="text-slate-300 text-sm mb-5">
      Run workloads or contribute GPU capacity to earn.
    </p>

    <a
      href="/getstarted"
      className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 
                 text-sm font-semibold text-white bg-cyan-500 
                 border border-cyan-400/40
                 shadow-[0_0_18px_rgba(0,200,255,0.35)]
                 hover:bg-cyan-400 hover:shadow-[0_0_28px_rgba(0,200,255,0.55)]
                 transition"
    >
      Get Started →
    </a>
  </div>

  {/* Enterprise Compute */}
  <div className="rounded-2xl p-7 bg-white/5 border border-white/10 
                  backdrop-blur-xl shadow-lg hover:shadow-xl 
                  transition hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Compute</h3>

    <p className="text-slate-300 text-sm mb-5">
      High-performance workloads with global routing and SLAs.
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

  {/* Investors */}
  <div className="rounded-2xl p-7 bg-white/5 border border-white/10 
                  backdrop-blur-xl shadow-lg hover:shadow-xl 
                  transition hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-white mb-2">Investors</h3>

    <p className="text-slate-300 text-sm mb-5">
      Learn about the OGPU token and network utility model.
    </p>

    <a
      href="/howtobuy"
      className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 
                 text-sm font-semibold text-white 
                 bg-gradient-to-r from-[#0A84FF] to-[#00C6FF]
                 shadow-[0_0_22px_rgba(0,160,255,0.35)]
                 hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,160,255,0.55)]
                 transition"
    >
      View Token Guide →
    </a>
  </div>

</div>

</div>
</section>

<section className="w-full bg-[#020617] py-12 md:py-24">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Why OGPU Exists
      </h2>

      <p className="text-base md:text-lg text-slate-300 leading-relaxed">
        Compute demand keeps rising while usable GPU supply remains scattered.
        OGPU brings these sources together so workloads run faster, more reliably,
        and with greater efficiency.
      </p>
    </div>

    {/* Blocks */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-0">
      
      <div className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-white mb-2">Fragmented GPU Supply</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Capacity sits across clouds, data centers and independent operators, often underused.
        </p>
      </div>

      <div className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-white mb-2">OGPU Unifies It</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          OGPU connects all these sources into one network and routes workloads to where they run best.
        </p>
      </div>

      <div className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-white mb-2">Better Performance, Lower Cost</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Workloads execute faster and more efficiently without managing infrastructure yourself.
        </p>
      </div>

    </div>

  </div>
</section>





<section className="w-full bg-[#020617] py-12 md:py-0 px-6">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="mb-6 md:mb-12">
      <LiveStats />
    </div>

  </div>

  {/* Pricing Comparator */}
  <PricingComparator />
</section>





< section
  id="quickstart"
  className="w-full bg-[#020617] py-12 pb-12 md:py-24 px-6 border-t border-white/5"
>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
        Provider Suite Installer
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Start earning with your GPU resources today. Download the provider suite for your operating system.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">

      {/* Client */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)] text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Run Models</h3>

        <p className="text-sm text-gray-400 mb-4">
          Access decentralized GPUs instantly using the Client Dashboard.
        </p>

        <a href="https://client.opengpu.network/" download className="block">
          <button className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition">
            Run Models →
          </button>
        </a>

        <a href="#" className="block mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">
          API Docs →
        </a>
      </div>

      {/* macOS */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)] text-center">
        <img src="/Assets/apple.png" className="w-14 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">macOS</h3>

        <a
          href="https://oerelease.opengpu.network/download/flavor/default/3.1.0/osx_arm64/OpenGPU-Provider-Suite-3.1.0.pkg"
          download
          className="block"
        >
          <button className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition">
            Download for macOS →
          </button>
        </a>

        <a href="#" className="block mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">
          View macOS docs →
        </a>
      </div>

      {/* Windows */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)] text-center">
        <img src="/Assets/windows.png" className="w-14 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Windows</h3>

        <a
          href="https://oerelease.opengpu.network/download/flavor/default/3.1.0/windows_64/OpenGPU-Provider-Suite-3.1.0.exe"
          download
          className="block"
        >
          <button className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition">
            Download for Windows →
          </button>
        </a>

        <a href="#" className="block mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">
          View Windows docs →
        </a>
      </div>

      {/* Linux */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)]">
        <div className="text-center">
          <img src="/Assets/linux.png" className="w-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Linux</h3>
        </div>

        <p className="text-xs md:text-sm text-gray-400 mb-3">Install via CLI:</p>

        <pre className="text-xs md:text-sm text-gray-200 bg-black/20 rounded-xl p-4 overflow-x-auto whitespace-pre leading-relaxed mb-6">
{`curl -o provider-install.sh \\
  https://raw.githubusercontent.com/OpenGPU-Network/provider-suite/main/install.sh
chmod +x provider-install.sh
./provider-install.sh`}
        </pre>

        <a
          href="https://opengpu.network/download/linux"
          className="block w-full text-center px-6 py-3 mb-4 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition"
        >
          Get Started →
        </a>

        <a
          href="https://opengpu.network/download/linux"
          className="block text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition text-center"
        >
          View Linux docs →
        </a>
      </div>

    </div>
  </div>
</section>





{/* Partner Slider */}
<section className="w-full bg-white py-12 md:py-12">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-8 md:mb-10">
      <h2 className="text-lg md:text-xl font-semibold text-[#0A0F2C] tracking-tight">
        Trusted by leading teams and infrastructure providers
      </h2>
      <p className="text-xs md:text-sm text-slate-500 mt-2 tracking-tight">
        Used across production environments worldwide.
      </p>
    </div>

    {/* Slim scrolling bar */}
    <div className="relative overflow-hidden w-full py-2">

      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[60px] bg-gradient-to-r from-white to-transparent z-20"></div>

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[60px] bg-gradient-to-l from-white to-transparent z-20"></div>

      {/* Logo track */}
      <div className="flex w-max">

        <motion.div
          className="flex items-center gap-10 pr-10 flex-none"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {baseLogos.map((logo, i) => (
            <div key={`t1-${i}`} className="flex items-center justify-center">
              <div className="w-[120px] h-[45px] flex items-center justify-center opacity-90">
                <img
                  src={logo.src}
                  className="max-h-full max-w-full object-contain brightness-110 grayscale-[20%]"
                />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center gap-10 pr-10 flex-none"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {baseLogos.map((logo, i) => (
            <div key={`t2-${i}`} className="flex items-center justify-center">
              <div className="w-[120px] h-[45px] flex items-center justify-center opacity-90">
                <img
                  src={logo.src}
                  className="max-h-full max-w-full object-contain brightness-110 grayscale-[20%]"
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </div>

  </div>
</section>




 {/* Why OGPU */}
<section
  id="why-ogpu"
  className="w-full bg-[#F7F9FC] py-12 md:py-24 px-6"
>

  {/* Image + Text Row */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[52%_48%] gap-6 md:gap-14 items-center">


    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <img
        src="/Images/screenmain-transparant.png"
        alt="OGPU Platform Screens"
        className="w-full rounded-xl object-cover"
      />
    </motion.div>

    {/* Text */}
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-xl"
    >
      <span className="text-[#005DEA] font-semibold tracking-wide text-xs md:text-sm uppercase">
        Why OGPU
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3 mb-2 text-[#0A0F2C]">
        Compute without limits,
      </h2>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 bg-gradient-to-r from-[#005DEA] to-[#00C6FF] bg-clip-text text-transparent">
        built for global routing.
      </h2>

      <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-6 md:mb-8">
        OGPU provides a unified compute layer that routes workloads across multiple providers automatically.
        You get predictable performance, reliability, and lower operational overhead without managing infrastructure.
      </p>

      <a
        href="/whyogpu"
        className="px-8 py-3.5 rounded-2xl font-semibold text-white text-base md:text-lg bg-gradient-to-r from-[#005DEA] to-[#00C6FF] hover:shadow-[0_12px_32px_rgba(0,160,255,0.35)] transition-all duration-300 hover:-translate-y-[3px] block text-center"
      >
        Learn More
      </a>
    </motion.div>

  </div>

  {/* Cards */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className="max-w-7xl mx-auto mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
  >
    {[
      {
        imgSrc: "/Assets/outlineglobal.png",
        title: "Global Capacity Network",
        text: "Unified access to compute from providers worldwide through a single network endpoint."
      },
      {
        imgSrc: "/Assets/scaling.png",
        title: "Elastic Scaling",
        text: "Scale workloads instantly with no provisioning, queues, or regional constraints."
      },
      {
        imgSrc: "/Assets/percentage.png",
        title: "Lower Operational Cost",
        text: "Pay only for completed workloads with no idle cost. Customers see 60–80 percent lower operational spend compared to traditional cloud usage."
      }
    ].map((card, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl p-6 md:p-8 flex flex-col border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02]"
      >
        <div className="w-12 h-12 mb-4 md:mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00C6FF] shadow-[0_4px_14px_rgba(0,150,255,0.25)] transition-transform duration-300 hover:scale-110">
          <img src={card.imgSrc} alt={card.title} className="w-6 h-6 object-contain" />
        </div>

        <h3 className="font-semibold text-lg md:text-xl text-[#0A0F2C] mb-2 leading-snug">
          {card.title}
        </h3>

        <p className="text-sm md:text-base text-[#475569] leading-relaxed">
          {card.text}
        </p>
      </div>
    ))}
  </motion.div>

</section>




{/* How OGPU Works */}
<section
  id="how-ogpu-works"
  className="w-full bg-[#F7F9FC] py-12 md:py-0 px-6"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
      <span className="text-[#005DEA] font-semibold tracking-wide text-xs md:text-sm uppercase">
        How OGPU Works
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3 mb-4 text-[#0A0F2C]">
        How workloads move through the OGPU Network
      </h2>

      <p className="text-base md:text-lg text-[#475569] leading-relaxed">
        A simple view of how workloads enter the network, how routing is handled,
        and how providers earn for capacity they contribute.
      </p>
    </div>

    {/* 3-STEP GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">

      {/* STEP 1 */}
      <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-200 shadow-sm">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-[#0A84FF] to-[#00C6FF]
                        shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                        transition-transform duration-300 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-6 h-6 text-white"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.8}
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-[#0A0F2C] mb-2">
          Submit a workload
        </h3>
        <p className="text-[#475569] text-sm md:text-base leading-relaxed">
          Workloads are submitted through Relay for enterprise or via the Client app.
          OGPU detects the required GPU and prepares the workload for routing.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-200 shadow-sm">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-[#0A84FF] to-[#00C6FF]
                        shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                        transition-transform duration-300 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-6 h-6 text-white"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.8}
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-[#0A0F2C] mb-2">
          Routing and execution
        </h3>
        <p className="text-[#475569] text-sm md:text-base leading-relaxed">
          OGPU selects the best available GPU worldwide. Tasks run on a single executor
          for consistent performance, with instant failover if a provider drops.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-200 shadow-sm">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-[#0A84FF] to-[#00C6FF]
                        shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                        transition-transform duration-300 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg"
               className="w-6 h-6 text-white"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.8}
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9.75 3v4.51c0 .45.54.67.85.35l1.4-1.4a.5.5 0 01.7 0l1.4 1.4c.31.32.85.1.85-.35V3m3 18H6a2.25 2.25 0 01-2.25-2.25V9A2.25 2.25 0 016 6.75h12A2.25 2.25 0 0120.25 9v9.75A2.25 2.25 0 0118 21z" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-[#0A0F2C] mb-2">
          Providers run and earn
        </h3>
        <p className="text-[#475569] text-sm md:text-base leading-relaxed">
          Providers execute workloads and earn for completed tasks. 
          All settlement is recorded on-chain with transparent usage-based billing.
        </p>
      </div>

    </div>

    {/* CASH FLOW LINE */}
    <p className="text-center text-sm text-[#475569] mb-10 md:mb-14">
      <span className="font-semibold text-[#0A0F2C]">Client pays</span>
      <span className="text-[#00C6FF] mx-2">→</span>
      <span className="font-semibold text-[#0A0F2C]">OGPU routes</span>
      <span className="text-[#00C6FF] mx-2">→</span>
      <span className="font-semibold text-[#0A0F2C]">Provider earns</span>
    </p>

    {/* AUDIENCES */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
      <div>
        <h4 className="text-lg font-semibold text-[#0A0F2C] mb-1">Clients</h4>
        <p className="text-gray-500 text-sm">Run workloads.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[#0A0F2C] mb-1">Providers</h4>
        <p className="text-gray-500 text-sm">Earn from GPU capacity.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[#0A0F2C] mb-1">Investors</h4>
        <p className="text-gray-500 text-sm">Benefit from network growth.</p>
      </div>
    </div>

  </div>
</section>



      {/* BUILT FOR REAL AI WORKLOADS SECTION */}
<section id="workloads"
  className="w-full bg-[#F6F9FA] py-20 md:py-24 px-6">

  {/* PREMIUM ENTERPRISE WORKLOADS BANNER */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    className="w-full max-w-7xl mx-auto mb-20 rounded-2xl overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
  >
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#0B3C66] to-[#0E5AA8] opacity-95" />

    {/* Soft glow */}
    <div
      className="absolute -top-28 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full
                 bg-[radial-gradient(circle_at_center,rgba(0,168,255,0.28),transparent_70%)]
                 blur-3xl opacity-50"
    />

    {/* Content */}
    <div className="relative z-10 px-8 md:px-10 py-14 md:py-12 text-center text-white">
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
        Built for real AI workloads, not demos.
      </h2>

      <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
        Production grade inference, training, finetuning and generative workloads.
        On demand elasticity and lower cost, powered entirely by decentralized GPUs.
      </p>
    </div>
  </motion.div>

 {/* Workload Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">

  {[
    {
      src: "/Assets/tbnetwork.png",
      title: "Model serving and inference",
      text: "Run LLMs or vision models with predictable performance at any scale. Serve production workloads reliably from pilots to global deployments."
    },
    {
      src: "/Assets/learning.png",
      title: "Training and fine tuning",
      text: "Execute batch or streaming training with elastic allocation. Automatically scale up or down for efficiency and cost control."
    },
    {
      src: "/Assets/magic.png",
      title: "Generative media and 3D",
      text: "Accelerate video, image, audio and 3D generation with high throughput GPU power. Built for agents, creative pipelines and automation."
    },
    {
      src: "/Assets/atom.png",
      title: "Simulation and research",
      text: "Run reinforcement learning, simulations or large scale experiments without limits. Expand capacity instantly as demand grows."
    }
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.12 }}
      className="backdrop-blur-md bg-white/90 border border-gray-200 rounded-2xl p-7 md:p-8 
                 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
    >

      {/* ICON CHIP */}
      <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                      bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
                      shadow-inner shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                      transition-transform duration-300 hover:scale-110
                      [filter:none]">
        <img
          src={item.src}
          alt={item.title}
          className="w-6 h-6 object-contain !invert-0 !brightness-100 !contrast-100"
          style={{ filter: "none" }}
        />
      </div>

      {/* TITLE */}
      <h4 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-3 leading-snug">
        {item.title}
      </h4>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-base text-[#475569] mb-4 leading-relaxed">
        {item.text}
      </p>

      <a className="text-sm font-semibold text-cyan-600 hover:text-blue-600 transition" href="/workloads">
        Learn more →
      </a>

    </motion.div>
  ))}

</div>



  {/* Trust Line */}
  <div className="text-center mt-12 md:mt-16">
    <p className="text-xs md:text-sm text-[#334155] font-medium tracking-wide">
      Trusted by teams running production grade AI and inference workloads today.
    </p>
  </div>

  {/* PIPELINE */}
  {/* Model → Routing → Provider → Output */}
</section>

    <section
      id="relay"
      className="relative w-full bg-white py-20 md:py-24 px-6 text-[#0A0F2C]"
    >
      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <span className="text-[#005DEA] font-semibold tracking-wide text-xs md:text-sm uppercase">
          Relay
        </span>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mt-3 mb-4">
          The enterprise gateway to OGPU
        </h2>

        <p className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed">
          Relay unlocks enterprise access to decentralized compute with clean cloud workflows.
          No wallets. No tokens. No friction.
        </p>
      </div>

      {/* Routing Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto mb-16"
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between w-full relative z-10">

          {/* Clients */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium">Clients</p>
          </div>

          {/* Line + Animated Orb */}
          <div className="relative h-[2px] w-24 bg-slate-300 rounded-full overflow-hidden">
            {orbStep === 0 && (
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 
                           w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,200,255,0.7)]"
                initial={{ x: 0 }}
                animate={{ x: 96 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={() => setOrbStep(1)}
              />
            )}
          </div>

          {/* Relay Logo */}
          <img src="/Images/relay.png" alt="Relay Logo" className="h-10 w-auto" />

          {/* Line + Animated Orb */}
          <div className="relative h-[2px] w-24 bg-slate-300 rounded-full overflow-hidden">
            {orbStep === 1 && (
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2
                           w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,200,255,0.7)]"
                initial={{ x: 0 }}
                animate={{ x: 96 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={() => setOrbStep(2)}
              />
            )}
          </div>

          {/* Routing Layer */}
          <div className="flex flex-col items-center">
            <img src="/Images/swivel.png" alt="Routing Layer" className="h-16 w-auto" />
            <p className="text-sm mt-2 font-medium text-[#0A0F2C]">Routing Layer</p>
          </div>

          {/* Line + Animated Orb */}
          <div className="relative h-[2px] w-24 bg-slate-300 rounded-full overflow-hidden">
            {orbStep === 2 && (
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 
                           w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,200,255,0.7)]"
                initial={{ x: 0 }}
                animate={{ x: 96 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={() => setOrbStep(0)}
              />
            )}
          </div>

          {/* Providers */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium">Providers</p>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center gap-10">
          <p className="text-lg font-medium">Clients</p>
          <img src="/Images/relay.png" className="h-8 w-auto" />
          <div className="flex flex-col items-center">
            <img src="/Images/clean_swivel.png" className="h-14 w-auto" />
            <p className="text-sm mt-1">Routing Layer</p>
          </div>
          <p className="text-lg font-medium">Providers</p>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Results flow back from providers to clients through the same pipeline.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: "/Assets/bsfillcreditcard2frontfill.png",
            title: "No wallets or tokens",
            text: "Relay enables full enterprise compute with fiat billing."
          },
          {
            icon: "/Assets/madashboardcustomize.png",
            title: "Unified usage dashboard",
            text: "Clean analytics, logs and tracking in one interface."
          },
          {
            icon: "/Assets/bsplugin.png",
            title: "Drop-in integration",
            text: "Works with existing workflows without rewrites."
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                            bg-gradient-to-br from-[#0A84FF] to-[#00C6FF]">
              <img src={card.icon} className="w-6 h-6 object-contain" />
            </div>

            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-[#475569] leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="https://relay.opengpu.network/"
          className="px-12 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00C6FF]
                     text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition"
        >
          Request access to Relay →
        </a>
      </div>
    </section>



 {/* BLOCKCHAIN SECTION — CLEAN ENTERPRISE OGPU STYLE */}
<section
  id="blockchain"
  className="relative w-full bg-[#040814] py-12 md:py-24 px-6 text-white overflow-hidden"
>

  {/* BACKGROUND CYAN MIST */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px]
                    rounded-full bg-[radial-gradient(circle_at_center,rgba(0,233,255,0.35),transparent_70%)]
                    blur-3xl opacity-70" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

    {/* HEADER */}
    <h2 className="text-3xl md:text-5xl font-semibold text-center mb-3 md:mb-4 leading-tight">
      The OGPU Blockchain
    </h2>

    {/* Verified Pill */}
    <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                    bg-[#00E9FF]/10 border border-[#00E9FF]/30 backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-[#00E9FF] shadow-[0_0_8px_rgba(0,233,255,1)] animate-ping"></span>
      <span className="text-[#00E9FF] text-xs font-semibold tracking-wide uppercase">
        Chain Verified
      </span>
    </div>

    <p className="text-base md:text-lg text-gray-300 max-w-3xl text-center leading-relaxed mb-10 md:mb-14">
      A high-throughput, compute-optimized blockchain purpose-built for routing, verifying and
      settling GPU workloads. Sub-second blocks, parallel execution and task-based settlement.
    </p>

    {/* MAIN GRID ROW */}
    <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-10 md:gap-14 items-center w-full mb-12 md:mb-16">

      {/* LEFT — BLOCK GRID */}
      <div className="w-full">
        <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-3xl 
                        border border-[#00E9FF]/30 bg-[#030914]
                        shadow-[0_0_60px_rgba(0,233,255,0.35)] px-6 py-8">

          <div className="grid grid-cols-10 sm:grid-cols-14 gap-2.5">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 rounded-md bg-[#00E9FF]/20 border border-[#00E9FF]/30"
                animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.15, 1] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: (i % 20) * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Block Grid Label */}
          <div className="mt-6 flex items-center justify-between text-xs text-[#00E9FF]/90">
            <span className="uppercase tracking-wider">
              Parallel task blocks
            </span>

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E9FF] shadow-[0_0_12px_rgba(0,233,255,0.9)]" />
              <span className="tracking-wider">Live verification</span>
            </span>
          </div>
        </div>

        <p className="text-gray-300 text-xs sm:text-sm tracking-wider uppercase text-center mt-6">
          Around ten thousand tasks per second visualized
        </p>
      </div>

      {/* RIGHT — EXPLANATION */}
      <div className="space-y-5 md:space-y-6">
        <p className="text-xs font-semibold tracking-widest text-[#00E9FF] uppercase">
          Purpose-built L1
        </p>

        <h3 className="text-lg md:text-2xl font-semibold">
          A blockchain engineered for compute, not speculation.
        </h3>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Every transaction carries workload metadata, provider updates and verification proofs.
          Consensus and routing are tightly coupled so the chain keeps up with real-time task flow.
        </p>

        {/* Sub-Features */}
        <div className="space-y-4">

          {/* Feature 1 */}
          <div className="flex items-start gap-3">
            <div className="mt-1 w-7 h-7 rounded-full bg-[#00E9FF]/10 flex items-center justify-center border border-[#00E9FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E9FF]" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1 text-white">EVM Compatible</p>
              <p className="text-sm text-gray-300">
                Use existing tooling while targeting a chain optimized for task-level execution.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3">
            <div className="mt-1 w-7 h-7 rounded-full bg-[#00E9FF]/10 flex items-center justify-center border border-[#00E9FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E9FF]" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1 text-white">Proof of Execution</p>
              <p className="text-sm text-gray-300">
                Tasks are validated, verified and settled automatically on-chain.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* PIPELINE BAR */}
    <div className="w-full max-w-5xl mb-12 md:mb-16">
      <div className="w-full bg-[#00E9FF]/10 border border-[#00E9FF]/30 rounded-2xl px-6 md:px-8 py-6 md:py-7 
                      shadow-[0_20px_60px_rgba(0,233,255,0.25)]">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-left">
            <p className="text-xs font-semibold tracking-widest text-[#00E9FF] uppercase mb-1 md:mb-2">
              On-chain verification pipeline
            </p>
            <p className="text-sm text-gray-300 max-w-md">
              Submit, route, execute, verify and settle — engineered as a unified compute workflow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-white/90">
            {["Submit", "Route", "Execute", "Verify", "Settle"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E9FF] shadow-[0_0_8px_rgba(0,233,255,1)]" />
                  <span>{step}</span>
                </div>

                {i < arr.length - 1 && (
                  <motion.span
                    className="text-[#00E9FF]/70"
                    animate={{ x: [0, 4, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  >
                    →
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* CTA ROW */}
    <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6">
      <p className="text-sm md:text-base text-gray-300 text-center md:text-left max-w-xl">
        Millions of compute tasks verified on mainnet. Explore live execution on OGPU Scan.
      </p>

      <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
        <a
          href="https://ogpuscan.io/"
          className="px-7 py-3 rounded-xl font-semibold text-sm md:text-base bg-white text-[#020617]
                     shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] transition"
        >
          View OGPU Scan
        </a>

        <a
          href="/blockchain"
          className="px-7 py-3 rounded-xl font-semibold text-sm md:text-base 
                     border border-[#00E9FF]/50 text-[#00E9FF] hover:bg-[#00E9FF]/10 transition"
        >
          Learn about the chain
        </a>
      </div>
    </div>

    <p className="text-xs md:text-sm text-gray-400 mt-6 md:mt-8 tracking-widest uppercase text-center">
      Real workloads. Real verification. Real settlement.
    </p>
  </div>
</section>



{/* ================= SECTION: BUILT FOR EVERYONE ================= */}
<section
  id="built-for-everyone"
  className="relative w-full bg-[#F7F9FC] py-12 md:py-24 px-6 overflow-hidden"
>

  {/* BACKGROUND MESH */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.12] z-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7CA9D9]" preserveAspectRatio="none">
      <defs>
        <pattern id="mesh" width="160" height="160" patternUnits="userSpaceOnUse">
          <path d="M0 0 L160 160 M160 0 L0 160" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh)" />
    </svg>
  </div>

  {/* INTRO LINE */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.4 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="relative z-10 text-center mb-8 md:mb-10"
  >
    <h3 className="text-2xl md:text-4xl font-semibold leading-snug
                   bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                   bg-clip-text text-transparent">
      Now let us show who it unlocks value for.
    </h3>
  </motion.div>

  {/* HEADER */}
  <div className="relative z-10 max-w-6xl mx-auto text-center mb-8 md:mb-12">
    <h2 className="text-3xl md:text-5xl font-semibold text-[#0A0F2C] leading-tight mb-3">
      Built for everyone.
    </h2>

    <p className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed">
      A network where everyone can build, contribute and benefit. Developers run models,
      enterprises migrate workloads, researchers scale experiments and providers earn
      from compute. OGPU is the connective layer powering them all.
    </p>
  </div>

  {/* ROLES */}
  <div className="relative z-10 max-w-5xl mx-auto mb-10 md:mb-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">

      {[
        { title: "Developers", text: "Run or experiment instantly without provisioning or DevOps." },
        { title: "Enterprises", text: "Migrate compute seamlessly and reduce operational cost." },
        { title: "Researchers", text: "Scale experiments and simulations without GPU wait times." },
        { title: "GPU providers", text: "Earn per task with on-chain verification." }
      ].map((role, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-5 h-5 mb-4 rounded-full bg-[#00C6FF] shadow-[0_0_18px_rgba(0,198,255,0.4)]" />
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">{role.title}</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            {role.text}
          </p>
        </motion.div>
      ))}

    </div>
  </div>

  {/* TAGLINE */}
  <p className="relative z-10 text-xs md:text-sm text-[#0F172A] font-medium tracking-wide text-center mb-10 md:mb-12">
    The OGPU ecosystem connects everyone through a single global compute network.
  </p>

  {/* CTA BLOCKS */}
  <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* LEFT */}
    <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold text-[#0A0F2C] mb-3">Explore the OGPU ecosystem</h3>
      <p className="text-sm md:text-base text-[#475569] mb-4 md:mb-5">
        Discover workloads, tools, dashboards and infrastructure powering the network.
      </p>
      <a
        href="https://management.opengpu.network/dashboard"
        className="inline-block px-8 py-3 rounded-xl font-semibold text-white
                   bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                   shadow-[0_10px_30px_rgba(0,160,255,0.35)] hover:opacity-95 transition"
      >
        Explore ecosystem →
      </a>
    </div>

    {/* RIGHT */}
    <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold text-[#0A0F2C] mb-3">Join the OGPU community</h3>
      <p className="text-sm md:text-base text-[#475569] mb-5 md:mb-6">
        Be part of a global ecosystem shaping decentralized compute.
      </p>

      <a
        href="https://t.me/opengpu_network"
        className="inline-block px-8 py-3 rounded-xl font-semibold text-white
                   bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                   shadow-[0_10px_30px_rgba(0,160,255,0.35)] hover:opacity-95 transition mb-5 md:mb-6"
      >
        Join Telegram →
      </a>

      {/* SOCIAL ICONS */}
      <div className="grid grid-cols-7 gap-4">
        {[
          "/Assets/x.png",
          "/Assets/telegram.png",
          "/Assets/discord.png",
          "/Assets/tiktok.png",
          "/Assets/linkedin.png",
          "/Assets/instagram.png",
          "/Assets/youtube.png"
        ].map((icon, i) => (
          <a key={i} href="#" className="flex justify-center">
            <img src={icon} className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
          </a>
        ))}
      </div>
    </div>

  </div>

</section>





{/* ================= NEWSROOM SECTION ================= */}
<section
  id="news"
  className="w-full bg-white py-20 md:py-24 px-6 relative overflow-hidden"
>

  {/* Soft light-mesh background */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('/Images/ogpu-grid-light.png')] bg-cover bg-center" />

  <div className="relative max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-10 md:mb-12 text-center">
      <span className="text-xs font-semibold tracking-[0.18em] text-[#00C6FF] uppercase">
        Latest Updates
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-[#0A0F2C] mt-3 leading-tight">
        News and momentum across AI and decentralized compute
      </h2>

      <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mt-5 leading-relaxed">
        Progress across the OGPU Network including launches, enterprise integrations, 
        infrastructure updates and verified DePIN activity.
      </p>
    </div>

    {/* FEATURED ARTICLE */}
    <div
      className="
        w-full rounded-2xl overflow-hidden mb-16
        bg-gradient-to-br from-[#0A0F2C] to-[#071427]
        border border-black/10 shadow-lg
        flex flex-col md:flex-row
      "
    >

      {/* Image */}
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-[560px] h-[320px] rounded-xl overflow-hidden bg-[#0F1C3A]/40">
          <img
            src="/Images/News/featured.png"
            alt="Featured update"
            className="w-full h-full object-cover opacity-95"
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 p-8 md:p-10 text-white flex flex-col justify-center">

        <p className="text-xs tracking-wide text-sky-300 font-semibold mb-2">
          FEATURED · OGPU UPDATE · DEC 2025
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
          OGPU launches new global website built for full enterprise adoption
        </h3>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          The redesigned OGPU platform site introduces a unified enterprise experience 
          with structured routing documentation, Relay gateway visibility, real-time insights 
          and a modular architecture built for scale.
        </p>

      </div>
    </div>

    {/* NEWS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          tag: "Press",
          date: "Oct 22, 2025",
          source: "EIN Presswire",
          title: "OGPU Network Announces Continued Development",
          img: "https://img.einpresswire.com/large/977777/ogpu-network-from-hash-to-compu.jpeg",
          link: "https://www.einpresswire.com/article/860150175/ogpu-network-announces-continued-development-of-decentralized-gpu-compute-infrastructure-amid-growing-ai-demand"
        },
        {
          tag: "Event",
          date: "Nov 18–19, 2025",
          source: "Function 1 Dubai",
          title: "OGPU Featured at Function 1, Dubai",
          img: "https://opengpu.network/image/twitter/dubai-event.png",
          link: "https://fnctn1.com/"
        },
        {
          tag: "Partnership",
          date: "Nov 17, 2025",
          source: "Update",
          title: "OGPU x Nosana Partnership Goes Live",
          img: "https://opengpu.network/image/twitter/OGPU-Nosana.png",
          link: "https://x.com/fatih_ogpu/status/1974115869392240896"
        }
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.45, delay: i * 0.12 }}
          whileHover={{ y: -4 }}
          className="
            rounded-2xl bg-white border border-slate-200 shadow-lg
            overflow-hidden cursor-pointer transition
          "
        >
          {/* Thumbnail */}
          <div className="h-40 bg-gray-100 overflow-hidden">
            <img
              src={card.img}
              className="w-full h-full object-cover"
              alt={card.title}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <span className="inline-block px-3 py-1 mb-3 text-[11px] font-semibold rounded-full bg-[#E6F6FF] text-[#007ACC]">
              {card.tag}
            </span>

            <p className="text-xs text-[#6B7280] mb-1">
              {card.source} · {card.date}
            </p>

            <h4 className="text-lg font-semibold text-[#0A0F2C] leading-snug mb-3">
              {card.title}
            </h4>

            <a
              className="text-sm text-[#2563EB] font-medium hover:underline"
              href={card.link}
              target="_blank"
              rel="noreferrer"
            >
              Learn more →
            </a>
          </div>
        </motion.div>
      ))}
    </div>

    
  </div>
   <div className="mt-20 md:mt-20"></div>

</section>

    <footer className="relative w-full bg-[#050B18] text-white pt-32 pb-14 px-6 mt-0">
  

{/* CTA BANNER (Enterprise on top, Get Started underneath — MOBILE FIXED) */}
<div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 md:px-6">
  <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
    <div className="relative px-6 py-6 md:px-20 md:py-8 bg-gradient-to-r from-[#071426] via-[#0A2A4A] to-[#0B3C66] text-white">

      {/* Soft Glows */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-28 right-10 w-[350px] h-[350px] bg-cyan-400/30 blur-[120px]" />
        <div className="absolute -bottom-24 left-6 w-[280px] h-[280px] bg-blue-500/20 blur-[120px]" />
      </div>

      {/* MAIN CTA ROW */}
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">

        {/* LEFT BLOCK */}
        <div className="max-w-xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3">
            Benchmark OGPU against any cloud.
          </h3>
          <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
            Measure inference or training workloads on distributed GPUs with instant elasticity and real-world performance.
          </p>
        </div>

        {/* RIGHT BLOCK — BUTTONS */}
        <div className="w-full md:w-auto flex flex-col gap-3 md:items-end">

          {/* MOBILE VERSION (side-by-side, smaller, right aligned) */}
          <div className="flex md:hidden w-full justify-end gap-3">

            <a
              href="/enterprisehome"
              className="w-[48%] px-4 py-3 rounded-lg bg-white text-[#0A0F2C] 
                         font-semibold text-xs shadow-[0_6px_16px_rgba(255,255,255,0.25)]
                         text-center"
            >
              Enterprise →
            </a>

            <a
              href="/getstarted"
              className="w-[48%] px-4 py-3 rounded-lg bg-[#FFFFFF] text-[#001221] 
                         font-semibold text-xs shadow-[0_6px_16px_rgba(0,198,255,0.30)]
                         text-center"
            >
              Get Started →
            </a>

          </div>

          {/* DESKTOP VERSION (unchanged, stacked) */}
          <div className="hidden md:flex flex-col items-end gap-3">

            <a
              href="/enterprisehome"
              className="px-8 py-4 rounded-xl bg-white text-[#0A0F2C] 
                         font-semibold text-base md:text-lg shadow-[0_6px_20px_rgba(255,255,255,0.3)] 
                         hover:shadow-[0_10px_28px_rgba(255,255,255,0.45)]
                         transition-all text-center"
            >
              Run an Enterprise Pilot →
            </a>

            <a
              href="/getstarted"
              className="px-8 py-4 rounded-xl bg-[#FFFFFF] text-[#001221] 
                         font-semibold text-base md:text-lg shadow-[0_6px_20px_rgba(0,198,255,0.35)] 
                         hover:shadow-[0_10px_26px_rgba(0,198,255,0.45)]
                         transition-all text-center"
            >
              Get Started →
            </a>

          </div>

        </div>
      </div>

     <FooterSubscribe />

        <p className="text-[10px] text-white/45 mt-1">
        </p>
      </div>

    </div>
  </div>

 {/* ========================================================= */}
{/* SNOWFLAKE-STYLE GRID */}
{/* ========================================================= */}

<div className="
  max-w-7xl mx-auto mt-36 
  grid 
  grid-cols-2     /* MOBILE: Two columns (like Snowflake) */
  md:grid-cols-5  /* DESKTOP: five columns */
  gap-10 
  md:gap-16
">

{/* COLUMN 1 — LOGO + SUMMARY (Left aligned on all screens) */}
<div className="col-span-2 md:col-span-1">
  <img
  src="/Images/OGPU-LOGO-Main-final.png"
  alt="OGPU Logo"
  className="h-14 w-auto mb-4 mt-4 md:mt-0 opacity-95"
/>

  <p className="text-white/55 text-xs leading-relaxed max-w-sm text-left">
    A global decentralized GPU network for AI inference, training,
    rendering and high-performance workloads routed across global providers.
  </p>
</div>


  {/* DEVELOPERS */}
  <div>
    <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
      Developers
    </h4>
    <ul className="space-y-2 text-white/70 text-xs">
      <li><a href="https://opengpu.network/docs/litepaper.pdf" className="hover:text-white transition">Litepaper</a></li>
      <li><a href="https://opengpu.network/docs/whitepaper.pdf" className="hover:text-white transition">Whitepaper</a></li>
      <li><a href="https://opengpu.network/docs/pitch-deck.pdf" className="hover:text-white transition">Pitch Deck</a></li>
      <li><a href="https://academy.opengpu.network/" className="hover:text-white transition">Academy</a></li>
      <li><a href="https://opengpu.network/about/discover/media-kit/logo" className="hover:text-white transition">Media Kit</a></li>
    </ul>
  </div>

  {/* PRODUCTS */}
  <div>
    <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
      Products
    </h4>
    <ul className="space-y-2 text-white/70 text-xs">
      <li><a href="https://client.opengpu.network/" className="hover:text-white transition">Client App</a></li>
      <li><a href="https://chat.opengpu.network/" className="hover:text-white transition">OpenChat</a></li>
      <li><a href="https://opengpu.network/faucet" className="hover:text-white transition">Faucet</a></li>
      <li><a href="https://opengpu.network/docs/orc20" className="hover:text-white transition">ORC-20</a></li>
    </ul>
  </div>

  {/* ECOSYSTEM */}
  <div>
    <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
      Ecosystem
    </h4>
    <ul className="space-y-2 text-white/70 text-xs">
      <li><a href="/blockchain" className="hover:text-white transition">Blockchain</a></li>
      <li><a href="https://dapps.opengpu.network/" className="hover:text-white transition">Token Creator</a></li>
      <li><a href="https://dapps.opengpu.network/multisender" className="hover:text-white transition">Multisender</a></li>
      <li><a href="https://ogpuscan.io" className="hover:text-white transition">Explorer</a></li>
    </ul>
  </div>

  {/* COMMUNITY */}
  <div>
    <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
      Community
    </h4>
    <ul className="space-y-2 text-white/70 text-xs">
      <li><a href="https://t.me/OpenGPUNetwork" className="hover:text-white transition">Telegram</a></li>
      <li><a href="https://discord.gg/opengpu" className="hover:text-white transition">Discord</a></li>
      <li><a href="https://coinmarketcap.com" className="hover:text-white transition">CMC</a></li>
      <li><a href="https://www.mexc.com" className="hover:text-white transition">MEXC</a></li>
      <li><a href="https://www.gate.io" className="hover:text-white transition">Gate.io</a></li>
      <li><a href="https://certik.com" className="hover:text-white transition">Certik</a></li>
    </ul>
  </div>

</div>


      {/* ========================================================= */}
      {/* BOTTOM BAR */}
      {/* ========================================================= */}

      <div className="max-w-7xl mx-auto mt-12 border-t border-white/10 pt-6 
                      flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/45">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img
            src="/Images/OGPU-LOGO-Main-final.png"
            className="h-9 opacity-90"
            alt="OGPU Logo"
          />
          <span>© {new Date().getFullYear()} OGPU Network. All rights reserved.</span>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap gap-5 text-white/45">
          <a href="https://opengpu.network/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
          <a href="https://opengpu.network/cookies-policy" className="hover:text-white transition">Cookie Policy</a>
          <a href="https://opengpu.network/user-agreement" className="hover:text-white transition">User Agreement</a>
          <a href="https://opengpu.network/docs/legal-disclaimer.pdf" className="hover:text-white transition">Legal Disclaimer</a>
          <a href="https://linkedin.com/company/opengpu" className="hover:text-white transition">LinkedIn</a>
          <a href="https://medium.com/@ogpunetwork" className="hover:text-white transition">Medium</a>
          <a href="https://www.youtube.com/@opengpunetwork" className="hover:text-white transition">YouTube</a>
          <a href="https://instagram.com/opengpunetwork" className="hover:text-white transition">Instagram</a>
        </div>

      </div>

    </footer>

{/* MOBILE QUICK NAV */}
<div className="fixed bottom-0 left-0 w-full z-[999] md:hidden 
                bg-[#000814]/95 backdrop-blur-xl border-t border-white/10">

  <div className="flex justify-around py-2 px-2 text-[12px] text-gray-200">

    {/* Quick Start */}
    <a href="#quickstart" className="flex flex-col items-center hover:text-white">
      <img
    src="/Images/Nav/Quick/quick.png"
    alt="Quick Nav Icon"
    className="w-6 h-6 mb-1 opacity-90"
    />
      <span className="text-[10px]">Quick</span>
    </a>

    {/* How It Works */}
 <a href="#how-ogpu-works" className="flex flex-col items-center hover:text-white transition">
  <img
    src="/Images/Nav/Platform/how_ogpu_works.png"
    alt="How OGPU Works Icon"
    className="w-6 h-6 mb-1 opacity-90"
  />
  <span className="text-[10px]">How</span>
</a>

    {/* AI Workloads */}
<a href="#workloads" className="flex flex-col items-center hover:text-white transition">
  <img
    src="/Images/Nav/Solutions/ai-workloads.png"
    alt="AI Workloads Icon"
    className="w-6 h-6 mb-1 opacity-90"
  />
  <span className="text-[10px]">AI</span>
</a>


   {/* Relay */}
<a href="#relay" className="flex flex-col items-center hover:text-white transition">
  <img
    src="/Images/Nav/Solutions/relay.png"
    alt="Relay Icon"
    className="w-6 h-6 mb-1 opacity-90"
  />
  <span className="text-[10px]">Relay</span>
</a>


    {/* News */}
    <a href="#news" className="flex flex-col items-center text-white">
    <img src="/Images/Nav/Quick/news.png"
    alt="News Icon"
    className="w-6 h-6 mb-1 opacity-90"
    />
      <span className="text-[10px]">News</span>
    </a>

      {/* Back To The Top */}
    <a href="#hero" className="flex flex-col items-center text-white">
      <img src="/Images/Nav/Quick/top.png"
    alt="Back To The Top Icon"
    className="w-6 h-6 mb-1 opacity-90"
    />
      <span className="text-[10px]">Top</span>
    </a>


  </div>
</div>


    </main>
  );
}
