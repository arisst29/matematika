// ── Mathematikus 11 — Klausimų atsiliepimai ──
// Prie kiekvieno testo klausimo prideda "Pranešti" mygtuką, atidarantį Google Forms

(function() {
  var path = window.location.pathname;
  if (path.indexOf('/testai/') === -1 && path.indexOf('/egzaminai/') === -1 && path.indexOf('/vbe-egzaminai/') === -1) return;

  var chapterMatch = path.match(/dalykai\/([^\/]+)/);
  var chapter = chapterMatch ? chapterMatch[1] : 'nežinomas';
  var fileMatch = path.match(/([^\/]+)\.html$/);
  var testId = fileMatch ? fileMatch[1] : 'nežinomas';

  // Google Forms konfigūracija
  var FORM_BASE = 'https://docs.google.com/forms/d/e/1FAIpQLSfi7wR6jJnpMb6bK-YA8bgvUGRnEu0OOTv4ctwVkQjUwPor_A/viewform';
  var FIELD_CHAPTER = 'entry.293519683';
  var FIELD_TEST = 'entry.834215159';
  var FIELD_QNUM = 'entry.150969422';
  var FIELD_URL = 'entry.353876083';

  function init() {
    var questions = document.querySelectorAll('.q-block, .q-card, .question, [id^="q-"]');

    if (questions.length === 0) {
      questions = document.querySelectorAll('.q');
    }

    if (questions.length === 0) {
      var maxQ = 0;
      document.querySelectorAll('[id^="opt-"]').forEach(function(el) {
        var parts = el.id.split('-');
        var qi = parseInt(parts[1]);
        if (qi >= maxQ) maxQ = qi + 1;
      });
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
    btn.innerHTML = '🚩 <span style="font-size:11px;font-weight:500">Apie problemą pranešti čia</span>';
    btn.title = 'Pranešti apie klaidą';
    btn.style.cssText = 'position:absolute;top:8px;right:8px;display:flex;align-items:center;gap:5px;background:var(--bg2,#fff);border:1px solid var(--border,#e5e3dc);border-radius:20px;cursor:pointer;font-size:14px;opacity:0.55;transition:opacity 0.15s,box-shadow 0.15s;padding:5px 10px;z-index:10;color:var(--ink2,#555);box-shadow:0 1px 3px rgba(0,0,0,0.06)';
    btn.onmouseover = function() { this.style.opacity = '1'; this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)'; };
    btn.onmouseout = function() { this.style.opacity = '0.55'; this.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; };
    btn.onclick = function(e) {
      e.stopPropagation();
      openFeedbackForm(questionIndex);
    };

    var pos = window.getComputedStyle(container).position;
    if (pos === 'static') container.style.position = 'relative';

    container.appendChild(btn);
  }

  function openFeedbackForm(qi) {
    var params = new URLSearchParams();
    params.set('usp', 'pp_url');
    params.set(FIELD_CHAPTER, chapter);
    params.set(FIELD_TEST, testId);
    params.set(FIELD_QNUM, (qi + 1).toString());
    params.set(FIELD_URL, window.location.href);

    var url = FORM_BASE + '?' + params.toString();
    window.open(url, '_blank', 'noopener');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 500);
  }
})();
