// Mobile nav drawer — collapsible sections + nested category dropdowns.

(function () {
  var header = document.querySelector("header.top");
  if (!header) return;
  var nav = header.querySelector(".nav");
  if (!nav || nav.querySelector(".m-nav-toggle")) return;

  var path = window.location.pathname;
  var allHrefs = [];
  var activeHref = null;

  function normalizePath(href) {
    if (!href || href === "#") return "";
    if (href === "/") return "/";
    return href.endsWith("/") ? href : href + "/";
  }

  function trackHref(href) {
    if (href && href !== "#") allHrefs.push(href);
  }

  function resolveActiveHref(hrefs) {
    var current = normalizePath(path);
    var best = null;
    var bestLen = -1;

    hrefs.forEach(function (href) {
      var target = normalizePath(href);
      if (!target) return;

      var match = false;
      if (target === "/") {
        match = current === "/";
      } else if (current === target) {
        match = true;
      } else if (current.startsWith(target)) {
        match = true;
      }

      if (match && target.length > bestLen) {
        best = href;
        bestLen = target.length;
      }
    });

    return best;
  }

  function chev() {
    return '<span class="m-section-chev" aria-hidden="true"></span>';
  }

  function buildSection(sectionKey, title, panelHtml, sectionHrefs) {
    var open =
      activeHref &&
      sectionHrefs.some(function (href) {
        return normalizePath(href) === normalizePath(activeHref);
      });

    return (
      '<details class="m-section" data-section="' +
      sectionKey +
      '"' +
      (open ? " open" : "") +
      ">" +
      '<summary class="m-section-trigger">' +
      title +
      chev() +
      "</summary>" +
      '<div class="m-section-panel">' +
      panelHtml +
      "</div>" +
      "</details>"
    );
  }

  function buildSubSection(cat, subs) {
    var catHrefs = [];
    if (cat.landingHref) catHrefs.push(cat.landingHref);
    subs.forEach(function (sub) {
      catHrefs.push(sub.href);
    });

    var open =
      activeHref &&
      catHrefs.some(function (href) {
        return normalizePath(href) === normalizePath(activeHref);
      });

    var summaryActive =
      cat.landingHref &&
      activeHref &&
      normalizePath(cat.landingHref) === normalizePath(activeHref);

    var panel = "";
    subs.forEach(function (sub) {
      panel += link(sub.href, sub.name, null, true);
    });

    var iconHtml = cat.icon
      ? '<span class="m-link-icon-wrap" aria-hidden="true">' +
        '<img src="' +
        cat.icon +
        '" alt="" class="m-link-icon" width="24" height="24" />' +
        "</span>"
      : "";

    return (
      '<details class="m-subsection"' +
      (open ? " open" : "") +
      ">" +
      '<summary class="m-subsection-trigger' +
      (summaryActive ? " on" : "") +
      '">' +
      '<span class="m-subsection-label">' +
      iconHtml +
      '<span class="m-link-label">' +
      cat.title +
      "</span>" +
      "</span>" +
      chev() +
      "</summary>" +
      '<div class="m-subsection-panel">' +
      panel +
      "</div>" +
      "</details>"
    );
  }

  function link(href, label, icon, nested) {
    var classes = [];
    if (activeHref && normalizePath(href) === normalizePath(activeHref)) {
      classes.push("on");
    }
    if (nested) classes.push("m-link--sub");
    var classAttr = classes.length ? ' class="' + classes.join(" ") + '"' : "";

    var content = icon
      ? '<span class="m-link-start">' +
        '<span class="m-link-icon-wrap" aria-hidden="true">' +
        '<img src="' +
        icon +
        '" alt="" class="m-link-icon" width="24" height="24" />' +
        "</span>" +
        '<span class="m-link-label">' +
        label +
        "</span>" +
        "</span>"
      : '<span class="m-link-label">' + label + "</span>";

    return '<a href="' + href + '"' + classAttr + ">" + content + "</a>";
  }

  function sledLink(href, label, activeFromDom) {
    var active =
      activeHref && normalizePath(href) === normalizePath(activeHref);
    if (!activeHref && activeFromDom) active = true;

    return (
      '<a href="' +
      href +
      '"' +
      (active ? ' class="on"' : "") +
      '><span class="m-link-label">' +
      label +
      "</span></a>"
    );
  }

  function collectServiceHrefs(servicesMega) {
    var hrefs = ["/services/"];
    Object.keys(servicesMega).forEach(function (key) {
      var cat = servicesMega[key];
      if (!cat) return;
      if (cat.landingHref) hrefs.push(cat.landingHref);
      (cat.subs || []).forEach(function (sub) {
        if (sub && sub.href) hrefs.push(sub.href);
      });
    });
    return hrefs;
  }

  function collectIndustryHrefs(industriesMega) {
    var hrefs = ["/industries/"];
    Object.keys(industriesMega).forEach(function (key) {
      var cat = industriesMega[key];
      if (cat && cat.landingHref) hrefs.push(cat.landingHref);
    });
    return hrefs;
  }

  function buildServicesPanel(servicesMega) {
    // Keep `/services/` in hrefs so the Services section expands on the hub,
    // but don't render the "All services" row in the drawer.
    var panel = "";
    var hrefs = ["/services/"];

    Object.keys(servicesMega).forEach(function (key) {
      var cat = servicesMega[key];
      if (!cat) return;

      var subs = (cat.subs || []).filter(function (sub) {
        if (!sub || !sub.href) return false;
        if (
          cat.landingHref &&
          normalizePath(sub.href) === normalizePath(cat.landingHref)
        ) {
          return false;
        }
        return true;
      });

      if (cat.landingHref) hrefs.push(cat.landingHref);
      subs.forEach(function (sub) {
        hrefs.push(sub.href);
      });

      if (subs.length) {
        panel += buildSubSection(cat, subs);
      } else if (cat.landingHref) {
        panel += link(cat.landingHref, cat.title, cat.icon);
      }
    });

    return { panel: panel, hrefs: hrefs };
  }

  function buildIndustriesPanel(industriesMega) {
    // Keep `/industries/` in hrefs so the Industries section expands on the hub,
    // but don't render the "All industries" row in the drawer.
    var panel = "";
    var hrefs = ["/industries/"];

    Object.keys(industriesMega).forEach(function (key) {
      var cat = industriesMega[key];
      if (!cat || !cat.landingHref) return;
      hrefs.push(cat.landingHref);
      panel += link(cat.landingHref, cat.title, cat.icon);
    });

    return { panel: panel, hrefs: hrefs };
  }

  var sledItems = [];
  try {
    var sledEl = document.getElementById("sled-subnav");
    if (sledEl && sledEl.textContent) {
      sledItems = JSON.parse(sledEl.textContent);
    }
  } catch (_) {
    sledItems = [];
  }

  sledItems.forEach(function (item) {
    if (item && item.href) trackHref(item.href);
  });

  var primaryItems = [];
  header.querySelectorAll(".primary-nav > a.nav-link").forEach(function (el) {
    var href = el.getAttribute("href");
    if (href && href !== "#") {
      primaryItems.push({
        href: href,
        label: el.textContent.replace(/\s+/g, " ").trim(),
      });
      trackHref(href);
    }
  });

  var servicesMega = null;
  try {
    var servicesEl = document.getElementById("services-mega-nav");
    if (servicesEl && servicesEl.textContent) {
      servicesMega = JSON.parse(servicesEl.textContent);
    }
  } catch (_) {
    servicesMega = null;
  }

  var industriesMega = null;
  try {
    var industriesEl = document.getElementById("industries-mega-nav");
    if (industriesEl && industriesEl.textContent) {
      industriesMega = JSON.parse(industriesEl.textContent);
    }
  } catch (_) {
    industriesMega = null;
  }

  if (servicesMega) {
    collectServiceHrefs(servicesMega).forEach(trackHref);
  }
  if (industriesMega) {
    collectIndustryHrefs(industriesMega).forEach(trackHref);
  }

  activeHref = resolveActiveHref(allHrefs);

  var html = "";

  if (sledItems.length) {
    var sledPanel = "";
    sledItems.forEach(function (item) {
      sledPanel += sledLink(item.href, item.label, false);
    });
    var sledHrefs = sledItems.map(function (item) {
      return item.href;
    });
    html += buildSection("sled", "SLED Partnerships", sledPanel, sledHrefs);
  }

  primaryItems.forEach(function (item) {
    html += link(item.href, item.label);
  });

  if (servicesMega) {
    var servicesData = buildServicesPanel(servicesMega);
    html += buildSection(
      "services",
      "Services",
      servicesData.panel,
      servicesData.hrefs,
    );
  }

  if (industriesMega) {
    var industriesData = buildIndustriesPanel(industriesMega);
    html += buildSection(
      "industries",
      "Industries",
      industriesData.panel,
      industriesData.hrefs,
    );
  }

  if (!servicesMega && !industriesMega) {
    header
      .querySelectorAll(".primary-nav .nav-item > .nav-link")
      .forEach(function (el) {
        html += buildSection(
          "other",
          el.textContent.replace(/\s+/g, " ").trim(),
          '<span class="m-section-empty">Browse on desktop</span>',
          [],
        );
      });
  }

  var footerHtml =
    '<a class="us-pill us-pill--drawer" href="/us-sled/">' +
    '<span class="sled-dot" aria-hidden="true"></span>' +
    "SLED Partnerships</a>";

  var toggle = document.createElement("button");
  toggle.className = "m-nav-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Open menu");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = "<span></span><span></span><span></span>";
  nav.appendChild(toggle);

  var backdrop = document.createElement("div");
  backdrop.className = "m-nav-backdrop";
  backdrop.setAttribute("aria-hidden", "true");

  var drawer = document.createElement("nav");
  drawer.className = "m-nav-drawer";
  drawer.setAttribute("aria-label", "Mobile");
  drawer.innerHTML =
    '<div class="m-nav-drawer-scroll">' +
    html +
    "</div>" +
    '<div class="m-nav-drawer-footer">' +
    footerHtml +
    "</div>";

  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  function close() {
    document.body.classList.remove("m-nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function open() {
    document.body.classList.add("m-nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  toggle.addEventListener("click", function () {
    if (document.body.classList.contains("m-nav-open")) close();
    else open();
  });
  backdrop.addEventListener("click", close);
  drawer.addEventListener("click", function (e) {
    if (e.target.closest("a")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) close();
  });
})();
