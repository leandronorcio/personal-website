export function ButtonOutline({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-xl border-2 border-border px-4 py-3 text-base font-bold text-foreground transition-all hover:border-foreground active:scale-95">
      {children}
    </button>
  );
}
