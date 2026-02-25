"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/data/site-data";

export function Service() {
  return (
    <Section id="service">
      <Container>
        <SectionHeader title="Academic Service" />
        <ul className="space-y-3">
          {siteData.service.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 text-[var(--text-secondary)]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-base">{item.description}</span>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
