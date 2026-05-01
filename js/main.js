/* ─── MATEMATIKA 11 — Pagrindinis JS failas ─────────────────────────── */

// ── SIDEBAR DUOMENYS ─────────────────────────────────────────────────
// Norėdami pridėti naują temą — tiesiog pridėkite čia!
const NAV = [
  { id: 'reiskiniai', num: '3.', name: 'Reiškiniai', topics: [
      { id: 't1', name: 'T1. Aibės ir jų veiksmai',              path: 'dalykai/reiskiniai/temos/t1-aibes/teorija.html' },
      { id: 't2', name: 'T2. n-tojo laipsnio šaknys',            path: 'dalykai/reiskiniai/temos/t2-saknys/teorija.html' },
      { id: 't3', name: 'T3. Veiksmai su šaknimis ir laipsniais', path: 'dalykai/reiskiniai/temos/t3-veiksmai-saknimis/teorija.html' },
    ], tests: 'dalykai/reiskiniai/skyriaus-testai/index.html', exams: 'dalykai/reiskiniai/egzaminai/index.html' },
  {
    id: 'funkcijos',
    num: '5.',
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
      { id: 't9', name: 'T9. Rodiklinės nelygybės',         path: 'dalykai/funkcijos/temos/t9-rodiklinesnelygybės/teorija.html' },
      { id: 't10', name: 'T10. Logaritminė funkcija',        path: 'dalykai/funkcijos/temos/t10-logaritmine/teorija.html' },
      { id: 't11', name: 'T11. Logaritminės lygtys',         path: 'dalykai/funkcijos/temos/t11-logaritmineslygtys/teorija.html' },
      { id: 't12', name: 'T12. Logaritminės nelygybės',      path: 'dalykai/funkcijos/temos/t12-logaritminesnelygybes/teorija.html' },
    ],
    tests: 'dalykai/funkcijos/skyriaus-testai/index.html',
    exams: 'dalykai/funkcijos/egzaminai/index.html'
  },
  { id: 'sekos', num: '6.', name: 'Sekos ir progresijos', topics: [
      { id: 't1', name: 'T1. Aritmetinė progresija',  path: 'dalykai/sekos/temos/t1-aritmetine/teorija.html' },
      { id: 't2', name: 'T2. Geometrinė progresija',  path: 'dalykai/sekos/temos/t2-geometrine/teorija.html' },
      { id: 't3', name: 'T3. Taikymai',               path: 'dalykai/sekos/temos/t3-taikymai/teorija.html' },
    ], tests: 'dalykai/sekos/skyriaus-testai/index.html', exams: 'dalykai/sekos/egzaminai/index.html' },
  { id: 'trig', num: '7.', name: 'Trigonometrija', topics: [
      { id: 't1', name: 'T1. Radianinis kampo matas',   path: 'dalykai/trigonometrija/temos/t1-radianai/teorija.html' },
      { id: 't2', name: 'T2. sin, cos, tg apibrėžtys',  path: 'dalykai/trigonometrija/temos/t2-apibreztys/teorija.html' },
      { id: 't3', name: 'T3. Funkcija sin x ir arcsin x', path: 'dalykai/trigonometrija/temos/t3-sinx/teorija.html' },
      { id: 't4', name: 'T4. Funkcija cos x ir arccos x', path: 'dalykai/trigonometrija/temos/t4-cosx/teorija.html' },
      { id: 't5', name: 'T5. Funkcija tg x ir arctg x',  path: 'dalykai/trigonometrija/temos/t5-tgx/teorija.html' },
    ], tests: 'dalykai/trigonometrija/skyriaus-testai/index.html', exams: 'dalykai/trigonometrija/egzaminai/index.html' },
  { id: 'planimetrija', num: '8.', name: 'Planimetrija', topics: [
      { id: 't1', name: 'T1. Įbrėžtiniai kampai, stygos ir liestines', path: 'dalykai/planimetrija/temos/t1-kampai-stygos/teorija.html' },
      { id: 't2', name: 'T2. Įbrėžtiniai ir apibrėžtiniai daugiakampiai', path: 'dalykai/planimetrija/temos/t2-daugiakampiai/teorija.html' },
      { id: 't3', name: 'T3. Trikampio ir lygiagretainio plotas', path: 'dalykai/planimetrija/temos/t3-plotas/teorija.html' },
      { id: 't4', name: 'T4. Sinusų ir kosinusų teoremos', path: 'dalykai/planimetrija/temos/t4-sinusu-kosinusu/teorija.html' },
      { id: 't5', name: 'T5. Herono formulė ir Talio teorema', path: 'dalykai/planimetrija/temos/t5-herono-talio/teorija.html' },
    ], tests: 'dalykai/planimetrija/skyriaus-testai/index.html', exams: 'dalykai/planimetrija/egzaminai/index.html' },
  { id: 'vektoriai', num: '9.', name: 'Vektoriai ir jų veiksmai', topics: [
      { id: 't1', name: 'T1. Vektorių sąvokos',                        path: 'dalykai/vektoriai/temos/t1-savokos/teorija.html' },
      { id: 't2', name: 'T2. Vektorių sudėtis ir atimtis',             path: 'dalykai/vektoriai/temos/t2-sudetis-atimtis/teorija.html' },
      { id: 't3', name: 'T3. Daugyba iš skaičiaus ir kolinearumas',    path: 'dalykai/vektoriai/temos/t3-daugyba-kolinearumas/teorija.html' },
      { id: 't4', name: 'T4. Skaliarinė sandauga ir statmenumas',      path: 'dalykai/vektoriai/temos/t4-skaliarine-statmenumas/teorija.html' },
      { id: 't5', name: 'T5. Vektoriaus koordinatės',                  path: 'dalykai/vektoriai/temos/t5-koordinates/teorija.html' },
      { id: 't6', name: 'T6. Veiksmai koordinatėmis',                  path: 'dalykai/vektoriai/temos/t6-veiksmai-koordinatemis/teorija.html' },
      { id: 't7', name: 'T7. Skaliarinė sandauga ir kampas koordinatėmis', path: 'dalykai/vektoriai/temos/t7-kampas-koordinatemis/teorija.html' },
    ], tests: 'dalykai/vektoriai/skyriaus-testai/index.html', exams: 'dalykai/vektoriai/egzaminai/index.html' },
  { id: 'isvestines', num: '10.',  name: 'Išvestinės',               topics: [], tests: null },
  { id: 'integralai', num: '11.', name: 'Integralai',               topics: [], tests: null },
  { id: 'statistika', num: '12.', name: 'Statistika ir tikimybės',  topics: [], tests: null },
  { id: 'geometrija', num: '13.', name: 'Erdvinė geometrija',       topics: [], tests: null },
];

// ── KELIO SKAIČIAVIMAS ───────────────────────────────────────────────
// Apskaičiuoja kiek lygių aukštyn reikia eiti nuo dabartinio puslapio
function getRoot() {
  const path = window.location.pathname;
  // Suskaičiuojame kiek '/' yra po /matematika/ arba projekto šaknies
  const parts = path.split('/').filter(p => p && p !== '');
  // Randame 'matematika' arba pirmo lygio aplanką
  const rootIdx = parts.findIndex(p =>
    p === 'matematika' || p === 'MATEMATIKA' || p.toLowerCase().includes('matematika')
  );
  const depth = rootIdx >= 0 ? parts.length - rootIdx - 1 : parts.length - 1;
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
        <div class="brand">Matematika <span>11</span></div>
        <div class="sub">Mokymosi platforma</div>
      </a>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-label">Skyriai</div>
      ${NAV.map(subj => buildSubject(subj, root, currentPath)).join('')}
    </div>
    <div class="sidebar-bottom">
      <a class="sidebar-action exam" href="${root}egzaminai/index.html">
        <span>📋</span> Bandomieji egzaminai
      </a>
      <a class="sidebar-action" href="${root}index.html">
        <span>⊞</span> Pradžia
      </a>
    </div>
  `;

  // Prijungiame toggle funkcionalumą
  attachToggle();
  autoOpen();
}

function buildSubject(subj, root, currentPath) {
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
          <span class="topic-dot" style="background:var(--accent)"></span>🎓 Skyriaus egzaminai
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

// ── INIT ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', buildSidebar);
