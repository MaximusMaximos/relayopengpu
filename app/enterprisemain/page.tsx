"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import LiveStats from "../components/LiveStats";

// DESIGN TOKENS
const THEME = {
  primary: "#0A84FF",
  accent: "#00C6FF",
  relay: "#D4872B",
  relayLight: "#E9A54D",
  relayDark: "#1A1008",
  relayGlow: "rgba(212,135,43,0.4)",
  dark: "#040814",
  darkAlt: "#0A1628",
  glow: "#00E9FF",
  cyan: "#00E9FF",
  text: "#ffffff",
  textMuted: "#94a3b8",
  textSubtle: "#64748b",
};

// ANIMATION VARIANTS
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

// ICONS
const Icon = {
  check: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  arrow: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  ),
  chat: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  shield: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  zap: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  globe: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  close: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  clock: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  x: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  server: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  code: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  lock: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
};

// CONTACT FORM MODAL - MOBILE FRIENDLY
function ContactForm({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((v, k) => params.append(k, String(v)));

    const url =
      "https://network.us6.list-manage.com/subscribe/post-json?u=9ca8c44250832e3001ac4aaa8&id=1e9492eb62&" +
      params.toString() +
      "&c=?";

    await fetch(url, { method: "GET", mode: "no-cors" });

    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#040814]/90 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - larger and more visible on mobile */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          {Icon.close("w-5 h-5")}
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            {Icon.check("w-16 h-16 text-[#00E9FF] mx-auto mb-4")}
            <h3 className="text-white mb-2">Message Sent!</h3>
            <p className="text-slate-400 doorway-description">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
              >
                {Icon.chat("w-6 h-6 text-white")}
              </div>
              <h3 className="text-white">Talk to Sales</h3>
              <p className="text-slate-400 mt-1 doorway-description">We'll respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-slate-400 mb-1 block doorway-description">Name *</label>
                <input
                  name="FNAME"
                  required
                  disabled={isSubmitting}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl doorway-description text-white
                             placeholder:text-slate-500
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20 
                             transition outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400 mb-1 block doorway-description">Work Email *</label>
                <input
                  name="EMAIL"
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl doorway-description text-white
                             placeholder:text-slate-500
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20 
                             transition outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400 mb-1 block doorway-description">Company *</label>
                <input
                  name="COMPANY"
                  required
                  disabled={isSubmitting}
                  placeholder="Company name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl doorway-description text-white
                             placeholder:text-slate-500
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20 
                             transition outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400 mb-1 block doorway-description">
                  Monthly GPU Spend (Estimate)
                </label>
                <select
                  name="SPEND"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border rounded-xl doorway-description transition outline-none
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20"
                  style={{
                    backgroundColor: "#0A1628",
                    color: "#ffffff",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <option value="" style={{ backgroundColor: "#040814", color: "#94a3b8" }}>
                    Select range
                  </option>
                  <option value="<5k" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    Less than $5,000
                  </option>
                  <option value="5k-25k" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    $5,000 - $25,000
                  </option>
                  <option value="25k-100k" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    $25,000 - $100,000
                  </option>
                  <option value="100k+" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    $100,000+
                  </option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 mb-1 block doorway-description">Tell us about your workloads</label>
                <textarea
                  name="MESSAGE"
                  rows={3}
                  disabled={isSubmitting}
                  placeholder="What are you running? (inference, training, rendering, etc.)"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl doorway-description text-white
                             placeholder:text-slate-500 resize-none
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20 
                             transition outline-none"
                />
              </div>

              <input type="hidden" name="tags" value="Enterprise Inquiry" />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white py-3 rounded-xl transition-all disabled:opacity-70 doorway-button"
                style={{ 
                  background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})`,
                  boxShadow: `0 0 24px rgba(0,160,255,0.4)`,
                }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 32px rgba(0,160,255,0.5)` }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Get in Touch"}
              </motion.button>

              {/* Mobile-friendly close button at bottom */}
              <button
                type="button"
                onClick={onClose}
                className="w-full md:hidden py-2 text-slate-400 hover:text-white transition-colors doorway-description"
              >
                Cancel
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
// MAIN PAGE
export default function EnterprisePage() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <main className="w-full min-h-screen" style={{ background: THEME.dark }}>
      <Nav />

      <AnimatePresence>
        {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      </AnimatePresence>

      {}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: `${THEME.primary}10` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: `${THEME.accent}10` }}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, transparent 0%, ${THEME.dark}90 100%)`,
          }}
          aria-hidden="true"
        />

        <motion.div 
          className="max-w-5xl mx-auto relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="flex justify-center mb-6"
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full section-label-cyan"
              style={{ 
                background: `${THEME.primary}10`,
                borderColor: `${THEME.primary}30`,
                color: THEME.accent,
              }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full"
                style={{ background: "#4ade80" }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <small>Enterprise GPU Routing</small>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            custom={0.1}
            className="text-white text-center mb-4 md:mb-6"
          >
            <span className="block">Pay for Compute.</span>
            <span
              className="block mt-2"
              style={{
                background: `linear-gradient(135deg, ${THEME.primary} 0%, ${THEME.accent} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Not for Waiting.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="text-center max-w-2xl mx-auto mb-8 md:mb-10 text-white/90 doorway-description"
          >
            Route production AI workloads to global GPU capacity. Per-task billing.
            No intermediaries. No idle costs. 80% cheaper than traditional cloud.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            custom={0.3}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://relay.opengpu.network"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 doorway-button rounded-xl text-white"
              style={{
                background: `linear-gradient(135deg, ${THEME.relayLight}, ${THEME.relay})`,
                boxShadow: `0 0 24px rgba(212,135,43,0.4)`,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 0 36px rgba(212,135,43,0.6)`,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <img src="/Images/Nav/relay.png" alt="" className="w-5 h-5" />
              <span>Start Free</span>
              <span className="group-hover:translate-x-1 transition-transform">
                {Icon.arrow("w-5 h-5")}
              </span>
            </motion.a>

            <motion.button
              onClick={() => setShowContactForm(true)}
              className="group flex items-center gap-3 px-8 py-4 doorway-button rounded-xl border text-white"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
              whileHover={{
                scale: 1.02,
                background: "rgba(255,255,255,0.06)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {Icon.chat("w-5 h-5")}
              <span>Talk to Sales</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {}
      <section className="py-8 md:py-10 px-6 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 md:mb-8">
              <h2 className="text-[#0A0F2C] mb-4">
                Why 80% Lower Cost?
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto doorway-description">
                It's not a discount. It's a different architecture.
              </p>
            </motion.div>

            {/* Cost breakdown visual */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Traditional Cloud */}
              <div 
                className="rounded-2xl p-6 md:p-8 border-2 border-red-100 bg-gradient-to-br from-red-50 to-white shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center shadow-md">
                    {Icon.x("w-6 h-6 text-white")}
                  </div>
                  <h3 className="text-[#0A0F2C]">Traditional Cloud</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="relative h-14 rounded-xl overflow-hidden shadow-inner border border-gray-200">
                    <div className="absolute inset-y-0 left-0 w-[40%] bg-slate-600 flex items-center justify-center">
                      <span className="text-white doorway-description font-medium">Provider</span>
                    </div>
                    <div className="absolute inset-y-0 left-[40%] w-[30%] bg-red-500 flex items-center justify-center">
                      <span className="text-white doorway-description font-medium">Margin</span>
                    </div>
                    <div className="absolute inset-y-0 left-[70%] w-[30%] bg-red-400 flex items-center justify-center">
                      <span className="text-white doorway-description font-medium">Idle</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 doorway-description text-[#475569]">
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        {Icon.x("w-3 h-3 text-red-600")}
                      </div>
                      <span>Pay per hour, even when idle</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        {Icon.x("w-3 h-3 text-red-600")}
                      </div>
                      <span>Cloud provider takes 30-50% margin</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        {Icon.x("w-3 h-3 text-red-600")}
                      </div>
                      <span>Reserved instances or pay premium</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* OpenGPU */}
              <div 
                className="rounded-2xl p-6 md:p-8 border-2 shadow-lg relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${THEME.primary}12, ${THEME.accent}12)`,
                  borderColor: `${THEME.primary}40`,
                }}
              >
                {/* Subtle glow effect */}
                <div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                  style={{ background: `${THEME.accent}` }}
                />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
                    >
                      {Icon.check("w-6 h-6 text-white")}
                    </div>
                    <h3 className="text-[#0A0F2C]">OpenGPU</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative h-14 rounded-xl overflow-hidden shadow-inner border border-cyan-200">
                      <div 
                        className="absolute inset-y-0 left-0 w-[40%] flex items-center justify-center shadow-md"
                        style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
                      >
                        <span className="text-white doorway-description font-medium">Provider Only</span>
                      </div>
                      <div className="absolute inset-y-0 left-[40%] w-[60%] flex items-center justify-center bg-gray-50">
                        <span className="text-gray-400 line-through doorway-description font-medium">You don't pay this</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 doorway-description text-[#475569]">
                      <li className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          {Icon.check("w-3 h-3 text-emerald-600")}
                        </div>
                        <span>Pay per task, not per hour</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          {Icon.check("w-3 h-3 text-emerald-600")}
                        </div>
                        <span>Direct to provider, no intermediary</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          {Icon.check("w-3 h-3 text-emerald-600")}
                        </div>
                        <span>Zero idle costs, ever</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Simple math */}
            <motion.div 
              variants={fadeInUp}
              className="text-center p-6 md:p-8 rounded-2xl border border-gray-200 bg-gray-50"
            >
              <p className="mb-2 doorway-description text-[#475569]">
                The average cloud GPU sits idle <span className="text-[#0A0F2C] font-semibold">70% of the time</span>.
              </p>
              <p className="doorway-description text-[#475569]">
                You're still paying for it. <span style={{ color: THEME.accent }} className="font-semibold">We fixed that.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-8 md:py-10 px-6 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 md:mb-8">
              <h2 className="text-[#0A0F2C] mb-4">How It Works</h2>
              <p className="text-[#475569] max-w-2xl mx-auto doorway-description">
                Three steps. No provisioning. No waiting.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  step: "1",
                  title: "Submit Workload",
                  desc: "Push your container via API or CLI. Specify GPU requirements, timeout, and budget.",
                  icon: Icon.code("w-6 h-6 text-white"),
                },
                {
                  step: "2",
                  title: "Automatic Routing",
                  desc: "Our network finds the fastest, cheapest GPU globally. Providers compete for your task.",
                  icon: Icon.globe("w-6 h-6 text-white"),
                },
                {
                  step: "3",
                  title: "Secure Execution",
                  desc: "Task runs in an isolated container. Results returned. Payment settled. Done.",
                  icon: Icon.shield("w-6 h-6 text-white"),
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={cardVariant}
                  className="relative rounded-2xl p-6 md:p-8 border border-gray-200 bg-white shadow-sm"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
                  >
                    {item.icon}
                  </div>
                  <div 
                    className="absolute top-8 right-8 text-5xl text-gray-200"
                  >
                    {item.step}
                  </div>
                  <h3 className="text-[#0A0F2C] mb-3">{item.title}</h3>
                  <p className="text-[#475569] doorway-description">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-8 md:py-10 px-6 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 md:mb-8">
              <h2 className="text-[#0A0F2C] mb-4">
                In Production Today
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto doorway-description">
                Not a beta. Not a promise. Live on mainnet.
              </p>
            </motion.div>

            {/* Live Stats Component */}
            <motion.div variants={fadeInUp} className="mb-12">
              <LiveStats />
            </motion.div>

            {/* Verify link */}
            <motion.div variants={fadeInUp} className="text-center">
              <a 
                href="https://ogpuscan.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full doorway-description border border-gray-200 bg-white shadow-sm transition-all hover:border-[#00E9FF]/50 hover:shadow-md"
                style={{ color: "#0A0F2C" }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Verify on OGPUScan
                {Icon.arrow("w-4 h-4")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-8 md:py-10 px-6 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 md:mb-8">
              <h2 className="text-[#0A0F2C] mb-4">
                Technical Specifications
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto doorway-description">Built for engineers who need to know the details.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Infrastructure */}
              <motion.div
                variants={cardVariant}
                className="rounded-2xl p-6 border border-gray-200 bg-white shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
                  >
                    {Icon.server("w-5 h-5 text-white")}
                  </div>
                  <h3 className="text-[#0A0F2C]">Infrastructure</h3>
                </div>
                <ul className="space-y-3 doorway-description text-[#475569]">
                  <li className="flex justify-between">
                    <span>GPU Types</span>
                    <span className="text-white">H100, A100, RTX 4090</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Regions</span>
                    <span className="text-white">Global (40+ locations)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Uptime</span>
                    <span className="text-white">99.4% (verified)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Routing Latency</span>
                    <span className="text-white">&lt;2 seconds</span>
                  </li>
                </ul>
              </motion.div>

              {/* Security */}
              <motion.div
                variants={cardVariant}
                className="rounded-2xl p-6 border"
                style={{ 
                  background: "white",
                  border: "1px solid #e5e7eb",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
                  >
                    {Icon.lock("w-5 h-5 text-white")}
                  </div>
                  <h3 className="text-[#0A0F2C]">Security</h3>
                </div>
                <ul className="space-y-3 doorway-description text-[#475569]">
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    Encrypted execution environments
                  </li>
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    Isolated Docker containers
                  </li>
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    No persistent data storage
                  </li>
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    Audit logs available
                  </li>
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    SOC2 Type II (in progress)
                  </li>
                </ul>
              </motion.div>

              {/* Integration */}
              <motion.div
                variants={cardVariant}
                className="rounded-2xl p-6 border"
                style={{ 
                  background: "white",
                  border: "1px solid #e5e7eb",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
                  >
                    {Icon.code("w-5 h-5 text-white")}
                  </div>
                  <h3 className="text-[#0A0F2C]">Integration</h3>
                </div>
                <ul className="space-y-3 doorway-description text-[#475569]">
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    REST API
                  </li>
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    Python SDK
                  </li>
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    Docker support
                  </li>
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    OpenAI-compatible endpoints
                  </li>
                  <li className="flex items-center gap-2">
                    {Icon.check("w-4 h-4 text-emerald-400")}
                    Webhook callbacks
                  </li>
                </ul>
                <a 
                  href="https://docs.opengpu.network" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 doorway-description transition-colors hover:opacity-80"
                  style={{ color: THEME.accent }}
                >
                  View Documentation
                  {Icon.arrow("w-4 h-4")}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-8 md:py-10 px-6 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 md:mb-8">
              <h2 className="text-[#0A0F2C] mb-4">
                Enterprise Ready
              </h2>
              <p className="text-[#475569] max-w-2xl mx-auto doorway-description">
                Everything you need for production workloads at scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "SLAs Available",
                  desc: "99.9% uptime guarantees with financial backing for mission-critical workloads.",
                },
                {
                  title: "Dedicated Support",
                  desc: "Private Slack channel, dedicated account manager, 4-hour response time.",
                },
                {
                  title: "Custom Billing",
                  desc: "Invoicing, purchase orders, net-30/60 terms. No credit card required.",
                },
                {
                  title: "Volume Discounts",
                  desc: "For high-volume or long-term usage, let's discuss tailored arrangements. Talk to sales.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  className="flex gap-4 p-6 rounded-xl border"
                  style={{ 
                    background: "white",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
                  >
                    {Icon.check("w-5 h-5 text-white")}
                  </div>
                  <div>
                    <h4 className="text-[#0A0F2C] mb-1">{feature.title}</h4>
                    <p className="doorway-description text-[#475569]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-8 md:py-10 px-6 md:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 md:mb-8">
              <p className="text-[#475569] mb-8 doorway-description">
                Trusted by the teams building the future of AI
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
                {[
                  { src: "/Images/Partners/nosana.png", alt: "Nosana" },
                  { src: "/Images/Partners/lenaai.png", alt: "Lena AI" },
                  { src: "/Images/Partners/ozakai.png", alt: "Ozak AI" },
                  { src: "/Images/Partners/seeweb.png", alt: "SeeWeb" },
                ].map((logo, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    custom={i * 0.1}
                    className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-8 md:h-10 w-auto object-contain brightness-200 contrast-75"
                      style={{ filter: "brightness(0.8) contrast(1.2) grayscale(0.2)" }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-8 md:py-10 px-6 md:px-8 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="text-center p-8 md:p-12 rounded-3xl border relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${THEME.primary}10, ${THEME.accent}10)`,
              borderColor: `${THEME.primary}30`,
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 blur-3xl opacity-30"
              style={{ background: `radial-gradient(circle at center, ${THEME.accent}40, transparent 70%)` }}
            />
            
            <div className="relative">
              <h2 className="text-white mb-4">
                Stop Paying for Idle GPUs
              </h2>
              <p className="mb-8 max-w-xl mx-auto doorway-description" style={{ color: THEME.textMuted }}>
                Switch to per-task billing. See the difference in your first invoice.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://relay.opengpu.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 
                             text-white doorway-button rounded-xl group"
                  style={{ 
                    background: `linear-gradient(135deg, ${THEME.relayLight}, ${THEME.relay})`,
                    boxShadow: `0 0 24px rgba(212,135,43,0.4)`,
                  }}
                  whileHover={{ scale: 1.02, boxShadow: `0 0 36px rgba(212,135,43,0.6)` }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="/Images/Nav/relay.png" alt="" className="w-5 h-5" />
                  Start Free
                  <span className="group-hover:translate-x-1 transition-transform">
                    {Icon.arrow("w-5 h-5")}
                  </span>
                </motion.a>
                
                <motion.button
                  onClick={() => setShowContactForm(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 
                             doorway-button rounded-xl border bg-white/5"
                  style={{ 
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "white",
                  }}
                  whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Talk to Sales
                </motion.button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 doorway-description" style={{ color: THEME.textMuted }}>
                <span className="flex items-center gap-2">
                  {Icon.check("w-4 h-4 text-emerald-400")}
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  {Icon.check("w-4 h-4 text-emerald-400")}
                  Free tier included
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <div className="py-8 px-6 border-t border-gray-200 bg-white text-center">
        <p className="doorway-description text-[#475569]">
          Need custom SLAs or volume pricing?{" "}
          <button 
            onClick={() => setShowContactForm(true)}
            className="hover:underline"
            style={{ color: THEME.accent }}
          >
            Talk to our team
          </button>
          .
        </p>
      </div>
    </main>
  );
}