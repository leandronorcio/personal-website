export function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-xl bg-foreground px-4 py-3 text-base font-bold text-background transition-all hover:opacity-90 active:scale-95">
      {children}
    </button>
  );
}
