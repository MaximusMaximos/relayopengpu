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
      className="space-y-4"
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
        window.location.href = "https://ogpu-site.vercel.app/pilot-confirmed";
      }}
    >
      {/* ROW 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" name="FNAME" placeholder="Name *" required
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400"/>
        <input type="text" name="COMPANY" placeholder="Company"
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400"/>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="email" name="EMAIL" placeholder="Work email *" required
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400"/>
        <input type="text" name="PROJTYPE" placeholder="Project type (LLM, RAG, Agents, GenAI)"
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400"/>
      </div>

      {/* ROW 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" name="GPUS" placeholder="GPU demand (A100, H100, 4090)"
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400"/>
        <input type="text" name="PROVIDER" placeholder="Current provider"
          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400"/>
      </div>

      {/* MESSAGE */}
      <textarea name="MESSAGE" placeholder="Workload, scale, timeline..."
        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm min-h-[120px] text-[#0F172A] placeholder-slate-400"/>

      <input type="hidden" name="tags" value="Pilot Lead" />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#001F4E] to-[#00C6FF] text-white py-3.5 rounded-xl text-sm font-semibold hover:opacity-90"
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
    <main className="relative w-full min-h-screen bg-[#040814] text-white">
      <Nav />

      {/* PAGE CONTENT */}
      <section className="w-full min-h-screen bg-[#040814] pt-40 pb-24 px-6 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE TEXT */}
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#00C6FF] uppercase">Enterprise Pilot</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Run an OGPU pilot.<br/>Benchmark real AI workloads.
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Test your inference, training or generative pipelines on the OGPU Network,
              a decentralized GPU infrastructure delivering
              <span className="font-semibold text-[#00C6FF]"> roughly 60–80 percent lower compute cost</span>.
            </p>

            <div className="space-y-3 text-sm md:text-base text-gray-300">
              <p><span className="font-semibold text-white">Task-based billing.</span> Pay only for work, not idle GPUs.</p>
              <p><span className="font-semibold text-white">Real production workloads.</span> Not demos.</p>
              <p><span className="font-semibold text-white">Automatic failover.</span> On-chain verification.</p>
              <p><span className="font-semibold text-white">No commitment.</span> You keep benchmark data.</p>
            </div>

            <p className="text-xs md:text-sm text-gray-400 mt-4 max-w-sm">
              After submission, our team will review your workload and reply with GPU recommendations.
            </p>
          </div>


          {/* RIGHT FORM CARD */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.45)] border border-slate-200 p-6 md:p-8">
              <div className="flex flex-col items-center mb-6">
                <img src="/Images/OGPU-LOGO-Main-black.png" className="h-20 mb-3"/>
                <h2 className="text-xl md:text-2xl font-semibold text-[#0F172A]">Request your pilot</h2>
                <p className="text-sm md:text-base text-[#4B5563] mt-1 text-center">
                  Tell us about your workload and we will review same day.
                </p>
              </div>

              {/* ⬇️ Client-only form (no hydration errors ever) */}
              <PilotForm />

            </div>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="w-full bg-[#020617] text-white/70 text-sm py-6 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="/Images/OGPU-LOGO-Main-final.png" className="h-10 opacity-90"/>
            <span>© {new Date().getFullYear()} OGPU Network</span>
          </div>
          <div className="flex gap-4">
            <a href="/" className="hover:text-white">Main Site</a>
            <a href="/#" className="hover:text-white">Privacy</a>
            <a href="/#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
