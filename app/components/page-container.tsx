export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 flex flex-col items-center justify-center px-5">
      <div className="max-w-2xl">{children}</div>
    </div>
  );
}
