import React from 'react';
import { skills } from '../data';
import CommandHeader from './CommandHeader';

export default function Skills() {
  return (
    <section id="skills" data-observe-id="skills" data-section>
      <CommandHeader cmd="cat skills.json" />
      <div className="skills-json">
        <span className="skill-brace">{'{'}</span>
        {skills.map((g, i) => (
          <div key={g.title} className="skill-row">
            <span className="skill-key">"{g.title.toLowerCase().replace(/\s*\/\s*|\s+/g, '_')}"</span>
            <span className="skill-colon">:</span>
            <span className="skill-bracket">[</span>
            {g.tags.map((t, j) => (
              <React.Fragment key={t}>
                <span className="skill-tag">"{t}"</span>
                {j < g.tags.length - 1 && <span className="skill-comma">,&nbsp;</span>}
              </React.Fragment>
            ))}
            <span className="skill-bracket">]</span>
            {i < skills.length - 1 && <span className="skill-comma">,</span>}
          </div>
        ))}
        <span className="skill-brace">{'}'}</span>
      </div>
    </section>
  );
}
