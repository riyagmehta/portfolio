import React from 'react';
import { observeOrder, getAnnotations, getTitle } from '../data';

export default function MarginNotes({ activeId }) {
  const idx = Math.max(0, observeOrder.indexOf(activeId));
  const notes = getAnnotations(activeId);

  return (
    <aside className="margin-notes" aria-hidden="true">
      <div className="margin-index">
        {String(idx + 1).padStart(2, '0')} / {String(observeOrder.length).padStart(2, '0')}
      </div>
      <div className="margin-title">{getTitle(activeId)}</div>
      <ul className="margin-list">
        {notes.map((n) => <li key={n}>{n}</li>)}
      </ul>
    </aside>
  );
}
