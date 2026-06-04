(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('[data-sled-reveal]');
  if (revealEls.length && !prefersReduced) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
})();

(function () {
  const buttons = document.querySelectorAll('[data-sled-stage-tab]');
  const panels = document.querySelectorAll('[data-sled-stage-panel]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.sledStageTab;
      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('bg-yale-dark', active);
        b.classList.toggle('text-white', active);
        b.classList.toggle('text-muted', !active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach((p) => {
        p.classList.toggle('is-visible', p.dataset.sledStagePanel === target);
      });
    });
  });
})();

(function () {
  document.querySelectorAll('[data-sled-need-card]').forEach((card) => {
    card.addEventListener('click', () => card.classList.toggle('is-selected'));
  });
})();

(function () {
  const form = document.getElementById('sledInquiryForm');
  const success = document.getElementById('sledInquirySuccess');
  if (!form) return;
  const mailtoEmail = form.dataset.mailto || '';
  if (!mailtoEmail) return;

  function v(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    ['sled-iq-company', 'sled-iq-email'].forEach((id) => {
      const el = document.getElementById(id);
      if (el && !el.value.trim()) {
        el.style.borderColor = 'var(--color-amber)';
        ok = false;
      } else if (el) {
        el.style.borderColor = '';
      }
    });
    if (!ok) return;

    const needs = [...document.querySelectorAll('[data-sled-need-card].is-selected [data-sled-need-label]')]
      .map((h) => h.textContent?.trim());
    const lines = [
      'U.S. SLED engagement inquiry (hub)',
      '',
      'Needs:       ' + (needs.join(', ') || '—'),
      'Company:     ' + v('sled-iq-company'),
      'Role:        ' + v('sled-iq-role'),
      'RFP/RFQ:     ' + (v('sled-iq-rfp') || '—'),
      'NDA status:  ' + (v('sled-iq-nda') || '—'),
      'Vehicle:     ' + (v('sled-iq-vehicle') || '—'),
      'Agency:      ' + (v('sled-iq-agency') || '—'),
      'Email:       ' + v('sled-iq-email'),
      'Phone:       ' + (v('sled-iq-phone') || '—'),
      '',
      'Description:',
      v('sled-iq-desc') || '(none provided)',
    ];
    const subject = 'SLED engagement inquiry — ' + (v('sled-iq-company') || 'prime contractor');
    window.location.href =
      'mailto:' + mailtoEmail + '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(lines.join('\n'));
    form.classList.add('hidden');
    success?.classList.add('is-visible');
  });

  const reset = document.getElementById('sledInquiryReset');
  if (reset) {
    reset.addEventListener('click', (e) => {
      e.preventDefault();
      success?.classList.remove('is-visible');
      form.reset();
      form.classList.remove('hidden');
    });
  }
})();
