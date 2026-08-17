import React from 'react';

const s = {
  label: {
    fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)',
    letterSpacing: '0.14em', textTransform: 'uppercase',
    marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem',
  },
  line: { flex: 1, height: 1, background: 'var(--border)' },
};

export default function SectionLabel({ children }) {
  return (
    <div style={s.label}>
      {children}
      <span style={s.line} />
    </div>
  );
}
