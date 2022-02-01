$(document).ready(function(){

    $('.animate__movLeft').fadeOut();
    $('.animate__movRight').fadeOut();

    $(window).scroll(function (){
        $('.animate__movLeft').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < (topOfWindow - 600)) {
                $(this).fadeIn();
                $(this).addClass('animate__fadeInLeft');
            }
        });
    });

    $(window).scroll(function (){
        $('.animate__movRight').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < (topOfWindow - 600)) {
                $(this).fadeIn();
                $(this).addClass('animate__fadeInRight');
            }
        });
    });
});