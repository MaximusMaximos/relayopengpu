"use client";

import React from "react";

export default function NewPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

   {/* ICON CHIP */}
<div
  className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl
             bg-gradient-to-br from-[#0A84FF]/75 to-[#00C6FF]/75
             shadow-inner shadow-[0_4px_14px_rgba(0,150,255,0.25)]
             transition-transform duration-300 hover:scale-110"
>
  <img
    src="/Assets/tbnetwork.png"
    alt="Model serving and inference"
    className="w-6 h-6 object-contain"
  />
</div>

      </div>
    </main>
  );
}
