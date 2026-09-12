import React from 'react';
import { personal } from '../data';
import CommandHeader from './CommandHeader';

export default function Contact() {
  const rows = [
    { key: 'email', val: personal.email, href: `mailto:${personal.email}` },
    { key: 'phone', val: personal.phone, href: `tel:${personal.phone.replace(/\D/g, '')}` },
    { key: 'github', val: personal.githubHandle, href: personal.github },
    { key: 'linkedin', val: personal.linkedinHandle, href: personal.linkedin },
    { key: 'location', val: personal.location, href: null },
  ];

  return (
    <section id="contact" data-observe-id="contact" data-section>
      <CommandHeader cmd="cat contact.txt" />
      <p className="contact-note">Open to full-time SDE, full-stack, and AI engineering roles.</p>
      <div className="contact-rows">
        {rows.map((r) => {
          const content = (
            <>
              <span className="contact-key">{r.key}</span>
              <span className="contact-val">{r.val}</span>
            </>
          );
          return r.href ? (
            <a key={r.key} href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-row">
              {content}
            </a>
          ) : (
            <div key={r.key} className="contact-row">{content}</div>
          );
        })}
      </div>
      <a href={`mailto:${personal.email}`} className="btn btn-primary">Say hello →</a>
    </section>
  );
}
