"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import LiveStats from "./components/LiveStats";
import SafeInput from "./components/SafeInput";
import PricingComparator from "./components/PricingComparator";
import Livetransactions from "./components/Livetransactions";



export default function Page() {

  // ORB WORKFLOW STATE
  const [orbStep, setOrbStep] = useState(0);

  // GLOBAL ANIMATION CONTROLS
  const controls = useAnimation();

  // General fade-in variant used throughout the page
  const fadeIn = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  // Hero opacity (your existing logic kept)
  const [heroOpacity, setHeroOpacity] = useState(1);


 // NAV STATE
const [openMenu, setOpenMenu] = React.useState<string | null>(null);
const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

let hoverTimeout: NodeJS.Timeout | null = null;

const open = (menu: string) => {
  if (hoverTimeout) clearTimeout(hoverTimeout);
  setOpenMenu(menu);
};

const close = () => {
  hoverTimeout = setTimeout(() => {
    setOpenMenu(null);
  }, 150); // small delay prevents accidental close
};
  


  

  // Smooth scroll fade logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const fadeStart = 200;   
      const fadeEnd = 900;     

      if (scrollY < fadeStart) {
        setHeroOpacity(1);
      } else if (scrollY > fadeEnd) {
        setHeroOpacity(0.45);
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setHeroOpacity(1 - progress * 0.55);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseLogos = [
    { src: "/Images/nosana.png", alt: "Nosana" },
    { src: "/Images/lena.png", alt: "Lena AI" },
    { src: "/Images/ozak.png", alt: "Ozak AI" }
  ];

  const logos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 28,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <main className="relative w-full bg-[#040814] text-white">

      {/* HERO SECTION */}
      <section id="hero" 
      className="relative w-full min-h-screen">
        {/* Background Video + Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            src="/Videos/MAIN-loop.mp4"
            poster="/Images/hero-poster.jpg"
            style={{
              WebkitUserSelect: "none",
              WebkitTouchCallout: "none",
              WebkitTapHighlightColor: "transparent"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75 pointer-events-none" />
        </div>

{/* FIXED HEADER — CTA = GET STARTED */}
<header className="fixed top-0 left-0 w-full z-[999]">
  <nav className="w-full flex items-center justify-between px-4 md:px-20 py-3 
                  bg-[#00040F]/70 backdrop-blur-xl border-b border-[#0A84FF]/40">

    {/* LOGO */}
    <a href="/" className="relative z-[1000] bg-transparent">
      <img
        src="/Images/OGPU-LOGO-Main-final.png"
        alt="OGPU Logo"
        className="h-10 w-auto md:h-16"
        style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}
      />
    </a>

    {/* DESKTOP NAV */}
    <div className="hidden lg:flex items-center gap-6 text-sm text-gray-200 font-medium">

      {/* ===== PLATFORM ===== */}
      <div
        className="relative"
        onMouseEnter={() => open("platform")}
        onMouseLeave={() => close()}
      >
        <button
          className={`px-2 py-1 flex items-center gap-1 transition ${
            openMenu === "platform" ? "text-white" : "hover:text-white"
          }`}
        >
          Platform <span className="text-[10px] mt-[2px]">▾</span>
        </button>

        {/* PLATFORM DROPDOWN */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl 
                      bg-[#020617] border border-white/10 shadow-xl p-6 flex flex-col gap-6 z-[999]
                      transition-all duration-200
                      ${openMenu === "platform" ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div className="flex gap-8">
            {/* LEFT */}
            <div className="w-1/2 flex flex-col">
              <h3 className="text-white text-lg font-semibold mb-2">The OGPU Platform</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The routing layer for decentralized AI compute. Explore global workload movement.
              </p>
            </div>

            {/* RIGHT GRID */}
            <div className="w-1/2 grid grid-cols-1 gap-4">
              {/* OGPU Protocol */}
              <a href="/protocol" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">📘</div>
                <div>
                  <p className="text-white text-sm font-semibold">OGPU Protocol</p>
                  <p className="text-gray-400 text-xs">Smart contract architecture.</p>
                </div>
              </a>

              {/* Why OGPU */}
              <a href="/whyogpu" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">❓</div>
                <div>
                  <p className="text-white text-sm font-semibold">Why OGPU</p>
                  <p className="text-gray-400 text-xs">What makes OGPU different.</p>
                </div>
              </a>

              {/* How OGPU Works */}
              <a href="/howogpuworks" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">🧩</div>
                <div>
                  <p className="text-white text-sm font-semibold">How OGPU Works</p>
                  <p className="text-gray-400 text-xs">Routing, marketplace, verification.</p>
                </div>
              </a>

              {/* Live Network Stats */}
              <a href="https://ogpuscan.io" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">📊</div>
                <div>
                  <p className="text-white text-sm font-semibold">Live Network Stats</p>
                  <p className="text-gray-400 text-xs">Tasks, nodes, performance.</p>
                </div>
              </a>

              {/* Competitions */}
              <a href="/competitions" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">🏆</div>
                <div>
                  <p className="text-white text-sm font-semibold">Competitions</p>
                  <p className="text-gray-400 text-xs">Challenges and rewards.</p>
                </div>
              </a>
            </div>
          </div>

          {/* ACCELERATION CENTER COLLAPSIBLE */}
          <div className="border-t border-white/10 pt-4 mt-2">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-white text-sm font-semibold">Acceleration Center</span>
                <span className="text-gray-400 text-xs group-open:rotate-90 transition">
                  ▸
                </span>
              </summary>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {/* Acceleration */}
                <a
                  href="https://opengpu.network/acceleration"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                >
                  <div className="text-[#00E9FF] text-xl">🚀</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Acceleration Program</p>
                    <p className="text-gray-400 text-xs">
                      $200K program to fuel Web3 and AI innovation.
                    </p>
                  </div>
                </a>

                {/* TakoSwap */}
                <a
                  href="https://takoswap.app/"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                >
                  <div className="text-[#00E9FF] text-xl">🐙</div>
                  <div>
                    <p className="text-white text-sm font-semibold">TakoSwap</p>
                    <p className="text-gray-400 text-xs">
                      Swap and route OGPU ecosystem assets.
                    </p>
                  </div>
                </a>

                {/* Opensale */}
                <a
                  href="https://opengpu.network/opensale"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                >
                  <div className="text-[#00E9FF] text-xl">🪙</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Opensale</p>
                    <p className="text-gray-400 text-xs">
                      Token launches and primary sales.
                    </p>
                  </div>
                </a>

                {/* Bridge X */}
                <a
                  href="https://opengpu.network/bridgex"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                >
                  <div className="text-[#00E9FF] text-xl">🌉</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Bridge X</p>
                    <p className="text-gray-400 text-xs">
                      Cross chain liquidity and routing.
                    </p>
                  </div>
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* ===== SOLUTIONS ===== */}
      <div className="relative group/nav">
        <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
          Solutions <span className="text-[10px] mt-[2px]">▾</span>
        </button>

        {/* DROPDOWN */}
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-3 w-[900px] rounded-2xl bg-[#020617]
                     border border-white/10 shadow-xl p-7 opacity-0 invisible
                     group-hover/nav:opacity-100 group-hover/nav:visible
                     transition-all duration-200 flex flex-col gap-10 z-[999]"
        >
          {/* TITLE + DESCRIPTION */}
          <div className="flex gap-10">
            <div className="w-[30%] flex flex-col">
              <h3 className="text-white text-xl font-bold mb-3">Solutions for Every Use Case</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Route AI workloads globally with redundancy and scale.
              </p>
            </div>

            {/* RIGHT SIDE: THREE COLUMNS */}
            <div className="flex-1 grid grid-cols-3 gap-8">

              {/* COLUMN 1 — AI SOLUTIONS */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-400 font-semibold text-sm mb-2">AI Solutions</h4>

                <a href="/aicompanies" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">⚡</div>
                  <div>
                    <p className="text-white text-sm font-semibold">AI Companies</p>
                    <p className="text-gray-400 text-xs">Inference and fine tuning.</p>
                  </div>
                </a>

                <a href="/workloads" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">⚙️</div>
                  <div>
                    <p className="text-white text-sm font-semibold">AI Workloads</p>
                    <p className="text-gray-400 text-xs">Training, inference, simulation.</p>
                  </div>
                </a>

                <a href="/agents" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🤖</div>
                  <div>
                    <p className="text-white text-sm font-semibold">AI Agents</p>
                    <p className="text-gray-400 text-xs">Intelligent automation.</p>
                  </div>
                </a>
              </div>

              {/* COLUMN 2 — INFRASTRUCTURE */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-400 font-semibold text-sm mb-2">Infrastructure</h4>

                <a href="/enterprisehome" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🏢</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Enterprise Pilot</p>
                    <p className="text-gray-400 text-xs">Route workloads globally.</p>
                  </div>
                </a>

                <a href="/provider" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🖥️</div>
                  <div>
                    <p className="text-white text-sm font-semibold">GPU Providers</p>
                    <p className="text-gray-400 text-xs">Earn per task.</p>
                  </div>
                </a>

                <a href="/relay" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🔌</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Relay Gateway</p>
                    <p className="text-gray-400 text-xs">Fiat on ramp for enterprise.</p>
                  </div>
                </a>
              </div>

              {/* COLUMN 3 — BLOCKCHAIN */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-400 font-semibold text-sm mb-2">Blockchain</h4>

                <a href="/blockchain" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">⛓️</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Blockchain Main</p>
                    <p className="text-gray-400 text-xs">High throughput L1.</p>
                  </div>
                </a>

                <a href="/provider-suite" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🚰</div>
                  <div>
                    <p className="text-white text-sm font-semibold">OGPU Faucet</p>
                    <p className="text-gray-400 text-xs">Claim $ToGPU.</p>
                  </div>
                </a>

                <a href="/provider-suite" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🧪</div>
                  <div>
                    <p className="text-white text-sm font-semibold">OGPU Testnet</p>
                    <p className="text-gray-400 text-xs">Developer sandbox.</p>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* dApps COLLAPSIBLE — ALWAYS AT BOTTOM */}
          <div className="border-t border-white/10 pt-5">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-white text-sm font-semibold">dApps</span>
                <span className="text-gray-400 text-xs group-open:rotate-90 transition">▸</span>
              </summary>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <a href="https://nft.opengpu.network/"
                   className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col">
                  <span className="text-[#00E9FF] text-lg">🎨</span>
                  <span className="text-xs text-gray-300">Open NFT</span>
                </a>

                <a href="https://dapps.opengpu.network/token-creator"
                   className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col">
                  <span className="text-[#00E9FF] text-lg">🪙</span>
                  <span className="text-xs text-gray-300">Token Creator</span>
                </a>

                <a href="/buy"
                   className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col">
                  <span className="text-[#00E9FF] text-lg">💳</span>
                  <span className="text-xs text-gray-300">Buy OGPU</span>
                </a>

                <a href="/dashboard"
                   className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col">
                  <span className="text-[#00E9FF] text-lg">📤</span>
                  <span className="text-xs text-gray-300">Multisender</span>
                </a>

                <a href="/provider-suite"
                   className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col">
                  <span className="text-[#00E9FF] text-lg">🧪</span>
                  <span className="text-xs text-gray-300">Testnet</span>
                </a>

                <a href="/provider-suite"
                   className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col">
                  <span className="text-[#00E9FF] text-lg">🚰</span>
                  <span className="text-xs text-gray-300">Faucet</span>
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* ===== INDUSTRIES ===== */}
      <div className="relative group/nav">
        <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
          Industries <span className="text-[10px] mt-[2px]">▾</span>
        </button>

        <div
          className="absolute left-1/2 -translate-x-1/2 mt-3 w-[880px] rounded-2xl bg-[#020617]
                     border border-white/10 shadow-xl p-7 opacity-0 invisible
                     group-hover/nav:opacity-100 group-hover/nav:visible
                     transition-all duration-200 flex flex-col gap-8 z-[999]"
        >
          <div className="flex gap-10">
            {/* LEFT SUMMARY */}
            <div className="w-[30%] flex flex-col">
              <h3 className="text-white text-xl font-bold mb-3">Industries we power</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Use OGPU for AI, rendering, research, video, crypto, and more.
              </p>
            </div>

            {/* RIGHT TWO COLUMNS */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {/* AI & ML */}
              <a href="/industries" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition">
                <p className="text-white text-sm font-semibold">AI and Machine Learning</p>
                <p className="text-gray-400 text-xs">
                  Train, fine tune, and serve AI models on global GPUs.
                </p>
              </a>

              {/* Rendering & VFX */}
              <a href="/industries" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition">
                <p className="text-white text-sm font-semibold">Rendering and Visual Effects</p>
                <p className="text-gray-400 text-xs">
                  High quality 3D rendering, CGI, and asset generation.
                </p>
              </a>

              {/* Scientific Computing */}
              <a href="/industries" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition">
                <p className="text-white text-sm font-semibold">Scientific Computing and Research</p>
                <p className="text-gray-400 text-xs">
                  Run physics, climate, and bioinformatics simulations.
                </p>
              </a>

              {/* Developer & Educational */}
              <a href="/industries" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition">
                <p className="text-white text-sm font-semibold">Developer and Educational Use</p>
                <p className="text-gray-400 text-xs">
                  Affordable GPU access for students, indie devs, and labs.
                </p>
              </a>

              {/* Video Processing */}
              <a href="/industries" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition">
                <p className="text-white text-sm font-semibold">Video Processing</p>
                <p className="text-gray-400 text-xs">
                  Transcoding, upscaling, and AI powered video editing.
                </p>
              </a>

              {/* Blockchain & Crypto */}
              <a href="/industries" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition">
                <p className="text-white text-sm font-semibold">Blockchain and Crypto</p>
                <p className="text-gray-400 text-xs">
                  ZK proofs and decentralized compute for Web3 protocols.
                </p>
              </a>

              {/* Gaming */}
              <a href="/industries" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition">
                <p className="text-white text-sm font-semibold">Gaming</p>
                <p className="text-gray-400 text-xs">
                  GPU accelerated servers with AI powered NPCs and content.
                </p>
              </a>

              {/* Synthetic Data */}
              <a href="/industries" className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition">
                <p className="text-white text-sm font-semibold">Synthetic Data Generation</p>
                <p className="text-gray-400 text-xs">
                  Generate rich training data and simulated environments.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

{/* ===== COMPANY & NEWS ===== */}
      <div className="relative group/nav">
        <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
          Company &amp; News<span className="text-[10px] mt-[2px]">▾</span>
        </button>

        <div
          className="absolute left-1/2 -translate-x-1/2 mt-3 w-[880px] rounded-2xl 
                      bg-[#020617] border border-white/10 shadow-xl p-6 opacity-0 invisible
                      group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-[999] grid grid-cols-2 gap-8"
        >
          {/* LEFT - COMPANY */}
          <div className="w-full flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-2">About the Company</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Learn more about OGPU, mission, contributors, and history.
            </p>

            <div className="flex flex-col gap-3">
              <a href="/about" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">🏛️</div>
                <div>
                  <p className="text-white text-sm font-semibold">About OGPU</p>
                  <p className="text-gray-400 text-xs">Mission and story.</p>
                </div>
              </a>

              <a href="https://opengpu.network/team" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">👥</div>
                <div>
                  <p className="text-white text-sm font-semibold">Team</p>
                  <p className="text-gray-400 text-xs">Core contributors. (Coming soon)</p>
                </div>
              </a>

              <a href="https://opengpu.network/press" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">📰</div>
                <div>
                  <p className="text-white text-sm font-semibold">Press and Media</p>
                  <p className="text-gray-400 text-xs">Live coverage and assets.</p>
                </div>
              </a>

              <a href="https://opengpu.network/careers" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">💼</div>
                <div>
                  <p className="text-white text-sm font-semibold">Careers</p>
                  <p className="text-gray-400 text-xs">Join the mission.</p>
                </div>
              </a>

              <a href="mailto:hello@opengpu.network" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">✉️</div>
                <div>
                  <p className="text-white text-sm font-semibold">Contact</p>
                  <p className="text-gray-400 text-xs">Reach OGPU directly.</p>
                </div>
              </a>

              <a href="mailto:hello@opengpu.network" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">🖼️</div>
                <div>
                  <p className="text-white text-sm font-semibold">Media Kit</p>
                  <p className="text-gray-400 text-xs">Brand kit of OGPU.</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT - NEWS */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Latest News</h3>

            <div className="grid grid-cols-1 gap-4">
              {/* EIN */}
              <a
                href="https://www.einpresswire.com/article/860150175/ogpu-network-announces-continued-development-of-decentralized-gpu-compute-infrastructure-amid-growing-ai-demand"
                target="_blank"
                className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
              >
                <img
                  src="https://img.einpresswire.com/large/977777/ogpu-network-from-hash-to-compu.jpeg"
                  className="w-full h-24 object-cover"
                  alt="Press Release"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-semibold">
                    OGPU Network Announces Continued Development
                  </p>
                  <p className="text-gray-400 text-xs">EIN Presswire • 22 Oct, 2025</p>
                </div>
              </a>

              {/* FUNCTION1 */}
              <a
                href="https://fnctn1.com/"
                target="_blank"
                className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
              >
                <img
                  src="https://opengpu.network/image/twitter/dubai-event.png"
                  className="w-full h-24 object-cover"
                  alt="Function 1"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-semibold">
                    OGPU is heading to Function 1 Dubai!
                  </p>
                  <p className="text-gray-400 text-xs">Festival Arena • 18–19 Nov 2025</p>
                </div>
              </a>

              {/* NOSANA */}
              <a
                href="https://x.com/fatih_ogpu/status/1974115869392240896"
                target="_blank"
                className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
              >
                <img
                  src="https://opengpu.network/image/twitter/OGPU-Nosana.png"
                  className="w-full h-24 object-cover"
                  alt="OGPU x Nosana"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-semibold">OGPU x Nosana Partnership</p>
                  <p className="text-gray-400 text-xs">New GPUs now live on OGPU Network</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DOCS ===== */}
      <div className="relative group/nav">
        <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
          Docs <span className="text-[10px] mt-[2px]">▾</span>
        </button>

        {/* DOCS DROPDOWN */}
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl bg-[#020617]
                     border border-white/10 shadow-xl p-6 opacity-0 invisible
                     group-hover/nav:opacity-100 group-hover/nav:visible
                     transition-all duration-200 flex gap-10 z-[999]"
        >
          <div className="w-1/2 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-2">Documentation Hub</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Explore API references, guides, and protocol documents.
            </p>
          </div>

          <div className="w-1/2 grid grid-cols-1 gap-4">
            <a href="https://opengpu.network/docs" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
              <div className="text-[#00E9FF] text-xl">📘</div>
              <div>
                <p className="text-white text-sm font-semibold">Developer Docs</p>
                <p className="text-gray-400 text-xs">API and client SDKs.</p>
              </div>
            </a>

            <a href="https://opengpu.network/docs/whitepaper.pdf" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
              <div className="text-[#00E9FF] text-xl">📄</div>
              <div>
                <p className="text-white text-sm font-semibold">Whitepaper</p>
                <p className="text-gray-400 text-xs">Technical protocol.</p>
              </div>
            </a>

            <a href="https://opengpu.network/docs/litepaper.pdf" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
              <div className="text-[#00E9FF] text-xl">📑</div>
              <div>
                <p className="text-white text-sm font-semibold">Litepaper</p>
                <p className="text-gray-400 text-xs">High level overview.</p>
              </div>
            </a>

            <a href="https://opengpu.network/roadmap" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
              <div className="text-[#00E9FF] text-xl">🛣️</div>
              <div>
                <p className="text-white text-sm font-semibold">Roadmap</p>
                <p className="text-gray-400 text-xs">What is next.</p>
              </div>
            </a>

            <a href="https://opengpu.network/faq" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
              <div className="text-[#00E9FF] text-xl">❓</div>
              <div>
                <p className="text-white text-sm font-semibold">FAQ</p>
                <p className="text-gray-400 text-xs">Common questions.</p>
              </div>
            </a>

            <a href="https://github.com/OpenGPU-Network" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
              <div className="text-[#00E9FF] text-xl">💻</div>
              <div>
                <p className="text-white text-sm font-semibold">GitHub Repos</p>
                <p className="text-gray-400 text-xs">Clients and SDKs.</p>
              </div>
            </a>

            <a href="https://github.com/OpenGPU-Network" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
              <div className="text-[#00E9FF] text-xl">🎓</div>
              <div>
                <p className="text-white text-sm font-semibold">Academy</p>
                <p className="text-gray-400 text-xs">OGPU Academy.</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      

      {/* MAIN-PAGE CTA */}
      <a
        href="/getstarted"
        className="
          ml-2 px-8 py-3 rounded-xl font-semibold text-white text-sm
          bg-[#00C6E6] border-[2px] border-[#00C6E6]/80
          transition-all duration-300 hover:-translate-y-1
          shadow-[0_0_20px_rgba(0,198,230,0.20)]
          hover:shadow-[0_0_35px_rgba(0,198,230,0.45)]
          hover:bg-[#00C6E6]/90 hover:border-[#00C6E6]
        "
      >
        Get Started
      </a>
    </div>

    {/* MOBILE HAMBURGER */}
    <button
      className="md:hidden text-white text-3xl focus:outline-none"
      onClick={() => setMobileNavOpen(!mobileNavOpen)}
    >
      ☰
    </button>
  </nav>

  {/* MOBILE NAV PANEL */}
  <AnimatePresence>
    {mobileNavOpen && (
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="md:hidden fixed top-[65px] left-0 w-full 
                   h-[calc(100vh-65px)]
                   bg-[#00040F]/95 backdrop-blur-xl z-[998] flex flex-col 
                   px-6 py-6 space-y-6 overflow-y-auto pb-24"
      >
        {/* PLATFORM */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Platform</p>

          <a href="/" className="text-gray-300 text-sm">Overview</a>
          <a href="/protocol" className="text-gray-300 text-sm">OGPU Protocol</a>
          <a href="/whyogpu" className="text-gray-300 text-sm">Why OGPU</a>
          <a href="/howogpuworks" className="text-gray-300 text-sm">How OGPU Works</a>
          <a href="/relay" className="text-gray-300 text-sm">Relay Gateway</a>
          <a href="/workloads" className="text-gray-300 text-sm">AI Workloads</a>
          <a href="/blockchain" className="text-gray-300 text-sm">Blockchain</a>
          <a href="https://ogpuscan.io" className="text-gray-300 text-sm">Live Network Stats</a>
          <a href="/competitions" className="text-gray-300 text-sm">Competitions</a>

          <p className="text-white font-semibold text-sm mt-3">Acceleration Center</p>
          <a href="https://opengpu.network/acceleration" className="text-gray-300 text-sm">Acceleration Program</a>
          <a href="https://takoswap.app/" className="text-gray-300 text-sm">TakoSwap</a>
          <a href="https://opengpu.network/opensale" className="text-gray-300 text-sm">Opensale</a>
          <a href="https://opengpu.network/bridgex" className="text-gray-300 text-sm">Bridge X</a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* SOLUTIONS */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Solutions</p>

          <a href="/aicompanies" className="text-gray-300 text-sm">AI Companies</a>
          <a href="/workloads" className="text-gray-300 text-sm">AI Workloads</a>
          <a href="/agents" className="text-gray-300 text-sm">AI Agents</a>
          <a href="/enterprisehome" className="text-gray-300 text-sm">Enterprise Pilot</a>
          <a href="/provider" className="text-gray-300 text-sm">GPU Providers</a>
          <a href="/relay" className="text-gray-300 text-sm">Relay Gateway</a>
          <a href="/blockchain" className="text-gray-300 text-sm">Blockchain Main</a>
          <a href="/provider-suite" className="text-gray-300 text-sm">OGPU Faucet</a>
          <a href="/provider-suite" className="text-gray-300 text-sm">OGPU Testnet</a>

          <p className="text-white font-semibold text-sm mt-3">dApps</p>
          <a href="https://nft.opengpu.network/" className="text-gray-300 text-sm">Open NFT</a>
          <a href="https://dapps.opengpu.network/token-creator" className="text-gray-300 text-sm">Token Creator</a>
          <a href="/buy" className="text-gray-300 text-sm">Buy OGPU</a>
          <a href="/dashboard" className="text-gray-300 text-sm">Multisender</a>
          <a href="/provider-suite" className="text-gray-300 text-sm">Testnet</a>
          <a href="/provider-suite" className="text-gray-300 text-sm">Faucet</a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* INDUSTRIES */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Industries</p>

          <a href="/industries" className="text-gray-300 text-sm">AI and Machine Learning</a>
          <a href="/industries" className="text-gray-300 text-sm">Rendering and Visual Effects</a>
          <a href="/industries" className="text-gray-300 text-sm">Scientific Computing and Research</a>
          <a href="/industries" className="text-gray-300 text-sm">Developer and Educational Use</a>
          <a href="/industries" className="text-gray-300 text-sm">Video Processing</a>
          <a href="/industries" className="text-gray-300 text-sm">Blockchain and Crypto</a>
          <a href="/industries" className="text-gray-300 text-sm">Gaming</a>
          <a href="/industries" className="text-gray-300 text.sm">Synthetic Data Generation</a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* DOCS */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Docs</p>

          <a href="https://opengpu.network/docs" className="text-gray-300 text-sm">Developer Docs</a>
          <a href="https://opengpu.network/docs/whitepaper.pdf" className="text-gray-300 text-sm">Whitepaper</a>
          <a href="https://opengpu.network/docs/litepaper.pdf" className="text-gray-300 text-sm">Litepaper</a>
          <a href="https://opengpu.network/roadmap" className="text-gray-300 text-sm">Roadmap</a>
          <a href="https://opengpu.network/faq" className="text-gray-300 text-sm">FAQ</a>
          <a href="https://github.com/OpenGPU-Network" className="text-gray-300 text-sm">GitHub</a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* COMPANY */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Company</p>

          <a href="/about" className="text-gray-300 text-sm">About</a>
          <a href="https://opengpu.network/team" className="text-gray-300 text-sm">Team (Coming soon)</a>
          <a href="https://opengpu.network/press" className="text-gray-300 text-sm">Press</a>
          <a href="https://opengpu.network/careers" className="text-gray-300 text-sm">Careers</a>
          <a href="mailto:hello@opengpu.network" className="text-gray-300 text-sm">Contact</a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* ELECTRIC GLOW BAR */}
  <div className="relative w-full h-[1.5px] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF] to-transparent opacity-80" />
    <div className="absolute inset-0 bg-[#00E9FF] opacity-40 blur-sm" />
  </div>
</header>





{/* QUICK NAV MENU (Floating Right Side) */}
<div className="fixed right-4 top-1/2 -translate-y-1/2 z-[998] hidden md:flex flex-col gap-3">

  <a href="#quickstart"
     className="px-3 py-2 rounded-lg bg-[#0A0F2C]/70 text-white text-xs 
                border border-white/10 backdrop-blur-lg hover:bg-[#00C6E6]
                transition shadow-md">
    Quick Start
  </a>

  <a href="#why-ogpu"
     className="px-3 py-2 rounded-lg bg-[#0A0F2C]/70 text-white text-xs 
                border border-white/10 backdrop-blur-lg hover:bg-[#00C6E6]
                transition shadow-md">
    Why OGPU
  </a>

  <a href="#how-ogpu-works"
     className="px-3 py-2 rounded-lg bg-[#0A0F2C]/70 text-white text-xs 
                border border-white/10 backdrop-blur-lg hover:bg-[#00C6E6]
                transition shadow-md">
    How It Works
  </a>

  <a href="#workloads"
     className="px-3 py-2 rounded-lg bg-[#0A0F2C]/70 text-white text-xs 
                border border-white/10 backdrop-blur-lg hover:bg-[#00C6E6]
                transition shadow-md">
    Workloads
  </a>

  <a href="#relay"
     className="px-3 py-2 rounded-lg bg-[#0A0F2C]/70 text-white text-xs 
                border border-white/10 backdrop-blur-lg hover:bg-[#00C6E6]
                transition shadow-md">
    Relay
  </a>

  <a href="#blockchain"
     className="px-3 py-2 rounded-lg bg-[#0A0F2C]/70 text-white text-xs 
                border border-white/10 backdrop-blur-lg hover:bg-[#00C6E6]
                transition shadow-md">
    Blockchain
  </a>

  <a href="#built-for-everyone"
     className="px-3 py-2 rounded-lg bg-[#0A0F2C]/70 text-white text-xs 
                border border-white/10 backdrop-blur-lg hover:bg-[#00C6E6]
                transition shadow-md">
    Built For Everyone
  </a>

   {/* Back to Top */}
<a href="#hero"
  className="px-3 py-2 rounded-lg bg-[#0A0F2C]/70 text-white text-xs 
             border border-white/10 backdrop-blur-lg hover:bg-[#00C6E6]
             transition shadow-md flex items-center gap-1">
  <span className="text-white text-sm">⬆</span> Top
</a>



</div>




  {/* HERO CONTENT */}
  <div className="relative z-20 flex flex-col h-full">
    <div className="pt-40 md:pt-48 lg:pt-52" />

    <div
      style={{ opacity: heroOpacity, transition: "opacity 0.1s linear" }}
      className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pb-16 md:pb-20 lg:pb-24"
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-xl">
        A Datacenter
        <br />
        Without Walls
      </h1>

      <p className="text-lg md:text-xl text-[#00e9ff] font-semibold mb-5 drop-shadow-md">
        A global compute network for AI workloads.
      </p>

      <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mb-6 drop-shadow">
        OGPU routes workloads to the best available GPU capacity across data centers,
        cloud providers and independent operators without splitting jobs.
        This improves performance, reliability and cost efficiency at scale.
      </p>

      <p className="text-base md:text-lg font-semibold text-white mb-10 drop-shadow-lg">
        We do not replace the cloud, we route across it.
      </p>

      {/* HERO BUTTONS */}
      <div className="flex flex-wrap justify-center gap-5">

  {/* PRIMARY CTA — Run an Enterprise Pilot */}
 <button
  onClick={() => (window.location.href = "/enterprisehome")}
  className="px-12 py-3.5 rounded-xl font-semibold text-white text-base md:text-lg
             border-[2px] border-[#00E9FF]/80 bg-white/10 backdrop-blur-md
             hover:bg-white/20 hover:border-[#00E9FF]
             transition-all duration-300 hover:-translate-y-1
             shadow-[0_0_25px_rgba(0,233,255,0.20)] hover:shadow-[0_0_40px_rgba(0,233,255,0.45)]">
  Run A Free Enterprise Pilot
</button>




  {/* SECONDARY CTA — Get Started */}
<a
  href="/getstarted"
  className="
    px-10 py-3.5 rounded-xl font-semibold text-white text-base md:text-lg

    bg-[#00C6E6] border-[2px] border-[#00C6E6]/80

    transition-all duration-300 hover:-translate-y-1

    shadow-[0_0_25px_rgba(0,198,230,0.20)]
    hover:shadow-[0_0_40px_rgba(0,198,230,0.45)]

    hover:bg-[#00C6E6]/90 hover:border-[#00C6E6]
  "
>
  Get Started
</a>




</div>
<div className="mt-12" />
<Livetransactions />
    </div>
    
  </div>
  
</section>

      {/* Live Stats */}
      <LiveStats />

      
{/* UNIVERSAL QUICK START */}
<section id="quickstart"
 className="w-full bg-[#040814] py-24 px-6 border-t border-white/5">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
        Provider Suite Installer
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Start earning with your GPU resources today. Download the provider suite for your operating system.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Client */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)] text-center">
        
        <h3 className="text-xl font-semibold text-white mb-2">
          Run Models
        </h3>

        <p className="text-sm text-gray-400 mb-5">
          Access decentralized GPUs instantly using the Client Dashboard.
        </p>

        <a
  href="https://client.opengpu.network/"
  download
  className="block"
>
  <button className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition">
    Run Models →
  </button>
</a>

        <a href="#" className="block mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">
          API Docs →
        </a>
      </div>

      {/* macOS */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)] text-center">
        <img src="/Assets/apple.png" className="w-14 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">macOS</h3>

        <a
  href="https://oerelease.opengpu.network/download/flavor/default/3.1.0/osx_arm64/OpenGPU-Provider-Suite-3.1.0.pkg"
  download
  className="block"
>
  <button className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition">
    Download for macOS→
  </button>
</a>

        <a href="#" className="block mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">
          View macOS docs →
        </a>
      </div>

      {/* Windows */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)] text-center">
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
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)]">
        <div className="text-center">
          <img src="/Assets/linux.png" className="w-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Linux</h3>
        </div>

        <p className="text-xs md:text-sm text-gray-400 mb-3">
          Install via CLI:
        </p>

        <pre className="text-xs md:text-sm text-gray-200 bg-black/20 rounded-xl p-4 overflow-x-auto whitespace-pre leading-relaxed mb-6">
{`curl -o provider-install.sh \\
  https://raw.githubusercontent.com/OpenGPU-Network/provider-suite/main/install.sh
chmod +x provider-install.sh
./provider-install.sh`}
        </pre>

        <a href="#" className="block text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition text-center">
          View Linux docs →
        </a>
      </div>

    </div>
  </div>
  <div className="mt-8" />
  {/* Pricing Comparator */}
      <PricingComparator />
</section>



{/* GRADIENT TRANSITION */}
<div className="w-full h-15 bg-gradient-to-b from-[#000104] to-white" />



{/* PARTNER SLIDER — FIXED FOR MOBILE PORTRAIT */}
<section className="w-full bg-white py-16 md:py-20 overflow-hidden relative">
  <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0A0F2C] mb-10 leading-tight">
    Trusted by teams building the future of AI infrastructure
  </h2>

  <div className="relative overflow-hidden w-full">
    <div className="flex w-max"> 
      {/* TRACK 1 */}
      <motion.div
        className="flex items-center gap-16 pr-16 flex-none"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {baseLogos.map((logo, i) => (
          <div
            key={`t1-${i}`}
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition flex-none"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-14 object-contain flex-none"
            />
          </div>
        ))}
      </motion.div>

      {/* TRACK 2 (duplicate) */}
      <motion.div
        className="flex items-center gap-16 pr-16 flex-none"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {baseLogos.map((logo, i) => (
          <div
            key={`t2-${i}`}
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition flex-none"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-14 object-contain flex-none"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


     
      {/* ========== SECTION: WHY OGPU ========== */}
<section id="why-ogpu"
 className="w-full bg-[#F7F9FC] py-16 md:py-20 px-6">

  {/* Image + Text Row */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 md:gap-16 items-center">

    {/* LEFT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
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

    {/* RIGHT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-xl"
    >
      <span className="text-[#005DEA] font-semibold tracking-wide text-xs md:text-sm uppercase">
        Why OGPU
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3 mb-2 text-[#0A0F2C]">
        Decentralized compute,
      </h2>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 
                     bg-gradient-to-r from-[#005DEA] to-[#00C6FF] bg-clip-text text-transparent">
        built for real AI workloads.
      </h2>

      <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-8">
        AI workloads are outgrowing centralized cloud capacity. OGPU connects GPU providers
        across data centers, clouds and independent operators into one network, routing workloads
        to available capacity. This improves reliability and reduces cost.
      </p>

      {/* CTA — Explore dApp (GRADIENT) */}
      <a
        href="https://management.opengpu.network/"
        className="px-8 py-3.5 rounded-2xl font-semibold text-white text-base md:text-lg 
                   bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                   hover:shadow-[0_12px_32px_rgba(0,160,255,0.35)] 
                   transition-all duration-300 hover:-translate-y-[3px] block text-center"
      >
        Explore dApp
      </a>
    </motion.div>

  </div>

  <div className="h-10" />

{/* CARD GRID */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.45, ease: "easeOut" }}
  className="max-w-7xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
>
  {[
    {
      imgSrc: "/Assets/outlineglobal.png",
      title: "Global Capacity Network",
      text: "Access GPU capacity worldwide. OGPU routes tasks instantly to available compute."
    },
    {
      imgSrc: "/Assets/scaling.png",
      title: "Elastic Scaling",
      text: "On-demand scale inference or fine-tuning instantly. No reservations, queueing or region limits."
    },
    {
      imgSrc: "/Assets/percentage.png",
      title: "Lower Operational Cost",
      text: "Pay only for executed work. Task-based billing cuts idle costs by 60 to 80 percent."
    }
  ].map((card, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-7 md:p-8 flex flex-col border border-gray-100 
                 shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                 transition-all duration-300 ease-out 
                 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]
                 hover:-translate-y-2 hover:scale-[1.02]"
    >

      {/* ICON CHIP */}
      <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                      bg-gradient-to-br from-[#0A84FF] to-[#00C6FF]
                      shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                      transition-transform duration-300 hover:scale-110">
        <img
          src={card.imgSrc}
          alt={card.title}
          className="w-6 h-6 object-contain"
          style={{
            filter: "none",
            WebkitFilter: "none",
            mixBlendMode: "normal"
          }}
        />
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-lg md:text-xl text-[#0A0F2C] mb-2 leading-snug">
        {card.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-base text-[#475569] leading-relaxed">
        {card.text}
      </p>

    </div>
  ))}
</motion.div>

</section>


{/* ========== SECTION: HOW OGPU WORKS ========== */}
<section id="how-ogpu-works"
 className="w-full bg-white py-16 md:py-20 px-6 relative overflow-hidden">

  {/* Light gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#F5FAFF] via-white to-[#E6F2FF] opacity-90 pointer-events-none" />

  {/* GRID */}
  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 z-10">

    {/* LEFT SIDE — Fade + slide from LEFT */}
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <span className="text-[#005DEA] font-semibold tracking-wide text-xs md:text-sm uppercase">
        How It Works
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3 mb-2 text-[#0A0F2C]">
        How OGPU connects
      </h2>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 
                     bg-gradient-to-r from-[#005DEA] to-[#00C6FF] bg-clip-text text-transparent">
        your AI to global GPUs.
      </h2>

      <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-8 max-w-lg">
        OGPU automatically routes each workload to the best available GPU across the network,
        balancing speed, reliability and cost with built-in failover and retry.
      </p>

      {/* STEPS */}
      <div className="space-y-6 border-l-2 border-[#00C6FF]/50 pl-6">

        {/* STEP 1 */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-3 text-lg md:text-xl font-semibold text-[#1E293B]">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                             text-white flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
              </svg>
            </span>
            Step 1 · Submit a workload
          </h3>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            You send an AI or rendering task through the dashboard or API. OGPU detects the GPU needed
            and finds the closest and most efficient provider.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-3 text-lg md:text-xl font-semibold text-[#1E293B]">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                             text-white flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Step 2 · Routing and provider selection
          </h3>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            OGPU evaluates all available GPUs across the network and routes the task to the provider 
            that can deliver the fastest results. If a machine becomes unavailable mid–run, the protocol 
            shifts the execution to the next best GPU without interrupting progress.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-3 text-lg md:text-xl font-semibold text-[#1E293B]">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                             text-white flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.75 3v4.51c0 .45.54.67.85.35l1.4-1.4a.5.5 0 01.7 0l1.4 1.4c.31.32.85.1.85-.35V3m3 18H6a2.25 2.25 0 01-2.25-2.25V9A2.25 2.25 0 016 6.75h12A2.25 2.25 0 0120.25 9v9.75A2.25 2.25 0 0118 21z" />
              </svg>
            </span>
            Step 3 · Execute end to end
          </h3>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            Each task executes on the chosen GPU for consistency. If a provider fails, OGPU seamlessly
            migrates the workload to the next best machine.
          </p>
        </div>

      </div>

      {/* Footer line */}
      <p className="text-sm md:text-base text-[#0A0F2C] font-medium border-t border-gray-200 pt-6 mt-8">
        Single executor by design, with on-chain verification, automatic failover and task-based billing.
      </p>

      {/* CTA */}
      <a
        href="https://ogpuscan.io/"
        className="mt-4 px-10 py-4 rounded-2xl font-semibold text-base md:text-lg text-white
                   bg-gradient-to-r from-blue-700 to-[#00C6FF]
                   shadow-md hover:opacity-95 transition block text-center"
      >
        See real workloads running →
      </a>
    </motion.div>

    {/* RIGHT SIDE — Steps Animation + Icons */}
    <div className="flex flex-col items-center space-y-16">
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full flex flex-col items-center space-y-16"
      >

        {/* NODE 1 */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-[#00C6FF]/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-[#00C6FF]">
              <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
            </svg>
          </div>
          <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
            Submit workload
          </p>
        </motion.div>

        {/* CONNECTOR 1 */}
        <motion.div className="w-[3px] h-24 bg-gradient-to-b from-[#005DEA] to-[#00C6FF] rounded-full relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00C6FF] via-[#00C6FF] to-[#005DEA] opacity-70"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* NODE 2 */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.35 }}
        >
          <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-[#00C6FF]/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-[#00C6FF]">
              <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
            Routing and provider selection
          </p>
        </motion.div>

        {/* CONNECTOR 2 */}
        <motion.div className="w-[3px] h-24 bg-gradient-to-b from-[#005DEA] to-[#00C6FF] rounded-full relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00C6FF] via-[#00C6FF] to-[#005DEA] opacity-70"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </motion.div>

        {/* NODE 3 */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.8 }}
        >
          <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-[#00C6FF]/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-[#00C6FF]">
              <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M9.75 3v4.51c0 .45.54.67.85.35l1.4-1.4a.5.5 0 01.7 0l1.4 1.4c.31.32.85.1.85-.35V3m3 18H6a2.25 2.25 0 01-2.25-2.25V9A2.25 2.25 0 016 6.75h12A2.25 2.25 0 0120.25 9v9.75A2.25 2.25 0 0118 21z" />
            </svg>
          </div>
          <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
            Execute end to end
          </p>
        </motion.div>

      </motion.div>
    </div>

  </div>

  {/* BOTTOM CTA */}
  <motion.div
    className="relative max-w-3xl mx-auto mt-16 text-center z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    <p className="text-sm md:text-base text-[#0A0F2C] mb-4">
      Single executor by design, with on-chain verification, automatic failover and task-based billing.
    </p>

    <button className="px-10 py-4 rounded-2xl font-semibold text-base md:text-lg text-white
                       bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                       shadow-md hover:opacity-95 transition">
      Explore the cost advantage →
    </button>
  </motion.div>

</section>


      {/* BUILT FOR REAL AI WORKLOADS SECTION */}
<section id="workloads"
className="w-full bg-[#F6F9FA] py-24 px-6">

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
    <div className="relative z-10 px-8 md:px-10 py-14 md:py-16 text-center text-white">
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

  {/* PIPELINE — unchanged */}
  {/* Model → Routing → Provider → Output */}
</section>


{/* RELAY: ENTERPRISE GATEWAY TO OGPU */}
<section
  id="relay"
  className="relative w-full py-24 px-6 bg-white overflow-hidden text-[#0A0F2C]"
>
  {/* CENTERED PURE ORANGE GLOW */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
    <div className="w-[350px] h-[350px] rounded-full bg-orange-200/35 blur-[90px] opacity-65" />
  </div>

  {/* HEADER */}
  <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-3xl md:text-5xl font-semibold leading-tight mb-4"
    >
      Relay, the enterprise gateway to OGPU.
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed"
    >
      Relay unlocks enterprise access to decentralized compute with the same ease as AWS or GCP.
      No wallets. No blockchain interfaces. Just clean cloud workflows.
    </motion.p>
  </div>

{/* ROUTING DIAGRAM – CLEAN ENTERPRISE WORKFLOW WITH ORB */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative max-w-5xl mx-auto mb-24"
>

  {/* INNER GLOW */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <motion.div
      className="absolute w-[180px] h-[180px] rounded-full bg-orange-200/40 blur-[80px] opacity-60"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  {/* DESKTOP LAYOUT */}
  <div className="hidden md:flex items-center justify-between w-full relative z-10">

    {/* CLIENTS */}
    <div className="flex flex-col items-center gap-2">
      <p className="text-[#0A0F2C] font-medium text-lg">Clients</p>
    </div>

    {/* ORB LINE 1 */}
    <div className="relative flex items-center justify-center w-20">
      <div className="relative h-[2px] w-20 bg-cyan-500/20 rounded-full overflow-hidden">
        {orbStep === 0 && (
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
            initial={{ x: 0, opacity: 0.3 }}
            animate={{ x: 70, opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={() => setOrbStep(1)}
          />
        )}
      </div>
    </div>

    {/* RELAY LOGO */}
    <img
      src="/Images/relay.png"
      alt="Relay Logo"
      className="h-10 w-auto drop-shadow-lg"
    />

    {/* ORB LINE 2 */}
    <div className="relative flex items-center justify-center w-20">
      <div className="relative h-[2px] w-20 bg-cyan-500/20 rounded-full overflow-hidden">
        {orbStep === 1 && (
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
            initial={{ x: 0, opacity: 0.3 }}
            animate={{ x: 70, opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={() => setOrbStep(2)}
          />
        )}
      </div>
    </div>

    {/* ROUTING LAYER */}
    <div className="flex flex-col items-center gap-2">
      <img
        src="/Images/clean_swivel-gradiant.png"
        alt="OGPU Routing Logo"
        className="h-20 w-auto drop-shadow-xl"
      />
      <p className="text-[#0A0F2C] font-medium text-sm mt-2">
        OGPU Routing Layer
      </p>
    </div>

    {/* ORB LINE 3 */}
    <div className="relative flex items-center justify-center w-20">
      <div className="relative h-[2px] w-20 bg-cyan-500/20 rounded-full overflow-hidden">
        {orbStep === 2 && (
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
            initial={{ x: 0, opacity: 0.3 }}
            animate={{ x: 70, opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={() => setOrbStep(0)}
          />
        )}
      </div>
    </div>

    {/* PROVIDERS */}
    <div className="flex flex-col items-center gap-2">
      <p className="text-[#0A0F2C] font-medium text-lg">Providers</p>
    </div>
  </div>

  {/* MOBILE – simple vertical version */}
  <div className="md:hidden flex flex-col items-center gap-10 relative z-10">

    <p className="text-[#0A0F2C] font-medium text-lg">Clients</p>

    <img
      src="/Images/relay.png"
      alt="Relay Logo"
      className="h-8 w-auto drop-shadow-lg"
    />

    <div className="flex flex-col items-center gap-2">
      <img
        src="/Images/clean_swivel-gradiant.png"
        alt="OGPU Routing Logo"
        className="h-16 w-auto drop-shadow-xl"
      />
      <p className="text-[#0A0F2C] font-medium text-sm mt-1">
        OGPU Routing Layer
      </p>
    </div>

    <p className="text-[#0A0F2C] font-medium text-lg">Providers</p>

  </div>


   {/* RETURN FLOW SUBLINE - Providers back to Clients */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-8 text-xs md:text-sm text-[#64748B] text-center"
    >
      Results flow back from providers to clients over the same unified Relay pipeline.
    </motion.p>

</motion.div>

  {/* BOTTOM CARDS - unchanged */}
  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
      className="bg-white/80 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <div
        className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                   bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
                   shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                   transition-transform duration-300 hover:scale-110"
      >
        <img
          src="/Assets/bsfillcreditcard2frontfill.png"
          alt="No wallets or tokens"
          className="w-6 h-6 object-contain"
          style={{ filter: "none" }}
        />
      </div>

      <h3 className="text-lg font-semibold mb-3">No wallets or tokens</h3>
      <p className="text-sm text-[#475569]">
        Relay enables full enterprise compute with fiat billing.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
      className="bg-white/80 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <div
        className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                   bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
                   shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                   transition-transform duration-300 hover:scale-110"
      >
        <img
          src="/Assets/madashboardcustomize.png"
          alt="Unified usage dashboard"
          className="w-6 h-6 object-contain"
          style={{ filter: "none" }}
        />
      </div>

      <h3 className="text-lg font-semibold mb-3">Unified usage dashboard</h3>
      <p className="text-sm text-[#475569]">
        Clean analytics, logs and tracking in one interface.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
      className="bg-white/80 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <div
        className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                   bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
                   shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                   transition-transform duration-300 hover:scale-110"
      >
        <img
          src="/Assets/bsplugin.png"
          alt="Drop-in integration"
          className="w-6 h-6 object-contain"
          style={{ filter: "none" }}
        />
      </div>

      <h3 className="text-lg font-semibold mb-3">Drop-in integration</h3>
      <p className="text-sm text-[#475569]">
        Works with existing workflows without rewrites.
      </p>
    </motion.div>
  </div>

  {/* CTA */}
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
    className="relative z-10 text-center mt-16"
  >
    <a
      href="https://relay.opengpu.network/"
      className="px-12 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition inline-block"
    >
      Request access to Relay →
    </a>
  </motion.div>
</section>



 {/* BLOCKCHAIN SECTION — SYSTEM BOOT SEQUENCE */}
<section id="blockchain" 
className="relative w-full bg-[#040814] py-28 px-6 overflow-hidden text-white">
  {/* BACKGROUND GRID + GLOW */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 opacity-25">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#12243f]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="chainGrid" width="140" height="140" patternUnits="userSpaceOnUse">
            <path
              d="M0 140H140V0"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chainGrid)" />
      </svg>
    </div>

    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] 
                    rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_70%)]
                    blur-3xl opacity-80" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

    {/* HEADER — slow fade + slight downward entry */}
    <motion.h2
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="text-3xl md:text-5xl font-semibold text-center mb-4 leading-tight"
    >
      The OGPU blockchain
    </motion.h2>

    {/* VERIFIED BADGE — pop in slightly after header */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                 bg-sky-600/20 border border-sky-400/40 backdrop-blur-sm"
    >
      <span className="w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(56,189,248,1)] animate-ping"></span>
      <span className="text-sky-200 text-xs font-semibold tracking-wide uppercase">
        Chain verified
      </span>
    </motion.div>

    {/* DESCRIPTION — soft fade-in */}
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
      className="text-base md:text-lg text-[#7dd3fc] max-w-3xl text-center leading-relaxed mb-12"
    >
      Built for compute, not speculation. OGPU mainnet is a high throughput, EVM compatible
      blockchain powered by Lachesis DAG consensus. Sub second blocks and around ten thousand
      tasks per second, engineered for GPU task routing, on chain verification and settlement.
    </motion.p>

    {/* MAIN VISUAL ROW */}
    <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16 items-center w-full mb-16">

      {/* LEFT — BLOCK GRID BOOTING SYSTEM */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.35 }}
        className="w-full"
      >
        <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-3xl 
                        border border-sky-500/30 bg-gradient-to-b from-[#020617] to-[#020617]
                        shadow-[0_0_60px_rgba(56,189,248,0.35)] px-6 py-8">

          {/* Animated blocks — unchanged */}
          <div className="grid grid-cols-10 sm:grid-cols-14 gap-2.5">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-[5px] bg-sky-400/15 border border-sky-400/25"
                animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.15, 1] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: (i % 20) * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* TPS LABEL */}
          <div className="mt-6 flex items-center justify-between text-xs text-sky-200/90">
            <span className="uppercase tracking-[0.16em]">Parallel task blocks</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              <span>Live verification</span>
            </span>
          </div>
        </div>

        <p className="text-[#7dd3fc] text-xs sm:text-sm tracking-[0.18em] uppercase text-center mt-6">
          Around ten thousand tasks per second visualized in block flows
        </p>
      </motion.div>

      {/* RIGHT — EXPLANATION PANEL */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.45 }}
        className="space-y-7"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase mb-1">
          Purpose built L1
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          A blockchain that treats compute as a first class citizen.
        </h3>
        <p className="text-sm md:text-base text-sky-100/80 leading-relaxed">
          Every transaction can carry task data, provider updates and verification proofs.
          Consensus, execution, and routing are tightly coupled to keep the network in sync
          with real workloads.
        </p>

        {/* Sub features — unchanged */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-7 h-7 rounded-full bg-sky-500/15 flex items-center justify-center border border-sky-400/40">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">EVM compatible</p>
              <p className="text-sm text-sky-100/80">
                Use familiar tooling while targeting a chain optimized for GPU workloads.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 w-7 h-7 rounded-full bg-emerald-500/15 flex items-center justify-center border border-emerald-400/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">On chain proof of execution</p>
              <p className="text-sm text-sky-100/80">
                Tasks are validated, verified, and settled transparently with no manual reconciliation.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* PIPELINE — reveal from bottom */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.5 }}
      className="w-full max-w-5xl mb-16 md:mb-20"
    >
      <div className="w-full bg-gradient-to-r from-blue-600/40 via-cyan-500/30 to-blue-600/40 
                      border border-cyan-400/40 rounded-2xl px-6 md:px-8 py-7 
                      shadow-[0_30px_90px_rgba(37,99,235,0.45)]">

        {/* unchanged inner pipeline content */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-left">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-200 uppercase mb-2">
              On chain verification pipeline
            </p>
            <p className="text-sm text-sky-100/90 max-w-md">
              Submit, route, execute, verify, and settle on chain.
              A unified workflow purpose-built for compute.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-sky-50">
            {["Submit", "Route", "Execute", "Verify", "Settle"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                  <span>{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <motion.span
                    className="text-sky-200/80"
                    animate={{ x: [0, 4, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 1.4,
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
    </motion.div>

    
    {/* CTA ROW — bottom-to-top final sequence */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.85 }}
      className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <p className="text-sm md:text-base text-sky-100/90 text-center md:text-left max-w-xl">
        Processing millions of verified compute tasks on mainnet.
        Explore live execution on OGPU Scan.
      </p>

      <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
        <motion.a
          href="https://ogpuscan.io/"
          whileHover={{ scale: 1.04 }}
          className="px-7 py-3 rounded-xl font-semibold text-sm md:text-base bg-white 
                     text-[#020617] shadow-[0_10px_30px_rgba(15,23,42,0.7)] 
                     hover:shadow-[0_16px_40px_rgba(15,23,42,0.9)] transition block text-center"
        >
          View OGPU Scan
        </motion.a>

        <motion.a
  href="/blockchain"
  whileHover={{ scale: 1.04 }}
  className="px-7 py-3 rounded-xl font-semibold text-sm md:text-base 
             border border-sky-400/60 text-sky-100 hover:bg-sky-500/10 transition"
>
  Learn more about the chain
</motion.a>

      </div>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 1.0 }}
      className="text-xs md:text-sm text-sky-200/80 mt-8 tracking-[0.18em] uppercase text-center"
    >
      Real workloads. Real verification. Real settlement on chain.
    </motion.p>

  </div>
</section>

{/* ================= SECTION: BUILT FOR EVERYONE ================= */}

<section
  id="built-for-everyone"
  className="relative w-full bg-[#F7F9FC] py-24 md:py-28 px-6 overflow-hidden"
> 

  {/* BUILT FOR EVERYONE */}
  <div className="relative z-10 max-w-6xl mx-auto mb-20 text-center">
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h3 className="text-3xl md:text-5xl font-semibold text-[#0A0F2C] leading-snug">
        <span className="bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
        bg-clip-text text-transparent">
          Now let us show who it unlocks value for.
        </span>
      </h3>
    </motion.div>
  </div>

  
  {/* BACKGROUND MESH */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.20] z-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7CA9D9]" preserveAspectRatio="none">
      <defs>
        <pattern id="mesh" width="160" height="160" patternUnits="userSpaceOnUse">
          <path d="M0 0 L160 160 M160 0 L0 160" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.65" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh)" />
    </svg>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">

    {/* HEADER */}
    <h2 className="text-3xl md:text-5xl font-semibold text-[#0A0F2C] mb-4 leading-tight">
      Built for everyone.
    </h2>

    <p className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed mb-20 md:mb-24">
      A network where everyone can build, contribute and benefit. Developers run models,
      enterprises migrate workloads, researchers scale experiments and providers earn
      from compute. OGPU is the connective layer powering them all.
    </p>

    {/* ROLES */}
    <div className="relative max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

        {/* DEVELOPERS */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
          <motion.div 
            className="relative mb-5"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#00C6FF] shadow-[0_0_20px_6px_rgba(0,198,255,0.45)]" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">Developers</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            Run or experiment instantly without provisioning or DevOps.
          </p>
        </motion.div>

        {/* ENTERPRISES */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} className="flex flex-col items-center">
          <motion.div 
            className="relative mb-5"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#00C6FF] shadow-[0_0_20px_6px_rgba(0,198,255,0.45)]" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">Enterprises</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            Migrate compute seamlessly and reduce operational cost with Relay.
          </p>
        </motion.div>

        {/* RESEARCHERS */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="flex flex-col items-center">
          <motion.div 
            className="relative mb-5"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#00C6FF] shadow-[0_0_20px_6px_rgba(0,198,255,0.45)]" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">Researchers</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            Scale experiments and simulations without GPU wait times.
          </p>
        </motion.div>

        {/* GPU PROVIDERS */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.95 }} className="flex flex-col items-center">
          <motion.div 
            className="relative mb-5"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#00C6FF] shadow-[0_0_20px_6px_rgba(0,198,255,0.45)]" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">GPU providers</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            Earn per task with on-chain verification.
          </p>
        </motion.div>

      </div>
    </div>

    {/* TAGLINE */}
    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
      className="text-xs md:text-sm text-[#0F172A] font-medium tracking-wide mt-16 md:mt-20 mb-8">
      The OGPU ecosystem connects everyone through a single global compute network.
    </motion.p>

    {/* 2 COLUMN CTA BLOCK */}
    <div className="relative z-10 max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">

      {/* LEFT — EXPLORE ECOSYSTEM */}
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-[#0A0F2C] mb-3">Explore the OGPU ecosystem</h3>
        <p className="text-sm md:text-base text-[#475569] mb-5">
          Discover workloads, tools, dashboards and open infrastructure powering the global compute network.
        </p>
        <motion.a 
          whileHover={{ scale: 1.04 }} 
          href="https://management.opengpu.network/dashboard"
          className="inline-block px-8 py-3 rounded-xl font-semibold text-white text-base 
                     bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                     shadow-[0_10px_30px_rgba(0,160,255,0.45)] hover:opacity-95 transition-all">
          Explore ecosystem →
        </motion.a>
      </div>

      {/* RIGHT — JOIN COMMUNITY */}
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-[#0A0F2C] mb-3">Join the OGPU community</h3>
        <p className="text-sm md:text-base text-[#475569] mb-8">
          Be part of a fast-growing global ecosystem. Get updates, help shape the roadmap, and connect with builders.
        </p>

        {/* MAIN CTA */}
        <motion.a 
          whileHover={{ scale: 1.04 }} 
          href="https://t.me/opengpu_network"
          className="inline-block px-8 py-3 rounded-xl font-semibold text-white text-base 
                     bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                     shadow-[0_10px_30px_rgba(0,160,255,0.45)] hover:opacity-95 transition-all mb-8">
          Join Telegram →
        </motion.a>

        {/* SOCIAL GRID */}
<div className="grid grid-cols-7 gap-4 mt-2">

  <motion.a whileHover={{ scale: 1.08 }} href="https://x.com/OGPU_Network" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/x.png" className="w-5 h-5 invert" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]"></span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://t.me/opengpu_network" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/telegram.png" className="w-5 h-5" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]"></span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://discord.com/invite/opengpunetwork" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/discord.png" className="w-5 h-5" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]"></span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://www.tiktok.com/@opengpu.network" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/tiktok.png" className="w-5 h-5 invert" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]"></span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://www.linkedin.com/company/opengpu" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/linkedin.png" className="w-5 h-5 invert" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]"></span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://instagram.com/opengpu.network" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/instagram.png" className="w-5 h-5" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]"></span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://youtube.com/@opengpunetwork" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/youtube.png" className="w-5 h-5 invert" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]"></span>
  </motion.a>

</div>

      </div>

    </div>

  </div>
</section>



{/* NEWS & MOMENTUM SECTION */}
<section id="news"
className="w-full bg-white py-24 md:py-28 px-6">

  {/* HEADER — fade down */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="max-w-7xl mx-auto mb-10 md:mb-12"
  >
    <span className="text-xs font-semibold tracking-[0.15em] text-[#007BFF] uppercase">
      Latest
    </span>

    <h2 className="text-3xl md:text-5xl font-semibold text-[#0A0F2C] mt-2 mb-3 leading-tight">
      News and momentum
    </h2>

    <p className="text-base md:text-lg text-[#475569] max-w-3xl leading-relaxed">
      OGPU momentum across AI and DePIN, tracked by real adoption.
      Product releases, integrations and ecosystem growth in AI and decentralized compute.
    </p>
  </motion.div>

  {/* FILTER TABS — fade up */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="max-w-7xl mx-auto flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10"
  >
    {["Featured", "News", "Events", "Webinars"].map((tab, idx) => (
      <button
        key={tab}
        className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
          idx === 0
            ? "bg-[#2563EB] text-white border-[#2563EB]"
            : "bg-white text-[#0A0F2C] border-gray-300 hover:border-[#2563EB] hover:text-[#2563EB]"
        }`}
      >
        {tab}
      </button>
    ))}
  </motion.div>

  {/* 4-CARD NEWS GRID — staggered fade up */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
    {[
      {
        src: "",
        date: "EIN Presswire · Nov 17, 2025",
        title: "OGPU launches task based layer for AI",
        link: "Learn more →",
      },
      {
        date: "Medium · Nov 17, 2025",
        title: "Nosana and OGPU partner on compute",
        link: "Read article →",
      },
      {
        date: "Update · Nov 17, 2025",
        title: "OGPU Scan hits one million tasks",
        link: "View update →",
      },
      {
        date: "Community · Nov 17, 2025",
        title: "Relay enters pilot phase",
        link: "Read more →",
      },
    ].map((card, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
        className="flex flex-col"
      >
        <div className="w-full h-40 bg-gray-300 rounded-xl animate-pulse mb-4" />
        <p className="text-xs text-[#475569] mb-1">{card.date}</p>
        <h3 className="font-semibold text-lg text-[#0A0F2C] leading-snug mb-2">
          {card.title}
        </h3>
        <a className="text-sm text-[#2563EB] font-medium hover:underline" href="#">
          {card.link}
        </a>
      </motion.div>
    ))}
  </div>

  {/* SMALL SUBLINE — fade in */}
  <motion.p
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="text-sm text-[#475569] max-w-7xl mx-auto mt-6"
  >
    One million plus tasks, over two hundred and thirty providers, live since March 2025.
  </motion.p>

  {/* VIEW ALL LINK — fade in slightly after */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="max-w-7xl mx-auto mt-3"
  >
    <a href="#" className="text-[#2563EB] text-sm font-medium hover:underline">
      View all updates →
    </a>
  </motion.div>

</section>   



{/* FOOTER */}
<footer className="relative w-full bg-[#0A0F2C] text-white pt-30 pb-14 px-6 mt-0">

  {/* OVERLAPPING CTA BANNER */}
<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 mb-40 md:mb-56">
    <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      <div className="relative px-8 md:px-10 py-10 md:py-12 bg-gradient-to-r from-[#071426] via-[#0A2A4A] to-[#0B3C66] text-white">

        {/* Soft glow */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-28 right-10 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.32),transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-24 left-6 w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.24),transparent_70%)] blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">

          <div className="max-w-lg">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
              Benchmark OGPU against any cloud.
            </h3>
            <p className="text-sm md:text-base text-white/85 leading-relaxed">
              Measure inference, training or rendering on distributed GPUs with
              instant elasticity and real world performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/enterprisehome"
              className="px-7 py-4 rounded-xl bg-white text-[#0A0F2C] font-semibold text-base md:text-lg shadow-[0_6px_20px_rgba(255,255,255,0.32)] hover:shadow-[0_10px_28px_rgba(255,255,255,0.42)] transition-all"
            >
              Run a pilot →
            </a>

            <button className="px-7 py-4 rounded-xl border border-white/40 text-white font-semibold text-base md:text-lg hover:bg-white/10 transition-all">
              Developer docs
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>


 {/* MAIN FOOTER GRID */}
<div className="max-w-7xl mx-auto mt-14 md:mt-24 grid grid-cols-1 lg:grid-cols-[42%_1fr_1fr_1fr] gap-10 md:gap-14">

  {/* LEFT */}
  <div className="mt-2 md:mt-0">
    <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-4 md:mb-5">
      Compute without walls.<br />
      Route across clouds and providers.
    </h3>

    {/* SUBSCRIBE BOX — hidden on mobile */}
    <div className="hidden md:flex items-center bg-white/10 rounded-xl p-2 
                    backdrop-blur-sm border border-white/10 max-w-md mt-5">
      <SafeInput
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-transparent outline-none text-white 
                   placeholder-white/60 px-3 text-sm"
      />

      <button
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                   font-semibold text-white hover:opacity-90 transition text-sm"
      >
        Subscribe
      </button>
    </div>

    {/* DISCLAIMER — hidden on mobile */}
    <p className="hidden md:block text-xs text-white/40 mt-3">
      By subscribing you agree to receive product updates. No spam, unsubscribe anytime.
    </p>
  </div>


    {/* Product */}
    <div>
      <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Product</h4>
      <ul className="space-y-2 text-white/70 text-sm">
        <li><a href="/relay" className="hover:text-white transition">Relay</a></li>
        <li><a href="#" className="hover:text-white transition">Provider dApp</a></li>
        <li><a href="#" className="hover:text-white transition">OpenNFT</a></li>
        <li><a href="https://takoswap.app/" className="hover:text-white transition">Takoswap</a></li>
        <li><a href="#" className="hover:text-white transition">Bridge</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Resources</h4>
      <ul className="space-y-2 text-white/70 text-sm">
        <li><a href="#" className="hover:text-white transition">Docs</a></li>
        <li><a href="#" className="hover:text-white transition">Blog</a></li>
        <li><a href="#" className="hover:text-white transition">Status</a></li>
        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
        <li><a href="#" className="hover:text-white transition">Help center</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Company</h4>
      <ul className="space-y-2 text-white/70 text-sm">
        <li><a href="/about" className="hover:text-white transition">About</a></li>
        <li><a href="#" className="hover:text-white transition">Careers</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

  </div>


  {/* BOTTOM ROW */}
  <div className="max-w-7xl mx-auto mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-sm text-white/50">

    <div className="flex items-center gap-3">
      <img
        src="/Images/OGPU-LOGO-Main-final.png"
        className="h-20 opacity-90"
        alt="OGPU Logo"
      />
      <span>© Copyright 2025, OGPU Network. All rights reserved.</span>
    </div>

    <div className="flex gap-5 text-white/60">
      <a href="#" className="hover:text-white transition">Terms</a>
      <a href="#" className="hover:text-white transition">Accessibility</a>
      <a href="#" className="hover:text-white transition">Privacy and cookies</a>
    </div>

    <div className="flex items-center gap-4 text-white/70">
      <a href="#" className="hover:text-white transition"><i className="fab fa-facebook"></i></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-youtube"></i></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-x-twitter"></i></a>
    </div>

  </div>

</footer>

{/* MOBILE QUICK NAV — Minimal 5 Icons */}
<div className="fixed bottom-0 left-0 w-full z-[999] md:hidden 
                bg-[#000814]/95 backdrop-blur-xl border-t border-white/10">

  <div className="flex justify-around py-2 px-2 text-[12px] text-gray-200">

    {/* Quick Start */}
    <a href="#quickstart" className="flex flex-col items-center hover:text-white">
      <span className="text-xl">⚡</span>
      <span className="text-[10px]">Quick</span>
    </a>

    {/* How It Works */}
    <a href="#how-ogpu-works" className="flex flex-col items-center hover:text-white">
      <span className="text-xl">🔄</span>
      <span className="text-[10px]">How</span>
    </a>

    {/* Workloads */}
    <a href="#workloads" className="flex flex-col items-center hover:text-white">
      <span className="text-xl">📦</span>
      <span className="text-[10px]">Loads</span>
    </a>

    {/* Relay */}
    <a href="#relay" className="flex flex-col items-center hover:text-white">
      <span className="text-xl">🚀</span>
      <span className="text-[10px]">Relay</span>
    </a>

    {/* News */}
    <a href="#news" className="flex flex-col items-center text-white">
      <span className="text-xl">📰</span>
      <span className="text-[10px]">News</span>
    </a>

      {/* Back To The Top */}
    <a href="#hero" className="flex flex-col items-center text-white">
      <span className="text-xl">⬆️</span>
      <span className="text-[10px]">Top</span>
    </a>


  </div>
</div>


    </main>
  );
}
