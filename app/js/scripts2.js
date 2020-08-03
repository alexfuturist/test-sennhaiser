// var catalog_item_image = document.querySelectorAll('.item__link-image');
// var catalog_item_link = document.querySelectorAll('.item__title-link');


// var form_link = document.querySelectorAll('.item__price-link');
// var form_add_close = document.querySelector('.modal-cart-notification__close');
// var modal_form = document.querySelector('.modal-cart-notification');
// var modal_overlay = document.querySelector('.modal__overlay');

// var form_submit = document.querySelector('.modal-cart-notification__submit');


// // Отмена перехода по ссылке
// for (var i = 0; i < catalog_item_image.length; i++) {
//     catalog_item_image[i].addEventListener("click", function (evt) {
//         evt.preventDefault();
//         console.log('клик по ссылке товар');
//     });
// };

// for (var i = 0; i < catalog_item_link.length; i++) {
//     catalog_item_link[i].addEventListener("click", function (evt) {
//         evt.preventDefault();
//         console.log('клик по ссылке товар');
//     });
// };

// // Добавление  товара в корзину
// for (var i = 0; i < form_link.length; i++) {
//     form_link[i].addEventListener("click", function (evt) {
//         evt.preventDefault();
//         console.log('клик по ссылке добавления в корзину');
//         modal_overlay.classList.add('modal-show');
//         modal_form.classList.add('modal-show');
//         modal_form.classList.add('modal-form-bounce');
//     });
// };
 
// // Закрытие модального окна
// form_add_close.addEventListener('click', function () {
//     console.log('закрыть попап')
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



// // Отмена отправки формы
// form_submit.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     console.log('закрыть попап');
//     modal_form.classList.remove('modal-show');
//     modal_overlay.classList.remove('modal-show');
// });




// // //добавить в корзину - закрыть попап
// // form_add_close.addEventListener('click', function () {
// //     console.log('добавить в корзину - закрыть попап')
// //     modal_form.classList.remove('modal-show');
// //     modal_overlay.classList.remove('modal-show');
// // });

// // modal_overlay.addEventListener('click', function () {
// //     console.log('закрыть попап - клик по оверлею')
// //     modal_form.classList.remove('modal-show');
// //     modal_overlay.classList.remove('modal-show');
// // });

// // window.addEventListener('keydown', function (evt) {
// //     if (evt.keyCode === 27) {
// //         if (modal_form.classList.contains('modal-show')) {
// //             evt.preventDefault();
// //             modal_form.classList.remove('modal-show');
// //             modal_overlay.classList.remove('modal-show');
// //             modal_form.classList.remove('modal-error');
// //         }
// //     }
// // });