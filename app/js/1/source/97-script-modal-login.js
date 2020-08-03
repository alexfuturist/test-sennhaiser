var login_link = document.querySelector('.main-nav__login');
var modal_login = document.querySelector('.modal-login');
var modal_overlay = document.querySelector('.modal__overlay')
var modal_close = document.querySelector('.modal-login__close');
var modal_close_mobile = document.querySelector('.modal-login__close--mobile');
var login_form = document.querySelector('.modal-login__form');
var login = document.querySelector('input.modal-login__icon-name');
var password = document.querySelector('input.modal-login__icon-password');

login_link.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log('клик по ссылке вход');
    modal_overlay.classList.add('modal-show');
    modal_login.classList.add('modal-show');
    modal_login.classList.add('modal-bounce');
    login.focus();
}); 

modal_close.addEventListener('click', function() {
    console.log('закрыть попап')
    modal_login.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    modal_login.classList.remove('modal-error');
});

modal_close_mobile.addEventListener('click', function() {
    console.log('закрыть попап')
    modal_login.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    modal_login.classList.remove('modal-error');
});
 
modal_overlay.addEventListener('click', function() {
    console.log('закрыть попап - клик по оверлею')
    modal_login.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    modal_login.classList.remove('modal-error');
});

login_form.addEventListener('submit', function(evt) {
    if (!login.value || !password.value) {
    evt.preventDefault();
    modal_login.classList.remove('modal-error');
    modal_login.offsetWidth = modal_login.offsetWidth;
    modal_login.classList.add('modal-error');
    console.log ('Нужно ввести логин и пароль');
    }
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode===27) {
        if (modal_login.classList.contains('modal-show')) {
            evt.preventDefault();
            modal_login.classList.remove('modal-show');
            modal_overlay.classList.remove('modal-show');
            modal_login.classList.remove('modal-error');
        }
    }
});
