"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BuyHero from "../components/BuyHero";

export default function HowToBuyOgpuPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <BuyHero />

      {/* MAIN BODY */}
      <main className="min-h-screen bg-[#020617] text-slate-100 font-sans">

        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pb-20 space-y-16 md:space-y-20">

          {/* INTRO LABEL */}
          <section className="pt-6 space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Quick start
            </p>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-xl md:text-2xl font-semibold">
                Choose where you want to start
              </h2>
              <p className="text-sm md:text-base text-slate-300">
                You can buy or swap OGPU on centralized exchanges, decentralized exchanges, 
                or go straight to the bridge and blockchain information. 
                Pick the option that feels most familiar.
              </p>
            </div>
          </section>

          {/* TOP LOGO GRID */}
          <section>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* MEXC */}
              <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  <div className="absolute -top-10 right-0 h-24 w-24 rounded-full bg-emerald-500 blur-[70px]" />
                </div>
                <div className="relative flex flex-col items-center text-center gap-3">
                  <img src="/Images/mexc-white.png" alt="MEXC" className="h-10 w-auto" />
                  <h3 className="text-sm font-semibold">MEXC</h3>
                  <p className="text-xs text-slate-300">Buy OGPU with USDT on a centralized exchange.</p>
                  <a
                    href="https://www.mexc.com/"
                    target="_blank"
                    className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium bg-slate-50 text-slate-900 hover:bg-slate-200 transition"
                  >
                    Open MEXC
                  </a>
                </div>
              </div>

              {/* Gate.io */}
              <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-35">
                  <div className="absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-amber-500 blur-[70px]" />
                </div>
                <div className="relative flex flex-col items-center text-center gap-3">
                  <img src="/Images/gateio-white.png" alt="Gate.io" className="h-10 w-auto" />
                  <h3 className="text-sm font-semibold">Gate.io</h3>
                  <p className="text-xs text-slate-300">Buy OGPU on Ethereum, then bridge to OGPU Native Chain.</p>
                  <a
                    href="https://www.gate.io/"
                    target="_blank"
                    className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium bg-slate-50 text-slate-900 hover:bg-slate-200 transition"
                  >
                    Open Gate.io
                  </a>
                </div>
              </div>

              {/* Uniswap */}
              <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-35">
                  <div className="absolute top-[-40px] right-[-40px] h-28 w-28 rounded-full bg-pink-500 blur-[70px]" />
                </div>
                <div className="relative flex flex-col items-center text-center gap-3">
                  <img src="/Images/uniswap-white.png" alt="Uniswap" className="h-10 w-auto" />
                  <h3 className="text-sm font-semibold">Uniswap</h3>
                  <p className="text-xs text-slate-300">Swap to OGPU on Ethereum using your wallet.</p>
                  <a
                    href="https://app.uniswap.org/"
                    target="_blank"
                    className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium bg-slate-50 text-slate-900 hover:bg-slate-200 transition"
                  >
                    Open Uniswap
                  </a>
                </div>
              </div>

              {/* TakoSwap */}
              <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-35">
                  <div className="absolute bottom-[-40px] right-[-40px] h-28 w-28 rounded-full bg-orange-500 blur-[70px]" />
                </div>
                <div className="relative flex flex-col items-center text-center gap-3">
                  <img src="/Images/takoswap-white.png" alt="TakoSwap" className="h-10 w-auto" />
                  <h3 className="text-sm font-semibold">TakoSwap</h3>
                  <p className="text-xs text-slate-300">Swap USDO or other assets on OGPU Chain.</p>
                  <a
                    href="https://takoswap.app/"
                    target="_blank"
                    className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium bg-slate-50 text-slate-900 hover:bg-slate-200 transition"
                  >
                    Open TakoSwap
                  </a>
                </div>
              </div>

              {/* BridgeX */}
              <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-30">
                  <div className="absolute -top-8 left-[-10px] h-24 w-24 rounded-full bg-emerald-400 blur-[70px]" />
                </div>
                <div className="relative flex flex-col items-center text-center gap-3">
                  <img src="/Images/bridgex-white.png" alt="BridgeX" className="h-10 w-auto" />
                  <h3 className="text-sm font-semibold">BridgeX</h3>
                  <p className="text-xs text-slate-300">Bridge OGPU from Ethereum to OGPU Chain.</p>
                  <a
                    href="https://chainchangers.app/"
                    target="_blank"
                    className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium bg-slate-50 text-slate-900 hover:bg-slate-200 transition"
                  >
                    Open BridgeX
                  </a>
                </div>
              </div>

              {/* Blockchain */}
              <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-30">
                  <div className="absolute bottom-[-20px] left-6 h-24 w-24 rounded-full bg-sky-500 blur-[70px]" />
                </div>
                <div className="relative flex flex-col items-center text-center gap-3">
                  <img src="/Images/Nav/blockchain-icon.png" alt="OGPU Blockchain" className="h-10 w-auto" />
                  <h3 className="text-sm font-semibold">OGPU Blockchain</h3>
                  <p className="text-xs text-slate-300">View RPC details & explorer.</p>
                  <a
                    href="https://opengpu.network/blockchain"
                    target="_blank"
                    className="mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium bg-slate-50 text-slate-900 hover:bg-slate-200 transition"
                  >
                    Open Blockchain Page
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* CEX VS DEX */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold">Two simple ways to get OGPU</h2>

            <div className="grid gap-5 md:grid-cols-2">

              {/* CEX */}
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.9)] space-y-3">
                <h3 className="text-lg font-semibold">Option 1, Centralized exchanges</h3>
                <p className="text-sm text-slate-300">
                  Best for beginners. Create an account on a CEX, buy OGPU with USDT, then withdraw to your wallet.
                </p>
                <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                  <li>MEXC, Gate.io</li>
                  <li>Pay with USDT</li>
                  <li>Withdraw to self-custody</li>
                </ul>
              </div>

              {/* DEX */}
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.9)] space-y-3">
                <h3 className="text-lg font-semibold">Option 2, Decentralized exchanges</h3>
                <p className="text-sm text-slate-300">Best for Web3 users.</p>
                <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                  <li>Swap on Uniswap (Ethereum)</li>
                  <li>Swap on TakoSwap (OGPU Native)</li>
                  <li>Keep ETH or OGPU for gas</li>
                </ul>
              </div>

            </div>
          </section>

          {/* IMPORTANT NOTICE */}
          <section>
            <div className="rounded-2xl border border-amber-300/70 bg-gradient-to-r from-amber-50/95 to-amber-100/95 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 shadow-[0_16px_45px_rgba(251,191,36,0.25)]">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-700">
                  Important
                </p>
                <p className="text-sm md:text-base text-amber-900 font-medium">
                  If you buy OGPU on Ethereum you must bridge to the OGPU Native Chain to use the network.
                </p>
              </div>

              <a
                href="https://chainchangers.app/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium bg-amber-700 text-white hover:bg-amber-800 transition"
              >
                Bridge now with BridgeX
              </a>
            </div>
          </section>

          {/* STEP BY STEP */}
          <section className="space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold">Step by step guide</h2>

            <ol className="space-y-4 text-sm md:text-base text-slate-200">

              <li className="flex gap-3">
                <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px]">1</div>
                <p><span className="font-semibold">Prepare your wallet.</span> Install MetaMask, OKX, or Uniswap Wallet.</p>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px]">2</div>
                <p><span className="font-semibold">Add the OGPU network.</span> Use our Blockchain page to add OGPU Native Chain.</p>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px]">3</div>
                <p><span className="font-semibold">Buy or swap OGPU.</span> Use MEXC, Gate.io, Uniswap, or TakoSwap.</p>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px]">4</div>
                <p><span className="font-semibold">Bridge if needed.</span> If bought on Ethereum, bridge to OGPU Chain.</p>
              </li>

            </ol>
          </section>

        
        </div>

        {/* PAGE BOTTOM SPACER */}
<div className="h-20 md:h-20"></div>
</main>



<Footer />

    </>
  );
}
