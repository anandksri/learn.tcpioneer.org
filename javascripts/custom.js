document.addEventListener("DOMContentLoaded", function () {

  const search = document.querySelector(".md-search");
  if (!search) return;

  const container = document.createElement("div");
  container.className = "custom-header-buttons";

  container.innerHTML = `
    <a href="https://tcpioneer.org" class="join-btn">Main Site</a>
    <a href="https://tcpioneer.org/joinus" class="join-btn">Join Us</a>
  `;

  // ✅ insert AFTER search bar
  search.parentNode.insertBefore(container, search.nextSibling);

});

// one side bar at once
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".md-nav__item--nested");

  sections.forEach((item) => {
    const label = item.querySelector("label");
    if (!label) return;

    label.addEventListener("click", function () {
      const isOpen = item.classList.contains("md-nav__item--active");

      // 🔥 close all menus
      sections.forEach((i) => {
        i.classList.remove("md-nav__item--active");
      });

      // 🔥 open only clicked one
      if (!isOpen) {
        item.classList.add("md-nav__item--active");
      }
    });
  });
});