interface SkillBadgeProps {
  label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3.5 py-1.5 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-sm">
      {label}
    </span>
  );
}
