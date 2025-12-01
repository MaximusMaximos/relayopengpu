"use client";

import React from "react";
import Nav from "../components/Nav";

/* ===========================
   CLIENT-ONLY FORM COMPONENT
=========================== */
function PilotForm() {
  return (
    <form
      id="ogpu-pilot-form"
      className="space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const params = new URLSearchParams();
        data.forEach((v, k) => params.append(k, String(v)));

        const url =
          "https://network.us6.list-manage.com/subscribe/post-json?u=9ca8c44250832e3001ac4aaa8&id=1e9492eb62&" +
          params.toString() +
          "&c=?";

        await fetch(url, { method: "GET", mode: "no-cors" });

        window.location.href = "/pilot-confirmed";
      }}
    >
      {/* INPUT GROUP 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-600">Name *</label>
          <input
            name="FNAME"
            required
            className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#0F172A] outline-none focus:border-[#00C6FF]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-xs text-slate-600">Company</label>
          <input
            name="COMPANY"
            className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#0F172A] outline-none focus:border-[#00C6FF]"
            placeholder="Company name"
          />
        </div>
      </div>

      {/* INPUT GROUP 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-600">Work Email *</label>
          <input
            name="EMAIL"
            type="email"
            required
            className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#0F172A] outline-none focus:border-[#00C6FF]"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="text-xs text-slate-600">Project Type</label>
          <input
            name="PROJTYPE"
            className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#0F172A] outline-none focus:border-[#00C6FF]"
            placeholder="LLM, Agents, GenAI..."
          />
        </div>
      </div>

      {/* INPUT GROUP 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-600">GPU Demand</label>
          <input
            name="GPUS"
            className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#0F172A] outline-none focus:border-[#00C6FF]"
            placeholder="A100, H100, 4090..."
          />
        </div>

        <div>
          <label className="text-xs text-slate-600">Current Provider</label>
          <input
            name="PROVIDER"
            className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#0F172A] outline-none focus:border-[#00C6FF]"
            placeholder="AWS, RunPod, Lambda..."
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-xs text-slate-600">Workload Details</label>
        <textarea
          name="MESSAGE"
          className="w-full min-h-[120px] px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#0F172A] outline-none focus:border-[#00C6FF]"
          placeholder="Describe your workload, scale, model, timeline..."
        />
      </div>

      <input type="hidden" name="tags" value="Pilot Lead" />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#001F4E] to-[#00C6FF] text-white py-3.5 rounded-xl text-sm font-semibold shadow-lg hover:opacity-90"
      >
        Submit Pilot Request
      </button>
    </form>
  );
}



/* ===========================
         MAIN PAGE
=========================== */
export default function EnterprisePage() {
  return (
    <main className="w-full min-h-screen bg-[#040814] text-white">
      <Nav />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-start">

          {/* TEXT PANEL */}
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#00C6FF] uppercase">
              Enterprise Pilot
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Run an OpenGPU pilot.  
              Benchmark real AI workloads.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              Evaluate inference, training, or generative workloads on decentralized GPUs delivering
              <span className="text-[#00C6FF] font-semibold"> 60 to 80 percent lower compute cost </span>
              with enterprise-grade performance.
            </p>

            <div className="space-y-3 text-base text-gray-300">
              <p><span className="text-white font-semibold">Task-based billing.</span> Only pay for executed work.</p>
              <p><span className="text-white font-semibold">Real workloads.</span> No demos or toy tasks.</p>
              <p><span className="text-white font-semibold">Auto failover.</span> Network-level reliability.</p>
              <p><span className="text-white font-semibold">On-chain verification.</span> Transparent execution.</p>
            </div>

            <p className="text-xs text-gray-400">
              After submission, our team replies same day with GPU recommendations.
            </p>
          </div>

          {/* FORM CARD */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-[0_18px_50px_rgba(0,0,0,0.5)] border border-slate-200">
              <div className="text-center mb-6">
                <img src="/Images/OGPU-LOGO-Main-black.png" className="h-20 mx-auto mb-3" />
                <h2 className="text-2xl font-semibold text-[#0F172A]">Request your pilot</h2>
                <p className="text-sm text-slate-600">We review every submission same day.</p>
              </div>

              <PilotForm />
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] border-t border-white/10 text-white/70 text-sm py-6 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src="/Images/OGPU-LOGO-Main-final.png" className="h-10 opacity-90" />
            © {new Date().getFullYear()} OpenGPU Network
          </div>
          <div className="flex gap-4">
            <a href="/" className="hover:text-white">Main Site</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
