import { experience } from "@/content/site";
import { Reveal } from "./Reveal";

const employerMarks: Record<string, { initials: string; color: string; logo?: string; wide?: boolean }> = {
  Notified: { initials: "N", color: "#f05a28", logo: "/notified-logo.png" },
  "Societe Generale": { initials: "SG", color: "#ef1b2d", logo: "/societe-generale-logo.png" },
  Mindtree: { initials: "M", color: "#314fc7", logo: "/ltimindtree_logo.png" },
};

export function Experience() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-y border-[var(--color-border-soft)] bg-[var(--color-bg-alt)]"
    >
      <div className="page-container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--color-accent)]">Experience</p>
            <h2 id="experience-heading" className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Engineering outcomes, not just systems.
            </h2>
            <p className="mt-5 max-w-[33ch] text-base leading-7 text-[var(--color-ink-soft)]">
              Eight years delivering secure, observable, high-availability software across global platforms.
            </p>
          </Reveal>

          <ol className="relative space-y-10 border-l border-[var(--color-border)] pl-6 sm:pl-9">
            {experience.map((role, idx) => {
              const mark = employerMarks[role.employer];
              return (
                <Reveal
                  key={`${role.employer}-${role.dates}`}
                  as="li"
                  delay={idx * 90}
                  className="relative"
                >
                  <span aria-hidden="true" className="signal-dot absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg-alt)] sm:-left-[calc(2.25rem+5px)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div className="flex items-center gap-3">
                      <span
                        aria-label={`${role.employer} logo`}
                        className={`grid h-11 flex-none place-items-center rounded-[var(--radius-xs)] border border-white/20 bg-white p-1.5 text-sm font-extrabold shadow-[3px_3px_0_rgba(59,156,255,0.45)] ${mark.wide ? "w-28" : "w-11"}`}
                      >
                        {mark.logo ? (
                          <img src={`${basePath}${mark.logo}`} alt="" className="h-full w-full object-contain" />
                        ) : (
                          <span className="grid h-full w-full place-items-center rounded-[4px] text-white" style={{ backgroundColor: mark.color }}>
                            {mark.initials}
                          </span>
                        )}
                      </span>
                      <div className="py-0.5">
                        <p className="text-xl font-extrabold tracking-tight text-[var(--color-ink)]">{role.employer}</p>
                        <h3 className="mt-0.5 text-base font-semibold text-[var(--color-ink-soft)]">{role.role}</h3>
                      </div>
                    </div>
                    <p className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm font-medium text-[var(--color-ink-soft)]">
                      {role.dates}
                    </p>
                  </div>
                  {role.context ? (
                    <p className="mt-2 text-base leading-7 text-[var(--color-ink-mute)]">
                      {role.context}
                    </p>
                  ) : null}

                  <div className="mt-6 grid gap-3">
                    {role.deliverables.map((deliverable) => (
                      <article key={deliverable.title} className="border-l-2 border-[var(--color-accent)] bg-[var(--color-bg)]/45 px-4 py-4 sm:px-5">
                        <h4 className="text-lg font-bold text-[var(--color-ink)]">{deliverable.title}</h4>
                        <p className="mt-1.5 text-base leading-7 text-[var(--color-ink-soft)]">{deliverable.summary}</p>
                        <ul className="mt-3 space-y-2 text-base leading-7 text-[var(--color-ink)]">
                          {deliverable.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2.5">
                              <span aria-hidden="true" className="mt-3 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-teal)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
