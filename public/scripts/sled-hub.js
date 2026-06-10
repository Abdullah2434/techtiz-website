(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function runTicker(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const to = parseFloat(el.getAttribute('data-to'));
    if (Number.isNaN(to)) return;
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    if (prefersReduced || to === 0) {
      el.textContent = prefix + String(to) + suffix;
      return;
    }
    const dur = 1100;
    let start = null;
    function step(ts) {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + String(Math.round(to * eased)) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = prefix + String(to) + suffix;
    }
    requestAnimationFrame(step);
  }

  function runTickersIn(root) {
    root.querySelectorAll('[data-sled-ticker]').forEach(runTicker);
  }

  const revealEls = document.querySelectorAll('[data-sled-reveal]');
  if (revealEls.length && !prefersReduced) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            runTickersIn(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => {
      el.classList.add('is-visible');
      runTickersIn(el);
    });
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
  const accordion = document.querySelector('[data-sled-spec-accordion]');
  if (!accordion) return;

  const items = accordion.querySelectorAll('[data-sled-spec-item]');
  items.forEach((item) => {
    const head = item.querySelector('.sled-spec-head');
    if (!head) return;

    head.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      items.forEach((entry) => {
        entry.classList.remove('is-open');
        const button = entry.querySelector('.sled-spec-head');
        if (button) button.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        head.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

(function () {
  const cards = document.querySelectorAll('[data-sled-bento-card]');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const wasOpen = card.classList.contains('is-open');
      cards.forEach((c) => c.classList.remove('is-open'));
      if (!wasOpen) card.classList.add('is-open');
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });
})();

(function () {
  const slider = document.querySelector('[data-sled-proof-slider]');
  const track = document.querySelector('[data-sled-proof-track]');
  const prev = document.querySelector('[data-sled-proof-prev]');
  const next = document.querySelector('[data-sled-proof-next]');
  const dotsWrap = document.querySelector('[data-sled-proof-dots]');
  if (!(slider instanceof HTMLElement && track instanceof HTMLElement && prev && next && dotsWrap)) {
    return;
  }

  const slides = track.children;
  const count = slides.length;
  if (!count) return;

  let index = 0;
  const dots = [];

  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'sled-proof-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Engagement ${i + 1}`);
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
    dots.push(dot);
  }

  function go(target) {
    index = (target + count) % count;
    track.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
  }

  prev.addEventListener('click', () => go(index - 1));
  next.addEventListener('click', () => go(index + 1));
})();

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const svg = document.querySelector('[data-sled-dotmap]');
  if (!(svg instanceof SVGSVGElement)) return;

  function fill(len, ranges) {
    const cells = new Array(len).fill('.');
    ranges.forEach(([start, end]) => {
      for (let i = start; i <= end; i += 1) cells[i] = '#';
    });
    return cells.join('');
  }

  const width = 46;
  const rows = [
    fill(width, [[5, 40]]),
    fill(width, [[4, 41]]),
    fill(width, [[3, 42]]),
    fill(width, [[3, 43]]),
    fill(width, [[3, 42]]),
    fill(width, [[3, 41]]),
    fill(width, [[3, 40]]),
    fill(width, [[4, 40]]),
    fill(width, [[4, 39]]),
    fill(width, [[5, 39]]),
    fill(width, [[5, 38]]),
    fill(width, [[6, 38]]),
    fill(width, [[6, 37]]),
    fill(width, [[7, 18], [20, 37]]),
    fill(width, [[8, 17], [21, 36], [38, 39]]),
    fill(width, [[10, 16], [24, 33], [38, 40]]),
    fill(width, [[12, 15], [38, 40]]),
    fill(width, [[38, 40]]),
    fill(width, [[38, 39]]),
  ];

  const rowCount = rows.length;
  const padX = 14;
  const padY = 12;
  const vbW = 460;
  const vbH = 280;
  const stepX = (vbW - padX * 2) / (width - 1);
  const stepY = (vbH - padY * 2) / (rowCount - 1);
  const dotR = Math.min(stepX, stepY) * 0.3;
  const fragment = document.createDocumentFragment();

  for (let y = 0; y < rowCount; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (rows[y][x] !== '#') continue;
      const cx = padX + x * stepX;
      const cy = padY + y * stepY;
      const isServed = x <= 25 || ((x * 3 + y * 7) % 9) < 2;
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', cx.toFixed(1));
      circle.setAttribute('cy', cy.toFixed(1));
      circle.setAttribute('r', dotR.toFixed(2));
      circle.setAttribute('fill', '#D9DEE5');
      if (isServed) circle.setAttribute('data-served', '1');
      fragment.appendChild(circle);
    }
  }

  svg.appendChild(fragment);

  const servedCircles = [...svg.querySelectorAll('circle[data-served="1"]')].sort(
    (a, b) => Number(a.getAttribute('cx')) - Number(b.getAttribute('cx'))
  );

  let swept = false;
  function sweep() {
    if (swept) return;
    const rect = svg.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top > vh * 0.85 || rect.bottom < 0) return;
    swept = true;
    servedCircles.forEach((circle, i) => {
      if (prefersReduced) {
        circle.setAttribute('fill', '#18B0E6');
        return;
      }
      setTimeout(() => {
        circle.setAttribute('fill', '#18B0E6');
      }, 150 + i * 7);
    });
  }

  document.addEventListener('scroll', sweep, { passive: true });
  window.addEventListener('resize', sweep);
  window.addEventListener('load', sweep);
  sweep();
  setTimeout(sweep, 200);
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
    return [...form.querySelectorAll('input[name="need"]:checked')].map((input) => input.value);
  }

  function resetNeeds() {
    form.querySelectorAll('[data-sled-inquiry-need]').forEach((label) => {
      const input = label.querySelector('input[name="need"]');
      if (!(input instanceof HTMLInputElement)) return;
      input.checked = input.defaultChecked;
      label.classList.toggle('is-on', input.checked);
    });
  }

  form.querySelectorAll('[data-sled-inquiry-need]').forEach((label) => {
    const input = label.querySelector('input[name="need"]');
    if (!(input instanceof HTMLInputElement)) return;
    input.addEventListener('change', () => {
      label.classList.toggle('is-on', input.checked);
    });
  });

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
      rfp: '',
      nda: '',
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
      resetNeeds();
    });
  }
})();
