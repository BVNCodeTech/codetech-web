// Used Jquery for this. I know,it sucks but 🤷‍♂️. Neither do I have 
// the time to use a framework nor enough experience

(function ($) {
    "use strict";

    //--------------------------------------------------
    // Preloader
    //--------------------------------------------------
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow');
        RevealLoad();
        startAnim();
        $('.preloader').removeClass()
    })

    //--------------------------------------------------
    // Animation Start
    //--------------------------------------------------
    function startAnim() {
        TweenMax.from('.logo', 1, {
            y: '100',
            autoAlpha: 0,
            delay: '.3',
            ease: Power4.easeInOut,
        })
        TweenMax.from('.toggle-btn', 1, {
            y: '100',
            delay: '.3',
            autoAlpha: 0,
            ease: Power4.easeInOut,
        })
        TweenMax.from('.bg-right', 1, {
            x: 100,
            ease: Power4.easeInOut,
            delay: '.3',
        })
        TweenMax.from('.bg-about', 1, {
            x: 100,
            ease: Power4.easeInOut,
            delay: '.3',
        })

        TweenMax.from('.scr', 1, {
            y: '100',
            ease: Power4.easeInOut,
            autoAlpha: 0,
        })

        TweenMax.from('.scrolls', 1, {
            y: '100',
            delay: 1,
            ease: Power4.easeInOut,
            autoAlpha: 0,
        })


        TweenMax.to('.menu', 0, {
            autoAlpha: 0,
        })


    }


    //--------------------------------------------------
    // Parralax
    //--------------------------------------------------
    var headermove = $('#headmove').get(0);
    var parallaxInstance = new Parallax(headermove, {
        relativeInput: true,
        scalarX: 14,
        hoverOnly: false,
    });


    //--------------------------------------------------
    // Web Load
    //--------------------------------------------------
    function RevealLoad() {
        var loadTL = new TimelineMax();
        var block1 = $('.block-1');
        var block2 = $('.block-2');
        var logo = $('.logo-load');

        loadTL
            .to(block1, 0.5, {
                height: '0',
                delay: '0'
            })
            .to(block2, 0.5, {
                height: '0',
            })
            .to(logo, 0, {
                autoAlpha: 0,
                delay: '-0.4',
            })

        loadTL.play();
    }

    function HideLoad() {
        var loadTL = new TimelineMax();
        var block1 = $('.block-1');
        var block2 = $('.block-2');
        var logo = $('.logo-load');

        loadTL
            .to(block1, 0.5, {
                height: '100%',
                delay: '0'
            })
            .to(block2, 0.5, {
                height: '100%',
            })
            .to(logo, 0, {
                autoAlpha: 1,
                delay: '-0.5'
            })

        loadTL.play();
    }

    $('.load-spiral').on('click', function (e) {
        e.preventDefault();
        setTimeout(function (url) {
            window.location = url
        }, 1000, this.href);
        HideLoad();
    });


    //--------------------------------------------------
    // Animation on navbar scrolling background
    //--------------------------------------------------
    var wind = $(window);

    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop();

        if (bodyScroll > 300) {

            TweenMax.to('.scr', .5, {
                autoAlpha: 0,
                y: '100',

            })

            TweenMax.to('.scrolls', .5, {
                autoAlpha: 0,
                y: '100',

            })


        } else {
            TweenMax.to('.scr', 1, {
                autoAlpha: 1,
                y: '00',

            })

            TweenMax.to('.scrolls', .5, {
                autoAlpha: 1,
                y: '0',

            })

        }
    });


    $('.img-folio').on('mouseenter', function () {
        TweenMax.to(this, 0.4, {
            y: '-30',
        })
    });

    $('.img-folio').on('mouseleave', function () {
        TweenMax.to(this, 0.4, {
            y: '1',
        })
    });


    luxy.init({
        wrapper: '#spiral',
        wrapperSpeed: '0.07',
    });
})(jquery);
