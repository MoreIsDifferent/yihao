"use client";

import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { siteData } from "@/data/site-data";

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader title="About" />
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            {siteData.profile.bio}
          </p>
        </div>
      </Container>
    </Section>
  );
}
