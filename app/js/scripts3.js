// var form = document.querySelector('.form');
// var form_add_close = document.querySelector('.modal-form__close');
// var modal_form = document.querySelector('.modal-form');
// var modal_overlay = document.querySelector('.modal__overlay');



// // Отмена отправки формы, показ модального окна
// form.onsubmit = function(evt) {
//     evt.preventDefault();
//     console.log('отмена отправки формы');
//     modal_overlay.classList.add('modal-show');
//     modal_form.classList.add('modal-show');
//     modal_form.classList.add('modal-form-bounce');
// }

// // Закрытие модального окна
 
// form_add_close.addEventListener('click', function () {
//     console.log('форма отправлена - закрыть попап')
//     modal_form.classList.remove('modal-show');
//     modal_overlay.classList.remove('modal-show');
// });

// modal_overlay.addEventListener('click', function () {
//     console.log('закрыть попап - клик по оверлею')
//     modal_form.classList.remove('modal-show');
//     modal_overlay.classList.remove('modal-show');
// });

// window.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === 27) {
//         if (modal_form.classList.contains('modal-show')) {
//             evt.preventDefault();
//             modal_form.classList.remove('modal-show');
//             modal_overlay.classList.remove('modal-show');
//             modal_form.classList.remove('modal-error');
//         }
//     }
// });


// var main_nav = document.querySelector('.main-nav');
// var main_nav_toggle = document.querySelector('.main-nav__toggle');
// // var login_link = document.querySelector('.main-nav__login');

// //JS подгрузился
// main_nav.classList.remove('main-nav--nojs')


// //Открытие меню-бургера
// main_nav_toggle.addEventListener('click', function (evt) {
//     if (main_nav.classList.contains('main-nav--closed')) {
//         console.log('клик по кнопке - открыть меню');
//         main_nav.classList.remove('main-nav--closed');
//         main_nav.classList.add('main-nav--opened');
//     }
//     else {
//         main_nav.classList.add('main-nav--closed');
//         main_nav.classList.remove('main-nav--opened');
//     }
// });

// // //Открытие меню-бургера
// // main_nav_toggle.addEventListener('click', function (evt) {
// //     console.log('клик по кнопке - открыть меню');
// //     main_nav.classList.toggle('main-nav--closed');
// // });

// // //Удаление класса скрытия меню, для ширины выше 768px
// // if (window.matchMedia("(min-width: 768px)").matches) {
// //     main_nav.classList.remove('main-nav--closed');
// //     console.log("Screen width is at least 768px");
// // } else {
// //  //ширина экрана меньше 768 пикселей;
// // }

// // window.addEventListener("resize", function() {
// //     if (window.matchMedia("(min-width: 768px)").matches) {
// //         main_nav.classList.remove('main-nav--closed');
// //         console.log("Screen width is at least 768px");
// //     } else {
// //         main_nav.classList.add('main-nav--closed');
// //         console.log("Screen less than 768px");
// //     }
// // }); 