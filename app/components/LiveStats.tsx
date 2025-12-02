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
    <div className="flex flex-col items-center text-center max-w-[200px]">
      <div className="text-4xl font-bold text-[#00E9FF] mb-1 tracking-tight">
        {hasLoadedOnce ? value : "--"}
      </div>
      <p className="text-lg font-semibold text-white leading-tight mb-1 tracking-tight">
        {label}
      </p>
      <p className="text-sm text-gray-400 leading-snug tracking-tight">
        {subtitle}
      </p>
    </div>
  );

  return (
    <LiveStatsContext.Provider value={{ data, verified }}>
      <div className="w-full">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold mb-2">Backed by Global Scale</h2>

          <div className="flex items-center justify-center gap-2 text-sm text-cyan-300 mb-2">
            <span
              className={`w-2.5 h-2.5 rounded-full bg-[#00E9FF] ${
                justUpdated ? "live-dot-pulse" : ""
              }`}
            />
            <span>Live • Updates every 10 seconds</span>
          </div>

          <p className="text-base md:text-lg text-gray-300">
            The OGPU Network is live, production-tested, and running real workloads globally.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 place-items-center">
          <StatBox
            value={`${data?.activeProviders || "--"}+`}
            label="Active GPU Providers"
            subtitle="Distributed across 40+ countries."
          />

          <StatBox
            value={data ? "60-80%" : "--"}
            label="Cost Reduction"
            subtitle="Compared to centralized cloud pricing."
          />

          <StatBox
            value={`${data?.successRate?.toFixed(2) || "--"}%`}
            label="Network Uptime"
            subtitle="Automatic failover and redundancy."
          />
        </div>

        <p className="text-center text-sm text-gray-400">
          Real providers and real workloads, not simulated capacity.
        </p>

      </div>
    </LiveStatsContext.Provider>
  );
}
