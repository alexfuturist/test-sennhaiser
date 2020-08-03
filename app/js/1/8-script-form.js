var form = document.querySelector('.form');
//Модальное окно - "ФОРМА успешно отправлена"
var modal_form = document.querySelector('.modal-form');
var modal_form_close = document.querySelector('.modal-form__close');
var modal_overlay = document.querySelector('.modal__overlay');


// Отмена отправки формы, показ модального окна
form.onsubmit = function(evt) {
    evt.preventDefault();
    console.log('отмена отправки формы');
    modal_overlay.classList.add('modal-show');
    modal_form.classList.add('modal-show');
    modal_form.classList.add('modal-bounce');
    body.classList.toggle('lock');
}

// Закрытие модального окна - "ФОРМА успешно отправлена"
 
modal_form_close.addEventListener('click', function () {
    // console.log('форма отправлена - закрыть попап');
    modal_form.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    body.classList.remove('lock');
});

modal_overlay.addEventListener('click', function () {
    // console.log('закрыть попап - клик по оверлею');
    modal_form.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    body.classList.remove('lock');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (modal_form.classList.contains('modal-show')) {
            evt.preventDefault();
            modal_form.classList.remove('modal-show');
            modal_overlay.classList.remove('modal-show');
            modal_form.classList.remove('modal-error');
            body.classList.remove('lock');
        }
    }
});

