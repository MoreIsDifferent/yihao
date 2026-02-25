"use client";

import { getSocialIcon } from "./Icons";
import { SocialLink } from "@/types";

interface SocialIconProps {
  link: SocialLink;
  size?: "sm" | "md";
}

export function SocialIcon({ link, size = "md" }: SocialIconProps) {
  const Icon = getSocialIcon(link.icon);
  const sizeClass = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--text-secondary)] transition-all duration-200 hover:bg-accent-soft hover:text-accent dark:hover:bg-accent/10"
    >
      <Icon className={sizeClass} />
    </a>
  );
}
