// var form_link = document.querySelector('.hit__button');
// var form_add_close = document.querySelector('.modal-form__button');
// var modal_form = document.querySelector('.modal-form');
// var modal_overlay = document.querySelector('.modal__overlay');

// form_link.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     console.log('клик по кнопке "заказать"');
//     modal_overlay.classList.add('modal-show');
//     modal_form.classList.add('modal-show');
//     modal_form.classList.add('modal-form-bounce');
// });

// form_add_close.addEventListener('click', function () {
//     console.log('добавить в корзину - закрыть попап')
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