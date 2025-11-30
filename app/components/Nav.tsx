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
{/* FIXED HEADER — CENTERED NAV + RIGHT CTA */}
<header className="fixed top-0 left-0 w-full z-[999]">
  <nav
    className="w-full px-4 md:px-20 py-3 
               bg-[#00040F]/70 backdrop-blur-xl border-b border-[#0A84FF]/40
               flex items-center justify-between"
  >

    {/* LEFT — LOGO */}
    <div className="flex-shrink-0">
      <a href="/" className="relative z-[1000]">
        <img
          src="/Images/OGPU-LOGO-Main-final.png"
          className="h-10 md:h-16 w-auto"
          alt="OGPU Logo"
        />
      </a>
    </div>

    {/* CENTER — NAV MENU */}
    <div className="hidden lg:flex flex-1 items-center justify-center 
                    gap-7 text-[15px] text-gray-200 font-semibold">

      {/* ========================= PLATFORM ========================= */}
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
            <div className="w-1/2 flex flex-col">
              <h3 className="text-white text-lg font-semibold mb-2">The OGPU Platform</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The routing layer for decentralized AI compute. Explore global workload movement.
              </p>
            </div>

            <div className="w-1/2 grid grid-cols-1 gap-4">
              <a href="/protocol" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">📘</div>
                <div>
                  <p className="text-white text-sm font-semibold">OGPU Protocol</p>
                  <p className="text-gray-400 text-xs">Smart contract architecture.</p>
                </div>
              </a>

              <a href="/whyogpu" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">❓</div>
                <div>
                  <p className="text-white text-sm font-semibold">Why OGPU</p>
                  <p className="text-gray-400 text-xs">What makes OGPU different.</p>
                </div>
              </a>

               <a href="/howogpuworks" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <img src="/Images/Nav/ogpu-works.png"
                alt="ogpuworks icon"
                className="w-6 h-6 object-contain"/>

                <div className="flex flex-col">
                <span className="text-sm font-medium text-white">How OGPU Works?</span>
                <p className="text-gray-400 text-xs">Routing, marketplace, verification.</p>
  </div>
</a>

<a href="/howtobuy" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <img src="/Images/clean_swivel.png"
                alt="ogpuworks icon"
                className="w-6 h-6 object-contain"/>

                <div className="flex flex-col">
                <span className="text-sm font-medium text-white">How To Buy OGPU</span>
                <p className="text-gray-400 text-xs">Our native token.</p>
  </div>
</a>

              <a href="https://ogpuscan.io" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">📊</div>
                <div>
                  <p className="text-white text-sm font-semibold">Live Network Stats</p>
                  <p className="text-gray-400 text-xs">Tasks, nodes, performance.</p>
                </div>
              </a>

              <a href="/competitions" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                <div className="text-[#00E9FF] text-xl">🏆</div>
                <div>
                  <p className="text-white text-sm font-semibold">Competitions</p>
                  <p className="text-gray-400 text-xs">Challenges and rewards.</p>
                </div>
              </a>
            </div>
          </div>

          {/* ACCELERATION CENTER */}
          <div className="border-t border-white/10 pt-4 mt-2">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-white text-sm font-semibold">Acceleration Center</span>
                <span className="text-gray-400 text-xs group-open:rotate-90 transition">▸</span>
              </summary>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <a href="https://opengpu.network/acceleration" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🚀</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Acceleration Program</p>
                    <p className="text-gray-400 text-xs">$200K program to fuel Web3 and AI innovation.</p>
                  </div>
                </a>

                <a href="https://takoswap.app/" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🐙</div>
                  <div>
                    <p className="text-white text-sm font-semibold">TakoSwap</p>
                    <p className="text-gray-400 text-xs">Swap and route OGPU ecosystem assets.</p>
                  </div>
                </a>

                <a href="https://opensale.finance/" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🪙</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Opensale</p>
                    <p className="text-gray-400 text-xs">Token launches and primary sales.</p>
                  </div>
                </a>

                <a href="https://chainchangers.app/" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🌉</div>
                  <div>
                    <p className="text-white text-sm font-semibold">Bridge X</p>
                    <p className="text-gray-400 text-xs">Cross chain liquidity and routing.</p>
                  </div>
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>

            {/* ========================= SOLUTIONS ========================= */}
      <div
        className="relative"
        onMouseEnter={() => open("solutions")}
        onMouseLeave={() => close()}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (openMenu === "solutions") {
              setOpenMenu(null);
            } else {
              open("solutions");
            }
          }}
          className={`px-2 py-1 flex items-center gap-1 transition ${
            openMenu === "solutions" ? "text-white" : "hover:text-white"
          }`}
        >
          Solutions <span className="text-[10px] mt-[2px]">▾</span>
        </button>

        <div
  id="solutions-menu"
  className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[900px] rounded-2xl bg-[#020617]
              border border-white/10 shadow-xl p-7 z-[999]
              transition-all duration-200
              ${openMenu === "solutions" ? "opacity-100 visible" : "opacity-0 invisible"}`}
>

          <div className="flex gap-10">
            <div className="w-[30%] flex flex-col">
              <h3 className="text-white text-xl font-bold mb-3">Solutions for Every Use Case</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Route AI workloads globally with redundancy and scale.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-8">

              {/* COLUMN 1 */}
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

                <a href="https://opengpu.network/ai-agents" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🤖</div>
                  <div>
                    <p className="text-white text-sm font-semibold">AI Agents</p>
                    <p className="text-gray-400 text-xs">Intelligent automation.</p>
                  </div>
                </a>
              </div>

              {/* COLUMN 2 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-400 font-semibold text-sm mb-2">Infrastructure</h4>

                <a href="/enterprisehome" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <img
                    src="/Images/Nav/enterprise-main-icon.png"
                    alt="enterprise icon"
                    className="w-6 h-6 object-contain"
                  />

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Enterprise Pilot</span>
                    <p className="text-gray-400 text-xs">Route workloads globally.</p>
                  </div>
                </a>

                <a href="/provider" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <img
                    src="/Images/Nav/providers-icon.png"
                    alt="provider icon"
                    className="w-6 h-6 object-contain"
                  />

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">GPU Providers</span>
                    <p className="text-gray-400 text-xs">Earn per task.</p>
                  </div>
                </a>

                <a href="/relay" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <img
                    src="/Images/Nav/relay-main.png"
                    alt="relay icon"
                    className="w-6 h-6 object-contain"
                  />

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Relay Gateway</span>
                    <p className="text-gray-400 text-xs">Fiat on ramp for enterprise.</p>
                  </div>
                </a>
              </div>

              {/* COLUMN 3 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-400 font-semibold text-sm mb-2">Blockchain</h4>

                <a href="/blockchain" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <img
                    src="/Images/Nav/blockchain-icon.png"
                    alt="blockchain icon"
                    className="w-6 h-6 object-contain"
                  />

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Blockchain Main</span>
                    <p className="text-gray-400 text-xs">High throughput L1.</p>
                  </div>
                </a>

                <a href="https://opengpu.network/faucet" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🚰</div>
                  <div>
                    <p className="text-white text-sm font-semibold">OGPU Faucet</p>
                    <p className="text-gray-400 text-xs">Claim $ToGPU.</p>
                  </div>
                </a>

                <a href="https://testnet.ogpuscan.io/" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <div className="text-[#00E9FF] text-xl">🧪</div>
                  <div>
                    <p className="text-white text-sm font-semibold">OGPU Testnet</p>
                    <p className="text-gray-400 text-xs">Developer sandbox.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* dApps */}
          <div className="border-t border-white/10 pt-5">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-white text-sm font-semibold">dApps</span>
                <span className="text-gray-400 text-xs group-open:rotate-90 transition">▸</span>
              </summary>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <a
                  href="https://nft.opengpu.network/"
                  className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col"
                >
                  <span className="text-[#00E9FF] text-lg">🎨</span>
                  <span className="text-xs text-gray-300">Open NFT</span>
                </a>

                <a
                  href="https://dapps.opengpu.network/token-creator"
                  className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col"
                >
                  <span className="text-[#00E9FF] text-lg">🪙</span>
                  <span className="text-xs text-gray-300">Token Creator</span>
                </a>

                <a
                  href="/howtobuy"
                  className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col"
                >
                  <span className="text-[#00E9FF] text-lg">💳</span>
                  <span className="text-xs text-gray-300">Buy OGPU</span>
                </a>

                <a
                  href="https://dapps.opengpu.network/multisender"
                  className="p-3 rounded-lg hover:bg-white/5 transition flex flex-col"
                >
                  <span className="text-[#00E9FF] text-lg">📤</span>
                  <span className="text-xs text-gray-300">Multisender</span>
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* ========================= INDUSTRIES ========================= */}
      <div
        className="relative"
        onMouseEnter={() => open("industries")}
        onMouseLeave={() => close()}
        onClick={() => (openMenu === "industries" ? setOpenMenu(null) : open("industries"))}
      >
        <button
          className={`px-2 py-1 flex items-center gap-1 transition ${
            openMenu === "industries" ? "text-white" : "hover:text-white"
          }`}
        >
          Industries <span className="text-[10px] mt-[2px]">▾</span>
        </button>

        <div
          className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[880px] rounded-2xl bg-[#020617]
                      border border-white/10 shadow-xl p-7 z-[999]
                      transition-all duration-200
                      ${openMenu === "industries" ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div className="flex gap-10">
            <div className="w-[30%] flex flex-col">
              <h3 className="text-white text-xl font-bold mb-3">Industries we power</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Use OGPU for AI, rendering, research, video, crypto, and more.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              <a href="/ai-ml" className="flex flex-col gap-1 p-3 rounded-xl hover:bg.white/5 transition">
                <p className="text-white text-sm font-semibold">AI and Machine Learning</p>
                <p className="text-gray-400 text-xs">Train, fine tune, and serve AI models.</p>
              </a>

              <a href="/rendering" className="flex flex-col gap-1 p-3 rounded-xl hover:bg.white/5 transition">
                <p className="text-white text-sm font-semibold">Rendering and VFX</p>
                <p className="text-gray-400 text-xs">CGI, assets, and animation workloads.</p>
              </a>

              <a href="" className="flex flex-col gap-1 p-3 rounded-xl hover:bg.white/5 transition">
                <p className="text-white text-sm font-semibold">Scientific Computing (Coming Soon)</p>
                <p className="text-gray-400 text-xs">Simulations and research compute.</p>
              </a>

              <a href="" className="flex flex-col gap-1 p-3 rounded-xl hover:bg.white/5 transition">
                <p className="text-white text-sm font-semibold">Developer & Education (Coming Soon)</p>
                <p className="text-gray-400 text-xs">Affordable GPU access.</p>
              </a>

              <a href="" className="flex flex-col gap-1 p-3 rounded-xl hover:bg.white/5 transition">
                <p className="text-white text-sm font-semibold">Video Processing (Coming Soon)</p>
                <p className="text-gray-400 text-xs">Transcoding and AI editing.</p>
              </a>

              <a href="" className="flex flex-col gap-1 p-3 rounded-xl hover:bg.white/5 transition">
                <p className="text-white text-sm font-semibold">Blockchain & Crypto (Coming Soon)</p>
                <p className="text-gray-400 text-xs">ZK proofs and decentralized compute.</p>
              </a>

              <a href="" className="flex flex-col gap-1 p-3 rounded-xl hover:bg.white/5 transition">
                <p className="text-white text-sm font-semibold">Gaming (Coming Soon)</p>
                <p className="text-gray-400 text-xs">GPU servers, AI NPCs, content gen.</p>
              </a>

              <a href="" className="flex flex-col gap-1 p-3 rounded-xl hover:bg.white/5 transition">
                <p className="text-white text-sm font-semibold">Synthetic Data (Coming Soon)</p>
                <p className="text-gray-400 text-xs">Generate training datasets.</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= COMPANY & NEWS ========================= */}
      <div
        className="relative"
        onMouseEnter={() => open("company")}
        onMouseLeave={() => close()}
        onClick={() => (openMenu === "company" ? setOpenMenu(null) : open("company"))}
      >
        <button
          className={`px-2 py-1 flex items-center gap-1 transition ${
            openMenu === "company" ? "text-white" : "hover:text-white"
          }`}
        >
          Company & News <span className="text-[10px] mt-[2px]">▾</span>
        </button>

        <div
          className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[880px] rounded-2xl 
                      bg-[#020617] border border-white/10 shadow-xl p-6 z-[999]
                      grid grid-cols-2 gap-8
                      transition-all duration-200
                      ${openMenu === "company" ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >

          {/* LEFT */}
          <div className="w-full flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-2">About the Company</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Learn more about OGPU, mission, contributors, and history.
            </p>

            <div className="flex flex-col gap-3">
              <a href="/about" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
                <div className="text-[#00E9FF] text-xl">🏛️</div>
                <div>
                  <p className="text-white text-sm font-semibold">About OGPU</p>
                  <p className="text-gray-400 text-xs">Mission and story.</p>
                </div>
              </a>

              <a href="/team" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
                <div className="text-[#00E9FF] text-xl">👥</div>
                <div>
                  <p className="text-white text-sm font-semibold">Team</p>
                  <p className="text-gray-400 text-xs">Core contributors.</p>
                </div>
              </a>

              <a href="" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
                <div className="text-[#00E9FF] text-xl">📰</div>
                <div>
                  <p className="text-white text-sm font-semibold">Press & Media (Coming Soon)</p>
                  <p className="text-gray-400 text-xs">Coverage and assets.</p>
                </div>
              </a>

              <a href="/careers" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
                <div className="text-[#00E9FF] text-xl">💼</div>
                <div>
                  <p className="text-white text-sm font-semibold">Careers</p>
                  <p className="text-gray-400 text-xs">Join the mission.</p>
                </div>
              </a>

              <a href="mailto:info@opengpu.network"
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
              <img src="/Images/Nav/email-icon.png"
              alt="Email Icon"
              className="w-6 h-6 object-contain"/>

              <div>
              <p className="text-white text-sm font-semibold">Contact</p>
              <p className="text-gray-400 text-xs">Reach OGPU directly.</p>
              </div>
              </a>

              <a href="mailto:info@opengpu.network" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
                <div className="text-[#00E9FF] text-xl">🖼️</div>
                <div>
                  <p className="text-white text-sm font-semibold">Media Kit</p>
                  <p className="text-gray-400 text-xs">Brand kit.</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT — NEWS */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Latest News</h3>

            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://www.einpresswire.com/article/860150175/ogpu-network-announces-continued-development-of-decentralized-gpu-compute-infrastructure-amid-growing-ai-demand"
                target="_blank"
                className="rounded-xl overflow-hidden bg.white/5 hover:bg.white/10 transition border border.white/10"
              >
                <img
                  src="https://img.einpresswire.com/large/977777/ogpu-network-from-hash-to-compu.jpeg"
                  className="w-full h-24 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-semibold">
                    OGPU Network Announces Continued Development
                  </p>
                  <p className="text-gray-400 text-xs">EIN Presswire • 22 Oct 2025</p>
                </div>
              </a>

              <a
                href="https://fnctn1.com/"
                target="_blank"
                className="rounded-xl overflow-hidden bg.white/5 hover:bg.white/10 transition border border.white/10"
              >
                <img
                  src="https://opengpu.network/image/twitter/dubai-event.png"
                  className="w-full h-24 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-semibold">
                    OGPU is heading to Function 1 Dubai
                  </p>
                  <p className="text-gray-400 text-xs">Festival Arena • 18–19 Nov 2025</p>
                </div>
              </a>

              <a
                href="https://x.com/fatih_ogpu/status/1974115869392240896"
                target="_blank"
                className="rounded-xl overflow-hidden bg.white/5 hover:bg.white/10 transition border border.white/10"
              >
                <img
                  src="https://opengpu.network/image/twitter/OGPU-Nosana.png"
                  className="w-full h-24 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-semibold">
                    OGPU x Nosana Partnership
                  </p>
                  <p className="text-gray-400 text-xs">New GPUs live on OGPU Network</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= DOCS ========================= */}
      <div
        className="relative"
        onMouseEnter={() => open("docs")}
        onMouseLeave={() => close()}
        onClick={() => (openMenu === "docs" ? setOpenMenu(null) : open("docs"))}
      >
        <button
          className={`px-2 py-1 flex items-center gap-1 transition ${
            openMenu === "docs" ? "text-white" : "hover:text-white"
          }`}
        >
          Docs <span className="text-[10px] mt-[2px]">▾</span>
        </button>

        <div
          className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] rounded-2xl 
                      bg-[#020617] border border-white/10 shadow-xl p-6 z-[999]
                      flex gap-10
                      transition-all duration-200
                      ${openMenu === "docs" ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div className="w-1/2 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-2">Documentation Hub</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Explore API references, guides, and protocol documents.
            </p>
          </div>

          <div className="w-1/2 grid grid-cols-1 gap-4">

            <a href="https://docs.opengpu.network/" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
              <div className="text-[#00E9FF] text-xl">📘</div>
              <div>
                <p className="text-white text-sm font-semibold">Developer Docs</p>
                <p className="text-gray-400 text-xs">API and SDKs.</p>
              </div>
            </a>

            <a href="https://www.opengpu.network/docs/whitepaper.pdf" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
              <div className="text-[#00E9FF] text-xl">📄</div>
              <div>
                <p className="text-white text-sm font-semibold">Whitepaper</p>
                <p className="text-gray-400 text-xs">Technical protocol.</p>
              </div>
            </a>

            <a href="https://www.opengpu.network/docs/litepaper.pdf" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
              <div className="text-[#00E9FF] text-xl">📑</div>
              <div>
                <p className="text-white text-sm font-semibold">Litepaper</p>
                <p className="text-gray-400 text-xs">High-level overview.</p>
              </div>
            </a>

            <a href="https://opengpu.network/roadmap" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
              <div className="text-[#00E9FF] text-xl">🛣️</div>
              <div>
                <p className="text-white text-sm font-semibold">Roadmap</p>
                <p className="text-gray-400 text-xs">What’s next.</p>
              </div>
            </a>

            <a href="https://opengpu.network/faq" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
              <div className="text-[#00E9FF] text-xl">❓</div>
              <div>
                <p className="text-white text-sm font-semibold">FAQ</p>
                <p className="text-gray-400 text-xs">Common questions.</p>
              </div>
            </a>

            <a href="https://github.com/OpenGPUNetwork" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
              <div className="text-[#00E9FF] text-xl">💻</div>
              <div>
                <p className="text-white text-sm font-semibold">GitHub Repos</p>
                <p className="text-gray-400 text-xs">Clients and SDKs.</p>
              </div>
            </a>

            <a href="https://github.com/OpenGPUNetwork" className="flex items-start gap-3 p-3 rounded-xl hover:bg.white/5 transition">
              <div className="text-[#00E9FF] text-xl">🎓</div>
              <div>
                <p className="text-white text-sm font-semibold">Academy</p>
                <p className="text-gray-400 text-xs">Learn the ecosystem.</p>
              </div>
            </a>
          </div>
        </div>
      </div>

{/* CTA BUTTON — EXACT SAME PADDING, STYLES, EVERYTHING */}
<a
  href="/"
  className="absolute right-4 md:right-20 ml-2 px-8 py-3 rounded-xl font-semibold text-white text-sm
    bg-[#00C6E6] border-[2px] border-[#00C6E6]/80
    transition-all duration-300 hover:-translate-y-1
    shadow-[0_0_20px_rgba(0,198,230,0.20)]
    hover:shadow-[0_0_35px_rgba(0,198,230,0.45)]
    hover:bg-[#00C6E6]/90 hover:border-[#00C6E6]"
>
  Back To Main Site
</a>

    </div>

    {/* MOBILE HAMBURGER */}
    <button
      className="lg:hidden text-white text-3xl focus:outline-none"
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
        className="lg:hidden fixed top-[65px] left-0 w-full 
                   h-[calc(100vh-65px)]
                   bg-[#00040F]/95 backdrop-blur-xl z-[998] flex flex-col 
                   px-6 py-6 space-y-6 overflow-y-auto pb-24"
      >

        {/* ===== MOBILE PLATFORM ===== */}
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
          <a href="https://opensale.finance/" className="text-gray-300 text-sm">Opensale</a>
          <a href="https://chainchangers.app/" className="text-gray-300 text-sm">Bridge X</a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* ===== MOBILE SOLUTIONS ===== */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Solutions</p>

          <a href="/aicompanies" className="text-gray-300 text-sm">AI Companies</a>
          <a href="/workloads" className="text-gray-300 text-sm">AI Workloads</a>
          <a href="https://opengpu.network/ai-agents" className="text-gray-300 text-sm">AI Agents</a>
          <a href="/enterprisehome" className="text-gray-300 text-sm">Enterprise Pilot</a>
          <a href="/provider" className="text-gray-300 text-sm">GPU Providers</a>
          <a href="/relay" className="text-gray-300 text-sm">Relay Gateway</a>
          <a href="/blockchain" className="text-gray-300 text-sm">Blockchain Main</a>
          <a href="https://opengpu.network/faucet" className="text-gray-300 text-sm">OGPU Faucet</a>
          <a href="https://testnet.ogpuscan.io/" className="text-gray-300 text-sm">OGPU Testnet</a>

          <p className="text-white font-semibold text-sm mt-3">dApps</p>
          <a href="https://nft.opengpu.network/" className="text-gray-300 text-sm">Open NFT</a>
          <a href="https://dapps.opengpu.network/token-creator" className="text-gray-300 text-sm">Token Creator</a>
          <a href="/howtobuy" className="text-gray-300 text-sm">Buy OGPU</a>
          <a href="https://dapps.opengpu.network/multisender" className="text-gray-300 text-sm">Multisender</a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* ===== MOBILE INDUSTRIES ===== */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Industries</p>

          <a href="/ai-ml" className="text-gray-300 text-sm">AI and Machine Learning</a>
          <a href="/rendering" className="text-gray-300 text-sm">Rendering and Visual Effects</a>
          <a href="/" className="text-gray-300 text-sm">Scientific Computing (Coming Soon)</a>
          <a href="/" className="text-gray-300 text-sm">Developer and Educational (Coming Soon)</a>
          <a href="/" className="text-gray-300 text-sm">Video Processing (Coming Soon)</a>
          <a href="/" className="text-gray-300 text-sm">Blockchain and Crypto (Coming Soon)</a>
          <a href="/" className="text-gray-300 text-sm">Gaming (Coming Soon)</a>
          <a href="/" className="text-gray-300 text-sm">Synthetic Data (Coming Soon)</a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* ===== MOBILE DOCS ===== */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Docs</p>

          <a href="https://docs.opengpu.network/" className="text-gray-300 text-sm">Developer Docs</a>
          <a href="https://opengpu.network/docs/whitepaper.pdf" className="text-gray-300 text-sm">Whitepaper</a>
          <a href="https://opengpu.network/docs/litepaper.pdf" className="text-gray-300 text-sm">Litepaper</a>
          <a href="https://opengpu.network/roadmap" className="text-gray-300 text-sm">Roadmap</a>
          <a href="https://opengpu.network/faq" className="text-gray-300 text-sm">FAQ (Coming Soon)</a>
          <a href="https://github.com/oGPUNetwork" className="text-gray-300 text-sm">GitHub</a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* ===== MOBILE COMPANY ===== */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold text-lg">Company</p>

          <a href="/about" className="text-gray-300 text-sm">About</a>
          <a href="/team" className="text-gray-300 text-sm">Team</a>
          <a href="#news" className="text-gray-300 text-sm">Press</a>
          <a href="/careers" className="text-gray-300 text-sm">Careers (Coming Soon)</a>
          <a href="mailto:info@opengpu.network" className="text-gray-300 text-sm">Contact</a>
        </div>
       {/* CTA BUTTON — Now same size and style as "Get Started" */}
<a
  href="/"
  className="mx-auto inline-block w-fit whitespace-nowrap
    px-8 py-3 rounded-xl font-semibold text-white text-sm
    bg-[#00C6E6] border-[2px] border-[#00C6E6]/80
    transition-all duration-300 hover:-translate-y-1
    shadow-[0_0_20px_rgba(0,198,230,0.20)]
    hover:shadow-[0_0_35px_rgba(0,198,230,0.45)]
    hover:bg-[#00C6E6]/90 hover:border-[#00C6E6]"
>
  Back To Main Site
</a>






      </motion.div>
      
    )}
  </AnimatePresence>

  {/* GLOW BAR */}
  <div className="relative w-full h-[1.5px] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF] to-transparent opacity-80" />
    <div className="absolute inset-0 bg-[#00E9FF] opacity-40 blur-sm" />
  </div>
</header>
    </>
  );
}
