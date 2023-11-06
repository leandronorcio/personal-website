export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[88px] flex flex-col items-center justify-center px-4 pb-6 pt-2 sm:px-5 sm:pt-5">
      <div className="max-w-2xl">{children}</div>
    </div>
  );
}
