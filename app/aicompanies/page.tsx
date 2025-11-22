"use client";

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AICompaniesPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-16">

          {/* PAGE INTRO */}
          <section className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              AI companies
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold">AI companies</h1>

            <p className="text-sm md:text-base text-slate-600">
              Modern AI companies need scalable GPU power without the cost, limits, and complexity of centralized clouds.
              OGPU provides a global network of providers that lets teams scale inference, generation, and automation
              without running their own GPU infrastructure.
            </p>
          </section>

          {/* FEATURE GRID */}
          <section className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {/* 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Scale instantly</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Access GPUs on demand across a global provider mesh. Grow capacity during traffic spikes without reserving clusters.
                </p>
              </div>

              {/* 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Reduce costs</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Up to 60 to 80 percent cheaper than centralized clouds thanks to decentralized providers and no idle GPU waste.
                </p>
              </div>

              {/* 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Run any workload</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  LLM inference, embeddings, agents, generative media, and batch processing all run through the same routing layer.
                </p>
              </div>

              {/* 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Reliable by design</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Automatic retries, failover, and real time health checks ensure jobs continue even when individual providers drop.
                </p>
              </div>

              {/* 5 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Simple integration</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Connect with HTTPS APIs like Relay or integrate directly with OGPU workflow tools. No DevOps or GPU management needed.
                </p>
              </div>

              {/* 6 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Enterprise ready</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Request routing, usage tracking, cost controls, audit logs, and full visibility through the management dashboard.
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
