import React from 'react';

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 2rem', height: 56,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: 'rgba(14,15,17,0.88)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: 'var(--mono)', fontSize: 13,
    color: 'var(--accent)', letterSpacing: '0.05em',
  },
  links: { display: 'flex', gap: '2rem', listStyle: 'none' },
  link: { fontSize: 13, color: 'var(--muted)', transition: 'color 0.2s', cursor: 'pointer' },
  kbd: {
    fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)',
    border: '1px solid var(--border)', borderRadius: 4,
    padding: '0.1rem 0.4rem', marginLeft: '0.5rem',
  },
};

export default function Nav() {
  const links = ['About', 'Skills', 'Experience', 'Projects','Education', 'Resume', 'Contact'];
  return (
    <nav style={s.nav}>
      <div style={s.logo}>riya.mehta</div>
      <ul style={s.links}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={s.link}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          </li>
        ))}
        <li>
          <span style={{ ...s.link, cursor: 'default' }}>
            <span style={s.kbd}>⌘K</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
