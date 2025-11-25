"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function RelayPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-16 md:space-y-20">

          {/* HERO */}
          <section className="space-y-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-5"
            >

              {/* Relay logo */}
              <div className="flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-10 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
                  <img
                    src="/Images/relay.png"
                    alt="Relay Logo"
                    className="w-40 md:w-56 h-auto object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3 max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-semibold">
                  One HTTPS endpoint for decentralized GPU power
                </h1>

                <p className="text-sm md:text-base text-slate-600">
                  Relay gives you a simple interface to run AI workloads on the OpenGPU network.
                  You send a request over HTTPS. Relay finds the right GPUs, runs the job,
                  and returns the result.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <a
                  href="https://relay.opengpu.network"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition shadow-[0_14px_45px_rgba(15,23,42,0.55)]"
                >
                  Visit Relay
                </a>
                <a
                  href="/enterprisehome"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-slate-300 bg-white hover:bg-slate-100 transition"
                >
                  Run an enterprise pilot
                </a>
              </div>
            </motion.div>
          </section>

          {/* WHAT RELAY IS */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3 max-w-3xl"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">What Relay does</h2>

              <p className="text-sm md:text-base text-slate-600">
                Relay is the routing layer that sits between your application and the OpenGPU network.
                Instead of managing clusters, scheduling, and GPU provisioning, you call a single
                HTTPS endpoint. Relay takes care of provider selection, routing, retries, and
                failover in the background.
              </p>

              <p className="text-sm md:text-base text-slate-600">
                You keep your existing stack. Relay slots in as a simple API that your backends,
                agents, and internal tools can call whenever they need GPU power.
              </p>
            </motion.div>
          </section>

          {/* FIAT BILLING (NEW SECTION) */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3 max-w-3xl"
            >
              <h2 className="text-xl md:text-2xl font-semibold">Enterprise billing that works like any cloud</h2>

              <p className="text-sm md:text-base text-slate-600">
                Relay includes a full fiat billing system so teams can use decentralized GPUs the same
                way they use AWS, Google Cloud, or Azure. No tokens, no crypto wallets, no blockchain
                steps required.
              </p>

              <ul className="list-disc list-inside text-sm md:text-base text-slate-600 space-y-1">
                <li>Monthly invoices and standard payment methods</li>
                <li>Cost visibility and predictable billing</li>
                <li>No idle GPU waste — you only pay when jobs run</li>
                <li>60%–80% cheaper than centralized clouds due to zero overhead</li>
              </ul>

              <p className="text-sm md:text-base text-slate-600">
                This makes Relay drop-in compatible with procurement, finance teams, and enterprise workflows.
              </p>
            </motion.div>
          </section>

          {/* THREE PILLARS */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-semibold">How Relay is designed</h2>

              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay focuses on three things that matter in production environments.
                A simple interface, smart routing, and reliability by default.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {/* Interface */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Interface
                </p>
                <h3 className="text-base md:text-lg font-semibold">One HTTPS endpoint</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Send AI workloads through a single API. Works with any backend or framework.
                </p>
              </div>

              {/* Routing */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Routing
                </p>
                <h3 className="text-base md:text-lg font-semibold">Global GPU mesh</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Relay selects the best providers based on performance, memory, and live health.
                </p>
              </div>

              {/* Reliability */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Reliability
                </p>
                <h3 className="text-base md:text-lg font-semibold">Automatic failover</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Relay retries or re-routes automatically if a provider slows or fails.
                </p>
              </div>
            </motion.div>
          </section>

          {/* WHAT YOU CAN RUN */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-semibold">What you can run through Relay</h2>

              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay moves real AI workloads across the OpenGPU network, not benchmarks or demos.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-2"
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">LLM inference</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Low-latency inference for agents, chatbots, tools, and real products.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">Image and video generation</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Diffusion and rendering workloads managed automatically across providers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">Batch and offline jobs</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Embeddings, indexing, and long-running tasks routed efficiently.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">Agents and automation</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Relay keeps agent systems running even when providers churn.
                </p>
              </div>
            </motion.div>
          </section>

          {/* HOW RELAY WORKS */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-semibold">How Relay works in practice</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay continuously evaluates and routes jobs behind the scenes.
              </p>
            </motion.div>

            <motion.ol
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="space-y-4 text-xs md:text-sm text-slate-600 max-w-3xl list-decimal list-inside"
            >
              <li><span className="font-semibold">You send a request.</span> Relay receives model + inputs + params.</li>
              <li><span className="font-semibold">Relay evaluates the job.</span> It checks memory, type, duration.</li>
              <li><span className="font-semibold">Matched to providers.</span> Relay selects one or more GPU providers.</li>
              <li><span className="font-semibold">Execution + monitoring.</span> Relay tracks progress and timeouts.</li>
              <li><span className="font-semibold">Results returned.</span> You get output + run metadata.</li>
            </motion.ol>

            <div className="rounded-2xl bg-slate-900 text-slate-100 px-5 py-4 text-xs md:text-sm max-w-3xl">
              <p className="font-semibold mb-1">What you do not have to manage</p>
              <p className="text-slate-200/90">
                No provisioning. No schedulers. No cluster warm-up. No failover logic.
                Relay abstracts all of that away.
              </p>
            </div>
          </section>

          {/* WHO RELAY IS FOR */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-semibold">Who can use Relay</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay is designed for teams of every size and industry.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-3"
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold">AI companies</h3>
                <p className="text-xs md:text-sm text-slate-600">Scale without lock-in.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold">SaaS builders</h3>
                <p className="text-xs md:text-sm text-slate-600">Add AI features easily.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold">Enterprises</h3>
                <p className="text-xs md:text-sm text-slate-600">Run pilots + production workloads.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold">Researchers</h3>
                <p className="text-xs md:text-sm text-slate-600">On-demand experiments.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold">Agents & automation</h3>
                <p className="text-xs md:text-sm text-slate-600">Reliable GPU backend.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold">Internal tools</h3>
                <p className="text-xs md:text-sm text-slate-600">GPU power via HTTPS.</p>
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section className="space-y-4 mb-10 md:mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-semibold">
                  Ready to try Relay
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Connect your stack through a single HTTPS endpoint and scale at your own pace.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://management.opengpu.network/relay"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Visit Relay
                </a>

                <a
                  href="/enterprisehome"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-slate-300 bg-white hover:bg-slate-100 transition"
                >
                  Run an enterprise pilot
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
