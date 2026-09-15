import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border-soft)] bg-[var(--color-bg)]">
      <div className="page-container flex flex-col items-center justify-between gap-2 py-6 text-xs text-[var(--color-ink-mute)] sm:flex-row">
        <p>
          Copyright {year} {site.name}
        </p>
        <p>Specialist Software Engineer</p>
      </div>
    </footer>
  );
}
