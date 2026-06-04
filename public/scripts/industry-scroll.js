(function () {
  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  /** Framer useTransform-style piecewise linear mapping */
  function transform(progress, input, output) {
    if (input.length !== output.length || input.length < 2) return output[0] ?? 0;
    if (progress <= input[0]) return output[0];
    if (progress >= input[input.length - 1]) return output[output.length - 1];
    for (var i = 0; i < input.length - 1; i++) {
      if (progress >= input[i] && progress <= input[i + 1]) {
        var t = (input[i + 1] - input[i]) === 0 ? 1 : (progress - input[i]) / (input[i + 1] - input[i]);
        return output[i] + (output[i + 1] - output[i]) * t;
      }
    }
    return output[output.length - 1];
  }

  function init(root) {
    if (root.dataset.industryScrollInit === '1') return;
    root.dataset.industryScrollInit = '1';

    var color = root.getAttribute('data-highlight-color') || '#18B6F6';
    var progressEl = root.querySelector('[data-scroll-progress]');
    var headingEl = root.querySelector('[data-scroll-heading]');
    var steps = Array.from(root.querySelectorAll('[data-scroll-step]'));
    var total = steps.length;
    if (!total) return;

    root.classList.add('is-enhanced');

    if (progressEl) {
      progressEl.style.background =
        'linear-gradient(to bottom, ' + color + ', ' + color + 'CC, ' + color + '80)';
      progressEl.style.boxShadow = '0 0 20px ' + color + '40';
    }

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ticking = false;

    function applyStep(step, index, progress) {
      var totalRange = 0.6;
      var startOffset = 0.1;
      var stepStart = startOffset + (index / total) * totalRange;
      var stepEnd = startOffset + ((index + 0.7) / total) * totalRange;
      var preStart = Math.max(0, stepStart - 0.1);

      var stepOpacity = transform(progress, [preStart, stepStart, stepEnd], [0, 0, 1]);
      var stepX = transform(progress, [preStart, stepStart, stepEnd], [40, 40, 0]);
      var badgeScale = transform(progress, [preStart, stepStart, stepEnd], [0.5, 0.5, 1]);
      var badgeOpacity = transform(progress, [preStart, stepStart, stepEnd], [0, 0, 1]);
      var badgeNumScale = transform(progress, [stepStart, stepStart + 0.05, stepEnd], [0.8, 1.1, 1]);
      var glowOpacity = transform(progress, [stepStart, stepEnd], [0, 0.6]);
      var titleOpacity = transform(progress, [stepStart, stepStart + 0.05, stepEnd], [0, 0, 1]);
      var titleY = transform(progress, [stepStart, stepStart + 0.05, stepEnd], [10, 10, 0]);
      var descOpacity = transform(progress, [stepStart + 0.05, stepStart + 0.1, stepEnd], [0, 1, 1]);
      var descY = transform(progress, [stepStart + 0.05, stepStart + 0.1, stepEnd], [10, 10, 0]);
      var connectorOpacity = transform(progress, [stepEnd, stepEnd + 0.05], [0, 1]);

      var title = step.querySelector('.ind-scroll-step-title');
      var desc = step.querySelector('.ind-scroll-step-desc');
      var badge = step.querySelector('.ind-scroll-badge');
      var badgeNum = step.querySelector('.ind-scroll-badge-num');
      var glow = step.querySelector('.ind-scroll-badge-glow');
      var connector = step.querySelector('[data-step-connector]');

      if (reducedMotion) {
        step.style.opacity = '1';
        step.style.transform = 'none';
        if (title) {
          title.style.opacity = '1';
          title.style.transform = 'none';
        }
        if (desc) {
          desc.style.opacity = '1';
          desc.style.transform = 'none';
        }
        if (badge) {
          badge.style.opacity = '1';
          badge.style.transform = 'none';
        }
        if (badgeNum) badgeNum.style.transform = 'none';
        if (glow) glow.style.opacity = '0.5';
        if (connector) connector.style.opacity = index < total - 1 ? '1' : '0';
        return;
      }

      step.style.opacity = String(stepOpacity);
      step.style.transform = 'translate3d(' + stepX + 'px,0,0)';

      if (title) {
        title.style.opacity = String(titleOpacity);
        title.style.transform = 'translate3d(0,' + titleY + 'px,0)';
      }
      if (desc) {
        desc.style.opacity = String(descOpacity);
        desc.style.transform = 'translate3d(0,' + descY + 'px,0)';
      }
      if (badge) {
        badge.style.opacity = String(badgeOpacity);
        badge.style.transform = 'scale(' + badgeScale + ')';
      }
      if (badgeNum) badgeNum.style.transform = 'scale(' + badgeNumScale + ')';
      if (glow) glow.style.opacity = String(glowOpacity);
      if (connector) connector.style.opacity = String(connectorOpacity);
    }

    /** Matches Framer useScroll offset: ["start start", "end start"] */
    function getProgress() {
      var rect = root.getBoundingClientRect();
      var scrollable = root.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      return clamp(-rect.top / scrollable, 0, 1);
    }

    function update() {
      ticking = false;
      var progress = getProgress();

      if (progressEl) {
        progressEl.style.height = progress * 100 + '%';
      }

      if (headingEl && !reducedMotion) {
        var headingOpacity = transform(progress, [0, 0.1], [0, 1]);
        var headingY = transform(progress, [0, 0.1], [20, 0]);
        headingEl.style.opacity = String(headingOpacity);
        headingEl.style.transform = 'translate3d(0,' + headingY + 'px,0)';
      } else if (headingEl) {
        headingEl.style.opacity = '1';
        headingEl.style.transform = 'none';
      }

      steps.forEach(function (step, index) {
        applyStep(step, index, progress);
      });
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    window.addEventListener('load', requestUpdate, { passive: true });

    if (typeof ResizeObserver !== 'undefined') {
      var ro = new ResizeObserver(requestUpdate);
      ro.observe(root);
    }
  }

  function boot() {
    document.querySelectorAll('[data-industry-scroll]').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  window.addEventListener('load', boot);
})();
