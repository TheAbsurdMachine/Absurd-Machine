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

- **Neon Void**    [active]      arcade space shooter · live at mayphex.com
- **ByteBrawn**    [active]      fitness tracking with no excuses
- **Mayphex**      [prototype]   scheduling, probably

---

## Recent Posts

- On Building Things That Shouldn't Exist

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
    content: `# Neon Void

**Status:** [active]
**Live:** mayphex.com
**Repo:** github.com/TheAbsurdMachine/Neon-Void
**Stack:** TypeScript · React 18 · Canvas 2D · Vite 7

---

## What Is It?

A neon arcade space shooter. You're alone in the void — one ship
against escalating enemy waves. Drift, shoot, chain combos,
spend credits in the Void Shop between rounds.

That's the loop. It's meant to be fun first.

---

## The Loop

    LAUNCH → FIGHT THE WAVE → EARN CREDITS → VOID SHOP → NEXT WAVE
                 ↑                                              |
                 └──────────── boss waves · bigger stakes ──────┘

Waves escalate from Drifters to Hunters, Orbiters, Splitters, and Bosses.
Movement is momentum-based: you drift, you don't stop on a dime.

Between waves the **Void Shop** opens — spend CR on blasters (Pulse Bolt
→ Needle Stream → Shard Burst → Pierce Lance → Twin Stream → Nova Cannon),
hull repair, and ship skins. Loadout persists across runs.

---

## Why Build a Game?

Three goals, in order:

1. Make something fun enough that people actually play it
2. Use the sim as an ML training environment
3. Port it into Palantir Foundry as a side experiment

The game is the product. Everything else is a side effect.

---

## ML Training Environment

The sim runs headless. \`GameSim({ headless: true })\` gives fast rollouts
without rendering. \`observe(sim)\` returns a normalized Float32Array.
18 discrete actions map to inputs via \`agentActionToInput()\`.

A rule-based bot (RuleBot) is live in AI Mode today.
Trained models are next.

---

## Stack

- TypeScript + React 18 for the UI shell
- Canvas 2D for the engine — no Unity, no Phaser
- Vite 7
- localStorage, local-first
- Capacitor for iOS (same codebase, no Swift)

Clean boundary between play and train.`
  },

  'byte-brawn': {
    name: 'byte-brawn.md',
    content: `# ByteBrawn

**Status:** [active]
**Repo:** github.com/TheAbsurdMachine/ByteBrawn
**Stack:** Vanilla JS · No backend · PWA

---

## What Is It?

Fitness tracking with no excuses.
No subscriptions. No social features. No gamification.

Just: did you lift today, or not?

---

## Why?

Every fitness app wants to be your coach, your community, your therapist.

Most people just need a log. One that doesn't require an account to
remember that you did 3×10 squats on Tuesday.

ByteBrawn is that log.

---

## Principles

- Local-first. Your data stays on your device.
- No account required. No server. No cloud sync.
- Fast. Loads instantly. Works offline.
- Honest. Tracks what you did, not what the app wants you to do.

---

## Current State

- Core tracking works
- localStorage persistence
- Basic session history

Coming next: data export, PR (personal record) tracking, graph view.

---

## Stack

- Vanilla JS — no framework
- localStorage for persistence
- PWA manifest for mobile install

The point is it could be a single HTML file and work fine.`
  },

  mayphex: {
    name: 'mayphex.md',
    content: `# Mayphex

**Status:** [prototype]
**Repo:** github.com/TheAbsurdMachine/Mayphex

---

## What Is It?

Still figuring it out.

Working idea: a scheduling tool for people who already know
what they need to do — but keep not doing it because the
tooling gets in the way.

Every calendar app is designed for someone who already has
their life together. Mayphex is for the other kind of person.

---

## The Problem

Scheduling tools assume you want to schedule. They front-load
configuration: recurring events, color codes, shared calendars,
integrations with seven other apps.

Most people just need to know: what am I doing today, and when?

---

## Current State

- Concept phase
- Some sketches
- No code yet

The questions still outnumber the answers.
That's the right stage to be in.

---

## Questions To Answer

- What is the actual atomic unit of a schedule?
  (A task? A block? An intention?)
- What happens when someone misses a block?
  (Reschedule, or just move on?)
- Why would anyone use this over a notes app and a phone alarm?

The answer to the last one might be "they wouldn't."
Build it anyway.`
  },

  'post-1': {
    name: 'on-building-absurd-things.md',
    content: `# On Building Things That Shouldn't Exist

*Jun 2025*

---

There is a certain kind of project that makes no business sense.

No market research. No TAM. No product-market fit.
Just an idea that won't leave you alone at 2am.

These are the only projects worth building.

---

## The Problem With Side Projects

Most side projects die in one of two places:

1. The prototype works but never gets written about
2. The post gets written but never turns into anything real

I've done both. Built a prototype, felt good about it, moved on.
Wrote a post, published it, forgot about the underlying project.

Neither one counts as shipping.

---

## A Forcing Function

The fix is structure. A pipeline where each stage makes the next
stage unavoidable.

    idea
      ↓
    repo       // commitment. you named it. it exists now.
      ↓
    prototype  // does it work? close enough counts.
      ↓
    post       // explain it. you'll find the holes.
      ↓
    video      // teach it. you'll find more holes.
      ↓
    ship

The post forces clarity. You can't write about something you
don't understand, and the act of writing surfaces every assumption
you made during the prototype.

The video forces depth. You can't teach something you can't explain
out loud, and the act of recording finds every gap the writing missed.

By the time you ship, you've interrogated the thing from three angles.
You know why it works. You know where it doesn't. That's the point.

---

## What This Looks Like In Practice

**Neon Void** started as "what if I built a game." No more specific
than that. The prototype was a ship that could move and shoot.
Then enemies. Then a shop. Then it was a real game.

The post forced me to articulate why the ML training environment
mattered — which forced me to actually build the observation/action
API properly, not just gesture at it.

**ByteBrawn** started as frustration. Every fitness app wants to
coach you. Sometimes you just want a log. The prototype was a
single text input and a submit button. The constraints came later,
from writing about why each decision was made.

The pattern holds: the project gets better in the writing,
not just in the building.

---

## Why "Absurd Machine"?

A machine that runs on absurd inputs.

An idea that makes no business sense
→ becomes a thing that exists and works.

The inputs are absurd. The output is real. That gap — between
"this makes no sense" and "this is a thing now" — is the point.

That's the whole machine.`
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
  openFolders: new Set(['projects', 'blog']),
  cursorLine: 1,
  windowOpen: true,
  windowMaximized: false,
};

// ===========================
// UTILS
// ===========================

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderInline(raw) {
  let s = esc(raw);
  s = s.replace(/\*\*(.+?)\*\*/g, '<span class="syn-bold">**$1**</span>');
  s = s.replace(/`(.+?)`/g, '<span class="syn-inline-code">`$1`</span>');
  s = s.replace(/\[(active)\]/g, '<span class="syn-bracket status-active">[$1]</span>');
  s = s.replace(/\[(prototype)\]/g, '<span class="syn-bracket status-prototype">[$1]</span>');
  s = s.replace(/\[(draft|unpublished)\]/g, '<span class="syn-bracket status-draft">[$1]</span>');
  s = s.replace(/\[([^\]]+)\]/g, '<span class="syn-bracket">[$1]</span>');
  s = s.replace(/→/g, '<span class="syn-arrow">→</span>');
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
  if (/^ {4}/.test(line)) {
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
// IDE BUILDERS (shared)
// ===========================

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
  el.id = 'sidebar';
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
    state.cursorLine = Math.floor(scrollArea.scrollTop / 22) + 1;
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
      folder.innerHTML = `<span class="tree-chevron">${isOpen ? '▼' : '▶'}</span><span class="tree-name">${node.name}</span>`;
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
    tab.innerHTML = `<div class="tab-icon"></div><span class="tab-name">${file.name}</span><span class="tab-close">×</span>`;
    tab.addEventListener('click', e => {
      if (e.target.classList.contains('tab-close')) { e.stopPropagation(); closeTab(id); }
      else setActiveTab(id);
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
  if (!file) { lineNums.innerHTML = ''; content.innerHTML = ''; renderMinimap(null); return; }

  const lines = file.content.split('\n');
  lineNums.innerHTML = lines.map((_, i) => `<span class="line-num">${i + 1}</span>`).join('');
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
      if (/^# /.test(line))   { color = '#4fc1ff'; width = '80%'; }
      else if (/^## /.test(line))  { color = '#9cdcfe'; width = '65%'; }
      else if (/^### /.test(line)) { color = '#ce9178'; width = '55%'; }
      else if (/^> /.test(line))   { color = '#6a9955'; width = '85%'; }
      else if (/^- /.test(line))   { color = '#569cd6'; width = '75%'; }
      else if (/^---/.test(line))  { color = '#2a2a2a'; width = '100%'; }
      else if (/^ {4}/.test(line)) { color = '#9cdcfe'; width = '60%'; }
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

function renderAll() {
  renderTabs();
  renderBreadcrumb();
  renderEditorContent();
  renderFileTree();
}

// ===========================
// IDE ACTIONS
// ===========================

function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('mobile-open');
  document.getElementById('sidebar-overlay')?.classList.remove('open');
}

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
  if (state.activeTab === id) state.activeTab = state.openTabs[Math.max(0, idx - 1)] || null;
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

// ===========================
// WINDOW MANAGER
// ===========================

let topZ = 10;
function bringToFront(win) { win.style.zIndex = ++topZ; }

function winFadeIn(win) {
  win.style.display = 'flex';
  win.style.opacity = '0';
  win.style.transform = 'scale(0.96) translateY(8px)';
  requestAnimationFrame(() => {
    win.style.transition = 'opacity 0.18s, transform 0.18s';
    win.style.opacity = '1';
    win.style.transform = 'scale(1) translateY(0)';
    setTimeout(() => win.style.transition = '', 200);
  });
}

function winFadeOut(win, then) {
  win.style.transition = 'opacity 0.18s, transform 0.18s';
  win.style.opacity = '0';
  win.style.transform = 'scale(0.96) translateY(8px)';
  setTimeout(() => { win.style.transition = ''; if (then) then(); }, 200);
}

function winToggleMax(win) {
  if (win._maximized) {
    win._maximized = false;
    win.classList.remove('maximized');
    if (win._preMax) {
      win.style.transition = 'all 0.2s ease';
      Object.assign(win.style, win._preMax);
      setTimeout(() => win.style.transition = '', 220);
    }
  } else {
    win._maximized = true;
    win._preMax = { top: win.style.top, left: win.style.left, width: win.style.width, height: win.style.height };
    win.style.transition = 'all 0.2s ease';
    win.classList.add('maximized');
    setTimeout(() => win.style.transition = '', 220);
  }
}

function attachWindowChrome(win, titlebar, { onClose, onMinimize, onMax } = {}) {
  titlebar.querySelector('.light-red').addEventListener('click', e => {
    e.stopPropagation();
    winFadeOut(win, onClose || (() => win.style.display = 'none'));
    const dot = win._dockDot;
    if (dot) dot.classList.add('hidden');
  });
  titlebar.querySelector('.light-yellow').addEventListener('click', e => {
    e.stopPropagation();
    if (onMinimize) onMinimize();
    else winFadeOut(win, () => win.style.display = 'none');
    const dot = win._dockDot;
    if (dot) dot.classList.add('hidden');
  });
  titlebar.querySelector('.light-green').addEventListener('click', e => {
    e.stopPropagation();
    if (onMax) onMax(); else winToggleMax(win);
  });
  titlebar.addEventListener('dblclick', e => {
    if (e.target.classList.contains('light')) return;
    if (onMax) onMax(); else winToggleMax(win);
  });
  win.addEventListener('mousedown', () => bringToFront(win));
}

function openAppWindow({ id, title, width, height, buildContent, offset = { x: 0, y: 0 }, dockDot }) {
  const desktop = document.querySelector('.desktop');
  const existing = document.getElementById(id);
  if (existing) {
    if (existing.style.display === 'none') {
      winFadeIn(existing);
      if (dockDot) dockDot.classList.remove('hidden');
    }
    bringToFront(existing);
    return existing;
  }

  const w = Math.min(width, window.innerWidth * 0.88);
  const h = Math.min(height, window.innerHeight * 0.84);
  const left = (window.innerWidth - w) / 2 + offset.x;
  const top = 28 + (window.innerHeight - 28 - h) / 2 + offset.y;

  const win = document.createElement('div');
  win.className = 'ide-window';
  win.id = id;
  win.style.cssText = `width:${w}px;height:${h}px;left:${left}px;top:${top}px;`;
  win._dockDot = dockDot || null;

  const titlebar = document.createElement('div');
  titlebar.className = 'window-titlebar';
  titlebar.innerHTML = `
    <div class="traffic-lights">
      <span class="light light-red"></span>
      <span class="light light-yellow"></span>
      <span class="light light-green"></span>
    </div>
    <span class="titlebar-title">${title}</span>`;

  const contentEl = buildContent();
  contentEl.style.cssText = 'flex:1;overflow:hidden;display:flex;flex-direction:column;min-height:0;';

  win.appendChild(titlebar);
  win.appendChild(contentEl);

  attachWindowChrome(win, titlebar);
  makeDraggable(win, titlebar);

  desktop.appendChild(win);
  bringToFront(win);
  if (dockDot) dockDot.classList.remove('hidden');
  return win;
}

// ===========================
// APP CONTENT BUILDERS
// ===========================


function buildBlogContent(initialSlug = null) {
  const blogEntries = [
    {
      id: 'post-1',
      slug: 'on-building-absurd-things',
      title: "On Building Things That Shouldn't Exist",
      date: 'Jun 2025',
      desc: "A meditation on projects that make no business sense — and why that's exactly the point.",
    },
  ];

  let currentView = 'home';

  const el = document.createElement('div');
  el.style.cssText = 'display:flex;flex-direction:column;height:100%;background:#111;overflow:hidden;';

  // ── Browser toolbar ──
  const toolbar = document.createElement('div');
  toolbar.style.cssText = 'height:40px;background:#2a2a2a;border-bottom:1px solid #111;display:flex;align-items:center;padding:0 10px;gap:6px;flex-shrink:0;';

  const backBtn = document.createElement('button');
  backBtn.style.cssText = 'background:none;border:none;color:#444;font-size:17px;cursor:default;padding:4px 6px;line-height:1;';
  backBtn.textContent = '←';

  const fwdBtn = document.createElement('button');
  fwdBtn.style.cssText = 'background:none;border:none;color:#444;font-size:17px;cursor:default;padding:4px 6px;line-height:1;';
  fwdBtn.textContent = '→';

  const homeBtn = document.createElement('button');
  homeBtn.title = 'Home';
  homeBtn.style.cssText = 'background:none;border:none;color:#888;font-size:15px;cursor:pointer;padding:4px 6px;border-radius:4px;line-height:1;';
  homeBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z"/></svg>`;

  const addrBar = document.createElement('div');
  addrBar.style.cssText = 'flex:1;background:#3a3a3a;border-radius:6px;padding:5px 12px;font-size:12px;color:#bbb;font-family:system-ui;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
  addrBar.textContent = 'https://TheAbsurdMachine.com/blog';

  toolbar.appendChild(backBtn);
  toolbar.appendChild(fwdBtn);
  toolbar.appendChild(homeBtn);
  toolbar.appendChild(addrBar);

  const navHistory = [];
  let navIdx = -1;
  function pushNav(view) {
    navHistory.splice(navIdx + 1);
    navHistory.push(view);
    navIdx = navHistory.length - 1;
    updateNavBtns();
  }
  function updateNavBtns() {
    const canBack = navIdx > 0;
    const canFwd = navIdx < navHistory.length - 1;
    backBtn.style.color = canBack ? '#ccc' : '#444';
    backBtn.style.cursor = canBack ? 'pointer' : 'default';
    fwdBtn.style.color = canFwd ? '#ccc' : '#444';
    fwdBtn.style.cursor = canFwd ? 'pointer' : 'default';
  }
  function goToView(view) {
    if (view === 'home') showHome(false);
    else if (view === 'about') showAbout(false);
    else showPost(view, false);
  }

  // ── Inline styles ──
  const style = document.createElement('style');
  style.textContent = `
    .blog-article h1{font-size:2em;font-weight:800;color:#fff;margin:0 0 .25em;line-height:1.15;}
    .blog-article h2{font-size:1.3em;font-weight:700;color:#e0e0e0;margin:2em 0 .5em;padding-bottom:.3em;border-bottom:1px solid #222;}
    .blog-article h3{font-size:1.05em;font-weight:700;color:#ccc;margin:1.5em 0 .4em;}
    .blog-article p{margin:0 0 1.1em;line-height:1.8;color:#bbb;}
    .blog-article ul,.blog-article ol{margin:0 0 1.1em;padding-left:1.5em;color:#bbb;}
    .blog-article li{margin-bottom:.4em;line-height:1.7;}
    .blog-article blockquote{border-left:3px solid #007acc;margin:0 0 1.1em;padding:.5em 1em;color:#777;font-style:italic;}
    .blog-article hr{border:none;border-top:1px solid #222;margin:2em 0;}
    .blog-article code{background:#1a1a1a;color:#ce9178;padding:1px 5px;border-radius:3px;font-size:.88em;font-family:"JetBrains Mono",Consolas,monospace;}
    .blog-article pre{background:#141414;border:1px solid #222;border-radius:6px;padding:16px;overflow-x:auto;margin:0 0 1.2em;}
    .blog-article pre code{background:none;padding:0;font-size:13px;color:#9cdcfe;line-height:1.65;}
    .blog-article a{color:#58a6ff;text-decoration:none;}
    .blog-article a:hover{text-decoration:underline;}
    .blog-tag{color:#d7ba7d;}
    .blog-post-meta{font-size:.85em;color:#555;margin:.25em 0 2em;}
    .blog-index-item{border-top:1px solid #1a1a1a;padding:22px 0;cursor:pointer;}
    .blog-index-title{font-size:25px;font-weight:700;color:#ddd;transition:color 0.15s;}
    .blog-index-item:hover .blog-index-title{color:#fff;}`;

  // ── Content area ──
  const content = document.createElement('div');
  content.style.cssText = 'flex:1;overflow-y:auto;background:#0d0d0d;';

  function siteHeader() {
    const d = document.createElement('div');
    d.style.cssText = 'border-bottom:1px solid #181818;padding:18px 0;flex-shrink:0;';
    const inner = document.createElement('div');
    inner.style.cssText = 'max-width:700px;margin:0 auto;padding:0 28px;font-family:system-ui;display:flex;align-items:center;justify-content:space-between;';
    const brand = document.createElement('span');
    brand.textContent = 'The Absurd Machine';
    brand.style.cssText = 'font-size:25px;font-weight:700;color:#fff;cursor:pointer;';
    brand.addEventListener('click', showHome);
    const aboutLink = document.createElement('span');
    aboutLink.textContent = 'About';
    aboutLink.style.cssText = 'font-size:13px;font-weight:700;color:#666;cursor:pointer;transition:color 0.15s;';
    aboutLink.addEventListener('mouseover', () => aboutLink.style.color = '#ccc');
    aboutLink.addEventListener('mouseout', () => aboutLink.style.color = '#666');
    aboutLink.addEventListener('click', showAbout);
    inner.appendChild(brand);
    inner.appendChild(aboutLink);
    d.appendChild(inner);
    return d;
  }

  function showHome(push = true) {
    currentView = 'home';
    if (push) pushNav('home');
    addrBar.textContent = 'https://TheAbsurdMachine.com/blog';
    history.pushState({}, '', '/blog');
    content.innerHTML = '';

    content.appendChild(siteHeader());

    const wrap = document.createElement('div');
    wrap.style.cssText = 'max-width:700px;margin:24px auto 100px;padding:0 28px;font-family:-apple-system,"Segoe UI",sans-serif;';
    wrap.innerHTML = `<h1 style="font-size:27px;font-weight:700;color:#fff;margin:0 0 20px;">Posts</h1>`;

    blogEntries.forEach(entry => {
      const item = document.createElement('div');
      item.className = 'blog-index-item';
      item.innerHTML = `
        <span style="font-size:11px;color:#555;display:block;margin-bottom:5px;">${entry.date}</span>
        <span class="blog-index-title">${entry.title}</span>`;
      item.addEventListener('click', () => showPost(entry.id));
      wrap.appendChild(item);
    });

    content.appendChild(wrap);
    content.scrollTop = 0;
  }

  function blogInline(text) {
    let s = esc(text);
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    s = s.replace(/`(.+?)`/g, '<code>$1</code>');
    s = s.replace(/→/g, '→');
    s = s.replace(/\[(active|prototype|draft|unpublished|coming soon)\]/g, '<span class="blog-tag">[$1]</span>');
    s = s.replace(/\[([^\]]+)\]/g, '<span style="color:#9cdcfe;">[$1]</span>');
    return s;
  }

  function mdToHtml(md) {
    const lines = md.split('\n');
    let out = '', para = [], inUl = false, inOl = false, inPre = false;
    const flushPara = () => { if (para.length) { const t = para.join(' ').trim(); if (t) out += `<p>${t}</p>`; para = []; } };
    const closeLists = () => { if (inUl) { out += '</ul>'; inUl = false; } if (inOl) { out += '</ol>'; inOl = false; } };
    for (const line of lines) {
      if (/^ {4}/.test(line)) { flushPara(); closeLists(); if (!inPre) { out += '<pre><code>'; inPre = true; } out += esc(line.slice(4)) + '\n'; continue; }
      if (inPre) { out += '</code></pre>'; inPre = false; }
      if (/^- /.test(line)) { flushPara(); if (!inUl) { closeLists(); out += '<ul>'; inUl = true; } out += `<li>${blogInline(line.slice(2))}</li>`; continue; }
      if (/^\d+\. /.test(line)) { flushPara(); if (!inOl) { closeLists(); out += '<ol>'; inOl = true; } const m = line.match(/^\d+\. (.*)/); out += `<li>${blogInline(m[1])}</li>`; continue; }
      closeLists();
      if (!line.trim()) { flushPara(); continue; }
      if (/^# /.test(line))    { flushPara(); out += `<h1>${blogInline(line.slice(2))}</h1>`; continue; }
      if (/^## /.test(line))   { flushPara(); out += `<h2>${blogInline(line.slice(3))}</h2>`; continue; }
      if (/^### /.test(line))  { flushPara(); out += `<h3>${blogInline(line.slice(4))}</h3>`; continue; }
      if (/^> /.test(line))    { flushPara(); out += `<blockquote>${blogInline(line.slice(2))}</blockquote>`; continue; }
      if (/^---+$/.test(line)) { flushPara(); out += '<hr>'; continue; }
      if (/^\*[^*]/.test(line)){ flushPara(); out += `<p class="blog-post-meta">${esc(line.replace(/^\*|\*$/g, ''))}</p>`; continue; }
      para.push(blogInline(line));
    }
    flushPara(); closeLists();
    if (inPre) out += '</code></pre>';
    return out;
  }

  function showPost(id, push = true) {
    const entry = blogEntries.find(e => e.id === id);
    currentView = id;
    if (push) pushNav(id);
    addrBar.textContent = `https://TheAbsurdMachine.com/blog/${entry.slug}`;
    history.pushState({}, '', `/blog/${entry.slug}`);
    content.innerHTML = '';
    content.appendChild(siteHeader());
    const article = document.createElement('article');
    article.className = 'blog-article';
    article.style.cssText = 'max-width:700px;margin:52px auto 100px;padding:0 28px;font-family:-apple-system,"Segoe UI",sans-serif;';
    article.innerHTML = mdToHtml(files[id].content);
    content.appendChild(article);
    content.scrollTop = 0;
  }

  function showAbout(push = true) {
    currentView = 'about';
    if (push) pushNav('about');
    addrBar.textContent = 'https://TheAbsurdMachine.com/about';
    history.pushState({}, '', '/about');
    content.innerHTML = '';
    content.appendChild(siteHeader());
    const article = document.createElement('article');
    article.className = 'blog-article';
    article.style.cssText = 'max-width:700px;margin:52px auto 100px;padding:0 28px;font-family:-apple-system,"Segoe UI",sans-serif;';
    article.innerHTML = mdToHtml(files['about'].content);
    content.appendChild(article);
    content.scrollTop = 0;
  }

  backBtn.addEventListener('click', () => {
    if (navIdx > 0) { navIdx--; goToView(navHistory[navIdx]); updateNavBtns(); }
  });
  fwdBtn.addEventListener('click', () => {
    if (navIdx < navHistory.length - 1) { navIdx++; goToView(navHistory[navIdx]); updateNavBtns(); }
  });
  homeBtn.addEventListener('click', showHome);

  el.appendChild(style);
  el.appendChild(toolbar);
  el.appendChild(content);
  if (initialSlug) {
    const entry = blogEntries.find(e => e.slug === initialSlug);
    entry ? showPost(entry.id) : showHome();
  } else {
    showHome();
  }
  return el;
}

function buildProjectsContent(initialSlug = null) {
  const projectEntries = [
    { id: 'neon-void',   slug: 'neon-void',   title: 'Neon Void',   date: '2024' },
    { id: 'byte-brawn',  slug: 'byte-brawn',  title: 'ByteBrawn',   date: '2024' },
    { id: 'mayphex',     slug: 'mayphex',     title: 'Mayphex',     date: '2025' },
  ];

  let currentView = 'home';

  const el = document.createElement('div');
  el.style.cssText = 'display:flex;flex-direction:column;height:100%;background:#111;overflow:hidden;';

  const toolbar = document.createElement('div');
  toolbar.style.cssText = 'height:40px;background:#2a2a2a;border-bottom:1px solid #111;display:flex;align-items:center;padding:0 10px;gap:6px;flex-shrink:0;';

  const backBtn = document.createElement('button');
  backBtn.style.cssText = 'background:none;border:none;color:#444;font-size:17px;cursor:default;padding:4px 6px;line-height:1;';
  backBtn.textContent = '←';

  const fwdBtn = document.createElement('button');
  fwdBtn.style.cssText = 'background:none;border:none;color:#444;font-size:17px;cursor:default;padding:4px 6px;line-height:1;';
  fwdBtn.textContent = '→';

  const homeBtn = document.createElement('button');
  homeBtn.title = 'Home';
  homeBtn.style.cssText = 'background:none;border:none;color:#888;font-size:15px;cursor:pointer;padding:4px 6px;border-radius:4px;line-height:1;';
  homeBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z"/></svg>`;

  const addrBar = document.createElement('div');
  addrBar.style.cssText = 'flex:1;background:#3a3a3a;border-radius:6px;padding:5px 12px;font-size:12px;color:#bbb;font-family:system-ui;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
  addrBar.textContent = 'https://TheAbsurdMachine.com/projects';

  toolbar.appendChild(backBtn);
  toolbar.appendChild(fwdBtn);
  toolbar.appendChild(homeBtn);
  toolbar.appendChild(addrBar);

  const navHistory = [];
  let navIdx = -1;
  function pushNav(view) {
    navHistory.splice(navIdx + 1);
    navHistory.push(view);
    navIdx = navHistory.length - 1;
    updateNavBtns();
  }
  function updateNavBtns() {
    const canBack = navIdx > 0;
    const canFwd = navIdx < navHistory.length - 1;
    backBtn.style.color = canBack ? '#ccc' : '#444';
    backBtn.style.cursor = canBack ? 'pointer' : 'default';
    fwdBtn.style.color = canFwd ? '#ccc' : '#444';
    fwdBtn.style.cursor = canFwd ? 'pointer' : 'default';
  }
  function goToView(view) {
    if (view === 'home') showHome(false);
    else if (view === 'about') showAbout(false);
    else showProject(view, false);
  }

  const style = document.createElement('style');
  style.textContent = `
    .proj-article h1{font-size:2em;font-weight:800;color:#fff;margin:0 0 .25em;line-height:1.15;}
    .proj-article h2{font-size:1.3em;font-weight:700;color:#e0e0e0;margin:2em 0 .5em;padding-bottom:.3em;border-bottom:1px solid #222;}
    .proj-article h3{font-size:1.05em;font-weight:700;color:#ccc;margin:1.5em 0 .4em;}
    .proj-article p{margin:0 0 1.1em;line-height:1.8;color:#bbb;}
    .proj-article ul,.proj-article ol{margin:0 0 1.1em;padding-left:1.5em;color:#bbb;}
    .proj-article li{margin-bottom:.4em;line-height:1.7;}
    .proj-article blockquote{border-left:3px solid #4ec9b0;margin:0 0 1.1em;padding:.5em 1em;color:#777;font-style:italic;}
    .proj-article hr{border:none;border-top:1px solid #222;margin:2em 0;}
    .proj-article code{background:#1a1a1a;color:#ce9178;padding:1px 5px;border-radius:3px;font-size:.88em;font-family:"JetBrains Mono",Consolas,monospace;}
    .proj-article pre{background:#141414;border:1px solid #222;border-radius:6px;padding:16px;overflow-x:auto;margin:0 0 1.2em;}
    .proj-article pre code{background:none;padding:0;font-size:13px;color:#9cdcfe;line-height:1.65;}
    .proj-article a{color:#4ec9b0;text-decoration:none;}
    .proj-article a:hover{text-decoration:underline;}
    .proj-tag{color:#d7ba7d;}
    .proj-post-meta{font-size:.85em;color:#555;margin:.25em 0 2em;}
    .proj-index-item{border-top:1px solid #1a1a1a;padding:22px 0;cursor:pointer;}
    .proj-index-title{font-size:25px;font-weight:700;color:#ddd;transition:color 0.15s;}
    .proj-index-item:hover .proj-index-title{color:#fff;}`;

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;overflow-y:auto;background:#0d0d0d;';

  function siteHeader() {
    const d = document.createElement('div');
    d.style.cssText = 'border-bottom:1px solid #181818;padding:18px 0;flex-shrink:0;';
    const inner = document.createElement('div');
    inner.style.cssText = 'max-width:700px;margin:0 auto;padding:0 28px;font-family:system-ui;display:flex;align-items:center;justify-content:space-between;';
    const brand = document.createElement('span');
    brand.textContent = 'The Absurd Machine';
    brand.style.cssText = 'font-size:25px;font-weight:700;color:#fff;cursor:pointer;';
    brand.addEventListener('click', showHome);
    const aboutLink = document.createElement('span');
    aboutLink.textContent = 'About';
    aboutLink.style.cssText = 'font-size:13px;font-weight:700;color:#666;cursor:pointer;transition:color 0.15s;';
    aboutLink.addEventListener('mouseover', () => aboutLink.style.color = '#ccc');
    aboutLink.addEventListener('mouseout', () => aboutLink.style.color = '#666');
    aboutLink.addEventListener('click', showAbout);
    inner.appendChild(brand);
    inner.appendChild(aboutLink);
    d.appendChild(inner);
    return d;
  }

  function projInline(text) {
    let s = esc(text);
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    s = s.replace(/`(.+?)`/g, '<code>$1</code>');
    s = s.replace(/→/g, '→');
    s = s.replace(/\[(active|prototype|draft|unpublished|coming soon)\]/g, '<span class="proj-tag">[$1]</span>');
    s = s.replace(/\[([^\]]+)\]/g, '<span style="color:#9cdcfe;">[$1]</span>');
    return s;
  }

  function mdToHtml(md) {
    const lines = md.split('\n');
    let out = '', para = [], inUl = false, inOl = false, inPre = false;
    const flushPara = () => { if (para.length) { const t = para.join(' ').trim(); if (t) out += `<p>${t}</p>`; para = []; } };
    const closeLists = () => { if (inUl) { out += '</ul>'; inUl = false; } if (inOl) { out += '</ol>'; inOl = false; } };
    for (const line of lines) {
      if (/^ {4}/.test(line)) { flushPara(); closeLists(); if (!inPre) { out += '<pre><code>'; inPre = true; } out += esc(line.slice(4)) + '\n'; continue; }
      if (inPre) { out += '</code></pre>'; inPre = false; }
      if (/^- /.test(line)) { flushPara(); if (!inUl) { closeLists(); out += '<ul>'; inUl = true; } out += `<li>${projInline(line.slice(2))}</li>`; continue; }
      if (/^\d+\. /.test(line)) { flushPara(); if (!inOl) { closeLists(); out += '<ol>'; inOl = true; } const m = line.match(/^\d+\. (.*)/); out += `<li>${projInline(m[1])}</li>`; continue; }
      closeLists();
      if (!line.trim()) { flushPara(); continue; }
      if (/^# /.test(line))    { flushPara(); out += `<h1>${projInline(line.slice(2))}</h1>`; continue; }
      if (/^## /.test(line))   { flushPara(); out += `<h2>${projInline(line.slice(3))}</h2>`; continue; }
      if (/^### /.test(line))  { flushPara(); out += `<h3>${projInline(line.slice(4))}</h3>`; continue; }
      if (/^> /.test(line))    { flushPara(); out += `<blockquote>${projInline(line.slice(2))}</blockquote>`; continue; }
      if (/^---+$/.test(line)) { flushPara(); out += '<hr>'; continue; }
      if (/^\*[^*]/.test(line)){ flushPara(); out += `<p class="proj-post-meta">${esc(line.replace(/^\*|\*$/g, ''))}</p>`; continue; }
      para.push(projInline(line));
    }
    flushPara(); closeLists();
    if (inPre) out += '</code></pre>';
    return out;
  }

  function showHome(push = true) {
    currentView = 'home';
    if (push) pushNav('home');
    addrBar.textContent = 'https://TheAbsurdMachine.com/projects';
    history.pushState({}, '', '/projects');
    content.innerHTML = '';
    content.appendChild(siteHeader());
    const wrap = document.createElement('div');
    wrap.style.cssText = 'max-width:700px;margin:24px auto 100px;padding:0 28px;font-family:-apple-system,"Segoe UI",sans-serif;';
    wrap.innerHTML = `<h1 style="font-size:27px;font-weight:700;color:#fff;margin:0 0 20px;">Projects</h1>`;
    projectEntries.forEach(entry => {
      const item = document.createElement('div');
      item.className = 'proj-index-item';
      item.innerHTML = `
        <span style="font-size:11px;color:#555;display:block;margin-bottom:5px;">${entry.date}</span>
        <span class="proj-index-title">${entry.title}</span>`;
      item.addEventListener('click', () => showProject(entry.id));
      wrap.appendChild(item);
    });
    content.appendChild(wrap);
    content.scrollTop = 0;
  }

  function showProject(id, push = true) {
    const entry = projectEntries.find(e => e.id === id);
    currentView = id;
    if (push) pushNav(id);
    addrBar.textContent = `https://TheAbsurdMachine.com/projects/${entry.slug}`;
    history.pushState({}, '', `/projects/${entry.slug}`);
    content.innerHTML = '';
    content.appendChild(siteHeader());
    const article = document.createElement('article');
    article.className = 'proj-article';
    article.style.cssText = 'max-width:700px;margin:52px auto 100px;padding:0 28px;font-family:-apple-system,"Segoe UI",sans-serif;';
    article.innerHTML = mdToHtml(files[id].content);
    content.appendChild(article);
    content.scrollTop = 0;
  }

  function showAbout(push = true) {
    currentView = 'about';
    if (push) pushNav('about');
    addrBar.textContent = 'https://TheAbsurdMachine.com/about';
    history.pushState({}, '', '/about');
    content.innerHTML = '';
    content.appendChild(siteHeader());
    const article = document.createElement('article');
    article.className = 'proj-article';
    article.style.cssText = 'max-width:700px;margin:52px auto 100px;padding:0 28px;font-family:-apple-system,"Segoe UI",sans-serif;';
    article.innerHTML = mdToHtml(files['about'].content);
    content.appendChild(article);
    content.scrollTop = 0;
  }

  backBtn.addEventListener('click', () => {
    if (navIdx > 0) { navIdx--; goToView(navHistory[navIdx]); updateNavBtns(); }
  });
  fwdBtn.addEventListener('click', () => {
    if (navIdx < navHistory.length - 1) { navIdx++; goToView(navHistory[navIdx]); updateNavBtns(); }
  });
  homeBtn.addEventListener('click', showHome);

  el.appendChild(style);
  el.appendChild(toolbar);
  el.appendChild(content);
  if (initialSlug) {
    const entry = projectEntries.find(e => e.slug === initialSlug);
    entry ? showProject(entry.id) : showHome();
  } else {
    showHome();
  }
  return el;
}

// ===========================
// WINDOW ACTIONS (desktop IDE window)
// ===========================

function toggleMaximize(win) {
  state.windowMaximized = !state.windowMaximized;
  winToggleMax(win);
}

function closeWindow(win) {
  state.windowOpen = false;
  winFadeOut(win, () => win.style.display = 'none');
  document.getElementById('dock-dot')?.classList.add('hidden');
}

function revealWindow(win) {
  state.windowOpen = true;
  winFadeIn(win);
  document.getElementById('dock-dot')?.classList.remove('hidden');
}

// ===========================
// DESKTOP BUILDERS
// ===========================

function buildWallpaper() {
  const canvas = document.createElement('canvas');
  canvas.className = 'wallpaper';
  const ctx = canvas.getContext('2d');
  let w, h;

  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function draw() {
    ctx.fillStyle = '#080810';
    ctx.fillRect(0, 0, w, h);
    const spacing = 44;
    for (let x = spacing / 2; x < w; x += spacing) {
      for (let y = spacing / 2; y < h; y += spacing) {
        const dx = x - w / 2, dy = y - h / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const wave = (Math.sin(dist / 110 - t) + 1) / 2;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 122, 204, ${wave * 0.13 + 0.02})`;
        ctx.fill();
      }
    }
    t += 0.012;
    requestAnimationFrame(draw);
  }
  draw();
  return canvas;
}

function buildDesktopMenubar() {
  const el = document.createElement('div');
  el.className = 'desktop-menubar';

  const left = document.createElement('div');
  left.className = 'dmb-left';

  const brand = document.createElement('span');
  brand.className = 'dmb-logo';
  brand.textContent = '⌘';

  const name = document.createElement('span');
  name.className = 'dmb-brand';
  name.textContent = 'The Absurd Machine';

  function mbItem(label, onClick) {
    const s = document.createElement('span');
    s.className = 'dmb-item';
    s.textContent = label;
    s.style.cursor = 'pointer';
    s.addEventListener('click', onClick);
    return s;
  }

  left.appendChild(brand);
  left.appendChild(name);
  left.appendChild(mbItem('Portfolio', () => {
    const ide = document.getElementById('ide-window');
    if (ide) { if (ide.style.display === 'none') revealWindow(ide); bringToFront(ide); }
  }));
  left.appendChild(mbItem('Projects', () => {
    const dot = document.getElementById('dock-dot-projects');
    const pw = openAppWindow({ id: 'window-projects', title: 'Projects — The Absurd Machine', width: 1100, height: 800, buildContent: buildProjectsContent, dockDot: dot });
    const w = parseInt(pw.style.width);
    pw.style.left = `${window.innerWidth - w - 20}px`;
    pw.style.top = '48px';
  }));
  left.appendChild(mbItem('Blog', () => {
    const dot = document.getElementById('dock-dot-blog');
    const bw = openAppWindow({ id: 'window-blog', title: 'Blog — The Absurd Machine', width: 1100, height: 800, buildContent: buildBlogContent, dockDot: dot });
    const w = parseInt(bw.style.width);
    bw.style.left = `${window.innerWidth - w - 20}px`;
    bw.style.top = '48px';
  }));
  left.appendChild(mbItem('YouTube', () => window.open('https://youtube.com/@theabsurdmachine', '_blank')));
  left.appendChild(mbItem('GitHub', () => window.open('https://github.com/TheAbsurdMachine', '_blank')));

  const right = document.createElement('div');
  right.className = 'dmb-right';
  const timeEl = document.createElement('span');
  timeEl.className = 'dmb-time';
  right.appendChild(timeEl);

  function tick() { timeEl.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }
  tick();
  setInterval(tick, 10000);

  el.appendChild(left);
  el.appendChild(right);
  return el;
}

function buildIdeWindow() {
  const win = document.createElement('div');
  win.className = 'ide-window';
  win.id = 'ide-window';

  const winW = Math.min(900, window.innerWidth * 0.88);
  const winH = Math.min(620, window.innerHeight * 0.84);
  const left = Math.max(30, Math.round(window.innerWidth * 0.075));
  const top = window.innerHeight - winH - 80;

  win.style.cssText = `width:${winW}px;height:${winH}px;left:${left}px;top:${top}px;`;

  // Title bar
  const titlebar = document.createElement('div');
  titlebar.className = 'window-titlebar';
  titlebar.innerHTML = `
    <div class="traffic-lights">
      <span class="light light-red"></span>
      <span class="light light-yellow"></span>
      <span class="light light-green"></span>
    </div>
    <span class="titlebar-title">The Absurd Machine — Portfolio</span>`;

  titlebar.querySelector('.light-red').addEventListener('click', e => { e.stopPropagation(); closeWindow(win); });
  titlebar.querySelector('.light-yellow').addEventListener('click', e => { e.stopPropagation(); closeWindow(win); });
  titlebar.querySelector('.light-green').addEventListener('click', e => { e.stopPropagation(); toggleMaximize(win); });
  titlebar.addEventListener('dblclick', e => { if (!e.target.classList.contains('light')) toggleMaximize(win); });

  // IDE content
  const body = document.createElement('div');
  body.className = 'window-body';
  body.appendChild(buildMenuBar());

  const workbench = document.createElement('div');
  workbench.className = 'workbench';
  workbench.appendChild(buildActivityBar());
  workbench.appendChild(buildSidebar());
  workbench.appendChild(buildEditorArea());
  body.appendChild(workbench);
  body.appendChild(buildStatusBar());

  win.appendChild(titlebar);
  win.appendChild(body);

  win.addEventListener('mousedown', () => bringToFront(win));
  makeDraggable(win, titlebar);
  return win;
}

function buildDock(ideWin) {
  const dock = document.createElement('div');
  dock.className = 'dock';

  function dockItem(tooltip, iconHtml, dotId, onClick) {
    const item = document.createElement('div');
    item.className = 'dock-item';
    item.innerHTML = `
      <div class="dock-tooltip">${tooltip}</div>
      <div class="dock-icon">${iconHtml}</div>
      <div class="dock-dot hidden" ${dotId ? `id="${dotId}"` : ''}></div>`;
    item.addEventListener('click', onClick);
    dock.appendChild(item);
    return item.querySelector('.dock-dot');
  }

  // Portfolio IDE
  const ideDot = dockItem(
    'Portfolio IDE',
    `<div style="background:linear-gradient(145deg,#1a3a5c,#0d0d1a);width:100%;height:100%;border-radius:13px;display:flex;align-items:center;justify-content:center;">
       <span style="font-family:'JetBrains Mono',monospace;font-size:17px;color:#007acc;font-weight:700">&lt;/&gt;</span>
     </div>`,
    'dock-dot',
    () => { if (!state.windowOpen) revealWindow(ideWin); else bringToFront(ideWin); }
  );
  ideDot.classList.remove('hidden');

  // Projects
  dockItem(
    'Projects',
    `<div style="background:linear-gradient(145deg,#0d2e24,#051a0f);width:100%;height:100%;border-radius:13px;display:flex;align-items:center;justify-content:center;">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="#4ec9b0"><rect x="2" y="2" width="9" height="9" rx="2"/><rect x="13" y="2" width="9" height="9" rx="2"/><rect x="2" y="13" width="9" height="9" rx="2"/><rect x="13" y="13" width="9" height="9" rx="2"/></svg>
     </div>`,
    'dock-dot-projects',
    () => {
      const dot = document.getElementById('dock-dot-projects');
      const pw = openAppWindow({ id: 'window-projects', title: 'Projects — The Absurd Machine', width: 1100, height: 800, buildContent: buildProjectsContent, dockDot: dot });
      const w = parseInt(pw.style.width);
      pw.style.left = `${window.innerWidth - w - 20}px`;
      pw.style.top = '48px';
    }
  );

  // Blog
  dockItem(
    'Blog',
    `<div style="background:linear-gradient(145deg,#2d1b4e,#1a0d2e);width:100%;height:100%;border-radius:13px;display:flex;align-items:center;justify-content:center;">
       <svg width="26" height="28" viewBox="0 0 26 28" fill="none"><rect x="2" y="2" width="22" height="24" rx="3" stroke="#c678dd" stroke-width="2"/><line x1="7" y1="9" x2="19" y2="9" stroke="#c678dd" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="14" x2="19" y2="14" stroke="#c678dd" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="19" x2="14" y2="19" stroke="#c678dd" stroke-width="1.5" stroke-linecap="round"/></svg>
     </div>`,
    'dock-dot-blog',
    () => {
      const dot = document.getElementById('dock-dot-blog');
      const bw = openAppWindow({ id: 'window-blog', title: 'Blog — The Absurd Machine', width: 1100, height: 800, buildContent: buildBlogContent, dockDot: dot });
      const w = parseInt(bw.style.width);
      bw.style.left = `${window.innerWidth - w - 20}px`;
      bw.style.top = '48px';
    }
  );

  // YouTube
  dockItem(
    'YouTube',
    `<div style="background:#0f0f0f;width:100%;height:100%;border-radius:13px;display:flex;align-items:center;justify-content:center;border:1px solid #272727;">
       <svg width="32" height="22" viewBox="0 0 32 22"><rect width="32" height="22" rx="5" fill="#FF0000"/><path d="M13 6.5l10 4.5-10 4.5V6.5z" fill="white"/></svg>
     </div>`,
    null,
    () => window.open('https://youtube.com/@theabsurdmachine', '_blank')
  );

  // GitHub
  dockItem(
    'GitHub',
    `<div style="background:#161b22;width:100%;height:100%;border-radius:13px;display:flex;align-items:center;justify-content:center;">
       <svg width="28" height="28" viewBox="0 0 24 24" fill="#e6edf3"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
     </div>`,
    null,
    () => window.open('https://github.com/TheAbsurdMachine', '_blank')
  );

  return dock;
}

function makeDraggable(win, handle) {
  let startX, startY, startL, startT, dragging = false;
  handle.addEventListener('mousedown', e => {
    if (e.target.classList.contains('light') || state.windowMaximized) return;
    e.preventDefault();
    dragging = true;
    startX = e.clientX; startY = e.clientY;
    startL = win.offsetLeft; startT = win.offsetTop;
    win.style.transition = 'none';
    const onMove = e => {
      if (!dragging) return;
      win.style.left = `${startL + e.clientX - startX}px`;
      win.style.top = `${Math.max(28, startT + e.clientY - startY)}px`;
    };
    const onUp = () => { dragging = false; document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

// ===========================
// MOBILE INIT
// ===========================

function initMobile() {
  const app = document.getElementById('app');

  const titlebar = document.createElement('div');
  titlebar.className = 'titlebar';
  titlebar.innerHTML = `
    <div class="traffic-lights">
      <span class="light light-red"></span>
      <span class="light light-yellow"></span>
      <span class="light light-green"></span>
    </div>
    <span class="titlebar-title">The Absurd Machine</span>
    <div class="hamburger" id="hamburger">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <rect x="1" y="3" width="16" height="2" rx="1"/>
        <rect x="1" y="8" width="16" height="2" rx="1"/>
        <rect x="1" y="13" width="16" height="2" rx="1"/>
      </svg>
    </div>`;

  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  overlay.addEventListener('click', closeMobileSidebar);

  const workbench = document.createElement('div');
  workbench.className = 'workbench';
  workbench.appendChild(buildActivityBar());
  workbench.appendChild(buildSidebar());
  workbench.appendChild(buildEditorArea());

  app.appendChild(titlebar);
  app.appendChild(overlay);
  app.appendChild(workbench);
  app.appendChild(buildStatusBar());

  document.getElementById('hamburger')?.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    sidebar?.classList.contains('mobile-open') ? closeMobileSidebar() : (sidebar?.classList.add('mobile-open'), sidebarOverlay?.classList.add('open'));
  });

  renderAll();
}

function buildDesktopIcons(ideWin) {
  const icons = [
    {
      label: 'Portfolio',
      iconHtml: `<div style="background:linear-gradient(145deg,#1a3a5c,#0d0d1a);width:100%;height:100%;border-radius:12px;display:flex;align-items:center;justify-content:center;">
        <span style="font-family:'JetBrains Mono',monospace;font-size:18px;color:#007acc;font-weight:700">&lt;/&gt;</span></div>`,
      onClick: () => { if (!state.windowOpen) revealWindow(ideWin); else bringToFront(ideWin); }
    },
    {
      label: 'Blog',
      iconHtml: `<div style="background:linear-gradient(145deg,#2d1b4e,#1a0d2e);width:100%;height:100%;border-radius:12px;display:flex;align-items:center;justify-content:center;">
        <svg width="26" height="27" viewBox="0 0 26 28" fill="none"><rect x="2" y="2" width="22" height="24" rx="3" stroke="#c678dd" stroke-width="2"/><line x1="7" y1="9" x2="19" y2="9" stroke="#c678dd" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="14" x2="19" y2="14" stroke="#c678dd" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="19" x2="14" y2="19" stroke="#c678dd" stroke-width="1.5" stroke-linecap="round"/></svg></div>`,
      onClick: () => {
        const dot = document.getElementById('dock-dot-blog');
        const bw = openAppWindow({ id: 'window-blog', title: 'Blog — The Absurd Machine', width: 1100, height: 800, buildContent: buildBlogContent, dockDot: dot });
        const w = parseInt(bw.style.width);
        bw.style.left = `${window.innerWidth - w - 20}px`;
        bw.style.top = '48px';
      }
    },
    {
      label: 'Projects',
      iconHtml: `<div style="background:linear-gradient(145deg,#0d2e24,#051a0f);width:100%;height:100%;border-radius:12px;display:flex;align-items:center;justify-content:center;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#4ec9b0"><rect x="2" y="2" width="9" height="9" rx="2"/><rect x="13" y="2" width="9" height="9" rx="2"/><rect x="2" y="13" width="9" height="9" rx="2"/><rect x="13" y="13" width="9" height="9" rx="2"/></svg></div>`,
      onClick: () => {
        const dot = document.getElementById('dock-dot-projects');
        const pw = openAppWindow({ id: 'window-projects', title: 'Projects — The Absurd Machine', width: 1100, height: 800, buildContent: buildProjectsContent, dockDot: dot });
        const w = parseInt(pw.style.width);
        pw.style.left = `${window.innerWidth - w - 20}px`;
        pw.style.top = '48px';
      }
    },
    {
      label: 'YouTube',
      iconHtml: `<div style="background:#0f0f0f;width:100%;height:100%;border-radius:12px;display:flex;align-items:center;justify-content:center;border:1px solid #272727;">
        <svg width="30" height="21" viewBox="0 0 32 22"><rect width="32" height="22" rx="5" fill="#FF0000"/><path d="M13 6.5l10 4.5-10 4.5V6.5z" fill="white"/></svg></div>`,
      onClick: () => window.open('https://youtube.com/@theabsurdmachine', '_blank')
    },
    {
      label: 'GitHub',
      iconHtml: `<div style="background:#161b22;width:100%;height:100%;border-radius:12px;display:flex;align-items:center;justify-content:center;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#e6edf3"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></div>`,
      onClick: () => window.open('https://github.com/TheAbsurdMachine', '_blank')
    },
  ];

  const container = document.createElement('div');
  container.style.cssText = 'position:absolute;top:48px;left:16px;display:flex;flex-direction:column;gap:4px;z-index:10;';

  icons.forEach(({ label, iconHtml, onClick }) => {
    const item = document.createElement('div');
    item.className = 'desktop-icon';
    item.innerHTML = `<div style="width:43px;height:43px;">${iconHtml}</div><div class="desktop-icon-name">${label}</div>`;
    item.addEventListener('click', onClick);
    container.appendChild(item);
  });

  return container;
}

// ===========================
// DESKTOP INIT
// ===========================

function parseRoute() {
  const parts = window.location.pathname.replace(/^\//, '').split('/').filter(Boolean);
  return { section: parts[0] || '', slug: parts[1] || '' };
}

function initDesktop() {
  const app = document.getElementById('app');
  app.style.cssText = 'position:fixed;inset:0;overflow:hidden;';

  const desktop = document.createElement('div');
  desktop.className = 'desktop';

  desktop.appendChild(buildWallpaper());
  desktop.appendChild(buildDesktopMenubar());

  const win = buildIdeWindow();
  desktop.appendChild(win);
  desktop.appendChild(buildDesktopIcons(win));
  desktop.appendChild(buildDock(win));

  app.appendChild(desktop);
  renderAll();

  const route = parseRoute();

  function openTopRight(id, title, buildFn, maximize = false) {
    const dot = document.getElementById(`dock-dot-${id}`);
    const w = openAppWindow({ id: `window-${id}`, title, width: 1100, height: 800, buildContent: buildFn, dockDot: dot });
    if (maximize) {
      winToggleMax(w);
    } else {
      const pw = parseInt(w.style.width);
      w.style.left = `${window.innerWidth - pw - 20}px`;
      w.style.top = '48px';
    }
  }

  if (route.section === 'projects') {
    openTopRight('projects', 'Projects — The Absurd Machine', () => buildProjectsContent(route.slug || null), !!route.slug);
  } else {
    openTopRight('blog', 'Blog — The Absurd Machine', () => buildBlogContent(route.slug || null), !!route.slug);
  }
}

// ===========================
// BOOT
// ===========================

function boot(onComplete) {
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
    setTimeout(() => { screen.remove(); onComplete(); }, 500);
  }, 1400);
}

// ===========================
// MAIN
// ===========================

const isMobile = window.innerWidth < 768;
boot(() => {
  if (isMobile) initMobile();
  else initDesktop();
});
