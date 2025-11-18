"use client";

import { createContext, useContext, useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                LIVE STATS CONTEXT                           */
/* -------------------------------------------------------------------------- */
const LiveStatsContext = createContext<any>(null);

export function useLiveStats() {
  return useContext(LiveStatsContext);
}

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function LiveStats() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [justUpdated, setJustUpdated] = useState(false);

  /* --------------------------- Fetch Dashboard Stats --------------------------- */
  async function fetchStats() {
    try {
      const res = await fetch(
        "https://management-backend.opengpu.network/api/dashboard/stats",
        { cache: "no-store" }
      );
      const json = await res.json();

      setData(json.data);
      setLoading(false);

      setJustUpdated(true);
      setTimeout(() => setJustUpdated(false), 1200);
    } catch (e) {
      console.error("Stats error:", e);
    }
  }

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  /* ----------------------------- LIVE VERIFICATION ----------------------------- */
  const BASE_VERIFIED = 532_000_000; // adjust anytime using OGPU Scan
  const TPS = 9500; // estimated verified tasks per second

  const [verified, setVerified] = useState(BASE_VERIFIED);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerified((prev) => prev + TPS);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ------------------------------ StatBox UI --------------------------------- */
  const StatBox = ({ value, label, subtitle }: any) => {
    return (
      <div className="flex flex-col items-center text-center max-w-[240px]">
        <div className="text-4xl font-bold text-[#00E9FF] mb-1">
          {loading ? (
            <div className="w-20 h-6 bg-gray-300 animate-pulse rounded" />
          ) : (
            value
          )}
        </div>

        <p className="text-lg font-semibold text-white leading-tight mb-1">
          {loading ? (
            <div className="w-32 h-4 bg-gray-300 animate-pulse rounded" />
          ) : (
            label
          )}
        </p>

        <p className="text-sm text-gray-400 leading-snug">
          {loading ? (
            <span className="w-36 h-3 bg-gray-300 animate-pulse rounded" />
          ) : (
            subtitle
          )}
        </p>
      </div>
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                                COMPONENT RETURN                            */
  /* -------------------------------------------------------------------------- */

  return (
    <LiveStatsContext.Provider value={{ data, loading, verified }}>
      {/* BACKED BY GLOBAL SCALE SECTION */}
      <section className="w-full bg-[#000104] pt-10 pb-20 px-6 border-b border-white/5">
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-5xl font-bold mb-3">Backed by Global Scale</h2>

          <div className="flex items-center justify-center gap-2 text-sm text-cyan-300">
            <span
              className={`w-2.5 h-2.5 rounded-full bg-[#00E9FF] ${
                justUpdated ? "live-dot-pulse" : ""
              }`}
            />
            <span>Live • Updates every 10 seconds</span>
          </div>

          {/* FIXED SENTENCE */}
          <p className="text-lg text-gray-300 mt-4">
            The OGPU Network is live, production-tested, and running real AI workloads worldwide.
          </p>
        </div>

        {/* 3 COLUMNS */}
        <div className="flex justify-center gap-28 mb-8">
          <StatBox
            value={`${data?.activeProviders || "--"}+`}
            label="Active GPU Providers"
            subtitle="Distributed across 40+ countries."
          />

          <StatBox
            value={data ? "60%–80%" : "--"}
            label="Cost Reduction"
            subtitle="Compared to centralized cloud pricing."
          />

          <StatBox
            value={`${data?.successRate?.toFixed(2) || "--"}%`}
            label="Network Uptime"
            subtitle="Automated failover & redundancy."
          />
        </div>

        {/* TAGLINE */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Real Providers. Real Workloads. No hypothetical capacity claims.
        </p>
      </section>
    </LiveStatsContext.Provider>
  );
}
