import { cn } from '~/lib/cn';

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
export function Header({ children, ...rest }: HeaderProps) {
  return (
    <div>
      <h1 className={cn('font-serif', rest.className)}>{children}</h1>
      <div
        className="relative z-[-1] h-2 w-full rounded-xl bg-primary transition-transform"
        style={{
          clipPath: 'polygon(100% 20%, 0% 80%, 100% 100%)',
        }}
      ></div>
    </div>
  );
}
