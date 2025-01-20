const darkModeBtn = document.getElementById('darkModeBtn');
const darkModeIcon = document.getElementById('darkModeIcon');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeIcon.src = 'Mode.png';
}

darkModeBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    darkModeIcon.src = 'Mode.png';
    localStorage.setItem('darkMode', 'disabled');
  } else {
    body.classList.add('dark-mode');
    darkModeIcon.src = 'Mode.png';
    localStorage.setItem('darkMode', 'enabled');
  }
});
