var swiper = new Swiper(".serSwiper", {
    slidesPerView: "auto",
    spaceBetween: 21
});

var swiper = new Swiper(".desSwiper", {
    slidesPerView: 3,
    spaceBetween: 21,
    navigation: {
        nextEl: ".destination .next-btn",
        prevEl: ".destination .pre-btn",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 14.4,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 21,
        },
        1000: {
            slidesPerView: 3,
        },
        1200: {
            spaceBetween: 31,
        },
    }
});

$(document).ready(function(){
    // back to top
    $(window).scroll(function(){
        var showAfter = 100;
        if ($(this).scrollTop() > showAfter ) { 
            $('.back-to-top').fadeIn();
        } else { 
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    // open menu mobile
    $('.burger').click(function(){
        if (!$('header').hasClass('show-mb')){
            $('html, body').animate({scrollTop : 0},800);
        }
        $('header').toggleClass('show-mb');
        $('body').toggleClass('o-hidden');
        return false;
    });
    $('.overlay').click(function(){
        $('.burger').click();
        return false;
    });
});