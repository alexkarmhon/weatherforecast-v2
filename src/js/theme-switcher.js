const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const { LIGHT, DARK } = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
}

let pageTheme = localStorage.getItem('current-theme') || LIGHT;
switcher.checked = pageTheme === DARK;
body.classList.add(pageTheme);

function handlerSwitch() {
  body.classList.toggle(LIGHT);
  body.classList.toggle(DARK);

  pageTheme = pageTheme === LIGHT ? DARK : LIGHT;
  localStorage.setItem('current-theme', pageTheme);
}

switcher.addEventListener('change', handlerSwitch);