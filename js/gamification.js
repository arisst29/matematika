// ── Mathematikus 11 — Gamification modulis ──
// Automatiškai aptinka testo pabaigą, siunčia rezultatus ir rodo XP popup

(function() {
  if (typeof Auth === 'undefined' || !Auth.isLoggedIn()) return;

  // ── Nustatyti skyriaus ir testo tipą iš URL ──
  function getTestInfo() {
    var path = window.location.pathname;
    var info = { chapter: '', test_type: '', test_id: '' };

    // Skyrius
    var chapterMatch = path.match(/dalykai\/([^\/]+)/);
    if (chapterMatch) info.chapter = chapterMatch[1];

    // Testo tipas
    if (path.indexOf('/testai/teoriniai/') !== -1) info.test_type = 'teorinis';
    else if (path.indexOf('/testai/praktiniai/') !== -1) info.test_type = 'praktinis';
    else if (path.indexOf('/skyriaus-testai/') !== -1) info.test_type = 'egzaminas';
    else if (path.indexOf('/egzaminai/') !== -1) info.test_type = 'egzaminas';
    else if (path.indexOf('/vbe-egzaminai/') !== -1) { info.test_type = 'vbe'; info.chapter = 'vbe-egzaminai'; }

    // Testo ID iš failo vardo
    var fileMatch = path.match(/([^\/]+)\.html$/);
    if (fileMatch) info.test_id = fileMatch[1];

    return info;
  }

  var testInfo = getTestInfo();
  if (!testInfo.test_type) return; // Ne testo puslapis

  var resultSent = false;

  // ── Aptikti modalą (du tipai: #modal ir #mbg) ──
  function observeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (!modal) return;

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.attributeName === 'class' && modal.classList.contains('open') && !resultSent) {
          resultSent = true;
          extractAndSend(modalId);
        }
      });
    });
    observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
  }

  // ── Ištraukti rezultatą ir siųsti ──
  function extractAndSend(modalId) {
    var score = 0;
    var maxScore = 0;

    if (modalId === 'modal') {
      // Standartinis testas
      var correctEl = document.getElementById('stat-correct');
      var totalParts = (document.getElementById('stat-pct') || {}).textContent || '';
      var match = totalParts.match(/(\d+)\/(\d+)/);
      if (match) { score = parseInt(match[1]); maxScore = parseInt(match[2]); }
      else if (correctEl && typeof QUESTIONS !== 'undefined') {
        score = parseInt(correctEl.textContent) || 0;
        maxScore = QUESTIONS.length;
      }
    } else if (modalId === 'mbg') {
      // VBE egzaminas
      var scEl = document.getElementById('sc');
      var spEl = document.getElementById('sp');
      if (scEl) score = parseInt(scEl.textContent) || 0;
      // Max score iš MP kintamojo
      if (typeof MP !== 'undefined') maxScore = MP;
      else {
        var pctText = (spEl || {}).textContent || '';
        var pctNum = parseInt(pctText);
        if (pctNum > 0 && score > 0) maxScore = Math.round(score / pctNum * 100);
      }
    }

    if (maxScore <= 0) return;

    // Siųsti į API
    Auth.sendResult({
      chapter: testInfo.chapter,
      test_type: testInfo.test_type,
      test_id: testInfo.test_id,
      score: score,
      max_score: maxScore,
    }).then(function(data) {
      showXPPopup(data);
    }).catch(function(err) {
      console.error('Result send error:', err);
    });
  }

  // ── XP popup ──
  function showXPPopup(data) {
    // Sukurti overlay
    var overlay = document.createElement('div');
    overlay.id = 'xp-popup';
    overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.4);opacity:0;transition:opacity 0.3s;pointer-events:all';

    var pct = data.passed ? '≥80%' : '<80%';
    var streakText = '';
    if (data.multiplier > 1) {
      var bonus = Math.round((data.multiplier - 1) * 100);
      streakText = '<div style="font-size:13px;color:var(--amber);margin-top:4px">🔥 Streak bonus: +' + bonus + '%</div>';
    }

    var achievementsHtml = '';
    if (data.new_achievements && data.new_achievements.length > 0) {
      achievementsHtml = '<div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">';
      data.new_achievements.forEach(function(a) {
        achievementsHtml += '<div style="display:flex;align-items:center;gap:8px;margin-top:8px;font-size:14px"><span style="font-size:22px">' + a.icon + '</span><div><strong>' + a.name + '</strong><div style="font-size:12px;color:var(--ink3)">' + a.desc + '</div></div></div>';
      });
      achievementsHtml += '</div>';
    }

    var card = document.createElement('div');
    card.style.cssText = 'background:var(--bg2,#fff);border-radius:16px;padding:32px 40px;text-align:center;max-width:340px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.2);transform:scale(0.8);transition:transform 0.3s';

    if (data.earned_xp > 0) {
      card.innerHTML =
        '<div style="font-size:48px;margin-bottom:8px">🎉</div>' +
        '<div style="font-size:32px;font-weight:700;color:var(--green,#1a7a4a)">+' + data.earned_xp + ' XP</div>' +
        streakText +
        '<div style="font-size:14px;color:var(--ink3,#999);margin-top:12px">Iš viso: ' + data.total_xp + ' XP</div>' +
        achievementsHtml +
        '<button onclick="this.closest(\'#xp-popup\').remove()" style="margin-top:20px;padding:10px 28px;background:var(--ink,#141414);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;font-family:inherit">Tęsti</button>';
    } else if (data.passed) {
      card.innerHTML =
        '<div style="font-size:48px;margin-bottom:8px">✅</div>' +
        '<div style="font-size:18px;font-weight:600;color:var(--ink,#141414)">Testas jau išlaikytas</div>' +
        '<div style="font-size:14px;color:var(--ink3,#999);margin-top:8px">XP jau gauti už šį testą</div>' +
        '<button onclick="this.closest(\'#xp-popup\').remove()" style="margin-top:20px;padding:10px 28px;background:var(--ink,#141414);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;font-family:inherit">Tęsti</button>';
    } else {
      card.innerHTML =
        '<div style="font-size:48px;margin-bottom:8px">📚</div>' +
        '<div style="font-size:18px;font-weight:600;color:var(--ink,#141414)">Dar reikia pasimokyti</div>' +
        '<div style="font-size:14px;color:var(--ink3,#999);margin-top:8px">XP gaunami tik pasiekus ≥80%</div>' +
        '<button onclick="this.closest(\'#xp-popup\').remove()" style="margin-top:20px;padding:10px 28px;background:var(--ink,#141414);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;font-family:inherit">Tęsti</button>';
    }

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // Animacija
    requestAnimationFrame(function() {
      overlay.style.opacity = '1';
      card.style.transform = 'scale(1)';
    });

    // Atnaujinti vartotojo duomenis localStorage
    if (data.total_xp !== undefined) {
      var user = Auth.getUser() || {};
      user.xp = data.total_xp;
      user.streak_days = data.streak;
      Auth.setUser(user);
    }
  }

  // Stebėti abu modalų tipus
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      observeModal('modal');
      observeModal('mbg');
    });
  } else {
    observeModal('modal');
    observeModal('mbg');
  }
})();
