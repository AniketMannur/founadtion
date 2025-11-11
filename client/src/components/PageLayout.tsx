interface PageLayoutProps {
  children: React.ReactNode;
  showGradient?: boolean;
}

export function PageLayout({ children, showGradient = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      {showGradient && (
        <div className="fixed inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 -z-10" />
      )}
      {children}
    </div>
  );
}
