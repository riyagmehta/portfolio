import React, { useState } from 'react';
import SectionLabel from './SectionLabel';

export default function ResumeViewer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="resume"
      style={{ maxWidth: 780, margin: '0 auto', padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}
    >
      <SectionLabel>Resume</SectionLabel>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setExpanded(e => !e)}
          style={{
            fontFamily: 'var(--mono)', fontSize: 12,
            padding: '0.55rem 1.1rem', borderRadius: 6,
            background: 'var(--accent)', color: '#fff',
            border: 'none', cursor: 'pointer',
          }}
        >
          {expanded ? 'Collapse' : 'Preview Resume'}
        </button>
        <a
          href="/resume.pdf"
          download
          style={{
            fontFamily: 'var(--mono)', fontSize: 12,
            padding: '0.55rem 1.1rem', borderRadius: 6,
            background: 'transparent', color: 'var(--text)',
            border: '1px solid var(--border)', cursor: 'pointer',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          }}
        >
          Download PDF
        </a>
      </div>

      {expanded && (
        <div style={{
          border: '1px solid var(--border)', borderRadius: 10,
          overflow: 'hidden', background: 'var(--surface)',
        }}>
          <iframe
            src="/resume.pdf"
            title="Riya Mehta Resume"
            style={{ width: '100%', height: 700, border: 'none', display: 'block' }}
          />
        </div>
      )}
    </section>
  );
}
