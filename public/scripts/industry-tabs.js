(function () {
  document.querySelectorAll('[data-industry-tabs]').forEach(function (root) {
    var buttons = root.querySelectorAll('.ind-tab-btn');
    var panels = root.querySelectorAll('.ind-tab-panel');
    if (!buttons.length || !panels.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var index = btn.getAttribute('data-tab-index');
        if (index === null) return;

        buttons.forEach(function (b) {
          b.setAttribute('aria-selected', 'false');
        });
        btn.setAttribute('aria-selected', 'true');

        panels.forEach(function (panel) {
          var match = panel.getAttribute('data-tab-panel') === index;
          panel.classList.toggle('hidden', !match);
        });
      });
    });
  });
})();
