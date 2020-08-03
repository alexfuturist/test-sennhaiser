//ТАБЫ
$('body').on('click', '.tab__navitem', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('active')) {
		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});




//СПОЙЛЕР
$.each($('.spoller.active'), function (index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoller', function (event) {
	if ($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}

	if ($(this).parents('.one').length > 0) {
		$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
		$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
	}

	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
		if ($(this).parent().find('.slick-slider').length > 0) {
			$(this).parent().find('.slick-slider').slick('setPosition');
		}
	});
	return false;
});




//Всплывашка POPOVER
if ($('.t,.tip').length > 0) {
	tip();
}
function tip() {
	$('.t,.tip').webuiPopover({
		placement: 'top',
		trigger: 'hover',
		backdrop: false,
		//selector:true,
		animation: 'fade',
		dismissible: true,
		padding: false,
		//hideEmpty: true
		onShow: function ($element) { },
		onHide: function ($element) { },
	}).on('show.webui.popover hide.webui.popover', function (e) {
		$(this).toggleClass('active');
	});
}






//Подскатовка картинки в фон через IBG
// function ibg() {
// 	if (isIE()) {
// 		let ibg = document.querySelectorAll(".ibg");
// 		for (var i = 0; i < ibg.length; i++) {
// 			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
// 				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 			}
// 		}
// 	}
// }
// ibg();




//Клик вне области
// $(document).on('click touchstart', function (e) {
// 	if (!$(e.target).is(".select *")) {
// 		$('.select').removeClass('active');
// 	};
// });

//UP
// $(window).scroll(function () {
// 	var w = $(window).width();
// 	if ($(window).scrollTop() > 50) {
// 		$('#up').fadeIn(300);
// 	} else {
// 		$('#up').fadeOut(300);
// 	}
// });
// $('#up').click(function (event) {
// 	$('body,html').animate({ scrollTop: 0 }, 300);
// });





//МОБИЛЬНОЕ МЕНЮ
// var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
// if (isMobile.any()) { }


// if (location.hash) {
// 	var hsh = location.hash.replace('#', '');
// 	if ($('.popup-' + hsh).length > 0) {
// 		popupOpen(hsh);
// 	} else if ($('div.' + hsh).length > 0) {
// 		$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
// 	}
// }
// $('.wrapper').addClass('loaded');


// var act = "click";
// if (isMobile.iOS()) {
// 	var act = "touchstart";
// }


// let iconMenu = document.querySelector(".icon-menu");
// let body = document.querySelector("body");
// let menuBody = document.querySelector(".menu__body");
// if (iconMenu) {
// 	iconMenu.addEventListener("click", function () {
// 		iconMenu.classList.toggle("active");
// 		body.classList.toggle("lock");
// 		menuBody.classList.toggle("active");
// 	});
// }

// //ZOOM
// if ($('.gallery').length > 0) {
// 	baguetteBox.run('.gallery', {
// 		// Custom options
// 	});
// }
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/


// //POPUP
// $('.pl').click(function (event) {
// 	var pl = $(this).attr('href').replace('#', '');
// 	var v = $(this).data('vid');
// 	popupOpen(pl, v);
// 	return false;
// });
// function popupOpen(pl, v) {
// 	$('.popup').removeClass('active').hide();
// 	if (!$('.menu__body').hasClass('active')) {
// 		//$('body').data('scroll',$(window).scrollTop());
// 	}
// 	if (!isMobile.any()) {
// 		$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
// 		$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
// 	} else {
// 		setTimeout(function () {
// 			$('body').addClass('lock');
// 		}, 300);
// 	}
// 	history.pushState('', '', '#' + pl);
// 	if (v != '' && v != null) {
// 		$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
// 	}
// 	$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

// 	if ($('.popup-' + pl).find('.slick-slider').length > 0) {
// 		$('.popup-' + pl).find('.slick-slider').slick('setPosition');
// 	}
// }
// function openPopupById(popup_id) {
// 	$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
// }
// function popupClose() {
// 	$('.popup').removeClass('active').fadeOut(300);
// 	if (!$('.menu__body').hasClass('active')) {
// 		if (!isMobile.any()) {
// 			setTimeout(function () {
// 				$('body').css({ paddingRight: 0 });
// 				$('.pdb').css({ paddingRight: 0 });
// 			}, 200);
// 			setTimeout(function () {
// 				$('body').removeClass('lock');
// 				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
// 			}, 200);
// 		} else {
// 			$('body').removeClass('lock');
// 			//$('body,html').scrollTop(parseInt($('body').data('scroll')));
// 		}
// 	}
// 	$('.popup-video__value').html('');

// 	history.pushState('', '', window.location.href.split('#')[0]);
// }
// $('.popup-close,.popup__close').click(function (event) {
// 	popupClose();
// 	return false;
// });
// $('.popup').click(function (e) {
// 	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
// 		popupClose();
// 		return false;
// 	}
// });
// $(document).on('keydown', function (e) {
// 	if (e.which == 27) {
// 		popupClose();
// 	}
// });

// $('.goto').click(function () {
// 	var el = $(this).attr('href').replace('#', '');
// 	var offset = 0;
// 	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

// 	if ($('.menu__body').hasClass('active')) {
// 		$('.menu__body,.icon-menu').removeClass('active');
// 		$('body').removeClass('lock');
// 	}
// 	return false;
// });






//ФУНКЦИИ СКРОЛЛА
// function scrolloptions() {
// 	var scs = 100;
// 	var mss = 50;
// 	var bns = false;
// 	if (isMobile.any()) {
// 		scs = 10;
// 		mss = 1;
// 		bns = true;
// 	}
// 	var opt = {
// 		cursorcolor: "#fff",
// 		cursorwidth: "4px",
// 		background: "",
// 		autohidemode: true,
// 		cursoropacitymax: 0.4,
// 		bouncescroll: bns,
// 		cursorborderradius: "0px",
// 		scrollspeed: scs,
// 		mousescrollstep: mss,
// 		directionlockdeadzone: 0,
// 		cursorborder: "0px solid #fff",
// 	};
// 	return opt;
// }
// function scroll() {
// 	$('.scroll-body').niceScroll('.scroll-list', scrolloptions());
// }
// if (navigator.appVersion.indexOf("Mac") != -1) {
// } else {
// 	if ($('.scroll-body').length > 0) { scroll(); }
// }

/*
function scrollwhouse(){
		var scs=100;
		var mss=50;
		var bns=false;
	if(isMobile.any()){
		scs=10;
		mss=1;
		bns=true;
	}
	var opt={
		cursorcolor:"#afafaf",
		cursorwidth: "5px",
		background: "",
		autohidemode:false,
		railalign: 'left',
		cursoropacitymax: 1,
		bouncescroll:bns,
		cursorborderradius: "0px",
		scrollspeed:scs,
		mousescrollstep:mss,
		directionlockdeadzone:0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
$('.whouse-content-body').niceScroll('.whouse-content-scroll',scrollwhouse());
$('.whouse-content-body').scroll(function(event) {
		var s=$(this).scrollTop();
		var r=Math.abs($(this).outerHeight()-$('.whouse-content-scroll').outerHeight());
		var p=s/r*100;
	$('.whouse-content__shadow').css({opacity:1-1/100*p});
});
*/


var body = document.querySelector('body');
var header_body = document.querySelector('.header__body');
var header_burger = document.querySelector('.header__burger');
// var burger_overlay = document.querySelector('.burger__overlay');
var overlay_show = document.querySelector('.overlay-show');
var header_link = document.querySelectorAll('.header__link');
var header_logo = document.querySelector('.header__logo');


//Открытие меню-бургера
header_burger.addEventListener('click', function (evt) {
    // console.log('клик по кнопке - открыть меню');
    header_body.classList.toggle('header__active');
    body.classList.toggle('lock');
    // burger_overlay.classList.toggle('overlay-show');
});

//Закрытие меню-бургера - при клике по ссылке пункта меню;
for (var i = 0; i < header_link.length; i++) {
    header_link[i].addEventListener('click', function () {
        // console.log('клик по пункту меню - скрыть меню');
        header_body.classList.remove('header__active');
        // burger_overlay.classList.remove('overlay-show');
        body.classList.remove('lock');
    });
};

//Закрытие меню-бургера - при клике по логотипу;
header_logo.addEventListener('click', function () {
    // console.log('клик по логотипу меню - скрыть меню');
    header_body.classList.remove('header__active');
    // burger_overlay.classList.remove('overlay-show');
    body.classList.remove('lock');
});





// //Закрытие меню-бургера - при начале скрола контента ниже;
// burger_overlay.addEventListener('touchstart', function(){
//     console.log('скрол по документу - скрыть меню');
//     header_body.classList.remove('header__active');
//     burger_overlay.classList.remove('overlay-show');
//     body.classList.toggle('lock');
// });

// //Закрытие меню-бургера - при клике по контенту ниже;
// burger_overlay.addEventListener('click', function () {
//     console.log('клик по документу - скрыть меню');
//     header_body.classList.remove('header__active');
//     burger_overlay.classList.remove('overlay-show');
//     body.classList.toggle('lock');
// });
 /*------------------------------------------------------
       fixed menu
    ------------------------------------------------------*/
    $(document).ready(function() {
        //var h = viewportToPixels('50vh');
        
        var header = $('.header'),
            nav = $('.header__body'),
            headerHeight = header.height(),
            navHeight = nav.height(),
            h = headerHeight;
            // h = headerHeight + navHeight;

        $(window).on('resize', function() {
            headerHeight = header.height(),
                navHeight = nav.height(),
                h = headerHeight;
                // h = headerHeight + navHeight;
        });

        // console.log(h);
        
        $(document).on("scroll", function() {

            if ($(document).scrollTop() > h) {
                $(".header__body-fixed").addClass("header__body-fixed--show");
            } else {
                $(".header__body-fixed").removeClass("header__body-fixed--show");
            }
        });
    });


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
(function () {

    var TABLET_WIDTH = 768;
    var DESKTOP_WIDTH = 1150;
    var SMALL_PIN = {
        width: 57,
        height: 53
    };

    var BIG_PIN = {
        width: 113,
        height: 106
    };


    //
    function debounce(f, ms) {
        var timer = null;

        return function (cb) {
            var onComplete = function () {
                f.apply(this, cb);
                timer = null;
            };
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(onComplete, ms);
        };
    }

    //Инициализируем область карты
    window.initialize = function () {
        var viewport = document.documentElement.clientWidth || window.innerWidth;

        var mapCenter = viewport < DESKTOP_WIDTH ? {
            lat: 50.428805,
            lng: 30.538487
        } : {
            lat: 50.429205,
            lng: 30.534900
        };

        var pinCenter = viewport < TABLET_WIDTH ? {
            lat: 50.428499,
            lng: 30.538487
        } : {
            lat: 50.428499,
            lng: 30.538487
        };

        var pinSize = viewport < TABLET_WIDTH ? SMALL_PIN : BIG_PIN;

        var option = {
            center: mapCenter,
            zoom: 17,
            disableDefaultUI: false,
            content: popupContent,
            // Стилизируем карту
            styles:

                [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "color": "#333739"
                            },
                            {
                                "weight": 0.8
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#68b738"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#2ecc71"
                            },
                            {
                                "lightness": -7
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "poi.government",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "poi.medical",
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#2ecc71"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#333739"
                            },
                            {
                                "weight": 0.3
                            },
                            {
                                "lightness": 10
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#68b738"
                            },
                            {
                                "lightness": -28
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#68b738"
                            },
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": -15
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#68b738"
                            },
                            {
                                "lightness": -18
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#2ecc71"
                            },
                            {
                                "lightness": -34
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#333739"
                        }]
                    }
                ]

        }

        //Подключаем карту
        var map = new google.maps.Map(document.getElementById('map'), option);




        // Стилизируем и подключаем маркер
        var image = {
            url: "img/8/map_tag.png",
            scaledSize: pinSize
        };

        var marker = new google.maps.Marker({
            position: pinCenter,
            map: map,
            title: "Cat Energy — функциональное питание для котов",
            icon: image,
            animation: google.maps.Animation.BOUNCE
        });
        
        //Остановка маркера при клике по нему
        marker.addListener('click', function () {
            marker.setAnimation(null);
        });




        // Инициализируем информационное окно
        var popupContent = '<p class="map-content">Cat Energy — функциональное питание для котов</p>' + '<br>' +
        '<p class="map-content">Режим работы: <span class="map-time">9:00 — 21:00</span></></p>';

        var infowindow = new google.maps.InfoWindow({
            content: popupContent
        });

        // открыто сразу
        // infowindow.open(map, marker);

        // открывается по клику на маркер
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        // Продожение анимации маркера после закрытия инф. окна
        google.maps.event.addListener(infowindow,'closeclick',function(){
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });
    };

    // function toggleBounce() {
    //     if (marker.getAnimation() !== null) {
    //         marker.setAnimation(null);
    //     } else {
    //         marker.setAnimation(google.maps.Animation.BOUNCE);
    //     }
    // };

    window.addEventListener("resize", debounce(initialize, 1000));
    window.addEventListener("load", debounce(initialize, 0));

})();
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
var form = document.querySelector('.form');
//Модальное окно - "ФОРМА успешно отправлена"
var modal_form = document.querySelector('.modal-form');
var modal_form_close = document.querySelector('.modal-form__close');
var modal_overlay = document.querySelector('.modal__overlay');


// Отмена отправки формы, показ модального окна
form.onsubmit = function(evt) {
    evt.preventDefault();
    console.log('отмена отправки формы');
    modal_overlay.classList.add('modal-show');
    modal_form.classList.add('modal-show');
    modal_form.classList.add('modal-bounce');
    body.classList.toggle('lock');
}

// Закрытие модального окна - "ФОРМА успешно отправлена"
 
modal_form_close.addEventListener('click', function () {
    // console.log('форма отправлена - закрыть попап');
    modal_form.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    body.classList.remove('lock');
});

modal_overlay.addEventListener('click', function () {
    // console.log('закрыть попап - клик по оверлею');
    modal_form.classList.remove('modal-show');
    modal_overlay.classList.remove('modal-show');
    body.classList.remove('lock');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (modal_form.classList.contains('modal-show')) {
            evt.preventDefault();
            modal_form.classList.remove('modal-show');
            modal_overlay.classList.remove('modal-show');
            modal_form.classList.remove('modal-error');
            body.classList.remove('lock');
        }
    }
});


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
// var form_link = document.querySelector('.hit__button');
// var form_add_close = document.querySelector('.modal-form__button');
// var modal_form = document.querySelector('.modal-form');
// var modal_overlay = document.querySelector('.modal__overlay');

// form_link.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     console.log('клик по кнопке "заказать"');
//     modal_overlay.classList.add('modal-show');
//     modal_form.classList.add('modal-show');
//     modal_form.classList.add('modal-form-bounce');
// });

// form_add_close.addEventListener('click', function () {
//     console.log('добавить в корзину - закрыть попап')
//     modal_form.classList.remove('modal-show');
//     modal_overlay.classList.remove('modal-show');
// });

// modal_overlay.addEventListener('click', function () {
//     console.log('закрыть попап - клик по оверлею')
//     modal_form.classList.remove('modal-show');
//     modal_overlay.classList.remove('modal-show');
// });

// window.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === 27) {
//         if (modal_form.classList.contains('modal-show')) {
//             evt.preventDefault();
//             modal_form.classList.remove('modal-show');
//             modal_overlay.classList.remove('modal-show');
//             modal_form.classList.remove('modal-error');
//         }
//     }
// });
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

//  /*------------------------------------------------------
//        Добавление подчеркивания пункта меню
//     ------------------------------------------------------*/
// var header_link = document.querySelectorAll('.header__link');
// var mn = document.querySelector('.header__list');

// // var mn_fixed = document.querySelector('.header__list-fixed');

// // header_link.addEventListener('click', function () {
// //     console.log('нажатие по пункту меню');
// //     header_link.classList.add('header__link--active');
// // });

// //Добавление подчеркивания пункта меню
// for (var i = 0; i < mn.children.length; i++) {
//     mn.children[i].querySelector('a').onclick = addp;
// };
       
// function addp () {
//     for (var i = 0; i < mn.children.length; i++) {
//         mn.children[i].querySelector('a').classList.remove('header__link--active');
//         this.classList.add('header__link--active');
//     }
// };
 

// // // Добавление подчеркивания пункта фиксированного меню
// // for (var i = 0; i < mn_fixed.children.length; i++) {
// //     mn_fixed.children[i].querySelector('a').onclick = addp;
// // };
       
// // function addp () {
// //     for (var i = 0; i < mn_fixed.children.length; i++) {
// //         mn_fixed.children[i].querySelector('a').classList.remove('header__link--active');
// //         this.classList.add('header__link--active');
// //     }
// // };

// //Эксперимент по добавлению подчеркивания сразу в две навигации
// // for (var i = 0; i < mn.length; i++) {
// //     mn[i].addEventListener('click', function () {
// //         for (var i = 0; i < mn.children.length; i++) {
// //             mn.children[i].querySelector('a').onclick = addp;
// //         };
// //     });
// // };


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 121, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});