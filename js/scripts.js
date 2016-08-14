$(document).ready(function() {


    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


    var countPortfolioFor = 0;
    var countPortfolio =  $(".portfolio .portfolio-item").length;







    //  Preloader

    var angelZ = 0;
    var rotate;

    $(window).on('load', function () {

        // rotate = setInterval(function() {

        //     if(angelZ >= 360) {

        //         clearInterval(rotate);

        //     }

        //     console.log(angelZ);

        //     angelZ = angelZ + 10;

        //     $(".preload-logo").css({

        //         "transform": "rotateY("+ angelZ +"deg)",
        //         "-webkit-transform": "rotateY("+ angelZ +"deg)"

        //     });

        // }, 35);

        setTimeout(function() {

            $(".preload-bg").fadeOut(1000);

        }, 1000);

    });




    getHeaderPosition();

    getPromoBlockHeight();

    getPhotosSize();

    getScrollToTopBtn();

    $(document).scroll(function() {

        getHeaderPosition();

        getScrollToTopBtn();

    });


    $(window).resize(function() {

        getHeaderPosition();

        getPhotosSize();

    });


    //  Определение размера фото в портфолио

    function getPhotosSize() {

        for ( countPortfolioFor = 0; countPortfolioFor <= countPortfolio - 1; countPortfolioFor++) {

            $(".photo-img:eq("+ countPortfolioFor +")").css({ 
                                                            "width" : $(".portfolio .portfolio-item:eq("+ countPortfolioFor +")").width() + "px",
                                                            "height" : "auto" 
                                                        });

            $(".portfolio-item:eq("+ countPortfolioFor +") .mask-row-top").css({
                "height" : $(".portfolio-item:eq("+ countPortfolioFor +")").height() * 0.6 + "px"
            });

            $(".portfolio-item:eq("+ countPortfolioFor +") .mask-row-bottom").css({
                "height" : $(".portfolio-item:eq("+ countPortfolioFor +")").height() * 0.4 + "px"
            });

        }

    }


    //  Вызов модального окна обратной связи

    $(".call-back").click(function() {

        $(".popup-section").fadeIn(300);

        $(".popup-section .form-box").css({"margin-top" : ( $(window).height() - $(".popup-section .form-box").height() ) / 2 + "px" });

    });

    $(".popup-bg, .close-form-btn").click(function() {

        $(".popup-section").fadeOut(300);

    });


    // Navigation

    $(".respmenubtn").click(function() {

        $(".nav-box").toggleClass("respnavtopcoor");
        $(".respmenubtn").toggleClass("respmenubtn-active");

    });



    // Navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900);
                    return false;
                }
            }



        });
    });


    // Определение активного пункта меню 

    $(".nav-link").click(function() {

            $(".nav-link").removeClass("active");

            $(this).addClass("active");

    });



    // Определение высоты промоблока

    function getPromoBlockHeight() {

        $(".promo-section").height($(window).height() - $(".header").height());

    }


    // Определения стилей шапки сайта прискролле

    function getHeaderPosition() {

        if( $(window).scrollTop() >= $(".header").height() ) {

            $(".header").addClass("fix");

        } else {

            $(".header").removeClass("fix");

        }

    }


    // При клике на кнопку " Вверх " подняться на вверхнюю позицию

    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    // Показать - скрыть кнопку " Вверх "

    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $(".header-bg").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }


});