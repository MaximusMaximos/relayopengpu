"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BlockchainPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-16 md:space-y-20">
          {/* HERO */}
          <section className="space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
                Blockchain
              </div>

              <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
                {/* Text side */}
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-semibold">
                    OpenGPU L1, built for compute from the ground up
                  </h1>
                  <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                    The OpenGPU blockchain is a purpose built L1 that treats compute as a
                    first class citizen. It records task results, provider reputation, and
                    network state so the routing layer always has a fresh view of what is
                    happening on the network.
                  </p>
                  <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                    Workloads run off chain on providers, and the chain verifies and settles
                    tasks in milliseconds. That is how the network can handle around ten
                    thousand task events per second without clogging.
                  </p>
                </div>

                {/* Quick stats card */}
                <div className="rounded-2xl border border-sky-200 bg-white shadow-sm px-5 py-5 space-y-4">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-600">
                    OpenGPU Mainnet
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-900">
                      Consensus: Lachesis DAG based protocol
                    </p>
                    <p className="text-xs text-slate-600">
                      Sub second finality, designed for high frequency task settlement.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl bg-sky-50 px-3 py-2">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-sky-600">
                        Approx TPS
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        ~10 000
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-50 px-3 py-2">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        Block time
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        Under 1 second
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-slate-600">
                    <p>EVM compatible</p>
                    <p>Optimized for task receipts and provider updates</p>
                    <p>Mainnet live since 30 March 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* WHY OUR OWN L1 */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3 max-w-3xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                Why OpenGPU runs its own L1
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                General purpose chains are not tuned for real time compute networks. OpenGPU
                needs a chain that can keep up with workloads, not slow them down.
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
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Task data</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Transactions carry task metadata, final states, and settlement
                  information so every completed job has a verifiable on chain record.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Compute verification</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Execution happens off chain, then the network writes compact proofs and
                  receipts on chain. This keeps verification fast and lightweight.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Provider management</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Provider reputation, availability, and incentives are managed by the
                  protocol, which keeps the routing layer in sync with real network health.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Resource optimization</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Consensus is aware of how tasks and providers are linked, which helps
                  the network avoid hotspots and make better routing decisions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">High throughput design</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  The chain is tuned for high frequency micro events rather than heavy
                  smart contract execution. This is what allows around ten thousand task
                  events per second.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">EVM compatibility</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Developers still use EVM tooling and smart contracts while benefiting
                  from a chain that is built around GPU workloads.
                </p>
              </div>
            </motion.div>
          </section>

          {/* HIGH THROUGHPUT VISUAL AND EXPLANATION */}
<section className="space-y-10">

  {/* MAIN VISUAL ROW */}
  <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16 items-center w-full mb-4 md:mb-6">

    {/* LEFT — BLOCK GRID */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.35 }}
      className="w-full"
    >
      <div
        className="relative w-full max-w-xl mx-auto overflow-hidden rounded-3xl 
                   border border-sky-500/30 bg-gradient-to-b from-[#020617] to-[#020617]
                   shadow-[0_0_60px_rgba(56,189,248,0.35)] px-6 py-8"
      >
        {/* Animated blocks */}
        <div className="grid grid-cols-10 sm:grid-cols-14 gap-2.5">
          {Array.from({ length: 80 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 sm:w-4 sm:h-4 rounded-[5px] bg-sky-400/15 border border-sky-400/25"
              animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: (i % 20) * 0.05,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* TPS LABEL */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-600">
          <span className="uppercase tracking-[0.16em]">
            Parallel task blocks
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-700 shadow-[0_0_8px_rgba(0,0,0,0.35)]" />
            <span>Live verification</span>
          </span>
        </div>
      </div>

      <p className="text-slate-500 text-xs sm:text-sm tracking-[0.18em] uppercase text-center mt-6">
        Around ten thousand tasks per second visualized in block flows
      </p>
    </motion.div>

    {/* RIGHT — EXPLANATION PANEL */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.45 }}
      className="space-y-7"
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase mb-1">
        Purpose built L1
      </p>

      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-slate-900">
        A blockchain that treats compute as a first class citizen
      </h3>

      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        Every task completion can be recorded as a compact on chain event. The chain does 
        not see raw data or model outputs. It sees proofs, receipts, and provider updates 
        that keep the network honest and in sync.
      </p>

      <div className="space-y-4">

        {/* EVM Compatible */}
        <div className="flex items-start gap-3">
          <div className="mt-1 w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center border border-slate-400/40">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          </div>
          <div>
            <p className="font-semibold text-sm mb-1 text-slate-900">EVM compatible</p>
            <p className="text-sm text-slate-600">
              Use familiar wallets, tooling, and smart contracts while targeting a chain tuned 
              for GPU heavy workloads.
            </p>
          </div>
        </div>

        {/* Proof of Execution */}
        <div className="flex items-start gap-3">
          <div className="mt-1 w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center border border-slate-400/40">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          </div>
          <div>
            <p className="font-semibold text-sm mb-1 text-slate-900">
              On chain proof of execution
            </p>
            <p className="text-sm text-slate-600">
              Tasks are verified and settled transparently. You get a public record that work 
              was done, by which provider, and how it was rewarded.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  </div>

  {/* PIPELINE STRIP */}
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 1.0, ease: "easeOut", delay: 0.5 }}
    className="w-full max-w-5xl mb-4 md:mb-6"
  >
    <div
      className="w-full bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 
                 border border-slate-300 rounded-2xl px-6 md:px-8 py-7 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

        <div className="text-left">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-600 uppercase mb-2">
            On chain verification pipeline
          </p>
          <p className="text-sm text-slate-700 max-w-md">
            Submit, route, execute, verify, and settle on chain. A unified workflow that keeps 
            the compute network and the ledger aligned.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-slate-800">
          {["Submit", "Route", "Execute", "Verify", "Settle"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span>{step}</span>
              </div>

              {i < arr.length - 1 && (
                <motion.span
                  className="text-slate-500"
                  animate={{ x: [0, 4, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  </motion.div>


            {/* ON CHAIN VS OFF CHAIN EXPLANATION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="grid gap-6 md:grid-cols-2 items-start"
            >
              <div className="space-y-3 max-w-xl">
                <h3 className="text-lg md:text-xl font-semibold">
                  Only what matters goes on chain
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  OpenGPU separates heavy compute from lightweight verification. Models,
                  inputs, and raw outputs stay off chain on providers. The chain only
                  stores the task receipt and proof that it was completed correctly.
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li>
                    <span className="font-semibold">On chain:</span> task ID, status,
                    timestamps, provider address, reward data, and protocol level
                    updates.
                  </li>
                  <li>
                    <span className="font-semibold">Off chain:</span> model weights,
                    prompts, files, intermediate tensors, logs, and artifacts.
                  </li>
                </ul>
              </div>

              <div className="space-y-3 max-w-xl">
                <h3 className="text-lg md:text-xl font-semibold">
                  Why this scales to high task volumes
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Because verification is compact, the chain is not flooded with large
                  payloads or complex contract calls. Each task adds a small, predictable
                  footprint to the ledger.
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li>
                    Verification takes milliseconds, so the network can handle many
                    parallel tasks without creating backlogs.
                  </li>
                  <li>
                    The Lachesis DAG design supports multiple concurrent block lanes,
                    which keeps throughput high even during spikes.
                  </li>
                  <li>
                    Routing logic can trust the chain to be fresh, instead of reading from
                    a slow or congested ledger.
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* NETWORK DETAILS: MAINNET AND TESTNET */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                OpenGPU network details
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Mainnet is live and used by the protocol today. Testnet is available for
                integration, experimentation, and new deployments.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-5 md:grid-cols-2"
            >
              {/* MAINNET CARD */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                      Mainnet
                    </p>
                    <h3 className="text-base md:text-lg font-semibold">
                      OpenGPU Mainnet
                    </h3>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-100">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">Consensus:</span> Lachesis DAG based
                    protocol
                  </p>
                  <p>
                    <span className="font-semibold">Block time:</span> under 1 second
                  </p>
                  <p>
                    <span className="font-semibold">Throughput:</span> around 10 000 TPS
                  </p>
                  <p>
                    <span className="font-semibold">EVM:</span> compatible
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <p>
                    <span className="font-semibold">Network name:</span> OpenGPU Mainnet
                  </p>
                  <p>
                    <span className="font-semibold">Chain ID:</span> 1071
                  </p>
                  <p>
                    <span className="font-semibold">Currency symbol:</span> OGPU
                  </p>
                  <p>
                    <span className="font-semibold">Currency name:</span> OpenGPU
                  </p>
                  <p>
                    <span className="font-semibold">Decimals:</span> 18
                  </p>
                  <p>
                    <span className="font-semibold">RPC URL:</span>{" "}
                    https://mainnet-rpc.ogpuscan.io
                  </p>
                  <p>
                    <span className="font-semibold">Block explorer:</span>{" "}
                    https://ogpuscan.io
                  </p>
                </div>
              </div>

              {/* TESTNET CARD */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                      Testnet
                    </p>
                    <h3 className="text-base md:text-lg font-semibold">
                      OpenGPU Testnet
                    </h3>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 border border-sky-100">
                    For development
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">Consensus:</span> Lachesis DAG based
                    protocol
                  </p>
                  <p>
                    <span className="font-semibold">Block time:</span> under 1 second
                  </p>
                  <p>
                    <span className="font-semibold">Throughput:</span> around 10 000 TPS
                  </p>
                  <p>
                    <span className="font-semibold">EVM:</span> compatible
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <p>
                    <span className="font-semibold">Network name:</span> OpenGPU Testnet
                  </p>
                  <p>
                    <span className="font-semibold">Chain ID:</span> 200820172034
                  </p>
                  <p>
                    <span className="font-semibold">Currency symbol:</span> ToGPU
                  </p>
                  <p>
                    <span className="font-semibold">Currency name:</span> Test OpenGPU
                  </p>
                  <p>
                    <span className="font-semibold">Decimals:</span> 18
                  </p>
                  <p>
                    <span className="font-semibold">RPC URL:</span>{" "}
                    https://testnetrpc.ogpuscan.io
                  </p>
                  <p>
                    <span className="font-semibold">Block explorer:</span>{" "}
                    https://testnet.ogpuscan.io
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ORC 20 TOKEN STANDARD */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3 max-w-3xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                ORC 20 token standard
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                ORC 20 is the main token standard on the OpenGPU blockchain. It extends
                familiar token patterns with rich, updatable metadata that lives directly
                on chain.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-5 md:grid-cols-2"
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Rich on chain metadata
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  ORC 20 tokens can expose descriptions, logos, links, and social handles
                  directly from the chain. Applications can show up to date information
                  without relying only on off chain registries.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  As projects evolve, issuers can refresh metadata so holders and users
                  always see the latest story around the asset.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Built for ecosystem tokens
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  ORC 20 is designed for tokens that live close to compute. Reward
                  tokens, governance assets, and application level tokens can all use the
                  same standard while benefiting from OpenGPU throughput.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  This helps explorers, wallets, and dashboards present a consistent view
                  of the ecosystem, with richer context than a basic symbol and name.
                </p>
              </div>
            </motion.div>
          </section>

          {/* LIGHT CTA */}
          <section className="space-y-4 mb-10 md:mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-semibold">
                  Explore the OpenGPU blockchain
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  View live network activity on the explorer, or connect your wallet to
                  start building and interacting with the ecosystem.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://ogpuscan.io"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Open explorer
                </a>
                <a
                  href="https://opengpu.network/docs"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-slate-300 bg-white hover:bg-slate-100 transition"
                >
                  Read the docs
                </a>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
