import { useEffect } from 'react';

export default function useKeyboardNav({ sectionIds, paletteOpen, onOpenPalette, onClosePalette }) {
  useEffect(() => {
    const goRelative = (dir) => {
      const positions = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean);
      if (positions.length === 0) return;

      const atOrAbove = positions.filter((p) => p.top <= 80);
      const currentIdx = atOrAbove.length > 0
        ? positions.findIndex((p) => p.id === atOrAbove[atOrAbove.length - 1].id)
        : 0;

      const nextIdx = Math.min(Math.max(currentIdx + dir, 0), positions.length - 1);
      document.getElementById(positions[nextIdx].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handler = (e) => {
      const active = document.activeElement;
      const typing = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        paletteOpen ? onClosePalette() : onOpenPalette();
        return;
      }
      if (e.key === 'Escape' && paletteOpen) {
        onClosePalette();
        return;
      }
      if (typing || paletteOpen) return;

      if (e.key === '/') {
        e.preventDefault();
        onOpenPalette();
        return;
      }
      if (e.key === 'j' || e.key === 'ArrowDown') {
        e.preventDefault();
        goRelative(1);
      }
      if (e.key === 'k' || e.key === 'ArrowUp') {
        e.preventDefault();
        goRelative(-1);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [sectionIds, paletteOpen, onOpenPalette, onClosePalette]);
}
