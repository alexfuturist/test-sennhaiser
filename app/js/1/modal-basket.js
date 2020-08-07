(function () {
    var body = document.querySelector('body');
    var basket = document.querySelector('.basket');

    //кнопка "открыть корзину"
    var basket_link = document.querySelector('.basket-link');

    //кнопка "добавить в корзину"
    var buttonAddToBasket = document.querySelector('.item__add-to-basket');

    //кнопка "закрыть корзину"
    var basket_close = document.querySelector('.basket__close');

    var overlay = document.querySelector('.modal-overlay');

    //Открытие корзины
    basket_link.addEventListener('click', function (evt) {
        // console.log('открыть');
        basket.classList.add('active');
        overlay.classList.add('active');
        body.classList.toggle('lock');
        // burger_overlay.classList.toggle('overlay-show');
    });

    //Открытие корзины
    buttonAddToBasket.addEventListener('click', function (evt) {
        // console.log('открыть');
        basket.classList.add('active');
        overlay.classList.add('active');
        body.classList.toggle('lock');
        // burger_overlay.classList.toggle('overlay-show');
    });

    //Закрытие корзины
    basket_close.addEventListener('click', function (evt) {
        // console.log('закрыть');
        basket.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.toggle('lock');
        // burger_overlay.classList.toggle('overlay-show');
    });

    //Закрытие корзины
    overlay.addEventListener('click', function (evt) {
        // console.log('закрыть');
        basket.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.toggle('lock');
        // burger_overlay.classList.toggle('overlay-show');
    });
})();