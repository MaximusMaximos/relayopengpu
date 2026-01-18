"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LiveStatsContext = createContext<any>(null);

export function useLiveStats() {
  return useContext(LiveStatsContext);
}

export default function LiveStats() {
  const [data, setData] = useState<any>(null);
  const [justUpdated, setJustUpdated] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  // Fetch stats
  async function fetchStats() {
    try {
      const res = await fetch(
        "https://management-backend.opengpu.network/api/dashboard/stats",
        { cache: "no-store", next: { revalidate: 0 } }
      );

      const json = await res.json();
      setData(json.data);

      if (!hasLoadedOnce) setHasLoadedOnce(true);

      setJustUpdated(true);
      setTimeout(() => setJustUpdated(false), 1200);
    } catch (error) {
      console.error("Stats fetch error:", error);
    }
  }

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  // Realtime counter
  const BASE_VERIFIED = 532_000_000;
  const TPS = 9500;

  const [verified, setVerified] = useState(BASE_VERIFIED);
  useEffect(() => {
    const t = setInterval(() => setVerified(v => v + TPS), 1000);
    return () => clearInterval(t);
  }, []);

  // Stat box component
  const StatBox = ({ value, label, subtitle }: any) => (
    <div className="flex flex-col items-center text-center max-w-[280px]">
      {/* GRADIENT APPLIED TO NUMBERS */}
      <div className="stat-number mb-2 tracking-tighter bg-gradient-to-r from-[#0A84FF] to-[#22D3EE] bg-clip-text text-transparent">
        {hasLoadedOnce ? value : "--"}
      </div>
      <p className="text-[#020617] leading-tight mb-1 tracking-tight">
        {label}
      </p>
      <p className="text-gray-400 leading-snug tracking-tight">
        <small>{subtitle}</small>
      </p>
    </div>
  );

  return (
    <LiveStatsContext.Provider value={{ data, verified }}>
      <div className="w-full">

        {/* Live Pulse Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50/50 shadow-sm">
            <span
              className={`w-2.5 h-2.5 rounded-full bg-[#0A84FF] ${
                justUpdated ? "animate-ping" : ""
              }`}
            />
            <span className="text-gray-400 uppercase tracking-widest"><small>Live Network Stats</small></span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-4 place-items-center">
          <StatBox
            value={`${data?.activeProviders || "265"}+`}
            label="Active GPU Providers"
            subtitle="Distributed across 40+ countries."
          />

          <StatBox
            value={data ? "Up to 80%" : "Up to 80%"}
            label="Cost Reduction"
            subtitle="Compared to centralized cloud pricing."
          />

          <StatBox
            value={`${data?.successRate?.toFixed(2) || "99.40"}%`}
            label="Network Reliability"
            subtitle="Automated failover and redundancy."
          />
        </div>

      </div>
    </LiveStatsContext.Provider>
  );
}