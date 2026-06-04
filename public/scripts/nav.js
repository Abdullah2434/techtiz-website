// Shared header: mega-menu open/close + category panel swap (legacy TwoColumnDropdown).

(function () {
  const items = document.querySelectorAll('.nav-item');
  if (!items.length) return;

  function resetMegaAnimation(mega) {
    if (!mega) return;
    mega.style.animation = 'none';
    void mega.offsetHeight;
    mega.style.removeProperty('animation');
  }

  function isNavOpen(item) {
    return item.classList.contains('open') || item.dataset.open === 'true';
  }

  function closeItem(item, animate) {
    const mega = item.querySelector('.mega');
    const btn = item.querySelector('.nav-link');
    const wasOpen = isNavOpen(item);

    item.classList.remove('open');
    item.dataset.open = 'false';
    if (btn) btn.setAttribute('aria-expanded', 'false');

    if (!mega) {
      item.classList.remove('is-closing');
      return;
    }

    if (!wasOpen) {
      item.classList.remove('is-closing');
      resetMegaAnimation(mega);
      return;
    }

    if (!animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      item.classList.remove('is-closing');
      resetMegaAnimation(mega);
      return;
    }

    item.classList.add('is-closing');
    mega.style.animation = 'none';
    void mega.offsetHeight;
    mega.style.removeProperty('animation');

    const onEnd = (e) => {
      if (e.target !== mega || e.animationName !== 'mega-menu-close') return;
      item.classList.remove('is-closing');
      mega.removeEventListener('animationend', onEnd);
    };
    mega.addEventListener('animationend', onEnd);
  }

  function openItem(el) {
    // Instantly hide any other open menu — avoid playing close animation on a closed panel
    // (that flashes the wrong mega at opacity 1 before fading out).
    items.forEach((i) => {
      if (i !== el) closeItem(i, false);
    });

    const mega = el.querySelector('.mega');
    const btn = el.querySelector('.nav-link');

    if (isNavOpen(el)) return;

    el.classList.remove('is-closing');
    resetMegaAnimation(mega);

    // One frame without .open so the open keyframe always runs.
    el.classList.remove('open');
    el.dataset.open = 'false';
    if (btn) btn.setAttribute('aria-expanded', 'false');

    requestAnimationFrame(() => {
      el.classList.add('open');
      el.dataset.open = 'true';
      if (btn) btn.setAttribute('aria-expanded', 'true');
    });
  }

  function closeAll() {
    items.forEach((i) => closeItem(i, isNavOpen(i)));
  }

  function toggleItem(item) {
    if (item.classList.contains('open')) closeAll();
    else openItem(item);
  }

  // Legacy Header.tsx: click to toggle (no hover); click outside to close.
  items.forEach((item) => {
    const btn = item.querySelector('.nav-link');
    const megaKey = item.getAttribute('data-mega') || '';
    if (btn) {
      btn.setAttribute('data-dropdown-button', megaKey);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(item);
      });
    }
  });

  document.addEventListener('mousedown', (e) => {
    const target = e.target;
    if (target.closest('.nav-item')) return;
    closeAll();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

  let servicesMega = null;
  let industriesMega = null;
  try {
    const servicesEl = document.getElementById('services-mega-nav');
    if (servicesEl && servicesEl.textContent) servicesMega = JSON.parse(servicesEl.textContent);
    const industriesEl = document.getElementById('industries-mega-nav');
    if (industriesEl && industriesEl.textContent) industriesMega = JSON.parse(industriesEl.textContent);
  } catch (_) {
    servicesMega = null;
    industriesMega = null;
  }

  const industriesFallback = {
    healthcare: {
      title: 'Healthcare',
      desc: 'Techtiz streamlines admin tasks for healthcare teams, enhancing efficiency and safety.',
      icon: '/images/healthcare.png',
      subs: [
        { name: 'AI Appointment Management', href: '/' },
        { name: 'AI-Powered Communication', href: '/' },
        { name: 'Reporting Optimization', href: '/' },
      ],
    },
    marketing: {
      title: 'Digital Marketing',
      desc: 'Growth platforms, attribution, and content systems for performance teams.',
      icon: '/images/ecommerce-2.png',
      subs: [
        { name: 'Attribution', href: '/' },
        { name: 'Campaign analytics', href: '/' },
        { name: 'Content systems', href: '/' },
      ],
    },
    realestate: {
      title: 'Real Estate',
      desc: 'Listings, CRM, and transaction platforms for brokerages and proptech.',
      icon: '/images/fintech.png',
      subs: [
        { name: 'Listings platforms', href: '/' },
        { name: 'CRM', href: '/' },
        { name: 'Deal rooms', href: '/' },
      ],
    },
    ecommerce: {
      title: 'E-commerce',
      desc: 'Shopify, headless storefronts, OMS integrations, and conversion ops.',
      icon: '/images/ecommerce-2.png',
      subs: [
        { name: 'Shopify Plus', href: '/' },
        { name: 'Headless', href: '/' },
        { name: 'OMS integrations', href: '/' },
      ],
    },
    logistics: {
      title: 'Logistics & Supply Chain',
      desc: 'Routing, WMS, and visibility platforms for operators and 3PLs.',
      icon: '/images/logistics.png',
      subs: [
        { name: 'Routing', href: '/' },
        { name: 'WMS', href: '/' },
        { name: 'Visibility', href: '/' },
      ],
    },
    education: {
      title: 'Education',
      desc: 'LMS, LXP, and assessment tools for institutions and edtech.',
      icon: '/images/education.png',
      subs: [
        { name: 'LMS', href: '/' },
        { name: 'LXP', href: '/' },
        { name: 'Assessment', href: '/' },
      ],
    },
  };

  const data = {
    services: servicesMega || {},
    industries: industriesMega || industriesFallback,
  };

  const path = window.location.pathname;

  function renderServicesPanel(d, featBlock, subBlock) {
    const titleEl = featBlock.querySelector('[data-feat-title]');
    const descEl = featBlock.querySelector('[data-feat-desc]');
    const iconWrap = featBlock.querySelector('[data-feat-icon]');
    if (titleEl) titleEl.textContent = d.title;
    if (descEl) descEl.textContent = d.desc;
    if (iconWrap && d.icon) {
      iconWrap.innerHTML =
        '<img src="' +
        d.icon +
        '" alt="" width="40" height="40" class="size-10 object-contain" data-feat-icon-img />';
    }
    if (!subBlock || !d.subs) return;
    subBlock.innerHTML = d.subs
      .map((s) => {
        const href = s.href || '/';
        const on = path === href || path.startsWith(href);
        return (
          '<a href="' +
          href +
          '" class="mega-service-link' +
          (on ? ' is-on' : '') +
          '">' +
          s.name +
          '</a>'
        );
      })
      .join('');
  }

  function renderIndustriesPanel(d, featureRoot) {
    const panelLink = featureRoot.querySelector('[data-industry-panel]');
    const titleEl = featureRoot.querySelector('[data-feat-title]');
    const descEl = featureRoot.querySelector('[data-feat-desc]');
    const iconWrap = featureRoot.querySelector('[data-feat-icon]');
    const subBlock = featureRoot.querySelector('[data-sublinks="industries"]');
    if (panelLink && d.landingHref) panelLink.href = d.landingHref;
    if (titleEl) titleEl.textContent = d.title;
    if (descEl) descEl.textContent = d.desc;
    if (iconWrap && d.icon) {
      iconWrap.innerHTML =
        '<img src="' +
        d.icon +
        '" alt="" width="40" height="40" class="size-10 object-contain" data-feat-icon-img />';
    }
    if (!subBlock || !d.subs) return;
    subBlock.className = 'mega-sublinks flex flex-col gap-3';
    subBlock.innerHTML = d.subs
      .map(
        (s) =>
          '<div class="flex flex-col gap-2 px-4 py-3">' +
          '<h3 class="mega-industry-sub-title">' +
          s.name +
          '</h3>' +
          (s.desc ? '<p class="mega-industry-sub-desc">' + s.desc + '</p>' : '') +
          '</div>',
      )
      .join('');
  }

  function swapMegaPanel(panelEl, renderFn) {
    if (!panelEl) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      renderFn();
      return;
    }

    const runEnter = () => {
      renderFn();
      panelEl.classList.remove('mega-panel-exit');
      panelEl.style.animation = 'none';
      void panelEl.offsetHeight;
      panelEl.style.removeProperty('animation');
      panelEl.classList.add('mega-panel-enter');

      const onEnterEnd = (e) => {
        if (e.target !== panelEl || e.animationName !== 'mega-panel-enter') return;
        panelEl.classList.remove('mega-panel-enter');
        panelEl.removeEventListener('animationend', onEnterEnd);
      };
      panelEl.addEventListener('animationend', onEnterEnd);
    };

    panelEl.classList.remove('mega-panel-enter', 'mega-panel-exit');
    panelEl.style.animation = 'none';
    void panelEl.offsetHeight;
    panelEl.style.removeProperty('animation');
    panelEl.classList.add('mega-panel-exit');

    const onExitEnd = (e) => {
      if (e.target !== panelEl || e.animationName !== 'mega-panel-exit') return;
      panelEl.removeEventListener('animationend', onExitEnd);
      runEnter();
    };
    panelEl.addEventListener('animationend', onExitEnd);
  }

  document.querySelectorAll('[data-list]').forEach((list) => {
    const key = list.dataset.list;
    const featBlock = document.querySelector('[data-feature="' + key + '"]');
    const subBlock = document.querySelector('[data-sublinks="' + key + '"]');
    list.querySelectorAll('.mega-item').forEach((item) => {
      const activate = () => {
        list.querySelectorAll('.mega-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        const k = item.dataset.key;
        const d = data[key] && data[key][k];
        if (!d || !featBlock) return;
        if (key === 'services' && !subBlock) return;

        swapMegaPanel(featBlock, () => {
          if (key === 'services') renderServicesPanel(d, featBlock, subBlock);
          else renderIndustriesPanel(d, featBlock);
        });
      };
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        activate();
      });
    });
  });

  const spyLinks = document.querySelectorAll('.sub-links [data-spy-id]');
  const spyMap = new Map();
  spyLinks.forEach((a) => {
    const id = a.dataset.spyId;
    const el = document.getElementById(id);
    if (el) spyMap.set(el, a);
    a.addEventListener('click', (e) => {
      if (a.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.getElementById(a.getAttribute('href').slice(1));
        if (target) {
          const y = target.getBoundingClientRect().top + window.scrollY - 130;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }
    });
  });

  if ('IntersectionObserver' in window && spyMap.size) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            spyLinks.forEach((l) => l.classList.remove('on'));
            const link = spyMap.get(entry.target);
            if (link) link.classList.add('on');
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );
    spyMap.forEach((_, el) => io.observe(el));
  }
})();
