"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-hairline bg-canvas/80 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        style={{ scaleX: progress }}
      />
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#" className="font-mono text-xs tracking-[0.15em] text-ink hover:text-accent">
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </a>

        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wide sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors ${
                  active === link.href ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.links.resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm border border-hairline px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
