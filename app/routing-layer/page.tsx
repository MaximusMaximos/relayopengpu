"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = 'IDLE' | 'TASK_PUBLISHED' | 'PROVIDER_RACE' | 'DOCKER_EXECUTION' | 'IPFS_UPLOAD' | 'RESPONSE_SUBMITTED' | 'VAULT_SETTLEMENT';

const ASSETS = {
  enterprise: "http://localhost:3000/Images/enterprise.png",
  datacenter: "http://localhost:3000/Images/datacenter-icon.png",
  cloud: "http://localhost:3000/Images/cloud.png",
  mining_rig: "http://localhost:3000/Images/GPU_Mining_Frame.png",
  laptop: "http://localhost:3000/Images/laptop.png",
};

export default function CenteredRoutingDemo() {
  const [step, setStep] = useState<Step>('IDLE');
  const [subStatus, setSubStatus] = useState("");
  const [mounted, setMounted] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0); 
  const [meshSync, setMeshSync] = useState(0);        
  const [settleSync, setSettleSync] = useState(0);
  const [showFinalReward, setShowFinalReward] = useState(false);

  useEffect(() => setMounted(true), []);

  const OGPU_BLUE = "#0062FF";
  const OGPU_CYAN = "#00A3FF";
  const VAULT_GREEN = "#10B981";
  const BG_COLOR = "#ffffff";

  const HUB_X = 585;
  const HUB_Y = 160; 
  const PATH_START_X = 120; // Exact center of laptop image
  const BC_Y = HUB_Y + 160; 

  const providers = useMemo(() => {
    const categories: (keyof typeof ASSETS)[] = ['enterprise', 'datacenter', 'cloud', 'mining_rig', 'datacenter', 'enterprise', 'cloud', 'mining_rig', 'datacenter'];
    return categories.map((type, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      return { 
        id: i, 
        type, 
        x: 850 + (col * 140), 
        y: (HUB_Y - 120) + (row * 120), 
        size: 55, 
        url: ASSETS[type] 
      };
    });
  }, []);

  const winner = providers[4]; 

  const runSequence = (setter: (v: number) => void, duration: number) => {
    const start = performance.now();
    return new Promise((resolve) => {
      const animate = (time: number) => {
        const elapsed = time - start;
        const p = Math.min(elapsed / duration, 1);
        setter(p);
        if (p < 1) requestAnimationFrame(animate);
        else resolve(null);
      };
      requestAnimationFrame(animate);
    });
  };

  const PAUSE = 2500;

  const runSimulation = async () => {
    setShowFinalReward(false);
    setStep('TASK_PUBLISHED');
    setSubStatus("VAULT: LOCKING PAYMENT ON-CHAIN...");
    await runSequence(setSyncProgress, 5000);
    await new Promise(r => setTimeout(r, PAUSE));
    
    setStep('PROVIDER_RACE');
    setSubStatus("NEXUS: STARTING PROVIDER SPEED RACE...");
    await runSequence(setMeshSync, 3000);
    await new Promise(r => setTimeout(r, PAUSE));
    
    setStep('DOCKER_EXECUTION');
    setSubStatus("DOCKER: RUNNING SECURE COMPUTATION...");
    await new Promise(r => setTimeout(r, 6000));
    await new Promise(r => setTimeout(r, PAUSE));
    
    setStep('IPFS_UPLOAD');
    setSubStatus("IPFS: SAVING RESULT TO STORAGE LOCKER...");
    await new Promise(r => setTimeout(r, 4000));
    await new Promise(r => setTimeout(r, PAUSE));
    
    setStep('RESPONSE_SUBMITTED');
    setSubStatus("L1: SUBMITTING STORAGE KEY (CID)...");
    await runSequence((v) => setMeshSync(1 - v), 3500); 
    await new Promise(r => setTimeout(r, PAUSE));

    setStep('VAULT_SETTLEMENT');
    setSubStatus("SUCCESS: VAULT RELEASING REWARDS...");
    await runSequence(setSettleSync, 4000);
    await new Promise(r => setTimeout(r, 500)); 
    setShowFinalReward(true);
    await new Promise(r => setTimeout(r, PAUSE));
    
    setStep('IDLE');
    setSyncProgress(0);
    setMeshSync(0);
    setSettleSync(0);
    setShowFinalReward(false);
  };

  if (!mounted) return null;

  const isPulsating = (step === 'TASK_PUBLISHED' && syncProgress > 0.95) || 
                      (step === 'RESPONSE_SUBMITTED' && meshSync < 0.05) ||
                      step === 'PROVIDER_RACE';

  return (
    <div style={{ backgroundColor: BG_COLOR }} className="min-h-screen text-slate-900 p-4 flex flex-col items-center justify-center antialiased overflow-hidden">
      
      {/* HEADER */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-end mb-8 px-6 text-center md:text-left gap-4">
        <div className="space-y-3">
          <div className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase border border-slate-200 italic">
            OpenGPU L1 Blockchain
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none text-slate-900">
            Routing <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent not-italic font-black">Layer</span>
          </h1>
        </div>
        <button onClick={runSimulation} disabled={step !== 'IDLE'} className="px-14 py-5 bg-slate-900 text-white font-black rounded-full uppercase text-xs hover:bg-blue-600 transition-all shadow-lg active:scale-95">
          {step === 'IDLE' ? "Trigger Task" : "Processing"}
        </button>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] border border-slate-200 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-sm bg-white">
        <svg viewBox="0 0 1200 500" className="w-full h-full p-2 md:p-12 relative z-10" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="ogpu-glow"><feGaussianBlur stdDeviation="4" /><feComposite in="SourceGraphic" operator="over" /></filter>
          </defs>

          <g filter="url(#ogpu-glow)">
            {/* INPUT PATH */}
            {step === 'TASK_PUBLISHED' && (
              <>
                <line x1={PATH_START_X} y1={HUB_Y} x2={PATH_START_X + ((HUB_X - PATH_START_X) * syncProgress)} y2={HUB_Y} stroke={OGPU_BLUE} strokeWidth="5" strokeLinecap="round" />
                {syncProgress < 1 && <circle cx={PATH_START_X + ((HUB_X - PATH_START_X) * syncProgress)} cy={HUB_Y} r={6} fill="#0062FF" />}
              </>
            )}

            {/* RETURN PATH (KEY DELIVERY) - Ends perfectly at PATH_START_X */}
            {step === 'VAULT_SETTLEMENT' && (
              <>
                <line 
                  x1={HUB_X} y1={HUB_Y} 
                  x2={HUB_X - ((HUB_X - PATH_START_X) * settleSync)} 
                  y2={HUB_Y} 
                  stroke={VAULT_GREEN} strokeWidth="5" strokeLinecap="round" 
                />
                <circle cx={HUB_X - ((HUB_X - PATH_START_X) * settleSync)} cy={HUB_Y} r={6} fill={VAULT_GREEN} />
              </>
            )}
            
            {/* MESH PATH */}
            {(step === 'PROVIDER_RACE' || step === 'DOCKER_EXECUTION' || step === 'IPFS_UPLOAD' || step === 'RESPONSE_SUBMITTED' || step === 'VAULT_SETTLEMENT') && (
              <>
                <line 
                  x1={HUB_X} y1={HUB_Y} 
                  x2={HUB_X + ((winner.x - HUB_X) * (step === 'RESPONSE_SUBMITTED' ? 1 : meshSync))} 
                  y2={HUB_Y + ((winner.y - HUB_Y) * (step === 'RESPONSE_SUBMITTED' ? 1 : meshSync))} 
                  stroke={step === 'RESPONSE_SUBMITTED' ? VAULT_GREEN : OGPU_CYAN} 
                  strokeWidth="5" strokeLinecap="round" 
                />
                {(step === 'PROVIDER_RACE' || step === 'RESPONSE_SUBMITTED') && (
                  <circle cx={HUB_X + ((winner.x - HUB_X) * meshSync)} cy={HUB_Y + ((winner.y - HUB_Y) * meshSync)} r={6} fill={BG_COLOR} stroke={step === 'RESPONSE_SUBMITTED' ? VAULT_GREEN : OGPU_CYAN} strokeWidth="3" />
                )}
              </>
            )}

            {/* SETTLEMENT LINE */}
            {(step === 'VAULT_SETTLEMENT') && (
              <>
                <line 
                  x1={HUB_X} y1={HUB_Y} 
                  x2={HUB_X} y2={HUB_Y + ((BC_Y - HUB_Y) * settleSync)} 
                  stroke={VAULT_GREEN} strokeWidth="5" strokeLinecap="round" 
                />
                {settleSync < 1 && (
                  <circle cx={HUB_X} cy={HUB_Y + ((BC_Y - HUB_Y) * settleSync)} r={6} fill={VAULT_GREEN} />
                )}
              </>
            )}
          </g>

          <g transform={`translate(60, ${HUB_Y - 50})`}>
            <image href={ASSETS.laptop} width="120" height="110" />
            {/* Success Label and Pulsing Light */}
            {step === 'VAULT_SETTLEMENT' && settleSync > 0.95 && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <text x="60" y="-15" textAnchor="middle" fontSize="12" fill={VAULT_GREEN} fontWeight="bold" className="font-mono uppercase italic tracking-tighter">
                  ● JOB_COMPLETED
                </text>
                <motion.circle cx="60" cy="55" r="10" fill={VAULT_GREEN} animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
              </motion.g>
            )}
          </g>
          
          <g transform={`translate(${HUB_X}, ${HUB_Y})`}>
            <AnimatePresence>
              {(step === 'IPFS_UPLOAD' || step === 'RESPONSE_SUBMITTED') && (
                <motion.g initial={{ opacity: 0, scale: 0.5, y: 10 }} animate={{ opacity: 1, scale: 1, y: -65 }} exit={{ opacity: 0, scale: 0.5 }}>
                  <circle r="12" fill="#00A3FF" />
                  <text textAnchor="middle" y="4" fontSize="8" fontWeight="bold" fill="white" className="font-mono">IPFS</text>
                  <motion.circle r="12" stroke="#00A3FF" strokeWidth="2" fill="none" animate={{ scale: [1, 1.6], opacity: [0.6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
                </motion.g>
              )}
            </AnimatePresence>
            <motion.image 
              href="http://localhost:3000/Images/swivel.png" 
              x="-40" y="-40" width="80" height="80" 
              animate={isPulsating ? { scale: [1, 1.2, 1] } : { scale: 1 }} 
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} 
            />
          </g>

          <g>
            {providers.map((p, i) => {
              const isActive = i === 4 && (step === 'DOCKER_EXECUTION' || step === 'IPFS_UPLOAD' || step === 'RESPONSE_SUBMITTED' || step === 'VAULT_SETTLEMENT');
              return (
                <g key={i}>
                  <rect x={p.x - 45} y={p.y - 45} width="90" height="90" rx="15" fill="black" fillOpacity="0.03" stroke="black" strokeOpacity="0.05" />
                  <motion.image href={p.url} x={p.x - (p.size / 2)} y={p.y - (p.size / 2)} width={isActive ? p.size * 1.4 : p.size} height={isActive ? p.size * 1.4 : p.size} animate={isActive ? { filter: "drop-shadow(0 0 10px rgba(0,163,255,0.4))" } : {}} transition={{ duration: 0.5 }} />
                  {isActive && (
                    <motion.text x={p.x} y={p.y - 55} textAnchor="middle" fontSize="10" fill={step === 'DOCKER_EXECUTION' ? OGPU_CYAN : VAULT_GREEN} fontWeight="bold" className="font-mono uppercase tracking-tighter italic">
                      {step === 'DOCKER_EXECUTION' && "● SECURE_DOCKER"}
                      {step === 'IPFS_UPLOAD' && "● IPFS_LOCKER"}
                      {step === 'RESPONSE_SUBMITTED' && "● KEY_SUBMITTED"}
                      {showFinalReward && "● REWARD_RECEIVED"}
                    </motion.text>
                  )}
                </g>
              );
            })}
          </g>

          <foreignObject x={HUB_X - 80} y={BC_Y} width="160" height="90">
            <div className={`p-3 rounded-2xl border transition-colors duration-500 bg-slate-50 shadow-sm ${step === 'VAULT_SETTLEMENT' && settleSync > 0.95 ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200'}`}>
              <div className="grid grid-cols-8 gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div key={i} className="w-2.5 h-2.5 rounded-[2px] bg-slate-200" animate={step !== 'IDLE' ? { opacity: [0.3, 1, 0.3], backgroundColor: step === 'VAULT_SETTLEMENT' && settleSync > 0.95 ? "#10b981" : "#00A3FF" } : {}} transition={{ duration: 1.5, repeat: Infinity, delay: (i % 8) * 0.1 }} />
                ))}
              </div>
              <div className="mt-2 flex justify-between items-center text-[7px] font-mono tracking-widest text-slate-400 uppercase italic font-bold">
                <span>Parallel_L1</span>
                <span className={step === 'VAULT_SETTLEMENT' && settleSync > 0.95 ? 'text-emerald-600' : ''}>{step === 'VAULT_SETTLEMENT' && settleSync > 0.95 ? 'Settling' : 'Active'}</span>
              </div>
            </div>
          </foreignObject>

          <AnimatePresence>
            {step === 'VAULT_SETTLEMENT' && settleSync > 0.99 && (
              <motion.g initial={{ x: HUB_X, y: BC_Y + 45, opacity: 0 }} animate={{ x: winner.x, y: winner.y, opacity: 1 }} transition={{ duration: 2, ease: "anticipate" }}>
                <circle r="20" fill={VAULT_GREEN} /><text textAnchor="middle" y="7" fontSize="22" fill="#fff" fontWeight="900">$</text>
              </motion.g>
            )}
          </AnimatePresence>
        </svg>

        <div className="absolute bottom-0 inset-x-0 h-32 md:h-40 bg-gradient-to-t from-white via-white/95 flex flex-col items-center justify-end px-4 md:px-16 pb-4 md:pb-8 text-left z-20">
          <div className="w-full max-w-4xl space-y-1 md:space-y-3">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-[8px] md:text-[10px] font-mono text-blue-600 uppercase tracking-[0.4em] font-black italic">OpenGPU Mainnet Protocol</span>
              <span className="text-[9px] md:text-[12px] font-mono text-slate-400 uppercase tracking-[0.2em] font-medium italic text-right truncate ml-4">{subStatus}</span>
            </div>
            <h4 className="text-sm md:text-2xl font-bold text-slate-800 tracking-tight leading-tight">
              {getDesc(step)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function getDesc(step: Step) {
  const map: Record<Step, string> = {
    IDLE: 
      "Protocol idle. Providers are registered, containers are ready, and the OpenGPU L1 is active.",

    TASK_PUBLISHED: 
      "Client publishes a task. Payment is locked in escrow via the Vault contract.",

    PROVIDER_RACE: 
      "Nexus broadcasts the task. Registered providers compete via First Response or Manual Confirmation.",

    DOCKER_EXECUTION: 
      "Winning provider executes the task inside the client-defined Docker container.",

    IPFS_UPLOAD: 
      "Execution complete. Result data is uploaded to decentralized storage and referenced by CID.",

    RESPONSE_SUBMITTED: 
    "Provider submits response metadata and CID on-chain. Protocol verifies completion conditions.",

    VAULT_SETTLEMENT: 
      "Task finalized. Vault releases payment to the provider. Client retrieves results off-chain using the CID."
  };

  return map[step];
}
