"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HowOGPUWorksPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-16 md:space-y-20">
          {/* PAGE INTRO */}
          <section className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              How OpenGPU works
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold">
                How workloads move across OpenGPU
              </h1>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                OpenGPU connects decentralized providers, OGPU datacenters, enterprise
                infrastructure, and even cloud GPUs into one routing layer. This page
                explains how that system works in practice from the moment a job arrives
                to the moment the result returns.
              </p>
            </div>

            {/* QUICK OVERVIEW CARDS */}
            <div className="grid gap-4 md:grid-cols-3 mt-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Hybrid global network
                </p>
                <p className="text-xs text-slate-600">
                  Decentralized providers, OpenGPU datacenters, enterprise nodes, and cloud
                  GPUs all treated as one pool.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Intelligent routing layer
                </p>
                <p className="text-xs text-slate-600">
                  The routing layer evaluates jobs and sends them to the best available
                  compute in real time.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm">
                <p className="font-semibold text-slate-900 mb-1">
                  Flexible client interfaces
                </p>
                <p className="text-xs text-slate-600">
                  Native protocol tools for builders plus Relay for teams that want a
                  simple HTTPS and fiat billing experience.
                </p>
              </div>
            </div>
          </section>

          {/* 1. GLOBAL HYBRID COMPUTE NETWORK */}
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
                1. A global hybrid compute network
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                OpenGPU is not tied to one kind of GPU infrastructure. It blends several
                sources of compute into a single network so workloads can move to where
                it makes the most sense on cost, speed, and reliability.
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
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Decentralized GPU providers
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Independent providers run the OpenGPU Provider Suite and connect their
                  GPUs to the network. They form a global mesh of compute with different
                  VRAM sizes, GPU classes, and geographic locations.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  These nodes are ideal for high throughput, cost efficient workloads
                  that benefit from flexible capacity.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">OpenGPU datacenters</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  OpenGPU also operates its own datacenter infrastructure. These clusters
                  provide stable, high quality GPU capacity with predictable uptime and
                  controlled environments.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  They are used for workloads that require strong reliability or tighter
                  service guarantees than typical community hardware.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Enterprise and edge providers
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Enterprises and institutions can connect their own GPU fleets or edge
                  resources into the network. These nodes may sit in private facilities,
                  campuses, or regional hubs.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  The routing layer treats them as first class citizens. They can be
                  reserved for a specific tenant or used for shared workloads under
                  clear policies.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">Cloud GPUs</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  When needed OpenGPU can also tap into centralized clouds for special GPU
                  types or to handle extreme spikes. This creates an extra safety net for
                  jobs that cannot wait.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  Cloud GPUs are used selectively, with routing policies that balance
                  cost, availability, and performance.
                </p>
              </div>
            </motion.div>
          </section>

          {/* 2. THE ROUTING LAYER */}
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
                2. The routing layer
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                The routing layer is OGPU&apos;s core intelligence. It sits between
                incoming workloads and the global GPU pool. Its job is to inspect each
                job and decide where it should run.
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
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Signals from the network
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li>VRAM and GPU class.</li>
                  <li>Performance benchmarks and utilization.</li>
                  <li>Latency and geographic location.</li>
                  <li>Reliability score and historical uptime.</li>
                  <li>Live health checks and error rates.</li>
                  <li>Queue depth and current job load.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Signals from each workload
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li>Type of workload, for example LLM, diffusion, batch processing.</li>
                  <li>Expected duration and priority level.</li>
                  <li>Memory and compute requirements.</li>
                  <li>Sensitivity to latency or jitter.</li>
                  <li>Budget and cost profile.</li>
                  <li>Any tenant, region, or compliance constraints.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-2xl bg-slate-900 text-slate-100 px-5 py-4 text-xs md:text-sm max-w-3xl"
            >
              <p className="font-semibold mb-1">
                The goal of the routing layer
              </p>
              <p className="text-slate-200/90">
                Match every job to the best available compute at that moment. That means
                enough VRAM, good performance, acceptable latency, and cost that fits
                the workload, without you having to design your own scheduler.
              </p>
            </motion.div>
          </section>

          {/* 3. CROSS INFRASTRUCTURE ROUTING */}
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
                3. Routing across any infrastructure
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Because all compute sources are abstracted into the same routing system,
                OpenGPU can move workloads across decentralized providers, OGPU datacenters,
                enterprise nodes, and cloud GPUs using the same logic.
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
                <h3 className="text-base md:text-lg font-semibold">
                  Decentralized providers and datacenters
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Cost sensitive or high throughput workloads are usually routed to the
                  decentralized mesh or OpenGPU datacenters. This keeps price down while
                  still meeting performance and reliability targets.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">
                  Enterprise and cloud overflow
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  If you have strict policies, reserved capacity, or special GPU needs,
                  jobs can be routed to enterprise nodes or to cloud GPUs. This keeps
                  critical workloads running even during demand spikes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-2xl bg-white border border-slate-200 px-5 py-4 text-xs md:text-sm max-w-3xl"
            >
              <p className="font-semibold mb-1">
                Hybrid routing for a single tenant
              </p>
              <p className="text-slate-600">
                A single company can mix all of these. Baseline traffic might run on
                OpenGPU datacenters and decentralized providers while overflow or rare
                GPU types are handled through cloud backends. The routing layer makes
                that blend work without extra architecture on your side.
              </p>
            </motion.div>
          </section>

          {/* 4. WORKLOAD EXECUTION */}
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
                4. How workloads execute
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Once the routing decision is made, the job is packaged and sent to the
                selected node or cluster. From there the process looks like a modern GPU
                workload on any high end infrastructure.
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
                <span className="font-semibold">Job packaging.</span>{" "}
                The workload is wrapped with its inputs, model reference, and execution
                parameters. This can be a container, task spec, or API based job
                description.
              </li>
              <li>
                <span className="font-semibold">Dispatch to the node.</span>{" "}
                The job is sent to the chosen provider, datacenter cluster, enterprise
                node, or cloud instance.
              </li>
              <li>
                <span className="font-semibold">Execution and logging.</span>{" "}
                The node runs the workload on its GPUs, streams logs, and reports status
                back to the routing layer.
              </li>
              <li>
                <span className="font-semibold">Health checks and failover.</span>{" "}
                If performance drops or the node fails the routing layer can re route or
                re schedule the job based on policies and checkpoints.
              </li>
              <li>
                <span className="font-semibold">Result collection.</span>{" "}
                Output data and metadata are returned to the client interface that
                submitted the job.
              </li>
            </motion.ol>
          </section>

          {/* 5. CLIENT INTERFACES: NATIVE AND RELAY */}
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
                5. How clients connect to OpenGPU
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                There are two main ways to use the OpenGPU network. Native protocol tools
                for on chain usage and Relay for teams that prefer a traditional API and
                fiat billing.
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
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Native OpenGPU and Web3 tools
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Builders who want direct protocol access can use the OpenGPU ecosystem
                  tools, management dApp, and on chain interfaces. This is ideal for
                  providers, Web3 projects, and teams that want direct interaction with
                  the network.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  Jobs are submitted with wallets and OpenGPU native primitives, with
                  rewards and usage tracked on chain.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Relay for API and fiat based usage
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Relay gives companies a single HTTPS endpoint that sends workloads
                  into the routing layer. No wallets, no direct blockchain handling, and
                  no need to think about the underlying providers.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  Usage is measured and billed in fiat just like a familiar cloud
                  service, with detailed usage reports. Because Relay is connected to
                  decentralized capacity there are no idle cluster costs and no heavy
                  centralized overhead, so many workloads see savings in the range of
                  sixty to eighty percent compared to traditional clouds.
                </p>
              </div>
            </motion.div>
          </section>

          {/* 6. RESULTS AND COST PROFILE */}
          <section className="space-y-6 mb-10 md:mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                6. Results, observability, and cost
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                No matter where the job ran, the result returns through the same
                interface you used to submit it. You get the output, basic metadata
                about the run, and a clear view of how resources were used.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="space-y-1 max-w-xl">
                <h3 className="text-base md:text-lg font-semibold">
                  The benefit of a routing first design
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Because OpenGPU starts from routing, not from owning a fixed set of
                  datacenters, it can pull in the right mix of decentralized providers,
                  OGPU infrastructure, enterprise nodes, and cloud GPUs. That removes
                  idle capacity and heavy overheads which is what enables strong cost
                  savings while keeping performance and reliability front and center.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-xs md:text-sm text-slate-600">
                <p>• Clear usage and billing through Relay for enterprises.</p>
                <p>• On chain transparency for native protocol users.</p>
                <p>• One network that can adapt as your workloads grow.</p>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
