$(document).ready(function() {
    // Swiper: Slider
    new Swiper('.client_says', {
        loop: true,
        speed:1000,
            autoplay: {
            delay: 2000,
        },

        pagination: {
            el: '.cl_pagination',
            type: 'bullets',
            },

        slidesPerView: 1,
        paginationClickable: true,

        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    // partner logo Slider
    new Swiper('.partner_logo', {
        loop: true,
        slidesPerView:3,
        spaceBetween: 10,
        paginationClickable: false,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
        // when window width is >= 480px
            320: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 768px
            768: {
            slidesPerView: 5,
            },
        }             
    });

    //// TOP MEGA MENU SCRIPT 
    $('.head_menu_services_btn').click(function (){ 
        $('.head_menu_icon').toggleClass('menu_close');
        $('.top_mega_menu').toggleClass('menu_show');
    });

    $('.head_menu_technology_btn').click(function (){ 
        $('.head_menu_icon').removeClass('menu_close');
        $('.top_mega_menu').removeClass('menu_show');
    });


    // //// TOP MEGA MENU SCRIPT ON SERVICES
    // $('.head_menu_services_btn').click(function (){ 
    //     $('.head_menu_icon').toggleClass('menu_close');
    //     $('.top_mega_menu').toggleClass('menu_show');
    // });

    // //// EXPLOER YOUR SERVICES
    // $('.head_menu_exploer_services_btn').click(function (){ 
    //     $('.head_menu_icon').toggleClass('menu_close');
    //     $('.top_mega_menu').toggleClass('menu_show');
    // });

    // header sticky js

    $(function(){

        createSticky($(".santophy_header"));

    });

    function createSticky(sticky) {

        if (typeof sticky !== "undefined") {

            var pos = sticky.offset().top,
                win = $(window);
            
            win.on("scroll", function() {
                win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
            });     
        }
    }
});

