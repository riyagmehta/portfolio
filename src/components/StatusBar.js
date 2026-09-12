import React, { useEffect, useState } from 'react';
import { getTitle, parentSection } from '../data';

function useClock() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  return time.toLocaleTimeString('en-US', {
    timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit',
  });
}

export default function StatusBar({ activeId, onOpenSearch }) {
  const clock = useClock();
  const parent = parentSection(activeId);
  const isSub = activeId && activeId !== parent;

  return (
    <header className="status-bar">
      <div className="status-left">
        <span className="status-logo"><b>riya</b>@mehta</span>
        <span className="status-sep">~</span>
        <span className="status-crumb">
          <span className="seg active">{getTitle(parent).toLowerCase()}</span>
          {isSub && (
            <>
              <span className="status-sep">/</span>
              <span className="seg active">{getTitle(activeId)}</span>
            </>
          )}
        </span>
      </div>
      <div className="status-right">
        <span className="status-clock">{clock} CT</span>
        <button className="status-search-btn" onClick={onOpenSearch} aria-label="Open search">
          <span>search</span>
          <kbd>/</kbd>
        </button>
      </div>
    </header>
  );
}
