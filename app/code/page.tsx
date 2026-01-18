"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Livetransactions from "../components/Livetransactions";

// ============================================================================
// DESIGN TOKENS
// ============================================================================

const THEME = {
  primary: "#0A84FF",
  accent: "#00C6FF",
  dark: "#040814",
  darkAlt: "#0A1628",
  glow: "#00E9FF",
  text: "#ffffff",
  textMuted: "#94a3b8",
  textSubtle: "#64748b",
};

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// Animated glow bar
const GlowBar: React.FC = () => (
  <div
    className="relative w-full h-[2px] overflow-hidden mt-[62px]"
    role="presentation"
    aria-hidden="true"
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF] to-transparent"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 0.9, scaleX: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
    />
    <motion.div
      className="absolute inset-0 bg-[#00E9FF] blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    <motion.div
      className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      animate={{ x: ["-100%", "1500%"] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatDelay: 8,
        ease: "linear",
      }}
    />
  </div>
);

// Video background with optimized loading
const VideoBackground: React.FC<{
  prefersReducedMotion: boolean | null;
  onLoad: () => void;
  loaded: boolean;
}> = ({ prefersReducedMotion, onLoad, loaded }) => {
  if (prefersReducedMotion) {
    return (
      <img
        src="/Images/hero-poster.jpg"
        alt=""
        className="w-full h-full object-cover object-center"
        aria-hidden="true"
      />
    );
  }

  return (
    <>
      {/* Loading skeleton */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#040814] via-[#0A1628] to-[#040814]"
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: "none" }}
      >
        {/* Animated gradient pulse while loading */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/Videos/Hero-Visual-Slow.mp4"
        poster="/Images/hero-poster.jpg"
        onLoadedData={onLoad}
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[center_top]
          sm:object-center
          min-h-screen
        "
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      />
    </>
  );
};

// Doorway card component
const DoorwayCard: React.FC<{
  title: string;
  description: React.ReactNode;
  href: string;
  buttonText: string;
  buttonStyle: "primary" | "white" | "teal";
  ariaLabel: string;
}> = ({ title, description, href, buttonText, buttonStyle, ariaLabel }) => {
  const buttonStyles = {
    primary: `
      bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] text-white
      shadow-[0_0_24px_rgba(0,160,255,0.4)]
      hover:shadow-[0_0_36px_rgba(0,160,255,0.6)]
    `,
    white: `
      bg-white text-[#0A0F2C]
      shadow-[0_0_20px_rgba(255,255,255,0.25)]
      hover:shadow-[0_0_32px_rgba(255,255,255,0.45)]
    `,
    teal: `
      bg-gradient-to-r from-[#012A47] via-[#01486F] to-[#007A9F] text-white
      shadow-[0_0_14px_rgba(0,110,160,0.3)]
      hover:shadow-[0_0_24px_rgba(0,110,160,0.5)]
    `,
  };

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="rounded-2xl p-7 bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300 text-sm mb-5">{description}</p>
      <motion.a
        href={href}
        className={`
          inline-flex items-center justify-center w-full rounded-xl px-5 py-3
          text-sm font-semibold transition-all duration-200
          focus:outline-none focus:ring-4 focus:ring-blue-400/50
          ${buttonStyles[buttonStyle]}
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
      >
        {buttonText}
      </motion.a>
    </motion.div>
  );
};

// System status indicator
const SystemStatus: React.FC = () => (
  <motion.div
    className="absolute bottom-6 right-6 hidden lg:block text-right z-20"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 1.5 }}
    aria-hidden="true"
  >
    <div className="text-xs font-mono text-cyan-400/70 tracking-widest flex items-center justify-end gap-2">
      <motion.span
        className="inline-block w-2 h-2 bg-cyan-400 rounded-full"
        animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span>
        SYSTEM STATUS: <span className="text-cyan-400">ONLINE</span>
      </span>
    </div>
    <div className="text-xs font-mono text-white/40 mt-1">
      NODES ACTIVE: <span className="text-white/60">GLOBAL</span>
    </div>
  </motion.div>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function HeroPage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Framer Motion's built-in reduced motion hook
  const shouldReduceMotion = useReducedMotion();

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Check for reduced motion preference + mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const reduceMotion = prefersReducedMotion || shouldReduceMotion;

  return (
    <main>
      {/* Skip to content link */}
      <a
        href="#hero-content"
        className="
          absolute left-[-9999px] z-50
          focus:left-4 focus:top-4
          focus:px-4 focus:py-2
          focus:bg-white focus:text-black
          focus:rounded-lg focus:shadow-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background video with parallax */}
        <motion.div
          className="absolute inset-0 bg-[#040814]"
          style={{ y: reduceMotion ? 0 : videoY }}
        >
          <VideoBackground
            prefersReducedMotion={reduceMotion}
            onLoad={() => setVideoLoaded(true)}
            loaded={videoLoaded}
          />

          {/* Gradient overlays */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom,
                  rgba(0,0,0,0.35) 0%,
                  rgba(0,0,0,0.5) 40%,
                  rgba(0,0,0,0.75) 100%
                )
              `,
            }}
            aria-hidden="true"
          />

          {/* Subtle vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, transparent 0%, rgba(4,8,20,0.4) 100%)`,
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Glow bar */}
        <GlowBar />

        {/* Hero content */}
        <motion.div
          id="hero-content"
          className="relative z-20 flex flex-col min-h-[calc(100vh-64px)]"
          style={{
            opacity: reduceMotion || isMobile ? 1 : contentOpacity,
          }}
        >
          {/* Top spacing - tighter on mobile */}
          <div className="pt-12 md:pt-20 lg:pt-24" />

          {/* Main copy block */}
          <motion.div
            className="flex flex-col items-center text-center w-full mx-auto pb-6 md:pb-14"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6">
              {/* Headline - tighter on mobile */}
              <motion.h1
                variants={fadeInUp}
                custom={0}
                className="
                  text-[2.1rem] sm:text-5xl md:text-6xl lg:text-7xl
                  font-bold uppercase
                  tracking-tight
                  leading-[1.05]
                  text-white
                "
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,0.5)",
                }}
              >
                COMPUTE WITHOUT BOUNDARIES
              </motion.h1>

              {/* Subtitle - shorter on mobile */}
              <motion.h2
                variants={fadeInUp}
                custom={0.1}
                className="
                  mt-3 md:mt-5
                  text-lg sm:text-2xl md:text-4xl lg:text-[2.6rem]
                  font-bold uppercase
                  tracking-wide
                  leading-[1.2]
                  mb-1 md:mb-4
                  mx-auto
                  max-w-4xl
                "
                style={{
                  background: `linear-gradient(135deg, ${THEME.primary} 0%, ${THEME.accent} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 10px rgba(0,200,255,0.3))",
                }}
              >
                {/* Shorter version on mobile, full on desktop */}
                <span className="hidden sm:inline">
                  The global routing layer for AI and{" "}
                  <br className="hidden md:block" />
                  high-performance workloads.
                </span>
                <span className="sm:hidden">
                  The global routing layer for AI workloads.
                </span>
              </motion.h2>

              {/* Live transactions - tighter margins on mobile */}
              <motion.div variants={fadeIn} custom={0.3} className="my-4 md:mb-8">
                <Livetransactions />
              </motion.div>

              {/* Tagline - hidden on mobile, shown on tablet+ */}
              <motion.p
                variants={fadeInUp}
                custom={0.4}
                className="
                  hidden sm:block
                  text-base sm:text-lg md:text-xl
                  text-white/90 font-medium
                  leading-relaxed
                  max-w-2xl mx-auto
                  mb-4 md:mb-5
                "
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
              >
                Route workloads to any GPU, instantly and automatically, at up to{" "}
                <span className="text-cyan-400 font-semibold">80% lower cost</span>{" "}
                than traditional cloud, without vendor lock-in.
              </motion.p>

              {/* Mobile-only condensed tagline */}
              <motion.p
                variants={fadeInUp}
                custom={0.4}
                className="
                  sm:hidden
                  text-sm
                  text-white/80 font-medium
                  leading-relaxed
                  max-w-xs mx-auto
                  mb-3
                "
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
              >
                Any GPU. <span className="text-cyan-400 font-semibold">80% lower cost.</span> No lock-in.
              </motion.p>

              {/* Poetic line - subtle on mobile */}
              <motion.p
                variants={fadeInUp}
                custom={0.5}
                className="
                  text-xs md:text-lg
                  text-gray-400 md:text-gray-300
                  leading-relaxed
                  max-w-3xl mx-auto
                  mb-6 md:mb-10
                "
              >
                <span className="font-semibold italic">A data center without walls.</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Spacer to push cards down */}
          <div className="flex-grow" />

          {/* Doorway cards */}
          <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 md:pb-24 grid gap-4 md:gap-6 md:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.7,
                },
              },
            }}
          >
            {/* Join the Network */}
            <DoorwayCard
              title="Join the Network"
              description={
                <>
                  Join the global network to run workloads efficiently, or contribute your GPU capacity to earn
                  revenue.
                </>
              }
              href="/getstarted"
              buttonText="Get Started →"
              buttonStyle="primary"
              ariaLabel="Get started with OpenGPU network"
            />

            {/* Enterprise */}
            <DoorwayCard
              title="Enterprise Routing"
              description={
                <>
                  The production choice for 100B+ models.{" "}
                  <span className="font-semibold text-white">
                    80% cost reduction • Global routing • Instant access.
                  </span>
                </>
              }
              href="/enterprisemain"
              buttonText="Start Free Trial →"
              buttonStyle="white"
              ariaLabel="Start free trial of enterprise routing"
            />

            {/* Blockchain */}
            <DoorwayCard
              title="Blockchain"
              description="Learn how the OGPU blockchain settles workloads and powers the network's utility model."
              href="/howtobuy"
              buttonText="View Token Guide →"
              buttonStyle="teal"
              ariaLabel="View token guide and blockchain information"
            />
          </motion.div>
        </motion.div>

        {/* Side gradient (desktop) */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background: `linear-gradient(to right, ${THEME.dark} 0%, transparent 15%, transparent 85%, ${THEME.dark} 100%)`,
          }}
          aria-hidden="true"
        />

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${THEME.dark} 0%, transparent 100%)`,
          }}
          aria-hidden="true"
        />

        {/* System status */}
        <SystemStatus />
      </section>
    </main>
  );
}