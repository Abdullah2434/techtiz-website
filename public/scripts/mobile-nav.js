// Shared mobile-nav drawer for SLED pages. Self-contained: builds a
// hamburger toggle + slide-in drawer from the existing nav DOM, so no
// per-page header markup changes are needed. Safe on every page,
// including the hub (which uses its own inline nav script).

(function () {
  var header = document.querySelector('header.top');
  if (!header) return;
  var nav = header.querySelector('.nav');
  if (!nav || nav.querySelector('.m-nav-toggle')) return;
  // Only activate on smaller viewports. Avoid creating an off-canvas drawer
  // on desktop, which can introduce horizontal overflow on some browsers.
  if (window.innerWidth > 900) return;

  // ---- Hamburger toggle ----
  var toggle = document.createElement('button');
  toggle.className = 'm-nav-toggle group hidden max-[900px]:inline-flex flex-col justify-center gap-[5px] w-[44px] h-[44px] rounded-lg border border-line bg-white shrink-0 p-0 px-[11px]';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.dataset.open = 'false';
  toggle.innerHTML =
    '<span class="block h-[2px] w-full rounded-sm bg-yale transition-[transform,opacity] duration-220 ease-out group-data-[open=true]:[transform:translateY(7px)_rotate(45deg)]"></span>' +
    '<span class="block h-[2px] w-full rounded-sm bg-yale transition-[transform,opacity] duration-220 ease-out group-data-[open=true]:opacity-0"></span>' +
    '<span class="block h-[2px] w-full rounded-sm bg-yale transition-[transform,opacity] duration-220 ease-out group-data-[open=true]:[transform:translateY(-7px)_rotate(-45deg)]"></span>';
  nav.appendChild(toggle);

  // ---- Drawer ----
  var drawer = document.createElement('nav');
  drawer.className =
    'm-nav-drawer hidden max-[900px]:block fixed inset-x-0 top-16 bottom-0 z-[49] translate-x-full overflow-y-auto border-t border-line bg-white px-6 pt-6 pb-10 transition-transform duration-280 ease-[cubic-bezier(.4,0,.2,1)] data-[open=true]:translate-x-0';
  drawer.setAttribute('aria-label', 'Mobile');
  drawer.dataset.open = 'false';

  var html = '';

  // SLED subnav links (most relevant to this section's visitor)
  var subLinks = document.querySelectorAll('.subnav .sub-links a');
  if (subLinks.length) {
    html += '<div class="m-grp mb-[26px]"><div class="m-grp-h mb-1.5 font-mono text-[10.5px] tracking-[0.16em] text-cyan-strong uppercase">SLED Partnerships</div>';
    subLinks.forEach(function (a) {
      var cls = a.classList.contains('on') ? ' on' : '';
      html +=
        '<a href="' +
        a.getAttribute('href') +
        '" class="flex items-center justify-between border-b border-line-soft px-1 py-[13px] text-base font-semibold text-ink [&.on]:text-yale' +
        cls +
        '">' +
        a.textContent.trim() +
        '</a>';
    });
    html += '</div>';
  }

  // Primary (commercial) links that are real anchors
  var primAnchors = header.querySelectorAll('.primary-nav > a[href]');
  if (primAnchors.length) {
    html += '<div class="m-grp mb-[26px]"><div class="m-grp-h mb-1.5 font-mono text-[10.5px] tracking-[0.16em] text-cyan-strong uppercase">Techtiz</div>';
    primAnchors.forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === '#') return;
      html +=
        '<a href="' +
        href +
        '" class="flex items-center justify-between border-b border-line-soft px-1 py-[13px] text-base font-semibold text-ink">' +
        a.textContent.trim() +
        '</a>';
    });
    html += '</div>';
  }

  // Primary CTA (contact)
  html +=
    '<a class="m-cta mt-6 justify-center rounded-lg border-0 border-b-0 bg-cyan py-[15px] font-bold text-yale-dark inline-flex items-center" href="/us-sled/contact/">Start an NDA conversation</a>';

  drawer.innerHTML = html;
  header.appendChild(drawer);

  function close() {
    document.body.classList.remove('m-nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.dataset.open = 'false';
    drawer.dataset.open = 'false';
    document.body.style.overflow = '';
  }
  function open() {
    document.body.classList.add('m-nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    toggle.dataset.open = 'true';
    drawer.dataset.open = 'true';
    document.body.style.overflow = 'hidden';
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
