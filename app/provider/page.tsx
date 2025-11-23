"use client";

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProviderPipeline from "../components/ProviderPipeline";

export default function ProviderPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-20">

          {/* INTRO */}
          <section className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Providers
            </div>

            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-semibold">
                Become a provider on OpenGPU
              </h1>

              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                Anyone can join the OpenGPU global network. From hyperscale data centers to
                a single GPU at home, OpenGPU automatically routes workloads across every
                participating machine using the global routing layer.
              </p>

              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                Providers earn from running real AI workloads including inference,
                embeddings, agents, image generation, 3D, batch processing, and more.
              </p>
            </div>
          </section>

          {/* ANIMATION */}
          <section>
           <ProviderPipeline />
          </section>

          {/* HOW IT WORKS */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">How providing works</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Install the Provider Suite</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Download the OpenGPU Provider Suite and register your machine
                  with the network. Supports Windows, Mac and Linux.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Auto-routing handles everything</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  The global routing layer detects your GPU class, memory, stability,
                  and routes appropriate workloads automatically.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Earn for completed tasks</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Providers earn based on completed real workloads. No idle waste,
                  no manual bidding, and no DevOps needed.
                </p>
              </div>
            </div>
          </section>

          {/* WHO CAN PROVIDE */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Who can become a provider</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Data centers</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  High-density setups can join instantly, routing spare capacity
                  to real AI workloads.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Cloud providers</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  OpenGPU can route workloads to cloud GPUs the same way as decentralized nodes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">GPU farms</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Farms gain a higher, steady utilization rate thanks to OGPU’s automatic routing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Home and hobby rigs</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  A single GPU at home can contribute and earn. No technical knowledge needed.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Edge devices</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Compact devices and mini-servers can run lighter jobs through the routing layer.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Labs and universities</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Researchers and institutions can monetize unused GPU capacity.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-semibold">Ready to start providing</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Install the Provider Suite and start earning from real AI workloads.
                </p>
              </div>

              <a
                href="/getstarted"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Download Provider Suite
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
