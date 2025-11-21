"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0A0F2C] text-white pt-32 pb-14 px-6 mt-0">

      {/* OVERLAPPING CTA BANNER */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">
        <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
          <div className="relative px-10 py-12 bg-gradient-to-r from-[#071426] via-[#0A2A4A] to-[#0B3C66] text-white">

            {/* Soft Glows */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute -top-28 right-10 w-[350px] h-[350px] bg-cyan-400/30 blur-[120px]" />
              <div className="absolute -bottom-24 left-6 w-[280px] h-[280px] bg-blue-500/20 blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">

              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3">
                  Benchmark OGPU against any cloud.
                </h3>
                <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
                  Measure inference or training workloads on distributed GPUs with instant elasticity and real-world performance.
                </p>
              </div>

              <a
                href="/enterprisehome"
                className="px-8 py-4 rounded-xl bg-white text-[#0A0F2C] font-semibold text-base md:text-lg shadow-[0_6px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_10px_28px_rgba(255,255,255,0.45)] transition-all"
              >
                Run an Enterprise Pilot →
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto mt-36 grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-16">

        {/* COLUMN 1 */}
        <div>
          <img
            src="/Images/OGPU-LOGO-Main-final.png"
            alt="OGPU Logo"
            className="h-16 w-auto mb-5 opacity-95"
          />
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            A global decentralized GPU network built for inference, training and real-time routing across providers.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Platform</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/" className="hover:text-white transition">Overview</a></li>
            <li><a href="/#how-ogpu-works" className="hover:text-white transition">How OGPU Works</a></li>
            <li><a href="/#relay" className="hover:text-white transition">Relay Gateway</a></li>
            <li><a href="/#workloads" className="hover:text-white transition">Workloads</a></li>
            <li><a href="/#blockchain" className="hover:text-white transition">Blockchain</a></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Ecosystem</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/enterprisehome" className="hover:text-white transition">Enterprise Pilot</a></li>
            <li><a href="/getstarted" className="hover:text-white transition">GPU Providers</a></li>
            <li><a href="https://ogpuscan.io" className="hover:text-white transition">Live Stats</a></li>
            <li><a href="https://github.com/OpenGPU-Network" className="hover:text-white transition">GitHub</a></li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Company</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="https://opengpu.network/about" className="hover:text-white transition">About</a></li>
            <li><a href="https://opengpu.network/team" className="hover:text-white transition">Team</a></li>
            <li><a href="https://opengpu.network/press" className="hover:text-white transition">Press</a></li>
            <li><a href="mailto:hello@opengpu.network" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">

        <div className="flex items-center gap-3">
          <img
            src="/Images/OGPU-LOGO-Main-final.png"
            className="h-12 opacity-90"
            alt="OGPU Logo"
          />
          <span>© {new Date().getFullYear()} OGPU Network. All rights reserved.</span>
        </div>

        <div className="flex gap-6 text-white/60">
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Accessibility</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
        </div>

      </div>

    </footer>
  );
}
