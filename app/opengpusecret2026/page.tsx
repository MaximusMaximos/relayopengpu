"use client";

import React from "react";
import { motion } from "framer-motion";
import Livetransactions from "../components/Livetransactions";
import LiveStats from "../components/LiveStats"; 
import PricingComparator from "../components/PricingComparator";
import Protocol from "../components/Protocol";

// System status indicator
const SystemStatus: React.FC = () => (
  <motion.div
    className="absolute top-6 right-6 hidden lg:block text-right z-20"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 1.5 }}
    aria-hidden="true"
  >
    <div className="text-xs font-mono text-cyan-400/70 tracking-widest flex items-center justify-end gap-2">
      <motion.span
        className="inline-block w-2 h-2 bg-cyan-400 rounded-full"
        animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span>
        SYSTEM STATUS: <span className="text-cyan-400">ONLINE</span>
      </span>
    </div>
    <div className="text-xs font-mono text-white/40 mt-1">
      NODES ACTIVE: <span className="text-white/60">GLOBAL</span>
    </div>
  </motion.div>
);

export default function OpenGPULandingPage() {
  
  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("explore-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const partnerLogos = [
    { src: "/Images/Partners/nosana.png", alt: "Nosana" },
    { src: "/Images/Partners/lenaai.png", alt: "Lena" },
    { src: "/Images/Partners/ozakai.png", alt: "Ozak" },
    { src: "/Images/Partners/seeweb-black.png", alt: "SeeWeb" },
    { src: "/Images/Partners/ovhcloud.png", alt: "OVH Cloud" }
  ];

  return (
    <main className="min-h-screen bg-[#020617] selection:bg-cyan-500/30">
      
      {/* ===================================================================== */}
      {/* HERO SECTION - FULL BLEED VIDEO */}
      {/* ===================================================================== */}
      <section className="relative w-full h-screen overflow-hidden bg-[#020617] text-white">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/Images/staticglobe.png"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/Videos/globe-visual.webm" type="video/webm" />
            <source src="/Videos/globe-visual.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#020617]/60 via-[#020617]/20 to-transparent z-15" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent z-20" />
        </div>

        {/* System Status - Top Right */}
        <SystemStatus />

        <div className="relative z-30 h-full max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col justify-center">
          <div className="w-full flex flex-col items-start text-left">
            <h1 className="tracking-tight leading-[0.92] mb-4 md:mb-6 drop-shadow-2xl">
              Compute <br /> Without Boundaries
            </h1>
            <p className="text-[#22D3EE] tracking-wide drop-shadow-md mb-6 md:mb-8">
              The global routing layer for AI and high-performance workloads.
            </p>
            <div className="mb-6 md:mb-8"><Livetransactions /></div>
            <p className="text-white max-w-xl leading-relaxed mb-4 md:mb-6 drop-shadow-md">
              Route workloads to any GPU, instantly and automatically, at up to <span className="text-[#22D3EE]">80% lower cost</span> than traditional cloud.
            </p>
            <p className="italic text-gray-200 mb-8 md:mb-10 ml-24 md:ml-32 drop-shadow-md">A data center without walls.</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
             <button onClick={scrollToExplore} className="px-10 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md shadow-lg transition-all hover:scale-105 active:scale-95">
  Get Started
</button>

<a href="/getstarted" className="px-10 py-3.5 bg-white text-blue-900 rounded-md shadow-sm hover:bg-gray-100 transition-all active:scale-95 inline-flex items-center justify-center font-bold">
  Join the Network
</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* EXPLORE NETWORK */}
      {/* ===================================================================== */}
      <section id="explore-section" className="bg-[#020617] py-12 md:py-16 px-6 md:px-8 relative z-20">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-4 md:mb-6">
            <span className="section-label-cyan"><small>Explore</small></span>
          </div>
          <h2 className="text-white text-center mb-6 md:mb-8 tracking-tight">Explore the OpenGPU Network</h2>
          
          <div className="max-w-6xl mx-auto grid gap-6 md:gap-8 md:grid-cols-3">

            {/* Join the Network */}
            <div className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <h3 className="text-white mb-3 md:mb-4">Join the Network</h3>
              <p className="text-slate-300 doorway-description mb-6 md:mb-8">
                Join the global network to run workloads efficiently, or contribute your GPU capacity to earn revenue.
              </p>
              <a href="/getstarted" className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 doorway-button text-white bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] shadow-[0_0_22px_rgba(0,160,255,0.35)] hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,160,255,0.55)] transition">
                Get Started →
              </a>
            </div>

            {/* Enterprise Routing */}
            <div className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <h3 className="text-white mb-3 md:mb-4">Enterprise Routing</h3>
              <p className="text-slate-300 doorway-description mb-6 md:mb-8">
                The global routing layer for large-scale AI workloads.
                <span className="text-white"> 80% cost reduction • Global routing • Instant access • Enterprise billing.</span>
              </p>
              <a href="/enterprisemain" className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 doorway-button text-[#0A0F2C] bg-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] transition">
                Start Free Trial →
              </a>
            </div>

            {/* Blockchain */}
            <div className="rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <h3 className="text-white mb-3 md:mb-4">Blockchain</h3>
              <p className="text-slate-300 doorway-description mb-6 md:mb-8">
                Learn how the OpenGPU blockchain settles workloads and powers the network's utility model.
              </p>
              <a href="/howtobuy" className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 doorway-button text-white bg-gradient-to-r from-[#012A47] via-[#01486F] to-[#007A9F] shadow-[0_0_14px_rgba(0,110,160,0.25)] hover:shadow-[0_0_22px_rgba(0,110,160,0.35)] transition">
                View Token Guide →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* WHY OPENGPU EXISTS */}
      {/* ===================================================================== */}
      <section className="relative w-full bg-[#020617] py-12 md:py-16 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="mb-4 md:mb-6">
              <span className="section-label-cyan"><small>Our Mission</small></span>
            </div>
            <h2 className="text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
              Why <span className="bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] bg-clip-text text-transparent">OpenGPU</span> Exists
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Global compute sits fragmented. OpenGPU unifies it, routing workloads intelligently across every available GPU.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-[16.66%] right-[16.66%] -translate-y-1/2 z-0">
              <div className="relative h-0.5 bg-gradient-to-r from-slate-700 via-cyan-500/50 to-slate-700">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 border-r-2 border-t-2 border-cyan-500 rotate-45"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
              
              {/* Stage 1 */}
              <div className="group relative">
                <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2 h-full">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-white shadow-xl border border-white/10">1</div>
                  <div className="mb-6 md:mb-8 pt-4 flex justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-slate-500 rounded-full"></div>
                      <div className="absolute top-3 right-2 w-3 h-3 bg-slate-400 rounded-full"></div>
                      <div className="absolute bottom-5 left-7 w-2.5 h-2.5 bg-slate-500 rounded-full"></div>
                      <div className="absolute bottom-2 right-5 w-4 h-4 bg-slate-600 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-500 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-white mb-3 md:mb-4 tracking-tight">Fragmented Supply</h3>
                  <p className="text-slate-400 leading-relaxed">
                    GPU capacity scattered across clouds, data centers, and independent operators.
                  </p>
                </div>
              </div>

              {/* Stage 2 - HIGHLIGHTED */}
              <div className="group relative md:-mt-4">
                <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0A84FF]/10 to-[#22D3EE]/10 border border-[#22D3EE]/30 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.3)] hover:-translate-y-2 hover:scale-105 h-full">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] flex items-center justify-center text-white shadow-[0_0_24px_rgba(34,211,238,0.5)] animate-pulse">2</div>
                  <div className="mb-6 md:mb-8 pt-4 flex justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-[#0A84FF] to-[#22D3EE] rounded-full shadow-lg"></div>
                      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100">
                        <line x1="50" y1="50" x2="50" y2="10" stroke="#22D3EE" strokeWidth="1.5" />
                        <line x1="50" y1="50" x2="50" y2="90" stroke="#22D3EE" strokeWidth="1.5" />
                        <line x1="50" y1="50" x2="10" y2="50" stroke="#0A84FF" strokeWidth="1.5" />
                        <line x1="50" y1="50" x2="90" y2="50" stroke="#0A84FF" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] bg-clip-text text-transparent mb-3 md:mb-4 tracking-tight">OpenGPU Unifies</h3>
                  <p className="text-slate-300 leading-relaxed">
                    One intelligent routing layer connects every GPU source in real-time.
                  </p>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="group relative">
                <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2 h-full">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-white shadow-xl border border-white/10">3</div>
                  <div className="mb-6 md:mb-8 pt-4 flex justify-center">
                    <svg className="w-14 h-14 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white mb-3 md:mb-4 tracking-tight">Peak Performance</h3>
                  <p className="text-slate-400 leading-relaxed">
                    <span className="text-[#22D3EE]">80% cost savings.</span> Faster execution. Zero infrastructure management.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* PARTNER LOGOS */}
      {/* ===================================================================== */}
      <section className="w-full bg-slate-50 py-8 md:py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-[#0A0F2C] tracking-tight">
              Trusted by leading teams and infrastructure providers
            </h3>
            <p className="text-slate-500 mt-2 tracking-tight">
              <small>Used across production environments worldwide.</small>
            </p>
          </div>
      
          <div className="relative overflow-hidden w-full py-2">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[60px] bg-gradient-to-r from-slate-50 to-transparent z-20"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[60px] bg-gradient-to-l from-slate-50 to-transparent z-20"></div>
      
            <div className="flex w-max">
              <motion.div
                className="flex items-center gap-12 pr-12 flex-none"
                animate={{ x: ["-100%", "0%"] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                {partnerLogos.map((logo, i) => (
                  <div key={`t1-${i}`} className="flex items-center justify-center">
                    <div className="w-[180px] h-[68px] flex items-center justify-center opacity-90">
                      <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain brightness-110 grayscale-[20%]" />
                    </div>
                  </div>
                ))}
              </motion.div>
      
              <motion.div
                className="flex items-center gap-12 pr-12 flex-none"
                animate={{ x: ["-100%", "0%"] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                {partnerLogos.map((logo, i) => (
                  <div key={`t2-${i}`} className="flex items-center justify-center">
                    <div className="w-[180px] h-[68px] flex items-center justify-center opacity-90">
                      <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain brightness-110 grayscale-[20%]" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* BACKED BY GLOBAL SCALE */}
      {/* ===================================================================== */}
      <section className="relative bg-white py-12 md:py-16 px-6 md:px-8 overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-20">
          <div className="text-center mb-8 md:mb-12">
            <div className="mb-4 md:mb-6">
              <span className="section-label"><small>Global Network</small></span>
            </div>
            <h2 className="tracking-tight mb-6 md:mb-8">
              <span className="text-black">Backed by </span>
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] bg-clip-text text-transparent">Global Scale</span>
            </h2>
            <p className="text-[#64748b] max-w-3xl mx-auto leading-relaxed">
              The OpenGPU Network is live, production-tested, and running real AI workloads worldwide.
            </p>
          </div>

          <div className="w-full mb-8 md:mb-12">
            <LiveStats />
          </div>

          <div className="text-center">
             <p className="text-[#94a3b8] tracking-[0.2em] uppercase mb-8 md:mb-12">
               <small>Real Providers. Real Workloads. No hypothetical capacity claims.</small>
             </p>
             <div className="max-w-4xl mx-auto">
                <PricingComparator />
             </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* PROVIDER SUITE INSTALLER */}
      {/* ===================================================================== */}
      <section id="quickstart" className="w-full bg-gray-50 py-12 md:py-16 px-6 md:px-8 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="mb-4 md:mb-6">
              <span className="section-label"><small>Get Started</small></span>
            </div>
            <h2 className="tracking-tight mb-6 md:mb-8">
              <span className="text-[#020617]">Provider </span>
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] bg-clip-text text-transparent">Suite Installer</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Start earning with your GPU resources today. Download the provider suite for your operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">

            {/* Client Dashboard */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg text-center transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <svg className="w-7 h-7 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[#020617] mb-3 md:mb-4">Run Models</h3>
              <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed"><small>Access decentralized GPUs instantly.</small></p>
              <a href="https://client.opengpu.network/" className="block">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white shadow-md hover:brightness-110 transition">
                  Run Models →
                </button>
              </a>
              <a href="#" className="block mt-4 text-[#0A84FF] hover:underline transition"><small>API Docs →</small></a>
            </div>

            {/* macOS */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg text-center transition-all hover:-translate-y-1 hover:shadow-xl">
              <img src="/Assets/apple-black.png" alt="Apple" className="w-12 mx-auto mb-4 md:mb-6 opacity-90" />
              <h3 className="text-[#020617] mb-3 md:mb-4">macOS</h3>
              <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed"><small>For Apple Silicon and Intel Macs.</small></p>
              <a href="https://oerelease.opengpu.network/download/flavor/default/3.1.0/osx_arm64/OpenGPU-Provider-Suite-3.1.0.pkg" className="block">
                <button className="w-full py-3 rounded-xl bg-[#020617] text-white shadow-md hover:bg-gray-800 transition">
                  Download .pkg →
                </button>
              </a>
              <a href="#" className="block mt-4 text-[#0A84FF] hover:underline transition"><small>macOS docs →</small></a>
            </div>

            {/* Windows */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg text-center transition-all hover:-translate-y-1 hover:shadow-xl">
              <img src="/Assets/windows-black.png" alt="Windows" className="w-12 mx-auto mb-4 md:mb-6 opacity-90" />
              <h3 className="text-[#020617] mb-3 md:mb-4">Windows</h3>
              <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed"><small>For Windows 10/11 64-bit.</small></p>
              <a href="https://oerelease.opengpu.network/download/flavor/default/3.1.0/windows_64/OpenGPU-Provider-Suite-3.1.0.exe" className="block">
                <button className="w-full py-3 rounded-xl bg-[#020617] text-white shadow-md hover:bg-gray-800 transition">
                  Download .exe →
                </button>
              </a>
              <a href="#" className="block mt-4 text-[#0A84FF] hover:underline transition"><small>Windows docs →</small></a>
            </div>

            {/* Linux */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="text-center">
                <img src="/Assets/linux-black.png" alt="Linux" className="w-12 mx-auto mb-4 md:mb-6 opacity-90" />
                <h3 className="text-[#020617] mb-3 md:mb-4">Linux</h3>
              </div>
              <p className="text-gray-400 uppercase tracking-wider mb-3 md:mb-4"><small>Install via CLI:</small></p>
              <pre className="text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3 overflow-x-auto mb-6 md:mb-8 font-mono leading-relaxed">
                <small>
{`curl -o install.sh \\
https://raw.github...
chmod +x install.sh
./install.sh`}
                </small>
              </pre>
              <a href="https://opengpu.network/download/linux" className="block">
                <button className="w-full py-3 rounded-xl bg-[#020617] text-white shadow-md hover:bg-gray-800 transition">
                  Get Started →
                </button>
              </a>
              <a href="#" className="block mt-4 text-[#0A84FF] hover:underline transition text-center"><small>Linux docs →</small></a>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* WHY OGPU */}
      {/* ===================================================================== */}
      <section id="why-ogpu" className="w-full bg-[#F7F9FC] py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[52%_48%] gap-6 md:gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <img src="/Images/screenmain-transparant.png" alt="OGPU Platform" className="w-full rounded-xl object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="mb-4 md:mb-6">
              <span className="section-label"><small>Why OpenGPU</small></span>
            </div>
            <h2 className="tracking-tight mb-6 md:mb-8">
              <span className="text-[#020617]">Compute without limits </span>
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] bg-clip-text text-transparent">built for global routing.</span>
            </h2>
            <p className="text-[#475569] leading-relaxed mb-6 md:mb-8">
              OpenGPU provides a unified compute layer that routes workloads across multiple providers automatically.
              You get predictable performance, reliability, and lower operational overhead without managing infrastructure.
            </p>
            <a href="/whyogpu" className="px-8 py-3.5 rounded-2xl text-white bg-gradient-to-r from-[#005DEA] to-[#00C6FF] hover:shadow-[0_12px_32px_rgba(0,160,255,0.35)] transition-all duration-300 hover:-translate-y-[3px] block text-center">
              Learn More
            </a>
          </motion.div>
        </div>

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
              text: "Pay only for completed workloads with no idle cost. Customers see upto 80 percent lower operational spend compared to traditional cloud usage."
            }
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 md:p-8 flex flex-col border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02]">
              <div className="w-12 h-12 mb-4 md:mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00C6FF] shadow-[0_4px_14px_rgba(0,150,255,0.25)] transition-transform duration-300 hover:scale-110">
                <img src={card.imgSrc} alt={card.title} className="w-6 h-6 object-contain" />
              </div>
              <h3 className="text-[#0A0F2C] mb-3 md:mb-4 leading-snug">{card.title}</h3>
              <p className="text-[#475569] leading-relaxed">{card.text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===================================================================== */}
      {/* PROTOCOL */}
      {/* ===================================================================== */}
      <section>
        <Protocol />
      </section>

      {/* ===================================================================== */}
      {/* USE CASES */}
      {/* ===================================================================== */}
      <section id="workloads" className="w-full bg-[#F6F9FA] py-12 md:py-16 px-6 md:px-8">
        <div className="text-center mb-6 md:mb-8">
          <span className="section-label"><small>Use Cases</small></span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto mb-8 md:mb-12 rounded-2xl overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#0B3C66] to-[#0E5AA8] opacity-95" />
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,168,255,0.28),transparent_70%)] blur-3xl opacity-50" />
          <div className="relative z-10 px-6 md:px-10 py-12 md:py-14 text-center text-white">
            <h2 className="leading-tight mb-4 md:mb-6">Built for real AI workloads, not demos.</h2>
            <p className="text-white/85 max-w-3xl mx-auto leading-relaxed">
              Production grade inference, training, finetuning and generative workloads. On demand elasticity and lower cost, powered entirely by decentralized GPUs.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
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
              className="backdrop-blur-md bg-white/90 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mb-4 md:mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75 shadow-inner shadow-[0_4px_14px_rgba(0,150,255,0.25)] transition-transform duration-300 hover:scale-110 [filter:none]">
                <img src={item.src} alt={item.title} className="w-6 h-6 object-contain !invert-0 !brightness-100 !contrast-100" style={{ filter: "none" }} />
              </div>
              <h4 className="text-[#0A0F2C] mb-3 md:mb-4 leading-snug">{item.title}</h4>
              <p className="text-[#475569] mb-4 md:mb-6 leading-relaxed">{item.text}</p>
              <a className="text-cyan-600 hover:text-blue-600 transition" href="/workloads"><small>Learn more →</small></a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-[#334155] tracking-wide">
            <small>Trusted by teams running production grade AI and inference workloads today.</small>
          </p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* RELAY */}
      {/* ===================================================================== */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-500 to-amber-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-amber-500 to-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-4 md:mb-6">
            <span className="section-label"><small>Relay</small></span>
          </div>

          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[#0A0F2C] tracking-tight mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-[#EA580C] to-[#F59E0B] bg-clip-text text-transparent">One HTTPS endpoint</span>
              <span className="text-[#0A0F2C]"> for decentralized GPU power</span>
            </h2>
            <p className="text-[#475569] max-w-3xl mx-auto leading-relaxed">
              Relay gives you a simple interface to run AI workloads on the OpenGPU network. You send a request over HTTPS. Relay finds the right GPUs, runs the job, and returns the result.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center mb-12 md:mb-16 max-w-6xl mx-auto">
            
            {/* Direct Mode */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 mb-4 md:mb-6 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#F59E0B] flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-[#0A0F2C] mb-3 md:mb-4">Direct Mode</h3>
                <p className="text-[#78716C] leading-relaxed doorway-description">Low latency runs on trusted hosts, built for speed and reliability.</p>
              </div>
            </motion.div>

            {/* Center Server Icon */}
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:flex flex-col items-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5">
                <div className="w-full h-full bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300 opacity-30" />
              </div>
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#F59E0B] flex items-center justify-center shadow-[0_0_50px_rgba(234,88,12,0.4)]">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
            </motion.div>

            {/* OpenGPU Mode */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 mb-4 md:mb-6 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#F59E0B] flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-[#0A0F2C] mb-3 md:mb-4">OpenGPU Mode</h3>
                <p className="text-[#78716C] leading-relaxed doorway-description">Decentralized network where GPU providers and clients set prices and availability in real time.</p>
              </div>
            </motion.div>

          </div>

          <div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200">
              <svg className="w-4 h-4 text-[#EA580C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[#78350F] font-semibold tracking-wide"><small>Relay runs on two compute paths</small></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Simple Interface", text: "One HTTPS endpoint. Works with any backend or framework." },
              { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", title: "Smart Routing", text: "Relay selects the best providers based on performance and live health." },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Automatic Failover", text: "Relay retries or re-routes automatically if a provider slows or fails." }
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 * (i + 1) }} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 md:mb-6 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center border border-orange-200">
                  <svg className="w-6 h-6 text-[#EA580C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-[#0A0F2C] mb-3 md:mb-4">{feature.title}</h4>
                <p className="text-[#78716C] doorway-description">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 border-2 border-orange-200/60 rounded-2xl p-6 md:p-10 shadow-xl">
              <div className="flex items-start gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EA580C] to-[#F59E0B] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0A0F2C] mb-3 md:mb-4">Enterprise billing that works like any cloud</h3>
                  <p className="text-[#78716C] leading-relaxed mb-4 md:mb-6 doorway-description">
                    Relay includes a full fiat billing system so teams can use decentralized GPUs the same way they use AWS, Google Cloud, or Azure. No tokens, no crypto wallets, no blockchain steps required.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#EA580C] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#78716C]"><small>Monthly invoices and standard payments</small></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#EA580C] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#78716C]"><small>80% cheaper than centralized clouds</small></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <a href="https://relay.opengpu.network" className="inline-block px-10 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#EA580C] to-[#F59E0B] shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_14px_40px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all duration-300">
              Visit Relay →
            </a>
            <p className="text-[#94A3B8] mt-4 md:mt-6 tracking-wide"><small>Connect your stack through a single HTTPS endpoint</small></p>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* BLOCKCHAIN */}
      {/* ===================================================================== */}
      <section id="blockchain" className="relative w-full bg-[#040814] py-12 md:py-16 px-6 md:px-8 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,233,255,0.35),transparent_70%)] blur-3xl opacity-70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center mb-4 md:mb-6">
            <span className="section-label-cyan"><small>Infrastructure</small></span>
          </div>

          <h2 className="text-center mb-4 md:mb-6 leading-tight">The OpenGPU Blockchain</h2>

          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E9FF]/10 border border-[#00E9FF]/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00E9FF] shadow-[0_0_8px_rgba(0,233,255,1)] animate-ping"></span>
            <span className="text-[#00E9FF] tracking-wide uppercase"><small>Chain Verified</small></span>
          </div>

          <p className="text-gray-300 max-w-3xl text-center leading-relaxed mb-8 md:mb-12 doorway-description">
            A high-throughput, compute-optimized blockchain purpose-built for routing, verifying and settling GPU workloads. Sub-second blocks, parallel execution and task-based settlement.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 md:gap-14 items-center w-full mb-8 md:mb-12">

            {/* Animated Block Grid */}
            <div className="w-full">
              <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-3xl border border-[#00E9FF]/30 bg-[#030914] shadow-[0_0_60px_rgba(0,233,255,0.35)] px-6 md:px-8 py-6 md:py-8">
                <div className="grid grid-cols-10 sm:grid-cols-14 gap-2.5">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-4 h-4 rounded-md bg-[#00E9FF]/20 border border-[#00E9FF]/30"
                      animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.1, repeat: Infinity, delay: (i % 20) * 0.05, ease: "easeInOut" }}
                    />
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between text-[#00E9FF]/90">
                  <span className="uppercase tracking-wider"><small>Parallel task blocks</small></span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E9FF] shadow-[0_0_12px_rgba(0,233,255,0.9)]" />
                    <span className="tracking-wider"><small>Live verification</small></span>
                  </span>
                </div>
              </div>
              <p className="text-gray-300 tracking-wider uppercase text-center mt-6">
                <small>Around ten thousand tasks per second visualized</small>
              </p>
            </div>

            {/* Blockchain Features */}
            <div className="space-y-4 md:space-y-6">
              <p className="tracking-widest text-[#00E9FF] uppercase"><small>Purpose-built L1</small></p>
              <h3 className="text-white">A blockchain engineered for compute, not speculation.</h3>
              <p className="text-gray-300 leading-relaxed doorway-description">
                Every transaction carries workload metadata, provider updates and verification proofs. Consensus and routing are tightly coupled so the chain keeps up with real-time task flow.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-7 h-7 rounded-full bg-[#00E9FF]/10 flex items-center justify-center border border-[#00E9FF]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E9FF]" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-white">EVM Compatible</h4>
                    <p className="text-gray-300 doorway-description">Use existing tooling while targeting a chain optimized for task-level execution.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 w-7 h-7 rounded-full bg-[#00E9FF]/10 flex items-center justify-center border border-[#00E9FF]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E9FF]" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-white">Proof of Execution</h4>
                    <p className="text-gray-300 doorway-description">Tasks are validated, verified and settled automatically on-chain.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Pipeline Bar */}
          <div className="w-full max-w-5xl mb-8 md:mb-12">
            <div className="w-full bg-[#00E9FF]/10 border border-[#00E9FF]/30 rounded-2xl px-6 md:px-8 py-6 md:py-7 shadow-[0_20px_60px_rgba(0,233,255,0.25)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="text-left">
                  <p className="tracking-widest text-[#00E9FF] uppercase mb-2"><small>On-chain verification pipeline</small></p>
                  <p className="text-gray-300 max-w-md doorway-description">Submit, route, execute, verify and settle — engineered as a unified compute workflow.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-white/90">
                  {["Submit", "Route", "Execute", "Verify", "Settle"].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00E9FF] shadow-[0_0_8px_rgba(0,233,255,1)]" />
                        <span><small>{step}</small></span>
                      </div>
                      {i < arr.length - 1 && (
                        <motion.span className="text-[#00E9FF]/70" animate={{ x: [0, 4, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}>
                          →
                        </motion.span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-300 text-center md:text-left max-w-xl doorway-description">
              Millions of compute tasks verified on mainnet. Explore live execution on OpenGPU Scan.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              <a href="https://ogpuscan.io/" className="px-7 py-3 rounded-xl bg-white text-[#020617] shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] transition">
                View OpenGPU Scan
              </a>
              <a href="/blockchain" className="px-7 py-3 rounded-xl border border-[#00E9FF]/50 text-[#00E9FF] hover:bg-[#00E9FF]/10 transition">
                Learn about the chain
              </a>
            </div>
          </div>

          <p className="text-gray-400 mt-6 md:mt-8 tracking-widest uppercase text-center">
            <small>Real workloads. Real verification. Real settlement.</small>
          </p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* BUILT FOR EVERYONE */}
      {/* ===================================================================== */}
      <section id="built-for-everyone" className="relative w-full bg-[#F7F9FC] py-12 md:py-16 px-6 md:px-8 overflow-hidden">
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

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.9, ease: "easeOut" }} className="relative z-10 text-center mb-6 md:mb-8">
          <span className="section-label"><small>Community</small></span>
          <h2 className="leading-tight bg-gradient-to-r from-[#005DEA] to-[#00C6FF] bg-clip-text text-transparent mt-4">
            Now let us show who it unlocks value for.
          </h2>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto text-center mb-6 md:mb-8">
          <h2 className="text-[#0A0F2C] leading-tight mb-4 md:mb-6">Built for everyone.</h2>
          <p className="text-[#475569] max-w-3xl mx-auto leading-relaxed">
            A network where everyone can build, contribute and benefit. Developers run models, enterprises migrate workloads, researchers scale experiments and providers earn from compute. OpenGPU is the connective layer powering them all.
          </p>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { title: "Developers", text: "Run or experiment instantly without provisioning or DevOps." },
              { title: "Enterprises", text: "Migrate compute seamlessly and reduce operational cost." },
              { title: "Researchers", text: "Scale experiments and simulations without GPU wait times." },
              { title: "GPU providers", text: "Earn per task with on-chain verification." }
            ].map((role, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.1 }} className="flex flex-col items-center text-center">
                <div className="w-5 h-5 mb-4 md:mb-6 rounded-full bg-[#00C6FF] shadow-[0_0_18px_rgba(0,198,255,0.4)]" />
                <h3 className="text-[#0A0F2C] mb-3 md:mb-4">{role.title}</h3>
                <p className="text-[#475569] max-w-xs leading-relaxed">{role.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-[#0F172A] tracking-wide text-center mb-8 md:mb-10">
          <small>The OpenGPU ecosystem connects everyone through a single global compute network.</small>
        </p>

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-[#0A0F2C] mb-4 md:mb-6">Explore the OpenGPU ecosystem</h3>
            <p className="text-[#475569] mb-6 md:mb-8">Discover workloads, tools, dashboards and infrastructure powering the network.</p>
            <a href="https://management.opengpu.network/dashboard" className="inline-block px-8 py-3 rounded-xl text-white bg-gradient-to-r from-[#005DEA] to-[#00C6FF] shadow-[0_10px_30px_rgba(0,160,255,0.35)] hover:opacity-95 transition">
              Explore ecosystem →
            </a>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-[#0A0F2C] mb-4 md:mb-6">Join the OpenGPU community</h3>
            <p className="text-[#475569] mb-6 md:mb-8">Be part of a global ecosystem shaping decentralized compute.</p>
            <a href="https://t.me/opengpu_network" className="inline-block px-8 py-3 rounded-xl text-white bg-gradient-to-r from-[#005DEA] to-[#00C6FF] shadow-[0_10px_30px_rgba(0,160,255,0.35)] hover:opacity-95 transition mb-6 md:mb-8">
              Join Telegram →
            </a>
            <div className="grid grid-cols-7 gap-4">
              {["/Assets/x.png", "/Assets/telegram.png", "/Assets/discord.png", "/Assets/tiktok.png", "/Assets/linkedin.png", "/Assets/instagram.png", "/Assets/youtube.png"].map((icon, i) => (
                <a key={i} href="#" className="flex justify-center">
                  <img src={icon} className="w-5 h-5 opacity-80 hover:opacity-100 transition" alt="Social" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* FOOTER */}
      {/* ===================================================================== */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center">
        <div className="text-[#020617] mb-4 tracking-tighter uppercase"><h2>OGPU</h2></div>
        <p className="text-gray-400"><small>© 2026 OpenGPU Network. All rights reserved.</small></p>
      </footer>

    </main>
  );
}