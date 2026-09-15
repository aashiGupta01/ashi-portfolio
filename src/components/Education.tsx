import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/content/site";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="page-container py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold text-[var(--color-accent)]">Education</p>
          <h2 id="education-heading" className="mt-3 max-w-[10ch] text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
            Foundations that keep evolving.
          </h2>
        </Reveal>
        <div className="grid gap-3">
          {education.map((item) => (
            <Reveal key={item.degree} delay={80}>
              <article className="flex flex-col gap-5 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:flex-row sm:items-start sm:p-6">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-[var(--radius-xs)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <GraduationCap aria-hidden="true" size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">{item.degree}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-ink-soft)]">{item.school}</p>
                </div>
                <p className="w-fit rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold text-[var(--color-ink-soft)]">{item.dates}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={150}>
            <div className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Award aria-hidden="true" size={20} className="text-[var(--color-accent)]" />
                <h3 className="text-lg font-bold text-[var(--color-ink)]">Certifications</h3>
              </div>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-[var(--color-ink-soft)] sm:grid-cols-2">
                {certifications.map((certification) => (
                  <li key={certification} className="border-l-2 border-[var(--color-teal)] pl-3">{certification}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}