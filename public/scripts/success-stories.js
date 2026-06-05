(() => {
  const SCROLL_EPSILON = 2;

  const getScrollStep = (track) => {
    const card = track.querySelector('.cs-testimonial-card');
    if (!card) return 400;

    const flexRow = track.querySelector('.flex');
    const gap = flexRow ? parseFloat(getComputedStyle(flexRow).columnGap) || 24 : 24;

    return card.offsetWidth + gap;
  };

  const updateButtons = (track, section) => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const atStart = track.scrollLeft <= SCROLL_EPSILON;
    const atEnd = track.scrollLeft >= maxScroll - SCROLL_EPSILON;

    section.querySelectorAll('[data-cs-scroll]').forEach((btn) => {
      const dir = btn.getAttribute('data-cs-scroll');
      btn.disabled = dir === 'left' ? atStart : atEnd;
    });
  };

  const initCarousel = (root) => {
    const track = root.querySelector('[data-cs-carousel-track]');
    if (!track) return;

    const section = root.closest('section') ?? document;

    const scrollByDir = (dir) => {
      const delta = dir === 'left' ? -getScrollStep(track) : getScrollStep(track);
      track.scrollTo({ left: track.scrollLeft + delta, behavior: 'smooth' });
    };

    section.querySelectorAll('[data-cs-scroll]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        scrollByDir(btn.getAttribute('data-cs-scroll'));
      });
    });

    track.addEventListener('scroll', () => updateButtons(track, section), { passive: true });
    window.addEventListener('resize', () => updateButtons(track, section), { passive: true });
    updateButtons(track, section);
  };

  document.querySelectorAll('[data-cs-carousel]').forEach(initCarousel);
})();
