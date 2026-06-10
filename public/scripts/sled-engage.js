(function () {
  document.querySelectorAll('[data-sled-spec-acc]').forEach(function (acc) {
    var items = Array.prototype.slice.call(acc.querySelectorAll('[data-sled-spec-item]'));
    if (!items.length) return;

    items.forEach(function (item) {
      var head = item.querySelector('.sled-spec-head');
      if (!head) return;

      head.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        items.forEach(function (it) {
          it.classList.remove('is-open');
          var h = it.querySelector('.sled-spec-head');
          if (h) h.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-open');
          head.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
})();

(function () {
  document.querySelectorAll('[data-sled-bento]').forEach(function (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.sled-bento-card'));
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        var wasOpen = card.classList.contains('is-open');
        cards.forEach(function (c) {
          c.classList.remove('is-open');
        });
        if (!wasOpen) card.classList.add('is-open');
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  });
})();

(function () {
  var svg = document.getElementById('sledDotmap');
  if (!svg) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function fill(len, ranges) {
    var a = new Array(len).fill('.');
    ranges.forEach(function (r) {
      for (var i = r[0]; i <= r[1]; i++) a[i] = '#';
    });
    return a.join('');
  }

  var W = 46;
  var rows = [
    fill(W, [[5, 40]]),
    fill(W, [[4, 41]]),
    fill(W, [[3, 42]]),
    fill(W, [[3, 43]]),
    fill(W, [[3, 42]]),
    fill(W, [[3, 41]]),
    fill(W, [[3, 40]]),
    fill(W, [[4, 40]]),
    fill(W, [[4, 39]]),
    fill(W, [[5, 39]]),
    fill(W, [[5, 38]]),
    fill(W, [[6, 38]]),
    fill(W, [[6, 37]]),
    fill(W, [[7, 18], [20, 37]]),
    fill(W, [[8, 17], [21, 36], [38, 39]]),
    fill(W, [[10, 16], [24, 33], [38, 40]]),
    fill(W, [[12, 15], [38, 40]]),
    fill(W, [[38, 40]]),
    fill(W, [[38, 39]]),
  ];
  var R = rows.length;
  var padX = 14;
  var padY = 12;
  var vbW = 460;
  var vbH = 280;
  var stepX = (vbW - padX * 2) / (W - 1);
  var stepY = (vbH - padY * 2) / (R - 1);
  var dotR = Math.min(stepX, stepY) * 0.3;
  var frag = '';
  var served = [];

  for (var y = 0; y < R; y++) {
    for (var x = 0; x < W; x++) {
      if (rows[y][x] !== '#') continue;
      var cx = padX + x * stepX;
      var cy = padY + y * stepY;
      var isServed = x <= 25 || ((x * 3 + y * 7) % 9) < 2;
      frag +=
        '<circle cx="' +
        cx.toFixed(1) +
        '" cy="' +
        cy.toFixed(1) +
        '" r="' +
        dotR.toFixed(2) +
        '" fill="#D9DEE5" data-served="' +
        (isServed ? '1' : '0') +
        '"></circle>';
      if (isServed) served.push(null);
    }
  }

  svg.innerHTML = frag;

  var circles = Array.prototype.slice.call(svg.querySelectorAll('circle[data-served="1"]'));
  circles.sort(function (a, b) {
    return +a.getAttribute('cx') - +b.getAttribute('cx');
  });

  var swept = false;
  function sweep() {
    if (swept) return;
    var r = svg.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top > vh * 0.85 || r.bottom < 0) return;
    swept = true;
    circles.forEach(function (c, i) {
      if (reduce) {
        c.setAttribute('fill', '#18B0E6');
        return;
      }
      setTimeout(function () {
        c.setAttribute('fill', '#18B0E6');
      }, 150 + i * 7);
    });
  }

  document.addEventListener('scroll', sweep, { passive: true });
  window.addEventListener('resize', sweep);
  window.addEventListener('load', sweep);
  sweep();
  setTimeout(sweep, 200);
})();
