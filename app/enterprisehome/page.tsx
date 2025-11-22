"use client";

// app/enterprisehome/page.tsx
import React, { useState } from "react";
import Nav from "../components/Nav";


export default function EnterprisePage() {
  // NAV STATE (same pattern as homepage)
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  let hoverTimeout: ReturnType<typeof setTimeout> | null = null;

  const open = (menu: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenMenu(menu);
  };

  const close = () => {
    hoverTimeout = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#040814] text-white">

<Nav />



      {/* PAGE CONTENT */}
      <section className="w-full min-h-screen bg-[#040814] pt-40 pb-24 px-6 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
          {/* LEFT: COPY */}
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#00C6FF] uppercase">
              Enterprise Pilot
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Run an OGPU pilot.
              <br />
              Benchmark real AI workloads.
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Test your inference, training or generative pipelines on the OGPU Network,
              a decentralized GPU infrastructure delivering{" "}
              <span className="font-semibold text-[#00C6FF]">
                roughly 60–80% cost reduction
              </span>{" "}
              compared to centralized clouds.
            </p>

            <div className="space-y-3 text-sm md:text-base text-gray-300">
              <div className="flex gap-3 items-start">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#00C6FF] shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
                <p>
                  <span className="font-semibold text-white">Task-based billing.</span>{" "}
                  Pay only for executed work, not idle GPUs.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#00C6FF] shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
                <p>
                  <span className="font-semibold text-white">Real workloads, not demos.</span>{" "}
                  Run your production-style inference, training, RAG or agents.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#00C6FF] shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
                <p>
                  <span className="font-semibold text-white">Enterprise-grade reliability.</span>{" "}
                  Decentralized routing with automatic failover and on-chain verification.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#00E9FF] shadow-[0_0_12px_rgba(0,200,255,0.8)]" />
                <p>
                  <span className="font-semibold text-white">No obligation pilot.</span>{" "}
                  Free to run, zero commitment. You keep the benchmark data.
                </p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-400 mt-4 max-w-sm">
              Once submitted, the OGPU team will review your workload and respond with next
              steps, recommended GPU profiles and a pilot start window.
            </p>
          </div>

          {/* RIGHT: MAILCHIMP FORM CARD */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.45)] border border-slate-200 p-6 md:p-8">
              <div className="flex flex-col items-center mb-6">
                <img
                  src="/Images/OGPU-LOGO-Main-black.png"
                  alt="OGPU Logo"
                  className="h-20 w-auto mb-3"
                />
                <h2 className="text-xl md:text-2xl font-semibold text-[#0F172A]">
                  Request your pilot
                </h2>
                <p className="text-sm md:text-base text-[#4B5563] mt-1 text-center">
                  Tell us about your workload and we&apos;ll help you benchmark it on OGPU.
                </p>
              </div>

              <form
                action="https://network.us6.list-manage.com/subscribe/post?u=9ca8c44250832e3001ac4aaa8&id=1e9492eb62&f_id=004c54e5f0&redirect=https%3A%2F%2Fopengpu.network%2Fpilot-confirmed"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="space-y-4"
                noValidate
              >
                {/* ROW 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="FNAME"
                    placeholder="Name *"
                    required
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="COMPANY"
                    placeholder="Company"
                  />
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Work email *"
                    required
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="PROJTYPE"
                    placeholder="Project type (LLM, RAG, agents, gen AI...)"
                  />
                </div>

                {/* ROW 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="GPUS"
                    placeholder="GPU demand (A100, H100, 4090...)"
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF]"
                    name="PROVIDER"
                    placeholder="Current provider (AWS, Azure, etc.)"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <textarea
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C6FF] focus:border-[#00C6FF] min-h-[120px]"
                    name="MESSAGE"
                    placeholder="Tell us about your workload, goals, or timeline..."
                    aria-label="Message"
                  />
                </div>

                {/* TAGS HIDDEN FIELD */}
                <input type="hidden" name="tags" value="Pilot Lead" />

                {/* HONEYPOT (BOT FIELD) */}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input
                    type="text"
                    name="b_9ca8c44250832e3001ac4aaa8_1e9492eb62"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="w-full mt-2 bg-gradient-to-r from-[#001F4E] to-[#00C6FF] text-white py-3.5 rounded-xl text-sm md:text-base font-semibold border-none cursor-pointer transition-opacity duration-200 hover:opacity-90"
                >
                  Submit pilot request
                </button>

                {/* RESPONSE PLACEHOLDERS (Mailchimp) */}
                <div id="mce-responses" className="clear text-xs text-red-600 mt-2 space-y-1">
                  <div className="response" id="mce-error-response" style={{ display: "none" }} />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer className="w-full bg-[#020617] text-white/70 text-sm py-6 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/Images/OGPU-LOGO-Main-final.png"
              alt="OGPU Logo"
              className="h-10 w-auto opacity-90"
            />
            <span>© {new Date().getFullYear()} OGPU Network. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <a href="/" className="hover:text-white transition">
              Main site
            </a>
            <a href="/#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="/#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
