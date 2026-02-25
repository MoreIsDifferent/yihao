"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { siteData } from "@/data/site-data";

export function Research() {
  return (
    <Section id="research">
      <Container>
        <SectionHeader title="Research Interests" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-wrap gap-3"
        >
          {siteData.researchInterests.map((interest) => (
            <motion.div
              key={interest}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Tag label={interest} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
