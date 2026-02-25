"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/data/site-data";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader title="Practice Experience" />
        <div className="space-y-8">
          {siteData.practiceExperience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <span className="text-sm text-[var(--text-secondary)]">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {item.role}
                {item.location && ` · ${item.location}`}
              </p>
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
