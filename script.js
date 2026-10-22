// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Carousels: arrow buttons and autoplay (pauses on hover/touch)
document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".track");
  const step = () => track.querySelector("img").offsetWidth + 16;

  const go = (dir) => {
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (dir > 0 && atEnd) track.scrollTo({ left: 0 });
    else track.scrollBy({ left: dir * step() });
  };

  carousel.querySelector(".prev")?.addEventListener("click", () => go(-1));
  carousel.querySelector(".next")?.addEventListener("click", () => go(1));

  if (carousel.hasAttribute("data-autoplay")) {
    let paused = false;
    ["mouseenter", "touchstart"].forEach((e) => carousel.addEventListener(e, () => (paused = true), { passive: true }));
    ["mouseleave", "touchend"].forEach((e) => carousel.addEventListener(e, () => (paused = false)));
    setInterval(() => !paused && go(1), 3000);
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
