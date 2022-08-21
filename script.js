jQuery(function ($) {

    'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1099"
    });

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            }
           
        }
    });
    

});

