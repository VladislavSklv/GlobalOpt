$(document).ready(function(){

    let animate__movLeft = document.querySelectorAll('.advantages-item'),
        animate__movRight = document.querySelectorAll('.advantages-item'),
        hamburger = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav'),
        workItem = document.querySelectorAll('.work__item'),
        schemeItem = document.querySelectorAll('.scheme__item'),
        buttonHeader = document.querySelector('.button_1200px'),
        buttonHeader2 = document.querySelector('.button_more1200px'),
        buttonFooter = document.querySelector('.button_footer'),
        buttonPromo = document.querySelector('.button_big'),
        closeBtn = document.querySelectorAll('.modal__close'),
        modalFilter = document.querySelectorAll('.filter');

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

    schemeItem.forEach(function(item){
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

    $(window).scroll(function (){
        $('.scheme__item').each(function (){
            let imagePos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            if (imagePos < (topOfWindow+300)) {
                $(this).css({
                    'position': 'relative',
                    'left': '0'
                });
                $(this).addClass('animate__fadeInLeftBig');
            }
        });
    });

    //slick slider
    $('.slider').slick({
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        /* variableWidth: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.png" alt="<"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.png" alt=">"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: true,
                dots: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                dots: false,
                centerPadding: '0',
                slidesToShow: 1
              }
            }
        ]
    });
    // Modals

    buttonFooter.addEventListener('click', function(){
        modalFilter[0].classList.add('filter_active');
    });

    buttonHeader.addEventListener('click', function(){
        modalFilter[0].classList.add('filter_active');
    });

    buttonHeader2.addEventListener('click', function(){
        modalFilter[0].classList.add('filter_active');
    });

    buttonPromo.addEventListener('click', function(){
        modalFilter[1].classList.add('filter_active');
    });

    closeBtn.forEach(function(item){
        item.addEventListener('click', function(){
            modalFilter.forEach(function(i){
                i.classList.remove('filter_active');
            });
        });
    });

    //Validation 

    $('#consultation form').validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Ваш email должен быть формата name@domain.com"
            },
            phone: "Пожалуйста, введите свой телефон"
        }
    });
    $('#modalCall').validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Ваш email должен быть формата name@domain.com"
            },
            phone: "Пожалуйста, введите свой телефон"
        }
    });
    $('#modalOrder').validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Ваш email должен быть формата name@domain.com"
            },
            phone: "Пожалуйста, введите свой телефон"
        }
    });
    $('#questions form').validate({
        rules:{
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Ваш email должен быть формата name@domain.com"
            },
            phone: "Пожалуйста, введите свой телефон",
            textarea: {
                required: "Пожалуйста, введите свой вопрос",
                minlength: jQuery.validator.format("Введите не меньше {0} символов")
            }
        }
    });

    //Smooth scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $('a').click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});