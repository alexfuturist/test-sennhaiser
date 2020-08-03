var body = document.querySelector('body');
var callback = document.querySelector('.callback');

var callback_order = document.querySelector('.header__call-order');
var callback_close = document.querySelector('.callback__close');

var overlay = document.querySelector('.modal-overlay');

//Открытие меню-звонка
callback_order.addEventListener('click', function (evt) {
    // console.log('открыть');
    callback.classList.add('callback--active');
    overlay.classList.add('callback--active');
    // body.classList.toggle('lock');
    // burger_overlay.classList.toggle('overlay-show');
});

//Закрытие мменю-звонка;
callback_close.addEventListener('click', function (evt) {
    // console.log('закрыть');
    callback.classList.remove('callback--active');
    overlay.classList.remove('callback--active');
    // body.classList.toggle('lock');
    // burger_overlay.classList.toggle('overlay-show');
});

//Закрытие мменю-звонка;
overlay.addEventListener('click', function (evt) {
    // console.log('закрыть');
    callback.classList.remove('callback--active');
    overlay.classList.remove('callback--active');
    // body.classList.toggle('lock');
    // burger_overlay.classList.toggle('overlay-show');
});

