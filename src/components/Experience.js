import React from 'react';
import { experience } from '../data';
import CommandHeader from './CommandHeader';

export default function Experience() {
  return (
    <section id="experience" data-section>
      <CommandHeader cmd="cat experience.log" />
      {experience.map((exp) => (
        <div key={exp.id} id={exp.id} data-observe-id={exp.id} className="exp-entry">
          <div className="exp-path">~/experience/{exp.company.toLowerCase().replace(/\s+/g, '-')}</div>
          <div className="exp-head">
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company} · {exp.location}</div>
            </div>
            <div className="exp-dates">{exp.dates}</div>
          </div>
          <ul className="exp-bullets">
            {exp.bullets.map((b, j) => <li key={j} className="exp-bullet">{b}</li>)}
          </ul>
          <div className="inline-annotations">
            {exp.annotations.map((a) => <span key={a} className="inline-tag">{a}</span>)}
          </div>
        </div>
      ))}
    </section>
  );
}
