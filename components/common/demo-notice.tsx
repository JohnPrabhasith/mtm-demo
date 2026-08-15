export function DemoNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="kicker text-muted-foreground">
      Demo content · {children}
    </p>
  );
}
