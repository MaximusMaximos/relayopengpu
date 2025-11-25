"use client";

import React from "react";
import SafeInput from "../components/SafeInput";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050B18] text-white pt-32 pb-14 px-6 mt-0">

{/* CTA BANNER (Enterprise on top, Get Started underneath) */}
<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
  <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
    <div className="relative px-20 py-8 bg-gradient-to-r from-[#071426] via-[#0A2A4A] to-[#0B3C66] text-white">

      {/* Soft Glows */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-28 right-10 w-[350px] h-[350px] bg-cyan-400/30 blur-[120px]" />
        <div className="absolute -bottom-24 left-6 w-[280px] h-[280px] bg-blue-500/20 blur-[120px]" />
      </div>

      {/* MAIN CTA ROW */}
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* LEFT BLOCK */}
        <div className="max-w-xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3">
            Benchmark OGPU against any cloud.
          </h3>
          <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
            Measure inference or training workloads on distributed GPUs with instant elasticity and real-world performance.
          </p>
        </div>

        {/* RIGHT BLOCK — STACKED BUTTONS */}
        <div className="flex flex-col items-start md:items-end gap-3">

          {/* ENTERPRISE PILOT — TOP */}
          <a
            href="/enterprisehome"
            className="px-8 py-4 rounded-xl bg-white text-[#0A0F2C] font-semibold text-base md:text-lg
                       shadow-[0_6px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_10px_28px_rgba(255,255,255,0.45)]
                       transition-all w-full md:w-auto text-center"
          >
            Run an Enterprise Pilot →
          </a>

          {/* GET STARTED — UNDERNEATH */}
          <a
            href="/getstarted"
            className="px-8 py-4 rounded-xl bg-[#FFFFFF] text-[#001221] font-semibold text-base md:text-lg
                       shadow-[0_6px_20px_rgba(0,198,255,0.35)] hover:shadow-[0_10px_26px_rgba(0,198,255,0.45)]
                       transition-all w-full md:w-auto text-center"
          >
            Get Started →
          </a>

        </div>
      </div>

      {/* EMAIL SIGNUP (LEFT ALIGNED, SMALL) */}
      <div className="relative mt-6 max-w-sm">
        <div className="flex items-center bg-white/15 rounded-lg p-2 border border-white/10">
          <SafeInput
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent outline-none text-white placeholder-white/60 px-2 text-xs"
          />

          <button
            className="px-4 py-2 rounded-md bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                       font-semibold text-white hover:opacity-90 transition text-xs whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>

        <p className="text-[10px] text-white/45 mt-1">
          No spam. Updates only.
        </p>
      </div>

    </div>
  </div>
</div>


      {/* ========================================================= */}
      {/* SNOWFLAKE-STYLE GRID */}
      {/* ========================================================= */}


      <div className="max-w-7xl mx-auto mt-36 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">

        {/* COLUMN 1 — LOGO + SUMMARY */}
        <div>
          <img
            src="/Images/OGPU-LOGO-Main-final.png"
            alt="OGPU Logo"
            className="h-14 w-auto mb-4 opacity-95"
          />
          <p className="text-white/55 text-xs leading-relaxed max-w-sm">
            A global decentralized GPU network for AI inference, training,
            rendering and high-performance workloads routed across global providers.
          </p>
        </div>

        {/* COLUMN 2 — DEVELOPERS */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
            <div className="mt-4" />
            Developers
          </h4>
          <ul className="space-y-2 text-white/70 text-xs">
            <li><a href="/litepaper" className="hover:text-white transition">Litepaper</a></li>
            <li><a href="/whitepaper" className="hover:text-white transition">Whitepaper</a></li>
            <li><a href="/pitchdeck" className="hover:text-white transition">Pitch Deck</a></li>
            <li><a href="/academy" className="hover:text-white transition">Academy</a></li>
            <li><a href="/media-kit" className="hover:text-white transition">Media Kit</a></li>
          </ul>
        </div>

        {/* COLUMN 3 — PRODUCTS */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
            <div className="mt-4" />
            Products
          </h4>
          <ul className="space-y-2 text-white/70 text-xs">
            <li><a href="/client" className="hover:text-white transition">Client App</a></li>
            <li><a href="/openchat" className="hover:text-white transition">OpenChat</a></li>
            <li><a href="/faucet" className="hover:text-white transition">Faucet</a></li>
            <li><a href="/orc20" className="hover:text-white transition">ORC-20</a></li>
          </ul>
        </div>

        {/* COLUMN 4 — ECOSYSTEM */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
            <div className="mt-4" />
            Ecosystem
          </h4>
          <ul className="space-y-2 text-white/70 text-xs">
            <li><a href="/blockchain" className="hover:text-white transition">Blockchain</a></li>
            <li><a href="/token-creator" className="hover:text-white transition">Token Creator</a></li>
            <li><a href="/multisender" className="hover:text-white transition">Multisender</a></li>
            <li><a href="https://ogpuscan.io" className="hover:text-white transition">Explorer</a></li>
          </ul>
        </div>

        {/* COLUMN 5 — COMMUNITY */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
            <div className="mt-4" />
            Community
          </h4>
          <ul className="space-y-2 text-white/70 text-xs">
            <li><a href="https://t.me/OpenGPUNetwork" className="hover:text-white transition">Telegram</a></li>
            <li><a href="https://discord.gg/opengpu" className="hover:text-white transition">Discord</a></li>
            <li><a href="https://coinmarketcap.com" className="hover:text-white transition">CMC</a></li>
            <li><a href="https://www.mexc.com" className="hover:text-white transition">MEXC</a></li>
            <li><a href="https://www.gate.io" className="hover:text-white transition">Gate.io</a></li>
            <li><a href="https://certik.com" className="hover:text-white transition">Certik</a></li>
          </ul>
        </div>

      </div>

      {/* ========================================================= */}
      {/* BOTTOM BAR */}
      {/* ========================================================= */}

      <div className="max-w-7xl mx-auto mt-12 border-t border-white/10 pt-6 
                      flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/45">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img
            src="/Images/OGPU-LOGO-Main-final.png"
            className="h-9 opacity-90"
            alt="OGPU Logo"
          />
          <span>© {new Date().getFullYear()} OGPU Network. All rights reserved.</span>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap gap-5 text-white/45">
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/cookies" className="hover:text-white transition">Cookie Policy</a>
          <a href="/agreement" className="hover:text-white transition">User Agreement</a>
          <a href="/legal" className="hover:text-white transition">Legal Disclaimer</a>
          <a href="https://linkedin.com/company/opengpu" className="hover:text-white transition">LinkedIn</a>
          <a href="https://medium.com/@opengpunetwork" className="hover:text-white transition">Medium</a>
          <a href="https://youtube.com" className="hover:text-white transition">YouTube</a>
          <a href="https://instagram.com" className="hover:text-white transition">Instagram</a>
        </div>
      </div>

    </footer>
  );
}
