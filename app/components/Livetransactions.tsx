"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// ANIMATED NUMBER COMPONENT
// ============================================================================

function AnimatedDigit({ digit, justUpdated }: { digit: string; justUpdated: boolean }) {
  const isNumber = !isNaN(parseInt(digit));
  
  if (!isNumber) {
    // Render commas/separators without animation
    return <span className="text-[#00E9FF]/60">{digit}</span>;
  }

  return (
    <div className="relative h-[1.2em] w-[0.65em] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ 
            y: justUpdated ? -28 : 0, 
            opacity: justUpdated ? 0 : 1,
            color: "#ffffff",
            textShadow: "0 0 12px rgba(255,255,255,0.8)"
          }}
          animate={{ 
            y: 0, 
            opacity: 1,
            color: "#00E9FF",
            textShadow: "0 0 0px rgba(0,233,255,0)"
          }}
          exit={{ 
            y: 28, 
            opacity: 0 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 120, 
            damping: 14,
            mass: 1,
            color: { duration: 1, ease: "easeOut" },
            textShadow: { duration: 1.2, ease: "easeOut" }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function AnimatedNumber({ value, justUpdated }: { value: number; justUpdated: boolean }) {
  const formatted = value.toLocaleString();
  const digits = formatted.split("");

  return (
    <div className="flex items-center font-mono font-bold tracking-tight">
      {digits.map((digit, i) => (
        <AnimatedDigit key={`${i}-${digit}`} digit={digit} justUpdated={justUpdated} />
      ))}
    </div>
  );
}

// ============================================================================
// PULSE INDICATOR
// ============================================================================

function LivePulse({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative flex items-center justify-center w-3 h-3">
      {/* Outer pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-emerald-500"
        animate={{
          scale: [1, 2, 2],
          opacity: [0.7, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      {/* Secondary ring for more presence */}
      <motion.span
        className="absolute inset-0 rounded-full bg-emerald-400"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.2,
        }}
      />
      {/* Inner dot */}
      <motion.span
        className="relative w-2 h-2 rounded-full bg-emerald-400"
        animate={isActive ? {
          scale: [1, 1.5, 1],
          backgroundColor: ["#4ade80", "#ffffff", "#4ade80"],
          boxShadow: [
            "0 0 0px rgba(74,222,128,0)",
            "0 0 16px rgba(255,255,255,0.9)",
            "0 0 0px rgba(74,222,128,0)"
          ],
        } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}

// ============================================================================
// CONTAINER FLASH EFFECT
// ============================================================================

function ContainerGlow({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full pointer-events-none"
      animate={isActive ? {
        boxShadow: [
          "0 0 20px rgba(0,200,255,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
          "0 0 40px rgba(0,200,255,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
          "0 0 20px rgba(0,200,255,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
        ],
        borderColor: [
          "rgba(0,200,255,0.3)",
          "rgba(0,200,255,0.7)",
          "rgba(0,200,255,0.3)"
        ]
      } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function LiveTransactions() {
  const [txs, setTxs] = useState<number | null>(null);
  const [txsToday, setTxsToday] = useState<number | null>(null);
  const [justUpdated, setJustUpdated] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fetchData() {
    try {
      const res = await fetch("https://ogpuscan.io/api/v2/stats", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      
      setTxs(json.total_transactions);
      setTxsToday(parseInt(json.transactions_today));
      setIsError(false);
      setJustUpdated(true);
      
      // Longer duration
      setTimeout(() => setJustUpdated(false), 1000);
    } catch (err) {
      console.error("Fetch error", err);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center" role="status" aria-live="polite">

      {/* ================= MOBILE VERSION ================= */}
      <a
        href="https://ogpuscan.io"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          flex md:hidden items-center gap-2
          px-4 py-2 text-[11px]
          bg-[#0a1628]/60
          border border-[#00C8FF]/30
          rounded-full
          backdrop-blur-md
          hover:border-[#00C8FF]/50
          hover:bg-[#0a1628]/80
          transition-all duration-300
          cursor-pointer
          group
        "
      >
        <ContainerGlow isActive={justUpdated} />
        <LivePulse isActive={justUpdated} />
        
        <span className="text-white/70 font-medium">LIVE</span>
        
        <div className="flex items-center text-[#00E9FF] font-bold font-mono">
          {txs !== null ? (
            <AnimatedNumber value={txs} justUpdated={justUpdated} />
          ) : isError ? (
            <span className="text-red-400">--</span>
          ) : (
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading
            </motion.span>
          )}
        </div>
        
        <span className="text-white/50">txs</span>
        
        <svg 
          className="w-3 h-3 text-white/30 group-hover:text-[#00E9FF] transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* ================= DESKTOP VERSION ================= */}
      <a
        href="https://ogpuscan.io"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          hidden md:flex items-center gap-4 px-6 py-3
          rounded-full
          bg-gradient-to-r from-[#0a1628]/70 via-[#0d1d35]/60 to-[#0a1628]/70
          border border-[#00C8FF]/30
          shadow-[0_0_20px_rgba(0,200,255,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]
          hover:border-[#00C8FF]/60
          hover:shadow-[0_0_30px_rgba(0,200,255,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]
          transition-all duration-300
          cursor-pointer
          group
          backdrop-blur-xl
        "
      >
        <ContainerGlow isActive={justUpdated} />
        
        {/* Live indicator */}
        <div className="flex items-center gap-2">
          <LivePulse isActive={justUpdated} />
          <motion.span 
            className="text-xs font-bold tracking-wider"
            animate={justUpdated ? {
              color: ["#4ade80", "#ffffff", "#4ade80"],
            } : { color: "#4ade80" }}
            transition={{ duration: 0.4 }}
          >
            LIVE
          </motion.span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-white/20" />

        {/* Transaction count */}
        <div className="flex items-center gap-2">
          <div className="flex items-center text-[#00E9FF] text-lg">
            {txs !== null ? (
              <AnimatedNumber value={txs} justUpdated={justUpdated} />
            ) : isError ? (
              <motion.span
                className="text-amber-400 text-sm font-medium"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Reconnecting...
              </motion.span>
            ) : (
              <motion.div
                className="flex gap-1"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-3 h-5 bg-white/20 rounded-sm" />
                ))}
              </motion.div>
            )}
          </div>
          <span className="text-white/60 text-sm font-medium">transactions</span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-white/20" />

        {/* Transactions Today */}
        <div className="flex items-center gap-2">
          <motion.span
            className="text-xs font-mono"
            animate={justUpdated && txsToday !== null ? { 
              color: ["rgba(255,255,255,0.8)", "#ffffff", "rgba(255,255,255,0.8)"],
            } : { color: "rgba(255,255,255,0.8)" }}
            transition={{ duration: 0.5 }}
          >
            {txsToday !== null ? (
              <>
                <motion.span 
                  className="font-semibold"
                  animate={justUpdated ? {
                    color: ["#00E9FF", "#ffffff", "#00E9FF"],
                    textShadow: [
                      "0 0 0px rgba(0,233,255,0)",
                      "0 0 10px rgba(255,255,255,0.6)",
                      "0 0 0px rgba(0,233,255,0)"
                    ]
                  } : { color: "#00E9FF" }}
                  transition={{ duration: 0.6 }}
                >
                  {txsToday.toLocaleString()}
                </motion.span>
                {" "}today
              </>
            ) : (
              "-- today"
            )}
          </motion.span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-white/20" />

        {/* Verified badge */}
        <div className="flex items-center gap-2 text-white/50 text-xs group-hover:text-white/70 transition-colors">
          <motion.div
            animate={justUpdated ? {
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            } : {}}
            transition={{ duration: 0.4 }}
          >
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <span>Verified via OGPUScan</span>
          <svg 
            className="w-3.5 h-3.5 text-white/30 group-hover:text-[#00E9FF] group-hover:translate-x-0.5 transition-all" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </div>
  );
}