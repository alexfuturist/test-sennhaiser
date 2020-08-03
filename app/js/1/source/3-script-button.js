 /*------------------------------------------------------
       Добавление модного анимирования кнопкам
    ------------------------------------------------------*/
 var buttons = document.getElementsByClassName('button');
 var forEach = Array.prototype.forEach;

//  forEach.call(header_button, function (b) {
//      b.addEventListener('click', addElement);
//      // setTimeout( () => {addDiv.remove()},1010);
//  });

 //Для всех кнопок
 forEach.call(buttons, function (b) {
     b.addEventListener('click', addElement);
 });



 function addElement(e) {
     var addDiv = document.createElement('div');
     var mValue = Math.max(this.clientWidth, this.clientHeight);
     var rect = this.getBoundingClientRect();
     var sDiv = addDiv.style;
     var px = 'px';

     sDiv.height = sDiv.width = mValue + px;
     sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
     sDiv.top = e.clientY - rect.top - (mValue / 2) + px;

     addDiv.classList.add('pulse');
     this.appendChild(addDiv);

     //Удаляем элемент после окончания анимации
     addDiv.addEventListener("animationend", function () {
         addDiv.remove();
     });

     // console.log(addDiv);
     // console.log(mValue);
     // console.log(rect);
 };