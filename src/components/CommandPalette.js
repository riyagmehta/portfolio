import React, { useState, useEffect, useRef, useCallback } from 'react';
import { skills, projects, experience } from '../data';
import { searchAll } from '../hooks/useFuzzySearch';

const typeColors = {
  skill: '#4ade80',
  project: '#7c6af7',
  experience: '#60a5fa',
  action: '#f59e0b',
};

const typeLabels = {
  skill: 'SKILL',
  project: 'PROJECT',
  experience: 'EXP',
  action: 'GO',
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
    setSelected(0);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    const r = searchAll(query, { skills, projects, experience });
    setResults(r);
    setSelected(0);
  }, [query]);

  const execute = (result) => {
    if (!result) return;
    const el = document.getElementById(result.target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    close();
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
    if (e.key === 'Enter') execute(results[selected]);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200,
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 8, padding: '0.6rem 1rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)',
          cursor: 'pointer', backdropFilter: 'blur(12px)',
          transition: 'border-color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
      >
        <span style={{ color: 'var(--accent)' }}>⌘K</span>
        Search
      </button>
    );
  }

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: '20vh',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 560, background: 'var(--surface)',
          border: '1px solid var(--border)', borderRadius: 12,
          overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', gap: '0.75rem' }}>
          <span style={{ color: 'var(--muted)', fontSize: 14 }}>⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search projects, skills, experience..."
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: 'var(--text)', fontFamily: 'var(--sans)', fontSize: 14,
            }}
          />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', border: '1px solid var(--border)', borderRadius: 4, padding: '0.1rem 0.4rem' }}>ESC</span>
        </div>

        {results.length > 0 && (
          <div style={{ padding: '0.5rem' }}>
            {results.map((r, i) => (
              <div
                key={i}
                onClick={() => execute(r)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.6rem 0.75rem', borderRadius: 6, cursor: 'pointer',
                  background: i === selected ? 'rgba(124,106,247,0.1)' : 'transparent',
                  transition: 'background 0.1s',
                }}
                onMouseEnter={() => setSelected(i)}
              >
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 600,
                  color: typeColors[r.type], background: `${typeColors[r.type]}15`,
                  border: `1px solid ${typeColors[r.type]}30`,
                  borderRadius: 3, padding: '0.1rem 0.35rem', minWidth: 40, textAlign: 'center',
                }}>
                  {typeLabels[r.type]}
                </span>
                <span style={{ fontSize: 13, color: 'var(--text)' }}>{r.label}</span>
                {r.group && <span style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 'auto' }}>{r.group}</span>}
              </div>
            ))}
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div style={{ padding: '1.5rem', textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
            No results for "{query}"
          </div>
        )}

        {!query && (
          <div style={{ padding: '0.75rem 1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {['about', 'skills', 'experience', 'projects', 'contact'].map(s => (
              <button key={s} onClick={() => execute({ target: s })} style={{
                fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)',
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 4, padding: '0.25rem 0.6rem', cursor: 'pointer',
              }}>
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
