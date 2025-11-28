"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxFade = 300;
      const scrolled = window.scrollY;
      setHeroOpacity(Math.max(0, 1 - scrolled / maxFade));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen">

      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          src="/Videos/Hero-Visual-Slow.mp4"
          poster="/Images/hero-poster.jpg"
          style={{
            WebkitUserSelect: "none",
            WebkitTouchCallout: "none",
            WebkitTapHighlightColor: "transparent"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/80 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col h-full">
        <div className="pt-40 md:pt-48 lg:pt-52" />

        <div
          style={{ opacity: heroOpacity, transition: "opacity 0.1s linear" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pb-16 md:pb-20 lg:pb-24"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-[0_0_25px_rgba(0,233,255,0.5)]">
            A Datacenter
            <br />
            Without Walls
          </h1>

          <p className="text-lg md:text-xl text-[#00E9FF] font-semibold mb-5 drop-shadow-md">
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

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">

            <button
              onClick={() => (window.location.href = "/enterprisehome")}
              className="px-12 py-3.5 rounded-xl font-semibold text-white text-base md:text-lg
                         border-[2px] border-[#00E9FF]/80 bg-white/10 backdrop-blur-md
                         transition-all duration-300 hover:-translate-y-1
                         hover:bg-white/20 hover:border-[#00E9FF]
                         shadow-[0_0_25px_rgba(0,233,255,0.20)]
                         hover:shadow-[0_0_40px_rgba(0,233,255,0.45)]"
            >
              Run A Free Enterprise Pilot
            </button>

            <a
              href="/getstarted"
              className="px-10 py-3.5 rounded-xl font-semibold text-white text-base md:text-lg
                         bg-[#00C6E6] border-[2px] border-[#00C6E6]/80
                         transition-all duration-300 hover:-translate-y-1
                         hover:bg-[#00C6E6]/90 hover:border-[#00C6E6]
                         shadow-[0_0_25px_rgba(0,198,230,0.20)]
                         hover:shadow-[0_0_40px_rgba(0,198,230,0.45)]"
            >
              Join the Network →
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
