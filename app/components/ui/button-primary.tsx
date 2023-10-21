export function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button className="group relative overflow-hidden rounded-xl bg-foreground px-3 py-2 text-sm font-bold text-background transition-all active:scale-95 sm:px-4 sm:py-3 sm:text-base">
      {children}
      <div className="absolute left-0 top-0 z-10 h-full w-full origin-right scale-x-0 rounded-xl bg-secondary/20 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"></div>
    </button>
  );
}

/**
 * 11/x Personal website

Since the buttons are still boring, I added this sliding  hover effect using only Tailwind.

It's simply an absolute div inside the button with the same border radius that scales up its width from left to right when hovered, then scales down on mouse leave.
 */
