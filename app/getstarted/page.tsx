"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function GradientButton(href: string, label: string) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full px-6 py-2.5 doorway-button
                 bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] text-white
                 shadow-[0_4px_14px_rgba(10,132,255,0.4)]
                 hover:shadow-[0_6px_20px_rgba(10,132,255,0.5)]
                 transition-all duration-200"
    >
      {label}
    </a>
  );
}

export default function GetStartedPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
        
        {/* HERO SECTION */}
        <section className="relative w-full pt-20 pb-8 md:pb-10 px-6 md:px-8 bg-[#020617] text-white overflow-hidden">
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              backgroundImage: "url('/Images/Frame-light.png')",
              backgroundSize: "55%",
              backgroundPosition: "bottom right",
              backgroundRepeat: "no-repeat",
              opacity: 0.25,
              filter: "contrast(1.4) brightness(1.4)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 opacity-40 z-[0]">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E9FF]/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0A84FF]/10 blur-3xl" />
          </div>

          <div className="absolute inset-0 z-[0] bg-[linear-gradient(135deg,rgba(0,38,80,0.35),rgba(0,0,0,0))]" />

          <div className="relative z-[5] max-w-6xl mx-auto px-6 md:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="grid gap-6 md:gap-8 lg:grid-cols-[1.2fr_1fr] items-center"
            >
              <div className="space-y-5">
                <div className="relative w-full h-[1px] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF]/40 to-transparent blur-sm" />
                  <div className="absolute inset-0 bg-[#00E9FF]/20" />
                </div>

                <p className="section-label-cyan">
                  <small>Get Started</small>
                </p>

                <h2 className="text-white">
                  Join the OpenGPU Network
                </h2>

                <p className="text-slate-300 doorway-description">
                  The global routing layer for AI. Access compute or earn from your GPUs.
                </p>

                <p className="doorway-description text-slate-400 max-w-xl">
                  OpenGPU connects developers and GPU providers through a unified routing layer. Developers run
                  workloads up to{" "}
                  <span className="text-[#00E9FF]">60–80% cheaper</span>, while providers
                  earn by contributing compute.
                </p>

                <div className="flex flex-wrap gap-3 pt-3">
                  <a
                    href="https://client.opengpu.network/"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 doorway-button
                               bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] text-white
                               shadow-[0_4px_14px_rgba(10,132,255,0.4)]
                               hover:shadow-[0_6px_20px_rgba(10,132,255,0.5)]
                               transition-all duration-200"
                  >
                    Get Compute Power →
                  </a>

                  <a
                    href="#download"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 doorway-button
                               border border-white/30 bg-white/5 text-white
                               hover:bg-white/10 transition-all duration-200"
                  >
                    Start Earning →
                  </a>
                </div>
              </div>

              <div className="space-y-3 relative z-[5]">
                <div className="rounded-xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/7UnpFqUNFBQ"
                      title="OpenGPU Provider Setup"
                      allowFullScreen
                    />
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=6ZARCPQrJGM"
                  className="doorway-description text-[#00E9FF] hover:text-white underline inline-block"
                >
                  macOS setup tutorial →
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHITE SECTIONS */}
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-10 space-y-12 md:space-y-16">
          
          {/* WHY PROVIDE */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-3">Why Join the Provider Network?</h2>
              <p className="text-slate-600 doorway-description">
                Turn your idle GPU into network value while supporting decentralized AI infrastructure
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "💎",
                  title: "Earn OGPU Tokens",
                  desc: "Get rewarded for every completed task your GPU processes",
                },
                {
                  icon: "🌱",
                  title: "Early Network Phase",
                  desc: "Join during launch phase and position yourself for growth",
                },
                {
                  icon: "🚀",
                  title: "Network Growth",
                  desc: "As demand scales, so does opportunity and task volume",
                },
                {
                  icon: "⚡",
                  title: "Put Idle GPUs to Work",
                  desc: "Transform unused compute into productive network contribution",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-slate-600 doorway-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-3">How it works</h2>
              <p className="text-slate-600 doorway-description">
                Four simple steps to start earning with your GPU
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "1",
                  title: "Connect GPU + Wallet",
                  body: "Install the Provider Suite and register your hardware. Link your master wallet and provider wallet for payouts.",
                },
                {
                  num: "2",
                  title: "Choose Your Compute Source",
                  body: "Select which source your GPU will serve. Each source offers different workload types and task flows.",
                },
                {
                  num: "3",
                  title: "Activate Your Source",
                  body: "Stake 1000 OGPU tokens to activate (recoverable after 7 days). This ensures network quality and commitment.",
                },
                {
                  num: "4",
                  title: "Earn in Real Time",
                  body: "Tasks route to your GPU automatically. Complete workloads, earn OGPU tokens. Monitor everything in the Management dApp.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="relative rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#00C6FF] flex items-center justify-center text-white doorway-button shadow-lg">
                    {item.num}
                  </div>
                  <h3 className="mb-2 mt-2">{item.title}</h3>
                  <p className="text-slate-600 doorway-description">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NETWORK ACTIVITY */}
          <section className="rounded-2xl border-2 border-[#0A84FF]/20 bg-gradient-to-br from-blue-50 to-cyan-50 px-8 py-8">
            <div className="text-center mb-6">
              <h2 className="mb-3">Network Status: 🟢 Live on Mainnet</h2>
              <p className="text-slate-600 doorway-description">
                Early phase - Join as network scales globally
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Tasks Completed", value: "37M+" },
                { label: "Network Uptime", value: "99.4%" },
                { label: "Global Locations", value: "264+" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 doorway-description">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <a
                href="https://ogpuscan.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A84FF] hover:text-[#00C6FF] underline doorway-description"
              >
                Verify on OGPUScan →
              </a>
            </div>
          </section>

          {/* PROVIDER REQUIREMENTS */}
          <section id="provider" className="space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-3">What You Need</h2>
              <p className="text-slate-600 doorway-description">
                Requirements to become an OpenGPU provider
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <h3 className="mb-4">✅ Compatible GPU</h3>
                <ul className="space-y-2 text-slate-600 doorway-description">
                  <li>• NVIDIA RTX 3060 or higher</li>
                  <li>• AMD RX 6800 or higher</li>
                  <li>• Apple M1/M2/M3 series</li>
                  <li>• Minimum 8GB VRAM recommended</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <h3 className="mb-4">✅ 1000 OGPU Tokens</h3>
                <ul className="space-y-2 text-slate-600 doorway-description">
                  <li>• One-time stake per source</li>
                  <li>• Locked in vault (recoverable)</li>
                  <li>• Withdrawable after 7 days</li>
                  <li>• Ensures network quality</li>
                </ul>
                <a href="/howtobuy" className="text-[#0A84FF] hover:text-[#00C6FF] underline doorway-description block mt-3">
                  How to Get OGPU →
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <h3 className="mb-4">✅ Stable Internet</h3>
                <ul className="space-y-2 text-slate-600 doorway-description">
                  <li>• Recommended: 50+ Mbps</li>
                  <li>• 99%+ uptime preferred</li>
                  <li>• Low latency connection</li>
                  <li>• Reliable for task routing</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <h3 className="mb-4">✅ Provider Suite Installed</h3>
                <ul className="space-y-2 text-slate-600 doorway-description">
                  <li>• Available for macOS, Windows, Linux</li>
                  <li>• 5-minute installation</li>
                  <li>• Automatic updates</li>
                  <li>• Dashboard included</li>
                </ul>
              </div>
            </div>
          </section>

          {/* DOWNLOAD PROVIDER SUITE */}
          <section id="download" className="space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-3">Download Provider Suite</h2>
              <p className="text-slate-600 doorway-description">
                Start earning with your GPU resources. Choose your operating system below.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {[
                {
                  os: "macOS",
                  icon: "/Assets/apple.png",
                  desc: "Optimized for Apple silicon and Intel Macs.",
                  url: "https://oerelease.opengpu.network/download/flavor/default/3.1.0/osx_arm64/OpenGPU-Provider-Suite-3.1.0.pkg",
                },
                {
                  os: "Windows",
                  icon: "/Assets/windows.png",
                  desc: "Compatible with NVIDIA GPUs on Windows.",
                  url: "https://oerelease.opengpu.network/download/flavor/default/3.1.0/windows_64/OpenGPU-Provider-Suite-3.1.0.exe",
                },
                {
                  os: "Linux",
                  icon: "/Assets/linux.png",
                  desc: "Run OpenGPU providers on Linux rigs.",
                  url: "https://opengpu.network/download/linux",
                },
              ].map((item) => (
                <div
                  key={item.os}
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-7 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <img src={item.icon} alt={item.os} className="w-12 h-12 mb-3 invert" />
                  <h3 className="mb-2">{item.os}</h3>
                  <p className="doorway-description text-slate-600 mb-5 min-h-[40px]">{item.desc}</p>
                  {GradientButton(item.url, `Download for ${item.os} →`)}
                </div>
              ))}
            </div>
          </section>

          {/* MANAGEMENT DAPP */}
          <section className="rounded-2xl border border-slate-800/30 bg-[#050B18] px-8 py-10 shadow-xl">
            <div className="grid gap-6 md:gap-8 md:grid-cols-[1.3fr_1fr] items-center">
              <div className="space-y-5">
                <h2 className="text-white">Management dApp</h2>

                <p className="text-slate-300 doorway-description">
                  Monitor your GPUs, register sources, track rewards, assign jobs manually, or enable
                  automatic routing. Everything happens from one unified dashboard.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Track rewards",
                    "Manage sources",
                    "Pick jobs manually",
                    "Monitor GPU health",
                    "Scale your fleet",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-full border border-slate-600/60 
                                 bg-slate-900/40 px-3 py-1.5 doorway-description text-slate-200"
                    >
                      ✓ {badge}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  {GradientButton("https://management.opengpu.network/", "Launch Management dApp →")}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900/80">
                  <img
                    src="/Images/management.png"
                    alt="Management dApp Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-3">Common Questions</h2>
              <p className="text-slate-600 doorway-description">
                Everything you need to know about becoming a provider
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What is a 'source'?",
                  a: "A source is a client or marketplace that sends workloads to your GPU. Think of it like choosing which app store to serve. Different sources have different types of tasks - Relay offers managed routing, Community Pool connects you directly to developers, and Enterprise sources provide dedicated contracts.",
                },
                {
                  q: "Why do I need 1000 OGPU to activate?",
                  a: "The 1000 OGPU stake ensures provider commitment and network quality. It's locked in a vault but fully recoverable - you can withdraw it after 7 days if you decide to deactivate. This stake helps maintain network reliability and prevents spam.",
                },
                {
                  q: "How do I get OGPU tokens?",
                  a: "You can purchase OGPU on exchanges. Follow our How to Buy guide for step-by-step instructions on acquiring tokens, setting up wallets, and transferring to your provider account.",
                },
                {
                  q: "Can I use multiple GPUs?",
                  a: "Yes! Each GPU can be registered separately and can serve different sources. You'll need to stake 1000 OGPU for each source activation, but you can withdraw stakes after 7 days if you deactivate.",
                },
                {
                  q: "What if my GPU goes offline?",
                  a: "Tasks are automatically routed to other available providers. Your uptime affects your task priority - providers with 99%+ uptime get priority routing for new tasks.",
                },
                {
                  q: "When do I get paid?",
                  a: "OGPU tokens are deposited to your provider wallet immediately after task completion. You can monitor all earnings in real-time through the Management dApp and withdraw anytime.",
                },
                {
                  q: "Can I withdraw my 1000 OGPU stake?",
                  a: "Yes. Deactivate your source in the Management dApp and after 7 days the stake is released from the vault. You can then withdraw it to your wallet.",
                },
                {
                  q: "What workloads will I run?",
                  a: "Depends on your selected source - common tasks include LLM inference, model training, rendering, simulations, and batch processing. The Provider Suite handles all workload execution automatically.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <summary className="cursor-pointer doorway-description font-medium text-slate-900">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-slate-600 doorway-description leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* COMMUNITY & SUPPORT */}
          <section className="space-y-6">
            <h2 className="text-center">Join the Early Provider Community</h2>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <h3 className="mb-3">💬 Community Support</h3>
                <p className="doorway-description text-slate-600 mb-4">
                  Join our Telegram community to ask questions, share tips, and get real-time updates from the team and other providers.
                </p>
                <a
                  href="https://t.me/opengpu_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A84FF] hover:text-[#00C6FF] underline doorway-description"
                >
                  Join Telegram →
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <h3 className="mb-3">📚 Documentation</h3>
                <p className="doorway-description text-slate-600 mb-4">
                  Complete setup guides, troubleshooting help, and best practices for maximizing your provider performance.
                </p>
                <a
                  href="https://docs.opengpu.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A84FF] hover:text-[#00C6FF] underline doorway-description"
                >
                  View Docs →
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}