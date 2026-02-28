async function loadSidebar() {
  const res = await fetch('/data/sidebar.json');
  const data = await res.json();

  const container = document.getElementById('sidebar-links');
  container.innerHTML = "";

  data.handbooks.forEach(item => {
    const link = document.createElement('a');
    link.href = item.link;
    link.innerText = item.title;

    link.className =
      "block px-4 py-2 rounded-lg hover:bg-violet-500/10 hover:text-violet-400 transition";

    if (window.location.pathname === item.link) {
      link.classList.add("text-violet-400", "bg-violet-500/10");
    }

    container.appendChild(link);
  });
}

loadSidebar();