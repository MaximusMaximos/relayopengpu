"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CompanyPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-28 pb-24 space-y-16 md:space-y-20">
          {/* HERO */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-center"
            >
              <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
                Company and mission
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold">
                The story behind OpenGPU
              </h1>

              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                OpenGPU is built by people who started with very little but were
                obsessed with one idea. Compute should not belong to a handful of
                companies. It should be an open resource that anyone can reach when
                they want to build, experiment, or ship something new.
              </p>
            </motion.div>
          </section>

          {/* ORIGIN STORY */}
          <section className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                It started with a student and a professor
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Long before OpenGPU existed as a network or a product, it was a
                question in the mind of a young computer scientist. He spent his
                early career inside blockchains and distributed systems, auditing
                protocols, securing smart contracts, and building infrastructure for
                exchanges, launchpads, bridges, and staking platforms across
                multiple chains.
              </p>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                At the same time, an academic researcher and professor was focused
                on distributed algorithms, network theory, and how large systems
                coordinate at scale. When the two started talking, the question
                became clear. If blockchains can coordinate value globally, why are
                we still accepting bottlenecks and lock in for compute.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">
                  Seeing the bottleneck early
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Years before the current wave of AI traffic, it was already clear
                  that centralized clouds would become a choke point. Provisioning
                  delays, rising costs, long queues for GPUs, and a growing gap
                  between those who could secure compute and those who could not.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  The idea that kept returning was simple. If you can tokenize and
                  coordinate value globally, you should also be able to route
                  workloads globally. Compute should not sit idle in silos while
                  builders wait in queues.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-base md:text-lg font-semibold">
                  From research conversations to an architecture
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  From 2017 onward, the student and the professor went back and
                  forth on whiteboards and notes. How do you design a routing layer
                  that can move AI workloads across many independent providers. How
                  do you verify tasks on chain without flooding the ledger. How do
                  you keep costs down while making sure the work is actually done.
                </p>
                <p className="text-xs md:text-sm text-slate-600">
                  The result was not a marketing slogan but an architecture. A
                  purpose built chain, a task protocol, and a way to treat compute
                  as a first class citizen.
                </p>
              </div>
            </motion.div>
          </section>

          {/* GROWTH OF THE TEAM */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                From two people to a growing network of builders
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                OpenGPU did not start with a large office or a big funding
                announcement. It started with a small group of people who were
                willing to work across many roles at once. Engineers, designers,
                lawyers, business developers, researchers, and community builders
                joined step by step as the architecture solidified.
              </p>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Friends became colleagues. Early supporters became long term
                contributors. Investors came in later, once it was clear that this
                was not another short term experiment but a long term infrastructure
                project.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {[
                {
                  title: "Protocol and core engineering",
                  body: "Designing the task engine, blockchain integration, and the routing layer that moves workloads between providers.",
                },
                {
                  title: "Product and operations",
                  body: "Turning the raw protocol into tools that real teams can use, from providers and dApps to enterprises and research groups.",
                },
                {
                  title: "Community and ecosystem",
                  body: "Supporting providers, token holders, partners, and early adopters who build on top of the network.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm"
                >
                  <h3 className="text-sm md:text-base font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </motion.div>
          </section>

          {/* CULTURE AND VALUES */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                Built by people with something to prove
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                Many members of the team started with very little. That is why
                nothing is beneath them. The same people who design protocols are
                happy to spend a full day in support channels, write documentation,
                or jump into a community call to explain the architecture in simple
                language.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-3"
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-sm md:text-base font-semibold">Humble work</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  There is no task that is considered too small. People will clean
                  up broken processes, sit with users, or fix edge cases that no one
                  sees, simply because it makes the network stronger.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-sm md:text-base font-semibold">Long term focus</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Markets move up and down, but the need for open compute is not
                  going away. The team is focused on where the network should be at
                  one hundred, two hundred, five hundred, and one billion in scale,
                  not only at the next price move.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-sm md:text-base font-semibold">
                  Shared upside
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  The goal is not to build a closed company around a single product.
                  It is to grow an ecosystem where builders, providers, and early
                  supporters all share in the value they help create.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm"
            >
              <p className="text-xs md:text-sm text-slate-700">
                When things get difficult, the team does not step back. They lean in.
                The mindset is simple. We were told this would be impossible, so we
                will prove that it is not. If you are in a similar place and trying
                to build something against the odds, we hope our story makes it feel
                a little more possible.
              </p>
            </motion.div>
          </section>

          {/* TEAM AND ADVISORS PREVIEW */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">People behind OGPU</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl">
                OpenGPU is not a single founder story. It is a group of engineers,
                operators, designers, support, and advisors who combine academic
                background, industry experience, and real world shipping.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="grid gap-4 md:grid-cols-2"
            >
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-sm md:text-base font-semibold">
                  Core contributors
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  The core team covers protocol development, security, product,
                  operations, design, growth, and support. Many of them have worked
                  together across multiple projects before OpenGPU and now focus on
                  building this network full time.
                </p>
                <a
                  href="https://opengpu.network/team"
                  className="inline-flex text-xs md:text-sm font-semibold text-sky-600 hover:text-sky-700 mt-1"
                >
                  Meet the team →
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm space-y-2">
                <h3 className="text-sm md:text-base font-semibold">Advisors</h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Strategy, finance, and go to market are supported by advisors with
                  backgrounds in top universities, financial institutions, and
                  commercial operations. They help shape the long term direction of
                  the network and keep it grounded in real world use.
                </p>
                <a
                  href="https://opengpu.network/team#advisors"
                  className="inline-flex text-xs md:text-sm font-semibold text-sky-600 hover:text-sky-700 mt-1"
                >
                  Meet the advisors →
                </a>
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section className="space-y-4 mb-4 md:mb-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-semibold">
                  Build the next chapter with us
                </h3>
                <p className="text-xs md:text-sm text-slate-600 max-w-xl">
                  Whether you are a provider, a builder, a researcher, or an
                  enterprise team, there is a place for you on the network. The
                  mission is simple. Turn idle compute into something the whole world
                  can use.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/enterprisehome"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Explore enterprise options
                </a>
                <a
                  href="mailto:hello@opengpu.network"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-slate-300 bg-white hover:bg-slate-100 transition"
                >
                  Contact the team
                </a>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
