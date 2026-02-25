"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/data/site-data";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeader title="Education" />
        <div className="relative ml-4">
          <div className="absolute top-2 bottom-2 left-0 w-px bg-[var(--border)]" />
          <div className="space-y-10">
            {siteData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 -translate-x-1/2">
                  <div className="h-3 w-3 rounded-full border-2 border-accent bg-[var(--bg)]" />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {edu.years}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                  {edu.degree}, {edu.field}
                </h3>
                <p className="mt-0.5 text-base text-[var(--text-secondary)]">
                  {edu.institution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
