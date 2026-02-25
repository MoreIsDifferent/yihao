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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>
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
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
