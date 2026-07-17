/* ─── MATEMATIKA 11 — Pagrindinis JS failas ─────────────────────────── */

// ── SIDEBAR DUOMENYS ─────────────────────────────────────────────────
// Norėdami pridėti naują temą — tiesiog pridėkite čia!
const NAV = [
  { id: 'reiskiniai', num: '', name: 'Reiškiniai', topics: [
      { id: 't1', name: 'T1. Aibės ir jų veiksmai',                       path: 'dalykai/reiskiniai/temos/t1-aibes/teorija.html' },
      { id: 't2', name: 'T2. n-tojo laipsnio šaknys',                     path: 'dalykai/reiskiniai/temos/t2-saknys/teorija.html' },
      { id: 't3', name: 'T3. Veiksmai su šaknimis ir laipsniais',          path: 'dalykai/reiskiniai/temos/t3-veiksmai-saknimis/teorija.html' },
      { id: 't4', name: 'T4. Apibrėžimo sritis ir veiksmai su reiškiniais', path: 'dalykai/reiskiniai/temos/t4-apibreztis/teorija.html' },
      { id: 't5', name: 'T5. Formulės, skaidymas ir algebrinės trupmenos', path: 'dalykai/reiskiniai/temos/t5-formules-skaidymas/teorija.html' },
    ], tests: 'dalykai/reiskiniai/skyriaus-testai/index.html', exams: 'dalykai/reiskiniai/egzaminai/index.html' },
  { id: 'lygtys', num: '', name: 'Lygtys, nelygybės ir jų sistemos', topics: [
      { id: 't1', name: 'T1. Trupmeninės ir aukštesniojo laipsnio lygtys', path: 'dalykai/lygtys/temos/t1-lygtys/teorija.html' },
      { id: 't2', name: 'T2. Iracionaliosios lygtys ir lygtys su moduliais', path: 'dalykai/lygtys/temos/t2-irac-moduliai/teorija.html' },
      { id: 't3', name: 'T3. Vjeto formulės ir uždavinių sprendimas',       path: 'dalykai/lygtys/temos/t3-vjeto-uzdaviniai/teorija.html' },
      { id: 't4', name: 'T4. Kvadratinės ir trupmeninės nelygybės',           path: 'dalykai/lygtys/temos/t4-nelygybes/teorija.html' },
      { id: 't5', name: 'T5. Nelygybių sistemos ir su moduliu',  path: 'dalykai/lygtys/temos/t5-nelygybes-sistemos/teorija.html' },
      { id: 't6', name: 'T6. Lygčių sistemos ir jų taikymas',                  path: 'dalykai/lygtys/temos/t6-sistemos/teorija.html' },
    ], tests: 'dalykai/lygtys/skyriaus-testai/index.html', exams: 'dalykai/lygtys/egzaminai/index.html' },
  {
    id: 'funkcijos',
    num: '',
    name: 'Funkcijos',
    topics: [
      { id: 't1', name: 'T1. Apibrėžtis ir sritys',      path: 'dalykai/funkcijos/temos/t1-apibreztis/teorija.html' },
      { id: 't2', name: 'T2. Funkcijos savybės',           path: 'dalykai/funkcijos/temos/t2-savybes/teorija.html' },
      { id: 't3', name: 'T3. Sudėtinė ir atvirkštinė',    path: 'dalykai/funkcijos/temos/t3-sudetine-atvirkstine/teorija.html' },
      { id: 't4', name: 'T4. Grafiko transformacijos',     path: 'dalykai/funkcijos/temos/t4-transformacijos/teorija.html' },
      { id: 't5', name: 'T5. Laipsninės funkcijos',         path: 'dalykai/funkcijos/temos/t5-laipsnines/teorija.html' },
      { id: 't6', name: 'T6. Kvadratinė funkcija',          path: 'dalykai/funkcijos/temos/t6-kvadratine/teorija.html' },
      { id: 't7', name: 'T7. Rodiklinė funkcija',           path: 'dalykai/funkcijos/temos/t7-rodikline/teorija.html' },
      { id: 't8', name: 'T8. Rodiklinės lygtys',            path: 'dalykai/funkcijos/temos/t8-rodiklineslygtys/teorija.html' },
      { id: 't9', name: 'T9. Rodiklinės nelygybės',         path: 'dalykai/funkcijos/temos/t9-rodiklinesnelygybes/teorija.html' },
      { id: 't10', name: 'T10. Logaritminė funkcija',        path: 'dalykai/funkcijos/temos/t10-logaritmine/teorija.html' },
      { id: 't11', name: 'T11. Logaritminės lygtys',         path: 'dalykai/funkcijos/temos/t11-logaritmineslygtys/teorija.html' },
      { id: 't12', name: 'T12. Logaritminės nelygybės',      path: 'dalykai/funkcijos/temos/t12-logaritminesnelygybes/teorija.html' },
    ],
    tests: 'dalykai/funkcijos/skyriaus-testai/index.html',
    exams: 'dalykai/funkcijos/egzaminai/index.html'
  },
  { id: 'sekos', num: '', name: 'Sekos ir progresijos', topics: [
      { id: 't1', name: 'T1. Aritmetinė progresija',  path: 'dalykai/sekos/temos/t1-aritmetine/teorija.html' },
      { id: 't2', name: 'T2. Geometrinė progresija',  path: 'dalykai/sekos/temos/t2-geometrine/teorija.html' },
      { id: 't3', name: 'T3. Taikymai',               path: 'dalykai/sekos/temos/t3-taikymai/teorija.html' },
    ], tests: 'dalykai/sekos/skyriaus-testai/index.html', exams: 'dalykai/sekos/egzaminai/index.html' },
  { id: 'trig', num: '', name: 'Trigonometrija', topics: [
      { id: 't1', name: 'T1. Radianinis kampo matas',   path: 'dalykai/trigonometrija/temos/t1-radianai/teorija.html' },
      { id: 't2', name: 'T2. sin, cos, tg apibrėžtys',  path: 'dalykai/trigonometrija/temos/t2-apibreztys/teorija.html' },
      { id: 't3', name: 'T3. Funkcija sin x ir arcsin x', path: 'dalykai/trigonometrija/temos/t3-sinx/teorija.html' },
      { id: 't4', name: 'T4. Funkcija cos x ir arccos x', path: 'dalykai/trigonometrija/temos/t4-cosx/teorija.html' },
      { id: 't5', name: 'T5. Funkcija tg x ir arctg x',  path: 'dalykai/trigonometrija/temos/t5-tgx/teorija.html' },
    ], tests: 'dalykai/trigonometrija/skyriaus-testai/index.html', exams: 'dalykai/trigonometrija/egzaminai/index.html' },
  { id: 'planimetrija', num: '', name: 'Planimetrija', topics: [
      { id: 't1', name: 'T1. Įbrėžtiniai kampai, stygos ir liestines', path: 'dalykai/planimetrija/temos/t1-kampai-stygos/teorija.html' },
      { id: 't2', name: 'T2. Įbrėžtiniai ir apibrėžtiniai daugiakampiai', path: 'dalykai/planimetrija/temos/t2-daugiakampiai/teorija.html' },
      { id: 't3', name: 'T3. Trikampio ir lygiagretainio plotas', path: 'dalykai/planimetrija/temos/t3-plotas/teorija.html' },
      { id: 't4', name: 'T4. Sinusų ir kosinusų teoremos', path: 'dalykai/planimetrija/temos/t4-sinusu-kosinusu/teorija.html' },
      { id: 't5', name: 'T5. Herono formulė ir Talio teorema', path: 'dalykai/planimetrija/temos/t5-herono-talio/teorija.html' },
    ], tests: 'dalykai/planimetrija/skyriaus-testai/index.html', exams: 'dalykai/planimetrija/egzaminai/index.html' },
  { id: 'vektoriai', num: '', name: 'Vektoriai ir jų veiksmai', topics: [
      { id: 't1', name: 'T1. Vektorių sąvokos',                        path: 'dalykai/vektoriai/temos/t1-savokos/teorija.html' },
      { id: 't2', name: 'T2. Vektorių sudėtis ir atimtis',             path: 'dalykai/vektoriai/temos/t2-sudetis-atimtis/teorija.html' },
      { id: 't3', name: 'T3. Daugyba iš skaičiaus ir kolinearumas',    path: 'dalykai/vektoriai/temos/t3-daugyba-kolinearumas/teorija.html' },
      { id: 't4', name: 'T4. Skaliarinė sandauga ir statmenumas',      path: 'dalykai/vektoriai/temos/t4-skaliarine-statmenumas/teorija.html' },
      { id: 't5', name: 'T5. Vektoriaus koordinatės',                  path: 'dalykai/vektoriai/temos/t5-koordinates/teorija.html' },
      { id: 't6', name: 'T6. Veiksmai koordinatėmis',                  path: 'dalykai/vektoriai/temos/t6-veiksmai-koordinatemis/teorija.html' },
      { id: 't7', name: 'T7. Skaliarinė sandauga ir kampas koordinatėmis', path: 'dalykai/vektoriai/temos/t7-kampas-koordinatemis/teorija.html' },
    ], tests: 'dalykai/vektoriai/skyriaus-testai/index.html', exams: 'dalykai/vektoriai/egzaminai/index.html' },,
  {
    id: 'vbe',
    num: '',
    name: 'VBE Egzaminai',
    topics: [],
    exams: 'dalykai/vbe-egzaminai/index.html',
    vbeSection: true
  }
];

// ── KELIO SKAIČIAVIMAS ───────────────────────────────────────────────
// Apskaičiuoja kiek lygių aukštyn reikia eiti nuo dabartinio puslapio
function getRoot() {
  // Kelias skaičiuojamas nuo 'dalykai' aplanko — veikia ir domeno šaknyje,
  // ir bet kaip pavadintame poaplankyje (pvz. GitHub Pages poaplankis).
  const parts = window.location.pathname.split('/').filter(p => p);
  const i = parts.indexOf('dalykai');
  const depth = i >= 0 ? parts.length - 1 - i : 0;
  return depth > 0 ? '../'.repeat(depth) : './';
}

// ── SIDEBAR GENERAVIMAS ───────────────────────────────────────────────
function buildSidebar() {
  const root = getRoot();
  const currentPath = window.location.pathname;

  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <a href="${root}index.html" style="text-decoration:none">
        <div class="brand">Mathematikus <span>11</span></div>
        <div class="sub">Mokymosi platforma</div>
      </a>
    </div>
        <div class="sidebar-section">
      <div class="sidebar-section-label">Skyriai</div>
      ${NAV.map(subj => buildSubject(subj, root, currentPath)).join('')}
    </div>
    <div class="sidebar-bottom">
      <div id="sidebar-user"></div>
      <a class="sidebar-action" href="${root}index.html">Pradžia</a>
      <a href="${root}atsiliepimai.html" style="display:flex;align-items:center;gap:8px;margin-top:6px;padding:10px 12px;background:var(--ink);color:#fff;border-radius:var(--radius);font-size:13px;font-weight:500;text-decoration:none;transition:background 0.15s;" onmouseover="this.style.background='#2a2a2a'" onmouseout="this.style.background='var(--ink)'">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Palikti atsiliepimą
      </a>
    </div>
  `;

  // Prijungiame toggle funkcionalumą
  attachToggle();
  autoOpen();
}

function buildSubject(subj, root, currentPath) {
  // Special handling for VBE section (no topics, just a direct link)
  if (subj.vbeSection) {
    const isActive = currentPath.includes('vbe-egzaminai');
    return `
    <div class="subject">
      <div class="subject-header ${isActive ? 'active' : ''}">
        <a href="${root + subj.exams}" style="text-decoration:none;display:flex;align-items:center;gap:8px;width:100%;color:inherit">
          <span class="subject-name" style="font-weight:600">${subj.name}</span>
        </a>
      </div>
    </div>`;
  }
  const hasTopics = subj.topics.length > 0;
  const isActive = subj.topics.some(t => currentPath.includes(t.path.replace('dalykai/', '').replace('teorija.html', '')));

  const topicsHtml = hasTopics ? `
    <div class="topic-list ${isActive ? 'open' : ''}">
      ${subj.topics.map(t => {
        const href = root + t.path;
        const folderPath = t.path.replace('dalykai/', '').replace('teorija.html', '');
        const active = currentPath.includes(folderPath);
        return `<a class="topic-link ${active ? 'active' : ''}" href="${href}">
          <span class="topic-dot"></span>${t.name}
        </a>`;
      }).join('')}
      ${subj.tests ? `
        <div class="sidebar-divider"></div>
        <a class="topic-link" href="${root + subj.tests}" style="color:var(--amber)">
          <span class="topic-dot" style="background:var(--amber)"></span>Skyriaus testai
        </a>` : ''}
      ${subj.exams ? `
        <a class="topic-link" href="${root + subj.exams}" style="color:var(--accent)">
          <span class="topic-dot" style="background:var(--accent)"></span>Skyriaus egzaminai
        </a>` : ''}
    </div>` : '<div class="topic-list"></div>';

  return `
    <div class="subject">
      <div class="subject-header ${isActive ? 'active' : ''}">
        <span class="subject-num">${subj.num}</span>
        <span class="subject-name">${subj.name}</span>
        <span class="subject-chevron ${isActive ? 'open' : ''}">▶</span>
      </div>
      ${topicsHtml}
    </div>`;
}

// ── TOGGLE ────────────────────────────────────────────────────────────
function attachToggle() {
  document.querySelectorAll('.subject-header').forEach(header => {
    header.addEventListener('click', () => {
      const list = header.nextElementSibling;
      const chevron = header.querySelector('.subject-chevron');
      const isOpen = list.classList.contains('open');

      document.querySelectorAll('.topic-list').forEach(l => l.classList.remove('open'));
      document.querySelectorAll('.subject-chevron').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.subject-header').forEach(h => h.classList.remove('active'));

      if (!isOpen) {
        list.classList.add('open');
        chevron.classList.add('open');
        header.classList.add('active');
      }
    });
  });
}

// ── AUTO OPEN ─────────────────────────────────────────────────────────
function autoOpen() {
  const activeLink = document.querySelector('.topic-link.active');
  if (activeLink) {
    const list = activeLink.closest('.topic-list');
    const header = list?.previousElementSibling;
    const chevron = header?.querySelector('.subject-chevron');
    if (list) list.classList.add('open');
    if (chevron) chevron.classList.add('open');
    if (header) header.classList.add('active');
  }
}

// ── FORMULYNAS BUTTON ─────────────────────────────────────────────────
function addFormulynas() {
  const btn = document.createElement('a');
  btn.href = 'https://www.nsa.smsm.lt/old/wp-content/uploads/2025/02/VBE-formuliu-rinkinys-A.pdf';
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.title = 'Atidaryti VBE formulyną';
  btn.style.cssText = [
    'position:fixed',
    'bottom:24px',
    'right:24px',
    'z-index:500',
    'display:flex',
    'align-items:center',
    'gap:8px',
    'padding:10px 16px',
    'background:var(--accent)',
    'color:#fff',
    'border-radius:50px',
    'font-family:var(--sans)',
    'font-size:13px',
    'font-weight:600',
    'text-decoration:none',
    'box-shadow:0 4px 16px rgba(29,78,216,0.35)',
    'transition:transform 0.15s, box-shadow 0.15s',
    'user-select:none',
  ].join(';');

  btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>Formulynas';

  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 6px 24px rgba(29,78,216,0.5)';
  });
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 16px rgba(29,78,216,0.35)';
  });

  document.body.appendChild(btn);
}

// ── INIT ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  buildSidebar();
  addFormulynas();
  addLegalLink();
  // Dinamiškai užkrauname auth.js, tada atnaujiname sidebar vartotoją
  var script = document.createElement('script');
  script.src = getRoot() + 'js/auth.js';
  script.onload = function() {
    updateSidebarUser();
    authGate();
  };
  script.onerror = function() { updateSidebarUser(); };
  document.head.appendChild(script);
});

// ── Auth vartai: turinio puslapiai tik prisijungusiems ──
function authGate() {
  if (typeof Auth === 'undefined') return;
  // Laisvi puslapiai — nereikia prisijungti
  var path = window.location.pathname;
  var free = ['index.html', 'prisijungimas.html', 'legal.html', 'atsiliepimai.html'];
  var isFree = free.some(function(p) { return path.endsWith(p) || path.endsWith('/'); });
  if (isFree) return;
  // Jei puslapyje yra 'dalykai' — reikia prisijungti
  if (path.indexOf('dalykai') !== -1 && !Auth.isLoggedIn()) {
    window.location.href = getRoot() + 'prisijungimas.html';
  }
}

function updateSidebarUser() {
  var el = document.getElementById('sidebar-user');
  if (!el) return;
  var root = getRoot();

  if (typeof Auth !== 'undefined' && Auth.isLoggedIn()) {
    var user = Auth.getUser();
    if (!user) return;
    el.innerHTML =
      '<a href="' + root + 'prisijungimas.html" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--green-bg);border:1px solid var(--green-lt);border-radius:var(--radius);text-decoration:none;margin-bottom:6px;transition:all 0.12s">' +
        '<div style="width:30px;height:30px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0">' + user.username.charAt(0).toUpperCase() + '</div>' +
        '<div style="overflow:hidden">' +
          '<div style="font-size:13px;font-weight:500;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + user.username + '</div>' +
          '<div style="font-size:11px;color:var(--ink3)">Lygis ' + (user.level || 1) + ' · ' + (user.xp || 0) + ' XP</div>' +
        '</div>' +
      '</a>';
  } else {
    el.innerHTML =
      '<a href="' + root + 'prisijungimas.html" style="display:flex;align-items:center;gap:8px;margin-bottom:6px;padding:10px 12px;background:var(--bg3);border-radius:var(--radius);font-size:13px;font-weight:500;color:var(--ink2);text-decoration:none;transition:all 0.12s" onmouseover="this.style.background=\'var(--border)\'" onmouseout="this.style.background=\'var(--bg3)\'">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
        'Prisijungti' +
      '</a>';
  }
}

function addLegalLink() {
  var topbar = document.querySelector('.topbar');
  if (!topbar) return;
  var parts = window.location.pathname.split('/').filter(function(p){ return p; });
  var i = parts.indexOf('dalykai');
  var depth = i >= 0 ? parts.length - 1 - i : 0;
  var r = depth > 0 ? '../'.repeat(depth) : './';

  var link = document.createElement('a');
  link.href = r + 'legal.html';
  link.style.cssText = [
    'display:flex','align-items:center','gap:5px',
    'font-size:11.5px','color:var(--ink3)','text-decoration:none',
    'transition:color 0.1s','white-space:nowrap','flex-shrink:0'
  ].join(';');
  link.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>Teisinė informacija';
  link.onmouseover = function(){ this.style.color = 'var(--ink)'; };
  link.onmouseout  = function(){ this.style.color = 'var(--ink3)'; };
  topbar.appendChild(link);
}