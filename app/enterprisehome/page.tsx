"use client";

import React, { useState } from "react";
import Nav from "../components/Nav";

/* ===========================
      ICON SET
=========================== */
const Icon = {
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
      ENTERPRISE FORM
=========================== */
function EnterpriseForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((v, k) => params.append(k, String(v)));

    /* CRITICAL MAILCHIMP ENDPOINT - DO NOT CHANGE */
    const url =
      "https://network.us6.list-manage.com/subscribe/post-json?u=9ca8c44250832e3001ac4aaa8&id=1e9492eb62&" +
      params.toString() +
      "&c=?";

    await fetch(url, { method: "GET", mode: "no-cors" });

    setIsSuccess(true);
    setTimeout(() => (window.location.href = "/enterprise-confirmed"), 1800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7 relative">

      {/* SUCCESS OVERLAY */}
      {isSuccess && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center z-50">
          {Icon.check("w-20 h-20 text-[#00E9FF] mb-4")}
          <p className="text-xl font-semibold text-[#0F172A]">Request received</p>
          <p className="text-slate-600">Redirecting...</p>
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
            placeholder="Your name"
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
                       focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Company</label>
          <input
            name="COMPANY"
            disabled={isSubmitting}
            placeholder="Company name"
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
                       focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Work Email *</label>
          <input
            name="EMAIL"
            type="email"
            required
            disabled={isSubmitting}
            placeholder="you@company.com"
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
                       focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Project Type</label>
          <input
            name="PROJTYPE"
            disabled={isSubmitting}
            placeholder="Inference, agents, rendering, GenAI..."
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
                       focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
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
            placeholder="H100, A100, 4090..."
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
                       focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 block">Current Provider</label>
          <input
            name="PROVIDER"
            disabled={isSubmitting}
            placeholder="AWS, Lambda, RunPod..."
            className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
                       focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
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
          placeholder="Model size, latency targets, scale, monthly spend, challenges..."
          className="w-full px-4 py-3 bg-gray-50 border border-slate-300 rounded-xl text-sm text-[#0F172A]
                     resize-none focus:border-[#00E9FF] focus:ring-4 focus:ring-[#00E9FF]/10 transition"
        />
      </div>

      {/* TAG UPDATE */}
      <input type="hidden" name="tags" value="Enterprise Lead" />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className="w-full bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] text-white font-semibold py-4 rounded-xl shadow-lg
                   hover:shadow-xl hover:shadow-[#00C6FF]/30 transition-all flex items-center justify-center gap-2 group"
      >
        {isSubmitting ? "Submitting..." : isSuccess ? "Sent redirecting" : "Request Enterprise Access"}
        {!isSubmitting && !isSuccess && (
          <span className="group-hover:translate-x-1 transition-transform">
            {Icon.arrow("w-5 h-5 text-white")}
          </span>
        )}
      </button>

      <p className="text-center text-xs text-slate-500">
        Same day engineering review • Enterprise SLAs and invoicing available
      </p>
    </form>
  );
}

/* ===========================
        MAIN PAGE
=========================== */
export default function EnterpriseAccessPage() {
  return (
    <main className="w-full min-h-screen bg-[#040814] text-white">
      <Nav />

      <section className="pt-36 pb-28 px-6">
        <div className="max-w-5xl mx-auto">

          {/* TAGLINE */}
          <p className="text-xs font-semibold tracking-[0.35em] text-[#00E9FF] uppercase mb-4 text-center">
            OpenGPU Enterprise
          </p>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-center">
            Request Enterprise Access
          </h1>

          {/* SUBTEXT */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto text-center mt-4">
            Run production workloads including 70 to 100B inference, rendering, and containerized jobs on 
            the global GPU routing layer with encrypted execution and up to 
            <span className="text-white font-medium"> 80 percent lower GPU spend.</span>
          </p>

          {/* FORM PANEL */}
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E9FF]/20 to-transparent rounded-3xl blur-3xl -z-10" />

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
                <div className="text-center mb-8">
                  <img src="/Images/OGPU-LOGO-Main-black.png" className="h-20 mx-auto mb-3" />
                  <h2 className="text-2xl font-semibold text-[#0F172A]">Enterprise Contact Form</h2>
                  <p className="text-sm text-slate-600">Same day review • SLA ready onboarding</p>
                </div>

                <EnterpriseForm />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
