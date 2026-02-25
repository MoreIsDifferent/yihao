interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent transition-colors dark:bg-accent/10 dark:text-accent">
      {label}
    </span>
  );
}
