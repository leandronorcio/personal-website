export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center justify-center rounded bg-muted px-2 py-1 text-lg text-muted-foreground opacity-90">
      {children}
    </span>
  );
}
