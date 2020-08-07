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
    if (element.value < min_value || element.value == "" || element.value == 0) {

        //Таймаут присвоения
        window.quantityTimeOut = setTimeout(function () {
            quantityLimitMin()
        }, 2500);
    }

    //Проверка измененного значения
    if (element.value > min_value || element.value != "") {
        //Удаление таймаута присвоения минимального значения
        clearTimeout(window.quantityTimeOut);
    }
}


//Валидация инптуа количества товаров и кнопок "+" и "-"
(function () {
    //кнопки вверх
    var buttonIncrease = document.querySelectorAll('.quantity-list__button--increase');
    //кнопки вниз
    var buttonDecrease = document.querySelectorAll('.quantity-list__button--decrease');
    //поля ввода колличества
    var itemQuantityInput = document.querySelectorAll('.quantity-list__input');


    //Создаем массивы из псевдомассивов кнопок и полей
    window.buttonIncreaseArr = [];
    window.buttonDecreaseArr = [];
    window.itemQuantityInputArr = [];

    //i-я кнопка вверх (записываем в массив кнопок вверх)
    for (var i = 0; i < buttonIncrease.length; i++) {
        buttonIncreaseArr[i] = buttonIncrease[i];
    }

    //i-я кнопка ввниз (записываем в массив кнопок вниз)
    for (var i = 0; i < buttonDecrease.length; i++) {
        buttonDecreaseArr[i] = buttonDecrease[i];
    }

    //i-е поле ввода колличества (записываем в массив полей ввода колличества)
    for (var i = 0; i < itemQuantityInput.length; i++) {
        itemQuantityInputArr[i] = itemQuantityInput[i];
    }


    //Увеличиваем значение инпута на 1
    for (var i = 0; i < buttonIncrease.length; i++) {
        buttonIncrease[i].addEventListener('click', function (e) {

            //находим текущий индекс кнопки, по которой кликнули
            var targetIndexIncrease = buttonIncreaseArr.indexOf(e.target);

            //увеличиваем значение инпута на 1
            if (itemQuantityInput[targetIndexIncrease].value < 9) {
                itemQuantityInput[targetIndexIncrease].value = "0" + (parseInt(itemQuantityInput[targetIndexIncrease].value) + 1);
            } else if (itemQuantityInput[targetIndexIncrease].value < itemQuantityInput[targetIndexIncrease].max) {
                itemQuantityInput[targetIndexIncrease].value = parseInt(itemQuantityInput[targetIndexIncrease].value) + 1;
            } else {
                itemQuantityInput[targetIndexIncrease].value = parseInt(itemQuantityInput[targetIndexIncrease].max);
            }

            //текущее значение
            var inputValue = parseInt(itemQuantityInput[targetIndexIncrease].value);

            //максимальное значение
            var maxValue = parseInt(itemQuantityInput[targetIndexIncrease].max);

            //минимальное значение
            var minValue = parseInt(itemQuantityInput[targetIndexIncrease].min);

            //изменение кнопки "+"
            if (inputValue >= (maxValue)) {
                buttonIncrease[targetIndexIncrease].classList.add('quantity-list__button--disabled');
            }

            //изменение кнопки "-"
            if (inputValue >= minValue) {
                buttonDecrease[targetIndexIncrease].classList.remove('quantity-list__button--disabled');
            }
        });
    }


    //Уменьшаем значение инпута на 1 
    for (var i = 0; i < buttonIncrease.length; i++) {
        buttonDecrease[i].addEventListener('click', function (e) {

            //находим текущий индекс кнопки, по которой кликнули
            var targetIndexDecrease = buttonDecreaseArr.indexOf(e.target);

            //уменьшаем значение инпута на 1 
            if (itemQuantityInput[targetIndexDecrease].value < 11 && itemQuantityInput[targetIndexDecrease].value > 1) {
                itemQuantityInput[targetIndexDecrease].value = "0" + (parseInt(itemQuantityInput[targetIndexDecrease].value) - 1);
            } else if (itemQuantityInput[targetIndexDecrease].value > 1) {
                itemQuantityInput[targetIndexDecrease].value = parseInt(itemQuantityInput[targetIndexDecrease].value) - 1;
            } else {
                itemQuantityInput[targetIndexDecrease].value = "01"
            }

            //текущее значение
            var inputValue = parseInt(itemQuantityInput[targetIndexDecrease].value);

            //максимальное значение
            var maxValue = parseInt(itemQuantityInput[targetIndexDecrease].max);

            //минимальное значение
            var minValue = parseInt(itemQuantityInput[targetIndexDecrease].min);

            //изменение кнопки "+"
            if (inputValue <= maxValue) {
                buttonIncrease[targetIndexDecrease].classList.remove('quantity-list__button--disabled');
            }

            //изменение кнопки "-"
            if (inputValue <= minValue) {
                buttonDecrease[targetIndexDecrease].classList.add('quantity-list__button--disabled');
            }
        });
    }



    //Кнопка +
    for (var i = 0; i < itemQuantityInput.length; i++) {
        itemQuantityInput[i].addEventListener('input', function (e) {

            //находим текущий индекс инпута, в котором изменили значение
            var targetIndexInput = itemQuantityInputArr.indexOf(e.target);

            //максимальное значение
            var maxValue = parseInt(itemQuantityInput[targetIndexInput].max);

            if (this.value >= maxValue) {
                buttonIncrease[targetIndexInput].classList.add('quantity-list__button--disabled');
            }

            if (this.value < maxValue) {
                buttonIncrease[targetIndexInput].classList.remove('quantity-list__button--disabled');
            }
        });
    }

    //Кнопка -
    for (var i = 0; i < itemQuantityInput.length; i++) {
        itemQuantityInput[i].addEventListener('input', function (e) {

            //находим текущий индекс инпута, в котором изменили значение
            var targetIndexInput = itemQuantityInputArr.indexOf(e.target);

            //минимальное значение
            var minValue = parseInt(itemQuantityInput[targetIndexInput].min);

            if (this.value > minValue) {
                buttonDecrease[targetIndexInput].classList.remove('quantity-list__button--disabled');
            }

            if (this.value < (minValue + 1)) {
                buttonDecrease[targetIndexInput].classList.add('quantity-list__button--disabled');
            }
        });
    }

    //Добваление "0" перед числом для количества "1-9"
    for (var i = 0; i < itemQuantityInput.length; i++) {
        itemQuantityInput[i].addEventListener('change', function (e) {

            if (this.value > 0 && this.value < 10) {
                this.value = "0" + Number(this.value);
            }
        });
    }

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