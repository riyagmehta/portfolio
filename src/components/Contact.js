import React from 'react';
import { personal } from '../data';
import SectionLabel from './SectionLabel';

const s = {
  section: { maxWidth: 780, margin: '0 auto', padding: '5rem 2rem', borderTop: '1px solid var(--border)' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' },
  link: {
    display: 'flex', alignItems: 'center', gap: '0.75rem',
    padding: '1rem 1.25rem', background: 'var(--surface)',
    border: '1px solid var(--border)', borderRadius: 8,
    fontSize: 13, transition: 'border-color 0.2s, color 0.2s',
    textDecoration: 'none', color: 'var(--text)',
  },
  icon: { fontSize: '1rem', width: 20, textAlign: 'center' },
  sub: { fontSize: 14, color: 'var(--muted)', maxWidth: 440 },
};

const links = (p) => [
  { icon: '✉', label: p.email, href: `mailto:${p.email}` },
  { icon: '⌥', label: 'github.com/riyagmehta', href: p.github },
  { icon: '↗', label: 'LinkedIn', href: p.linkedin },
  { icon: '☎', label: p.phone, href: `tel:${p.phone.replace(/\D/g,'')}` },
];

export default function Contact() {
  return (
    <section style={s.section} id="contact">
      <SectionLabel>Contact</SectionLabel>
      <p style={s.sub}>Open to full-time SDE, full-stack, and AI engineering roles.</p>
      <div style={s.grid}>
        {links(personal).map(l => (
          <a
            key={l.label} href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            style={s.link}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
          >
            <span style={s.icon}>{l.icon}</span>
            <span>{l.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
