"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = 'IDLE' | 'TASK_PUBLISHED' | 'PROVIDER_RACE' | 'DOCKER_EXECUTION' | 'IPFS_UPLOAD' | 'RESPONSE_SUBMITTED' | 'VAULT_SETTLEMENT';

const ASSETS = {
  enterprise: "https://ogpu-site.vercel.app/Images/laptop.png",
  datacenter: "https://ogpu-site.vercel.app/Images/datacenter-icon.png",
  cloud: "https://ogpu-site.vercel.app/Images/cloud.png",
  mining_rig: "https://ogpu-site.vercel.app/Images/GPU_Mining_Frame.png",
  laptop: "https://ogpu-site.vercel.app/Images/laptop.png",
};

// Timeline configuration
const STEP_CONFIG = {
  TASK_PUBLISHED: { duration: 5000, wait: 2500, label: "Lock Payment" },
  PROVIDER_RACE: { duration: 3000, wait: 2500, label: "Provider Race" },
  DOCKER_EXECUTION: { duration: 6000, wait: 2500, label: "Execute Task" },
  IPFS_UPLOAD: { duration: 4000, wait: 2500, label: "Store Result" },
  RESPONSE_SUBMITTED: { duration: 3500, wait: 2500, label: "Submit Proof" },
  VAULT_SETTLEMENT: { duration: 4000, wait: 3000, label: "Release Reward" },
};

const STEP_ORDER: Step[] = ['IDLE', 'TASK_PUBLISHED', 'PROVIDER_RACE', 'DOCKER_EXECUTION', 'IPFS_UPLOAD', 'RESPONSE_SUBMITTED', 'VAULT_SETTLEMENT'];

const TOOLTIPS: Record<string, string> = {
  VAULT: "Smart contract that locks client payment in escrow until task completion is verified",
  NEXUS: "OpenGPU's routing protocol that broadcasts tasks and coordinates provider selection",
  DOCKER: "Isolated container environment ensuring secure, reproducible computation",
  IPFS: "InterPlanetary File System - decentralized storage for task results",
  CID: "Content Identifier - cryptographic hash used as a storage key for IPFS data",
  L1: "OpenGPU's Layer 1 blockchain where all transactions are recorded on-chain"
};

export default function CenteredRoutingDemo() {
  const [step, setStep] = useState<Step>('IDLE');
  const [subStatus, setSubStatus] = useState("");
  const [mounted, setMounted] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0); 
  const [meshSync, setMeshSync] = useState(0);        
  const [settleSync, setSettleSync] = useState(0);
  const [showFinalReward, setShowFinalReward] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [rewardDelivered, setRewardDelivered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number; placement?: string }>({ x: 0, y: 0 });
  const [clickedTooltip, setClickedTooltip] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // RANDOMIZATION & SCANNING STATES
  const [winnerIndex, setWinnerIndex] = useState(4);
  const [flickerIndex, setFlickerIndex] = useState<number | null>(null);

  // Preload images
  useEffect(() => {
    const imageUrls = Object.values(ASSETS);
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) setImagesLoaded(true);
      };
      img.src = url;
    });
  }, []);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setClickedTooltip(null);
    };
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const OGPU_BLUE = "#0A84FF";
  const OGPU_CYAN = "#00C6FF";
  const VAULT_GREEN = "#10B981";
  const BG_COLOR = "#ffffff";
  const DARK_BG = "#0A0F2C";
  const SANS_FONT = "var(--font-geist-sans), sans-serif";
  const MONO_FONT = "var(--font-geist-mono), monospace";

  const HUB_X = isMobile ? 500 : 585; 
  const HUB_Y = 160; 
  const PATH_START_X = isMobile ? 80 : 120; 
  const BC_Y = HUB_Y + 180; 

  const providers = useMemo(() => {
    const categories: (keyof typeof ASSETS)[] = ['enterprise', 'datacenter', 'cloud', 'mining_rig', 'datacenter', 'enterprise', 'cloud', 'mining_rig', 'datacenter'];
    const startX = isMobile ? 750 : 850; 
    const gap = isMobile ? 130 : 140;
    
    return categories.map((type, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      return { 
        id: i, 
        type, 
        x: startX + (col * gap), 
        y: (HUB_Y - 120) + (row * 120), 
        size: isMobile ? 60 : 55, 
        url: ASSETS[type] 
      };
    });
  }, [isMobile]);

  const winner = providers[winnerIndex]; 

  const runSequence = (setter: (v: number) => void, duration: number) => {
    const start = performance.now();
    return new Promise((resolve) => {
      const animate = (time: number) => {
        const elapsed = time - start;
        const p = Math.min(elapsed / duration, 1);
        setter(p);
        if (p < 1 && !isSkipping) requestAnimationFrame(animate);
        else { setter(1); resolve(null); }
      };
      requestAnimationFrame(animate);
    });
  };

  const runSimulation = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setIsSkipping(false);
    setAnimationComplete(false);
    setRewardDelivered(false);
    setWinnerIndex(Math.floor(Math.random() * providers.length));
    setShowFinalReward(false);
    
    setStep('TASK_PUBLISHED');
    setSubStatus("VAULT: LOCKING PAYMENT ON-CHAIN...");
    await runSequence(setSyncProgress, STEP_CONFIG.TASK_PUBLISHED.duration);
    if (!isSkipping) await new Promise(r => setTimeout(r, STEP_CONFIG.TASK_PUBLISHED.wait));
    
    setStep('PROVIDER_RACE');
    setSubStatus("NEXUS: STARTING PROVIDER SPEED RACE...");
    const flickerInt = setInterval(() => {
      setFlickerIndex(Math.floor(Math.random() * providers.length));
    }, 150);
    await runSequence(setMeshSync, STEP_CONFIG.PROVIDER_RACE.duration);
    clearInterval(flickerInt);
    setFlickerIndex(null);
    if (!isSkipping) await new Promise(r => setTimeout(r, STEP_CONFIG.PROVIDER_RACE.wait));
    
    setStep('DOCKER_EXECUTION');
    setSubStatus("DOCKER: RUNNING SECURE COMPUTATION...");
    if (!isSkipping) await new Promise(r => setTimeout(r, STEP_CONFIG.DOCKER_EXECUTION.duration + STEP_CONFIG.DOCKER_EXECUTION.wait));
    
    setStep('IPFS_UPLOAD');
    setSubStatus("IPFS: SAVING RESULT TO STORAGE LOCKER...");
    if (!isSkipping) await new Promise(r => setTimeout(r, STEP_CONFIG.IPFS_UPLOAD.duration + STEP_CONFIG.IPFS_UPLOAD.wait));
    
    setStep('RESPONSE_SUBMITTED');
    setSubStatus("L1: SUBMITTING STORAGE KEY (CID)...");
    await runSequence((v) => setMeshSync(1 - v), STEP_CONFIG.RESPONSE_SUBMITTED.duration);
    if (!isSkipping) await new Promise(r => setTimeout(r, STEP_CONFIG.RESPONSE_SUBMITTED.wait));

    setStep('VAULT_SETTLEMENT');
    setSubStatus("SUCCESS: VAULT RELEASING REWARDS...");
    await runSequence(setSettleSync, 4000);
    if (!isSkipping) await new Promise(r => setTimeout(r, 500));
    setShowFinalReward(true);
  };

  const resetAnimation = () => {
    setStep('IDLE');
    setSyncProgress(0);
    setMeshSync(0);
    setSettleSync(0);
    setShowFinalReward(false);
    setAnimationComplete(false);
    setRewardDelivered(false);
    setIsSkipping(false);
    setIsRunning(false);
    setClickedTooltip(null);
    setTimeout(() => runSimulation(), 200);
  };

  const handleTooltipClick = (term: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (clickedTooltip === term) {
      setClickedTooltip(null);
      return;
    }
    
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = 288;
    const tooltipHeight = 140;
    const bottomSafeZone = 250;
    
    let x = rect.left + rect.width / 2;
    let y = rect.top;
    let placement = 'above';
    
    if (x + tooltipWidth / 2 > viewportWidth - 16) {
      x = viewportWidth - tooltipWidth / 2 - 16;
    } else if (x - tooltipWidth / 2 < 16) {
      x = tooltipWidth / 2 + 16;
    }
    
    const spaceAbove = rect.top;
    const spaceBelow = viewportHeight - rect.bottom;
    
    if (rect.bottom > viewportHeight - bottomSafeZone) {
      placement = 'above';
      y = rect.top;
    }
    else if (spaceAbove < tooltipHeight + 20 || spaceBelow > spaceAbove) {
      placement = 'below';
      y = rect.bottom;
    }
    
    setTooltipPosition({ x, y, placement });
    setClickedTooltip(term);
  };

  const renderStatusWithTooltips = (status: string) => {
    const parts = status.split(/(:|\(|\))/);
    return parts.map((part, i) => {
      const trimmed = part.trim();
      if (TOOLTIPS[trimmed]) {
        return (
          <span key={i} className="inline-flex items-center gap-1">
            <span>{part}</span>
            <button
              className="inline-flex items-center justify-center w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
              onClick={(e) => handleTooltipClick(trimmed, e)}
              aria-label={`More info about ${trimmed}`}
              tabIndex={0}
            >
              <small>i</small>
            </button>
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  if (!mounted) return null;

  const currentStepIndex = STEP_ORDER.indexOf(step);
  const isPulsating = (step === 'TASK_PUBLISHED' && syncProgress > 0.95) || 
                      (step === 'RESPONSE_SUBMITTED' && meshSync < 0.05) ||
                      step === 'PROVIDER_RACE';

  return (
    <div 
      style={{ backgroundColor: BG_COLOR, fontFamily: SANS_FONT }} 
      className="min-h-screen text-slate-900 p-2 md:p-4 flex flex-col items-center justify-center antialiased overflow-hidden"
      onClick={() => setClickedTooltip(null)}
    >
      <style>{`
        @keyframes swivel-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .swivel-pulsing {
          animation: swivel-pulse 1.2s ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
      `}</style>
      
      <AnimatePresence>
        {clickedTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              left: `${tooltipPosition.x}px`,
              top: tooltipPosition.placement === 'below' 
                ? `${tooltipPosition.y}px`
                : `${Math.max(20, tooltipPosition.y - 130)}px`,
              transform: tooltipPosition.placement === 'below' 
                ? 'translate(-50%, 10px)' 
                : 'translate(-50%, 0)',
              zIndex: 9999,
              maxHeight: 'calc(100vh - 40px)',
              overflowY: 'auto'
            }}
            className="bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl max-w-xs border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-1" style={{ color: OGPU_CYAN }}><strong>{clickedTooltip}</strong></div>
            <div className="text-slate-200 leading-relaxed"><small>{TOOLTIPS[clickedTooltip]}</small></div>
            <div className="text-slate-400 mt-2 italic"><small>Tap anywhere to close</small></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-end mb-8 px-6 text-center md:text-left gap-4">
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div style={{ fontFamily: MONO_FONT }} className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 tracking-[0.2em] uppercase border border-emerald-200 italic">
              <motion.span 
                className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <small>Live Mainnet</small>
            </div>
            <a 
              href="https://ogpuscan.io" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontFamily: MONO_FONT, color: OGPU_BLUE }}
              className="inline-flex items-center gap-1 uppercase tracking-wider transition-colors hover:opacity-80"
            >
              <small>Explorer →</small>
            </a>
          </div>
          <h2 className="leading-tight mt-3 mb-4">
            <span style={{ color: DARK_BG }}>Routing </span>
            <span className="bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] bg-clip-text text-transparent">
              Layer
            </span>
          </h2>
          <p className="text-slate-600 max-w-xl">
            Watch real-world task distribution on OpenGPU's Layer 1 blockchain
          </p>
        </div>
        <div className="flex gap-3">
          {!imagesLoaded && (
            <div className="flex items-center gap-2 text-slate-500">
              <motion.div 
                className="w-4 h-4 border-2 border-slate-300 border-t-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <small>Loading...</small>
            </div>
          )}
          <button 
            onClick={runSimulation} 
            disabled={!imagesLoaded || (step !== 'IDLE' && !animationComplete) || isRunning}
            className="px-10 md:px-14 py-4 md:py-5 bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] text-white rounded-lg uppercase hover:opacity-90 transition-all duration-250 shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label={step === 'IDLE' ? "Start task simulation" : animationComplete ? "Task completed" : "Task in progress"}
          >
            <small>{!imagesLoaded ? "Loading..." : step === 'IDLE' ? "Trigger Task" : animationComplete ? "Completed" : "Processing"}</small>
          </button>
        </div>
      </div>

      {step !== 'IDLE' && !animationComplete && (
        <div className="w-full max-w-7xl mb-6 px-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between gap-2 md:gap-4">
              {Object.entries(STEP_CONFIG).map(([stepName, config], idx) => {
                const isComplete = currentStepIndex > idx + 1;
                const isCurrent = currentStepIndex === idx + 1;
                return (
                  <div key={stepName} className="flex items-center gap-2 md:gap-4 flex-1">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div 
                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all ${
                          isComplete ? 'bg-emerald-500' : isCurrent ? 'ring-4 ring-blue-100' : 'bg-slate-200'
                        }`}
                        style={isCurrent ? { backgroundColor: OGPU_BLUE } : {}}
                      >
                        {isComplete ? (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className={`${isCurrent ? 'text-white' : 'text-slate-400'}`}><small>{idx + 1}</small></span>
                        )}
                      </div>
                      <span style={{ fontFamily: MONO_FONT }} className={`uppercase tracking-wider text-center ${
                        isCurrent ? 'text-blue-600' : isComplete ? 'text-emerald-600' : 'text-slate-400'
                      }`}>
                        <small>{config.label}</small>
                      </span>
                    </div>
                    {idx < Object.keys(STEP_CONFIG).length - 1 && (
                      <div className={`h-0.5 flex-1 transition-all ${isComplete ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="relative w-full aspect-[4/3.2] md:aspect-[21/10] max-w-7xl border border-slate-200 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-sm bg-white">
        
        <svg 
          viewBox={isMobile ? "25 0 1050 550" : "0 0 1200 450"} 
          className="w-full h-full p-2 md:p-8 relative z-10" 
          preserveAspectRatio="xMidYMid meet"
          style={{ willChange: step !== 'IDLE' ? 'transform, opacity' : 'auto' }}
        >
          <defs>
            <filter id="ogpu-glow"><feGaussianBlur stdDeviation="4" /><feComposite in="SourceGraphic" operator="over" /></filter>
          </defs>

          <g filter="url(#ogpu-glow)">
            {step === 'TASK_PUBLISHED' && (
              <>
                <line x1={PATH_START_X} y1={HUB_Y} x2={PATH_START_X + ((HUB_X - PATH_START_X) * syncProgress)} y2={HUB_Y} stroke={OGPU_BLUE} strokeWidth={isMobile ? "7" : "5"} strokeLinecap="round" />
                {syncProgress < 1 && <circle cx={PATH_START_X + ((HUB_X - PATH_START_X) * syncProgress)} cy={HUB_Y} r={isMobile ? 9 : 6} fill={OGPU_BLUE} />}
              </>
            )}

            {step === 'VAULT_SETTLEMENT' && (
              <>
                <line x1={HUB_X} y1={HUB_Y} x2={HUB_X - ((HUB_X - PATH_START_X) * settleSync)} y2={HUB_Y} stroke={VAULT_GREEN} strokeWidth={isMobile ? "7" : "5"} strokeLinecap="round" />
                <circle cx={HUB_X - ((HUB_X - PATH_START_X) * settleSync)} cy={HUB_Y} r={isMobile ? 9 : 6} fill={VAULT_GREEN} />
              </>
            )}
            
            {(step === 'PROVIDER_RACE' || step === 'DOCKER_EXECUTION' || step === 'IPFS_UPLOAD' || step === 'RESPONSE_SUBMITTED') && (
              <>
                <line 
                  x1={HUB_X} y1={HUB_Y} 
                  x2={HUB_X + ((winner.x - HUB_X) * meshSync)} 
                  y2={HUB_Y + ((winner.y - HUB_Y) * meshSync)} 
                  stroke={step === 'RESPONSE_SUBMITTED' ? VAULT_GREEN : OGPU_CYAN} 
                  strokeWidth={isMobile ? "7" : "5"} strokeLinecap="round" 
                />
                <circle cx={HUB_X + ((winner.x - HUB_X) * meshSync)} cy={HUB_Y + ((winner.y - HUB_Y) * meshSync)} r={isMobile ? 10 : 6} fill={BG_COLOR} stroke={step === 'RESPONSE_SUBMITTED' ? VAULT_GREEN : OGPU_CYAN} strokeWidth="3" />
              </>
            )}

            {(step === 'VAULT_SETTLEMENT') && (
              <>
                <line x1={HUB_X} y1={HUB_Y} x2={HUB_X} y2={HUB_Y + ((BC_Y - HUB_Y) * settleSync)} stroke={VAULT_GREEN} strokeWidth={isMobile ? "7" : "5"} strokeLinecap="round" />
                {settleSync < 1 && (
                  <circle cx={HUB_X} cy={HUB_Y + ((BC_Y - HUB_Y) * settleSync)} r={isMobile ? 9 : 6} fill={VAULT_GREEN} />
                )}
              </>
            )}
          </g>

          <g transform={`translate(${isMobile ? 30 : 60}, ${HUB_Y - 50})`}>
            <image href={ASSETS.laptop} width={isMobile ? 135 : 120} height={isMobile ? 125 : 110} />
            {step === 'VAULT_SETTLEMENT' && settleSync > 0.95 && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <text x={isMobile ? 67 : 60} y="-25" textAnchor="middle" fontSize={isMobile ? 24 : 14} fill={VAULT_GREEN} fontWeight="black" style={{ fontFamily: MONO_FONT }} className="uppercase italic tracking-tighter">
                  ● JOB_COMPLETED
                </text>
                <motion.circle cx={isMobile ? 67 : 60} cy="55" r={isMobile ? 12 : 10} fill={VAULT_GREEN} animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
              </motion.g>
            )}
          </g>
          
          <g transform={`translate(${HUB_X}, ${HUB_Y})`}>
            <AnimatePresence>
              {(step === 'IPFS_UPLOAD' || step === 'RESPONSE_SUBMITTED') && (
                <motion.g initial={{ opacity: 0, scale: 0.5, y: 10 }} animate={{ opacity: 1, scale: 1, y: -105 }} exit={{ opacity: 0, scale: 0.5 }}>
                  <circle r={isMobile ? 36 : 20} fill={OGPU_CYAN} />
                  <text textAnchor="middle" y={isMobile ? 8 : 6} fontSize={isMobile ? 22 : 12} fontWeight="900" fill="white" style={{ fontFamily: MONO_FONT }} className="tracking-tighter">IPFS</text>
                  <motion.circle r={isMobile ? 36 : 20} stroke={OGPU_CYAN} strokeWidth={isMobile ? 6 : 4} fill="none" animate={{ scale: [1, 1.5], opacity: [0.7, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
                </motion.g>
              )}
            </AnimatePresence>
            <image 
              href="https://ogpu-site.vercel.app/Images/swivel.png" 
              x={isMobile ? -45 : -40} 
              y={isMobile ? -45 : -40} 
              width={isMobile ? 90 : 80} 
              height={isMobile ? 90 : 80}
              className={isPulsating ? "swivel-pulsing" : ""}
            />
          </g>

          <g>
            {providers.map((p, i) => {
              const isActive = i === winnerIndex && (step === 'DOCKER_EXECUTION' || step === 'IPFS_UPLOAD' || step === 'RESPONSE_SUBMITTED' || step === 'VAULT_SETTLEMENT');
              const isScanning = i === flickerIndex;
              const boxSize = isMobile ? 100 : 90;
              return (
                <g key={i}>
                  <motion.rect 
                    x={p.x - (boxSize/2)} y={p.y - (boxSize/2)} width={boxSize} height={boxSize} rx="15" 
                    fill={isScanning ? OGPU_CYAN : "black"} 
                    fillOpacity={isScanning ? 0.15 : 0.03} 
                    stroke={isScanning ? OGPU_CYAN : "black"} 
                    strokeOpacity={isScanning ? 0.6 : 0.05} 
                    animate={isScanning ? { scale: 1.05 } : { scale: 1 }}
                  />
                  <motion.image 
                    href={p.url} x={p.x - (p.size / 2)} y={p.y - (p.size / 2)} 
                    width={isActive ? p.size * 1.4 : p.size} 
                    height={isActive ? p.size * 1.4 : p.size} 
                    animate={isActive ? { filter: "drop-shadow(0 0 10px rgba(10,132,255,0.4))" } : isScanning ? { scale: 1.2 } : {}} 
                    transition={{ duration: 0.2 }} 
                  />
                  {isActive && (
                    <motion.text x={p.x} y={p.y - (isMobile ? 70 : 55)} textAnchor="middle" fontSize={isMobile ? 22 : 12} fill={step === 'DOCKER_EXECUTION' ? OGPU_CYAN : VAULT_GREEN} fontWeight="black" style={{ fontFamily: MONO_FONT }} className="uppercase tracking-tighter italic">
                      {step === 'DOCKER_EXECUTION' && "● SECURE_DOCKER"}
                      {step === 'IPFS_UPLOAD' && "● IPFS_LOCKER"}
                      {step === 'RESPONSE_SUBMITTED' && "● KEY_SUBMITTED"}
                      {step === 'VAULT_SETTLEMENT' && rewardDelivered && "● REWARD_RECEIVED"}
                    </motion.text>
                  )}
                </g>
              );
            })}
          </g>

          <g transform={`translate(${HUB_X - (isMobile ? 100 : 90)}, ${BC_Y})`}>
            <rect x="0" y="0" width={isMobile ? 200 : 180} height={isMobile ? 120 : 100} rx="16" 
              fill="#f8fafc" 
              stroke={step === 'VAULT_SETTLEMENT' && settleSync > 0.95 ? '#10b981' : '#e2e8f0'} 
              strokeWidth="1.5" />
            
            <g transform={`translate(${isMobile ? 12 : 12}, ${isMobile ? 12 : 12})`}>
              {Array.from({ length: 24 }).map((_, i) => {
                const col = i % 8;
                const row = Math.floor(i / 8);
                const blockSize = isMobile ? 18 : 15;
                const gap = isMobile ? 6 : 5;
                return (
                  <motion.rect
                    key={i}
                    x={col * (blockSize + gap)}
                    y={row * (blockSize + gap)}
                    width={blockSize}
                    height={blockSize}
                    rx="2"
                    fill="#cbd5e1"
                    animate={step !== 'IDLE' ? { 
                      opacity: [0.3, 1, 0.3], 
                      fill: step === 'VAULT_SETTLEMENT' && settleSync > 0.95 ? "#10b981" : OGPU_CYAN
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity, delay: (i % 8) * 0.1 }}
                  />
                );
              })}
            </g>
            
            <text x={isMobile ? 12 : 12} y={isMobile ? 108 : 85} fontSize={isMobile ? 10 : 7} fill="#94a3b8" fontWeight="bold" fontFamily={MONO_FONT} className="uppercase italic tracking-wider">
              Parallel_L1
            </text>
            <text x={isMobile ? 188 : 168} y={isMobile ? 108 : 85} fontSize={isMobile ? 10 : 7} 
              fill={step === 'VAULT_SETTLEMENT' && settleSync > 0.95 ? '#059669' : '#94a3b8'} 
              fontWeight="bold" fontFamily={MONO_FONT} className="uppercase italic tracking-wider" textAnchor="end">
              {step === 'VAULT_SETTLEMENT' && settleSync > 0.95 ? 'Settling' : 'Active'}
            </text>
          </g>

          <AnimatePresence>
            {step === 'VAULT_SETTLEMENT' && settleSync > 0.99 && showFinalReward && (
              <motion.g 
                initial={{ x: HUB_X, y: BC_Y + 45, opacity: 0 }} 
                animate={{ x: winner.x, y: winner.y, opacity: 1 }} 
                transition={{ duration: 2, ease: "anticipate" }}
                onAnimationComplete={() => {
                  setRewardDelivered(true);
                  setAnimationComplete(true);
                  setIsRunning(false);
                }}
              >
                <circle r={isMobile ? 30 : 20} fill={VAULT_GREEN} />
                <text textAnchor="middle" y={isMobile ? 12 : 7} fontSize={isMobile ? 32 : 22} fill="#fff" fontWeight="900" style={{ fontFamily: SANS_FONT }}>$</text>
              </motion.g>
            )}
          </AnimatePresence>
        </svg>

        {/* FIXED GRADIENT OVERLAY - INCREASED HEIGHT ON MOBILE */}
        <div className="absolute bottom-0 inset-x-0 h-64 md:h-40 bg-gradient-to-t from-white via-white/95 flex flex-col items-center justify-end px-4 md:px-6 pb-2 md:pb-6 text-left z-20">
          <div className="w-full max-w-6xl space-y-1 md:space-y-2">
            {rewardDelivered && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-2 md:mb-3 p-2 md:p-4 bg-blue-50 border border-blue-200 rounded-xl"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 md:gap-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-blue-900 text-xs md:text-sm" style={{ fontFamily: MONO_FONT }}>
                      This routing happens on mainnet right now
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={resetAnimation}
                      style={{ backgroundColor: DARK_BG }}
                      className="px-2 md:px-3 py-1 md:py-1.5 hover:opacity-90 text-white rounded-lg transition-all duration-250 uppercase tracking-wider border border-white/8 focus:outline-none focus:ring-2 focus:ring-slate-400 text-xs"
                    >
                      Watch Again
                    </button>
                    <a 
                      href="https://ogpuscan.io" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ backgroundColor: OGPU_BLUE }}
                      className="px-2 md:px-3 py-1 md:py-1.5 hover:opacity-90 text-white rounded-lg transition-all duration-250 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs"
                    >
                      Explore
                    </a>
                    <a 
                      href="https://docs.opengpu.network" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ backgroundColor: OGPU_CYAN }}
                      className="px-2 md:px-3 py-1 md:py-1.5 hover:opacity-90 text-white rounded-lg transition-all duration-250 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-cyan-400 text-xs"
                    >
                      Build
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-slate-100 pb-1 md:pb-2 gap-1">
              <span style={{ fontFamily: MONO_FONT, color: OGPU_BLUE }} className="uppercase tracking-[0.15em] md:tracking-[0.4em] italic text-xs">
                OpenGPU Mainnet
              </span>
              <span style={{ fontFamily: MONO_FONT }} className="text-slate-400 uppercase tracking-[0.1em] md:tracking-[0.2em] italic text-xs truncate">
                {renderStatusWithTooltips(subStatus)}
              </span>
            </div>
            <h4 style={{ fontFamily: SANS_FONT }} className="text-slate-800 tracking-tight leading-tight text-sm md:text-base">
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
    IDLE: "Protocol active on mainnet. Providers are registered, containers are ready, and the OpenGPU L1 is processing live tasks.",
    TASK_PUBLISHED: "Client publishes a task. Payment is locked in escrow via the Vault contract.",
    PROVIDER_RACE: "Nexus broadcasts the task. Registered providers compete under the selected delivery method.",
    DOCKER_EXECUTION: "The claiming provider executes the workload inside a secure, client-defined Docker container.",
    IPFS_UPLOAD: "Task complete. The resulting data is stored in decentralized locker storage via an IPFS CID.",
    RESPONSE_SUBMITTED: "The provider submits response metadata and the result CID on-chain for protocol verification.",
    VAULT_SETTLEMENT: "Final verification complete. The Vault releases rewards to the provider and output to the client."
  };
  return map[step];
}