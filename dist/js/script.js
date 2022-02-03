$(document).ready(function(){

    let animate__movLeft = document.querySelectorAll('.advantages-item'),
        animate__movRight = document.querySelectorAll('.advantages-item'),
        hamburger = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav'),
        workItem = document.querySelectorAll('.work__item');

    hamburger.addEventListener('click', function(){
        if (hamburger.classList.contains('hamburger_active') == false){
            hamburger.classList.add('hamburger_active');
            nav.classList.add('nav_active');
        } else {
            hamburger.classList.remove('hamburger_active');
            nav.classList.remove('nav_active');
        }
    });

    animate__movLeft.forEach(function(item) {
        item.style.zIndex = '-10';
    });

    animate__movRight.forEach(function(item) {
        item.style.zIndex = '-10';
    });

    workItem.forEach(function(item) {
        item.style.position = 'absolute';
        item.style.left = '-100%';
    });

    $(window).scroll(function (){
        $('.animate__movLeft').each(function (){
            let imagePos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            if (imagePos < (topOfWindow+300)) {
                $(this).css('z-index', '2');
                $(this).addClass('animate__fadeInLeft');
            }
        });
    });

    $(window).scroll(function (){
        $('.animate__movRight').each(function (){
            let imagePos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            if (imagePos < (topOfWindow+300)) {
                $(this).css('z-index', '2');
                $(this).addClass('animate__fadeInRight');
            }
        });
    });

    $(window).scroll(function (){
        $('.work__item').each(function (){
            let imagePos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            if (imagePos < (topOfWindow+300)) {
                $(this).css({
                    'position': 'relative',
                    'left': '0'
                });
                $(this).addClass('animate__fadeInUp');
            }
        });
    });
});