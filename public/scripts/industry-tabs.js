// Industry tabs — sliding pill + panel crossfade (legacy Framer Motion parity).

(function () {
  var EXIT_MS = 300;
  var ENTER_MS = 500;

  function movePill(pill, tabList, btn) {
    if (!pill || !tabList || !btn) return;
    var listRect = tabList.getBoundingClientRect();
    var btnRect = btn.getBoundingClientRect();
    pill.style.width = btnRect.width + 'px';
    pill.style.height = btnRect.height + 'px';
    pill.style.transform = 'translate3d(' + (btnRect.left - listRect.left) + 'px,' + (btnRect.top - listRect.top) + 'px,0)';
  }

  document.querySelectorAll('[data-industry-tabs]').forEach(function (root) {
    var buttons = root.querySelectorAll('.ind-tab-btn');
    var panels = root.querySelectorAll('.ind-tab-panel');
    var tabList = root.querySelector('[data-ind-tab-list]');
    var pill = root.querySelector('.ind-tab-pill-slider');
    if (!buttons.length || !panels.length) return;

    var activeIndex = 0;
    var isAnimating = false;
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setActiveButton(index) {
      buttons.forEach(function (b, i) {
        b.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
      movePill(pill, tabList, buttons[index]);
    }

    function activatePanel(index) {
      panels.forEach(function (panel, i) {
        panel.classList.remove('is-active', 'is-entering', 'is-exiting');
        panel.classList.toggle('is-hidden', i !== index);
        if (i === index) panel.classList.add('is-active');
      });
      activeIndex = index;
      isAnimating = false;
    }

    function showPanel(index) {
      if (index === activeIndex || isAnimating) return;
      if (index < 0 || index >= panels.length) return;

      var current = panels[activeIndex];
      var next = panels[index];
      isAnimating = true;
      setActiveButton(index);

      if (reducedMotion) {
        activatePanel(index);
        return;
      }

      current.classList.remove('is-active');
      current.classList.add('is-exiting');

      window.setTimeout(function () {
        current.classList.remove('is-exiting');
        current.classList.add('is-hidden');

        next.classList.remove('is-hidden');
        next.classList.add('is-entering');

        window.setTimeout(function () {
          next.classList.remove('is-entering');
          next.classList.add('is-active');
          activeIndex = index;
          isAnimating = false;
        }, ENTER_MS);
      }, EXIT_MS);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var index = Number(btn.getAttribute('data-tab-index'));
        if (Number.isNaN(index)) return;
        showPanel(index);
      });
    });

    function syncPill() {
      movePill(pill, tabList, buttons[activeIndex]);
    }

    window.requestAnimationFrame(function () {
      syncPill();
      if (pill) pill.classList.add('is-ready');
    });
    window.addEventListener('resize', syncPill);
  });
})();
