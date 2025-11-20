"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LiveStats from "./components/LiveStats";
import SafeInput from "./components/SafeInput";

const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

export default function Home() {
  const controls = useAnimation();

  // HERO opacity state
  const [heroOpacity, setHeroOpacity] = React.useState(1);

  // Smooth scroll fade logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const fadeStart = 200;   
      const fadeEnd = 900;     

      if (scrollY < fadeStart) {
        setHeroOpacity(1);
      } else if (scrollY > fadeEnd) {
        setHeroOpacity(0.45);
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setHeroOpacity(1 - progress * 0.55);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseLogos = [
    { src: "/Images/nosana.png", alt: "Nosana" },
    { src: "/Images/lena.png", alt: "Lena AI" },
    { src: "/Images/ozak.png", alt: "Ozak AI" }
  ];

  const logos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 28,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <main className="relative w-full bg-[#040814] text-white">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen">
        {/* Background Video + Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            src="/Videos/MAIN-loop.mp4"
            poster="/Images/hero-poster.jpg"
            style={{
              WebkitUserSelect: "none",
              WebkitTouchCallout: "none",
              WebkitTapHighlightColor: "transparent"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75 pointer-events-none" />
        </div>

  {/* FIXED HEADER */}
  <header className="fixed top-0 left-0 w-full z-[999]">
    <nav className="w-full flex items-center justify-between px-4 md:px-10 py-3 bg-[#00040F]/70 backdrop-blur-xl border-b border-[#0A84FF]/40">
      <div className="flex items-center">
        <img src="/Images/OGPU-LOGO-Main-final.png" alt="OGPU Logo" className="h-10 w-auto md:h-16" />
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-8 text-base text-gray-200 font-medium">
        <a href="#" className="hover:text-white transition">Platform</a>
        <a href="#" className="hover:text-white transition">Solutions</a>
        <a href="#" className="hover:text-white transition">Docs</a>
        <a href="#" className="hover:text-white transition">Company</a>
        {/* GET STARTED = #0A84FF */}
        <a
          href="https://opengpu.network/get-started"
          className="px-8 py-3 rounded-xl font-semibold bg-[#0A84FF] text-white transition hover:bg-[#0A84FF]/90 hover:shadow-[0_8px_25px_rgba(10,132,255,0.35)]"
        >
          Get Started
        </a>
      </div>

      <button
        id="mobile-menu-btn"
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
      >
        
      </button>
    </nav>

    {/* MOBILE MENU */}
    <div
      id="mobile-menu"
      className="md:hidden hidden w-full bg-[#00040F]/95 backdrop-blur-xl border-b border-[#0A84FF]/40 px-6 py-4 flex flex-col gap-4 text-gray-200 text-lg"
    >
      <a href="#" className="hover:text-white transition">Platform</a>
      <a href="#" className="hover:text-white transition">Solutions</a>
      <a href="#" className="hover:text-white transition">Docs</a>
      <a href="#" className="hover:text-white transition">Company</a>
      <a
        href="https://opengpu.network/get-started"
        className="mt-2 px-6 py-3 rounded-xl font-semibold bg-[#0A84FF] text-white transition hover:bg-[#0A84FF]/90"
      >
        Get Started
      </a>
    </div>

    {/* ELECTRIC GLOW BAR */}
   <div className="relative w-full h-[1.5px] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF] to-transparent opacity-80" />
    <div className="absolute inset-0 bg-[#00E9FF] opacity-40 blur-sm" />
  </div>
</header>

  {/* HERO CONTENT */}
  <div className="relative z-20 flex flex-col h-full">
    <div className="pt-40 md:pt-48 lg:pt-52" />

    <div
      style={{ opacity: heroOpacity, transition: "opacity 0.1s linear" }}
      className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pb-16 md:pb-20 lg:pb-24"
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-xl">
        A Datacenter
        <br />
        Without Walls
      </h1>

      <p className="text-lg md:text-xl text-[#00e9ff] font-semibold mb-5 drop-shadow-md">
        A global compute network for AI workloads.
      </p>

      <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mb-6 drop-shadow">
        OGPU routes workloads to the best available GPU capacity across data centers,
        cloud providers and independent operators without splitting jobs.
        This improves performance, reliability and cost efficiency at scale.
      </p>

      <p className="text-base md:text-lg font-semibold text-white mb-10 drop-shadow-lg">
        We do not replace the cloud, we route across it.
      </p>

      {/* HERO BUTTONS */}
      <div className="flex flex-wrap justify-center gap-5">

  {/* PRIMARY CTA — Run an Enterprise Pilot */}
  <button
    onClick={() => (window.location.href = "/enterprisehome")}
    className="px-10 py-3.5 rounded-xl font-semibold text-white text-base md:text-lg 
               bg-[#00C6FF] transition-all duration-300 
               hover:bg-[#00AEE5] hover:shadow-[0_12px_32px_rgba(0,198,255,0.4)] hover:-translate-y-1"
  >
    Run An Enterprise Pilot
  </button>

  {/* SECONDARY CTA — Get Started */}
  <a
    href="https://opengpu.network/get-started"
    className="px-10 py-3.5 rounded-xl font-semibold text-white text-base md:text-lg 
               bg-[#0A84FF] transition-all duration-300 
               hover:bg-[#005DEA] hover:shadow-[0_12px_32px_rgba(10,132,255,0.4)] hover:-translate-y-1"
  >
    Get Started
  </a>

</div>
    </div>
  </div>
</section>


      {/* Live Stats */}
      <LiveStats />

{/* UNIVERSAL QUICK START */}
<section className="w-full bg-[#040814] py-24 px-6 border-t border-white/5">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
        Provider Suite Installer
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Start earning with your GPU resources today. Download the provider suite for your operating system.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* macOS */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)] text-center">
        <img src="/Assets/apple.png" className="w-14 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">macOS</h3>

        <button className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition">
          Download for macOS →
        </button>

        <a href="#" className="block mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">
          View macOS docs →
        </a>
      </div>

      {/* Windows */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)] text-center">
        <img src="/Assets/windows.png" className="w-14 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Windows</h3>

        <button className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A84FF] to-[#00C8FF] text-white font-semibold shadow-[0_10px_24px_rgba(0,160,255,0.35)] hover:shadow-[0_14px_32px_rgba(0,160,255,0.45)] transition">
          Download for Windows →
        </button>

        <a href="#" className="block mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">
          View Windows docs →
        </a>
      </div>

      {/* Linux */}
      <div className="bg-[#0A0F1D] border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,200,255,0.18)]">
        <div className="text-center">
          <img src="/Assets/linux.png" className="w-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Linux</h3>
        </div>

        <p className="text-xs md:text-sm text-gray-400 mb-3">
          Install via CLI:
        </p>

        <pre className="text-xs md:text-sm text-gray-200 bg-black/20 rounded-xl p-4 overflow-x-auto whitespace-pre leading-relaxed mb-6">
{`curl -o provider-install.sh \\
  https://raw.githubusercontent.com/OpenGPU-Network/provider-suite/main/install.sh
chmod +x provider-install.sh
./provider-install.sh`}
        </pre>

        <a href="#" className="block text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition text-center">
          View Linux docs →
        </a>
      </div>

    </div>
  </div>
</section>


{/* GRADIENT TRANSITION */}
<div className="w-full h-15 bg-gradient-to-b from-[#000104] to-white" />



{/* PARTNER SLIDER — FIXED FOR MOBILE PORTRAIT */}
<section className="w-full bg-white py-16 md:py-20 overflow-hidden relative">
  <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0A0F2C] mb-10 leading-tight">
    Trusted by teams building the future of AI infrastructure
  </h2>

  <div className="relative overflow-hidden w-full">
    <div className="flex w-max"> 
      {/* TRACK 1 */}
      <motion.div
        className="flex items-center gap-16 pr-16 flex-none"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {baseLogos.map((logo, i) => (
          <div
            key={`t1-${i}`}
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition flex-none"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-14 object-contain flex-none"
            />
          </div>
        ))}
      </motion.div>

      {/* TRACK 2 (duplicate) */}
      <motion.div
        className="flex items-center gap-16 pr-16 flex-none"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {baseLogos.map((logo, i) => (
          <div
            key={`t2-${i}`}
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition flex-none"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-14 object-contain flex-none"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


     
      {/* ========== SECTION: WHY OGPU ========== */}
<section className="w-full bg-[#F7F9FC] py-16 md:py-20 px-6">

  {/* Image + Text Row */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 md:gap-16 items-center">

    {/* LEFT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <img
        src="/Images/screenmain-transparant.png"
        alt="OGPU Platform Screens"
        className="w-full rounded-xl object-cover"
      />
    </motion.div>

    {/* RIGHT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-xl"
    >
      <span className="text-[#005DEA] font-semibold tracking-wide text-xs md:text-sm uppercase">
        Why OGPU
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3 mb-2 text-[#0A0F2C]">
        Decentralized compute,
      </h2>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 
                     bg-gradient-to-r from-[#005DEA] to-[#00C6FF] bg-clip-text text-transparent">
        built for real AI workloads.
      </h2>

      <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-8">
        AI workloads are outgrowing centralized cloud capacity. OGPU connects GPU providers
        across data centers, clouds and independent operators into one network, routing workloads
        to available capacity. This improves reliability and reduces cost.
      </p>

      {/* CTA — Explore dApp (GRADIENT) */}
      <a
        href="https://management.opengpu.network/"
        className="px-8 py-3.5 rounded-2xl font-semibold text-white text-base md:text-lg 
                   bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                   hover:shadow-[0_12px_32px_rgba(0,160,255,0.35)] 
                   transition-all duration-300 hover:-translate-y-[3px] block text-center"
      >
        Explore dApp
      </a>
    </motion.div>

  </div>

  <div className="h-10" />

{/* CARD GRID */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.45, ease: "easeOut" }}
  className="max-w-7xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
>
  {[
    {
      imgSrc: "/Assets/outlineglobal.png",
      title: "Global Capacity Network",
      text: "Access GPU capacity worldwide. OGPU routes tasks instantly to available compute."
    },
    {
      imgSrc: "/Assets/scaling.png",
      title: "Elastic Scaling",
      text: "On-demand scale inference or fine-tuning instantly. No reservations, queueing or region limits."
    },
    {
      imgSrc: "/Assets/percentage.png",
      title: "Lower Operational Cost",
      text: "Pay only for executed work. Task-based billing cuts idle costs by 60 to 80 percent."
    }
  ].map((card, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-7 md:p-8 flex flex-col border border-gray-100 
                 shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                 transition-all duration-300 ease-out 
                 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]
                 hover:-translate-y-2 hover:scale-[1.02]"
    >

      {/* ICON CHIP */}
      <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                      bg-gradient-to-br from-[#0A84FF] to-[#00C6FF]
                      shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                      transition-transform duration-300 hover:scale-110">
        <img
          src={card.imgSrc}
          alt={card.title}
          className="w-6 h-6 object-contain"
          style={{
            filter: "none",
            WebkitFilter: "none",
            mixBlendMode: "normal"
          }}
        />
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-lg md:text-xl text-[#0A0F2C] mb-2 leading-snug">
        {card.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-base text-[#475569] leading-relaxed">
        {card.text}
      </p>

    </div>
  ))}
</motion.div>

</section>


{/* ========== SECTION: HOW OGPU WORKS ========== */}
<section className="w-full bg-white py-16 md:py-20 px-6 relative overflow-hidden">

  {/* Light gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#F5FAFF] via-white to-[#E6F2FF] opacity-90 pointer-events-none" />

  {/* GRID */}
  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 z-10">

    {/* LEFT SIDE — Fade + slide from LEFT */}
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <span className="text-[#005DEA] font-semibold tracking-wide text-xs md:text-sm uppercase">
        How It Works
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3 mb-2 text-[#0A0F2C]">
        How OGPU connects
      </h2>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 
                     bg-gradient-to-r from-[#005DEA] to-[#00C6FF] bg-clip-text text-transparent">
        your AI to global GPUs.
      </h2>

      <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-8 max-w-lg">
        OGPU automatically routes each workload to the best available GPU across the network,
        balancing speed, reliability and cost with built-in failover and retry.
      </p>

      {/* STEPS */}
      <div className="space-y-6 border-l-2 border-[#00C6FF]/50 pl-6">

        {/* STEP 1 */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-3 text-lg md:text-xl font-semibold text-[#1E293B]">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                             text-white flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
              </svg>
            </span>
            Step 1 · Submit a workload
          </h3>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            You send an AI or rendering task through the dashboard or API. OGPU detects the GPU needed
            and finds the closest and most efficient provider.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-3 text-lg md:text-xl font-semibold text-[#1E293B]">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                             text-white flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Step 2 · Routing and provider selection
          </h3>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            OGPU evaluates all available GPUs across the network and routes the task to the provider 
            that can deliver the fastest results. If a machine becomes unavailable mid–run, the protocol 
            shifts the execution to the next best GPU without interrupting progress.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-3 text-lg md:text-xl font-semibold text-[#1E293B]">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
                             text-white flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.75 3v4.51c0 .45.54.67.85.35l1.4-1.4a.5.5 0 01.7 0l1.4 1.4c.31.32.85.1.85-.35V3m3 18H6a2.25 2.25 0 01-2.25-2.25V9A2.25 2.25 0 016 6.75h12A2.25 2.25 0 0120.25 9v9.75A2.25 2.25 0 0118 21z" />
              </svg>
            </span>
            Step 3 · Execute end to end
          </h3>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            Each task executes on the chosen GPU for consistency. If a provider fails, OGPU seamlessly
            migrates the workload to the next best machine.
          </p>
        </div>

      </div>

      {/* Footer line */}
      <p className="text-sm md:text-base text-[#0A0F2C] font-medium border-t border-gray-200 pt-6 mt-8">
        Single executor by design, with on-chain verification, automatic failover and task-based billing.
      </p>

      {/* CTA */}
      <a
        href="https://ogpuscan.io/"
        className="mt-4 px-10 py-4 rounded-2xl font-semibold text-base md:text-lg text-white
                   bg-gradient-to-r from-blue-700 to-[#00C6FF]
                   shadow-md hover:opacity-95 transition block text-center"
      >
        See real workloads running →
      </a>
    </motion.div>

    {/* RIGHT SIDE — Steps Animation + Icons */}
    <div className="flex flex-col items-center space-y-16">
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full flex flex-col items-center space-y-16"
      >

        {/* NODE 1 */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-[#00C6FF]/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-[#00C6FF]">
              <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
            </svg>
          </div>
          <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
            Submit workload
          </p>
        </motion.div>

        {/* CONNECTOR 1 */}
        <motion.div className="w-[3px] h-24 bg-gradient-to-b from-[#005DEA] to-[#00C6FF] rounded-full relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00C6FF] via-[#00C6FF] to-[#005DEA] opacity-70"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* NODE 2 */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.35 }}
        >
          <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-[#00C6FF]/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-[#00C6FF]">
              <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
            Routing and provider selection
          </p>
        </motion.div>

        {/* CONNECTOR 2 */}
        <motion.div className="w-[3px] h-24 bg-gradient-to-b from-[#005DEA] to-[#00C6FF] rounded-full relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00C6FF] via-[#00C6FF] to-[#005DEA] opacity-70"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </motion.div>

        {/* NODE 3 */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.8 }}
        >
          <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-[#00C6FF]/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                 strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-[#00C6FF]">
              <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M9.75 3v4.51c0 .45.54.67.85.35l1.4-1.4a.5.5 0 01.7 0l1.4 1.4c.31.32.85.1.85-.35V3m3 18H6a2.25 2.25 0 01-2.25-2.25V9A2.25 2.25 0 016 6.75h12A2.25 2.25 0 0120.25 9v9.75A2.25 2.25 0 0118 21z" />
            </svg>
          </div>
          <p className="mt-3 text-xs font-semibold tracking-wide text-[#0A0F2C] uppercase">
            Execute end to end
          </p>
        </motion.div>

      </motion.div>
    </div>

  </div>

  {/* BOTTOM CTA */}
  <motion.div
    className="relative max-w-3xl mx-auto mt-16 text-center z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    <p className="text-sm md:text-base text-[#0A0F2C] mb-4">
      Single executor by design, with on-chain verification, automatic failover and task-based billing.
    </p>

    <button className="px-10 py-4 rounded-2xl font-semibold text-base md:text-lg text-white
                       bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                       shadow-md hover:opacity-95 transition">
      Explore the cost advantage →
    </button>
  </motion.div>

</section>


      {/* BUILT FOR REAL AI WORKLOADS SECTION */}
<section className="w-full bg-[#F6F9FA] py-24 px-6">

  {/* PREMIUM ENTERPRISE WORKLOADS BANNER */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    className="w-full max-w-7xl mx-auto mb-20 rounded-2xl overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
  >
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#0B3C66] to-[#0E5AA8] opacity-95" />

    {/* Soft glow */}
    <div
      className="absolute -top-28 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full
                 bg-[radial-gradient(circle_at_center,rgba(0,168,255,0.28),transparent_70%)]
                 blur-3xl opacity-50"
    />

    {/* Content */}
    <div className="relative z-10 px-8 md:px-10 py-14 md:py-16 text-center text-white">
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
        Built for real AI workloads, not demos.
      </h2>

      <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
        Production grade inference, training, finetuning and generative workloads.
        On demand elasticity and lower cost, powered entirely by decentralized GPUs.
      </p>
    </div>
  </motion.div>

 {/* Workload Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">

  {[
    {
      src: "/Assets/tbnetwork.png",
      title: "Model serving and inference",
      text: "Run LLMs or vision models with predictable performance at any scale. Serve production workloads reliably from pilots to global deployments."
    },
    {
      src: "/Assets/learning.png",
      title: "Training and fine tuning",
      text: "Execute batch or streaming training with elastic allocation. Automatically scale up or down for efficiency and cost control."
    },
    {
      src: "/Assets/magic.png",
      title: "Generative media and 3D",
      text: "Accelerate video, image, audio and 3D generation with high throughput GPU power. Built for agents, creative pipelines and automation."
    },
    {
      src: "/Assets/atom.png",
      title: "Simulation and research",
      text: "Run reinforcement learning, simulations or large scale experiments without limits. Expand capacity instantly as demand grows."
    }
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.12 }}
      className="backdrop-blur-md bg-white/90 border border-gray-200 rounded-2xl p-7 md:p-8 
                 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
    >

      {/* ICON CHIP */}
      <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                      bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
                      shadow-inner shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                      transition-transform duration-300 hover:scale-110
                      [filter:none]">
        <img
          src={item.src}
          alt={item.title}
          className="w-6 h-6 object-contain !invert-0 !brightness-100 !contrast-100"
          style={{ filter: "none" }}
        />
      </div>

      {/* TITLE */}
      <h4 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-3 leading-snug">
        {item.title}
      </h4>

      {/* DESCRIPTION */}
      <p className="text-sm md:text-base text-[#475569] mb-4 leading-relaxed">
        {item.text}
      </p>

      <a className="text-sm font-semibold text-cyan-600 hover:text-blue-600 transition" href="#">
        Learn more →
      </a>

    </motion.div>
  ))}

</div>



  {/* Trust Line */}
  <div className="text-center mt-12 md:mt-16">
    <p className="text-xs md:text-sm text-[#334155] font-medium tracking-wide">
      Trusted by teams running production grade AI and inference workloads today.
    </p>
  </div>

  {/* PIPELINE — unchanged */}
  {/* Model → Routing → Provider → Output */}
</section>


{/* RELAY: ENTERPRISE GATEWAY TO OGPU */}
<section className="relative w-full py-24 px-6 bg-white overflow-hidden text-[#0A0F2C]">

  {/* CENTERED PURE ORANGE GLOW */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
    <div className="w-[350px] h-[350px] rounded-full bg-orange-200/35 blur-[90px] opacity-65" />
  </div>

  {/* HEADER */}
  <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">

    {/* Heading fade only */}
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-3xl md:text-5xl font-semibold leading-tight mb-4"
    >
      Relay, the enterprise gateway to OGPU.
    </motion.h2>

    {/* Subheading fade only */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed"
    >
      Relay unlocks enterprise access to decentralized compute with the same ease as AWS or GCP.
      No wallets. No blockchain interfaces. Just clean cloud workflows.
    </motion.p>

  </div>

  {/* ROUTING DIAGRAM */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="relative max-w-5xl mx-auto mb-24"
  >

    {/* INNER pure glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="absolute w-[160px] h-[160px] rounded-full bg-orange-200/40 blur-[70px] opacity-75"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    {/* Relay core node */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="relative mx-auto w-36 h-36 rounded-3xl bg-gradient-to-br
                 from-white via-[#F7F7F7] to-[#E4E7EB]
                 shadow-[0_0_45px_rgba(255,168,89,0.45)]
                 border border-white/60 flex items-center justify-center"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-70" />
      <p className="relative text-xl font-semibold text-[#0A0F2C] drop-shadow-sm">Relay</p>
    </motion.div>

    {/* Clients label — fade left → right */}
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="absolute top-[50%] left-0 -translate-y-1/2 text-left"
    >
      <p className="text-[#0A0F2C] font-medium">Clients</p>
    </motion.div>

    {/* Providers label — fade right → left */}
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="absolute top-[50%] right-0 -translate-y-1/2 text-right"
    >
      <p className="text-[#0A0F2C] font-medium">Providers</p>
    </motion.div>

    {/* Arrows (unchanged) */}
    <motion.div
      className="absolute top-[50%] left-[14%] -translate-y-1/2 text-cyan-500 text-2xl"
      animate={{ x: [0, 8, 0], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      →
    </motion.div>

    <motion.div
      className="absolute top-[50%] right-[14%] -translate-y-1/2 text-cyan-500 text-2xl"
      animate={{ x: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
    >
      →
    </motion.div>

  </motion.div>

  {/* BOTTOM CARDS — fade UP staggered */}
<div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* Card 1 */}
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
    className="bg-white/80 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
  >

    {/* ICON CHIP */}
    <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                    bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
                    shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                    transition-transform duration-300 hover:scale-110">
      <img
        src="/Assets/bsfillcreditcard2frontfill.png"
        alt="No wallets or tokens"
        className="w-6 h-6 object-contain"
        style={{ filter: "none" }}
      />
    </div>

    <h3 className="text-lg font-semibold mb-3">No wallets or tokens</h3>
    <p className="text-sm text-[#475569]">Relay enables full enterprise compute with fiat billing.</p>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
    className="bg-white/80 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
  >

    {/* ICON CHIP */}
    <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                    bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
                    shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                    transition-transform duration-300 hover:scale-110">
      <img
        src="/Assets/madashboardcustomize.png"
        alt="Unified usage dashboard"
        className="w-6 h-6 object-contain"
        style={{ filter: "none" }}
      />
    </div>

    <h3 className="text-lg font-semibold mb-3">Unified usage dashboard</h3>
    <p className="text-sm text-[#475569]">Clean analytics, logs and tracking in one interface.</p>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
    className="bg-white/80 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
  >

    {/* ICON CHIP */}
    <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
                    bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
                    shadow-[0_4px_14px_rgba(0,150,255,0.25)]
                    transition-transform duration-300 hover:scale-110">
      <img
        src="/Assets/bsplugin.png"
        alt="Drop-in integration"
        className="w-6 h-6 object-contain"
        style={{ filter: "none" }}
      />
    </div>

    <h3 className="text-lg font-semibold mb-3">Drop-in integration</h3>
    <p className="text-sm text-[#475569]">Works with existing workflows without rewrites.</p>
  </motion.div>

</div>


  {/* CTA */}
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
    className="relative z-10 text-center mt-16"
  >
    <a
      href="https://relay.opengpu.network/"
      className="px-12 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition inline-block"
    >
      Request access to Relay →
    </a>
  </motion.div>

</section>





      {/* RELAY TRANSITION SECTION */}
<section className="w-full py-12 bg-white text-center px-6">
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.4 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <h3 className="text-3xl md:text-5xl font-semibold text-[#0A0F2C] leading-snug">
      Relay makes OGPU easy to use.
      <br />
      <span className="bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
 bg-clip-text text-transparent">
        Now let us show who it unlocks value for.
      </span>
    </h3>
  </motion.div>
</section>

{/* ================= SECTION: BUILT FOR EVERYONE ================= */}
<section className="relative w-full bg-[#F7F9FC] py-24 md:py-28 px-6 overflow-hidden">
  
  {/* BACKGROUND MESH */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.20] z-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7CA9D9]" preserveAspectRatio="none">
      <defs>
        <pattern id="mesh" width="160" height="160" patternUnits="userSpaceOnUse">
          <path d="M0 0 L160 160 M160 0 L0 160" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.65" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh)" />
    </svg>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">

    {/* HEADER */}
    <h2 className="text-3xl md:text-5xl font-semibold text-[#0A0F2C] mb-4 leading-tight">
      Built for everyone.
    </h2>

    <p className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed mb-20 md:mb-24">
      A network where everyone can build, contribute and benefit. Developers run models,
      enterprises migrate workloads, researchers scale experiments and providers earn
      from compute. OGPU is the connective layer powering them all.
    </p>

    {/* ROLES */}
    <div className="relative max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

        {/* DEVELOPERS */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
          <motion.div 
            className="relative mb-5"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#00C6FF] shadow-[0_0_20px_6px_rgba(0,198,255,0.45)]" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">Developers</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            Run or experiment instantly without provisioning or DevOps.
          </p>
        </motion.div>

        {/* ENTERPRISES */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} className="flex flex-col items-center">
          <motion.div 
            className="relative mb-5"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#00C6FF] shadow-[0_0_20px_6px_rgba(0,198,255,0.45)]" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">Enterprises</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            Migrate compute seamlessly and reduce operational cost with Relay.
          </p>
        </motion.div>

        {/* RESEARCHERS */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="flex flex-col items-center">
          <motion.div 
            className="relative mb-5"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#00C6FF] shadow-[0_0_20px_6px_rgba(0,198,255,0.45)]" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">Researchers</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            Scale experiments and simulations without GPU wait times.
          </p>
        </motion.div>

        {/* GPU PROVIDERS */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.95 }} className="flex flex-col items-center">
          <motion.div 
            className="relative mb-5"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-[#00C6FF] shadow-[0_0_20px_6px_rgba(0,198,255,0.45)]" />
          </motion.div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A0F2C] mb-2">GPU providers</h3>
          <p className="text-sm md:text-base text-[#475569] max-w-xs leading-relaxed">
            Earn per task with on-chain verification.
          </p>
        </motion.div>

      </div>
    </div>

    {/* TAGLINE */}
    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
      className="text-xs md:text-sm text-[#0F172A] font-medium tracking-wide mt-16 md:mt-20 mb-8">
      The OGPU ecosystem connects everyone through a single global compute network.
    </motion.p>

    {/* 2 COLUMN CTA BLOCK */}
    <div className="relative z-10 max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">

      {/* LEFT — EXPLORE ECOSYSTEM */}
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-[#0A0F2C] mb-3">Explore the OGPU ecosystem</h3>
        <p className="text-sm md:text-base text-[#475569] mb-5">
          Discover workloads, tools, dashboards and open infrastructure powering the global compute network.
        </p>
        <motion.a 
          whileHover={{ scale: 1.04 }} 
          href="#"
          className="inline-block px-8 py-3 rounded-xl font-semibold text-white text-base 
                     bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                     shadow-[0_10px_30px_rgba(0,160,255,0.45)] hover:opacity-95 transition-all">
          Explore ecosystem →
        </motion.a>
      </div>

      {/* RIGHT — JOIN COMMUNITY */}
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-[#0A0F2C] mb-3">Join the OGPU community</h3>
        <p className="text-sm md:text-base text-[#475569] mb-8">
          Be part of a fast-growing global ecosystem. Get updates, help shape the roadmap, and connect with builders.
        </p>

        {/* MAIN CTA */}
        <motion.a 
          whileHover={{ scale: 1.04 }} 
          href="https://t.me/opengpu_network"
          className="inline-block px-8 py-3 rounded-xl font-semibold text-white text-base 
                     bg-gradient-to-r from-[#005DEA] to-[#00C6FF]
                     shadow-[0_10px_30px_rgba(0,160,255,0.45)] hover:opacity-95 transition-all mb-8">
          Join Telegram →
        </motion.a>

        {/* SOCIAL GRID */}
<div className="grid grid-cols-7 gap-4 mt-2">

  <motion.a whileHover={{ scale: 1.08 }} href="https://x.com/OGPU_Network" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/x.png" className="w-6 h-6 invert" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]">X</span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://t.me/opengpu_network" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/telegram.png" className="w-6 h-6" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]">Telegram</span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://discord.com/invite/opengpunetwork" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/discord.png" className="w-6 h-6" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]">Discord</span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://www.tiktok.com/@opengpu.network" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/tiktok.png" className="w-6 h-6 invert" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]">TikTok</span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://www.linkedin.com/company/opengpu" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/linkedin.png" className="w-6 h-6 invert" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]">LinkedIn</span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://instagram.com/opengpu.network" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/instagram.png" className="w-6 h-6" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]">Instagram</span>
  </motion.a>

  <motion.a whileHover={{ scale: 1.08 }} href="https://youtube.com/@opengpunetwork" className="flex flex-col items-center gap-1 group">
    <img src="/Assets/youtube.png" className="w-6 h-6 invert" />
    <span className="text-[11px] text-[#6B7280] group-hover:text-[#0A0F2C]">YouTube</span>
  </motion.a>

</div>

      </div>

    </div>

  </div>
</section>






    {/* BLOCKCHAIN SECTION — SYSTEM BOOT SEQUENCE */}
<section className="relative w-full bg-[#040814] py-28 px-6 overflow-hidden text-white">
  {/* BACKGROUND GRID + GLOW */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 opacity-25">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#12243f]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="chainGrid" width="140" height="140" patternUnits="userSpaceOnUse">
            <path
              d="M0 140H140V0"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chainGrid)" />
      </svg>
    </div>

    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] 
                    rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_70%)]
                    blur-3xl opacity-80" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

    {/* HEADER — slow fade + slight downward entry */}
    <motion.h2
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="text-3xl md:text-5xl font-semibold text-center mb-4 leading-tight"
    >
      The OGPU blockchain
    </motion.h2>

    {/* VERIFIED BADGE — pop in slightly after header */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                 bg-sky-600/20 border border-sky-400/40 backdrop-blur-sm"
    >
      <span className="w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(56,189,248,1)] animate-ping"></span>
      <span className="text-sky-200 text-xs font-semibold tracking-wide uppercase">
        Chain verified
      </span>
    </motion.div>

    {/* DESCRIPTION — soft fade-in */}
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
      className="text-base md:text-lg text-[#7dd3fc] max-w-3xl text-center leading-relaxed mb-12"
    >
      Built for compute, not speculation. OGPU mainnet is a high throughput, EVM compatible
      blockchain powered by Lachesis DAG consensus. Sub second blocks and around ten thousand
      tasks per second, engineered for GPU task routing, on chain verification and settlement.
    </motion.p>

    {/* MAIN VISUAL ROW */}
    <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16 items-center w-full mb-16">

      {/* LEFT — BLOCK GRID BOOTING SYSTEM */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.35 }}
        className="w-full"
      >
        <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-3xl 
                        border border-sky-500/30 bg-gradient-to-b from-[#020617] to-[#020617]
                        shadow-[0_0_60px_rgba(56,189,248,0.35)] px-6 py-8">

          {/* Animated blocks — unchanged */}
          <div className="grid grid-cols-10 sm:grid-cols-14 gap-2.5">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-[5px] bg-sky-400/15 border border-sky-400/25"
                animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.15, 1] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: (i % 20) * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* TPS LABEL */}
          <div className="mt-6 flex items-center justify-between text-xs text-sky-200/90">
            <span className="uppercase tracking-[0.16em]">Parallel task blocks</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              <span>Live verification</span>
            </span>
          </div>
        </div>

        <p className="text-[#7dd3fc] text-xs sm:text-sm tracking-[0.18em] uppercase text-center mt-6">
          Around ten thousand tasks per second visualized in block flows
        </p>
      </motion.div>

      {/* RIGHT — EXPLANATION PANEL */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.45 }}
        className="space-y-7"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase mb-1">
          Purpose built L1
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          A blockchain that treats compute as a first class citizen.
        </h3>
        <p className="text-sm md:text-base text-sky-100/80 leading-relaxed">
          Every transaction can carry task data, provider updates and verification proofs.
          Consensus, execution, and routing are tightly coupled to keep the network in sync
          with real workloads.
        </p>

        {/* Sub features — unchanged */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-7 h-7 rounded-full bg-sky-500/15 flex items-center justify-center border border-sky-400/40">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">EVM compatible</p>
              <p className="text-sm text-sky-100/80">
                Use familiar tooling while targeting a chain optimized for GPU workloads.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 w-7 h-7 rounded-full bg-emerald-500/15 flex items-center justify-center border border-emerald-400/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">On chain proof of execution</p>
              <p className="text-sm text-sky-100/80">
                Tasks are validated, verified, and settled transparently with no manual reconciliation.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* PIPELINE — reveal from bottom */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.5 }}
      className="w-full max-w-5xl mb-16 md:mb-20"
    >
      <div className="w-full bg-gradient-to-r from-blue-600/40 via-cyan-500/30 to-blue-600/40 
                      border border-cyan-400/40 rounded-2xl px-6 md:px-8 py-7 
                      shadow-[0_30px_90px_rgba(37,99,235,0.45)]">

        {/* unchanged inner pipeline content */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-left">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-200 uppercase mb-2">
              On chain verification pipeline
            </p>
            <p className="text-sm text-sky-100/90 max-w-md">
              Submit, route, execute, verify, and settle on chain.
              A unified workflow purpose-built for compute.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-sky-50">
            {["Submit", "Route", "Execute", "Verify", "Settle"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                  <span>{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <motion.span
                    className="text-sky-200/80"
                    animate={{ x: [0, 4, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  >
                    →
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    
    {/* CTA ROW — bottom-to-top final sequence */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.85 }}
      className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <p className="text-sm md:text-base text-sky-100/90 text-center md:text-left max-w-xl">
        Processing millions of verified compute tasks on mainnet.
        Explore live execution on OGPU Scan.
      </p>

      <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
        <motion.a
          href="https://ogpuscan.io/"
          whileHover={{ scale: 1.04 }}
          className="px-7 py-3 rounded-xl font-semibold text-sm md:text-base bg-white 
                     text-[#020617] shadow-[0_10px_30px_rgba(15,23,42,0.7)] 
                     hover:shadow-[0_16px_40px_rgba(15,23,42,0.9)] transition block text-center"
        >
          View OGPU Scan
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.04 }}
          className="px-7 py-3 rounded-xl font-semibold text-sm md:text-base 
                     border border-sky-400/60 text-sky-100 hover:bg-sky-500/10 transition"
        >
          Read the whitepaper
        </motion.button>
      </div>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 1.0 }}
      className="text-xs md:text-sm text-sky-200/80 mt-8 tracking-[0.18em] uppercase text-center"
    >
      Real workloads. Real verification. Real settlement on chain.
    </motion.p>

  </div>
</section>


{/* NEWS & MOMENTUM SECTION */}
<section className="w-full bg-white py-24 md:py-28 px-6">

  {/* HEADER — fade down */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="max-w-7xl mx-auto mb-10 md:mb-12"
  >
    <span className="text-xs font-semibold tracking-[0.15em] text-[#007BFF] uppercase">
      Latest
    </span>

    <h2 className="text-3xl md:text-5xl font-semibold text-[#0A0F2C] mt-2 mb-3 leading-tight">
      News and momentum
    </h2>

    <p className="text-base md:text-lg text-[#475569] max-w-3xl leading-relaxed">
      OGPU momentum across AI and DePIN, tracked by real adoption.
      Product releases, integrations and ecosystem growth in AI and decentralized compute.
    </p>
  </motion.div>

  {/* FILTER TABS — fade up */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="max-w-7xl mx-auto flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10"
  >
    {["Featured", "News", "Events", "Webinars"].map((tab, idx) => (
      <button
        key={tab}
        className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
          idx === 0
            ? "bg-[#2563EB] text-white border-[#2563EB]"
            : "bg-white text-[#0A0F2C] border-gray-300 hover:border-[#2563EB] hover:text-[#2563EB]"
        }`}
      >
        {tab}
      </button>
    ))}
  </motion.div>

  {/* 4-CARD NEWS GRID — staggered fade up */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
    {[
      {
        src: "",
        date: "EIN Presswire · Nov 17, 2025",
        title: "OGPU launches task based layer for AI",
        link: "Learn more →",
      },
      {
        date: "Medium · Nov 17, 2025",
        title: "Nosana and OGPU partner on compute",
        link: "Read article →",
      },
      {
        date: "Update · Nov 17, 2025",
        title: "OGPU Scan hits one million tasks",
        link: "View update →",
      },
      {
        date: "Community · Nov 17, 2025",
        title: "Relay enters pilot phase",
        link: "Read more →",
      },
    ].map((card, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
        className="flex flex-col"
      >
        <div className="w-full h-40 bg-gray-300 rounded-xl animate-pulse mb-4" />
        <p className="text-xs text-[#475569] mb-1">{card.date}</p>
        <h3 className="font-semibold text-lg text-[#0A0F2C] leading-snug mb-2">
          {card.title}
        </h3>
        <a className="text-sm text-[#2563EB] font-medium hover:underline" href="#">
          {card.link}
        </a>
      </motion.div>
    ))}
  </div>

  {/* SMALL SUBLINE — fade in */}
  <motion.p
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="text-sm text-[#475569] max-w-7xl mx-auto mt-6"
  >
    One million plus tasks, over two hundred and thirty providers, live since March 2025.
  </motion.p>

  {/* VIEW ALL LINK — fade in slightly after */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="max-w-7xl mx-auto mt-3"
  >
    <a href="#" className="text-[#2563EB] text-sm font-medium hover:underline">
      View all updates →
    </a>
  </motion.div>

</section>   



{/* FOOTER */}
<footer className="relative w-full bg-[#0A0F2C] text-white pt-30 pb-14 px-6 mt-0">

  {/* OVERLAPPING CTA BANNER */}
<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 mb-40 md:mb-56">
    <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      <div className="relative px-8 md:px-10 py-10 md:py-12 bg-gradient-to-r from-[#071426] via-[#0A2A4A] to-[#0B3C66] text-white">

        {/* Soft glow */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-28 right-10 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.32),transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-24 left-6 w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.24),transparent_70%)] blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">

          <div className="max-w-lg">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
              Benchmark OGPU against any cloud.
            </h3>
            <p className="text-sm md:text-base text-white/85 leading-relaxed">
              Measure inference, training or rendering on distributed GPUs with
              instant elasticity and real world performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/enterprisehome"
              className="px-7 py-4 rounded-xl bg-white text-[#0A0F2C] font-semibold text-base md:text-lg shadow-[0_6px_20px_rgba(255,255,255,0.32)] hover:shadow-[0_10px_28px_rgba(255,255,255,0.42)] transition-all"
            >
              Run a pilot →
            </a>

            <button className="px-7 py-4 rounded-xl border border-white/40 text-white font-semibold text-base md:text-lg hover:bg-white/10 transition-all">
              Developer docs
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>


  {/* MAIN FOOTER GRID */}
  <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-[42%_1fr_1fr_1fr] gap-10 md:gap-14">

    {/* LEFT */}
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-5">
        Compute without walls.<br />
        Route across clouds and providers.
      </h3>

      <div className="flex items-center bg-white/10 rounded-xl p-2 backdrop-blur-sm border border-white/10 max-w-md">
        <SafeInput
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-transparent outline-none text-white placeholder-white/60 px-3 text-sm"
        />
        <button
  className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#005DEA] to-[#00C6FF] 
             font-semibold text-white hover:opacity-90 transition text-sm"
>
  Subscribe
</button>

      </div>

      <p className="text-xs text-white/40 mt-3">
        By subscribing you agree to receive product updates. No spam, unsubscribe anytime.
      </p>
    </div>


    {/* Product */}
    <div>
      <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Product</h4>
      <ul className="space-y-2 text-white/70 text-sm">
        <li><a href="#" className="hover:text-white transition">Relay</a></li>
        <li><a href="#" className="hover:text-white transition">Provider dApp</a></li>
        <li><a href="#" className="hover:text-white transition">OpenNFT</a></li>
        <li><a href="#" className="hover:text-white transition">Takoswap</a></li>
        <li><a href="#" className="hover:text-white transition">Bridge</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Resources</h4>
      <ul className="space-y-2 text-white/70 text-sm">
        <li><a href="#" className="hover:text-white transition">Docs</a></li>
        <li><a href="#" className="hover:text-white transition">Blog</a></li>
        <li><a href="#" className="hover:text-white transition">Status</a></li>
        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
        <li><a href="#" className="hover:text-white transition">Help center</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Company</h4>
      <ul className="space-y-2 text-white/70 text-sm">
        <li><a href="#" className="hover:text-white transition">About</a></li>
        <li><a href="#" className="hover:text-white transition">Careers</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

  </div>


  {/* BOTTOM ROW */}
  <div className="max-w-7xl mx-auto mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-sm text-white/50">

    <div className="flex items-center gap-3">
      <img
        src="/Images/OGPU-LOGO-Main-final.png"
        className="h-20 opacity-90"
        alt="OGPU Logo"
      />
      <span>© Copyright 2025, OGPU Network. All rights reserved.</span>
    </div>

    <div className="flex gap-5 text-white/60">
      <a href="#" className="hover:text-white transition">Terms</a>
      <a href="#" className="hover:text-white transition">Accessibility</a>
      <a href="#" className="hover:text-white transition">Privacy and cookies</a>
    </div>

    <div className="flex items-center gap-4 text-white/70">
      <a href="#" className="hover:text-white transition"><i className="fab fa-facebook"></i></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-youtube"></i></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-x-twitter"></i></a>
    </div>

  </div>

</footer>

    </main>
  );
}
