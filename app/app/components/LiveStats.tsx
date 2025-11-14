"use client";
import { useEffect, useState } from "react";

export default function LiveStats() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("https://management-backend.opengpu.network/api/dashboard/stats");
      const json = await res.json();
      setStats(json.data);
    }

    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!stats) return null;

  return (
    <section className="w-full bg-[#000104] pt-20 pb-16 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-xl">
          Backed by Global
        </h2>
        <p className="text-lg text-gray-300 drop-shadow">
          The OGPU Network is live, production-tested and running real AI workloads worldwide.
        </p>
      </div>

      <div className="flex justify-center gap-16 text-center mb-10">
        <div>
          <h3 className="text-3xl font-bold text-[#00E9FF]">{stats.activeProviders}+</h3>
          <p className="text-sm text-white font-medium">Active GPU Providers</p>
          <p className="text-xs text-gray-300 mt-1">Distributed across 40+ countries.</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#00E9FF]">60%–0%</h3>
          <p className="text-sm text-white font-medium">Cost Reduction</p>
          <p className="text-xs text-gray-300 mt-1">
            Compared to centralized cloud pricing.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#00E9FF]">
            {stats.successRate.toFixed(1)}%
          </h3>
          <p className="text-sm text-white font-medium">Network Uptime</p>
          <p className="text-xs text-gray-300 mt-1">
            Automated failover and redundancy.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-400 text-center">
        Real Providers. Real Workloads. No hypothetical capacity claims.
      </p>
    </section>
  );
}

