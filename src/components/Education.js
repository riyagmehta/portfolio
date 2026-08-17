import React from 'react';
import { education } from '../data';
import SectionLabel from './SectionLabel';

const s = {
  section: {
    maxWidth: 780, margin: '0 auto',
    padding: '5rem 2rem', borderTop: '1px solid var(--border)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
  },
  card: {
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '1.5rem',
    transition: 'border-color 0.2s',
  },
  header: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: '0.5rem',
  },
  school: { fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.3 },
  dates: {
    fontFamily: 'var(--mono)', fontSize: 11,
    color: 'var(--muted)', whiteSpace: 'nowrap', textAlign: 'right',
  },
  degree: {
    fontFamily: 'var(--mono)', fontSize: 12,
    color: 'var(--accent)', marginBottom: '0.75rem',
  },
  gpaRow: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
  gpaLabel: { fontSize: 12, color: 'var(--muted)' },
  gpaVal: {
    fontFamily: 'var(--mono)', fontSize: 13,
    color: 'var(--text)', fontWeight: 500,
  },
};

export default function Education() {
  return (
    <section style={s.section} id="education">
      <SectionLabel>Education</SectionLabel>
      <div style={s.grid}>
        {education.map(e => (
          <div
            key={e.school}
            style={s.card}
            onMouseEnter={el => el.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)'}
            onMouseLeave={el => el.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={s.header}>
              <div style={s.school}>{e.school}</div>
              <div style={s.dates}>{e.dates}</div>
            </div>
            <div style={s.degree}>{e.degree}</div>
            <div style={s.gpaRow}>
              <span style={s.gpaLabel}>GPA</span>
              <span style={s.gpaVal}>{e.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}