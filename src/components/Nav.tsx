const navItems = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#connect", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border-soft)] bg-[var(--color-bg)]/85 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="page-container flex h-16 items-center justify-between gap-3"
      >
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-bold tracking-tight text-[var(--color-ink)]"
        >
          <span className="grid h-7 w-7 place-items-center rounded-[8px] border border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-xs text-[var(--color-accent)]">
            AG
          </span>
          <span className="hidden sm:inline">Ashi Gupta</span>
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-[var(--radius-xs)] px-2 py-1.5 text-xs font-medium text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)] sm:px-3 sm:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
