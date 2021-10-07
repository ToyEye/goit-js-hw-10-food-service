import menu from "./menu.json";
import cardsTemplates from "./templates/carsd.hbs";



const menuRef = document.querySelector('.js-menu');
const cardsMarkUp = createMarkUpMenu(menu);
menuRef.insertAdjacentHTML('beforeend', cardsMarkUp);

function createMarkUpMenu(menu) {
    return cardsTemplates(menu);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodeRef = document.body;
bodeRef.classList.add('light-theme');

document.addEventListener('change', classToggle);

function classToggle(e) {
    const checkBox = document.querySelector('.theme-switch__toggle');
    if (bodeRef.classList.contains('light-theme')) {
        bodeRef.classList.remove('light-theme');
        bodeRef.classList.add('dark-theme');
        checkBox.getAttribute('checked');
        localStorage
    }
    else if (bodeRef.classList.contains('dark-theme')) {
        bodeRef.classList.remove('dark-theme');
        bodeRef.classList.add('light-theme');
    }  
    }