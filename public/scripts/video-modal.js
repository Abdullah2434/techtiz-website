(() => {
  const modal = document.getElementById("cs-video-modal");
  const iframe = document.getElementById("cs-video-iframe");
  if (!modal || !iframe) return;

  const openModal = (videoId) => {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    iframe.src = "";
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-video-open]");
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      openModal(trigger.getAttribute("data-video-open"));
      return;
    }
    if (e.target.closest("[data-video-close]") || e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();
