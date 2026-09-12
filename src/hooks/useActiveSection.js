import { useEffect, useState } from 'react';

export default function useActiveSection() {
  const [activeId, setActiveId] = useState('about');

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-observe-id]'));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.getAttribute('data-observe-id'));
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
