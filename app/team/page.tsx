"use client";

import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

type CardProps = {
  name: string;
  role: string;
  img: string;
};

const TeamCard: React.FC<CardProps> = ({ name, role, img }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow w-full max-w-[220px] mx-auto">
    <div className="w-full aspect-[3/4] relative overflow-hidden rounded-lg bg-slate-100">
      <Image
        src={img}
        alt={name}
        fill
        className="object-cover"
      />
    </div>

    <div className="mt-3 space-y-1">
      <p className="text-sm font-semibold text-slate-900">{name}</p>
      <p className="text-xs text-slate-600">{role}</p>
    </div>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="space-y-5 scroll-mt-28">
    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
      {title}
    </h2>

    <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2">
      {children}
    </div>
  </section>
);

export default function TeamPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-40 space-y-20">

          {/* INTRO */}
          <section className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              MEET THE OPENGPU TEAM
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold">
                A global team powering the network that powers AI
              </h1>

              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                The OGPU team spans engineering, research, design, marketing,
                partnerships, legal and community. This page introduces the
                people building the decentralized routing layer for AI workloads.
              </p>
            </div>
          </section>

          {/* EXECUTIVE */}
          <Section title="Executive Leadership">
            <TeamCard
              name="Fatih"
              role="CEO & Founder"
              img="/Images/Team/Fatih.png"
            />
            <TeamCard
              name="Ozgun"
              role="COO"
              img="/Images/Team/ozgun.png"
            />
            <TeamCard
              name="Can"
              role="CTO & Research Lead"
              img="/Images/Team/Can.png"
            />
          </Section>

          {/* ENGINEERING LEADERSHIP */}
          <Section title="Engineering Leadership">
            <TeamCard
              name="Fatih (Engineering)"
              role="Software Architect"
              img="/Images/Team/Fatih.png"
            />
          </Section>

          {/* ENGINEERING TEAM */}
          <Section title="Engineering Team">
            <TeamCard name="Kutay" role="Engineering" img="/Images/Team/Kutay.png" />
            <TeamCard name="Anil" role="Engineering" img="/Images/Team/Anil.png" />
            <TeamCard name="Batuhan" role="Engineering" img="/Images/Team/Batuhan.png" />
            <TeamCard name="Ismail" role="Engineering" img="/Images/Team/Ismail.png" />
          </Section>

          {/* BD / LEGAL / INVESTMENTS */}
          <Section title="Business Development, Legal & Investments">
            <TeamCard
              name="Jordi"
              role="Business Development & Legal"
              img="/Images/Team/Jordi.png"
            />
            <TeamCard
              name="Deniz"
              role="Investments & Partnerships"
              img="/Images/Team/Deniz.png"
            />
          </Section>

          {/* MARKETING */}
          <Section title="Marketing, Brand & PR">
            <TeamCard
              name="Maximus"
              role="Head of Digital Marketing & Brand"
              img="/Images/Team/Maximus.png"
            />
            <TeamCard
              name="Onur"
              role="Marketing & PR Operations"
              img="/Images/Team/Onur.png"
            />
          </Section>

          {/* SALES & COMMUNITY */}
          <Section title="Sales & Community">
            <TeamCard
              name="Vincent"
              role="Sales & Provider Onboarding"
              img="/Images/Team/Vincent.png"
            />
            <TeamCard
              name="Peter"
              role="Discord Lead & Technical Support"
              img="/Images/Team/Peter.png"
            />
          </Section>

          {/* DESIGN */}
          <Section title="Design & Creative">
            <TeamCard
              name="Murat"
              role="Lead Designer"
              img="/Images/Team/Murat.png"
            />
            <TeamCard
              name="Ihsan"
              role="Brand & UI Designer"
              img="/Images/Team/Ihsan.png"
            />
          </Section>

          {/* ADVISORS */}
          <Section title="Special Advisors">
            <TeamCard
              name="Deniz"
              role="Advisor – Strategy"
              img="/Images/Team/Deniz.png"
            />
            <TeamCard
              name="Taylan"
              role="Advisor – Finance"
              img="/Images/Team/Taylan.png"
            />
            <TeamCard
              name="Willem"
              role="Advisor – Sales & Marketing"
              img="/Images/Team/Willem.png"
            />
          </Section>

        </div>
      </main>

      <Footer />
    </>
  );
}
