    //  /*------------------------------------------------------
    //       ВАЛИДАЦИЯ ФОРМЫ
    //     ------------------------------------------------------*/

    //Программа валидации
    var inputs = document.querySelectorAll('input[data-rule]');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function () {
            var rule = this.dataset.rule;
            // console.log(rule);

            var value = this.value;

            var check;

            switch (rule) {
                case 'text':
                    check = /^[\-\.\s\'а-яА-Яa-zA-Z-ЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ]{2,25}$/.test(value);
                    // /.+/
                    // /^[a-z0-9_-]{2,25}$/
                    break;

                case 'number':
                    check = /^[\-\.\s\'а-яА-Яa-zA-Z0-9_-ЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ]{1,10}$/.test(value);
                    // /.+/
                    // /^[a-z0-9_-]{2,25}$/
                    break;

                case 'email':
                    check = /.+@.+\..+/i.test(value);
                    break;

                case 'phone':
                    check = /(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/.test(value);
                    break;
            }

            this.classList.remove('form-valid');
            this.classList.remove('form-invalid');
            if (check) {
                this.classList.add('form-valid');
            } else {
                this.classList.add('form-invalid');
            }

        });
    };

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function () {
            var rule = this.dataset.rule;
            // console.log(rule);

            var value = this.value;

            var check;

            switch (rule) {
                case 'text':
                    check = /^[\-\.\s\'а-яА-Яa-zA-Z-ЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ]{2,25}$/.test(value);
                    // /.+/
                    // /^[a-z0-9_-]{2,25}$/
                    break;

                case 'number':
                    check = /^[\-\.\s\'а-яА-Яa-zA-Z0-9_-ЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ]{1,10}$/.test(value);
                    // /.+/
                    // /^[a-z0-9_-]{2,25}$/
                    break;

                case 'email':
                    check = /.+@.+\..+/i.test(value);
                    break;

                case 'phone':
                    check = /(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/.test(value);
                    break;
            }

            this.classList.remove('form-valid');
            this.classList.remove('form-invalid');
            if (check) {
                this.classList.add('form-valid');
            } else {
                this.classList.add('form-invalid');
            }

        });
    };