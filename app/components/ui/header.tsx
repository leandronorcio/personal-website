import { cn } from '~/lib/cn';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export function Header({ children, ...rest }: HeaderProps) {
  return (
    <div className="flex justify-start">
      <div>
        <h1 className={cn('font-serif', rest.className)}>{children}</h1>
        <div
          className="h-2 rounded-xl bg-primary transition-transform"
          style={{
            clipPath: 'polygon(100% 20%, 0% 80%, 100% 100%)',
          }}
        ></div>
      </div>
    </div>
  );
}
