import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixCanvas from './components/MatrixCanvas';
import CommandPalette from './components/CommandPalette';
import Education from './components/Education';
export default function App() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <MatrixCanvas />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Nav />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ResumeViewer />
        <Contact />
        <Footer />
        <CommandPalette />
      </div>
    </div>
  );
}
