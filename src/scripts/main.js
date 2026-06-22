document.addEventListener('click', (event) => {
  document.querySelectorAll('details.auto-close').forEach((details) => {
    if (details.open && !details.contains(event.target)) {
      details.open = false;
    }
  });
});

//geluid bij link click
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const audio = new Audio('bing.mp3');
    audio.play();
    audio.addEventListener('ended', () => {
      window.location.href = link.href;
    });
  });
});