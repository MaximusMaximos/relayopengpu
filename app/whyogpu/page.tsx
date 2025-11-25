"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyOGPUPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-20">

          {/* ========================= HERO ========================= */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="text-center space-y-4"
          >
            <span className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Why OGPU
            </span>

            <h1 className="text-3xl md:text-4xl font-semibold">
              A faster, cheaper and more reliable way to run AI
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              OGPU routes workloads across decentralized providers, OGPU datacenters, enterprise fleets and cloud overflow
              through one routing layer that outperforms traditional clouds on cost, uptime and execution speed.
            </p>
          </motion.section>

          {/* ========================= 1. COST ADVANTAGE ========================= */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                1. Up to 60-80 percent cheaper than major clouds
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Cloud GPUs stay expensive because you pay for fixed infrastructure, idle clusters and centralized overhead.
                OGPU avoids this by routing workloads across a live global pool of decentralized providers, OGPU
                datacenters, enterprise operators and cloud overflow so you only pay for compute that is actually used.
              </p>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay customers typically save 60-80 percent compared to traditional clouds on equivalent workloads.
                OGPU blockchain users, who pay directly on chain, can save even more.
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
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-sky-600 mb-1 uppercase tracking-wide">
                  No idle clusters
                </p>
                <p className="text-sm text-slate-600">
                  Routing pulls from live capacity across the network so you are not paying for idle GPU fleets.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-sky-600 mb-1 uppercase tracking-wide">
                  Lean overhead
                </p>
                <p className="text-sm text-slate-600">
                  Decentralized providers and OGPU datacenters reduce heavy centralized overhead that inflates cloud pricing.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-sky-600 mb-1 uppercase tracking-wide">
                  Native or Relay
                </p>
                <p className="text-sm text-slate-600">
                  Use Relay with fiat and HTTPS or native OGPU execution on chain to access even lower pricing.
                </p>
              </div>
            </motion.div>
          </section>

          {/* ========================= 2. ROUTING FIRST ========================= */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                2. Routing first, not datacenters
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Traditional clouds start from infrastructure and regions. OGPU starts from a routing layer that treats all
                compute as one pool then decides where each workload should run in real time.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold mb-2">Signals from the network</h3>
                <p className="text-sm text-slate-600">
                  VRAM and GPU class, node health, utilisation, latency and geographic proximity, all evaluated per job.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold mb-2">Signals from the workload</h3>
                <p className="text-sm text-slate-600">
                  Model type, memory needs, expected duration, budget and priority determine where each job should land.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold mb-2">Routing goal</h3>
                <p className="text-sm text-slate-600">
                  Match every job to the best available GPU at that moment so you get strong performance without building
                  your own scheduler.
                </p>
              </div>
            </motion.div>
          </section>

          {/* ========================= 3. NO RESTARTS MID RUN ========================= */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                3. Jobs do not restart if a GPU fails mid run
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                On many clouds a failing instance means restarting your workload unless you build your own checkpointing and
                recovery. OGPU is designed to keep jobs moving even when individual nodes are unreliable.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Live health checks and failover</h3>
                <p className="text-sm text-slate-600">
                  Routing monitors provider health. If a GPU drops or underperforms the job is shifted to the next best node
                  without restarting from zero.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Single executor with continuity</h3>
                <p className="text-sm text-slate-600">
                  Each workload runs as a single logical executor with checkpoints and continuity guarantees so long running
                  training, video and scientific jobs can complete without duplicated cost.
                </p>
              </div>
            </motion.div>
          </section>

          {/* ========================= 4. BUILT TO NEVER GO DOWN ========================= */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                4. Built to never go down like a single cloud region
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                The network combines decentralized providers, OGPU datacenters, enterprise fleets and cloud overflow so that
                no single facility represents a single point of failure.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold mb-2">Global mesh of providers</h3>
                <p className="text-sm text-slate-600">
                  If one region is under pressure routing simply shifts new jobs to healthy nodes elsewhere.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold mb-2">Datacenters plus community</h3>
                <p className="text-sm text-slate-600">
                  OGPU operated datacenters provide a stable backbone while decentralized providers add elasticity.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold mb-2">Cloud as overflow</h3>
                <p className="text-sm text-slate-600">
                  Cloud GPUs can be used as overflow capacity for rare GPU types or extreme demand spikes.
                </p>
              </div>
            </motion.div>
          </section>

          {/* ========================= 5. NO LONG TERM CONTRACTS ========================= */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">5. No long term contracts</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                OGPU is usage based. There are no reserved instance lock ins, no minimum spend commitments and no multi year
                contracts. Teams can ramp up or down with demand and only pay for workloads they actually run.
              </p>
            </motion.div>
          </section>

          {/* ========================= 6. RELAY PRICING TABLE ========================= */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">6. OpenGPU Relay pricing</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay exposes the network through a simple HTTPS endpoint with fiat billing. Pricing is already more than
                50 percent cheaper than centralized services on average and many workloads land in the 60-80 percent savings
                band compared to major clouds.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 shadow-sm"
            >
              <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <p className="font-semibold text-sm md:text-base">
                  OpenGPU Relay Pricing
                </p>
                <p className="text-xs text-slate-400">
                  More than 50 percent cheaper than centralized services on average
                </p>
              </div>

              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-slate-900/80 border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3 font-medium text-slate-300">Model</th>
                    <th className="px-4 py-3 font-medium text-slate-300">
                      Relay price (USD per 1M tokens or unit)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800/80">
                    <td className="px-4 py-3 text-slate-100">gpt-oss : 120B</td>
                    <td className="px-4 py-3 text-slate-100">$0.05 input / $0.40 output</td>
                  </tr>
                  <tr className="border-b border-slate-800/80">
                    <td className="px-4 py-3 text-slate-100">gpt-oss : 20B</td>
                    <td className="px-4 py-3 text-slate-100">$0.04 input / $0.30 output</td>
                  </tr>
                  <tr className="border-b border-slate-800/80">
                    <td className="px-4 py-3 text-slate-100">llama3.2 : 3B</td>
                    <td className="px-4 py-3 text-slate-100">$0.02 input / $0.15 output</td>
                  </tr>
                  <tr className="border-b border-slate-800/80">
                    <td className="px-4 py-3 text-slate-100">deepseek-r1 : 8B</td>
                    <td className="px-4 py-3 text-slate-100">$0.025 input / $0.20 output</td>
                  </tr>
                  <tr className="border-b border-slate-800/80">
                    <td className="px-4 py-3 text-slate-100">sesame.tts : 1B</td>
                    <td className="px-4 py-3 text-slate-100">$0.0012 per minute of speech</td>
                  </tr>
                  <tr className="border-b border-slate-800/80">
                    <td className="px-4 py-3 text-slate-100">openai/whisper-large-v3</td>
                    <td className="px-4 py-3 text-slate-100">$0.0012 per minute of audio</td>
                  </tr>
                  <tr className="border-b border-slate-800/80">
                    <td className="px-4 py-3 text-slate-100">ultravox-v0.6-llama-3.1-8B</td>
                    <td className="px-4 py-3 text-slate-100">
                      $0.05 input / $0.40 output per 1M tokens plus $0.001 per audio second
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-100">illustrious-realism-by-klaabu-v1.0</td>
                    <td className="px-4 py-3 text-slate-100">$0.025 per image</td>
                  </tr>
                </tbody>
              </table>

              <div className="px-4 py-3 border-t border-slate-800 text-xs text-slate-300">
                More models are on the way, specific pricing and custom quoting available on request.
              </div>
            </motion.div>
          </section>

          {/* ========================= 7. ONE NETWORK, MANY WORKLOADS ========================= */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">7. One network for every workload</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                OGPU supports a wide range of GPU workloads without forcing you to manage separate infrastructure for each.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid md:grid-cols-2 gap-4 text-sm text-slate-600"
            >
              <ul className="space-y-2">
                <li>• LLM inference and training</li>
                <li>• Multimodal and embeddings</li>
                <li>• Video AI and transcoding</li>
                <li>• VFX rendering and CGI</li>
              </ul>
              <ul className="space-y-2">
                <li>• Scientific and research compute</li>
                <li>• RAG and agent workloads</li>
                <li>• Batch processing and cron jobs</li>
                <li>• Synthetic data generation</li>
              </ul>
            </motion.div>
          </section>

          {/* ========================= 8. WHY TEAMS SWITCH ========================= */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                8. Why teams switch from centralized clouds to OGPU
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm grid md:grid-cols-2 gap-6 text-sm text-slate-600"
            >
              <ul className="space-y-2">
                <li>• 60-80 percent lower costs for many AI workloads.</li>
                <li>• Jobs do not restart if a GPU fails mid run.</li>
                <li>• Strong uptime because the network never relies on a single region.</li>
                <li>• Simple Relay integration with HTTPS and fiat billing.</li>
              </ul>
              <ul className="space-y-2">
                <li>• Even lower prices with native OGPU on chain execution.</li>
                <li>• No long term contracts or reserved instance lock in.</li>
                <li>• One routing layer that can grow with your workloads.</li>
                <li>• Support for both startups and large enterprises.</li>
              </ul>
            </motion.div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
