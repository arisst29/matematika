// ── Mathematikus 11 — Klausimų atsiliepimai ──
// Prie kiekvieno testo klausimo prideda "Pranešti" mygtuką

(function() {
  // Tik testų puslapiuose
  var path = window.location.pathname;
  if (path.indexOf('/testai/') === -1 && path.indexOf('/egzaminai/') === -1 && path.indexOf('/vbe-egzaminai/') === -1) return;

  // Nustatyti testo info iš URL
  var chapterMatch = path.match(/dalykai\/([^\/]+)/);
  var chapter = chapterMatch ? chapterMatch[1] : 'nežinomas';
  var fileMatch = path.match(/([^\/]+)\.html$/);
  var testId = fileMatch ? fileMatch[1] : 'nežinomas';

  function init() {
    // Rasti visus klausimus (q-block arba q-card klasė, arba tiesiog sunumeruoti div'us)
    var questions = document.querySelectorAll('.q-block, .q-card, .question, [id^="q-"]');

    // Jei neranda specifinių klasių — bandyti pagal struktūrą
    if (questions.length === 0) {
      // Standartiniai testai: klausimas yra div su tekstu ir variantais
      questions = document.querySelectorAll('.q');
    }

    // Paskutinė galimybė: surasti pagal ID pattern opt-0-0, opt-1-0...
    if (questions.length === 0) {
      var maxQ = 0;
      document.querySelectorAll('[id^="opt-"]').forEach(function(el) {
        var parts = el.id.split('-');
        var qi = parseInt(parts[1]);
        if (qi >= maxQ) maxQ = qi + 1;
      });
      // Sukurti klausimų konteinerius pagal option elementus
      if (maxQ > 0) {
        for (var i = 0; i < maxQ; i++) {
          var firstOpt = document.getElementById('opt-' + i + '-0');
          if (firstOpt) {
            var container = firstOpt.closest('.q-block') || firstOpt.parentElement.parentElement;
            if (container && !container.querySelector('.feedback-btn')) {
              addFeedbackBtn(container, i);
            }
          }
        }
        return;
      }

      // VBE: r0x0, r1x0...
      document.querySelectorAll('[id^="r"]').forEach(function(el) {
        var m = el.id.match(/^r(\d+)x0$/);
        if (m) {
          var qi = parseInt(m[1]);
          var container = el.closest('.qb') || el.parentElement.parentElement;
          if (container && !container.querySelector('.feedback-btn')) {
            addFeedbackBtn(container, qi);
          }
        }
      });
      return;
    }

    questions.forEach(function(q, i) {
      if (!q.querySelector('.feedback-btn')) {
        addFeedbackBtn(q, i);
      }
    });
  }

  function addFeedbackBtn(container, questionIndex) {
    var btn = document.createElement('button');
    btn.className = 'feedback-btn';
    btn.innerHTML = '🚩';
    btn.title = 'Pranešti apie klaidą';
    btn.style.cssText = 'position:absolute;top:8px;right:8px;background:none;border:none;cursor:pointer;font-size:16px;opacity:0.3;transition:opacity 0.15s;padding:4px;z-index:10';
    btn.onmouseover = function() { this.style.opacity = '1'; };
    btn.onmouseout = function() { this.style.opacity = '0.3'; };
    btn.onclick = function(e) {
      e.stopPropagation();
      showFeedbackModal(questionIndex);
    };

    // Užtikrinti, kad konteineris turi position:relative
    var pos = window.getComputedStyle(container).position;
    if (pos === 'static') container.style.position = 'relative';

    container.appendChild(btn);
  }

  function showFeedbackModal(qi) {
    // Pašalinti seną jei yra
    var old = document.getElementById('feedback-modal');
    if (old) old.remove();

    var overlay = document.createElement('div');
    overlay.id = 'feedback-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:9999;display:flex;align-items:center;justify-content:center';

    var card = document.createElement('div');
    card.style.cssText = 'background:var(--bg2,#fff);border-radius:12px;padding:24px 28px;max-width:400px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.2)';

    card.innerHTML =
      '<div style="font-size:16px;font-weight:600;color:var(--ink,#141414);margin-bottom:4px">🚩 Pranešti apie klaidą</div>' +
      '<div style="font-size:13px;color:var(--ink3,#999);margin-bottom:16px">' + chapter + ' / ' + testId + ' / klausimas ' + (qi + 1) + '</div>' +
      '<textarea id="feedback-text" placeholder="Aprašykite klaidą ar problemą..." style="width:100%;height:100px;padding:10px 14px;border:1px solid var(--border,#e5e3dc);border-radius:8px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box;color:var(--ink,#141414);background:var(--bg,#f7f6f2)"></textarea>' +
      '<div style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end">' +
        '<button onclick="document.getElementById(\'feedback-modal\').remove()" style="padding:8px 16px;border:1px solid var(--border,#e5e3dc);border-radius:6px;background:var(--bg2,#fff);color:var(--ink2,#555);font-size:13px;cursor:pointer;font-family:inherit">Atšaukti</button>' +
        '<button id="feedback-send" style="padding:8px 16px;border:none;border-radius:6px;background:var(--ink,#141414);color:#fff;font-size:13px;cursor:pointer;font-family:inherit;font-weight:500">Siųsti</button>' +
      '</div>';

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // Uždaryti paspaudus ant fono
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.remove();
    });

    // Siųsti
    document.getElementById('feedback-send').onclick = function() {
      var text = document.getElementById('feedback-text').value.trim();
      if (!text) return;

      var subject = encodeURIComponent('Klaida: ' + chapter + ' / ' + testId + ' / kl.' + (qi + 1));
      var body = encodeURIComponent(
        'Skyrius: ' + chapter + '\n' +
        'Testas: ' + testId + '\n' +
        'Klausimas: ' + (qi + 1) + '\n' +
        'Puslapis: ' + window.location.href + '\n\n' +
        'Aprašymas:\n' + text
      );
      window.open('mailto:arisstankevicius@gmail.com?subject=' + subject + '&body=' + body, '_self');

      // Parodyti patvirtinimą
      card.innerHTML =
        '<div style="text-align:center;padding:20px 0">' +
          '<div style="font-size:32px;margin-bottom:8px">✅</div>' +
          '<div style="font-size:16px;font-weight:600;color:var(--ink,#141414)">Ačiū!</div>' +
          '<div style="font-size:13px;color:var(--ink3,#999);margin-top:4px">Jūsų pranešimas padeda tobulinti platformą</div>' +
          '<button onclick="document.getElementById(\'feedback-modal\').remove()" style="margin-top:16px;padding:8px 20px;border:none;border-radius:6px;background:var(--ink,#141414);color:#fff;font-size:13px;cursor:pointer;font-family:inherit">Uždaryti</button>' +
        '</div>';
    };

    document.getElementById('feedback-text').focus();
  }

  // Inicializuoti kai DOM paruoštas
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Palaukti truputį kad testų JS sugeneruotų klausimus
    setTimeout(init, 500);
  }
})();
