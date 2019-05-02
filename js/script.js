var mobileMenuActiveClass = 'nav_mobile-active'

$('.burger_btn').on('click', function () {
    $('.nav_mobile').addClass(mobileMenuActiveClass)
})


$('.nav_mobile__bg').on('click', function () {
    $('.nav_mobile').removeClass(mobileMenuActiveClass)
})


$('.main_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: true,
    prevArrow: '<button class="main_slider__arrow left"><img src="Paintball/arrow-left.png" alt="arrow left"></button>',
    nextArrow: '<button class="main_slider__arrow right"><img src="Paintball/arrow-left.png" alt="arrow right"></button>',
    pauseOnHover: false
})


$('.head_nav__link').on('click', function (e) {
    e.preventDefault()
  
    $('html').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    }, 500)
})
