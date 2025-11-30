"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BuyHero() {

  // PARALLAX
  const [parallax, setParallax] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setParallax(window.scrollY * 0.02);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIX: Generate random dust positions ONCE
  const dust = React.useMemo(() => {
    return [...Array(10)].map(() => ({
      top: Math.random() * 90,
      left: Math.random() * 90,
      duration: 5 + Math.random() * 6
    }));
  }, []);

  return (
<section className="relative pt-28 pb-28 bg-gradient-to-b from-[#020617] via-[#020B1A] to-[#020617] overflow-visible font-sans">

      {/* Soft glows */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-[#0B84FF] blur-[110px]" />
        <div className="absolute top-10 right-[-40px] h-72 w-72 rounded-full bg-[#00C6FF] blur-[110px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6 relative z-40 pt-4">

            {/* LABEL */}
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Investor Access
            </p>

            {/* TITLE + SUBTEXT */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                Invest in OGPU.{" "}
                <span className="bg-gradient-to-r from-[#0B84FF] to-[#00C6FF] bg-clip-text text-transparent">
                  Start in minutes.
                </span>
              </h1>

              <p className="text-sm md:text-base text-slate-200 max-w-xl">
                OGPU is the token that powers a global network of GPUs running real AI workloads. 
                Choose the exchange or method you prefer and get started quickly.
              </p>
            </div>

            {/* HERO BUTTONS */}
            <div className="flex flex-wrap gap-3 pt-2">

              {/* MEXC */}
              <a
                href="https://www.mexc.com/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs md:text-sm font-medium 
                bg-gradient-to-r from-[#0B84FF] to-[#00C6FF] shadow-[0_18px_40px_rgba(8,47,73,0.65)]
                hover:translate-y-0.5 hover:shadow-[0_24px_55px_rgba(8,47,73,0.85)] transition text-white">
                Buy on MEXC
              </a>

              {/* UNISWAP */}
              <a
                href="https://app.uniswap.org/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs md:text-sm font-medium 
                border border-slate-600/80 bg-slate-900/40 hover:bg-slate-900/70 shadow-[0_10px_30px_rgba(15,23,42,0.6)] transition text-white/90">
                Buy on Uniswap
              </a>

              {/* BRIDGEX */}
              <a
                href="https://chainchangers.app/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs md:text-sm font-medium 
                border border-cyan-400/60 bg-cyan-500/5 hover:bg-cyan-500/15 shadow-[0_10px_30px_rgba(8,145,178,0.5)] transition text-white/90">
                Bridge with BridgeX
              </a>

              {/* VIEW CHAIN */}
              <a
                href="https://opengpu.network/blockchain"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs md:text-sm font-medium 
                border border-slate-600/80 bg-slate-900/40 hover:bg-slate-900/70 transition text-white/90">
                Explore OGPU Chain
              </a>

            </div>

            {/* SUBGUIDE */}
            <p className="text-[11px] md:text-xs text-slate-300 pt-3 max-w-md">
              After buying OGPU, you can join the network as a provider or use tokens 
              to run AI tasks via the{" "}
              <a href="/getstarted" className="underline decoration-slate-500 hover:text-white">
                Get Started
              </a>{" "}
              page.
            </p>

          </div>

          {/* RIGHT SIDE (unchanged) */}
          <div className="relative h-[260px] md:h-[300px] mt-20">

            {/* CARD ABOVE ORBIT */}
            <div className="absolute inset-0 z-[40] translate-y-60 rounded-3xl bg-slate-900/60 backdrop-blur-xl 
              border border-slate-700/70 shadow-[0_26px_70px_rgba(0,0,0,0.7)] p-5 flex flex-col justify-between">

              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/70">
                  Your path to OGPU
                </p>

                <h2 className="text-lg md:text-xl font-semibold text-white">
                  CEX, DEX or bridge. One page.
                </h2>

                <p className="text-xs md:text-sm text-slate-200">
                  We highlight the safest entry points and show you when you need to bridge to the OGPU Native Chain.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-200">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 space-y-1">
                  <p className="font-semibold text-white">Centralized</p>
                  <p className="text-[11px] text-slate-300">MEXC or Gate.io with USDT pairs.</p>
                </div>

                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 space-y-1">
                  <p className="font-semibold text-white">Decentralized</p>
                  <p className="text-[11px] text-slate-300">Uniswap or TakoSwap via wallet.</p>
                </div>

                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 space-y-1">
                  <p className="font-semibold text-white">Bridge</p>
                  <p className="text-[11px] text-slate-300">Move OGPU from Ethereum.</p>
                </div>

                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 space-y-1">
                  <p className="font-semibold text-white">Explorer</p>
                  <p className="text-[11px] text-slate-300">Track tasks on ogpuscan.io</p>
                </div>
              </div>
            </div>

            {/* ORBIT SYSTEM WITH PARALLAX + DUST */}
            <div
              className="absolute inset-0 z-[30] pointer-events-none"
              style={{ transform: `translateY(${parallax}px)` }}
            >
              {/* MICRO DUST */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              >
                {dust.map((d, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[3px] w-[3px] rounded-full bg-white/30"
                    style={{
                      top: `${d.top}%`,
                      left: `${d.left}%`
                    }}
                    animate={{
                      y: [0, -2, 1],
                      opacity: [0.4, 0.7, 0.3]
                    }}
                    transition={{
                      duration: d.duration,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </motion.div>

              {/* ORBIT LOGOS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[320px] w-[320px]">

                  <motion.img
                    src="/Images/uniswap-white.png"
                    className="absolute top-0 right-0 h-8 opacity-95 drop-shadow-[0_0_10px_rgba(0,198,255,0.45)]"
                    initial={{ y: -4 }}
                    animate={{ y: 4 }}
                    transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
                  />

                  <motion.img
                    src="/Images/mexc-white.png"
                    className="absolute top-20 right-0 h-6 opacity-90 drop-shadow-[0_0_10px_rgba(0,198,255,0.45)]"
                    initial={{ y: -3 }}
                    animate={{ y: 3 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  />

                  <motion.img
                    src="/Images/gateio-white.png"
                    className="absolute top-40 right-0 h-8 opacity-85 drop-shadow-[0_0_10px_rgba(0,198,255,0.45)]"
                    initial={{ y: -3 }}
                    animate={{ y: 3 }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                  />

                  <motion.img
                    src="/Images/takoswap-white.png"
                    className="absolute top-30 left-20 h-9 opacity-85 drop-shadow-[0_0_10px_rgba(0,198,255,0.45)]"
                    initial={{ y: -4 }}
                    animate={{ y: 4 }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                  />

                  <motion.img
                    src="/Images/bridgex-white.png"
                    className="absolute top-10 left-20 h-8 opacity-85 drop-shadow-[0_0_10px_rgba(0,198,255,0.45)]"
                    initial={{ y: -3 }}
                    animate={{ y: 3 }}
                    transition={{ duration: 11, repeat: Infinity, repeatType: "reverse" }}
                  />

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
