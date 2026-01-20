"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const THEME = {
  primary: "#00A0FF",
  accent: "#00E9FF",
  dark: "#040814"
};


const Icon = {
  close: (className: string) => <span className={className}>✕</span>,
  check: (className: string) => <span className={className}>✓</span>,
  chat: (className: string) => <span className={className}>💬</span>,
};

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
        className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-8 max-w-md w-full shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
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
            <p className="text-slate-400 text-sm">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-4 md:mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4"
                style={{ background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})` }}
              >
                {Icon.chat("w-6 h-6 text-white")}
              </div>
              <h3 className="text-white text-xl md:text-2xl">Talk to Sales</h3>
              <p className="text-slate-400 mt-1 text-sm">We'll respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="text-slate-400 mb-1 block text-sm">Name *</label>
                <input
                  name="FNAME"
                  required
                  disabled={isSubmitting}
                  placeholder="Your name"
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                             placeholder:text-slate-500
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20 
                             transition outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400 mb-1 block text-sm">Work Email *</label>
                <input
                  name="EMAIL"
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                             placeholder:text-slate-500
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20 
                             transition outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400 mb-1 block text-sm">Company *</label>
                <input
                  name="COMPANY"
                  required
                  disabled={isSubmitting}
                  placeholder="Company name"
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                             placeholder:text-slate-500
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20 
                             transition outline-none"
                />
              </div>

              <div>
                <label className="text-slate-400 mb-1 block text-sm">
                  Current Provider
                </label>
                <select
                  name="PROVIDER"
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-xl text-sm transition outline-none
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20"
                  style={{
                    backgroundColor: "#0A1628",
                    color: "#ffffff",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <option value="" style={{ backgroundColor: "#040814", color: "#94a3b8" }}>
                    Select provider
                  </option>
                  <option value="AWS" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    AWS
                  </option>
                  <option value="Google Cloud" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    Google Cloud
                  </option>
                  <option value="Azure" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    Azure
                  </option>
                  <option value="RunPod" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    RunPod
                  </option>
                  <option value="Lambda Labs" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    Lambda Labs
                  </option>
                  <option value="Vast.ai" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    Vast.ai
                  </option>
                  <option value="CoreWeave" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    CoreWeave
                  </option>
                  <option value="Other" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    Other
                  </option>
                  <option value="None" style={{ backgroundColor: "#040814", color: "#ffffff" }}>
                    None / Just starting
                  </option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 mb-1 block text-sm">
                  Monthly GPU Spend (Estimate)
                </label>
                <select
                  name="SPEND"
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-xl text-sm transition outline-none
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
                <label className="text-slate-400 mb-1 block text-sm">Tell us about your workloads</label>
                <textarea
                  name="MESSAGE"
                  rows={3}
                  disabled={isSubmitting}
                  placeholder="What are you running? (inference, training, rendering, etc.)"
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm
                             placeholder:text-slate-500 resize-none
                             focus:border-[#00E9FF]/50 focus:ring-2 focus:ring-[#00E9FF]/20 
                             transition outline-none"
                />
              </div>

              <input type="hidden" name="tags" value="Enterprise Inquiry" />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white py-2.5 md:py-3 rounded-xl transition-all disabled:opacity-70 text-sm md:text-base"
                style={{ 
                  background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})`,
                  boxShadow: `0 0 24px rgba(0,160,255,0.4)`,
                }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 32px rgba(0,160,255,0.5)` }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Get in Touch"}
              </motion.button>

              <button
                type="button"
                onClick={onClose}
                className="w-full md:hidden py-2 text-slate-400 hover:text-white transition-colors text-sm"
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

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <button
        onClick={() => setShowContactForm(true)}
        className="px-8 py-4 rounded-xl border text-white hover:scale-105 transition-transform"
        style={{
          background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})`,
          boxShadow: `0 0 24px rgba(0,160,255,0.4)`,
        }}
      >
        Talk to Sales
      </button>

      <AnimatePresence>
        {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      </AnimatePresence>
    </div>
  );
}