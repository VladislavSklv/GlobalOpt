$(document).ready(function(){

    let advantagesItem = document.querySelectorAll('.advantages-item'),
        hamburger = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function(){
        if (hamburger.classList.contains('hamburger_active') == false){
            hamburger.classList.add('hamburger_active');
            nav.classList.add('nav_active');
        } else {
            hamburger.classList.remove('hamburger_active');
            nav.classList.remove('nav_active');
        }
    });

    advantagesItem.forEach(function(item) {
        item.style.display = 'none';
    });

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