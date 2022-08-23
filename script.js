jQuery(function ($) {

    'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1099"
    });

    $('.owl-two').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:0
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('.owl-three').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:0
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
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

