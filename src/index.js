import menu from "./menu.json";
import cardsTemplates from "./templates/carsd.hbs";



const menuRef = document.querySelector('.js-menu');
const cardsMarkUp = createMarkUpMenu(menu);

const bodeRef = document.body;
const checkBox = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


menuRef.insertAdjacentHTML('beforeend', cardsMarkUp);

function createMarkUpMenu(menu) {
    return cardsTemplates(menu);
}


document.addEventListener('change', classToggle);

themeDefault();
getLS();

function classToggle(e) {
    e.preventDefault();
    bodeRef.classList.toggle(Theme.DARK);

    if (bodeRef.classList.contains(Theme.DARK)) {
        localStorage.setItem('theme', Theme.DARK);
        localStorage.setItem('checkbox', checkBox.checked);
    }
    else {
        let checkBoxFalse = checkBox.checked = false;
        localStorage.setItem('theme', Theme.LIGHT);
        localStorage.setItem('checkbox', checkBoxFalse);
    }
}

function themeDefault() {
    if (!localStorage.length) {
        localStorage.setItem('theme', Theme.LIGHT);
    }
}
    

function getLS() {
    bodeRef.classList.add(localStorage.getItem('theme'));
    checkBox.setAttribute('checked', localStorage.getItem('checkbox'));
 }  