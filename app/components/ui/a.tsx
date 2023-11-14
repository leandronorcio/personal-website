export function A({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
}) {
  return (
    <span className="group relative z-0 inline-block cursor-pointer">
      <a {...rest}>{children}</a>
      <span className="absolute bottom-[1px] block h-[1px] w-full bg-muted-foreground"></span>
      <span className="absolute bottom-[1px] block h-[1px] w-full origin-right scale-x-0 bg-destructive transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"></span>
    </span>
  );
}
