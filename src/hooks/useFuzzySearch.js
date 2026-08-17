export function fuzzyMatch(query, text) {
  if (!query) return true;
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (t.includes(q)) return true;
  let qi = 0;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) qi++;
  }
  return qi === q.length;
}

export function searchAll(query, { skills, projects, experience }) {
  if (!query || query.length < 2) return [];
  const results = [];
  skills.forEach(group => {
    group.tags.forEach(tag => {
      if (fuzzyMatch(query, tag) || fuzzyMatch(query, group.title)) {
        results.push({ type: 'skill', label: tag, group: group.title, action: 'scroll', target: 'skills' });
      }
    });
  });
  projects.forEach(p => {
    if (fuzzyMatch(query, p.name) || fuzzyMatch(query, p.desc) || p.stack.some(s => fuzzyMatch(query, s))) {
      results.push({ type: 'project', label: p.name, action: 'scroll', target: 'projects' });
    }
  });
  experience.forEach(e => {
    if (fuzzyMatch(query, e.company) || fuzzyMatch(query, e.role)) {
      results.push({ type: 'experience', label: `${e.role} at ${e.company}`, action: 'scroll', target: 'experience' });
    }
  });
  const actions = [
    { label: 'Contact', target: 'contact' },
    { label: 'About', target: 'about' },
    { label: 'Resume', target: 'resume' },
  ];
  actions.forEach(a => {
    if (fuzzyMatch(query, a.label)) {
      results.push({ type: 'action', label: a.label, action: 'scroll', target: a.target });
    }
  });
  return results.slice(0, 8);
}
