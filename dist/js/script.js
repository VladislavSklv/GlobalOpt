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
        modalFilter = document.querySelectorAll('.filter'),
        catalogBox = document.querySelectorAll('.catalog-box'),
        catalogInfo = document.querySelectorAll('.catalog-info'),
        btnPriceBack = document.querySelectorAll('.button_back'),
        btnPriceInfo = document.querySelectorAll('.button_price'),
        thanking = document.getElementById('thanking'),
        forms = document.querySelectorAll('.feed-form');

    hamburger.addEventListener('click', function(){
        if (hamburger.classList.contains('hamburger_active') == false){
            hamburger.classList.add('hamburger_active');
            nav.classList.add('nav_active');
        } else {
            hamburger.classList.remove('hamburger_active');
            nav.classList.remove('nav_active');
        }
    });

    function fadeOutItemByZIndex(className){
        className.forEach(function(item) {
            item.style.zIndex = '-10';
        });
    }
    fadeOutItemByZIndex(animate__movLeft);
    fadeOutItemByZIndex(animate__movRight);

    function fadeOutItemByPositionAbs(className){
        className.forEach(function(item) {
            item.style.position = 'absolute';
            item.style.left = '-100%';
        });
    }
    fadeOutItemByPositionAbs(workItem);
    fadeOutItemByPositionAbs(schemeItem);

    function addCSSAnimation(selectorName, removedCSS, CSSAnimation){
        $(window).scroll(function (){
            $(selectorName).each(function (){
                let imagePos = $(this).offset().top;
                let topOfWindow = $(window).scrollTop();
                if (imagePos < (topOfWindow+300)) {
                    $(this).css(removedCSS);
                    $(this).addClass(CSSAnimation);
                }
            });
        });
    }
    let zIndex = {'z-index': '2'},
        postionAbs = {
            'position': 'relative',
            'left': '0'
        };
    addCSSAnimation('.animate__movLeft', zIndex,'animate__fadeInLeft');
    addCSSAnimation('.animate__movRight', zIndex,'animate__fadeInRight');
    addCSSAnimation('.work__item', postionAbs,'animate__fadeInUp');
    addCSSAnimation('.scheme__item', postionAbs,'animate__fadeInLeftBig');

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
    function showModalWindow (button, i){
        button.addEventListener('click', function(){
            modalFilter[i].classList.add('filter_active');
            $(modalFilter[i]).fadeIn();
        });
    }
    showModalWindow(buttonFooter, 0);
    showModalWindow(buttonHeader, 0);
    showModalWindow(buttonHeader2, 0);
    showModalWindow(buttonPromo, 1);

    closeBtn.forEach(function(item){
        item.addEventListener('click', function(){
            modalFilter.forEach(function(i){
                $('#thanking').fadeOut();
                $(i).fadeOut(function(){
                    i.classList.remove('filter_active');
                });
            });
        });
    });
    // Prices
    btnPriceInfo.forEach(function(item, i){
        item.addEventListener('click', function(){
            catalogBox[i].classList.remove('catalog-box_active');
            catalogInfo[i].classList.add('catalog-info_active');
        });
    });
    btnPriceBack.forEach(function(item, i){
        item.addEventListener('click', function(){
            catalogBox[i].classList.add('catalog-box_active');
            catalogInfo[i].classList.remove('catalog-info_active');
        });
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
    //Mailer

    $('.feed-form_notext').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanking').fadeIn();
            $('.feed-form_notext').trigger('reset');
        });
        return false;
    });
    $('.feed-form_textarea').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart2.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanking').fadeIn();
            $('.feed-form_textarea').trigger('reset');
        });
        return false;
    });
});