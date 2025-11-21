"use client";

import { useEffect, useState } from "react";

export default function LiveMiniStats() {
  const [data, setData] = useState<any>(null);
  const [justUpdated, setJustUpdated] = useState(false);

  /* FETCH FUNCTION */
  async function fetchStats() {
    try {
      const res = await fetch(
        "https://management-backend.opengpu.network/api/dashboard/stats",
        {
          cache: "no-store",
        }
      );

      const json = await res.json();
      setData(json.data);

      setJustUpdated(true);
      setTimeout(() => setJustUpdated(false), 500);
    } catch (error) {
      console.error("Mini stats fetch error:", error);
    }
  }

  /* RUN EVERY 2 SECONDS (Pulse Mode) */
  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm px-6 py-6 mt-4">
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`w-2.5 h-2.5 rounded-full bg-emerald-500 ${
            justUpdated ? "animate-ping" : ""
          }`}
        />
        <p className="text-xs font-medium text-slate-600">
          Live network stats (updates every 2 seconds)
        </p>
      </div>

      {/* GRID OF TWO */}
      <div className="grid grid-cols-2 gap-6 text-center">

        {/* TOTAL TASKS */}
        <div>
          <p className="text-2xl font-bold text-slate-900">
            {data?.totalTasks ? data.totalTasks.toLocaleString() : "--"}
          </p>
          <p className="text-xs text-slate-500 mt-1">Total Tasks</p>
        </div>

        {/* TOTAL TRANSACTIONS */}
        <div>
          <p className="text-2xl font-bold text-slate-900">
            {data?.totalTransactions
              ? data.totalTransactions.toLocaleString()
              : "--"}
          </p>
          <p className="text-xs text-slate-500 mt-1">Total Transactions</p>
        </div>

      </div>
    </div>
  );
}
