import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Connect() {
  return (
    <section
      id="connect"
      aria-labelledby="connect-heading"
      className="page-container py-20 sm:py-28"
    >
      <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 sm:px-10 sm:py-14">
        <div aria-hidden="true" className="absolute right-0 top-0 h-56 w-56 -translate-y-1/2 translate-x-1/2 rounded-full border border-[var(--color-accent)]/30" />
        <div aria-hidden="true" className="absolute right-10 top-10 h-28 w-28 rounded-full border border-[var(--color-border)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold text-[var(--color-accent)]">Contact details</p>
          <h2 id="connect-heading" className="mt-3 max-w-[10ch] text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
            Let&apos;s build what lasts.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="max-w-[50ch] text-lg leading-7 text-[var(--color-ink-soft)]">
            Open to full-stack and platform engineering opportunities. Reach out directly or find me on LinkedIn.
          </p>

          <ul className="mt-8 grid gap-3">
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-center justify-between gap-4 border border-[var(--color-border)] bg-[var(--color-bg)]/55 p-4 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-xs)] bg-[var(--color-blue-1-soft)] text-[var(--color-blue-1)]"
                  >
                    <Mail aria-hidden="true" size={18} />
                  </span>
                  <span className="text-base font-semibold text-[var(--color-ink)]">{site.email}</span>
                </div>
                <ArrowUpRight aria-hidden="true" size={19} className="text-[var(--color-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>

            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border border-[var(--color-border)] bg-[var(--color-bg)]/55 p-4 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-xs)] bg-[var(--color-blue-5-soft)] text-[var(--color-blue-5)]">
                    <Linkedin aria-hidden="true" size={18} />
                  </span>
                  <span className="text-base font-semibold text-[var(--color-ink)]">linkedin.com/in/ashi-gupta-se</span>
                </span>
                <ArrowUpRight aria-hidden="true" size={19} className="flex-none text-[var(--color-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          </ul>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
