import React from 'react';
import { personal, bootLines, sectionMeta } from '../data';

const menuTargets = ['experience', 'projects', 'skills', 'education', 'resume', 'contact'];

export default function Boot() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="about" data-observe-id="about" data-section className="boot">
      <div>
        {bootLines.map((l, i) => (
          <div
            key={i}
            className={`boot-line ${l.cmd ? 'cmd' : 'out'}`}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            {l.cmd ? (<><span className="prompt">riya@dev ~ %</span>{l.cmd}</>) : l.out}
          </div>
        ))}
      </div>

      <h1 className="boot-tagline">
        {personal.tagline.split('. ')[0]}. <span className="grad">{personal.tagline.split('. ')[1]}</span>
      </h1>

      <div className="boot-menu">
        {menuTargets.map((id) => (
          <button key={id} className="boot-menu-item" onClick={() => go(id)}>
            <span className="amp">&gt;</span>{sectionMeta[id].cmd}
          </button>
        ))}
      </div>

      <div className="boot-links">
        <a href={`mailto:${personal.email}`} className="btn btn-primary">Get in touch</a>
        <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
      </div>
    </section>
  );
}
