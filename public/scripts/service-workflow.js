// Mobile workflow cards: tap to expand (legacy WorkflowSection behavior).
(function () {
  var hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  var hasHover = window.matchMedia('(hover: hover)').matches;
  if (!hasTouch || hasHover) return;

  document.querySelectorAll('[data-workflow-card]').forEach(function (card) {
    card.addEventListener('click', function () {
      var active = card.classList.contains('is-active');
      document.querySelectorAll('[data-workflow-card]').forEach(function (c) {
        c.classList.remove('is-active');
      });
      if (!active) card.classList.add('is-active');
    });
  });
})();
