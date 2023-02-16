/// плавная прокрутка пли клике
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if  (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if(iconMenu.classList.contains('_active')){
                iconMenu.classList.remove('_active');
                nav.classList.remove('_active');
                document.body.classList.remove('_lock');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();            
        }
    }
}
////меню бургер
const iconMenu = document.querySelector('.menu_icon');
const nav = document.querySelector('nav');
if (iconMenu){
    iconMenu.addEventListener("click",function(e){
        iconMenu.classList.toggle('_active');
        nav.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}

const menutap = document.querySelector('')


/////clickinput
var inputclick = document.getElementsByClassName('request-content');
inputclick[0].onclick = function() {
    inputclick[0].classList.toggle("_inputactive");
}
inputclick[1].onclick = function() {
    inputclick[0].classList.remove("_inputactive");
}