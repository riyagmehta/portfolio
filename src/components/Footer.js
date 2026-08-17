import React from 'react';

const s = {
  footer: {
    textAlign: 'center', padding: '2rem',
    fontFamily: 'var(--mono)', fontSize: 11,
    color: 'var(--muted)', borderTop: '1px solid var(--border)',
  },
};

export default function Footer() {
  return <footer style={s.footer}>built by riya mehta · 2026</footer>;
}
