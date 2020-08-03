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

