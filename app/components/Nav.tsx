"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav() {
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
    <>
      {/* FIXED HEADER — Matches Homepage */}
      <header className="fixed top-0 left-0 w-full z-[999]">
        <nav className="w-full flex items-center justify-between px-4 md:px-10 py-3 
                        bg-[#00040F]/70 backdrop-blur-xl border-b border-[#0A84FF]/40">

          {/* LOGO */}
          <a href="/" className="relative z-[1000]">
            <img
              src="/Images/OGPU-LOGO-Main-final.png"
              alt="OGPU Logo"
              className="h-10 w-auto md:h-16"
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
              <button className={`px-2 py-1 flex items-center gap-1 transition ${
                openMenu === "platform" ? "text-white" : "hover:text-white"
              }`}>
                Platform <span className="text-[10px] mt-[2px]">▾</span>
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[640px] rounded-2xl 
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

                {/* RIGHT */}
                <div className="w-1/2 grid grid-cols-1 gap-4">

                  <a href="/" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">📘</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Overview</p>
                      <p className="text-gray-400 text-xs">Datacenter without walls.</p>
                    </div>
                  </a>

                  <a href="/howogpuworks" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🧩</div>
                    <div>
                      <p className="text-white text-sm font-semibold">How OGPU Works</p>
                      <p className="text-gray-400 text-xs">Routing, marketplace, verification.</p>
                    </div>
                  </a>

                  <a href="/relay" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🔌</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Relay Gateway</p>
                      <p className="text-gray-400 text-xs">Enterprise access with fiat.</p>
                    </div>
                  </a>

                  <a href="/workloads" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">⚙️</div>
                    <div>
                      <p className="text-white text-sm font-semibold">AI Workloads</p>
                      <p className="text-gray-400 text-xs">Inference, training.</p>
                    </div>
                  </a>

                  <a href="/blockchain" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
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

                  {/* NEW — MULTISENDER */}
                  <a href="https://dapps.opengpu.network/token-creator" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">📤</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Tokencreator</p>
                      <p className="text-gray-400 text-xs">Pick the type of ORC-20 token you'd like to create!</p>
                    </div>
                  </a>

                  {/* NEW — OpenNFT */}
                  <a href="https://nft.opengpu.network/" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl"></div>
                    <div>
                      <p className="text-white text-sm font-semibold">OpenNFT</p>
                      <p className="text-gray-400 text-xs">Unlock exclusive benefits.</p>
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
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl 
                            bg-[#020617] border border-white/10 shadow-xl p-6 opacity-0 invisible
                            group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 flex gap-10 z-[999]"
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
                  <a href="/aicompanies" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">⚡</div>
                    <div>
                      <p className="text-white text-sm font-semibold">AI Companies</p>
                      <p className="text-gray-400 text-xs">Inference & fine-tuning.</p>
                    </div>
                  </a>

                  <a href="/enterprisehome" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">🏢</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Enterprise Pilot</p>
                      <p className="text-gray-400 text-xs">Global workload routing.</p>
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
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl 
                            bg-[#020617] border border-white/10 shadow-xl p-6 opacity-0 invisible
                            group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 flex gap-10 z-[999]"
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
                      <p className="text-gray-400 text-xs">API and SDKs.</p>
                    </div>
                  </a>

                  <a href="https://opengpu.network/docs/whitepaper.pdf" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="text-[#00E9FF] text-xl">📄</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Whitepaper</p>
                      <p className="text-gray-400 text-xs">Technical protocol foundation.</p>
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
                      <p className="text-gray-400 text-xs">What’s coming.</p>
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
                      <p className="text-white text-sm font-semibold">GitHub</p>
                      <p className="text-gray-400 text-xs">Clients & SDKs.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== COMPANY & NEWS ===== */}
            <div className="relative group/nav">
              <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
                Company & News <span className="text-[10px] mt-[2px]">▾</span>
              </button>

              <div
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-[880px] rounded-2xl 
                            bg-[#020617] border border-white/10 shadow-xl p-6 opacity-0 invisible
                            group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-[999] grid grid-cols-2 gap-8"
              >
                {/* LEFT */}
                <div className="w-full flex flex-col">
                  <h3 className="text-white text-lg font-semibold mb-2">About the Company</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Learn more about OGPU, mission, contributors, and history.
                  </p>
                  <a href="/about" className="text-sm font-semibold text-[#00E9FF] mb-3">
                    About OGPU →
                  </a>

                  <div className="flex flex-col gap-3">
                    <a href="/about" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
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
                        <p className="text-gray-400 text-xs">Core contributors. (Coming Soon)</p>
                      </div>
                    </a>

                    <a href="https://opengpu.network/press" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                      <div className="text-[#00E9FF] text-xl">📰</div>
                      <div>
                        <p className="text-white text-sm font-semibold">Press & Media</p>
                        <p className="text-gray-400 text-xs">Live coverage & assets.</p>
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
                  </div>
                </div>

                {/* RIGHT — LATEST NEWS */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3">Latest News</h3>

                  <div className="grid grid-cols-1 gap-4">
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

                    <a
                      href="https://fnctn1.com/"
                      target="_blank"
                      className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
                    >
                      <img
                        src="https://opengpu.network/image/twitter/dubai-event.png"
                        className="w-full h-24 object-cover"
                        alt="Function 1 Event"
                      />
                      <div className="p-3">
                        <p className="text-white text-sm font-semibold">
                          OGPU is heading to Function 1 Dubai!
                        </p>
                        <p className="text-gray-400 text-xs">Festival Arena • 18–19 Nov 2025</p>
                      </div>
                    </a>

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

            {/* ===== ACCELERATION CENTER ===== */}
            <div className="relative group/nav">
              <button className="px-2 py-1 flex items-center gap-1 text-gray-200 hover:text-white transition">
                Acceleration Center <span className="text-[10px] mt-[2px]">▾</span>
              </button>

              <div
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-[420px] rounded-2xl bg-[#020617]
                            border border-white/10 shadow-xl p-5 opacity-0 invisible group-hover/nav:opacity-100 
                            group-hover/nav:visible transition-all duration-200 flex flex-col gap-3 z-[999]"
              >
                <h3 className="text-white text-lg font-semibold mb-1">Acceleration Center</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  OGPU's First Phase Open Acceleration Program of $200K to Fuel Next-Gen Web3 & AI Innovation.
                </p>

                <a href="https://opengpu.network/acceleration" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl" />
                  <div>
                    <p className="text-white text-sm font-semibold">Acceleration</p>
                    <p className="text-gray-400 text-xs">
                      The Open Acceleration Program supports innovators with funding, GPUs, and grants.
                    </p>
                  </div>
                </a>

                <a href="https://takoswap.app/" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🐙</div>
                  <div>
                    <p className="text-white text-sm font-semibold">TakoSwap</p>
                    <p className="text-gray-400 text-xs">Swap and route OGPU ecosystem assets.</p>
                  </div>
                </a>

                <a href="https://opengpu.network/opensale" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🪙</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Opensale</p>
                    <p className="text-gray-400 text-xs">Primary launches for ecosystem tokens.</p>
                  </div>
                </a>

                <a href="https://opengpu.network/bridgex" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🌉</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Bridge X</p>
                    <p className="text-gray-400 text-xs">Cross-chain liquidity & routing.</p>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA BUTTON */}
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
                <a href="/howogpuworks" className="text-gray-300 text-sm">How OGPU Works</a>
                <a href="/relay" className="text-gray-300 text-sm">Relay Gateway</a>
                <a href="/workloads" className="text-gray-300 text-sm">AI Workloads</a>
                <a href="/blockchain" className="text-gray-300 text-sm">Blockchain</a>
                <a href="https://ogpuscan.io" className="text-gray-300 text-sm">Live Stats</a>

                {/* Added mobile versions of new links */}
                <a href="https://dapps.opengpu.network/token-creator" className="text-gray-300 text-sm">Tokencreator</a>
                <a href="https://nft.opengpu.network/" className="text-gray-300 text-sm">OpenNFT</a>
              </div>

              <div className="w-full h-px bg-white/10" />

              {/* SOLUTIONS */}
              <div className="flex flex-col space-y-2">
                <p className="text-white font-semibold text-lg">Solutions</p>

                <a href="/aicompanies" className="text-gray-300 text-sm">AI Companies</a>
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
                <a href="https://opengpu.network/team" className="text-gray-300 text-sm">Team (Coming Soon)</a>
                <a href="https://opengpu.network/press" className="text-gray-300 text-sm">Press</a>
                <a href="https://opengpu.network/careers" className="text-gray-300 text-sm">Careers</a>
                <a href="mailto:hello@opengpu.network" className="text-gray-300 text-sm">Contact</a>
              </div>

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
    </>
  );
}
