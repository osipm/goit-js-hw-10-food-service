import './styles.css';

import menu from './menu.json';
import templateCard from './templates/template-card.hbs';

const cardRef = document.querySelector('.js-menu');
cardRef.insertAdjacentHTML('beforeend', templateCard(menu));

const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggle = document.querySelector('#theme-switch-toggle');
toggle.addEventListener('change', changeTheme);

toggle.checked = localStorage.theme === Theme.DARK;
changeTheme();

function changeTheme() {
  if (toggle.checked) {
    document.body.className = Theme.DARK;
    localStorage.theme = Theme.DARK;
  } else {
    document.body.className = Theme.LIGHT;
    localStorage.theme = Theme.LIGHT;
  }
}
