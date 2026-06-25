// ===========================
// FILE DATA
// ===========================

const files = {
  readme: {
    name: 'README.md',
    content: `# The Absurd Machine

> Building things that probably shouldn't exist.

A portfolio. A lab. A log.

This is where ideas move through a pipeline:

    idea → repo → prototype → post → video

Each project starts with a question.
Most answers are wrong. That's the point.

---

## Active Projects

- **Neon-Void**    [prototype]   visual noise meets ambient music
- **ByteBrawn**    [active]      fitness tracking with no excuses
- **Mayphex**      [prototype]   scheduling, probably

---

## Recent Posts

- On Building Things That Shouldn't Exist   [draft]

---

## How This Works

1. Get an idea
2. Open a repo
3. Build a prototype
4. Write about it
5. Record a video
6. Ship it here`
  },

  'neon-void': {
    name: 'neon-void.md',
    content: `# Neon-Void

**Status:** [prototype]
**Repo:** github.com/TheAbsurdMachine/Neon-Void

---

## What Is It?

An experiment at the intersection of visual noise and ambient audio.
Procedurally generated visuals that respond to frequency data in real time.

## Why?

The indie dev space is missing a middle ground between
full DAWs with visual plugins and basic Winamp visualizers.
This lives in that gap.

## Current State

- Three.js canvas running
- Audio FFT pipeline hooked up
- Visuals respond to frequency bands
- Needs: better shaders, UI, export flow

## Next Steps

1. Write the post
2. Record the walkthrough
3. Ship`
  },

  'byte-brawn': {
    name: 'byte-brawn.md',
    content: `# ByteBrawn

**Status:** [active]
**Repo:** github.com/TheAbsurdMachine/ByteBrawn

---

## What Is It?

Fitness tracking with no excuses.
No subscriptions. No social features. No gamification.
Just: did you lift today, or not?

## Why?

Every fitness app is trying to be your coach, your community,
your therapist. Most people just need a log.

## Current State

- Core tracking works
- Local storage persistence
- Basic history view
- Needs: data export, PR tracking, graph view

## Stack

- Vanilla JS
- No backend (local-first)
- PWA for mobile`
  },

  mayphex: {
    name: 'mayphex.md',
    content: `# Mayphex

**Status:** [prototype]
**Repo:** github.com/TheAbsurdMachine/Mayphex

---

## What Is It?

Still figuring it out.

Working idea: a scheduling tool for people who
hate scheduling tools.

Inspired by the fact that every calendar app
is designed for people who already have their life together.

## Current State

- Concept phase
- Some sketches
- No code yet

## Questions To Answer

- What problem does this actually solve?
- Who is it for?
- Why would anyone use this over Google Calendar?

The answer to all three might be "nobody" and "they wouldn't."
That's fine. Build it anyway.`
  },

  'post-1': {
    name: 'on-building-absurd-things.md',
    content: `# On Building Things That Shouldn't Exist

*Draft — unpublished*

---

There is a certain kind of project that makes no business sense.

No market research. No TAM. No product-market fit.
Just an idea that won't leave you alone at 2am.

These are the only projects worth building.

---

## The Pipeline

Side projects die in one of two places:

1. The prototype works but never gets written about
2. The post gets written but never turns into anything

The fix is a forcing function. A pipeline where each stage
forces the next one.

    idea
      ↓
    repo       // commitment. you named it. it exists.
      ↓
    prototype  // does it work? close enough.
      ↓
    post       // explain it. you'll find the holes.
      ↓
    video      // teach it. you'll find more holes.
      ↓
    ship

The post forces clarity. The video forces depth.
By the time you ship, you actually understand it.

---

## Why "Absurd Machine"?

A machine that runs on absurd inputs.

An idea that makes no sense
→ becomes a thing that does.

That's the whole thing.`
  },

  about: {
    name: 'who.md',
    content: `# who.md

---

## $ whoami

Builder. Tinkerer. Maker of things that probably shouldn't exist.

Working at the intersection of code, ideas, and poor life decisions.

---

## What I Do

I build things, write about building them,
then make videos about writing about building them.

It's absurd. That's the point.

---

## Contact

If you want to talk about a project, an idea, or anything in between:

- GitHub: github.com/TheAbsurdMachine
- Email: [contact form coming soon]

---

## This Site

Built with:
- Vite
- Vanilla JS
- An unhealthy obsession with VS Code aesthetics

No framework. No CMS. Just files.`
  }
};

const fileTree = [
  { type: 'file', name: 'README.md', id: 'readme' },
  {
    type: 'folder', name: 'projects',
    children: [
      { type: 'file', name: 'neon-void.md', id: 'neon-void' },
      { type: 'file', name: 'byte-brawn.md', id: 'byte-brawn' },
      { type: 'file', name: 'mayphex.md', id: 'mayphex' },
    ]
  },
  {
    type: 'folder', name: 'blog',
    children: [
      { type: 'file', name: 'on-building-absurd-things.md', id: 'post-1' },
    ]
  },
  {
    type: 'folder', name: 'about',
    children: [
      { type: 'file', name: 'who.md', id: 'about' },
    ]
  }
];

// ===========================
// STATE
// ===========================

const state = {
  openTabs: ['readme'],
  activeTab: 'readme',
  openFolders: new Set(['projects']),
  cursorLine: 1,
};

// ===========================
// UTILS
// ===========================

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderInline(raw) {
  let s = esc(raw);
  // Bold
  s = s.replace(/\*\*(.+?)\*\*/g, '<span class="syn-bold">**$1**</span>');
  // Inline code
  s = s.replace(/`(.+?)`/g, '<span class="syn-inline-code">`$1`</span>');
  // Status tags
  s = s.replace(/\[(active)\]/g, '<span class="syn-bracket status-active">[$1]</span>');
  s = s.replace(/\[(prototype)\]/g, '<span class="syn-bracket status-prototype">[$1]</span>');
  s = s.replace(/\[(draft|unpublished)\]/g, '<span class="syn-bracket status-draft">[$1]</span>');
  // Other brackets
  s = s.replace(/\[([^\]]+)\]/g, '<span class="syn-bracket">[$1]</span>');
  // Arrows
  s = s.replace(/→/g, '<span class="syn-arrow">→</span>');
  // GitHub links
  s = s.replace(/(github\.com\/[^\s<]+)/g, '<span class="syn-link">$1</span>');
  return s;
}

function renderLine(line) {
  if (!line.trim()) return '&nbsp;';
  if (/^# /.test(line))   return `<span class="syn-h1">${renderInline(line)}</span>`;
  if (/^## /.test(line))  return `<span class="syn-h2">${renderInline(line)}</span>`;
  if (/^### /.test(line)) return `<span class="syn-h3">${renderInline(line)}</span>`;
  if (/^> /.test(line))   return `<span class="syn-blockquote">${esc(line)}</span>`;
  if (/^\*[^*]/.test(line)) return `<span class="syn-italic">${esc(line)}</span>`;
  if (/^---+$/.test(line))  return `<span class="syn-hr">${esc(line)}</span>`;
  if (/^\/\//.test(line.trim())) return `<span class="syn-comment">${esc(line)}</span>`;
  if (/^ {4}/.test(line)) {
    // Inline comment detection
    const s = esc(line).replace(/\/\/ (.+)$/, '<span class="syn-comment">// $1</span>');
    return `<span class="syn-codeblock">${s}</span>`;
  }
  if (/^- /.test(line))   return `<span class="syn-list">-</span> ${renderInline(line.slice(2))}`;
  if (/^\d+\. /.test(line)) {
    const m = line.match(/^(\d+\. )(.*)/);
    return `<span class="syn-list">${esc(m[1])}</span>${renderInline(m[2])}`;
  }
  return renderInline(line);
}

// ===========================
// BUILD DOM
// ===========================

function buildTitleBar() {
  const el = document.createElement('div');
  el.className = 'titlebar';
  el.innerHTML = `
    <div class="traffic-lights">
      <span class="light light-red"></span>
      <span class="light light-yellow"></span>
      <span class="light light-green"></span>
    </div>
    <span class="titlebar-title">The Absurd Machine — Portfolio</span>
    <div class="hamburger" id="hamburger" title="Toggle Explorer">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <rect x="1" y="3" width="16" height="2" rx="1"/>
        <rect x="1" y="8" width="16" height="2" rx="1"/>
        <rect x="1" y="13" width="16" height="2" rx="1"/>
      </svg>
    </div>`;
  return el;
}

function buildMenuBar() {
  const el = document.createElement('div');
  el.className = 'menubar';
  ['File', 'Edit', 'View', 'Go', 'Terminal', 'Help'].forEach(label => {
    const item = document.createElement('div');
    item.className = 'menu-item';
    item.textContent = label;
    el.appendChild(item);
  });
  return el;
}

function buildActivityBar() {
  const el = document.createElement('div');
  el.className = 'activity-bar';

  const icons = [
    { title: 'Explorer', active: true, svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4a1 1 0 011-1h5l2 2h9a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v11h14V7h-8.586L8.586 5H5z"/></svg>` },
    { title: 'Search', svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 3a7.5 7.5 0 015.645 12.438l4.208 4.208-1.414 1.414-4.208-4.208A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"/></svg>` },
    { title: 'Source Control', svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a3 3 0 110 5.83V11h5a2 2 0 012 2v.17A3 3 0 1118 16.83V13h-5v3.17A3 3 0 1110 13v-2H5a2 2 0 01-2-2V8.83A3 3 0 118 5.17V8h2V5.83A3 3 0 0113 3zm0 2a1 1 0 100 2 1 1 0 000-2zM6 15a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"/></svg>` },
  ];

  icons.forEach(({ title, svg, active }) => {
    const btn = document.createElement('div');
    btn.className = `activity-icon${active ? ' active' : ''}`;
    btn.title = title;
    btn.innerHTML = svg;
    el.appendChild(btn);
  });

  return el;
}

function buildSidebar() {
  const el = document.createElement('div');
  el.className = 'sidebar';
  el.innerHTML = `
    <div class="sidebar-header">Explorer</div>
    <div class="sidebar-repo">The-Absurd-Machine</div>
    <div class="file-tree" id="file-tree"></div>`;
  return el;
}

function buildEditorArea() {
  const el = document.createElement('div');
  el.className = 'editor-area';

  const tabBar = document.createElement('div');
  tabBar.className = 'tab-bar';
  tabBar.id = 'tab-bar';

  const breadcrumb = document.createElement('div');
  breadcrumb.className = 'breadcrumb';
  breadcrumb.id = 'breadcrumb';

  const editor = document.createElement('div');
  editor.className = 'editor';

  const scrollArea = document.createElement('div');
  scrollArea.className = 'editor-scroll';
  scrollArea.id = 'editor-scroll';

  const lineNums = document.createElement('div');
  lineNums.className = 'line-numbers';
  lineNums.id = 'line-numbers';

  const content = document.createElement('div');
  content.className = 'editor-content';
  content.id = 'editor-content';

  scrollArea.appendChild(lineNums);
  scrollArea.appendChild(content);

  const minimap = document.createElement('div');
  minimap.className = 'minimap';
  minimap.id = 'minimap';

  editor.appendChild(scrollArea);
  editor.appendChild(minimap);

  scrollArea.addEventListener('scroll', () => {
    const line = Math.floor(scrollArea.scrollTop / 22) + 1;
    state.cursorLine = line;
    renderStatusBar();
  });

  el.appendChild(tabBar);
  el.appendChild(breadcrumb);
  el.appendChild(editor);
  return el;
}

function buildStatusBar() {
  const el = document.createElement('div');
  el.className = 'statusbar';
  el.id = 'statusbar';
  return el;
}

// ===========================
// RENDER
// ===========================

function renderFileTree() {
  const tree = document.getElementById('file-tree');
  if (!tree) return;
  tree.innerHTML = '';

  function renderNode(node, depth) {
    const indent = 8 + depth * 14;

    if (node.type === 'folder') {
      const isOpen = state.openFolders.has(node.name);
      const folder = document.createElement('div');
      folder.className = 'tree-folder';
      folder.style.paddingLeft = `${indent}px`;
      folder.innerHTML = `
        <span class="tree-chevron">${isOpen ? '▼' : '▶'}</span>
        <span class="tree-name">${node.name}</span>`;
      folder.addEventListener('click', () => toggleFolder(node.name));
      tree.appendChild(folder);
      if (isOpen) node.children.forEach(c => renderNode(c, depth + 1));
    } else {
      const item = document.createElement('div');
      item.className = `tree-item${state.activeTab === node.id ? ' active' : ''}`;
      item.style.paddingLeft = `${indent}px`;
      item.innerHTML = `<span class="tree-file-dot"></span><span class="tree-name">${node.name}</span>`;
      item.addEventListener('click', () => openFile(node.id));
      tree.appendChild(item);
    }
  }

  fileTree.forEach(node => renderNode(node, 0));
}

function renderTabs() {
  const bar = document.getElementById('tab-bar');
  if (!bar) return;
  bar.innerHTML = '';

  state.openTabs.forEach(id => {
    const file = files[id];
    if (!file) return;

    const tab = document.createElement('div');
    tab.className = `tab${state.activeTab === id ? ' active' : ''}`;
    tab.innerHTML = `
      <div class="tab-icon"></div>
      <span class="tab-name">${file.name}</span>
      <span class="tab-close">×</span>`;

    tab.addEventListener('click', e => {
      if (e.target.classList.contains('tab-close')) {
        e.stopPropagation();
        closeTab(id);
      } else {
        setActiveTab(id);
      }
    });

    bar.appendChild(tab);
  });
}

function renderBreadcrumb() {
  const el = document.getElementById('breadcrumb');
  if (!el) return;

  const file = files[state.activeTab];
  if (!file) { el.innerHTML = ''; return; }

  const parts = ['The-Absurd-Machine'];
  for (const node of fileTree) {
    if (node.type === 'folder') {
      for (const child of node.children) {
        if (child.id === state.activeTab) { parts.push(node.name); break; }
      }
    }
  }
  parts.push(file.name);

  el.innerHTML = parts.map((p, i) =>
    `<span class="${i === parts.length - 1 ? 'bc-item bc-active' : 'bc-item'}">${p}</span>${i < parts.length - 1 ? '<span class="bc-sep">›</span>' : ''}`
  ).join('');
}

function renderEditorContent() {
  const lineNums = document.getElementById('line-numbers');
  const content = document.getElementById('editor-content');
  const scrollArea = document.getElementById('editor-scroll');
  if (!lineNums || !content) return;

  const file = files[state.activeTab];
  if (!file) {
    lineNums.innerHTML = '';
    content.innerHTML = '';
    renderMinimap(null);
    return;
  }

  const lines = file.content.split('\n');

  lineNums.innerHTML = lines.map((_, i) =>
    `<span class="line-num">${i + 1}</span>`
  ).join('');

  content.innerHTML = lines.map((line, i) =>
    `<div class="editor-line" data-line="${i + 1}">${renderLine(line)}</div>`
  ).join('');

  if (scrollArea) scrollArea.scrollTop = 0;
  state.cursorLine = 1;
  renderMinimap(lines);
  renderStatusBar();
}

function renderMinimap(lines) {
  const el = document.getElementById('minimap');
  if (!el) return;
  if (!lines) { el.innerHTML = ''; return; }

  el.innerHTML = '<div class="minimap-content">' +
    lines.map(line => {
      if (!line.trim()) return '<div class="mini-line" style="width:0"></div>';
      let color = '#404040', width = '70%';
      if (/^# /.test(line))   { color = '#4fc1ff'; width = '75%'; }
      else if (/^## /.test(line))  { color = '#9cdcfe'; width = '60%'; }
      else if (/^### /.test(line)) { color = '#ce9178'; width = '50%'; }
      else if (/^> /.test(line))   { color = '#6a9955'; width = '80%'; }
      else if (/^- /.test(line))   { color = '#569cd6'; width = '72%'; }
      else if (/^---/.test(line))  { color = '#2a2a2a'; width = '100%'; }
      else if (/^ {4}/.test(line)) { color = '#9cdcfe'; width = '55%'; }
      return `<div class="mini-line" style="background:${color};width:${width}"></div>`;
    }).join('') +
  '</div>';
}

function renderStatusBar() {
  const el = document.getElementById('statusbar');
  if (!el) return;

  const file = files[state.activeTab];
  const lineCount = file ? file.content.split('\n').length : 0;
  const lang = file ? 'Markdown' : 'plaintext';

  el.innerHTML = `
    <div class="statusbar-left">
      <div class="sb-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        main
      </div>
      <div class="sb-item">⎇ main</div>
    </div>
    <div class="statusbar-right">
      <div class="sb-item">Ln ${state.cursorLine}, Col 1</div>
      <div class="sb-item">${lineCount} lines</div>
      <div class="sb-item">${lang}</div>
      <div class="sb-item">UTF-8</div>
    </div>`;
}

// ===========================
// ACTIONS
// ===========================

function openFile(id) {
  if (!state.openTabs.includes(id)) state.openTabs.push(id);
  state.activeTab = id;
  closeMobileSidebar();
  renderAll();
}

function closeTab(id) {
  const idx = state.openTabs.indexOf(id);
  if (idx === -1) return;
  state.openTabs.splice(idx, 1);
  if (state.activeTab === id) {
    state.activeTab = state.openTabs[Math.max(0, idx - 1)] || null;
  }
  renderAll();
}

function setActiveTab(id) {
  state.activeTab = id;
  renderAll();
}

function toggleFolder(name) {
  state.openFolders.has(name) ? state.openFolders.delete(name) : state.openFolders.add(name);
  renderFileTree();
}

function renderAll() {
  renderTabs();
  renderBreadcrumb();
  renderEditorContent();
  renderFileTree();
}

// ===========================
// BOOT SCREEN
// ===========================

function boot() {
  const screen = document.createElement('div');
  screen.className = 'boot-screen';

  const content = document.createElement('div');
  content.className = 'boot-content';
  screen.appendChild(content);
  document.body.appendChild(screen);

  const lines = [
    { text: '> initializing the absurd machine...', delay: 0 },
    { text: '> loading portfolio data...', delay: 350 },
    { text: '> mounting filesystem...', delay: 650 },
    { text: '> opening README.md', delay: 900 },
  ];

  lines.forEach(({ text, delay }) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = 'boot-line';
      line.textContent = text;
      content.appendChild(line);
    }, delay);
  });

  setTimeout(() => {
    screen.style.opacity = '0';
    setTimeout(() => {
      screen.remove();
    }, 500);
  }, 1300);
}

// ===========================
// INIT
// ===========================

function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('mobile-open');
  document.getElementById('sidebar-overlay')?.classList.remove('open');
}

function init() {
  const app = document.getElementById('app');

  app.appendChild(buildTitleBar());
  app.appendChild(buildMenuBar());

  // Overlay for mobile sidebar
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  overlay.addEventListener('click', closeMobileSidebar);
  app.appendChild(overlay);

  const workbench = document.createElement('div');
  workbench.className = 'workbench';
  workbench.appendChild(buildActivityBar());
  workbench.appendChild(buildSidebar());
  workbench.appendChild(buildEditorArea());
  app.appendChild(workbench);

  app.appendChild(buildStatusBar());

  // Hamburger toggle
  document.getElementById('hamburger')?.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const isOpen = sidebar?.classList.contains('mobile-open');
    if (isOpen) {
      closeMobileSidebar();
    } else {
      sidebar?.classList.add('mobile-open');
      sidebarOverlay?.classList.add('open');
    }
  });

  renderAll();
}

boot();
setTimeout(init, 100);
