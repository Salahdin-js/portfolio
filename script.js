const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    darkModeToggle.textContent = '🌙';
  } else {
    localStorage.setItem('theme', 'light');
    darkModeToggle.textContent = '☀️';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌙';
  } else {
    darkModeToggle.textContent = '☀️';
  }
});
