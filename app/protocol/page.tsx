"use client";

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ProtocolPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-20">

          {/* ========================= HERO ========================= */}
          <section className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              OpenGPU Protocol
            </span>

            <h1 className="text-3xl md:text-4xl font-semibold">
              Smart Contract Architecture
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              The OpenGPU Protocol consists of a set of specialized smart contracts with
              direct integration into the OGPU blockchain. These contracts manage all
              operations between clients and providers, enabling efficient, transparent
              and secure compute delegation through a task-based architecture.
            </p>
          </section>

          {/* ========================= HOW IT WORKS ========================= */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <h3 className="text-base font-semibold">Source Publication</h3>
                <p className="text-sm text-slate-600">
                  Clients publish containerized execution models (sources) that include
                  code, dependencies and execution parameters. These serve as reusable
                  definitions for future tasks submitted to the network.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <h3 className="text-base font-semibold">Provider Registration</h3>
                <p className="text-sm text-slate-600">
                  Providers scan available sources and register to those matching their
                  GPU capabilities and profitability goals. This forms specialized pools
                  for different workloads and GPU types.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <h3 className="text-base font-semibold">Task Submission</h3>
                <p className="text-sm text-slate-600">
                  Clients submit tasks referencing their published sources. Each task
                  includes execution parameters, input data and a reward paid in oGPU
                  tokens.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <h3 className="text-base font-semibold">Competitive Execution</h3>
                <p className="text-sm text-slate-600">
                  Providers compete to execute tasks and submit the first valid output.
                  This drives:
                </p>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>Optimal pricing through market dynamics</li>
                  <li>Minimal execution time</li>
                  <li>Higher quality outputs via computation consensus</li>
                </ul>
              </div>

            </div>
          </section>

          {/* ========================= MARKET EFFICIENCY ========================= */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Market Efficiency</h2>

            <p className="text-sm md:text-base text-slate-600 max-w-3xl">
              This competitive supply-and-demand model forms a self-regulated marketplace
              where high-demand tasks attract more providers, pricing adjusts
              automatically to network conditions, and providers optimize their hardware
              to maximize returns. Clients receive the best performance for their budget
              without manual scheduling.
            </p>

            <p className="text-sm md:text-base text-slate-600 max-w-3xl">
              The protocol’s native integration with the OGPU Layer-1 enables
              exceptional throughput and transparency compared to typical decentralized
              compute networks.
            </p>
          </section>

          {/* ========================= SECURITY ========================= */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Protocol Security</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Task Verification",
                  desc: "Each result undergoes cryptographic checks before acceptance."
                },
                {
                  title: "Provider Reputation",
                  desc: "Historical accuracy and reliability are tracked on-chain."
                },
                {
                  title: "Secure Containers",
                  desc: "Execution environments are isolated and hardened for safety."
                },
                {
                  title: "Consensus Mechanism",
                  desc: "For critical tasks, multiple providers validate results to ensure correctness."
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================= FUTURE DEVELOPMENT ========================= */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Future Development</h2>

            <p className="text-slate-600 text-sm md:text-base max-w-3xl">
              The OpenGPU Protocol evolves continuously with upcoming improvements such as:
            </p>

            <ul className="list-disc list-inside text-sm md:text-base text-slate-600 space-y-1 ml-1">
              <li>AI-driven protocol optimizer and agent workspace</li>
              <li>Broader support for emerging workload types</li>
              <li>Advanced analytics for provider and task insights</li>
              <li>Privacy enhancements including zero-knowledge execution proofs</li>
            </ul>

            <p className="text-sm text-slate-600 pt-2">
              Developers are welcome to contribute and help shape the next evolution of the OGPU Protocol.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
