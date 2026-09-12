import React, { useState } from 'react';
import CommandHeader from './CommandHeader';

export default function ResumeViewer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="resume" data-observe-id="resume" data-section>
      <CommandHeader cmd="open resume.pdf" />
      <div className="resume-actions">
        <button className="btn btn-primary" onClick={() => setExpanded((e) => !e)}>
          {expanded ? 'Collapse' : 'Preview Resume'}
        </button>
        <a href="/RiyaResumeM.pdf" download className="btn btn-outline">Download PDF</a>
      </div>
      {expanded && (
        <div className="resume-frame-wrap">
          <iframe src="/RiyaResumeM.pdf" title="Riya Mehta Resume" className="resume-frame" />
        </div>
      )}
    </section>
  );
}
