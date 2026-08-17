import React, { useState } from 'react';
import { projects } from '../data';
import SectionLabel from './SectionLabel';

const GITHUB = 'https://github.com/riyagmehta';

const s = {
  section: { maxWidth: 780, margin: '0 auto', padding: '5rem 2rem', borderTop: '1px solid var(--border)' },
  toolbar: { display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '1.5rem' },
  toggleBtn: (active) => ({
    fontFamily: 'var(--mono)', fontSize: 11, padding: '0.35rem 0.8rem',
    borderRadius: 5, cursor: 'pointer', border: '1px solid var(--border)',
    background: active ? 'var(--accent)' : 'var(--surface)',
    color: active ? '#fff' : 'var(--muted)', transition: 'all 0.2s',
  }),
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' },
  card: {
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '1.5rem', transition: 'border-color 0.2s, transform 0.2s',
    display: 'flex', flexDirection: 'column',
  },
  carouselWrap: { position: 'relative', overflow: 'hidden' },
  carouselTrack: (idx) => ({
    display: 'flex', transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
    transform: `translateX(calc(-${idx * 100}% - ${idx * 1.25}rem))`,
  }),
  carouselCard: {
    minWidth: '100%', background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 12, padding: '2rem', boxSizing: 'border-box',
  },
  carouselNav: { display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.25rem' },
  dot: (active) => ({
    width: active ? 20 : 6, height: 6, borderRadius: 3,
    background: active ? 'var(--accent)' : 'var(--border)',
    border: 'none', cursor: 'pointer', padding: 0,
    transition: 'all 0.3s',
  }),
  carouselBtns: { display: 'flex', justifyContent: 'space-between', marginTop: '1rem' },
  navBtn: {
    fontFamily: 'var(--mono)', fontSize: 12, padding: '0.4rem 1rem',
    borderRadius: 6, border: '1px solid var(--border)',
    background: 'transparent', color: 'var(--muted)', cursor: 'pointer',
    transition: 'all 0.2s',
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' },
  name: { fontWeight: 600, fontSize: '1rem', lineHeight: 1.3, maxWidth: '85%' },
  icon: { fontSize: '1.2rem', opacity: 0.7 },
  tagRow: { display: 'flex', gap: '0.4rem', marginBottom: '0.75rem', flexWrap: 'wrap' },
  badge: {
    fontFamily: 'var(--mono)', fontSize: 10, padding: '0.15rem 0.5rem', borderRadius: 4,
    background: 'rgba(124,106,247,0.12)', color: 'var(--accent)',
    border: '1px solid rgba(124,106,247,0.2)',
  },
  desc: { fontSize: 13, color: '#8b93a1', lineHeight: 1.75, marginBottom: '1rem', flex: 1 },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' },
  stack: { display: 'flex', flexWrap: 'wrap', gap: '0.35rem', flex: 1 },
  tag: {
    fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)',
    background: 'var(--bg)', border: '1px solid var(--border)',
    borderRadius: 3, padding: '0.15rem 0.45rem',
  },
  ghLink: {
    fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)',
    marginLeft: '0.75rem', whiteSpace: 'nowrap', textDecoration: 'none', flexShrink: 0,
  },
};

function ProjectCard({ p, style }) {
  return (
    <div
      style={{ ...s.card, ...style }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={s.header}>
        <div style={s.name}>{p.name}</div>
        <div style={s.icon}>{p.icon}</div>
      </div>
      {p.tags && p.tags.length > 0 && (
        <div style={s.tagRow}>
          {p.tags.map(t => <span key={t} style={s.badge}>{t}</span>)}
        </div>
      )}
      <p style={s.desc}>{p.desc}</p>
      <div style={s.footer}>
        <div style={s.stack}>
          {p.stack.map(t => <span key={t} style={s.tag}>{t}</span>)}
        </div>
        <a href={GITHUB} target="_blank" rel="noreferrer" style={s.ghLink}>GitHub →</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [view, setView] = useState('grid');
  const [idx, setIdx] = useState(0);

  return (
    <section style={s.section} id="projects">
      <SectionLabel>Projects</SectionLabel>

      <div style={s.toolbar}>
        <button style={s.toggleBtn(view === 'grid')} onClick={() => setView('grid')}>Grid</button>
        <button style={s.toggleBtn(view === 'carousel')} onClick={() => setView('carousel')}>Carousel</button>
      </div>

      {view === 'grid' ? (
        <div style={s.grid}>
          {projects.map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
      ) : (
        <div>
          <div style={s.carouselWrap}>
            <div style={s.carouselTrack(idx)}>
              {projects.map(p => (
                <div key={p.name} style={s.carouselCard}>
                  <ProjectCard p={p} style={{ border: 'none', padding: 0, background: 'transparent' }} />
                </div>
              ))}
            </div>
          </div>
          <div style={s.carouselBtns}>
            <button
              style={s.navBtn}
              onClick={() => setIdx(i => Math.max(0, i - 1))}
              disabled={idx === 0}
            >
              ← Prev
            </button>
            <div style={s.carouselNav}>
              {projects.map((_, i) => (
                <button key={i} style={s.dot(i === idx)} onClick={() => setIdx(i)} />
              ))}
            </div>
            <button
              style={s.navBtn}
              onClick={() => setIdx(i => Math.min(projects.length - 1, i + 1))}
              disabled={idx === projects.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
