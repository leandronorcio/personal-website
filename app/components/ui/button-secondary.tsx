export function ButtonSecondary({ children }: { children: React.ReactNode }) {
  return (
    <button className="group relative overflow-hidden rounded-xl bg-muted/40 px-3 py-2 text-sm font-bold text-foreground transition-all active:scale-95 sm:px-4 sm:py-3 sm:text-base">
      {children}
      <div className="absolute left-0 top-0 z-10 h-full w-full origin-right scale-x-0 rounded-xl bg-secondary/20 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"></div>
    </button>
  );
}
