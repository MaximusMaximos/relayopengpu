"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LiveMiniStats from "../components/LiveMiniStats";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function GetStartedPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-20 space-y-16 md:space-y-20">

          {/* HERO */}
          <section className="relative rounded-3xl bg-gradient-to-br from-[#050816] via-[#050B1F] to-[#071426] text-white px-6 md:px-10 lg:px-14 py-10 md:py-14 overflow-hidden">

            {/* Glows */}
            <div className="pointer-events-none">
              <div className="absolute -top-32 -left-20 w-72 h-72 bg-cyan-500/25 blur-3xl" />
              <div className="absolute -bottom-40 -right-10 w-80 h-80 bg-blue-500/30 blur-3xl" />
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="relative grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center"
            >

              {/* TEXT SIDE */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-300">
                    Get Started
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    Turn idle GPUs into income
                  </h1>
                  <h2 className="text-xl md:text-2xl font-medium text-cyan-200">
                    Power AI workloads directly, up to 60%–80% cheaper.
                  </h2>
                </div>

                <p className="text-sm md:text-base text-slate-200 max-w-xl">
                  OpenGPU is democratizing compute. Instead of renting from tech giants,
                  users tap into a global GPU network with no middlemen and no wasted resources.
                  It is fast, fair, and cost efficient.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#provider"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-[#0B84FF] to-[#00C6FF] shadow-[0_14px_45px_rgba(0,0,0,0.55)] hover:translate-y-0.5 hover:shadow-[0_20px_65px_rgba(0,0,0,0.65)] transition"
                  >
                    Start Earning Now
                  </a>

                  <button className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-slate-500/70 bg-white/5 hover:bg-white/10 transition">
                    Get Compute Power
                  </button>
                </div>

                <p className="text-xs md:text-sm text-slate-300 max-w-xl pt-2">
                  OpenGPU is building AI’s open foundation where compute belongs to the people, not the giants.
                </p>
              </div>

              {/* HERO VIDEO */}
              <div className="relative space-y-3">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-sm">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/7UnpFqUNFBQ"
                      title="OpenGPU Windows provider setup"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                
                </div>
                 

                <a
                  href="https://www.youtube.com/watch?v=6ZARCPQrJGM"
                  target="_blank"
                  className="text-xs md:text-sm text-cyan-300 hover:text-cyan-100 underline"
                >
                  macOS users: click here to watch the macOS setup tutorial →
                </a>
                 {/* RIGHT – LIVE MINI STATS */}
              <LiveMiniStats />

            
              </div>

            </motion.div>
          </section>

          {/* HOW IT WORKS */}
          <section className="space-y-6">
           <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeUp}
  transition={{ duration: 0.45, delay: 0.05 }}
  className="grid gap-4 md:gap-5 md:grid-cols-4"
>
  {[
    {
      title: "Connect your GPU and wallet",
      body: "Install the OpenGPU Provider Suite and connect your wallet so you can receive rewards and register your hardware.",
    },
    {
      title: "Workloads are assigned automatically",
      body: "The network distributes AI and ML tasks to your GPU based on availability and performance. No Relay interaction needed.",
    },
    {
      title: "Tasks execute instantly",
      body: "Your GPU processes real AI, ML, and rendering jobs with zero DevOps or manual configuration.",
    },
    {
      title: "Earn in real time",
      body: "Track rewards, utilization, and tasks through the Management dApp as they happen.",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="rounded-2xl border border-slate-200 bg-white px-4 py-4 md:px-5 md:py-5 shadow-sm"
    >
      <h3 className="text-sm md:text-base font-semibold mb-2">
        {item.title}
      </h3>
      <p className="text-xs md:text-sm text-slate-600">{item.body}</p>
    </div>
  ))}
</motion.div>

          </section>

          {/* PROVIDER SUITE */}
          <section id="provider" className="space-y-6 scroll-mt-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                Provider suite
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">Download the OpenGPU Provider Suite</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                Start earning with your GPU resources. Download the Provider Suite for your operating system.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {[
                { name: "macOS", description: "Optimized installer for Apple silicon and Intel Macs.", button: "Download for macOS" },
                { name: "Windows", description: "Compatible with NVIDIA-based Windows desktops.", button: "Download for Windows" },
                { name: "Linux", description: "Run OpenGPU providers on your Linux rigs.", button: "Download for Linux" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-xs md:text-sm text-slate-600">{item.description}</p>
                  </div>
                  <button className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs md:text-sm font-medium bg-gradient-to-r from-[#0B84FF] to-[#00C6FF] text-white shadow-[0_10px_30px_rgba(15,23,42,0.45)] hover:translate-y-0.5 hover:shadow-[0_16px_45px_rgba(15,23,42,0.55)] transition">
                    {item.button}
                  </button>
                </div>
              ))}
            </motion.div>
          </section>

{/* MANAGEMENT DAPP */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                Management dApp
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Connect to the OpenGPU Management dApp
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                Monitor your GPUs, track rewards, and manage workloads from a unified dashboard.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start"
            >
              {/* LEFT */}
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Track live earnings",
                    "Pause workloads anytime",
                    "Scale your fleet",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-[11px] md:text-xs text-slate-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-[#0B84FF] to-[#00C6FF] text-white shadow-[0_14px_40px_rgba(15,23,42,0.55)] hover:translate-y-0.5 hover:shadow-[0_20px_60px_rgba(15,23,42,0.65)] transition">
                  Launch Management dApp
                </button>

                <p className="text-xs text-slate-500">
                  After installing the Provider Suite, use the Management dApp to keep full control of your GPUs and rewards.
                </p>
              </div>
              
            </motion.div>
          </section>

          {/* MAP PLACEHOLDER */}
          <section className="space-y-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                Network map
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">Explore the global provider network</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                See how OpenGPU providers are distributed around the world powering AI workloads.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <div className="relative rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100/60 px-4 md:px-6 py-10 md:py-16 flex items-center justify-center">
                <div className="text-center space-y-2 text-xs md:text-sm text-slate-500">
                  <p className="font-semibold">INSERT MAP COMPONENT HERE (DEV)</p>
                  <p>This will be replaced by the live provider map from the Management dApp.</p>
                </div>
              </div>
            </motion.div>
          </section>

          

          {/* LEARN MORE */}
          <section className="space-y-6 mb-24 md:mb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                Learn more
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Learn more about OpenGPU
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-3"
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-lg font-semibold">Understand OpenGPU</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  OpenGPU links GPUs worldwide into a decentralized marketplace backed by a high-speed blockchain.
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
            </motion.div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
