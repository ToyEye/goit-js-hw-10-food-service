import menu from "./menu.json";
import cardsTemplates from "./templates/carsd.hbs";



const menuRef = document.querySelector('.js-menu');
const cardsMarkUp = createMarkUpMenu(menu);

const bodyRef = document.body;
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

if (bodyRef.classList.value === Theme.DARK) {
    checkBox.checked = true;
}

function classToggle(e) {
   

    if (e.target.checked) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    }
    else {
        bodyRef.classList.add(Theme.LIGHT);
        bodyRef.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function themeDefault() {
    if (localStorage === null) {
        bodyRef.classList.add(Theme.LIGHT);
    } else {
        bodyRef.classList.add(localStorage.getItem('theme'));
    }
}
    

