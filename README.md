# Riya Mehta — Portfolio

Personal portfolio site built with React.

## Editing content

All content lives in **`src/data.js`** — edit that file to update:
- Personal info, bio, links
- Stats in the hero section
- Skills groups and tags
- Work experience and bullet points
- Projects

No need to touch any other file for content changes.

## Local development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`

## Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://riyagmehta.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then:
```bash
npm run deploy
```

## Deploy to Vercel (easier)

1. Push repo to GitHub
2. Go to vercel.com, import the repo
3. Done — auto-deploys on every push

## File structure

```
src/
  data.js          <- EDIT THIS for all content changes
  App.js           <- root component
  index.js         <- entry point
  index.css        <- global CSS variables and resets
  components/
    Nav.js
    Hero.js
    Skills.js
    Experience.js
    Projects.js
    Contact.js
    Footer.js
    SectionLabel.js
```
