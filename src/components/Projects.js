import React from 'react';
import { projects } from '../data';
import CommandHeader from './CommandHeader';

function statusClass(status) {
  if (!status) return '';
  if (status === 'live') return 'live';
  if (status === 'in progress') return 'progress';
  return 'team';
}

export default function Projects() {
  return (
    <section id="projects" data-section>
      <CommandHeader cmd="ls ~/projects" />
      <div className="proj-list">
        {projects.map((p) => (
          <div key={p.id} id={p.id} data-observe-id={p.id} className="proj-entry">
            <div className="proj-path">~/projects/{p.slug}</div>
            <div className="proj-head">
              <div className="proj-name">{p.name}</div>
              {p.status && <span className={`proj-status ${statusClass(p.status)}`}>{p.status}</span>}
            </div>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-footer">
              <div className="proj-stack">
                {p.stack.map((t) => <span key={t} className="proj-tag">{t}</span>)}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">
                  {p.linkLabel} →
                </a>
              )}
            </div>
            <div className="inline-annotations">
              {p.annotations.map((a) => <span key={a} className="inline-tag">{a}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
