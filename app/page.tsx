import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
