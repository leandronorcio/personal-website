export function ButtonOutline({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-xl border-2 border-border px-3 py-2 text-sm font-bold text-foreground transition-all hover:border-foreground active:scale-95 sm:px-4 sm:py-3 sm:text-base">
      {children}
    </button>
  );
}
