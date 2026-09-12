import React, { useState, useEffect, useRef } from 'react';
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

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
      setSelected(0);
    }
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
    onClose();
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, results.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    if (e.key === 'Enter') execute(results[selected]);
  };

  if (!open) return null;

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input-row">
          <span style={{ color: 'var(--muted)', fontSize: 14 }}>⌕</span>
          <input
            ref={inputRef}
            className="palette-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search projects, skills, experience..."
          />
          <span className="palette-esc">ESC</span>
        </div>

        {results.length > 0 && (
          <div className="palette-results">
            {results.map((r, i) => (
              <div
                key={i}
                className={`palette-result${i === selected ? ' selected' : ''}`}
                onClick={() => execute(r)}
                onMouseEnter={() => setSelected(i)}
              >
                <span
                  className="palette-type"
                  style={{ color: typeColors[r.type], background: `${typeColors[r.type]}15`, border: `1px solid ${typeColors[r.type]}30` }}
                >
                  {typeLabels[r.type]}
                </span>
                <span className="palette-label">{r.label}</span>
                {r.group && <span className="palette-group">{r.group}</span>}
              </div>
            ))}
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="palette-empty">No results for "{query}"</div>
        )}

        {!query && (
          <div className="palette-hints">
            {['about', 'skills', 'experience', 'projects', 'education', 'resume', 'contact'].map((s) => (
              <button key={s} className="palette-hint" onClick={() => execute({ target: s })}>{s}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
