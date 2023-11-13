import { cn } from '~/lib/cn';

export function Button({
  children,
  className,
  mode = 'primary',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  mode?: 'primary' | 'secondary';
}) {
  const isPrimary = mode === 'primary';
  return (
    <button
      className={cn(
        'group relative z-0 overflow-hidden rounded-xl px-3 py-2 text-sm font-bold transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:px-4 sm:py-3 sm:text-base',
        isPrimary ? 'bg-primary' : 'bg-secondary/70',
      )}
      {...rest}
    >
      <span
        className={cn(
          'relative z-20',
          isPrimary ? 'text-primary-foreground' : 'text-secondary-foreground',
        )}
      >
        {children}
      </span>
      <div
        className={cn(
          'absolute left-0 top-0 z-10 h-full w-full origin-right scale-x-0 rounded-xl transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100',
          isPrimary ? 'bg-primary-accent' : 'bg-muted/30',
        )}
      ></div>
    </button>
  );
}
