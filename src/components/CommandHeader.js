import React from 'react';

export default function CommandHeader({ cmd }) {
  return (
    <div className="cmd-header">
      <span className="prompt">$</span>
      <span className="cmd-text">{cmd}</span>
      <span className="rule" />
    </div>
  );
}
