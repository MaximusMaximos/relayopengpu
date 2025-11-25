"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import RenderPipeline from "../components/RenderPipeline";

export default function RenderingVFX() {
  return (
    <>
      <Nav />

      <main className="min-h-screen w-full bg-[#030711] text-white pt-32 pb-24">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rendering and VFX
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            High performance distributed GPU compute for 3D rendering, CGI, animation and film production.
          </p>
        </section>

        {/* THREE CARDS */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-24">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/[0.08] transition">
            <h3 className="text-xl font-semibold mb-3">3D Rendering</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Accelerate complex scenes, ray tracing, lighting passes and batch rendering.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/[0.08] transition">
            <h3 className="text-xl font-semibold mb-3">Game Asset Creation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Speed up mesh baking, texturing, photogrammetry, and procedural asset pipelines.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/[0.08] transition">
            <h3 className="text-xl font-semibold mb-3">CGI and VFX</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Distribute FX sims, compositing passes and multi-frame rendering workloads.
            </p>
          </div>
        </section>

        {/* ANIMATION */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Render Pipeline
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">
            OGPU routes rendering jobs across global nodes to reduce queue times and deliver higher
            throughput for studios, animators and VFX pipelines.
          </p>

          <RenderPipeline />
        </section>

        {/* COST SAVINGS */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <h3 className="text-xl font-semibold mb-3">
              60–80 percent Lower Rendering Costs
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Distributed rendering on OGPU delivers predictable and low-cost GPU compute
              without sacrificing performance or scalability.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
