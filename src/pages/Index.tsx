const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <main className="flex flex-col items-center gap-8 opacity-0 animate-fade-in">
        {/* Logo / Name */}
        <h1 className="font-display text-6xl font-300 tracking-tight text-foreground sm:text-8xl">
          Quhan<span className="text-accent">.im</span>
        </h1>

        {/* Divider */}
        <div className="h-px w-16 bg-border" />

        {/* Tagline */}
        <p className="max-w-md text-center font-body text-sm tracking-widest uppercase text-muted-foreground">
          Design Â· Code Â· Craft
        </p>

        {/* Links */}
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

      {/* Footer */}
      <footer className="absolute bottom-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
          Â© 2026
        </p>
      </footer>
    </div>
  );
};

export default Index;
