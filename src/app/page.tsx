import { Nav } from "@/components/Nav";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a
        href="#profile-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-accent)] focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Profile />
        <Skills />
        <Experience />
        <Education />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
