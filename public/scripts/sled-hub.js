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
