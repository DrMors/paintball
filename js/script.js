var mobileMenuActiveClass = 'nav_mobile-active'

$('.burger_btn').on('click', function () {
    $('.nav_mobile').addClass(mobileMenuActiveClass)
});


$('.nav_mobile__bg').on('click', function () {
    $('.nav_mobile').removeClass(mobileMenuActiveClass)
});


$('.main_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: true,
    prevArrow: '<button class="main_slider__arrow left"><img src="Paintball/arrow-left.png" alt="arrow left"></button>',
    nextArrow: '<button class="main_slider__arrow right"><img src="Paintball/arrow-left.png" alt="arrow right"></button>',
    pauseOnHover: false
});


$('.head_nav__link').on('click', function (e) {
    e.preventDefault()

    $('html').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    }, 500)
});

$('.btn_form').on('click', function (e) {
    e.preventDefault()

    $('html').animate({
        scrollTop: $($(this).attr('data-href')).offset().top,
    }, 500)
});

$('.photos_slider').slick({
    dots: true,
    prevArrow: '<button class="photos_slider__arrow left"><img src="Paintball/icons8-forward-48.png" alt="arrow left"></button>',
    nextArrow: '<button class="photos_slider__arrow right"><img src="Paintball/icons8-forward-48.png" alt="arrow right"></button>',
    infinite: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

new WOW().init();
