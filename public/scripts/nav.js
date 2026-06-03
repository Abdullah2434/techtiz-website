// Shared header behavior for SLED pages: mega-menu + subnav smooth scroll/spy.

(function(){
  // -------- Mega-menu hover / click --------
  const items = document.querySelectorAll('.nav-item');
  if(!items.length) return;
  let openTimer = null, closeTimer = null;
  function openItem(el){
    items.forEach(i => {
      if(i !== el) i.classList.remove('open');
      i.dataset.open = i === el ? 'true' : 'false';
    });
    el.classList.add('open');
    el.dataset.open = 'true';
    const btn = el.querySelector('.nav-link');
    if(btn) btn.setAttribute('aria-expanded','true');
  }
  function closeAll(){
    items.forEach(i => {
      i.classList.remove('open');
      i.dataset.open = 'false';
      const btn = i.querySelector('.nav-link');
      if(btn) btn.setAttribute('aria-expanded','false');
    });
  }
  items.forEach(item => {
    item.addEventListener('mouseenter', () => { clearTimeout(closeTimer); openTimer = setTimeout(() => openItem(item), 80); });
    item.addEventListener('mouseleave', () => { clearTimeout(openTimer); closeTimer = setTimeout(closeAll, 180); });
    const btn = item.querySelector('.nav-link');
    if(btn){
      btn.addEventListener('click', e => {
        e.preventDefault();
        if(item.classList.contains('open')) closeAll(); else openItem(item);
      });
    }
  });
  document.addEventListener('click', e => { if(!e.target.closest('.nav-item')) closeAll(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeAll(); });

  // -------- Mega-menu hovered item swap --------
  const SVG_OPEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="size-[30px]">';
  const ICONS = {
    development: SVG_OPEN + '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    ai: SVG_OPEN + '<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9z"></path><path d="M19 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"></path><path d="M5 16l.5 1.5L7 18l-1.5.5L5 20l-.5-1.5L3 18l1.5-.5z"></path></svg>',
    automation: SVG_OPEN + '<circle cx="12" cy="12" r="2.6"></circle><path d="M12 2v3"></path><path d="M12 19v3"></path><path d="M2 12h3"></path><path d="M19 12h3"></path><path d="M4.9 4.9l2.1 2.1"></path><path d="M17 17l2.1 2.1"></path><path d="M4.9 19.1L7 17"></path><path d="M17 7l2.1-2.1"></path></svg>',
    transformation: SVG_OPEN + '<path d="M21 12a9 9 0 0 1-15.36 6.36L3 21"></path><path d="M3 12a9 9 0 0 1 15.36-6.36L21 3"></path><polyline points="21 3 21 9 15 9"></polyline><polyline points="3 21 3 15 9 15"></polyline></svg>',
    ux: SVG_OPEN + '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    healthcare: SVG_OPEN + '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
    marketing: SVG_OPEN + '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
    realestate: SVG_OPEN + '<path d="M3 10.5L12 3l9 7.5V21H3z"></path><path d="M9 21v-7h6v7"></path></svg>',
    ecommerce: SVG_OPEN + '<circle cx="9" cy="21" r="1.4"></circle><circle cx="19" cy="21" r="1.4"></circle><path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h9.2a2 2 0 0 0 2-1.6L22 7H6.5"></path></svg>',
    logistics: SVG_OPEN + '<rect x="1.5" y="6" width="13" height="10"></rect><path d="M14.5 9h4l3 3v4h-7z"></path><circle cx="6" cy="18.5" r="2"></circle><circle cx="18" cy="18.5" r="2"></circle></svg>',
    education: SVG_OPEN + '<path d="M22 10L12 5 2 10l10 5 10-5z"></path><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"></path><path d="M22 10v6"></path></svg>',
  };
  const data = {
    services: {
      development: { title: 'Development', desc: 'Build robust, scalable digital products designed to grow with your business.', subs: ['Custom Software','Mobile Apps','Low code / No-code Dev','Vibe code Dev'] },
      ai: { title: 'AI & Intelligence', desc: 'LLM systems, RAG, agents, and ML pipelines that ship and stay in production.', subs: ['Agent platforms','RAG pipelines','Fine-tuning','Evals & observability'] },
      automation: { title: 'Automation & AI Solutions', desc: 'Internal tools and workflows that pay for themselves.', subs: ['RPA','Workflow engines','Integrations','Ops automation'] },
      transformation: { title: 'Digital Transformation', desc: 'Modernize legacy stacks without halting the business.', subs: ['Strategy','Migrations','Data platforms','Change management'] },
      ux: { title: 'UX Design / Enablement', desc: 'Research-backed interfaces that feel inevitable.', subs: ['User research','Design systems','Prototyping','Brand'] },
    },
    industries: {
      healthcare: { title: 'Healthcare', desc: 'Techtiz streamlines admin tasks for healthcare teams, enhancing efficiency and safety.', subs: ['AI Appointment Management','AI-Powered Communication','Reporting Optimization','Patient Records'] },
      marketing: { title: 'Digital Marketing', desc: 'Growth platforms, attribution, and content systems for performance teams.', subs: ['Attribution','Campaign analytics','Content systems','Lifecycle ops'] },
      realestate: { title: 'Real Estate', desc: 'Listings, CRM, and transaction platforms for brokerages and proptech.', subs: ['Listings platforms','CRM','Deal rooms','Tenant portals'] },
      ecommerce: { title: 'E-commerce', desc: 'Shopify, headless storefronts, OMS integrations, and conversion ops.', subs: ['Shopify Plus','Headless','OMS integrations','Conversion'] },
      logistics: { title: 'Logistics & Supply Chain', desc: 'Routing, WMS, and visibility platforms for operators and 3PLs.', subs: ['Routing','WMS','Visibility','Carrier integrations'] },
      education: { title: 'Education', desc: 'LMS, LXP, and assessment tools for institutions and edtech.', subs: ['LMS','LXP','Assessment','Student platforms'] },
    }
  };
  document.querySelectorAll('[data-list]').forEach(list => {
    const key = list.dataset.list;
    const featBlock = document.querySelector('[data-feature="'+key+'"]');
    const subBlock = document.querySelector('[data-sublinks="'+key+'"]');
    list.querySelectorAll('.mega-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        list.querySelectorAll('.mega-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const k = item.dataset.key;
        const d = data[key][k];
        if(!d || !featBlock || !subBlock) return;
        featBlock.querySelector('[data-feat-title]').textContent = d.title;
        featBlock.querySelector('[data-feat-desc]').textContent = d.desc;
        const iconEl = featBlock.querySelector('[data-feat-icon]');
        if(iconEl && ICONS[k]) iconEl.innerHTML = ICONS[k];
        // Preserve styling/spacing by keeping the same sublink classes.
        subBlock.innerHTML = d.subs
          .map(
            (s) =>
              '<a href="/" class="rounded-md px-3 py-2 text-[13.5px] font-medium text-muted transition-[background,color] duration-[180ms] ease-out hover:bg-seasalt hover:text-yale">' +
              s +
              '</a>'
          )
          .join('');
      });
    });
  });

  // -------- Subnav smooth-scroll + optional scroll-spy --------
  const spyLinks = document.querySelectorAll('.sub-links [data-spy-id]');
  const spyMap = new Map();
  spyLinks.forEach(a => {
    const id = a.dataset.spyId;
    const el = document.getElementById(id);
    if(el) spyMap.set(el, a);
    a.addEventListener('click', e => {
      if(a.getAttribute('href').startsWith('#')){
        e.preventDefault();
        const target = document.getElementById(a.getAttribute('href').slice(1));
        if(target){
          const y = target.getBoundingClientRect().top + window.scrollY - 130;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }
    });
  });
  if('IntersectionObserver' in window && spyMap.size){
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          spyLinks.forEach(l => l.classList.remove('on'));
          const link = spyMap.get(entry.target);
          if(link) link.classList.add('on');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    spyMap.forEach((_, el) => io.observe(el));
  }
})();
