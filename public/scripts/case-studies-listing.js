(() => {
  const cfg = window.__CS_LISTING__;
  if (!cfg) return;

  const {
    portfolioLite,
    itemsPerPage,
    maxVisiblePages,
    initialTab,
    initialPage,
  } = cfg;
  const root = document.querySelector("[data-cs-listing]");
  if (!root || !Array.isArray(portfolioLite)) return;

  const grid = root.querySelector("[data-cs-grid]");
  const panelInner = root.querySelector("[data-cs-panel-inner]");
  const tabsRoot = root.querySelector("[data-cs-tabs]");
  const paginationWrap = root.querySelector("[data-cs-pagination]");
  const paginationNav = root.querySelector("[data-cs-pagination-nav]");
  const rangeEl = root.querySelector("[data-cs-range]");
  const panel = root.querySelector("[data-cs-panel]");

  const WORD_LIMIT = 20;
  const DISPLAY_WORDS = 18;

  const isVideo = (src) => /\.(mp4|webm|mov|avi)$/i.test(src);

  const truncate = (overview) => {
    const words = overview.split(/\s+/);
    if (words.length <= WORD_LIMIT) return overview;
    return `${words.slice(0, DISPLAY_WORDS).join(" ")}...`;
  };

  const getVideoId = (study) => {
    if (study.videoId) return study.videoId;
    const match = study.reviewVideoUrl?.match(/embed\/([^?&/]+)/);
    return match?.[1] ?? null;
  };

  const arrowIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 shrink-0" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';

  const playIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>';

  const filterByTab = (tab) =>
    tab === "All"
      ? portfolioLite
      : portfolioLite.filter((s) => s.category === tab);

  const getPageNumbers = (current, total) => {
    const pages = [];
    if (total <= maxVisiblePages) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }
    if (current <= 3) {
      for (let i = 1; i <= 4; i++) pages.push(i);
      pages.push("...", total);
      return pages;
    }
    if (current >= total - 2) {
      pages.push(1, "...");
      for (let i = total - 3; i <= total; i++) pages.push(i);
      return pages;
    }
    pages.push(1, "...", current - 1, current, current + 1, "...", total);
    return pages;
  };

  const renderCard = (study) => {
    const href = `/case-studies/${study.slug}/`;
    const overview = truncate(study.overview);
    const videoId = getVideoId(study);
    const media = isVideo(study.image)
      ? `<video src="${study.image}" autoplay muted loop playsinline class="h-[220px] w-full rounded-lg object-cover"></video>`
      : `<img src="${study.image}" alt="" width="700" height="220" class="h-[220px] w-full rounded-lg object-cover" loading="lazy" />`;

    const founderBlock = study.founder
      ? `<div class="flex items-center gap-3">
          <img src="${study.founder.image}" alt="${study.founder.name}" width="40" height="40" class="size-10 rounded-full object-cover" />
          <div>
            <p class="mb-1 text-[11px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0E0E0E]">${study.founder.name}</p>
            <p class="text-[8px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0E0E0E]">${study.founder.role}</p>
          </div>
          ${
            videoId
              ? `<button type="button" class="ml-1 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#0E0E0E]/20 transition-colors hover:bg-[#0E0E0E]/40" data-video-open="${videoId}" aria-label="Play ${study.title} video">${playIcon}</button>`
              : ""
          }
        </div>`
      : "<div></div>";

    return `<article class="cs-card group flex flex-col">
      <a href="${href}" class="block flex-1">
        <div class="min-h-[220px] max-w-[700px]" data-aos="fade-up" data-aos-delay="100">${media}</div>
        <div class="flex max-w-[700px] flex-col gap-10 p-6" data-aos="fade-up" data-aos-delay="100">
          <div class="max-w-[620px] gap-2">
            <h3 class="mb-3 line-clamp-2 text-[30px] font-medium leading-[1.2] tracking-[-0.64px] text-[#1E1E1E] md:text-[32px]">${study.title}</h3>
            <p class="text-left text-base font-normal leading-[1.2] tracking-[-0.32px] text-[#1E1E1E]/60">${overview}</p>
          </div>
        </div>
      </a>
      <div class="mt-auto flex max-w-[700px] flex-wrap items-center justify-between gap-4 px-6 pb-6">
        ${founderBlock}
        <a href="${href}" class="inline-flex items-center gap-3 text-base font-semibold uppercase leading-[1.2] tracking-[-0.02em] text-[#1E1E1E] transition-all group-hover:gap-4">
          SEE DETAILS
          ${arrowIcon}
        </a>
      </div>
    </article>`;
  };

  const updateUrl = (tab, page) => {
    const params = new URLSearchParams();
    if (tab !== "All") params.set("tab", tab);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    const next = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
    window.history.replaceState({}, "", next);
  };

  const renderPagination = (current, total, filteredLen, start, end) => {
    if (!paginationWrap || !paginationNav || !rangeEl) return;
    if (total <= 1) {
      paginationWrap.hidden = true;
      return;
    }
    paginationWrap.hidden = false;
    rangeEl.textContent = `Showing ${filteredLen === 0 ? 0 : start + 1} to ${end} of ${filteredLen} case studies`;

    const btnClass =
      "flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border transition-all duration-300";
    const pages = getPageNumbers(current, total);

    let html = `<button type="button" class="${btnClass} ${current === 1 ? "border-gray-200 text-gray-400" : "border-cyan text-cyan hover:bg-cyan hover:text-white"}" data-cs-page="${current - 1}" ${current === 1 ? "disabled" : ""} aria-label="Previous page">‹</button><div class="flex items-center gap-1">`;

    pages.forEach((p) => {
      if (p === "...") {
        html += '<span class="px-2 text-gray-500">...</span>';
      } else {
        html += `<button type="button" class="${btnClass} ${current === p ? "bg-cyan border-cyan text-white" : "border-gray-200 text-gray-600"}" data-cs-page="${p}" aria-label="Page ${p}">${p}</button>`;
      }
    });

    html += `</div><button type="button" class="${btnClass} ${current === total ? "border-gray-200 text-gray-400" : "border-cyan text-cyan hover:bg-cyan hover:text-white"}" data-cs-page="${current + 1}" ${current === total ? "disabled" : ""} aria-label="Next page">›</button>`;
    paginationNav.innerHTML = html;
  };

  let activeTab = initialTab ?? "All";
  let currentPage = initialPage ?? 1;

  const render = () => {
    const filtered = filterByTab(activeTab);
    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    currentPage = Math.min(Math.max(1, currentPage), totalPages);
    const start = (currentPage - 1) * itemsPerPage;
    const items = filtered.slice(start, start + itemsPerPage);
    const end = Math.min(start + itemsPerPage, filtered.length);

    if (grid) grid.innerHTML = items.map(renderCard).join("");
    if (panel)
      panel.id = `tabpanel-${activeTab.toLowerCase().replace(/\s+/g, "-")}`;

    tabsRoot?.querySelectorAll("[data-cs-tab]").forEach((btn) => {
      const name = btn.getAttribute("data-cs-tab");
      const selected = name === activeTab;
      btn.setAttribute("aria-selected", String(selected));
      btn.classList.toggle("cs-tab-active", selected);
      btn.classList.toggle("cs-tab-inactive", !selected);
    });

    renderPagination(currentPage, totalPages, filtered.length, start, end);
    updateUrl(activeTab, currentPage);

    if (panelInner) {
      panelInner.classList.remove("cs-panel-enter");
      void panelInner.offsetWidth;
      panelInner.classList.add("cs-panel-enter");
    }
    if (window.AOS) window.AOS.refresh();
  };

  tabsRoot?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cs-tab]");
    if (!btn) return;
    const nextTab = btn.getAttribute("data-cs-tab");
    if (nextTab === activeTab) return;
    activeTab = nextTab;
    currentPage = 1;
    if (root) {
      root.dataset.csLoading = "true";
      const h = root.querySelector("[data-cs-panel]")?.offsetHeight;
      if (h) root.style.minHeight = `${h}px`;
    }
    render();
    if (root) {
      window.setTimeout(() => {
        root.dataset.csLoading = "";
        root.style.minHeight = "";
      }, 120);
    }
    root.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  paginationNav?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cs-page]");
    if (!btn || btn.disabled) return;
    const next = Number(btn.getAttribute("data-cs-page"));
    if (!Number.isFinite(next)) return;
    const filtered = filterByTab(activeTab);
    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    if (next < 1 || next > totalPages) return;
    currentPage = next;
    render();
    root.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  render();
})();
