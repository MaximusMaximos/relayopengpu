"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function HowOGPUWorksPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-20">

          {/* ========================= HERO ========================= */}
          <section className="text-center space-y-4">
            <span className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              How OGPU Works
            </span>

            <h1 className="text-3xl md:text-4xl font-semibold">
              How workloads move across the OGPU Network
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              OGPU connects decentralized providers, OGPU datacenters, enterprise fleets, and cloud GPUs
              into one unified routing layer. This page shows exactly how workloads flow through it.
            </p>
          </section>

          {/* ========================= 3 STEPS ========================= */}
          <section className="grid md:grid-cols-2 gap-16 md:gap-20">

            {/* LEFT: Description */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-semibold">
                How OGPU connects your AI to global GPUs
              </h2>

              <p className="text-base md:text-lg text-slate-600 max-w-lg">
                OGPU automatically routes each workload to the best available GPU across the network,
                balancing speed, reliability and cost with built-in failover and retry mechanisms.
              </p>

              <div className="space-y-6 border-l-2 border-sky-400/40 pl-6">

                {/* Step 1 */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Step 1 · Submit a workload
                  </h3>
                  <p className="text-sm text-slate-600">
                    Workloads arrive through Relay (HTTPS and fiat billing) or native OGPU protocol tools.
                    OGPU detects requirements such as VRAM, GPU class, model type and dataset size.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Step 2 · Routing and provider selection
                  </h3>
                  <p className="text-sm text-slate-600">
                    The routing layer evaluates every available GPU on the network and sends the job to the
                    provider that delivers the best balance of cost, speed and reliability. If a machine
                    drops mid-run, execution automatically shifts to the next best GPU.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Step 3 · Execute end-to-end
                  </h3>
                  <p className="text-sm text-slate-600">
                    Tasks run on the selected node with real-time logging, checkpoints, and result delivery.
                    Failover and retry ensure continuity even when decentralized providers fluctuate.
                  </p>
                </div>

              </div>

              <p className="text-sm font-medium text-slate-900 border-t border-slate-200 pt-6">
                Single executor per job, on-chain verification, automatic failover and task-based billing.
              </p>

              <a
                href="https://ogpuscan.io/"
                className="mt-2 inline-block px-8 py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow hover:bg-sky-700 transition"
              >
                See real workloads running →
              </a>
            </div>

            {/* RIGHT: Vertical Animation */}
            <div className="flex flex-col items-center space-y-16">
              {/* Node 1 */}
              <motion.div
                className="flex flex-col items-center"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow border border-sky-300 flex items-center justify-center">
                  <span className="text-sky-500 text-3xl">↑</span>
                </div>
                <p className="text-xs mt-3 font-semibold uppercase">Submit workload</p>
              </motion.div>

              {/* Connector */}
              <motion.div className="w-[3px] h-24 bg-gradient-to-b from-sky-500 to-cyan-400 rounded-full relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400 to-sky-500 opacity-70"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Node 2 */}
              <motion.div
                className="flex flex-col items-center"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.4, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow border border-sky-300 flex items-center justify-center">
                  <span className="text-sky-500 text-3xl">⚙️</span>
                </div>
                <p className="text-xs mt-3 font-semibold uppercase">Provider selection</p>
              </motion.div>

              {/* Connector */}
              <motion.div className="w-[3px] h-24 bg-gradient-to-b from-sky-500 to-cyan-400 rounded-full relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400 to-sky-500 opacity-70"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                />
              </motion.div>

              {/* Node 3 */}
              <motion.div
                className="flex flex-col items-center"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.8, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow border border-sky-300 flex items-center justify-center">
                  <span className="text-sky-500 text-3xl">▶</span>
                </div>
                <p className="text-xs mt-3 font-semibold uppercase">Execute end-to-end</p>
              </motion.div>
            </div>
          </section>

          {/* ========================= ROUTING LAYER ========================= */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">The Routing Layer</h2>
            <p className="text-slate-600 max-w-2xl">
              The routing layer makes OGPU intelligent. It evaluates every signal from the network and
              each workload to decide where jobs should run.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Network Signals",
                  desc: "VRAM, GPU class, latency, reliability, utilization and node health."
                },
                {
                  title: "Workload Signals",
                  desc: "Model type, memory needs, budget, duration and priority level."
                },
                {
                  title: "Routing Goal",
                  desc: "Match each job to the best GPU at that moment without manual scheduling."
                },
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================= HYBRID NETWORK ========================= */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Hybrid Global GPU Network</h2>

            <p className="text-slate-600 max-w-2xl">
              OGPU blends decentralized providers, OGPU datacenters, enterprise clusters and cloud GPUs
              into a single logical network.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Decentralized Providers",
                  desc: "High-throughput and cost-efficient GPU nodes from global operators."
                },
                {
                  title: "OGPU Datacenters",
                  desc: "Enterprise-grade clusters offering stability and predictable performance."
                },
                {
                  title: "Enterprise + Cloud Overflow",
                  desc: "Reserved enterprise nodes and cloud GPUs for special requirements."
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================= CTA ========================= */}
          <section className="text-center">
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm max-w-3xl mx-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Ready to explore global workload routing?
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Learn how OGPU moves compute across decentralized and enterprise nodes.
              </p>

              <a
                href="/enterprisehome"
                className="inline-block px-8 py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm hover:bg-sky-700 transition"
              >
                Explore Enterprise →
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
