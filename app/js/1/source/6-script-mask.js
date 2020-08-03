//  /*------------------------------------------------------
//        Добавление маски номеру телефона
//     ------------------------------------------------------*/

//CБЕРБАНК
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.form__contacts-input-phone'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+38 (0__) ___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// $(document).ready(function () {
//     $("#phone").mask("+38(999)-999-99-99", {
//         autoclear: false
//     });
//     // {completed:function(){
//     //   document.getElementById('#phone').classList.add('form-valid');
//     // }});
// });


// $.fn.setCursorPosition = function(pos) {
//     if ($(this).get(0).setSelectionRange) {
//       $(this).get(0).setSelectionRange(pos, pos);
//     } else if ($(this).get(0).createTextRange) {
//       var range = $(this).get(0).createTextRange();
//       range.collapse(true);
//       range.moveEnd('character', pos);
//       range.moveStart('character', pos);
//       range.select();
//     }
//   };

// $("#phone").click(function(){
//     $(this).setCursorPosition(4);
//   }).mask("+38(999)-999-99-99");
// $("#phone").mask("+38(999)-999-99-99", {
//     autoclear: false
// });

// // $('#phone').on('click focus input', function () {
// //     var $this = $(this);
// //     setTimeout(function () {
// //         $this.caret(value.indexOf('_'));
// //     }, 0);
// // });

// // $("#center_ok").click(function(){
// //     $(this).setCursorPosition(3);
// //   }).mask("+7(999) 999-9999");
// //   $("#center_not_ok").mask("+7(999) 999-9999");