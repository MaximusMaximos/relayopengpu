"use client";

import { useEffect } from "react";

export default function PilotConfirmed() {

  // Auto redirect → homepage after 10s
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#020616] flex flex-col items-center justify-center px-6 py-20 text-white">

      {/* OGPU LOGO */}
      <img
        src="/Images/OGPU-LOGO-Main-final.png"
        alt="OGPU"
        className="h-14 w-auto mb-10 opacity-95"
      />

      {/* CARD */}
      <div className="max-w-xl w-full p-10 md:p-14 text-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm shadow-[0_0_40px_rgba(0,200,255,0.15)] animate-[fadeUp_0.55s_ease]">

        {/* Success Icon */}
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-[#00C8FF]/20 flex items-center justify-center animate-[popIn_0.4s_ease]">
          <span className="text-[#00C8FF] text-3xl font-bold">✓</span>
        </div>

        <h1 className="text-3xl font-semibold mb-3">
          Pilot Request Received
        </h1>

        <p className="text-gray-300 leading-relaxed text-base mb-8">
          Thank you — your details are now with the OGPU engineering team.<br />
          Expect workload review + onboarding instructions within{" "}
          <span className="text-white font-semibold">24–48 hours.</span>
        </p>

        {/* MAIN CTA */}
        <button
          onClick={() => window.location.href = "/"}
          className="w-full mb-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition"
        >
          Return to Homepage →
        </button>

        {/* TELEGRAM */}
        <button
          onClick={() => window.open("https://t.me/opengpuportal")}
          className="w-full mb-3 px-6 py-3 rounded-xl border border-[#00C8FF]/50 text-[#00C8FF] font-semibold hover:bg-[#00C8FF]/10 transition"
        >
          Join OGPU Telegram
        </button>

        {/* X LINK */}
        <button
          onClick={() => window.open("https://x.com/OGPU_Network")}
          className="w-full px-6 py-3 rounded-xl border border-[#00C8FF]/50 text-[#00C8FF] font-semibold hover:bg-[#00C8FF]/10 transition"
        >
          Follow us on X
        </button>

        {/* NEXT STEPS BOX */}
        <div className="mt-10 text-left border border-white/10 bg-white/5 rounded-xl p-6">
          <p className="text-[11px] tracking-[0.25em] text-[#00C8FF] mb-4 font-semibold">
            WHAT HAPPENS NEXT
          </p>

          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex gap-3 items-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#00C8FF]" />
              We assess your workload scale + memory profile
            </div>
            <div className="flex gap-3 items-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#00C8FF]" />
              We route benchmarks to optimal regions on-network
            </div>
            <div className="flex gap-3 items-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#00C8FF]" />
              You receive pricing output + pilot activation window
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp { from{opacity:0; transform:translateY(10px);} to{opacity:1; transform:translateY(0);} }
        @keyframes popIn { 0%{scale:0.6; opacity:0;} 100%{scale:1; opacity:1;} }
      `}</style>

      {/* Redirect message */}
      <p className="text-xs text-gray-400 mt-4">Redirecting to homepage in 10 seconds…</p>

    </div>
  );
}
