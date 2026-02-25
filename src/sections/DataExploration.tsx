"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ExternalLinkIcon } from "@/components/Icons";
import { siteData } from "@/data/site-data";

export function DataExploration() {
  const item = siteData.externalLinks[0];
  return (
    <Section id="data-exploration">
      <Container>
        <SectionHeader title="Data" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md max-w-2xl"
        >
          <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          {item.description && (
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              {item.description}
            </p>
          )}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:underline"
          >
            Visit
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
