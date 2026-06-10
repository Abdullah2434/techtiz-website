(function () {
  const root = document.querySelector('[data-sled-case-study]');
  if (!root) return;

  const deadline = root.getAttribute('data-sled-case-deadline');
  if (deadline && new Date() > new Date(deadline)) {
    root.setAttribute('data-sled-case-status', 'past');
  }

  root.querySelectorAll('[data-sled-spec-acc]').forEach((acc) => {
    const items = Array.from(acc.querySelectorAll('[data-sled-spec-item]'));
    if (!items.length) return;

    items.forEach((item) => {
      const head = item.querySelector('.sled-spec-head');
      if (!head) return;

      head.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        items.forEach((it) => {
          it.classList.remove('is-open');
          const h = it.querySelector('.sled-spec-head');
          if (h) h.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-open');
          head.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

  document.querySelectorAll('[data-sled-failure-tabs]').forEach((wrap) => {
    const tabs = wrap.querySelectorAll('[data-sled-failure-tab]');
    const panels = wrap.querySelectorAll('[data-sled-failure-panel]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const idx = tab.getAttribute('data-sled-failure-tab');
        tabs.forEach((t) => {
          const active = t === tab;
          t.setAttribute('aria-selected', active ? 'true' : 'false');
          t.classList.toggle('border-transparent', active);
          t.classList.toggle('bg-yale', active);
          t.classList.toggle('text-white', active);
          t.classList.toggle('border-line', !active);
          t.classList.toggle('bg-white', !active);
          t.classList.toggle('text-muted', !active);
        });
        panels.forEach((panel) => {
          const show = panel.getAttribute('data-sled-failure-panel') === idx;
          panel.classList.toggle('hidden', !show);
          panel.classList.toggle('flex', show);
          panel.hidden = !show;
        });
      });
    });
  });
})();
