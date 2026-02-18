(function ($) {
    "use strict";

    // Landing: logo + SMMMS animation, after 2s fade out and show home
    var landing = document.getElementById('smmms-landing');
    if (landing) {
        setTimeout(function () {
            landing.classList.add('smmms-landing-done');
            setTimeout(function () {
                landing.style.display = 'none';
            }, 520);
        }, 2000);
    }

    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

