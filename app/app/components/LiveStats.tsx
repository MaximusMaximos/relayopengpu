"use client";

import { useEffect, useState } from "react";

export default function LiveStats() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [secondsAgo, setSecondsAgo] = useState(0);

  async function fetchStats() {
    try {
      const res = await fetch(
        "https://management-backend.opengpu.network/api/dashboard/stats",
        { cache: "no-store" }
      );

      const json = await res.json();
      setData(json.data);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (err) {
      console.error("Stats fetch error:", err);
    }
  }

  // Fetch on load + refresh every 10s
  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  // Update "seconds ago" counter
  useEffect(() => {
    if (!lastUpdated) return;
    const interval = setInterval(() => {
      setSecondsAgo(Math.floor((Date.now() - lastUpdated.getTime()) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [lastUpdated]);


  const StatBox = ({ label, value }: any) => {
    return (
      <div className="flex flex-col text-center px-6 py-4">
        <h3 className="text-3xl font-bold text-[#00E9FF]">
          {loading ? (
            <div className="w-16 h-6 bg-gray-200 animate-pulse rounded"></div>
          ) : (
            value
          )}
        </h3>
        <p className="text-sm text-white font-medium mt-1">{label}</p>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#000104] pt-20 pb-14 px-6 border-b border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-xl">
          Backed by Global Scale
        </h2>
        <div className="flex items-center gap-2 text-sm text-cyan-300 mb-4">
  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
  <span>Live • Updates every 30 seconds</span>
</div>

        <p className="text-lg text-gray-300 drop-shadow">
          Live production data from the OGPU Network.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="flex justify-center gap-16 text-center mb-6">

        <StatBox
          label="Active GPU Providers"
          value={`${data?.activeProviders || "--"}+`}
        />

        <StatBox
          label="Cost Reduction"
          value={`${data ? "60%–80%" : "--"}`}
        />

        <StatBox
          label="Network Uptime"
          value={`${data?.successRate?.toFixed(1) || "--"}%`}
        />
      </div>

      {/* Last Updated */}
      <p className="text-center text-xs text-gray-400">
        {loading
          ? "Fetching live stats…"
          : `Updated ${secondsAgo}s ago`}
      </p>
    </section>
  );
}
