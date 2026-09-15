import {
  Braces,
  Server,
  Boxes,
  Cloud,
  Database,
  Wrench,
} from "lucide-react";
import { skills } from "@/content/site";
import { Reveal } from "./Reveal";

const groupStyles = [
  { icon: Braces, accent: "var(--color-blue-1)", soft: "var(--color-blue-1-soft)" },
  { icon: Server, accent: "var(--color-blue-2)", soft: "var(--color-blue-2-soft)" },
  { icon: Boxes, accent: "var(--color-blue-5)", soft: "var(--color-blue-5-soft)" },
  { icon: Cloud, accent: "var(--color-blue-6)", soft: "var(--color-blue-6-soft)" },
  { icon: Database, accent: "var(--color-blue-3)", soft: "var(--color-blue-3-soft)" },
  { icon: Wrench, accent: "var(--color-blue-4)", soft: "var(--color-blue-4-soft)" },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="page-container py-20 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
        <Reveal>
          <p className="text-base font-semibold text-[var(--color-accent)]">Capabilities</p>
          <h2 id="skills-heading" className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
            Built for the hard parts of software.
          </h2>
          <p className="mt-5 max-w-[34ch] text-lg leading-8 text-[var(--color-ink-soft)]">
            From the request edge to the event stream, every layer gets the same attention to reliability.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {skills.map((group, i) => {
            const style = groupStyles[i % groupStyles.length];
            const Icon = style.icon;
            const isFeature = i === 1 || i === 2;
            return (
              <Reveal key={group.label} delay={i * 70} className={isFeature ? "sm:col-span-2" : ""}>
                <div
                  className="h-full border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_16px_32px_-24px_rgba(59,156,255,0.9)] sm:p-6"
                  style={{ borderTopColor: style.accent, borderTopWidth: "3px" }}
                >
                  <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-xs)] border border-current/25 bg-[var(--color-bg)]"
                      style={{ color: style.accent }}
                    >
                      <Icon aria-hidden="true" size={18} strokeWidth={2} />
                    </span>
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                      {group.label}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="max-w-full break-words rounded-[var(--radius-xs)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm font-semibold leading-5 text-[var(--color-ink)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
