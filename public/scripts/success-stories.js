(() => {
  const initCarousel = (root) => {
    const track = root.querySelector("[data-cs-carousel-track]");
    if (!track) return;

    const scrollAmount = 400;
    const section = root.closest("section") ?? document;

    section.querySelectorAll("[data-cs-scroll]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const dir = btn.getAttribute("data-cs-scroll");
        const delta = dir === "left" ? -scrollAmount : scrollAmount;
        track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
      });
    });
  };

  document.querySelectorAll("[data-cs-carousel]").forEach(initCarousel);
})();
