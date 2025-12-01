"use client";

import React from "react";
import SafeInput from "../components/SafeInput";
import FooterSubscribe from "../components/FooterSubscribe";


export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050B18] text-white pt-32 pb-14 px-6 mt-0">

     

{/* CTA BANNER (Enterprise on top, Get Started underneath — MOBILE FIXED) */}
<div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 md:px-6">
  <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
    <div className="relative px-6 py-6 md:px-20 md:py-8 bg-gradient-to-r from-[#071426] via-[#0A2A4A] to-[#0B3C66] text-white">

      {/* Soft Glows */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-28 right-10 w-[350px] h-[350px] bg-cyan-400/30 blur-[120px]" />
        <div className="absolute -bottom-24 left-6 w-[280px] h-[280px] bg-blue-500/20 blur-[120px]" />
      </div>

      {/* MAIN CTA ROW */}
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">

        {/* LEFT BLOCK */}
        <div className="max-w-xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3">
            Benchmark OGPU against any cloud.
          </h3>
          <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
            Measure inference or training workloads on distributed GPUs with instant elasticity and real-world performance.
          </p>
        </div>

        {/* RIGHT BLOCK — BUTTONS */}
        <div className="w-full md:w-auto flex flex-col gap-3 md:items-end">

          {/* MOBILE VERSION (side-by-side, smaller, right aligned) */}
          <div className="flex md:hidden w-full justify-end gap-3">

            <a
              href="/enterprisehome"
              className="w-[48%] px-4 py-3 rounded-lg bg-white text-[#0A0F2C] 
                         font-semibold text-xs shadow-[0_6px_16px_rgba(255,255,255,0.25)]
                         text-center"
            >
              Enterprise →
            </a>

            <a
              href="/getstarted"
              className="w-[48%] px-4 py-3 rounded-lg bg-[#FFFFFF] text-[#001221] 
                         font-semibold text-xs shadow-[0_6px_16px_rgba(0,198,255,0.30)]
                         text-center"
            >
              Get Started →
            </a>

          </div>

          {/* DESKTOP VERSION (unchanged, stacked) */}
          <div className="hidden md:flex flex-col items-end gap-3">

            <a
              href="/enterprisehome"
              className="px-8 py-4 rounded-xl bg-white text-[#0A0F2C] 
                         font-semibold text-base md:text-lg shadow-[0_6px_20px_rgba(255,255,255,0.3)] 
                         hover:shadow-[0_10px_28px_rgba(255,255,255,0.45)]
                         transition-all text-center"
            >
              Run an Enterprise Pilot →
            </a>

            <a
              href="/getstarted"
              className="px-8 py-4 rounded-xl bg-[#FFFFFF] text-[#001221] 
                         font-semibold text-base md:text-lg shadow-[0_6px_20px_rgba(0,198,255,0.35)] 
                         hover:shadow-[0_10px_26px_rgba(0,198,255,0.45)]
                         transition-all text-center"
            >
              Get Started →
            </a>

          </div>

        </div>
      </div>

     <FooterSubscribe />

        <p className="text-[10px] text-white/45 mt-1">
        </p>
      </div>

    </div>
  </div>

 {/* ========================================================= */}
{/* SNOWFLAKE-STYLE GRID */}
{/* ========================================================= */}

<div className="
  max-w-7xl mx-auto mt-36 
  grid 
  grid-cols-2     /* MOBILE: Two columns (like Snowflake) */
  md:grid-cols-5  /* DESKTOP: five columns */
  gap-10 
  md:gap-16
">

{/* COLUMN 1 — LOGO + SUMMARY (Left aligned on all screens) */}
<div className="col-span-2 md:col-span-1">
  <img
    src="/Images/OGPU-LOGO-Main-final.png"
    alt="OGPU Logo"
    className="h-14 w-auto mb-4 opacity-95"
  />
  <p className="text-white/55 text-xs leading-relaxed max-w-sm text-left">
    A global decentralized GPU network for AI inference, training,
    rendering and high-performance workloads routed across global providers.
  </p>
</div>


  {/* DEVELOPERS */}
  <div>
    <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
      Developers
    </h4>
    <ul className="space-y-2 text-white/70 text-xs">
      <li><a href="https://opengpu.network/docs/litepaper.pdf" className="hover:text-white transition">Litepaper</a></li>
      <li><a href="https://opengpu.network/docs/whitepaper.pdf" className="hover:text-white transition">Whitepaper</a></li>
      <li><a href="https://opengpu.network/docs/pitch-deck.pdf" className="hover:text-white transition">Pitch Deck</a></li>
      <li><a href="https://academy.opengpu.network/" className="hover:text-white transition">Academy</a></li>
      <li><a href="https://opengpu.network/about/discover/media-kit/logo" className="hover:text-white transition">Media Kit</a></li>
    </ul>
  </div>

  {/* PRODUCTS */}
  <div>
    <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
      Products
    </h4>
    <ul className="space-y-2 text-white/70 text-xs">
      <li><a href="https://client.opengpu.network/" className="hover:text-white transition">Client App</a></li>
      <li><a href="https://chat.opengpu.network/" className="hover:text-white transition">OpenChat</a></li>
      <li><a href="https://opengpu.network/faucet" className="hover:text-white transition">Faucet</a></li>
      <li><a href="https://opengpu.network/docs/orc20" className="hover:text-white transition">ORC-20</a></li>
    </ul>
  </div>

  {/* ECOSYSTEM */}
  <div>
    <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
      Ecosystem
    </h4>
    <ul className="space-y-2 text-white/70 text-xs">
      <li><a href="/blockchain" className="hover:text-white transition">Blockchain</a></li>
      <li><a href="https://dapps.opengpu.network/" className="hover:text-white transition">Token Creator</a></li>
      <li><a href="https://dapps.opengpu.network/multisender" className="hover:text-white transition">Multisender</a></li>
      <li><a href="https://ogpuscan.io" className="hover:text-white transition">Explorer</a></li>
    </ul>
  </div>

  {/* COMMUNITY */}
  <div>
    <h4 className="font-semibold text-white mb-3 text-xs tracking-wide uppercase">
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
          <a href="https://opengpu.network/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
          <a href="https://opengpu.network/cookies-policy" className="hover:text-white transition">Cookie Policy</a>
          <a href="https://opengpu.network/user-agreement" className="hover:text-white transition">User Agreement</a>
          <a href="https://opengpu.network/docs/legal-disclaimer.pdf" className="hover:text-white transition">Legal Disclaimer</a>
          <a href="https://linkedin.com/company/opengpu" className="hover:text-white transition">LinkedIn</a>
          <a href="https://medium.com/@ogpunetwork" className="hover:text-white transition">Medium</a>
          <a href="https://www.youtube.com/@opengpunetwork" className="hover:text-white transition">YouTube</a>
          <a href="https://instagram.com/opengpunetwork" className="hover:text-white transition">Instagram</a>
        </div>

      </div>

    </footer>
  );
}
