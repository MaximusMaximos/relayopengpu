"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

/* -------------------------------------------------------
   GRADIENT BUTTON (NO HYDRATION RISK)
-------------------------------------------------------- */
function GradientButton(href: string, label: string) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
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
        {/* =====================================================
             DARK HERO SECTION — MESH + MATCHES BRAND
        ====================================================== */}
        <section className="relative w-full py-16 md:py-24 bg-[#020617] text-white overflow-hidden">
          {/* Mesh background */}
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

          {/* Glows / fields */}
          <div className="pointer-events-none absolute inset-0 opacity-40 z-[0]">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E9FF]/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0A84FF]/10 blur-3xl" />
          </div>

          {/* Glaze overlay */}
          <div className="absolute inset-0 z-[0] bg-[linear-gradient(135deg,rgba(0,38,80,0.35),rgba(0,0,0,0))]" />

          {/* HERO CONTENT */}
          <div className="relative z-[5] max-w-6xl mx-auto px-6 md:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center"
            >
              {/* COPY BLOCK */}
              <div className="space-y-5">
                {/* Glow bar */}
                <div className="relative w-full h-[1px] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF]/40 to-transparent blur-sm" />
                  <div className="absolute inset-0 bg-[#00E9FF]/20" />
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#00E9FF] font-semibold">
                  Get Started
                </p>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Join the OpenGPU Network
                </h1>

                <h2 className="text-lg md:text-xl font-medium text-slate-300">
                  The global routing layer for AI. Access compute or earn from your GPUs.
                </h2>

                <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
                  OpenGPU connects developers and GPU providers through a unified routing layer. Developers run
                  workloads up to{" "}
                  <span className="text-[#00E9FF] font-semibold">60–80% cheaper</span>, while providers
                  earn by contributing compute.
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-wrap gap-3 pt-3">
                  <a
                    href="https://client.opengpu.network/"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
                               bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] text-white
                               shadow-[0_4px_14px_rgba(10,132,255,0.4)]
                               hover:shadow-[0_6px_20px_rgba(10,132,255,0.5)]
                               transition-all duration-200"
                  >
                    Get Compute Power →
                  </a>

                  <a
                    href="#provider"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
                               border border-white/30 bg-white/5 text-white
                               hover:bg-white/10 transition-all duration-200"
                  >
                    Start Earning →
                  </a>
                </div>
              </div>

              {/* VIDEO SIDE */}
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
                  className="text-xs md:text-sm text-[#00E9FF] hover:text-white underline inline-block"
                >
                  macOS setup tutorial →
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
             WHITE SECTIONS BELOW
        ====================================================== */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-20">
          {/* ====================== HOW IT WORKS ====================== */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">How it works</h2>
              <p className="text-slate-600">
                Four simple steps to start earning with your GPU
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "1",
                  title: "Connect GPU + Wallet",
                  body: "Install the Provider Suite and register your hardware. During setup you will link a master wallet and a provider wallet used for payouts.",
                },
                {
                  num: "2",
                  title: "Choose Your Compute Source",
                  body: "Select which source (client) your GPU will serve. This determines where your workloads will come from.",
                },
                {
                  num: "3",
                  title: "Activate Your Source (1000 OGPU)",
                  body: "Commit 1000 OGPU to activate the source. Once activated, your GPU becomes eligible to receive workloads automatically.",
                },
                {
                  num: "4",
                  title: "Earn in Real Time",
                  body: "Tasks are routed to you from the selected source, executed on your GPU, and rewards stream into your provider wallet. Monitor everything in the Management dApp.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="relative rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#00C6FF] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.num}
                  </div>
                  <h3 className="text-base font-semibold mb-2 mt-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ====================== FIRST TIME? ====================== */}
          <section className="rounded-2xl border border-[#0A84FF]/20 bg-gradient-to-br from-blue-50 to-cyan-50 px-8 py-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A84FF]/10 flex items-center justify-center">
                <span className="text-[#0A84FF] text-xl">ℹ️</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">First time using OpenGPU?</h3>
                <p className="text-sm text-slate-700">
                  If you're new, start with the{" "}
                  <a
                    href="/howtobuy"
                    className="text-[#0A84FF] hover:text-[#00C6FF] underline font-medium"
                  >
                    How to Buy OGPU
                  </a>{" "}
                  guide. Once you hold OGPU tokens, return here to activate your sources and begin earning.
                </p>
              </div>
            </div>
          </section>

          {/* ====================== PROVIDER SUITE ====================== */}
          <section id="provider" className="space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Download Provider Suite</h2>
              <p className="text-slate-600">
                Start earning with your GPU resources. Choose your operating system below.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
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
                  <h3 className="text-xl font-semibold mb-2">{item.os}</h3>
                  <p className="text-sm text-slate-600 mb-5 min-h-[40px]">{item.desc}</p>
                  {GradientButton(item.url, `Download for ${item.os} →`)}
                </div>
              ))}
            </div>
          </section>

          {/* ====================== MANAGEMENT DAPP ====================== */}
          <section className="rounded-2xl border border-slate-800/30 bg-[#050B18] px-8 py-10 shadow-xl">
            <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] items-center">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Management dApp</h2>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
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
                                 bg-slate-900/40 px-3 py-1.5 text-xs font-medium text-slate-200"
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

          {/* ====================== NETWORK MAP ====================== */}
          <section className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Network map
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold">
              Explore the global provider network
            </h2>

            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              See how OpenGPU providers are distributed around the world powering AI workloads.
            </p>

            <div className="relative rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100/60 px-4 md:px-6 py-10 md:py-16 flex items-center justify-center">
              <div className="text-center space-y-2 text-xs md:text-sm text-slate-500">
                <p className="font-semibold">INSERT MAP COMPONENT HERE (DEV)</p>
                <p>This will be replaced by the live provider map from the Management dApp.</p>
              </div>
            </div>
          </section>

          {/* ====================== LEARN MORE ====================== */}
          <section className="space-y-6 mb-24 md:mb-32">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Learn more
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold">Learn more about OpenGPU</h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-lg font-semibold">Understand OpenGPU</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  OpenGPU links GPUs worldwide into a decentralized marketplace backed by a high-speed
                  blockchain.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-lg font-semibold">Explore the Ecosystem</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Track rewards and monitor workloads in real time through the Management dApp.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-lg font-semibold">Provider Suite</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Turn your idle GPUs into income instantly by powering real AI workloads.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
