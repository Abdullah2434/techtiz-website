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

  if (root.hasAttribute('data-sled-case-legacy')) {
    const tabs = Array.from(root.querySelectorAll('.ctab'));
    const panels = Array.from(root.querySelectorAll('.cpanel'));
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const idx = Number(tab.getAttribute('data-i'));
        tabs.forEach((t) => t.classList.toggle('on', t === tab));
        panels.forEach((panel) => {
          const on = Number(panel.getAttribute('data-i')) === idx;
          panel.classList.toggle('on', on);
          panel.hidden = !on;
        });
      });
    });

    root.querySelectorAll('.ctab .cpill.lk').forEach((pill) => {
      const tab = pill.closest('.ctab');
      const label = tab?.querySelector('.ct');
      if (tab && label) {
        label.remove();
        tab.classList.add('locked-tab');
      }
    });

    root.querySelectorAll('.iv-bars').forEach((group) => {
      const bars = Array.from(group.children).filter((child) => child.classList.contains('iv-bar'));
      if (bars.length <= 2) return;
      for (let i = 2; i < bars.length; i += 1) {
        bars[i].classList.add('locked');
        const value = bars[i].querySelector('.ivv');
        if (value) value.innerHTML = '<span class="ivlock">NDA</span>';
        const fill = bars[i].querySelector('.ivfill');
        if (fill) fill.remove();
      }
    });

    /* ---------- reach rail: scroll-spy + mobile sheet ---------- */
    (function initReachRail() {
      const rail = document.getElementById('reachRail');
      const bar = document.getElementById('reachBar');
      if (!rail && !bar) return;

      const SCROLL_OFFSET = 132;
      const allLinks = Array.from(document.querySelectorAll('[data-rr]'));
      if (!allLinks.length) return;

      const ids = allLinks
        .map((a) => {
          const href = a.getAttribute('href') || '';
          return href.startsWith('#') ? href.slice(1) : '';
        })
        .filter(Boolean)
        .filter((id, i, arr) => arr.indexOf(id) === i);

      const labels = {};
      allLinks.forEach((a) => {
        const href = a.getAttribute('href') || '';
        if (href.startsWith('#')) labels[href.slice(1)] = a.textContent.trim();
      });

      const curLabel = document.querySelector('.rb-cur');
      const sheet = document.getElementById('reachSheet');
      const jumpBtn = document.getElementById('reachJump');

      /* smooth scroll on link click */
      allLinks.forEach((a) => {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href') || '';
          if (!href.startsWith('#')) return;
          const target = document.getElementById(href.slice(1));
          if (!target) return;
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          if (sheet) sheet.classList.remove('open');
        });
      });

      /* scroll-spy */
      function updateSpy() {
        let active = ids[0];
        for (let i = 0; i < ids.length; i++) {
          const el = document.getElementById(ids[i]);
          if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET + 14) {
            active = ids[i];
          }
        }
        allLinks.forEach((a) => {
          const href = a.getAttribute('href') || '';
          a.classList.toggle('on', href === '#' + active);
        });
        if (curLabel && labels[active]) curLabel.textContent = labels[active];
      }

      document.addEventListener('scroll', updateSpy, { passive: true });
      window.addEventListener('resize', updateSpy);
      updateSpy();

      /* mobile sheet toggle */
      if (jumpBtn && sheet) {
        jumpBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          sheet.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.reach-bar')) {
            sheet.classList.remove('open');
          }
        });
      }
    })();
  }

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
