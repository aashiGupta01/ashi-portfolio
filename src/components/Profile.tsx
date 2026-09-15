import { ArrowDown, Download, MapPin } from "lucide-react";
import portrait from "../../Image (1).png";
import { about, site } from "@/content/site";
import { Reveal } from "./Reveal";

const photoSrc = portrait.src;

export function Profile() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resumeHref = `${basePath}/${site.resumeFile}`;

  return (
    <section
      id="top"
      aria-labelledby="profile-heading"
      className="hero-grid relative isolate overflow-hidden border-b border-[var(--color-border-soft)]"
    >
      <Reveal className="pointer-events-none absolute left-1/2 top-5 z-20 w-[calc(100%-2.5rem)] -translate-x-1/2 text-center sm:top-7">
        <h1 id="profile-heading" className="identity-name">
          {site.name}
        </h1>
      </Reveal>
      <div className="page-container grid min-h-[calc(100dvh-4rem)] items-center gap-6 pb-6 pt-20 sm:gap-10 sm:pb-14 sm:pt-24 lg:grid-cols-[1fr_0.86fr] lg:gap-16 lg:pb-16 lg:pt-24">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="inline-flex items-center gap-2 border border-[#01a982]/70 bg-[#062b25]/85 px-3 py-1.5 text-xs font-bold text-[#d3fff2] shadow-[0_0_24px_rgba(1,169,130,0.12)]">
              <span aria-hidden="true" className="h-2.5 w-5 border-2 border-[#01a982]" />
              Specialist Software Engineer at HPE
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="mt-6 max-w-[12ch] text-4xl font-extrabold leading-[1.02] tracking-tight text-[var(--color-ink)] sm:text-6xl lg:text-7xl"
            >
              Systems that stay calm under pressure.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-5 text-xl font-bold tracking-tight text-[var(--color-accent-hover)] sm:text-2xl">
              A full-stack engineer with a product mindset.
            </h2>
            <p className="mt-4 max-w-[56ch] text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg">
              {about}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-bold text-[#06101f] transition hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] active:translate-y-0"
              >
                View experience
                <ArrowDown aria-hidden="true" size={16} />
              </a>
              <a
                href={resumeHref}
                download
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] active:translate-y-0"
              >
                <Download aria-hidden="true" size={16} />
                Resume
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="order-1 mx-auto w-[min(40vw,11rem)] sm:w-full sm:max-w-[30rem] lg:order-2 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute -inset-3 border border-[var(--color-border)]" />
            <div className="portrait-frame relative h-full w-full overflow-hidden border border-[var(--color-accent)]/70 shadow-[0_28px_80px_-30px_rgba(44,140,255,0.55)]">
              <img
                src={photoSrc}
                alt={`Portrait of ${site.name}`}
                className="absolute inset-0 z-10 h-full w-full object-contain object-bottom"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 border border-[var(--color-border)] bg-[var(--color-bg)]/95 px-4 py-3 backdrop-blur sm:-left-7">
              <p className="text-xs font-semibold text-[var(--color-accent)]">8+ YEARS</p>
            </div>
            <div className="absolute -right-3 top-8 hidden items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg)]/95 px-3 py-2 backdrop-blur sm:-right-7 sm:flex">
              <MapPin aria-hidden="true" size={14} className="text-[var(--color-accent)]" />
              <span className="text-xs font-medium text-[var(--color-ink-soft)]">{site.location}</span>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-[var(--color-ink-soft)] sm:hidden">
            <MapPin aria-hidden="true" size={14} className="text-[var(--color-accent)]" />
            <span>{site.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
