"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type MobileSection = "company" | null;

// Disabled desktop card
const DisabledCard: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = "",
  children,
}) => (
  <div className={`relative group cursor-not-allowed opacity-40 select-none ${className}`}>
    {children}
    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition">
      <span className="text-[9px] px-2 py-[1px] rounded-full bg-red-500/20 text-red-300 border border-red-400/40">
        ✕ Coming Soon
      </span>
    </div>
  </div>
);

// Mobile nav item
const MobileNavItem: React.FC<{
  label: string;
  href?: string;
  comingSoon?: boolean;
}> = ({ label, href, comingSoon }) => {
  if (comingSoon || !href) {
    return <p className="text-gray-500 text-sm cursor-not-allowed">{label} (Coming Soon)</p>;
  }
  return (
    <a href={href} className="text-gray-300 text-sm">
      {label}
    </a>
  );
};

export default function Nav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"company" | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MobileSection>(null);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999]">
        <nav
          className="
            w-full px-4 md:px-20 py-3
            bg-[#00040F]/70 backdrop-blur-xl border-b border-[#0A84FF]/40
            grid grid-cols-3 items-center
          "
        >
          {/* LOGO */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="/Images/OGPU-LOGO-Main-final.png"
                className="h-10 md:h-16 w-auto"
                alt="OGPU Logo"
              />
            </a>
          </div>

          {/* CENTER NAV */}
          <div className="hidden lg:flex items-center justify-center text-[15px] text-gray-200 font-semibold">
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("company")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`px-2 py-1 flex items-center gap-1 transition ${
                  openMenu === "company" ? "text-white" : "hover:text-white"
                }`}
              >
                <span className="whitespace-nowrap">Company &amp; News</span>
                <span className="text-[10px] mt-[2px]">▾</span>
              </button>

              {/* COMPANY & NEWS MEGA MENU (UNCHANGED) */}
              <div
                className={`
                  absolute left-1/2 -translate-x-1/2 mt-3 w-[880px]
                  rounded-2xl bg-[#020617] border border-white/10 shadow-xl p-6 
                  grid grid-cols-2 gap-8 z-[999]
                  transition-all duration-220 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${
                    openMenu === "company"
                      ? "opacity-100 visible translate-y-[0px]"
                      : "opacity-0 invisible translate-y-[-10px]"
                  }
                `}
              >
                {/* LEFT: COMPANY */}
                <div className="flex flex-col">
                  <h3 className="text-white text-lg font-semibold mb-2">About the Company</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Learn more about OGPU, mission, contributors, and history.
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href="/about"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <img
                        src="/Images/Nav/Company/about.png"
                        className="w-6 h-6 object-contain"
                        alt="About"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">About OGPU</p>
                        <p className="text-gray-400 text-xs">Mission and story.</p>
                      </div>
                    </a>

                    <DisabledCard className="flex items-start gap-3 p-3 rounded-xl">
                      <img
                        src="/Images/Nav/Company/team.png"
                        className="w-6 h-6 object-contain"
                        alt="Team"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">Team</p>
                        <p className="text-gray-400 text-xs">Core contributors.</p>
                      </div>
                    </DisabledCard>

                    <DisabledCard className="flex items-start gap-3 p-3 rounded-xl">
                      <img
                        src="/Images/Nav/Company/press-media.png"
                        className="w-6 h-6 object-contain"
                        alt="Press"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">Press &amp; Media</p>
                        <p className="text-gray-400 text-xs">Coverage and assets.</p>
                      </div>
                    </DisabledCard>

                    <DisabledCard className="flex items-start gap-3 p-3 rounded-xl">
                      <img
                        src="/Images/Nav/Company/careers.png"
                        className="w-6 h-6 object-contain"
                        alt="Careers"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">Careers</p>
                        <p className="text-gray-400 text-xs">Join the mission.</p>
                      </div>
                    </DisabledCard>

                    <a
                      href="mailto:info@opengpu.network"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                    >
                      <img
                        src="/Images/Nav/Company/contact.png"
                        className="w-6 h-6 object-contain"
                        alt="Contact"
                      />
                      <div>
                        <p className="text-white text-sm font-semibold">Contact OGPU</p>
                        <p className="text-gray-400 text-xs">Reach us directly.</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* RIGHT: NEWS */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3">Latest News</h3>

                  <div className="grid grid-cols-1 gap-4">
                    <a
                      href="https://www.einpresswire.com/article/860150175/ogpu-network-announces-continued-development-of-decentralized-gpu-compute-infrastructure-amid-growing-ai-demand"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
                    >
                      <img
                        src="https://img.einpresswire.com/large/977777/ogpu-network-from-hash-to-compu.jpeg"
                        className="w-full h-24 object-cover"
                        alt="OGPU Press"
                      />
                      <div className="p-3">
                        <p className="text-white text-sm font-semibold">
                          OGPU Network Announces Continued Development
                        </p>
                        <p className="text-gray-400 text-xs">EIN Presswire • 22 Oct 2025</p>
                      </div>
                    </a>

                    <a
                      href="https://fnctn1.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
                    >
                      <img
                        src="https://opengpu.network/image/twitter/dubai-event.png"
                        className="w-full h-24 object-cover"
                        alt="Function 1 Dubai"
                      />
                      <div className="p-3">
                        <p className="text-white text-sm font-semibold">
                          OGPU is heading to Function 1 Dubai
                        </p>
                        <p className="text-gray-400 text-xs">Festival Arena • 18–19 Nov 2025</p>
                      </div>
                    </a>

                    <a
                      href="https://x.com/fatih_ogpu/status/1974115869392240896"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition border border-white/10"
                    >
                      <img
                        src="https://opengpu.network/image/twitter/OGPU-Nosana.png"
                        className="w-full h-24 object-cover"
                        alt="OGPU x Nosana"
                      />
                      <div className="p-3">
                        <p className="text-white text-sm font-semibold">
                          OGPU x Nosana Partnership
                        </p>
                        <p className="text-gray-400 text-xs">New GPUs live on OGPU Network</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CTA + MOBILE */}
          <div className="flex items-center justify-end gap-3">
            <a
              href={pathname === "/" ? "/getstarted" : "/"}
              className="hidden lg:inline-flex px-8 py-3 rounded-xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-[#0A84FF] hover:to-[#00C6FF] transition"
            >
              {pathname === "/" ? "Join the Network" : "Back To Main Site"}
            </a>

            <button
              className="lg:hidden text-white text-3xl"
              onClick={() => setMobileNavOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* MOBILE DRAWER */}
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9999] flex lg:hidden"
            >
              <div className="flex-1 bg-black/40" onClick={() => setMobileNavOpen(false)} />
              <div className="w-[82%] max-w-sm bg-[#020617] border-l border-white/10 flex flex-col">
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <img src="/Images/OGPU-LOGO-Main-final.png" className="h-9" />
                  <button
                    className="text-white text-2xl"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    ✕
                  </button>
                </div>

                <div className="px-5 py-4">
                  <button
                    className="w-full flex items-center justify-between text-white font-semibold py-2"
                    onClick={() =>
                      setMobileSection(mobileSection === "company" ? null : "company")
                    }
                  >
                    Company
                    <span
                      className={`transition-transform ${
                        mobileSection === "company" ? "rotate-90" : ""
                      }`}
                    >
                      ▸
                    </span>
                  </button>

                  <AnimatePresence>
                    {mobileSection === "company" && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="ml-2 flex flex-col gap-2"
                      >
                        <MobileNavItem label="About OGPU" href="/about" />
                        <MobileNavItem label="Team" comingSoon />
                        <MobileNavItem label="Press & Media" comingSoon />
                        <MobileNavItem label="Careers" comingSoon />
                        <MobileNavItem label="Contact" href="mailto:info@opengpu.network" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow bar */}
        <div className="relative w-full h-[1.5px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E9FF] to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[#00E9FF] opacity-40 blur-sm" />
        </div>
      </header>
    </>
  );
}
