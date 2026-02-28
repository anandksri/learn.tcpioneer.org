async function loadMarkdown(file) {
  const res = await fetch(file);
  const text = await res.text();

  document.getElementById('content').innerHTML =
    marked.parse(text);
}