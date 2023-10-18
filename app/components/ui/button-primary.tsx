export function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-xl bg-foreground px-3 py-2 text-sm font-bold text-background transition-all hover:opacity-90 active:scale-95 sm:px-4 sm:py-3 sm:text-base">
      {children}
    </button>
  );
}
