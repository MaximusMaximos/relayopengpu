"use client";

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AIWorkloadsPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* ADDED pb-40 HERE */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-40 space-y-16 md:space-y-20">

          {/* PAGE INTRO */}
          <section className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              AI workloads
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold">
                AI workloads on OpenGPU
              </h1>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                OpenGPU routes real workloads across a global pool of providers. This page
                explains the main workload categories that run on the network and what
                they require at the GPU level.
              </p>
            </div>

            {/* QUICK OVERVIEW CARDS */}
            <div className="grid gap-4 md:grid-cols-4 mt-4">
              {[
                {
                  label: "LLM inference",
                  href: "#llm-inference",
                  body: "Low latency token generation at scale.",
                },
                {
                  label: "Training and fine tuning",
                  href: "#training-fine-tuning",
                  body: "Long running, high memory jobs.",
                },
                {
                  label: "Generative media and 3D",
                  href: "#generative-media",
                  body: "Images, video, audio and 3D pipelines.",
                },
                {
                  label: "Simulation and research",
                  href: "#simulation-research",
                  body: "RL, search and scientific workloads.",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm hover:border-slate-300 hover:shadow-sm transition"
                >
                  <p className="font-semibold text-slate-900 mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-600">{item.body}</p>
                </a>
              ))}
            </div>
          </section>

          {/* LLM INFERENCE */}
          <section id="llm-inference" className="space-y-5 scroll-mt-28">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                LLM inference
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                LLM inference is the process of using a trained large language model to
                turn a new input prompt into an output, for example answers, summaries,
                code, or tool calls. Training has already happened at this point. Inference
                is the application phase where the model uses what it has learned.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* How it works */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  How LLM inference works
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Most modern LLMs use a transformer architecture. Inference usually
                  happens in two phases.
                </p>
                <ul className="space-y-3 text-xs md:text-sm text-slate-600">
                  <li>
                    <span className="font-semibold">1. Prefill phase.</span>{" "}
                    The user prompt is tokenized and embedded. The model processes all
                    input tokens in parallel and builds the key and value cache that
                    represents the context. This phase is compute bound. Performance is
                    mostly limited by raw matrix multiplication throughput on the GPU.
                    A key metric here is time to first token, which is the delay before
                    the model starts answering.
                  </li>
                  <li>
                    <span className="font-semibold">2. Decode phase.</span>{" "}
                    Once the first token is produced, the model switches to an
                    autoregressive loop. It generates one new token at a time and reuses
                    the existing key and value cache so it only needs to process the new
                    token through the layers. This phase is more memory bound because it
                    constantly reads and writes the growing cache in GPU memory. The key
                    metric here is time per output token.
                  </li>
                </ul>
              </div>

              {/* Why optimization matters */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Why optimization matters
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  LLM inference is expensive. It needs large amounts of GPU memory and
                  steady compute. Optimizing this stage directly affects user experience
                  and cost.
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li>
                    <span className="font-semibold">Latency.</span>{" "}
                    Lower time to first token and lower inter token delay make chat
                    interfaces feel responsive.
                  </li>
                  <li>
                    <span className="font-semibold">Throughput.</span>{" "}
                    Higher throughput lets a single cluster serve many users and agents.
                  </li>
                  <li>
                    <span className="font-semibold">Cost.</span>{" "}
                    Better utilization means fewer idle GPUs and lower cost per token.
                  </li>
                </ul>

                <p className="text-xs md:text-sm text-slate-600">
                  Techniques include quantization, batching, cache-efficient layouts, and
                  speculative decoding using a smaller draft model.
                </p>

                <div className="rounded-2xl bg-slate-900 text-slate-100 px-4 py-3 text-xs md:text-sm">
                  <p className="font-semibold mb-1">How OpenGPU supports LLM inference</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-200/90">
                    <li>Route inference jobs to GPUs matching memory and speed needs.</li>
                    <li>Scale horizontally during traffic spikes.</li>
                    <li>Keep costs predictable by placing jobs on efficient nodes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* TRAINING AND FINE TUNING */}
          <section id="training-fine-tuning" className="space-y-5 scroll-mt-28">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Training and fine tuning
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Training and fine tuning are the phases where models actually learn.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Types */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Types of training workloads
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li>
                    <span className="font-semibold">Full pre training.</span>{" "}
                    Training from scratch.
                  </li>
                  <li>
                    <span className="font-semibold">Fine tuning.</span>{" "}
                    Adapting an existing model.
                  </li>
                  <li>
                    <span className="font-semibold">Continual training.</span>{" "}
                    Periodic updates.
                  </li>
                </ul>

                <p className="text-xs md:text-sm text-slate-600">
                  These jobs are long running and require checkpointing and stability.
                </p>
              </div>

              {/* Resource */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Resource profile and challenges
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li>
                    <span className="font-semibold">GPU memory.</span> Huge VRAM demands.
                  </li>
                  <li>
                    <span className="font-semibold">Distributed training.</span> Needs fast interconnects.
                  </li>
                  <li>
                    <span className="font-semibold">I/O and storage.</span> Constant data streaming.
                  </li>
                  <li>
                    <span className="font-semibold">Reliability.</span> Must survive interruptions.
                  </li>
                </ul>

                <div className="rounded-2xl bg-slate-900 text-slate-100 px-4 py-3 text-xs md:text-sm">
                  <p className="font-semibold mb-1">
                    How OpenGPU supports training and fine tuning
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-200/90">
                    <li>Match long jobs to stable providers.</li>
                    <li>Group GPUs for distributed runs.</li>
                    <li>Use scheduling policies that minimize churn.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* GENERATIVE MEDIA AND 3D */}
          <section id="generative-media" className="space-y-5 scroll-mt-28">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Generative media and 3D
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Generative media workloads create new visual, audio or 3D content.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Types */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Types of generative media workloads
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li><span className="font-semibold">Image generation.</span></li>
                  <li><span className="font-semibold">Video generation and editing.</span></li>
                  <li><span className="font-semibold">Audio and speech.</span></li>
                  <li><span className="font-semibold">3D and scene generation.</span></li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Resource patterns and routing
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  These jobs vary from bursty interactive tasks to heavy batch runs.
                </p>

                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li><span className="font-semibold">Throughput.</span> Needed for batch runs.</li>
                  <li><span className="font-semibold">Latency.</span> Key for interactive tools.</li>
                  <li><span className="font-semibold">Memory and storage.</span> Heavy assets.</li>
                </ul>

                <div className="rounded-2xl bg-slate-900 text-slate-100 px-4 py-3 text-xs md:text-sm">
                  <p className="font-semibold mb-1">
                    How OpenGPU supports generative media and 3D
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-200/90">
                    <li>Route bursty workloads across providers.</li>
                    <li>Place latency-sensitive jobs on fast nodes.</li>
                    <li>Scale horizontally without pipeline redesign.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SIMULATION AND RESEARCH */}
          <section id="simulation-research" className="space-y-5 scroll-mt-28">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Simulation and research
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Simulation and research workloads include reinforcement learning, scientific simulations and large evaluation sweeps.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Types */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Types of simulation and research workloads
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li><span className="font-semibold">Reinforcement learning.</span></li>
                  <li><span className="font-semibold">Scientific simulations.</span></li>
                  <li><span className="font-semibold">Search and evaluation.</span></li>
                </ul>
              </div>

              {/* Scaling */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold">
                  Scaling experiments with OpenGPU
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                  <li><span className="font-semibold">Horizontal scale.</span></li>
                  <li><span className="font-semibold">Cost control.</span></li>
                  <li><span className="font-semibold">Fault tolerance.</span></li>
                </ul>

                <div className="rounded-2xl bg-slate-900 text-slate-100 px-4 py-3 text-xs md:text-sm">
                  <p className="font-semibold mb-1">
                    How OpenGPU supports simulation and research
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-200/90">
                    <li>Launch many small jobs instead of giant clusters.</li>
                    <li>Scale capacity up or down on demand.</li>
                    <li>Automatically recycle idle GPUs into new tasks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
