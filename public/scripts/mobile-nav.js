// Shared mobile-nav drawer for SLED pages. Self-contained: builds a
// hamburger toggle + slide-in drawer from the existing nav DOM, so no
// per-page header markup changes are needed. Safe on every page,
// including the hub (which uses its own inline nav script).

(function () {
  var header = document.querySelector('header.top');
  if (!header) return;
  var nav = header.querySelector('.nav');
  if (!nav || nav.querySelector('.m-nav-toggle')) return;

  // ---- Hamburger toggle ----
  var toggle = document.createElement('button');
  toggle.className = 'm-nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(toggle);

  // ---- Drawer ----
  var drawer = document.createElement('nav');
  drawer.className = 'm-nav-drawer';
  drawer.setAttribute('aria-label', 'Mobile');

  var html = '';

  // SLED subnav links (most relevant to this section's visitor)
  var subLinks = document.querySelectorAll('.subnav .sub-links a');
  if (subLinks.length) {
    html += '<div class="m-grp"><div class="m-grp-h">SLED Partnerships</div>';
    subLinks.forEach(function (a) {
      var cls = a.classList.contains('on') ? ' class="on"' : '';
      html += '<a href="' + a.getAttribute('href') + '"' + cls + '>' + a.textContent.trim() + '</a>';
    });
    html += '</div>';
  }

  // Primary (commercial) links that are real anchors
  var primAnchors = header.querySelectorAll('.primary-nav > a[href]');
  if (primAnchors.length) {
    html += '<div class="m-grp"><div class="m-grp-h">Techtiz</div>';
    primAnchors.forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === '#') return;
      html += '<a href="' + href + '">' + a.textContent.trim() + '</a>';
    });
    html += '</div>';
  }

  // Primary CTA (contact)
  html += '<a class="m-cta" href="contact.html">Start an NDA conversation</a>';

  drawer.innerHTML = html;
  header.appendChild(drawer);

  function close() {
    document.body.classList.remove('m-nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
  function open() {
    document.body.classList.add('m-nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  toggle.addEventListener('click', function () {
    if (document.body.classList.contains('m-nav-open')) close(); else open();
  });
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) close();
  });
})();
