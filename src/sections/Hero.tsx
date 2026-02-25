"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SocialIcon } from "@/components/SocialIcon";
import { MailIcon, MapPinIcon, DownloadIcon } from "@/components/Icons";
import { siteData } from "@/data/site-data";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  const { profile, social } = siteData;

  return (
    <section id="hero" className="relative flex min-h-[85vh] items-center pt-16">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-8 lg:gap-12 lg:grid-cols-5"
        >
          <div className="lg:col-span-3">
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-widest text-accent"
            >
              {profile.role}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-lg text-[var(--text-secondary)] sm:text-xl"
            >
              {profile.field}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-1 text-base text-[var(--text-secondary)]"
            >
              {profile.department}, {profile.institution}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MailIcon className="w-4 h-4" />
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={profile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <DownloadIcon className="w-4 h-4" />
                Download CV
              </a>
              <div className="flex items-center gap-1">
                {social.map((s) => (
                  <SocialIcon key={s.label} link={s} />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:col-span-2 lg:justify-end"
          >
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-[var(--card-bg)] shadow-lg sm:h-72 sm:w-72">
                <img
                  src={profile.portrait}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 -bottom-3 -z-10 h-64 w-64 rounded-2xl border border-accent/20 sm:h-72 sm:w-72" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
