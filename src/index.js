import './styles.css';

import menu from './menu.json';
import templateCard from './templates/template-card.hbs';

const cardRef = document.querySelector('.js-menu');
cardRef.insertAdjacentHTML('beforeend', templateCard(menu));
