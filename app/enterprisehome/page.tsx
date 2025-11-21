"use client";

// app/enterprisehome/page.tsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function EnterprisePage() {
  // NAV STATE (same pattern as homepage)
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  let hoverTimeout: ReturnType<typeof setTimeout> | null = null;

  const open = (menu: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenMenu(menu);
  };

  const close = () => {
    hoverTimeout = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#040814] text-white">

      {/* FIXED HEADER — MATCHES MAIN SITE NAV, CTA IS 'BACK TO MAIN SITE' */}
      <header className="fixed top-0 left-0 w-full z-[999]">
        <nav className="w-full flex items-center justify-between px-4 md:px-10 py-3 
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
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-200 font-medium">

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

              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl 
                            bg-[#020617] border border-white/10 shadow-xl p-6 flex gap-10 z-[999]
                            transition-all duration-200 
                            ${openMenu === "platform" ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                {/* LEFT */}
                <div className="w-1/2 flex flex-col">
                  <h3 className="text-white text-lg font-semibold mb-2">The OGPU Platform</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    The routing layer for decentralized AI compute. Explore global workload movement.
                  </p>
                  <a href="/" className="text-sm font-semibold text-[#00E9FF] hover:text-[#8AF2FF]">
                    Platform Overview →
                  </a>
                </div>

                {/* RIGHT GRID */}
                <div className="w-1/2 grid grid-cols-1 gap-4">
                  <a href="/" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">📘</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Overview</p>
                      <p className="text-gray-400 text-xs">Datacenter without walls.</p>
                    </div>
                  </a>

                  <a href="/#how-ogpu-works" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🧩</div>
                    <div>
                      <p className="text-white text-sm font-semibold">How OGPU Works</p>
                      <p className="text-gray-400 text-xs">Routing, marketplace, verification.</p>
                    </div>
                  </a>

                  <a href="/#relay" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🔌</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Relay Gateway</p>
                      <p className="text-gray-400 text-xs">Enterprise access with fiat.</p>
                    </div>
                  </a>

                  <a href="/#workloads" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">⚙️</div>
                    <div>
                      <p className="text-white text-sm font-semibold">AI Workloads</p>
                      <p className="text-gray-400 text-xs">Inference, training, simulation.</p>
                    </div>
                  </a>

                  <a href="/#blockchain" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">⛓️</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Blockchain</p>
                      <p className="text-gray-400 text-xs">High throughput L1.</p>
                    </div>
                  </a>

                  <a href="https://ogpuscan.io" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">📊</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Live Network Stats</p>
                      <p className="text-gray-400 text-xs">Tasks, nodes, performance.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== SOLUTIONS ===== */}
            <div className="relative group/nav">
              <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
                Solutions <span className="text-[10px] mt-[2px]">▾</span>
              </button>

              <div
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl bg-[#020617]
                           border border-white/10 shadow-xl p-6 opacity-0 invisible
                           group-hover/nav:opacity-100 group-hover/nav:visible
                           transition-all duration-200 flex gap-10 z-[999]"
              >
                <div className="w-1/2 flex flex-col">
                  <h3 className="text-white text-lg font-semibold mb-2">Solutions for Every Use Case</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Route AI workloads globally with redundancy and scale.
                  </p>
                  <a href="/enterprisehome" className="text-sm font-semibold text-[#00E9FF] hover:text-[#8AF2FF]">
                    Explore Solutions →
                  </a>
                </div>

                <div className="w-1/2 grid grid-cols-1 gap-4">
                  <a href="/#workloads" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">⚡</div>
                    <div>
                      <p className="text-white text-sm font-semibold">AI Companies</p>
                      <p className="text-gray-400 text-xs">Inference & fine tuning.</p>
                    </div>
                  </a>

                  <a href="/enterprisehome" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🏢</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Enterprise Pilot</p>
                      <p className="text-gray-400 text-xs">Route workloads globally.</p>
                    </div>
                  </a>

                  <a href="/#quickstart" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🖥️</div>
                    <div>
                      <p className="text-white text-sm font-semibold">GPU Providers</p>
                      <p className="text-gray-400 text-xs">Earn per task.</p>
                    </div>
                  </a>

                  <a href="/#built-for-everyone" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🔬</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Researchers</p>
                      <p className="text-gray-400 text-xs">Zero queue experiments.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== DOCS ===== */}
            <div className="relative group/nav">
              <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
                Docs <span className="text-[10px] mt-[2px]">▾</span>
              </button>

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
                  <a href="https://opengpu.network/docs" className="text-sm font-semibold text-[#00E9FF]">
                    Visit Docs →
                  </a>
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
                      <p className="text-gray-400 text-xs">High-level overview.</p>
                    </div>
                  </a>

                  <a href="https://opengpu.network/roadmap" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🛣️</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Roadmap</p>
                      <p className="text-gray-400 text-xs">What's coming next.</p>
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
                      <p className="text-gray-400 text-xs">Clients & SDKs.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== COMPANY ===== */}
            <div className="relative group/nav">
              <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
                Company <span className="text-[10px] mt-[2px]">▾</span>
              </button>

              <div
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl bg-[#020617]
                           border border-white/10 shadow-xl p-6 opacity-0 invisible
                           group-hover/nav:opacity-100 group-hover/nav:visible
                           transition-all duration-200 flex gap-10 z-[999]"
              >
                <div className="w-1/2 flex flex-col">
                  <h3 className="text-white text-lg font-semibold mb-2">About the Company</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Learn more about OGPU, mission, contributors, and history.
                  </p>
                  <a href="https://opengpu.network/about" className="text-sm font-semibold text-[#00E9FF]">
                    About OGPU →
                  </a>
                </div>

                <div className="w-1/2 grid grid-cols-1 gap-4">
                  <a href="https://opengpu.network/about" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🏛️</div>
                    <div>
                      <p className="text-white text-sm font-semibold">About OGPU</p>
                      <p className="text-gray-400 text-xs">Mission & story.</p>
                    </div>
                  </a>

                  <a href="https://opengpu.network/team" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">👥</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Team</p>
                      <p className="text-gray-400 text-xs">Core contributors.</p>
                    </div>
                  </a>

                  <a href="https://opengpu.network/press" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">📰</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Press & Media</p>
                      <p className="text-gray-400 text-xs">Logos & coverage.</p>
                    </div>
                  </a>

                  <a href="https://opengpu.network/careers" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">💼</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Careers</p>
                      <p className="text-gray-400 text-xs">Join the team.</p>
                    </div>
                  </a>

                  <a href="mailto:hello@opengpu.network" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">✉️</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Contact</p>
                      <p className="text-gray-400 text-xs">Reach OGPU.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* DESKTOP CTA */}
            <a
              href="/"
              className="ml-2 px-8 py-3 rounded-xl font-semibold bg-[#0A84FF]
                         text-white text-sm transition hover:bg-[#0A84FF]/90 
                         hover:shadow-[0_8px_25px_rgba(10,132,255,0.35)]"
            >
              Back To Main Site
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

        {/* MOBILE PANEL — SLIDE IN */}
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
                <a href="/#how-ogpu-works" className="text-gray-300 text-sm">How OGPU Works</a>
                <a href="/#relay" className="text-gray-300 text-sm">Relay Gateway</a>
                <a href="/#workloads" className="text-gray-300 text-sm">AI Workloads</a>
                <a href="/#blockchain" className="text-gray-300 text-sm">Blockchain</a>
                <a href="https://ogpuscan.io" className="text-gray-300 text-sm">Live Stats</a>
              </div>

              <div className="w-full h-px bg-white/10" />

              {/* SOLUTIONS */}
              <div className="flex flex-col space-y-2">
                <p className="text-white font-semibold text-lg">Solutions</p>

                <a href="/#workloads" className="text-gray-300 text-sm">AI Companies</a>
                <a href="/enterprisehome" className="text-gray-300 text-sm">Enterprise Pilot</a>
                <a href="/#quickstart" className="text-gray-300 text-sm">GPU Providers</a>
                <a href="/#built-for-everyone" className="text-gray-300 text-sm">Researchers</a>
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

                <a href="https://opengpu.network/about" className="text-gray-300 text-sm">About</a>
                <a href="https://opengpu.network/team" className="text-gray-300 text-sm">Team</a>
                <a href="https://opengpu.network/press" className="text-gray-300 text-sm">Press</a>
                <a href="https://opengpu.network/careers" className="text-gray-300 text-sm">Careers</a>
                <a href="mailto:hello@opengpu.network" className="text-gray-300 text-sm">Contact</a>
              </div>

              {/* MOBILE CTA */}
              <a
                href="/"
                className="mt-4 px-6 py-3 rounded-xl text-center font-semibold bg-[#0A84FF] 
                           text-white shadow-lg w-auto self-center"
              >
                Back To Main Site
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ELECTRIC GLOW BAR */}
        <div className="relative w-full h-[1.5px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF] to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[#00E9FF] opacity-40 blur-sm" />
        </div>
      </header>




      {/* PAGE CONTENT */}
      <section className="w-full min-h-screen bg-[#040814] pt-40 pb-24 px-6 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
          {/* LEFT: COPY */}
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#00C6FF] uppercase">
              Enterprise Pilot
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Run an OGPU pilot.
              <br />
              Benchmark real AI workloads.
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Test your inference, training or generative pipelines on the OGPU Network,
              a decentralized GPU infrastructure delivering{" "}
              <span className="font-semibold text-[#00C6FF]">
                roughly 60–80% cost reduction
              </span>{" "}
              compared to centralized clouds.
            </p>

            <div className="space-y-3 text-sm md:text-base text-gray-300">
              <div className="flex gap-3 items-start">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#00C6FF] shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
                <p>
                  <span className="font-semibold text-white">Task-based billing.</span>{" "}
                  Pay only for executed work, not idle GPUs.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#00C6FF] shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
                <p>
                  <span className="font-semibold text-white">Real workloads, not demos.</span>{" "}
                  Run your production-style inference, training, RAG or agents.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#00C6FF] shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
                <p>
                  <span className="font-semibold text-white">Enterprise-grade reliability.</span>{" "}
                  Decentralized routing with automatic failover and on-chain verification.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#00E9FF] shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
                <p>
                  <span className="font-semibold text-white">No obligation pilot.</span>{" "}
                  Free to run, zero commitment. You keep the benchmark data.
                </p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-400 mt-4 max-w-sm">
              Once submitted, the OGPU team will review your workload and respond with next
              steps, recommended GPU profiles and a pilot start window.
            </p>
          </div>

          {/* RIGHT: MAILCHIMP FORM CARD */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.45)] border border-slate-200 p-6 md:p-8">
              <div className="flex flex-col items-center mb-6">
                <img
                  src="/Images/OGPU-LOGO-Main-black.png"
                  alt="OGPU Logo"
                  className="h-20 w-auto mb-3"
                />
                <h2 className="text-xl md:text-2xl font-semibold text-[#0F172A]">
                  Request your pilot
                </h2>
                <p className="text-sm md:text-base text-[#4B5563] mt-1 text-center">
                  Tell us about your workload and we&apos;ll help you benchmark it on OGPU.
                </p>
              </div>

              <form
                action="https://network.us6.list-manage.com/subscribe/post?u=9ca8c44250832e3001ac4aaa8&id=1e9492eb62&f_id=004c54e5f0&redirect=https%3A%2F%2Fopengpu.network%2Fpilot-confirmed"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="space-y-4"
                noValidate
              >
                {/* ROW 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="FNAME"
                    placeholder="Name *"
                    required
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="COMPANY"
                    placeholder="Company"
                  />
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Work email *"
                    required
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="PROJTYPE"
                    placeholder="Project type (LLM, RAG, agents, gen AI...)"
                  />
                </div>

                {/* ROW 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="GPUS"
                    placeholder="GPU demand (A100, H100, 4090...)"
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="PROVIDER"
                    placeholder="Current provider (AWS, Azure, etc.)"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <textarea
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF] min-h-[120px]"
                    name="MESSAGE"
                    placeholder="Tell us about your workload, goals, or timeline..."
                    aria-label="Message"
                  />
                </div>

                {/* TAGS HIDDEN FIELD */}
                <input type="hidden" name="tags" value="Pilot Lead" />

                {/* HONEYPOT (BOT FIELD) */}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input
                    type="text"
                    name="b_9ca8c44250832e3001ac4aaa8_1e9492eb62"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="w-full mt-2 bg-gradient-to-r from-[#001F4E] to-[#00C6FF] text-white py-3.5 rounded-xl text-sm md:text-base font-semibold border-none cursor-pointer transition-opacity duration-200 hover:opacity-90"
                >
                  Submit pilot request
                </button>

                {/* RESPONSE PLACEHOLDERS (Mailchimp) */}
                <div id="mce-responses" className="clear text-xs text-red-600 mt-2 space-y-1">
                  <div className="response" id="mce-error-response" style={{ display: "none" }} />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer className="w-full bg-[#020617] text-white/70 text-sm py-6 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/Images/OGPU-LOGO-Main-final.png"
              alt="OGPU Logo"
              className="h-10 w-auto opacity-90"
            />
            <span>© {new Date().getFullYear()} OGPU Network. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <a href="/" className="hover:text-white transition">
              Main site
            </a>
            <a href="/#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="/#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
