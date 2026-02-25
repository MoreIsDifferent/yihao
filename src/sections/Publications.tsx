"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/data/site-data";

export function Publications() {
  return (
    <Section id="publications">
      <Container>
        <SectionHeader title="Publications" />
        <div className="space-y-6">
          {siteData.publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                {pub.status && (
                  <span className="shrink-0 rounded-full bg-accent-soft px-3 py-0.5 text-xs font-medium text-accent dark:bg-accent/10">
                    {pub.status}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {pub.authors} ({pub.year}).{" "}
                <em>{pub.venue}</em>.
              </p>
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-accent hover:underline"
                >
                  View paper
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
