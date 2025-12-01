"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type IndustryLink = {
  label: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

type MobileSection = "platform" | "solutions" | "industries" | "company" | "docs" | null;

// Disabled desktop card
const DisabledCard: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = "",
  children,
}) => (
  <div className={`relative group cursor-not-allowed opacity-40 select-none ${className}`}>
    {children}
    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition">
      <span className="text-[9px] px-2 py-[1px] rounded-full bg-red-500/20 text-red-300 border border-red-400/40">
        ✕ Coming Soon
      </span>
    </div>
  </div>
);

// Mobile nav item
const MobileNavItem: React.FC<{
  label: string;
  href?: string;
  comingSoon?: boolean;
}> = ({ label, href, comingSoon }) => {
  if (comingSoon || !href) {
    return <p className="text-gray-500 text-sm cursor-not-allowed">{label} (Coming Soon)</p>;
  }
  return (
    <a href={href} className="text-gray-300 text-sm">
      {label}
    </a>
  );
};

const INDUSTRY_LINKS: IndustryLink[] = [
  { label: "AI and Machine Learning", description: "Train, fine tune, and serve AI models.", href: "/ai-ml" },
  { label: "Rendering and VFX", description: "CGI, assets, and animation workloads.", href: "/rendering" },
  { label: "Scientific Computing", description: "Simulations and research compute.", comingSoon: true },
  { label: "Developer and Education", description: "Affordable GPU access.", comingSoon: true },
  { label: "Video Processing", description: "Transcoding and AI editing.", comingSoon: true },
  { label: "Blockchain and Crypto", description: "ZK proofs and decentralized compute.", comingSoon: true },
  { label: "Gaming", description: "GPU servers, AI NPCs, content gen.", comingSoon: true },
  { label: "Synthetic Data", description: "Generate training datasets.", comingSoon: true },
];

export default function Nav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MobileSection>(null);

  let hoverTimeout: ReturnType<typeof setTimeout> | null = null;

  const open = (menu: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenMenu(menu);
  };

  const close = () => {
    hoverTimeout = setTimeout(() => setOpenMenu(null), 150);
  };

  const toggleMobileSection = (section: MobileSection) => {
    // Option 1: multiple sections can stay open; tap toggles each one independently
    setMobileSection((current) => (current === section ? null : section));
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[999]">
        <nav
          className="
            w-full px-4 md:px-20 py-3
            bg-[#00040F]/70 backdrop-blur-xl border-b border-[#0A84FF]/40
            grid grid-cols-3 items-center
          "
        >
          {/* LEFT — LOGO */}
          <div className="flex items-center">
            <a href="/" className="relative z-[1000]">
              <img
                src="/Images/OGPU-LOGO-Main-final.png"
                className="h-10 md:h-16 w-auto"
                alt="OGPU Logo"
              />
            </a>
          </div>

          {/* CENTER — DESKTOP NAV */}
          <div className="hidden lg:flex items-center justify-center gap-7 text-[15px] text-gray-200 font-semibold">
            {/* PLATFORM */}
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
  className={`
    absolute left-1/2 -translate-x-1/2 mt-3 w-[620px]
    rounded-2xl bg-[#020617] border border-white/10 shadow-xl p-6
    flex flex-col gap-6 z-[999]
    transition-all duration-200 ease-out
    ${openMenu === "platform"
      ? "opacity-100 visible translate-y-0"
      : "opacity-0 invisible -translate-y-2"
    }
  `}
>

                <div className="flex gap-8">
                  <div className="w-1/2">
                    <h3 className="text-white text-lg font-semibold mb-2">The OGPU Platform</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      The routing layer for decentralized AI compute.
                    </p>
                  </div>

                  <div className="w-1/2 grid grid-cols-1 gap-4">
                    <a
                      href="/protocol"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <div className="text-[#00E9FF] text-xl">📘</div>
                      <div>
                        <p className="text-white text-sm font-semibold">OGPU Protocol</p>
                        <p className="text-gray-400 text-xs">Smart contract architecture.</p>
                      </div>
                    </a>

                    <a
                      href="/whyogpu"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <div className="text-[#00E9FF] text-xl">❓</div>
                      <div>
                        <p className="text-white text-sm font-semibold">Why OGPU</p>
                        <p className="text-gray-400 text-xs">What makes OGPU different.</p>
                      </div>
                    </a>

                    <a
                      href="/howogpuworks"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <img
                        src="/Images/Nav/ogpu-works.png"
                        alt="How OGPU Works"
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">How OGPU Works</p>
                        <p className="text-gray-400 text-xs">Routing, marketplace, verification.</p>
                      </div>
                    </a>

                    <a
                      href="/howtobuy"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <img
                        src="/Images/clean_swivel.png"
                        alt="How to buy OGPU"
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">How To Buy OGPU</p>
                        <p className="text-gray-400 text-xs">Our native token.</p>
                      </div>
                    </a>

                    <a
                      href="https://ogpuscan.io"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <div className="text-[#00E9FF] text-xl">📊</div>
                      <div>
                        <p className="text-white text-sm font-semibold">Live Network Stats</p>
                        <p className="text-gray-400 text-xs">Tasks, nodes, performance.</p>
                      </div>
                    </a>

                    <DisabledCard className="flex items-start gap-3 p-3 rounded-xl">
                      <div className="text-[#00E9FF] text-xl">🏆</div>
                      <div>
                        <p className="text-white text-sm font-semibold">Competitions</p>
                        <p className="text-gray-400 text-xs">Challenges and rewards.</p>
                      </div>
                    </DisabledCard>
                  </div>
                </div>

                {/* Acceleration Center */}
                <div className="border-t border-white/10 pt-4 mt-2">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-white text-sm font-semibold">Acceleration Center</span>
                      <span className="text-gray-400 text-xs group-open:rotate-90 transition">
                        ▸
                      </span>
                    </summary>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <a
                        href="https://opengpu.network/acceleration"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="text-[#00E9FF] text-xl">🚀</div>
                        <div>
                          <p className="text-white text-sm font-semibold">Acceleration Program</p>
                          <p className="text-gray-400 text-xs">200K program for AI and Web3.</p>
                        </div>
                      </a>

                      <a
                        href="https://takoswap.app/"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="text-[#00E9FF] text-xl">🐙</div>
                        <div>
                          <p className="text-white text-sm font-semibold">TakoSwap</p>
                          <p className="text-gray-400 text-xs">Swap ecosystem assets.</p>
                        </div>
                      </a>

                      <a
                        href="https://opensale.finance/"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="text-[#00E9FF] text-xl">🪙</div>
                        <div>
                          <p className="text-white text-sm font-semibold">Opensale</p>
                          <p className="text-gray-400 text-xs">Token launches.</p>
                        </div>
                      </a>

                      <a
                        href="https://chainchangers.app/"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="text-[#00E9FF] text-xl">🌉</div>
                        <div>
                          <p className="text-white text-sm font-semibold">Bridge X</p>
                          <p className="text-gray-400 text-xs">Cross chain liquidity.</p>
                        </div>
                      </a>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => open("solutions")}
              onMouseLeave={() => close()}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openMenu === "solutions" ? setOpenMenu(null) : open("solutions");
                }}
                className={`px-2 py-1 flex items-center gap-1 transition ${
                  openMenu === "solutions" ? "text-white" : "hover:text-white"
                }`}
              >
                Solutions <span className="text-[10px] mt-[2px]">▾</span>
              </button>

              <div
  className={`
    absolute left-1/2 -translate-x-1/2 mt-3 w-[900px]
    rounded-2xl bg-[#020617] border border-white/10 shadow-xl p-7 
    z-[999]

    transition-all duration-220
    ease-[cubic-bezier(0.16,1,0.3,1)]

    ${openMenu === "solutions"
      ? "opacity-100 visible translate-y-[0px]"
      : "opacity-0 invisible translate-y-[-10px]"
    }
  `}
>

                <div className="flex gap-10">
                  <div className="w-[30%]">
                    <h3 className="text-white text-xl font-bold mb-3">
                      Solutions for Every Use Case
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      Route AI workloads globally with redundancy and scale.
                    </p>
                  </div>

                  <div className="flex-1 grid grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-gray-400 font-semibold text-sm mb-2">AI Solutions</h4>

                      <a
                        href="/aicompanies"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="text-[#00E9FF] text-xl">⚡</div>
                        <div>
                          <p className="text-white text-sm font-semibold">AI Companies</p>
                          <p className="text-gray-400 text-xs">Inference and fine tuning.</p>
                        </div>
                      </a>

                      <a
                        href="/workloads"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="text-[#00E9FF] text-xl">⚙️</div>
                        <div>
                          <p className="text-white text-sm font-semibold">AI Workloads</p>
                          <p className="text-gray-400 text-xs">
                            Training, inference, simulation.
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://opengpu.network/ai-agents"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="text-[#00E9FF] text-xl">🤖</div>
                        <div>
                          <p className="text-white text-sm font-semibold">AI Agents</p>
                          <p className="text-gray-400 text-xs">Intelligent automation.</p>
                        </div>
                      </a>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-gray-400 font-semibold text-sm mb-2">Infrastructure</h4>

                      <a
                        href="/enterprisehome"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <img
                          src="/Images/Nav/enterprise-main-icon.png"
                          alt="Enterprise Pilot"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <p className="text-white text-sm font-semibold">Enterprise Pilot</p>
                          <p className="text-gray-400 text-xs">Route workloads globally.</p>
                        </div>
                      </a>

                      <a
                        href="/provider"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <img
                          src="/Images/Nav/providers-icon.png"
                          alt="GPU Providers"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <p className="text-white text-sm font-semibold">GPU Providers</p>
                          <p className="text-gray-400 text-xs">Earn per task.</p>
                        </div>
                      </a>

                      <a
                        href="/relay"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <img
                          src="/Images/Nav/relay-main.png"
                          alt="Relay Gateway"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <p className="text-white text-sm font-semibold">Relay Gateway</p>
                          <p className="text-gray-400 text-xs">Fiat on ramp for enterprise.</p>
                        </div>
                      </a>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-gray-400 font-semibold text-sm mb-2">Blockchain</h4>

                      <a
                        href="/blockchain"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <img
                          src="/Images/Nav/blockchain-icon.png"
                          alt="Blockchain Main"
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <p className="text-white text-sm font-semibold">Blockchain Main</p>
                          <p className="text-gray-400 text-xs">High throughput L1.</p>
                        </div>
                      </a>

                      <a
                        href="https://opengpu.network/faucet"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
                        <div className="text-[#00E9FF] text-xl">🚰</div>
                        <div>
                          <p className="text-white text-sm font-semibold">OGPU Faucet</p>
                          <p className="text-gray-400 text-xs">Claim test tokens.</p>
                        </div>
                      </a>

                      <a
                        href="https://testnet.ogpuscan.io/"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                      >
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
                      <span className="text-gray-400 text-xs group-open:rotate-90 transition">
                        ▸
                      </span>
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

            {/* INDUSTRIES */}
            <div
              className="relative"
              onMouseEnter={() => open("industries")}
              onMouseLeave={() => close()}
              onClick={() =>
                openMenu === "industries" ? setOpenMenu(null) : open("industries")
              }
            >
              <button
                className={`px-2 py-1 flex items-center gap-1 transition ${
                  openMenu === "industries" ? "text-white" : "hover:text-white"
                }`}
              >
                Industries <span className="text-[10px] mt-[2px]">▾</span>
              </button>

             <div
  className={`
    absolute left-1/2 -translate-x-1/2 mt-3 w-[880px]
    rounded-2xl bg-[#020617] border border-white/10 shadow-xl p-7 
    z-[999]

    transition-all duration-220
    ease-[cubic-bezier(0.16,1,0.3,1)]

    ${openMenu === "industries"
      ? "opacity-100 visible translate-y-[0px]"
      : "opacity-0 invisible translate-y-[-10px]"
    }
  `}
>

                <div className="flex gap-10">
                  <div className="w-[30%]">
                    <h3 className="text-white text-xl font-bold mb-3">Industries we power</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Use OGPU for AI, rendering, research, video, crypto, and more.
                    </p>
                  </div>

                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {INDUSTRY_LINKS.map((item) =>
                      item.comingSoon ? (
                        <DisabledCard
                          key={item.label}
                          className="flex flex-col gap-1 p-3 rounded-xl"
                        >
                          <p className="text-white text-sm font-semibold">{item.label}</p>
                          <p className="text-gray-400 text-xs">{item.description}</p>
                        </DisabledCard>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex flex-col gap-1 p-3 rounded-xl hover:bg-white/5 transition"
                        >
                          <p className="text-white text-sm font-semibold">{item.label}</p>
                          <p className="text-gray-400 text-xs">{item.description}</p>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>


        {/* COMPANY & NEWS */}
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
    <span className="inline-block whitespace-nowrap">
      Company &amp; News
    </span>
    <span className="text-[10px] mt-[2px]">▾</span>
  </button>

              <div
  className={`
    absolute left-1/2 -translate-x-1/2 mt-3 w-[880px]
    rounded-2xl bg-[#020617] border border-white/10 shadow-xl p-6 
    grid grid-cols-2 gap-8 z-[999]

    transition-all duration-220
    ease-[cubic-bezier(0.16,1,0.3,1)]

    ${openMenu === "company"
      ? "opacity-100 visible translate-y-[0px]"
      : "opacity-0 invisible translate-y-[-10px]"
    }
  `}
>

                {/* Left: company */}
                <div className="flex flex-col">
                  <h3 className="text-white text-lg font-semibold mb-2">About the Company</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Learn more about OGPU, mission, contributors, and history.
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href="/about"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <div className="text-[#00E9FF] text-xl">🏛️</div>
                      <div>
                        <p className="text-white text-sm font-semibold">About OGPU</p>
                        <p className="text-gray-400 text-xs">Mission and story.</p>
                      </div>
                    </a>

                    <a
                      href="/team"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <div className="text-[#00E9FF] text-xl">👥</div>
                      <div>
                        <p className="text-white text-sm font-semibold">Team</p>
                        <p className="text-gray-400 text-xs">Core contributors.</p>
                      </div>
                    </a>

                    <DisabledCard className="flex items-start gap-3 p-3 rounded-xl">
                      <div className="text-[#00E9FF] text-xl">📰</div>
                      <div>
                        <p className="text-white text-sm font-semibold">Press &amp; Media</p>
                        <p className="text-gray-400 text-xs">Coverage and assets.</p>
                      </div>
                    </DisabledCard>

                    <DisabledCard className="flex items-start gap-3 p-3 rounded-xl">
                      <div className="text-[#00E9FF] text-xl">💼</div>
                      <div>
                        <p className="text-white text-sm font-semibold">Careers</p>
                        <p className="text-gray-400 text-xs">Join the mission.</p>
                      </div>
                    </DisabledCard>

                    <a
                      href="mailto:info@opengpu.network"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <img
                        src="/Images/Nav/email-icon.png"
                        alt="Email Icon"
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">Contact</p>
                        <p className="text-gray-400 text-xs">Reach OGPU directly.</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@opengpu.network"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <div className="text-[#00E9FF] text-xl">🖼️</div>
                      <div>
                        <p className="text-white text-sm font-semibold">Media Kit</p>
                        <p className="text-gray-400 text-xs">Brand kit.</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right: news */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3">Latest News</h3>

                  <div className="grid grid-cols-1 gap-4">
                    <a
                      href="https://www.einpresswire.com/article/860150175/ogpu-network-announces-continued-development-of-decentralized-gpu-compute-infrastructure-amid-growing-ai-demand"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
                    >
                      <img
                        src="https://img.einpresswire.com/large/977777/ogpu-network-from-hash-to-compu.jpeg"
                        className="w-full h-24 object-cover"
                        alt="OGPU Press"
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
                      rel="noreferrer"
                      className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
                    >
                      <img
                        src="https://opengpu.network/image/twitter/dubai-event.png"
                        className="w-full h-24 object-cover"
                        alt="Function 1 Dubai"
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
                      rel="noreferrer"
                      className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
                    >
                      <img
                        src="https://opengpu.network/image/twitter/OGPU-Nosana.png"
                        className="w-full h-24 object-cover"
                        alt="OGPU x Nosana"
                      />
                      <div className="p-3">
                        <p className="text-white text-sm font-semibold">OGPU x Nosana Partnership</p>
                        <p className="text-gray-400 text-xs">New GPUs live on OGPU Network</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DOCS */}
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
  className={`
    absolute left-1/2 -translate-x-1/2 mt-3 w-[620px]
    rounded-2xl bg-[#020617] border border-white/10 shadow-xl p-6 
    flex gap-10 z-[999]

    transition-all duration-220
    ease-[cubic-bezier(0.16,1,0.3,1)]

    ${openMenu === "docs"
      ? "opacity-100 visible translate-y-[0px]"
      : "opacity-0 invisible translate-y-[-10px]"
    }
  `}
>

                <div className="w-1/2">
                  <h3 className="text-white text-lg font-semibold mb-2">Documentation Hub</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Explore API references, guides, and protocol documents.
                  </p>
                </div>

                <div className="w-1/2 grid grid-cols-1 gap-4">
                  <a
                    href="https://docs.opengpu.network/"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                  >
                    <div className="text-[#00E9FF] text-xl">📘</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Developer Docs</p>
                      <p className="text-gray-400 text-xs">API and SDKs.</p>
                    </div>
                  </a>

                  <a
                    href="https://www.opengpu.network/docs/whitepaper.pdf"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                  >
                    <div className="text-[#00E9FF] text-xl">📄</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Whitepaper</p>
                      <p className="text-gray-400 text-xs">Technical protocol.</p>
                    </div>
                  </a>

                  <a
                    href="https://www.opengpu.network/docs/litepaper.pdf"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                  >
                    <div className="text-[#00E9FF] text-xl">📑</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Litepaper</p>
                      <p className="text-gray-400 text-xs">High-level overview.</p>
                    </div>
                  </a>

                  <a
                    href="https://opengpu.network/roadmap"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                  >
                    <div className="text-[#00E9FF] text-xl">🛣️</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Roadmap</p>
                      <p className="text-gray-400 text-xs">What’s next.</p>
                    </div>
                  </a>

                  <a
                    href="https://opengpu.network/faq"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                  >
                    <div className="text-[#00E9FF] text-xl">❓</div>
                    <div>
                      <p className="text-white text-sm font-semibold">FAQ</p>
                      <p className="text-gray-400 text-xs">Common questions.</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/OpenGPUNetwork"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                  >
                    <div className="text-[#00E9FF] text-xl">💻</div>
                    <div>
                      <p className="text-white text-sm font-semibold">GitHub Repos</p>
                      <p className="text-gray-400 text-xs">Clients and SDKs.</p>
                    </div>
                  </a>

                  <a
                    href="https://academy.opengpu.network/"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                  >
                    <div className="text-[#00E9FF] text-xl">🎓</div>
                    <div>
                      <p className="text-white text-sm font-semibold">Academy</p>
                      <p className="text-gray-400 text-xs">Learn the ecosystem.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

{/* RIGHT — DESKTOP CTA + MOBILE HAMBURGER */}
<div className="flex items-center justify-end gap-3">
  {/* Desktop: conditionally show CTA */}
  {pathname === "/" ? (
    <a
      href="/getstarted"
      className="hidden lg:inline-block px-8 py-3 rounded-xl font-semibold text-white text-sm
        bg-[#00C6E6] border-[2px] border-[#00C6E6]/80
        transition-all duration-300 hover:-translate-y-1
        shadow-[0_0_20px_rgba(0,198,230,0.20)]
        hover:shadow-[0_0_35px_rgba(0,198,230,0.45)]
        hover:bg-[#00C6E6]/90 hover:border-[#00C6E6]"
    >
      Join the Network
    </a>
  ) : (
    <a
      href="/"
      className="hidden lg:inline-block px-8 py-3 rounded-xl font-semibold text-white text-sm
        bg-[#00C6E6] border-[2px] border-[#00C6E6]/80
        transition-all duration-300 hover:-translate-y-1
        shadow-[0_0_20px_rgba(0,198,230,0.20)]
        hover:shadow-[0_0_35px_rgba(0,198,230,0.45)]
        hover:bg-[#00C6E6]/90 hover:border-[#00C6E6]"
    >
      Back To Main Site
    </a>
  )}

  {/* Mobile hamburger */}
<button
  className="
    lg:hidden
    text-white text-3xl
    focus:outline-none
    absolute right-4 top-1/2 -translate-y-1/2
    z-[200]
  "
  onClick={() => setMobileNavOpen(true)}
  aria-label="Open navigation"
>
  ☰
</button>

</div>

        </nav>

        {/* MOBILE NAV DRAWER */}
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden fixed inset-0 z-[9999] flex"
            >
              {/* Backdrop */}
              <button
                className="flex-1 bg-black/40"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close navigation overlay"
              />

              {/* Drawer panel */}
              <div className="w-[82%] max-w-sm h-full bg-[#020617] border-l border-white/10 flex flex-col min-h-0">

                {/* Head */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <a href="/" className="flex items-center gap-2">
                    <img
                      src="/Images/OGPU-LOGO-Main-final.png"
                      alt="OGPU Logo"
                      className="h-9 w-auto"
                    />
                  </a>
                  <button
                    className="text-white text-2xl"
                    onClick={() => setMobileNavOpen(false)}
                    aria-label="Close navigation"
                  >
                    ✕
                  </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto min-h-0 pb-24">
                  <div className="px-5 py-4 space-y-4">
                    {/* PLATFORM */}
                    <div className="border-b border-white/10 pb-3">
                      <button
                        className="w-full flex items-center justify-between text-left text-white font-semibold text-base py-2"
                        onClick={() => toggleMobileSection("platform")}
                      >
                        <span>Platform</span>
                        <span
                          className={`text-sm transition-transform ${
                            mobileSection === "platform" ? "rotate-90" : ""
                          }`}
                        >
                          ▸
                        </span>
                      </button>
                      <AnimatePresence>
                        {mobileSection === "platform" && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="mt-1 ml-2 flex flex-col gap-1.5"
                          >
                            <MobileNavItem label="Overview" href="/" />
                            <MobileNavItem label="OGPU Protocol" href="/protocol" />
                            <MobileNavItem label="Why OGPU" href="/whyogpu" />
                            <MobileNavItem label="How OGPU Works" href="/howogpuworks" />
                            <MobileNavItem label="How To Buy OGPU" href="/howtobuy" />
                            <MobileNavItem
                              label="Live Network Stats"
                              href="https://ogpuscan.io"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* SOLUTIONS */}
                    <div className="border-b border-white/10 pb-3">
                      <button
                        className="w-full flex items-center justify-between text-left text-white font-semibold text-base py-2"
                        onClick={() => toggleMobileSection("solutions")}
                      >
                        <span>Solutions</span>
                        <span
                          className={`text-sm transition-transform ${
                            mobileSection === "solutions" ? "rotate-90" : ""
                          }`}
                        >
                          ▸
                        </span>
                      </button>
                      <AnimatePresence>
                        {mobileSection === "solutions" && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="mt-1 ml-2 flex flex-col gap-1.5"
                          >
                            <MobileNavItem label="AI Companies" href="/aicompanies" />
                            <MobileNavItem label="AI Workloads" href="/workloads" />
                            <MobileNavItem
                              label="AI Agents"
                              href="https://opengpu.network/ai-agents"
                            />
                            <MobileNavItem
                              label="Enterprise Pilot"
                              href="/enterprisehome"
                            />
                            <MobileNavItem label="GPU Providers" href="/provider" />
                            <MobileNavItem label="Relay Gateway" href="/relay" />
                            <MobileNavItem label="Blockchain Main" href="/blockchain" />
                            <MobileNavItem
                              label="OGPU Faucet"
                              href="https://opengpu.network/faucet"
                            />
                            <MobileNavItem
                              label="OGPU Testnet"
                              href="https://testnet.ogpuscan.io/"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* INDUSTRIES */}
                    <div className="border-b border-white/10 pb-3">
                      <button
                        className="w-full flex items-center justify-between text-left text-white font-semibold text-base py-2"
                        onClick={() => toggleMobileSection("industries")}
                      >
                        <span>Industries</span>
                        <span
                          className={`text-sm transition-transform ${
                            mobileSection === "industries" ? "rotate-90" : ""
                          }`}
                        >
                          ▸
                        </span>
                      </button>
                      <AnimatePresence>
                        {mobileSection === "industries" && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="mt-1 ml-2 flex flex-col gap-1.5"
                          >
                            {INDUSTRY_LINKS.map((item) => (
                              <MobileNavItem
                                key={item.label}
                                label={item.label}
                                href={item.href}
                                comingSoon={item.comingSoon}
                              />
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* COMPANY */}
                    <div className="border-b border-white/10 pb-3">
                      <button
                        className="w-full flex items-center justify-between text-left text-white font-semibold text-base py-2"
                        onClick={() => toggleMobileSection("company")}
                      >
                        <span>Company</span>
                        <span
                          className={`text-sm transition-transform ${
                            mobileSection === "company" ? "rotate-90" : ""
                          }`}
                        >
                          ▸
                        </span>
                      </button>
                      <AnimatePresence>
                        {mobileSection === "company" && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="mt-1 ml-2 flex flex-col gap-1.5"
                          >
                            <MobileNavItem label="About" href="/about" />
                            <MobileNavItem label="Team" href="/team" />
                            <MobileNavItem label="Press & Media" comingSoon />
                            <MobileNavItem label="Careers" comingSoon />
                            <MobileNavItem
                              label="Contact"
                              href="mailto:info@opengpu.network"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* DOCS */}
                    <div className="border-b border-white/10 pb-3">
                      <button
                        className="w-full flex items-center justify-between text-left text-white font-semibold text-base py-2"
                        onClick={() => toggleMobileSection("docs")}
                      >
                        <span>Docs</span>
                        <span
                          className={`text-sm transition-transform ${
                            mobileSection === "docs" ? "rotate-90" : ""
                          }`}
                        >
                          ▸
                        </span>
                      </button>
                      <AnimatePresence>
                        {mobileSection === "docs" && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="mt-1 ml-2 flex flex-col gap-1.5"
                          >
                            <MobileNavItem
                              label="Developer Docs"
                              href="https://docs.opengpu.network/"
                            />
                            <MobileNavItem
                              label="Whitepaper"
                              href="https://opengpu.network/docs/whitepaper.pdf"
                            />
                            <MobileNavItem
                              label="Litepaper"
                              href="https://opengpu.network/docs/litepaper.pdf"
                            />
                            <MobileNavItem
                              label="Roadmap"
                              href="https://opengpu.network/roadmap"
                            />
                            <MobileNavItem
                              label="FAQ"
                              href="https://opengpu.network/faq"
                            />
                            <MobileNavItem
                              label="GitHub"
                              href="https://github.com/OpenGPUNetwork"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Footer CTA (only Get Started) */}
                <div className="px-5 pb-6 pt-3 border-t border-white/10">
                  <a
                    href="/getstarted"
                    className="w-full text-center block px-6 py-3 rounded-xl font-semibold text-white text-sm
                      bg-[#00C6E6] border-[2px] border-[#00C6E6]/80
                      transition-all duration-300
                      shadow-[0_0_18px_rgba(0,198,230,0.35)]
                      hover:-translate-y-[2px] hover:bg-[#00C6E6]/90 hover:border-[#00C6E6]"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow bar */}
        <div className="relative w-full h-[1.5px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF] to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[#00E9FF] opacity-40 blur-sm" />
        </div>
      </header>
    </>
  );
}
