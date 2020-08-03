var catalog_item_image = document.querySelectorAll('.item-catalog__link-image');
var catalog_item_info = document.querySelectorAll('.item-catalog__info-link');
var catalog_item_link = document.querySelectorAll('.item-catalog__link-buy');

//Модальное окно - "Товар добавлен"
var modal_cart_notification = document.querySelector('.modal-cart-notification');
var modal_cart_notification_close = document.querySelector('.modal-cart-notification__close');
var modal_cart_notification_submit = document.querySelector('.modal-cart-notification__submit');
var modal_overlay = document.querySelector('.modal__overlay');

// Отмена перехода по ссылке - КАКТИНКА товара
for (var i = 0; i < catalog_item_image.length; i++) {
    catalog_item_image[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        // console.log('клик по ссылке товар');
    });
};

// Отмена перехода по ссылке - НАЗВАНИЕ товара
for (var i = 0; i < catalog_item_info.length; i++) {
    catalog_item_info[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        // console.log('клик по ссылке товар');
    });
};

// КНОПКА "ЗАКАЗАТЬ" товар
for (var i = 0; i < catalog_item_link.length; i++) {
    catalog_item_link[i].addEventListener("click", function (evt) {
        // Отмена перехода по ссылке - кнопка "заказать товар"
        evt.preventDefault();
        // console.log('клик по ссылке товар');
        modal_overlay.classList.add('modal-show');
        modal_cart_notification.classList.add('modal-show');
        modal_cart_notification.classList.add('modal-bounce');
        body.classList.add('lock');
    });
};

// Закрытие модального окна
modal_cart_notification_close.addEventListener('click', function () {
    // console.log('закрыть попап');
    modal_cart_notification.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    body.classList.remove('lock');
});

modal_overlay.addEventListener('click', function () {
    // console.log('закрыть попап - клик по оверлею');
    modal_cart_notification.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    body.classList.remove('lock');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (modal_cart_notification.classList.contains('modal-show')) {
            evt.preventDefault();
            modal_cart_notification.classList.remove('modal-show');
            modal_overlay.classList.remove('modal-show');
            modal_cart_notification.classList.remove('modal-error');
            body.classList.remove('lock');
        }
    }
});

// Отмена отправки формы
modal_cart_notification_submit.addEventListener('click', function (evt) {
    evt.preventDefault();
    // console.log('закрыть попап');
    modal_cart_notification.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    body.classList.remove('lock');
});







///==== ПОКАЗАТЬ БОЛЬШЕ ============================================///
var catalog_item_image_more = document.querySelectorAll('.item-catalog__link-image-more');
var catalog_item_info_more = document.querySelectorAll('.item-catalog__info-link--more');
var catalog_item_link_more = document.querySelectorAll('.item-catalog__link-more');

// Отмена перехода по ссылке - картинка товара (показать больше)
for (var i = 0; i < catalog_item_image_more.length; i++) {
    catalog_item_image_more[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        // console.log('клик по ссылке товар');
    });
};


// Отмена перехода по ссылке - название товара (показать больше)
for (var i = 0; i < catalog_item_info_more.length; i++) {
    catalog_item_info_more[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        // console.log('клик по ссылке товар');
    });
};


// Отмена перехода по ссылке - кнопка "показать больше"
for (var i = 0; i < catalog_item_link_more.length; i++) {
    catalog_item_link_more[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        // console.log('клик по ссылке товар');
    });
};







///=== ДОПОЛНИТЕЛЬНЫЕ ТОВАРЫ ========================================///

var extra_goods_link = document.querySelectorAll('.extra__goods-link');


for (var i = 0; i < extra_goods_link.length; i++) {
    extra_goods_link[i].addEventListener("click", function (evt) {
        // Отмена перехода по ссылке дополнительного товара - кнопка "заказать"
        evt.preventDefault();
        // console.log('клик по ссылке товар');
        modal_overlay.classList.add('modal-show');
        modal_cart_notification.classList.add('modal-show');
        modal_cart_notification.classList.add('modal-bounce');
        body.classList.add('lock');
    });
};


// //добавить в корзину - закрыть попап
// modal_cart_notification_close.addEventListener('click', function () {
//     console.log('добавить в корзину - закрыть попап')
//     modal_cart_notification.classList.remove('modal-show');
//     modal_overlay.classList.remove('modal-show');
// });

// modal_overlay.addEventListener('click', function () {
//     console.log('закрыть попап - клик по оверлею')
//     modal_cart_notification.classList.remove('modal-show');
//     modal_overlay.classList.remove('modal-show');
// });

// window.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === 27) {
//         if (modal_cart_notification.classList.contains('modal-show')) {
//             evt.preventDefault();
//             modal_cart_notification.classList.remove('modal-show');
//             modal_overlay.classList.remove('modal-show');
//             modal_cart_notification.classList.remove('modal-error');
//         }
//     }
// });