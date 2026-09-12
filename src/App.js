import React, { useState, useCallback } from 'react';
import './App.css';
import StatusBar from './components/StatusBar';
import LeftGutter from './components/LeftGutter';
import MarginNotes from './components/MarginNotes';
import Boot from './components/Boot';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import useActiveSection from './hooks/useActiveSection';
import useKeyboardNav from './hooks/useKeyboardNav';
import { sectionOrder } from './data';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const activeId = useActiveSection();

  const onOpenPalette = useCallback(() => setPaletteOpen(true), []);
  const onClosePalette = useCallback(() => setPaletteOpen(false), []);

  useKeyboardNav({
    sectionIds: sectionOrder,
    paletteOpen,
    onOpenPalette,
    onClosePalette,
  });

  return (
    <div className="app-shell">
      <StatusBar activeId={activeId} onOpenSearch={onOpenPalette} />
      <LeftGutter activeId={activeId} />
      <main className="main-col">
        <Boot />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <ResumeViewer />
        <Contact />
        <Footer />
      </main>
      <MarginNotes activeId={activeId} />
      <CommandPalette open={paletteOpen} onClose={onClosePalette} />
    </div>
  );
}
