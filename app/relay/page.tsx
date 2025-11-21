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
              {/* Relay logo in light container */}
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
                <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
                
                </div>

                <h1 className="text-3xl md:text-4xl font-semibold">
                  One HTTPS endpoint for decentralized GPU power
                </h1>

                <p className="text-sm md:text-base text-slate-600">
                  Relay gives you a simple interface to run AI workloads on the OGPU network. 
                  You send a request over HTTPS. Relay finds the right GPUs, runs the job, and returns the result.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <a
                  href="https://opengpu.network/docs"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition shadow-[0_14px_45px_rgba(15,23,42,0.55)]"
                >
                  View API Docs
                </a>
                <a
                  href="/enterprisehome"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-slate-300 bg-white hover:bg-slate-100 transition"
                >
                  Talk to the team
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
              <h2 className="text-2xl md:text-3xl font-semibold">
                What Relay does
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                Relay is the routing layer that sits between your application and the OGPU network. 
                Instead of managing clusters, scheduling, and GPU provisioning, you call a single HTTPS endpoint. 
                Relay takes care of provider selection, routing, retries, and failover in the background.
              </p>
              <p className="text-sm md:text-base text-slate-600">
                You keep your existing stack. Relay slots in as a simple API that your backends, agents, and internal tools can call 
                whenever they need GPU power.
              </p>
            </motion.div>
          </section>

          {/* THREE PILLARS: INTERFACE / ROUTING / RELIABILITY */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-semibold">
                How Relay is designed
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay focuses on three things that matter in production environments. A simple interface, smart routing, and reliability by default.
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
              {/* Interface */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Interface
                </p>
                <h3 className="text-base md:text-lg font-semibold">
                  One HTTPS endpoint
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Send AI workloads through a single, consistent API. 
                  Works with any backend, agent framework, or workflow engine that can speak HTTPS.
                </p>
              </div>

              {/* Routing */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Routing
                </p>
                <h3 className="text-base md:text-lg font-semibold">
                  Global GPU mesh
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Relay matches each job to the best available providers based on GPU class, memory, performance, location, and live network health.
                </p>
              </div>

              {/* Reliability */}
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Reliability
                </p>
                <h3 className="text-base md:text-lg font-semibold">
                  Automatic failover
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  If a provider fails or becomes slow, Relay retries or re routes the job automatically. 
                  You do not need to build your own scheduling or failover logic.
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
              <h2 className="text-xl md:text-2xl font-semibold">
                What you can run through Relay
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay is built for real workloads, not demos. It is used to move production AI jobs across the OGPU network.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-2"
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">LLM inference</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Chatbots, agents, internal tools, and customer facing apps that need low latency responses. 
                  Relay sends LLM jobs to GPUs that match your memory and performance needs, and scales horizontally as traffic grows.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">Image and video generation</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Diffusion, editing, and rendering jobs can be batched or run on demand. 
                  Relay distributes these across providers so you can handle spikes without owning a fixed cluster.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">Batch and offline jobs</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Embeddings, indexing, file processing, and evaluation runs that can be processed in the background. 
                  Ideal for back office workloads that benefit from cheap, scalable GPU power.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">Agents and automation</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Relay plugs into orchestrators, RPA, and agent frameworks so they can request GPU work on demand. 
                  The routing layer keeps requests flowing even when individual providers come and go.
                </p>
              </div>
            </motion.div>
          </section>

          {/* HOW RELAY WORKS STEP BY STEP */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-semibold">
                How Relay works in practice
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                From your point of view it is simple. Under the hood Relay is constantly matching jobs to the right providers on the network.
              </p>
            </motion.div>

            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="space-y-4 text-xs md:text-sm text-slate-600 max-w-3xl list-decimal list-inside"
            >
              <li>
                <span className="font-semibold">You send a request.</span>{" "}
                Your backend, agent, or workflow engine makes a HTTPS call to Relay with the model, inputs, and simple parameters.
              </li>
              <li>
                <span className="font-semibold">Relay evaluates the job.</span>{" "}
                It checks the type of workload, memory needs, expected duration, and any policy or routing rules you define.
              </li>
              <li>
                <span className="font-semibold">The job is matched to providers.</span>{" "}
                Relay selects one or more providers on the OGPU network and sends the job to them.
              </li>
              <li>
                <span className="font-semibold">Execution and monitoring.</span>{" "}
                The job runs on the selected GPUs. Relay monitors progress and watches for timeouts or errors.
              </li>
              <li>
                <span className="font-semibold">Results return to you.</span>{" "}
                When the job completes, Relay returns the output to your application, along with basic metadata about the run.
              </li>
            </motion.ol>

            <div className="rounded-2xl bg-slate-900 text-slate-100 px-5 py-4 text-xs md:text-sm max-w-3xl">
              <p className="font-semibold mb-1">
                What you do not have to manage
              </p>
              <p className="text-slate-200/90">
                You do not have to provision GPUs, keep clusters warm, design a scheduler, 
                or build a failover system. Relay is designed to remove that operational load so you can focus on the product.
              </p>
            </div>
          </section>

          {/* WHO RELAY IS FOR */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-semibold">
                Who can use Relay
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Relay is built for teams at different stages, from early builders to large companies.
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
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-1">
                <h3 className="text-sm md:text-base font-semibold">AI companies</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Scale inference and workloads without tying everything to a single centralized cloud provider.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-1">
                <h3 className="text-sm md:text-base font-semibold">SaaS builders</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Add AI features to your product without having to run GPU infrastructure yourself.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-1">
                <h3 className="text-sm md:text-base font-semibold">Enterprises</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Run pilots and production workloads across a global pool of GPUs with clear routing and cost controls.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-1">
                <h3 className="text-sm md:text-base font-semibold">Researchers</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Launch experiments and evaluation runs when needed, then release capacity back to the network.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-1">
                <h3 className="text-sm md:text-base font-semibold">Agents and automation</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Use Relay as the GPU backend for agent frameworks and automation platforms that need reliable AI calls.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-1">
                <h3 className="text-sm md:text-base font-semibold">Internal tools</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Connect dashboards, scripts, and back office systems to GPU power using simple HTTPS calls.
                </p>
              </div>
            </motion.div>
          </section>

          {/* LIGHT CTA AT BOTTOM */}
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
                  Ready to try Relay
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Connect your stack to OGPU through a single HTTPS endpoint. Start with a small pilot and scale up at your own pace.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://opengpu.network/docs"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Read the docs
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
