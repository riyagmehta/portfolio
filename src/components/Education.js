import React from 'react';
import { education } from '../data';
import CommandHeader from './CommandHeader';

export default function Education() {
  return (
    <section id="education" data-observe-id="education" data-section>
      <CommandHeader cmd="cat education.log" />
      <div className="edu-list">
        {education.map((e) => (
          <div key={e.school} className="edu-entry">
            <div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
            </div>
            <div className="edu-right">
              <div className="edu-dates">{e.dates}</div>
              <div className="edu-gpa">{e.gpa}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
