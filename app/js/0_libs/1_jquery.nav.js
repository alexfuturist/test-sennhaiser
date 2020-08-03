//  /*------------------------------------------------------
//        Добавление подчеркивания пункта меню  - jQuery One Page Nav Plugin
//     ------------------------------------------------------*/
 
/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;
(function ($, window, document, undefined) {

	// our plugin constructor
	var OnePageNav = function (elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('plugin-options');
		this.$win = $(window);
		this.sections = {};
		this.didScroll = false;
		this.$doc = $(document);
		this.docHeight = this.$doc.height();
	};

	// the plugin prototype
	OnePageNav.prototype = {
		defaults: {
			navItems: 'a',
			currentClass: 'current',
			changeHash: false,
			easing: 'swing',
			filter: '',
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			begin: false,
			end: false,
			scrollChange: false
		},

		init: function () {
			// Introduce defaults that can be extended either
			// globally or using an object literal.
			this.config = $.extend({}, this.defaults, this.options, this.metadata);

			this.$nav = this.$elem.find(this.config.navItems);

			//Filter any links out of the nav
			if (this.config.filter !== '') {
				this.$nav = this.$nav.filter(this.config.filter);
			}

			//Handle clicks on the nav
			this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

			//Get the section positions
			this.getPositions();

			//Handle scroll changes
			this.bindInterval();

			//Update the positions on resize too
			this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

			return this;
		},

		adjustNav: function (self, $parent) {
			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
			$parent.addClass(self.config.currentClass);
		},

		bindInterval: function () {
			var self = this;
			var docHeight;

			self.$win.on('scroll.onePageNav', function () {
				self.didScroll = true;
			});

			self.t = setInterval(function () {
				docHeight = self.$doc.height();

				//If it was scrolled
				if (self.didScroll) {
					self.didScroll = false;
					self.scrollChange();
				}

				//If the document height changes
				if (docHeight !== self.docHeight) {
					self.docHeight = docHeight;
					self.getPositions();
				}
			}, 250);
		},

		getHash: function ($link) {
			return $link.attr('href').split('#')[1];
		},

		getPositions: function () {
			var self = this;
			var linkHref;
			var topPos;
			var $target;

			self.$nav.each(function () {
				linkHref = self.getHash($(this));
				$target = $('#' + linkHref);

				if ($target.length) {
					topPos = $target.offset().top;
					self.sections[linkHref] = Math.round(topPos);
				}
			});
		},

		getSection: function (windowPos) {
			var returnValue = null;
			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

			for (var section in this.sections) {
				if ((this.sections[section] - windowHeight) < windowPos) {
					returnValue = section;
				}
			}

			return returnValue;
		},

		handleClick: function (e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var newLoc = '#' + self.getHash($link);

			if (!$parent.hasClass(self.config.currentClass)) {
				//Start callback
				if (self.config.begin) {
					self.config.begin();
				}

				//Change the highlighted nav item
				self.adjustNav(self, $parent);

				//Removing the auto-adjust on scroll
				self.unbindInterval();

				//Scroll to the correct position
				self.scrollTo(newLoc, function () {
					//Do we need to change the hash?
					if (self.config.changeHash) {
						window.location.hash = newLoc;
					}

					//Add the auto-adjust on scroll back in
					self.bindInterval();

					//End callback
					if (self.config.end) {
						self.config.end();
					}
				});
			}

			e.preventDefault();
		},

		scrollChange: function () {
			var windowTop = this.$win.scrollTop();
			var position = this.getSection(windowTop);
			var $parent;

			//If the position is set
			if (position !== null) {
				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();

				//If it's not already the current section
				if (!$parent.hasClass(this.config.currentClass)) {
					//Change the highlighted nav item
					this.adjustNav(this, $parent);

					//If there is a scrollChange callback
					if (this.config.scrollChange) {
						this.config.scrollChange($parent);
					}
				}
			}
		},

		scrollTo: function (target, callback) {
			var offset = $(target).offset().top;

			//задаем смещение на высоту фиксированной шапки
			$('html, body').animate({
				scrollTop: offset - 65
			}, this.config.scrollSpeed, this.config.easing, callback);
		},

		unbindInterval: function () {
			clearInterval(this.t);
			this.$win.unbind('scroll.onePageNav');
		}
	};

	OnePageNav.defaults = OnePageNav.prototype.defaults;

	$.fn.onePageNav = function (options) {
		return this.each(function () {
			new OnePageNav(this, options).init();
		});
	};

})(jQuery, window, document);



//  /*------------------------------------------------------
//        Добавление подчеркивания пункта меню (настройки к плагину)
//     ------------------------------------------------------*/

	//Для спадающего (fixed) меню
$('.header__menu').onePageNav({
	currentClass: 'header__item--active',
	changeHash: false,
	scrollSpeed: 1500,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function () {
		//I get fired when the animation is starting

	},
	end: function () {
		//I get fired when the animation is ending

	},
	scrollChange: function ($currentListItem) {}

});



/*------------------------------------------------------
      animation scroll (для кнопок и статичного меню)
   ------------------------------------------------------*/
$(document).ready(function () {

	//Для логотипа
	$('.header__logo').click(function (e) {
		var el = e.currentTarget;
		aScroll(el);
	});

	$('.page-footer__logo').click(function (e) {
		var el = e.currentTarget;
		aScroll(el);
	});


	//Для кнопки "ПОДОБРАТЬ ПРОГРАММУ"
	$('.header__button').click(function (e) {
		var el = e.currentTarget;
		event.preventDefault();
		var timeout = 350;
		
		//Пауза перед скроллом
		setTimeout(function () {
			aScroll(el);
		}, timeout);
	});

	// $('.header__button').click(function (e) {
	//     var el = e.currentTarget;
	//     aScroll(el);
	// });


	//Для кнопок ПОХУДЕНИЕ/НАБОР МАССЫ
	$('.programs__item-link').click(function (e) {
		var el = e.currentTarget;
		aScroll(el);
	});

	//для статичного меню
	$(".header__menu-static a").click(function (e) {
		var el = e.currentTarget;
		aScroll(el);
	});

	function aScroll(el) {
		//отменяем стандартную обработку нажатия по ссылке

		//забираем идентификатор бока с атрибута href
		var id = $(el).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top - 65
		}, 1500);
	}


	//для кнопки - вниз
	$('.header__button-down').click(function (e) {
		var elf = e.currentTarget;
		aScroll(elf);

		function aScroll(elf) {
			//отменяем стандартную обработку нажатия по ссылке
	
			//забираем идентификатор бока с атрибута href
			var id = $(elf).attr('href'),
	
				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;
	
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({
				scrollTop: top + 3
			}, 1200);
		}
	});

	
});