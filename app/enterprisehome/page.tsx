"use client";

import React, { useState } from "react";
import Nav from "../components/Nav";

/* ===========================
      ICON SET
=========================== */
const Icon = {
  globe: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
    </svg>
  ),

  zap: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L3 14h9v8l10-12h-9V2z" />
    </svg>
  ),

  shield: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z" />
    </svg>
  ),

  check: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),

  arrow: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  ),
};

/* ===========================
      PILOT FORM
=========================== */
function PilotForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((v, k) => params.append(k, String(v)));

    await fetch(
      `https://network.us6.list-manage.com/subscribe/post-json?u=9ca8c44250832e3001ac4aaa8&id=1e9492eb62&${params}&c=?`,
      { method: "GET", mode: "no-cors" }
    );

    setIsSuccess(true);
    setTimeout(() => (window.location.href = "/pilot-confirmed"), 1800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7 relative">
      {isSuccess && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center z-50">
          {Icon.check("w-20 h-20 text-[#00E9FF] mb-4")}
          <p className="text-xl font-semibold text-[#0F172A]">Request received</p>
          <p className="text-slate-600">Redirecting…</p>
        </div>
      )}

      {/* GRID INPUTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Full Name *</label>
          <input
            name="FNAME"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
            focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Company</label>
          <input
            name="COMPANY"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
            focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
            placeholder="Company name"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Work Email *</label>
          <input
            name="EMAIL"
            type="email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
            focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Project Type</label>
          <input
            name="PROJTYPE"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
            focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
            placeholder="Inference, LLM, Agents, GenAI…"
          />
        </div>
      </div>

      {/* MORE FIELDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">GPU Demand</label>
          <input
            name="GPUS"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
            focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
            placeholder="H100, A100, 4090…"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Current Provider</label>
          <input
            name="PROVIDER"
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
            focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
            placeholder="AWS, Lambda, RunPod…"
          />
        </div>
      </div>

      {/* TEXTAREA */}
      <div>
        <label className="text-xs font-semibold text-slate-700 mb-1 block">Workload Details</label>
        <textarea
          name="MESSAGE"
          rows={5}
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
          resize-none focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
          placeholder="Model details, latency targets, scale, monthly spend, challenges…"
        />
      </div>

      <input type="hidden" name="tags" value="Pilot Lead" />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className="w-full bg-gradient-to-r from-[#00204F] to-[#00E9FF] text-white font-semibold py-4 rounded-xl shadow-lg
        hover:shadow-xl hover:shadow-[#00E9FF]/30 transition-all flex items-center justify-center gap-2 group"
      >
        {isSubmitting ? "Submitting…" : isSuccess ? "Sent — redirecting" : "Request Pilot Access"}
        {!isSubmitting && !isSuccess && (
          <span className="group-hover:translate-x-1 transition-transform">
            {Icon.arrow("w-5 h-5 text-[#00E9FF]")}
          </span>
        )}
      </button>

      <p className="text-center text-xs text-slate-500">
        Same-day engineering review • We help size your GPU requirements
      </p>
    </form>
  );
}

/* ===========================
        MAIN PAGE
=========================== */
export default function EnterprisePage() {
  const benefits = [
    {
      icon: Icon.zap,
      title: "60–80% lower cost",
      desc: "Decentralized supply beats cloud pricing.",
    },
    {
      icon: Icon.shield,
      title: "On-chain verification",
      desc: "Every execution is provable.",
    },
    {
      icon: Icon.globe,
      title: "Global routing",
      desc: "Any GPU, anywhere, instantly.",
    },
    {
      icon: Icon.zap,
      title: "Auto failover",
      desc: "Network-level reliability built-in.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#040814] text-white">
      <Nav />

      <section className="pt-40 pb-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[50%_50%] gap-16 items-start">

          {/* LEFT PANEL */}
          <div className="space-y-8">
            <p className="text-xs font-semibold tracking-[0.35em] text-[#00E9FF] uppercase">
              Enterprise Pilot Program
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Run an OpenGPU Pilot  
              <br />
              Benchmark your real workloads.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Evaluate inference, training, agent, or generative workloads on decentralized GPUs delivering
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#00E9FF] bg-clip-text text-transparent font-semibold">
                {" "}60–80 percent lower compute cost
              </span>{" "}
              with enterprise-grade reliability and routing intelligence.
            </p>

            <div className="space-y-3 text-base text-gray-300">
              <p><span className="text-white font-semibold">Real workloads only.</span> Evaluate your actual production models.</p>
              <p><span className="text-white font-semibold">Task-based billing.</span> Pay only for executed work.</p>
              <p><span className="text-white font-semibold">Global routing.</span> Route to any GPU worldwide.</p>
              <p><span className="text-white font-semibold">On-chain guarantees.</span> Verifiable execution proofs.</p>
              <p><span className="text-white font-semibold">Auto failover.</span> Redundancy across providers.</p>
            </div>

            <p className="text-xs text-gray-400">
              After submission, our engineering team responds the same day with GPU recommendations.
            </p>

            {/* BENEFITS GRID */}
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#00E9FF]/10 rounded-xl flex items-center justify-center">
                    {b.icon("w-6 h-6 text-[#00E9FF]")}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{b.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E9FF]/20 to-transparent rounded-3xl blur-3xl -z-10" />

            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
              <div className="text-center mb-8">
                <img src="/Images/OGPU-LOGO-Main-black.png" className="h-20 mx-auto mb-3" />
                <h2 className="text-3xl font-semibold text-[#0F172A]">Request your pilot</h2>
                <p className="text-sm text-slate-600">Real workloads • Same-day response</p>
              </div>

              <PilotForm />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
