import menu from "./menu.json";
import cardsTemplates from "./templates/carsd.hbs";



const menuRef = document.querySelector('.js-menu');
const cardsMarkUp = createMarkUpMenu(menu);
menuRef.insertAdjacentHTML('beforeend', cardsMarkUp);

function createMarkUpMenu(menu) {
    return cardsTemplates(menu);
}