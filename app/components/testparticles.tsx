"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Particles to disable SSR (client-side only)
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

const ParticlesTest = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Particles Background */}
      <Particles
        id="particles"
        options={{
          background: {
            color: {
              value: "#000000", // Black background for particles
            },
          },
          particles: {
            color: {
              value: "#00E9FF", // Cyan particle color
            },
            links: {
              color: "#00E9FF", // Link color between particles
              distance: 100,
              enable: true,
            },
            move: {
              enable: true,
              speed: 0.5, // Slow particle movement
              direction: "none", // Random direction
              random: true,
              straight: false,
            },
            size: {
              value: 3, // Smaller particle size
            },
            number: {
              density: {
                enable: true,
                value_area: 500, // Set density of particles
              },
              value: 50, // Number of particles
            },
          },
        }}
        className="absolute inset-0 z-0" // Ensure particles are behind the content
      />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <h1 className="text-white text-4xl">Particles Test</h1>
      </div>
    </div>
  );
};

export default ParticlesTest;
