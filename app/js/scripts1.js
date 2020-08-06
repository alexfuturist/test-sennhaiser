var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })
function quantityLimit(element) {
    //Максимальное значение инпута
    var max_value = parseInt(element.max);
    //Минимальное значение инпута
    var min_value = parseInt(element.min);

    //Если введено значение больше максимального - присвоить максимальное
    if (element.value > max_value) {
        element.value = max_value;
    }

    //Функция присвоения минимального значения 
    function quantityLimitMin() {
        element.value = "0" + min_value;
    }

    //Если введено значение меньше минимального - присвоить минимальное
    if (element.value < min_value  || element.value == "" || element.value == 0) {

        //Таймаут присвоения
        window.quantityTimeOut = setTimeout(function () {
            quantityLimitMin()
        }, 1000);
    }

    //Проверка измененного значения
    if (element.value > min_value || element.value != "") {
        //Удаление таймаута присвоения минимального значения
        clearTimeout(window.quantityTimeOut);
    }
}




//Валидация инптуа количества товаров и кнопок "+" и "-"
(function () {
    //кнопка вверх
    var buttonIncrease = document.querySelector('.item__quantity-button--increase');
    //кнопка вниз
    var buttonDecrease = document.querySelector('.item__quantity-button--decrease');
    //поле ввода колличества
    var itemQuantityInput = document.querySelector('.item__quantity-input');
    //максимальное значение
    var max_value = parseInt(itemQuantityInput.max);



    //Увеличиваем на 1 
    buttonIncrease.addEventListener('click', function () {
        //текущее значение
        var input_value = parseInt(itemQuantityInput.value);

        if (itemQuantityInput.value < 9) {
            itemQuantityInput.value = "0" + (parseInt(itemQuantityInput.value) + 1);
        } else if (itemQuantityInput.value < itemQuantityInput.max) {
            itemQuantityInput.value = parseInt(itemQuantityInput.value) + 1;
        } else {
            itemQuantityInput.value = parseInt(itemQuantityInput.max);
        }

        //изменение кнопки "+"
        if (input_value >= (max_value - 1)) {
            buttonIncrease.classList.add('item__quantity-button--disabled');
        }

        //изменение кнопки "-"
        if (input_value >= 1) {
            buttonDecrease.classList.remove('item__quantity-button--disabled');
        }
    });

    //Уменьшаем на 1 
    buttonDecrease.addEventListener('click', function () {
        //текущее значение
        var input_value = parseInt(itemQuantityInput.value);

        if (itemQuantityInput.value < 11 && itemQuantityInput.value > 1) {
            itemQuantityInput.value = "0" + (parseInt(itemQuantityInput.value) - 1);
        } else if (itemQuantityInput.value > 1) {
            itemQuantityInput.value = parseInt(itemQuantityInput.value) - 1;
        } else {
            itemQuantityInput.value = "01"
        }

        //изменение кнопки "+"
        if (input_value <= max_value) {
            buttonIncrease.classList.remove('item__quantity-button--disabled');
        }

        //изменение кнопки "-"
        if (input_value <= 2) {
            buttonDecrease.classList.add('item__quantity-button--disabled');
        }
    });



    //Кнопка +
    itemQuantityInput.addEventListener('input', function () {
        if (this.value >= max_value) {
            buttonIncrease.classList.add('item__quantity-button--disabled');
        }

        if (this.value < max_value) {
            buttonIncrease.classList.remove('item__quantity-button--disabled');
        }
    });

    //Кнопка -
    itemQuantityInput.addEventListener('input', function () {
        if (this.value > 1) {
            buttonDecrease.classList.remove('item__quantity-button--disabled');
        }

        if (this.value < 2) {
            buttonDecrease.classList.add('item__quantity-button--disabled');
        }
    });



    //Добваление "0" перед числом для количества "1-9"
    itemQuantityInput.addEventListener('change', function () {
        if (this.value > 0 && this.value < 10) {
            this.value = "0" + Number(this.value);
        }
    });

})();
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