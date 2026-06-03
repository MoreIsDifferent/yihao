"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/data/site-data";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader title="Research Projects" />
        <div className="grid w-full gap-6">
          {siteData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <details className="group block w-full">
                <summary className="block w-full cursor-pointer list-none p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--text-primary)] transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        {project.authors}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-sm font-medium text-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--border)] bg-[var(--card-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </summary>
                <div className="border-t border-[var(--border)] px-6 pb-6 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Abstract
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.abstract}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
