// Mobile nav drawer — primary links, collapsible mega sections, SLED subnav when present.

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

  function openIfActive(hrefs) {
    if (!hrefs || !hrefs.length) return '';
    for (var i = 0; i < hrefs.length; i++) {
      if (isOn(hrefs[i])) return ' open';
    }
    return '';
  }

  function chev() {
    return '<span class="m-dropdown-chev" aria-hidden="true"></span>';
  }

  function linkRow(href, label, nested) {
    var classes = 'm-dropdown-link' + (nested ? ' m-dropdown-link--nested' : '') + (isOn(href) ? ' on' : '');
    return '<a href="' + href + '" class="' + classes + '">' + label + '</a>';
  }

  function textRow(label, desc) {
    var html = '<span class="m-dropdown-nolink">' + label + '</span>';
    if (desc) html += '<span class="m-dropdown-nolink-desc">' + desc + '</span>';
    return html;
  }

  function buildCategoryDropdown(title, panelHtml, activeHrefs) {
    return (
      '<details class="m-dropdown m-dropdown--nested"' +
      openIfActive(activeHrefs) +
      '>' +
      '<summary class="m-dropdown-trigger m-dropdown-trigger--nested">' +
      title +
      chev() +
      '</summary>' +
      '<div class="m-dropdown-panel m-dropdown-panel--nested">' +
      panelHtml +
      '</div>' +
      '</details>'
    );
  }

  function buildSectionDropdown(title, panelHtml, activeHrefs) {
    return (
      '<details class="m-dropdown"' +
      openIfActive(activeHrefs) +
      '>' +
      '<summary class="m-dropdown-trigger">' +
      title +
      chev() +
      '</summary>' +
      '<div class="m-dropdown-panel">' +
      panelHtml +
      '</div>' +
      '</details>'
    );
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
  var sectionHrefs = [];

  var subLinks = document.querySelectorAll('.subnav .sub-links a');
  if (subLinks.length) {
    var sledPanel = '';
    var sledHrefs = [];
    subLinks.forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      sledHrefs.push(href);
      var active = a.classList.contains('on') || isOn(href);
      sledPanel +=
        '<a href="' +
        href +
        '" class="m-dropdown-link' +
        (active ? ' on' : '') +
        '">' +
        a.textContent.trim() +
        '</a>';
    });
    html += buildSectionDropdown('SLED Partnerships', sledPanel, sledHrefs);
    sectionHrefs = sectionHrefs.concat(sledHrefs);
  }

  header.querySelectorAll('.primary-nav > a.nav-link').forEach(function (el) {
    var label = el.textContent.replace(/\s+/g, ' ').trim();
    var href = el.getAttribute('href');
    if (!href || href === '#') return;
    html += linkRow(href, label, false);
    sectionHrefs.push(href);
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
    var servicesPanel = linkRow('/services/', 'All services', false);
    var servicesHrefs = ['/services/'];

    Object.keys(servicesMega).forEach(function (key) {
      var cat = servicesMega[key];
      if (!cat) return;
      var catHrefs = [];
      var catPanel = '';

      if (cat.landingHref) {
        catHrefs.push(cat.landingHref);
        catPanel += linkRow(cat.landingHref, cat.title + ' overview', true);
      }
      (cat.subs || []).forEach(function (sub) {
        if (!sub || !sub.href) return;
        catHrefs.push(sub.href);
        catPanel += linkRow(sub.href, sub.name, true);
      });

      servicesHrefs = servicesHrefs.concat(catHrefs);
      servicesPanel += buildCategoryDropdown(cat.title, catPanel, catHrefs);
    });

    html += buildSectionDropdown('Services', servicesPanel, servicesHrefs);
  }

  var industriesMega = null;
  try {
    var industriesEl = document.getElementById('industries-mega-nav');
    if (industriesEl && industriesEl.textContent) {
      industriesMega = JSON.parse(industriesEl.textContent);
    }
  } catch (_) {
    industriesMega = null;
  }

  if (industriesMega) {
    var industriesPanel = linkRow('/industries/', 'All industries', false);
    var industriesHrefs = ['/industries/'];

    Object.keys(industriesMega).forEach(function (key) {
      var cat = industriesMega[key];
      if (!cat) return;
      var catHrefs = [];
      var catPanel = '';

      if (cat.landingHref) {
        catHrefs.push(cat.landingHref);
        catPanel += linkRow(cat.landingHref, cat.title + ' overview', true);
        industriesHrefs.push(cat.landingHref);
      }
      (cat.subs || []).forEach(function (sub) {
        if (!sub || !sub.name) return;
        catPanel += textRow(sub.name, sub.desc);
      });

      industriesPanel += buildCategoryDropdown(cat.title, catPanel, catHrefs);
    });

    html += buildSectionDropdown('Industries', industriesPanel, industriesHrefs);
  }

  if (!servicesMega && !industriesMega) {
    header.querySelectorAll('.primary-nav .nav-item > .nav-link').forEach(function (el) {
      html +=
        '<span class="m-grp-h">' + el.textContent.replace(/\s+/g, ' ').trim() + '</span>';
    });
  }

  html += '<a class="m-cta" href="/us-sled/">SLED Partnerships \u2192</a>';
  drawer.innerHTML = html;
  document.body.appendChild(drawer);

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
