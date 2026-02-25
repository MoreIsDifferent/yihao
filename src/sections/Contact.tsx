"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialIcon } from "@/components/SocialIcon";
import { MailIcon, CopyIcon, CheckIcon } from "@/components/Icons";
import { siteData } from "@/data/site-data";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteData.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 2000);
    }
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeader title="Contact" subtitle="Feel free to reach out for collaborations or questions." />
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteData.profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <MailIcon className="w-4 h-4" />
              {siteData.profile.email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy email address"
              className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm transition-all duration-200 ${
                copyError
                  ? "border-red-300 bg-red-50 text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
                  : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-accent/30 hover:text-accent"
              }`}
            >
              {copied ? (
                <>
                  <CheckIcon />
                  Copied
                </>
              ) : copyError ? (
                <>
                  <CopyIcon />
                  Failed
                </>
              ) : (
                <>
                  <CopyIcon />
                  Copy
                </>
              )}
            </button>
          </div>

          <div className="mt-6 flex items-center gap-1">
            {siteData.social.map((s) => (
              <SocialIcon key={s.label} link={s} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
