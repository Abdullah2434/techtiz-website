// About stats — scroll-triggered count-up (legacy react-countup + scrollSpyOnce).

(function () {
  const root = document.querySelector('[data-about-stats]');
  if (!root || !('IntersectionObserver' in window)) return;

  const DURATION_MS = 1500;

  function animateValue(el) {
    if (el.dataset.counted === 'true') return;
    el.dataset.counted = 'true';

    const end = Number(el.dataset.value);
    const suffix = el.dataset.suffix || '';
    if (!Number.isFinite(end)) return;

    const start = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - start) / DURATION_MS);
      const eased = 1 - (1 - t) * (1 - t);
      const current = Math.round(end * eased);
      el.textContent = `${current}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const targets = root.querySelectorAll('[data-about-stat-value]');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35, rootMargin: '0px 0px -10% 0px' },
  );

  targets.forEach((el) => io.observe(el));
})();
