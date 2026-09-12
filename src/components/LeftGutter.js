import React from 'react';
import { sectionOrder, sectionMeta, parentSection } from '../data';

export default function LeftGutter({ activeId }) {
  const activeParent = parentSection(activeId);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="left-gutter" aria-label="Section navigation">
      {sectionOrder.map((id) => (
        <button
          key={id}
          className={`gutter-item${activeParent === id ? ' active' : ''}`}
          onClick={() => go(id)}
        >
          <span className="gutter-dash" />
          <span className="gutter-label">{sectionMeta[id].label}</span>
        </button>
      ))}
    </nav>
  );
}
