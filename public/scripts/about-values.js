// About values cards — hover/click expand + video playback (legacy ChallengesAndSolutions / ValueCard).

(function () {
  const root = document.querySelector('[data-about-values]');
  if (!root) return;

  const EXPAND_MS = 500;
  const MOBILE_MQ = window.matchMedia('(max-width: 768px)');

  const cards = Array.from(root.querySelectorAll('[data-about-value-card]'));
  const videos = cards.map((card) => card.querySelector('[data-about-value-video]'));

  let activeIdx = null;
  let showDescTimer = null;
  let loadingIdx = null;

  function isMobile() {
    return MOBILE_MQ.matches;
  }

  function clearShowDescTimer() {
    if (showDescTimer) {
      clearTimeout(showDescTimer);
      showDescTimer = null;
    }
  }

  function setLoading(idx, on) {
    const card = cards[idx];
    if (!card) return;
    const wrap = card.querySelector('[data-about-value-video-wrap]');
    const spinner = card.querySelector('[data-about-value-spinner]');
    if (wrap && spinner) {
      spinner.classList.toggle('is-loading', on);
    }
    loadingIdx = on ? idx : null;
  }

  async function playActiveVideo(idx) {
    videos.forEach((video, i) => {
      if (!video) return;
      video.pause();
      if (i !== idx) video.currentTime = 0;
    });

    if (idx === null) return;

    const video = videos[idx];
    if (!video) return;

    setLoading(idx, true);
    try {
      if (video.readyState < 2) {
        video.load();
        await new Promise((resolve, reject) => {
          const onCanPlay = () => {
            video.removeEventListener('canplay', onCanPlay);
            video.removeEventListener('error', onError);
            resolve();
          };
          const onError = () => {
            video.removeEventListener('canplay', onCanPlay);
            video.removeEventListener('error', onError);
            reject(new Error('video error'));
          };
          video.addEventListener('canplay', onCanPlay);
          video.addEventListener('error', onError);
        });
      }
      video.currentTime = 0;
      await video.play();
    } catch (_) {
      /* autoplay blocked or missing file */
    } finally {
      setLoading(idx, false);
    }
  }

  function applyActive(idx) {
    cards.forEach((card, i) => {
      const wrap = card.querySelector('[data-about-value-video-wrap]');
      const isActive = i === idx;
      card.classList.toggle('is-active', isActive);
      card.classList.remove('is-show-description');
      if (wrap) wrap.classList.toggle('is-active', isActive);
    });

    clearShowDescTimer();

    if (idx === null) {
      playActiveVideo(null);
      return;
    }

    showDescTimer = window.setTimeout(() => {
      cards[idx]?.classList.add('is-show-description');
    }, EXPAND_MS);

    playActiveVideo(idx);
  }

  function setActive(idx) {
    if (activeIdx === idx) {
      if (isMobile()) {
        activeIdx = null;
        applyActive(null);
      }
      return;
    }
    activeIdx = idx;
    applyActive(idx);
  }

  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      if (!isMobile()) return;
      e.preventDefault();
      setActive(activeIdx === idx ? null : idx);
    });

    card.addEventListener('mouseenter', () => {
      if (isMobile()) return;
      setActive(idx);
    });
  });

  root.addEventListener('mouseleave', () => {
    if (isMobile()) return;
    activeIdx = null;
    applyActive(null);
  });

  MOBILE_MQ.addEventListener('change', () => {
    activeIdx = null;
    applyActive(null);
  });

  window.addEventListener('pagehide', () => {
    videos.forEach((video) => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    });
  });
})();
