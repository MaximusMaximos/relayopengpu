"use client";

import { useEffect, useState } from "react";

export default function LiveTransactions() {
  const [txs, setTxs] = useState<number | null>(null);
  const [justUpdated, setJustUpdated] = useState(false);

  async function fetchTx() {
    try {
      const res = await fetch("https://ogpuscan.io/api/v2/stats", {
        cache: "no-store",
      });
      const json = await res.json();

      setTxs(json.total_transactions);
      setJustUpdated(true);

      setTimeout(() => setJustUpdated(false), 500);
    } catch (err) {
      console.error("TX fetch error", err);
    }
  }

  useEffect(() => {
    fetchTx();
    const i = setInterval(fetchTx, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
  className="
    flex items-center gap-3 px-5 py-2
    rounded-full
    bg-black/60
    border border-[#00C8FF]/40
    shadow-[0_0_12px_rgba(0,200,255,0.35)]
    text-white text-xs font-medium
  "
>

        {/* RED PULSE */}
        <span
          className={`
            w-2 h-2 rounded-full bg-red-500
            ${justUpdated ? "animate-ping" : ""}
          `}
        />

        <span>[LIVE]</span>

        {/* ELECTRIC BLUE COUNT */}
        <span className="text-[#00E9FF] font-semibold tracking-wide">
          {txs ? txs.toLocaleString() : "--"}
        </span>

        <span>transactions</span>

        <span className="opacity-40">•</span>

        <span className="text-white/70">Data verified via OGPUScan</span>
      </div>
    </div>
  );
}
