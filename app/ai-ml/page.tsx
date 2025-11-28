"use client";

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AiFlowAnimation from "../components/AiFlowAnimation";


export default function AiMlPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-20">

          {/* INTRO */}
          <section className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              AI & ML
            </div>

            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-semibold">
                Run AI workloads across global GPUs
              </h1>

              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                Compute for training, inference and fine-tuning at global scale.
                Reduce costs by <span className="font-semibold">60–80 percent</span>{" "}
                using Relay or OGPU’s ORC-20 blockchain route.
              </p>
            </div>
          </section>

          {/* INDUSTRIES USING AI & ML — MOVED TO TOP */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Industries using AI & ML</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Healthcare",
                  desc: "AI improves diagnostics and accelerates drug discovery.",
                },
                {
                  title: "Finance",
                  desc: "ML powers fraud detection, risk scoring and trading.",
                },
                {
                  title: "Retail & E-commerce",
                  desc: "Personalized recommendations and smarter supply chains.",
                },
                {
                  title: "Manufacturing",
                  desc: "Predictive maintenance and computer-vision quality control.",
                },
                {
                  title: "Automotive",
                  desc: "Autonomous driving and driver-assistance systems.",
                },
                {
                  title: "Logistics & Supply Chain",
                  desc: "Route optimization and forecasting to improve throughput.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2"
                >
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          
<section className="overflow-hidden">
  {/* Desktop Animation ONLY */}
  <div className="hidden md:block">
    <AiFlowAnimation />
  </div>

  {/* Mobile: nothing shown at all */}
  <div className="block md:hidden h-0"></div>

  </section>

          

          {/* KEY BENEFITS */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Key benefits</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">60–80% savings</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Drastically lower training and inference costs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Global GPU scale</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Route workloads across thousands of GPUs instantly.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                <h3 className="text-base font-semibold">Works with your stack</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  PyTorch, TensorFlow, JAX, containers and more.
                </p>
              </div>
            </div>
          </section>

          {/* CORE WORKLOADS */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Core workloads</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Model training",
                "Inference",
                "Fine-tuning & LoRA",
                "Distributed training",
                "Embeddings",
                "Data preprocessing",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* ACCESS METHODS */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Two ways to access OGPU</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* RELAY */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
                <h3 className="text-base font-semibold">Relay (Enterprise)</h3>
                <ul className="text-xs md:text-sm text-slate-600 space-y-1">
                  <li>Pay with fiat</li>
                  <li>Contracts and invoices supported</li>
                  <li>60–80 percent cheaper than traditional cloud</li>
                  <li>Ideal for enterprise and mid-size AI teams</li>
                </ul>
              </div>

              {/* BLOCKCHAIN ROUTE */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
                <h3 className="text-base font-semibold">Blockchain route (ORC-20)</h3>
                <ul className="text-xs md:text-sm text-slate-600 space-y-1">
                  <li>Pay using ORC-20, our native OGPU token</li>
                  <li>Instant access to compute</li>
                  <li>Even cheaper than Relay</li>
                  <li>Ideal for startups, indies, devs and small AI teams</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI USE CASES */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">AI use cases</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                "LLM chatbots",
                "RAG pipelines",
                "Vision models",
                "Video AI processing",
                "Embeddings",
                "High-QPS inference APIs",
              ].map((useCase, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold">{useCase}</h3>
                </div>
              ))}
            </div>
          </section>

      

        </div>
      </main>

      <Footer />
    </>
  );
}
