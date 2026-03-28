export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <main className="flex flex-col items-center gap-8 opacity-0 animate-fade-in">
        <h1 className="font-display text-6xl font-light tracking-tight text-foreground sm:text-8xl">
          Quhan<span className="text-accent">.im</span>
        </h1>

        <div className="h-px w-16 bg-border" />

        <p className="max-w-md text-center font-body text-sm tracking-widest uppercase text-muted-foreground">
          Design · Code · Craft
        </p>

        <nav className="mt-4 flex gap-8">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-body text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
      </main>

      <footer className="absolute bottom-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
          © 2026
        </p>
      </footer>
    </div>
  );
}
