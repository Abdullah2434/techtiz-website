(function () {
  var containers = document.querySelectorAll('[data-video-container][data-video-src]');
  if (!containers.length) return;

  containers.forEach(function (container) {
    var src = container.getAttribute('data-video-src');
    var video = container.querySelector('[data-industry-hero-video]');
    if (!src || !video) return;

    var started = false;

    function loadVideo() {
      if (started) return;
      started = true;
      video.src = src;
      video.load();
      video.play().catch(function () {});
    }

    function onReady() {
      video.classList.add('is-loaded');
    }

    video.addEventListener('canplay', onReady, { once: true });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              loadVideo();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px 0px' }
      );
      observer.observe(container);
    } else {
      loadVideo();
    }
  });
})();
