// Mobile nav drawer — primary links, services mega links, SLED subnav when present.

(function () {
  var header = document.querySelector('header.top');
  if (!header) return;
  var nav = header.querySelector('.nav');
  if (!nav || nav.querySelector('.m-nav-toggle')) return;

  var path = window.location.pathname;

  function isOn(href) {
    if (!href || href === '#') return false;
    if (href === '/') return path === '/';
    return path === href || path.startsWith(href);
  }

  var toggle = document.createElement('button');
  toggle.className = 'm-nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(toggle);

  var drawer = document.createElement('nav');
  drawer.className = 'm-nav-drawer';
  drawer.setAttribute('aria-label', 'Mobile');

  var html = '';
  var subLinks = document.querySelectorAll('.subnav .sub-links a');

  if (subLinks.length) {
    html += '<div class="m-grp"><div class="m-grp-h">SLED Partnerships</div>';
    subLinks.forEach(function (a) {
      var cls = a.classList.contains('on') ? ' on' : '';
      html +=
        '<a href="' +
        a.getAttribute('href') +
        '"' +
        cls +
        '>' +
        a.textContent.trim() +
        '</a>';
    });
    html += '</div>';
  }

  header.querySelectorAll('.primary-nav > a.nav-link').forEach(function (el) {
    var label = el.textContent.replace(/\s+/g, ' ').trim();
    var href = el.getAttribute('href');
    if (!href || href === '#') return;
    html += '<a href="' + href + '"' + (isOn(href) ? ' class="on"' : '') + '>' + label + '</a>';
  });

  var servicesMega = null;
  try {
    var servicesEl = document.getElementById('services-mega-nav');
    if (servicesEl && servicesEl.textContent) {
      servicesMega = JSON.parse(servicesEl.textContent);
    }
  } catch (_) {
    servicesMega = null;
  }

  if (servicesMega) {
    html += '<div class="m-grp"><div class="m-grp-h">Services</div>';
    html +=
      '<a href="/services/"' +
      (isOn('/services/') ? ' class="on"' : '') +
      '>All services</a>';
    Object.keys(servicesMega).forEach(function (key) {
      var cat = servicesMega[key];
      if (!cat) return;
      html += '<span class="m-grp-sub">' + cat.title + '</span>';
      if (cat.landingHref) {
        html +=
          '<a href="' +
          cat.landingHref +
          '"' +
          (isOn(cat.landingHref) ? ' class="on"' : '') +
          '>' +
          cat.title +
          ' overview</a>';
      }
      (cat.subs || []).forEach(function (sub) {
        if (!sub || !sub.href) return;
        html +=
          '<a href="' +
          sub.href +
          '"' +
          (isOn(sub.href) ? ' class="on"' : '') +
          '>' +
          sub.name +
          '</a>';
      });
    });
    html += '</div>';
  } else {
    header.querySelectorAll('.primary-nav .nav-item > .nav-link').forEach(function (el) {
      var label = el.textContent.replace(/\s+/g, ' ').trim();
      html += '<span class="m-grp-h">' + label + '</span>';
    });
  }

  html += '<a class="m-cta" href="/us-sled/">SLED Partnerships \u2192</a>';
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
    if (document.body.classList.contains('m-nav-open')) close();
    else open();
  });
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) close();
  });
})();
