import React from 'react';
import { experience } from '../data';
import SectionLabel from './SectionLabel';

const s = {
  section: { maxWidth: 780, margin: '0 auto', padding: '5rem 2rem', borderTop: '1px solid var(--border)' },
  item: { marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border)' },
  itemLast: { marginBottom: 0, paddingBottom: 0, borderBottom: 'none' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' },
  role: { fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' },
  company: { fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)' },
  date: { fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', whiteSpace: 'nowrap', textAlign: 'right' },
  bullets: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' },
  bullet: { fontSize: 14, color: '#b0b7c3', paddingLeft: '1.2rem', position: 'relative', lineHeight: 1.65 },
};

export default function Experience() {
  return (
    <section style={s.section} id="experience">
      <SectionLabel>Experience</SectionLabel>
      {experience.map((exp, i) => (
        <div key={exp.company} style={i === experience.length - 1 ? s.itemLast : s.item}>
          <div style={s.header}>
            <div>
              <div style={s.role}>{exp.role}</div>
              <div style={s.company}>{exp.company} · {exp.location}</div>
            </div>
            <div style={s.date}>{exp.dates}</div>
          </div>
          <ul style={s.bullets}>
            {exp.bullets.map((b, j) => (
              <li key={j} style={s.bullet}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: 10, top: 4 }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
