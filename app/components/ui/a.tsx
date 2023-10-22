export function A({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
}) {
  return (
    <div className="group relative z-0 inline-block cursor-pointer">
      <a {...rest}>{children}</a>
      <div className="absolute bottom-[1px] h-[1px] w-full bg-foreground"></div>
      <div className="absolute bottom-[1px] h-[1px] w-full origin-right scale-x-0 bg-primary-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"></div>
    </div>
  );
}
