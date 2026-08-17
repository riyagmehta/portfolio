import React from 'react';
import { personal, stats } from '../data';

const s = {
  section: {
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '7rem 2rem 4rem',
    maxWidth: 780, margin: '0 auto',
  },
  tag: {
    fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)',
    letterSpacing: '0.12em', textTransform: 'uppercase',
    marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
  },
  tagLine: { width: 24, height: 1, background: 'var(--accent)', display: 'inline-block' },
  h1: {
    fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 600,
    lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem',
  },
  span: {
    background: 'linear-gradient(135deg, #7c6af7, #a78bfa)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  bio: {
    fontSize: '1rem', color: 'var(--muted)',
    maxWidth: 580, marginBottom: '2.5rem', lineHeight: 1.8,
    wordBreak: 'normal', overflowWrap: 'break-word',
  },
  links: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' },
  btnPrimary: {
    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
    padding: '0.55rem 1.2rem', borderRadius: 6, fontSize: 13,
    fontWeight: 500, background: 'var(--accent)', color: '#fff',
    cursor: 'pointer', border: 'none', transition: 'background 0.2s',
    textDecoration: 'none',
  },
  btnOutline: {
    display: 'inline-flex', alignItems: 'center',
    padding: '0.55rem 1.2rem', borderRadius: 6, fontSize: 13,
    fontWeight: 500, background: 'transparent', color: 'var(--text)',
    border: '1px solid var(--border)', cursor: 'pointer',
    transition: 'all 0.2s', textDecoration: 'none',
  },
  statsRow: {
    display: 'flex', gap: '2.5rem', paddingTop: '2rem',
    borderTop: '1px solid var(--border)', flexWrap: 'wrap',
  },
  statNum: {
    fontFamily: 'var(--mono)', fontSize: '1.6rem',
    fontWeight: 500, color: 'var(--text)', lineHeight: 1,
  },
  statLabel: { fontSize: 12, color: 'var(--muted)', marginTop: '0.3rem' },
};

export default function Hero() {
  return (
    <div style={s.section} id="about">
      <div style={s.tag}>
        <span style={s.tagLine} />
        Software Engineer
      </div>
      <h1 style={s.h1}>
        {personal.name}<br />
        <span style={s.span}>{personal.title}</span>
      </h1>
      <p style={s.bio}>{personal.bio}</p>
      <div style={s.links}>
        <a href={`mailto:${personal.email}`} style={s.btnPrimary}>Get in touch</a>
        <a href={personal.github} target="_blank" rel="noreferrer" style={s.btnOutline}>GitHub</a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" style={s.btnOutline}>LinkedIn</a>
      </div>
      <div style={s.statsRow}>
        {stats.map(st => (
          <div key={st.label}>
            <div style={s.statNum}>{st.num}</div>
            <div style={s.statLabel}>{st.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
