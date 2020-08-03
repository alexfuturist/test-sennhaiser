$(document).ready(function(){
    $('.slider-1').slick({
        arrows: false,
        dots:true,
        mobileFirst:true,
        responsive:[
            {breakpoint:768,
            settings:"unslick"
        }]
    });
});

$(document).ready(function(){
    $('.slider-2').slick({
        arrows: false,
        dots:true,
        adaptiveHeight:true,
        mobileFirst:true,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:true
                }
            },
            {
                breakpoint:1200,
                settings:{
                    arrows:true,
                    adaptiveHeight:false
                }
            }
        ]
    });
});


// var advantages_list = document.querySelector('.advantages__list');

// //Удаление класса слайдера, для ширины выше 768px
// if (window.matchMedia("(min-width: 768px)").matches) {
//     advantages_list.classList.remove('slider-1');
//     console.log("Screen width is at least 768px");
// } else {
//  //ширина экрана меньше 768 пикселей;
// };

// window.addEventListener("resize", function() {
//     if (window.matchMedia("(min-width: 768px)").matches) {
//         advantages_list.classList.remove('slider-1');
//         console.log("Screen width is at least 768px");
//     } else {
//         advantages_list.classList.add('slider-1');
//         console.log("Screen less than 768px");
//     }
// });