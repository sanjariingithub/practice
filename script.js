jQuery(function ($) {

    'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1099"
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
           
        }
    });
    

});

