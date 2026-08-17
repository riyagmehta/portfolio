import React from 'react';
import { skills } from '../data';
import SectionLabel from './SectionLabel';

const s = {
  section: { maxWidth: 780, margin: '0 auto', padding: '5rem 2rem', borderTop: '1px solid var(--border)' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' },
  card: {
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 8, padding: '1.25rem',
  },
  title: {
    fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)',
    textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem',
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem' },
  tag: {
    fontFamily: 'var(--mono)', fontSize: 11,
    padding: '0.2rem 0.55rem',
    background: 'var(--accent-dim)', color: 'var(--accent)',
    borderRadius: 4, border: '1px solid rgba(124,106,247,0.15)',
  },
};

export default function Skills() {
  return (
    <section style={s.section} id="skills">
      <SectionLabel>Skills</SectionLabel>
      <div style={s.grid}>
        {skills.map(g => (
          <div key={g.title} style={s.card}>
            <div style={s.title}>{g.title}</div>
            <div style={s.tags}>
              {g.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
