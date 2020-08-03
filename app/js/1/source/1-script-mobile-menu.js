var body = document.querySelector('body');
var header_body = document.querySelector('.header__body');
var header_burger = document.querySelector('.header__burger');
// var burger_overlay = document.querySelector('.burger__overlay');
var overlay_show = document.querySelector('.overlay-show');
var header_link = document.querySelectorAll('.header__link');
var header_logo = document.querySelector('.header__logo');


//Открытие меню-бургера
header_burger.addEventListener('click', function (evt) {
    // console.log('клик по кнопке - открыть меню');
    header_body.classList.toggle('header__active');
    body.classList.toggle('lock');
    // burger_overlay.classList.toggle('overlay-show');
});

//Закрытие меню-бургера - при клике по ссылке пункта меню;
for (var i = 0; i < header_link.length; i++) {
    header_link[i].addEventListener('click', function () {
        // console.log('клик по пункту меню - скрыть меню');
        header_body.classList.remove('header__active');
        // burger_overlay.classList.remove('overlay-show');
        body.classList.remove('lock');
    });
};

//Закрытие меню-бургера - при клике по логотипу;
header_logo.addEventListener('click', function () {
    // console.log('клик по логотипу меню - скрыть меню');
    header_body.classList.remove('header__active');
    // burger_overlay.classList.remove('overlay-show');
    body.classList.remove('lock');
});





// //Закрытие меню-бургера - при начале скрола контента ниже;
// burger_overlay.addEventListener('touchstart', function(){
//     console.log('скрол по документу - скрыть меню');
//     header_body.classList.remove('header__active');
//     burger_overlay.classList.remove('overlay-show');
//     body.classList.toggle('lock');
// });

// //Закрытие меню-бургера - при клике по контенту ниже;
// burger_overlay.addEventListener('click', function () {
//     console.log('клик по документу - скрыть меню');
//     header_body.classList.remove('header__active');
//     burger_overlay.classList.remove('overlay-show');
//     body.classList.toggle('lock');
// });