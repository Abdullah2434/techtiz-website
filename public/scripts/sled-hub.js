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
  const seg = document.querySelector('[data-sled-model-seg]');
  const tabPre = document.getElementById('sledModelTabPre');
  const tabPost = document.getElementById('sledModelTabPost');
  const ind = seg?.querySelector('.sled-model-seg-ind');
  const pre = document.getElementById('sledModelPanelPre');
  const post = document.getElementById('sledModelPanelPost');
  if (!seg || !tabPre || !tabPost || !pre || !post) return;

  function moveIndicator(btn) {
    if (!ind || !btn) return;
    ind.style.width = `${btn.offsetWidth}px`;
    ind.style.transform = `translateX(${btn.offsetLeft}px)`;
  }

  function select(which, animate) {
    const isPre = which === 'pre';
    tabPre.setAttribute('aria-selected', isPre ? 'true' : 'false');
    tabPost.setAttribute('aria-selected', isPre ? 'false' : 'true');
    pre.classList.toggle('is-active', isPre);
    post.classList.toggle('is-active', !isPre);
    pre.hidden = !isPre;
    post.hidden = isPre;
    moveIndicator(isPre ? tabPre : tabPost);

    const shown = isPre ? pre : post;
    if (animate) {
      shown.classList.remove('is-fade-in');
      void shown.offsetWidth;
      shown.classList.add('is-fade-in');
    }
  }

  tabPre.addEventListener('click', () => select('pre', true));
  tabPost.addEventListener('click', () => select('post', true));

  seg.querySelectorAll('.sled-model-tab-chk').forEach((chk) => {
    chk.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'width') place();
    });
  });

  function place() {
    moveIndicator(tabPre.getAttribute('aria-selected') === 'true' ? tabPre : tabPost);
  }

  if (ind instanceof HTMLElement) {
    ind.style.transition = 'none';
    place();
    setTimeout(() => {
      ind.style.transition = '';
    }, 60);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(place);
  }
  window.addEventListener('load', place);
  window.addEventListener('resize', place);
  setTimeout(place, 140);
  setTimeout(place, 420);
})();

(function () {
  const tabs = document.querySelectorAll('[data-sled-delivery-tab]');
  const panels = document.querySelectorAll('[data-sled-delivery-panel]');
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = tab.getAttribute('data-sled-delivery-tab');
      tabs.forEach((t) => {
        const active = t === tab;
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach((panel) => {
        const active = panel.getAttribute('data-sled-delivery-panel') === idx;
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
        if (active) {
          panel.classList.remove('is-fade-in');
          void panel.offsetWidth;
          panel.classList.add('is-fade-in');
        }
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
  const SLED_HUB_INQUIRY_API = '/api/sled-hub-inquiry/';
  const form = document.getElementById('sledInquiryForm');
  const success = document.getElementById('sledInquirySuccess');
  if (!form) return;

  function v(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function getSelectedNeeds() {
    return [...document.querySelectorAll('[data-sled-need-card].is-selected [data-sled-need-label]')]
      .map((h) => h.textContent?.trim())
      .filter(Boolean);
  }

  function resetNeedCards() {
    document.querySelectorAll('[data-sled-need-card]').forEach((card) => {
      const isDefault = card.dataset.need === 'pre';
      card.classList.toggle('is-selected', isDefault);
      card.classList.toggle('border-cyan', isDefault);
      card.classList.toggle('bg-cyan-soft', isDefault);
    });
  }

  form.addEventListener('submit', async (e) => {
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

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.disabled = true;
    }

    const payload = {
      needs: getSelectedNeeds().join(', ') || '—',
      company: v('sled-iq-company'),
      role: v('sled-iq-role'),
      rfp: v('sled-iq-rfp'),
      nda: v('sled-iq-nda'),
      vehicle: v('sled-iq-vehicle'),
      agency: v('sled-iq-agency'),
      email: v('sled-iq-email'),
      phone: v('sled-iq-phone'),
      desc: v('sled-iq-desc'),
      website: (form.querySelector('[name="website"]')?.value) || '',
    };

    try {
      const response = await fetch(SLED_HUB_INQUIRY_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry');
      }

      form.classList.add('hidden');
      success?.classList.add('is-visible');
      const y = success?.getBoundingClientRect().top ?? 0;
      window.scrollTo({ top: Math.max(0, y + window.scrollY - 140), behavior: 'smooth' });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      const emailEl = document.getElementById('sled-iq-email');
      if (emailEl instanceof HTMLInputElement) {
        emailEl.style.borderColor = 'var(--color-amber)';
        emailEl.setAttribute('aria-invalid', 'true');
        emailEl.title = message;
      }
    } finally {
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.disabled = false;
      }
    }
  });

  const reset = document.getElementById('sledInquiryReset');
  if (reset) {
    reset.addEventListener('click', (e) => {
      e.preventDefault();
      success?.classList.remove('is-visible');
      form.reset();
      form.classList.remove('hidden');
      resetNeedCards();
    });
  }
})();
