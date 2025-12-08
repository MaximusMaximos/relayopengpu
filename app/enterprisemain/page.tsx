"use client";

import Nav from "../components/Nav";
import { motion } from "framer-motion";

/* ============================
   ANIMATION VARIANTS
============================ */

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const heroVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4
    }
  }
};

const fadeItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const fadeItemSoft = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

/* ============================
   REUSABLE COMPONENTS
============================ */

function WorkloadCard({ label }: { label: string }) {
  return (
    <motion.div
      variants={fadeItemSoft}
      className="p-4 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
    >
      <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
        {label}
      </p>
    </motion.div>
  );
}


export default function Enterprise() {
  return (
    <main className="w-full min-h-screen bg-[#040814] text-white overflow-x-hidden">
      <Nav />

      {/* Background Texture */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* ============================
          SECTION 1: ENTERPRISE HERO
      ============================ */}
      <motion.section
        className="relative z-10 pt-20 md:pt-40 pb-14 px-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center space-y-5">

          {/* TAGLINE */}
          <motion.div
            variants={heroVariant}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00E9FF]/20 bg-[#00E9FF]/10 backdrop-blur-sm mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E9FF] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#00E9FF] uppercase">
              OpenGPU Enterprise
            </span>
          </motion.div>

          {/* MAIN HEADLINE */}
          <motion.h1
            variants={heroVariant}
            className="
              text-4xl md:text-6xl font-semibold 
              leading-[1.1] md:leading-[1.05]
              tracking-tight text-white drop-shadow-2xl
              mx-auto max-w-4xl
            "
          >
            The production choice for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              large-scale compute workloads
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={heroVariant}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            OpenGPU’s global routing layer delivers instant access to compute with up to{" "}
            <span className="text-white font-medium">80 percent lower cost</span> than centralized clouds.
          </motion.p>

          {/* CTA BLOCK */}
          <motion.div
            variants={heroVariant}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-3"
          >
            <a
              href="/get-api-access"
              className="
                 px-8 py-4 
                 bg-gradient-to-r from-[#0A84FF] to-[#00C6FF] 
                 rounded-xl font-semibold 
                 text-white text-center 
                 shadow-[0_0_20px_rgba(0,198,255,0.3)]
                 hover:shadow-[0_0_30px_rgba(0,198,255,0.5)]
                 hover:-translate-y-0.5 transition-all duration-300
               "
            >
              Get API Keys
            </a>

            <a
              href="/enterprisehome"
              className="
                 px-8 py-4
                 border border-white/10 bg-white/5
                 rounded-xl font-semibold text-white text-center
                 hover:bg-white/10 hover:border-white/30 transition-all
               "
            >
              Request Enterprise Access
            </a>
          </motion.div>

          {/* MICROTEXT */}
          <motion.p
            variants={heroVariant}
            className="text-xs text-gray-500 pt-1"
          >
            No credit card required • API-ready in under 60 seconds
          </motion.p>

          {/* Relay Badge */}
          <motion.div
            variants={heroVariant}
            className="flex items-center justify-center gap-2 pt-4 opacity-70"
          >
            <p className="text-[11px] text-gray-400">Routing powered by</p>
            <img
              src="/Images/relay-white.png"
              alt="Relay by OpenGPU"
              className="h-[18px] w-auto"
            />
          </motion.div>

        </div>
      </motion.section>

      {/* ============================
          SECTION 2: WHY OPENGPU
      ============================ */}
      <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.25 }}
  variants={sectionVariant}
>


      
        <div className="max-w-6xl mx-auto text-center space-y-6">

          <motion.h2
            variants={fadeItem}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Why Enterprise Teams Choose OpenGPU
          </motion.h2>

          <motion.p
            variants={fadeItem}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            A global GPU routing layer purpose-built for large-scale AI workloads,
            predictable cost structures, and enterprise requirements.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-5"
          >

            {/* CARD 1 */}
            <motion.div
              variants={fadeItem}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors space-y-3"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00C6FF] shadow-[0_4px_14px_rgba(0,150,255,0.25)]">
                <img src="/Assets/outlineglobal.png" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white">Global Routing Layer</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                OpenGPU selects the optimal GPU across providers worldwide.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fadeItem}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors space-y-3"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00C6FF] shadow-[0_4px_14px_rgba(0,150,255,0.25)]">
                <img src="/Assets/shield.png" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white">Enterprise SLAs</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                99.99 percent uptime, controlled execution environments, client-side RSA-OAEP encrypted secrets, and isolation.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fadeItem}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors space-y-3"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00C6FF] shadow-[0_4px_14px_rgba(0,150,255,0.25)]">
                <img src="/Assets/lightning.png" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white">High Performance</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Optimized for 100B+ parameter workloads with fine-grained resource controls for memory, CPU, and I/O.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              variants={fadeItem}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors space-y-3"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00C6FF] shadow-[0_4px_14px_rgba(0,150,255,0.25)]">
                <img src="/Assets/money.png" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white">80 percent Lower GPU Spend</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Up to 80 percent lower GPU spend by routing across decentralized supply with dual-sink logging support.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* ============================
      TRUST STRIP — CATEGORIES
============================ */}
<motion.section
  className="relative z-10 py-8 px-6 border-t border-white/5 bg-[#030713]/70 backdrop-blur-md"
  variants={sectionVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  <div className="max-w-6xl mx-auto text-center space-y-4">

    {/* Title */}
    <p className="text-xs tracking-widest uppercase text-gray-400">
      Trusted by teams building
    </p>

    {/* Categories */}
    <div className="flex flex-wrap justify-center gap-8 md:gap-14">

      {/* AI Workloads */}
      <div className="flex flex-col items-center space-y-1">
        <img
          src="/Images/ai-workloads.png"
          className="w-7 h-7 opacity-80"
          alt="AI Workloads"
        />
        <p className="text-xs text-gray-400">AI Workloads</p>
      </div>

      {/* AI Agents */}
      <div className="flex flex-col items-center space-y-1">
        <img
          src="/Images/ai-agents.png"
          className="w-7 h-7 opacity-80"
          alt="AI Agents"
        />
        <p className="text-xs text-gray-400">AI Agents</p>
      </div>

      {/* Cloud Infrastructure */}
      <div className="flex flex-col items-center space-y-1">
        <img
          src="/Images/cloud.png"
          className="w-7 h-7 opacity-80"
          alt="Cloud Infrastructure"
        />
        <p className="text-xs text-gray-400">Cloud Infrastructure</p>
      </div>

    </div>

  </div>
</motion.section>


      {/* ============================
          SECTION 3: WORKLOADS
      ============================ */}
      <motion.section
        className="relative z-10 py-14 px-6 border-t border-white/5"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-6">

          <motion.h2
            variants={fadeItem}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Built for Modern Compute Workloads
          </motion.h2>

          {/* GRID WRAPPER */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3"
          >

            {/* ROW 1 */}
            <WorkloadCard label="AI Inference & Real-Time Processing" />
            <WorkloadCard label="Chatbots & Assistants" />
            <WorkloadCard label="AI Agents & Autonomous Workflows" />
            <WorkloadCard label="Large-Scale Model Training" />

            {/* ROW 2 */}
            <WorkloadCard label="High-Performance Computing (HPC)" />
            <WorkloadCard label="Rendering & Visual Compute" />
            <WorkloadCard label="Predictive Analytics & Forecasting" />
            <WorkloadCard label="Batch & Pipeline Workloads" />

            {/* ROW 3 (centered) */}
            <div className="col-span-full flex justify-center gap-3">
              <WorkloadCard label="Real-Time Streaming & Data Pipelines" />
              <WorkloadCard label="Enterprise Container Workflows" />
            </div>

          </motion.div>

        </div>
      </motion.section>

      {/* ============================
          SECTION 4: ARCHITECTURE OVERVIEW
      ============================ */}
      <div className="w-full flex justify-center py-10">
      <img
  src="/Images/ogpu-architecture.svg"
  alt="OpenGPU Routing Architecture"
  className="w-[85%] max-w-[1200px]"
/>
</div>
      {/* ============================
          SECTION 5: API INTEGRATION
      ============================ */}
      <motion.section
        className="relative z-10 py-14 px-6 border-t border-white/5 bg-[#040814]"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-6">

          <motion.h2
            variants={fadeItem}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Integrate with the OpenGPU API
          </motion.h2>

          <motion.p
            variants={fadeItem}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            OpenGPU provides a simple HTTPS API for routing AI workloads. 
            Use direct routing for high-performance models, or submit full 
            container workloads with encrypted environment variables, resource limits, and event sinks.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-5 pt-5 text-left"
          >

            {/* DIRECT ROUTING */}
            <motion.div
              variants={fadeItem}
              className="bg-[#0A0F2C] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A84FF] to-[#00C6FF]" />
              
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-[#00C6FF] font-semibold">Direct Routing (LLM)</p>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">POST /api/direct/chat</span>
              </div>

<pre className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">{`curl -X POST https://relay.opengpu.network/api/direct/chat \\
  -H "X-API-Key: your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-oss:120b",
    "messages": [
      {"role": "user", "content": "Explain diffusion models."}
    ]
  }'`}</pre>

              <p className="text-[11px] text-gray-500 mt-3 border-t border-white/5 pt-2">
                Optimized for low-latency access to 70 to 100B class models.
              </p>
            </motion.div>

            {/* CONTAINER WORKLOAD */}
            <motion.div
              variants={fadeItem}
              className="bg-[#0A0F2C] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#012A47] via-[#01486F] to-[#007A9F]" />
              
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-[#00E9FF] font-semibold">Container Workload</p>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">POST /api/run</span>
              </div>

<pre className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">{`curl -X POST https://relay.opengpu.network/api/run \\
  -H "X-API-Key: your-api-key" \\
  -d '{
    "image": "ghcr.io/company/container:latest",
    "env": {
      "MONGO_URI": "oaep:ENCRYPTED"
    },
    "sinks": {
      "rabbitmq": {
        "url": "oaep:ENCRYPTED",
        "queue_logs": "ogpu-logs"
      }
    }
  }'`}</pre>

              <p className="text-[11px] text-gray-500 mt-3 border-t border-white/5 pt-2">
                Secure execution with RSA-OAEP encrypted secrets, resource controls, and real-time event streaming.
              </p>
            </motion.div>

          </motion.div>

          {/* View Docs CTA */}
          <motion.div
            variants={fadeItem}
            className="pt-5"
          >
            <a
              href="https://relay.opengpu.network/api/docs"
              target="_blank"
              className="text-[#00C6FF] hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              View full API reference 
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeItem}
            className="pt-6"
          >
            <a
              href="/get-api-access"
              className="
                inline-block px-10 py-4 
                bg-gradient-to-r from-[#0A84FF] to-[#00C6FF]
                font-bold rounded-xl text-white shadow-lg
                hover:shadow-[0_0_30px_rgba(0,198,255,0.4)] 
                hover:-translate-y-0.5 transition-all duration-300
              "
            >
              Get API Keys
            </a>

            <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto">
              Enterprise keys include access to direct routing, container workloads, encrypted sinks, resource limits, and event streaming.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* ============================
          SECTION 7: FINAL CTA
      ============================ */}
      <motion.section
        className="relative z-10 py-18 px-6 border-t border-white/5 bg-[#040814]/70 backdrop-blur-sm"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-6">

          <motion.h2
            variants={fadeItem}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Ready to Scale Your AI Infrastructure?
          </motion.h2>

          <motion.p
            variants={fadeItem}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Start routing your workloads through OpenGPU in under 60 seconds.  
            Enterprise keys include direct routing, container execution, encrypted sinks,  
            fine-grained resource controls, and full invoicing support.
          </motion.p>

          <motion.div
            variants={fadeItem}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-3"
          >
            <a
              href="/get-api-access"
              className="
                px-10 py-4 
                bg-gradient-to-r from-[#0A84FF] to-[#00C6FF]
                rounded-xl font-semibold 
                text-white text-center 
                shadow-[0_0_25px_rgba(0,198,255,0.35)]
                hover:shadow-[0_0_35px_rgba(0,198,255,0.55)]
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Get API Keys
            </a>

            <a
              href="/enterprisehome"
              className="
                px-10 py-4 
                border border-white/10 bg-white/5
                rounded-xl font-semibold 
                text-white text-center
                hover:bg-white/10 hover:border-white/30
                transition-all duration-300
              "
            >
              Request Enterprise Access
            </a>
          </motion.div>

          <motion.div
            variants={fadeItem}
            className="flex items-center justify-center gap-2 pt-4 opacity-70"
          >
            <p className="text-xs text-gray-400">Routing powered by</p>
            <img
              src="/Images/relay-white.png"
              alt="Relay by OpenGPU"
              className="h-[18px] w-auto"
            />
          </motion.div>

          <motion.div
            variants={fadeItem}
            className="pt-3 text-xs md:text-sm text-gray-500 space-y-0.5"
          >
            <p>99.99 percent uptime • SLA-backed routing • Secure encrypted workloads</p>
            <p>Live since 2025 • Millions of transactions processed</p>
          </motion.div>

        </div>
      </motion.section>

    </main>
  );
}
