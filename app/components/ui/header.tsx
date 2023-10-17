export function Header({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="font-serif text-2xl">{children}</h1>
      <div
        className="relative z-[-1] h-2 w-full rounded-xl bg-primary transition-transform"
        style={{
          clipPath: 'polygon(100% 20%, 0% 80%, 100% 100%)',
        }}
      ></div>
    </div>
  );
}
