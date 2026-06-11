document.addEventListener('click', (event) => {
  document.querySelectorAll('details.auto-close').forEach((details) => {
    if (details.open && !details.contains(event.target)) {
      details.open = false;
    }
  });
});
