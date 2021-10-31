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
    

})(jquery);
