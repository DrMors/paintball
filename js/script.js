var mobileMenuActiveClass = 'nav_mobile-active'


$('.burger_btn').on('click', function () {
    $('.nav_mobile').addClass(mobileMenuActiveClass)
});


$('.nav_mobile__bg').on('click', function () {
    $('.nav_mobile').removeClass(mobileMenuActiveClass)
});


$('.main_slider').slick({
    speed: 700,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: true,
    prevArrow: '<button class="main_slider__arrow left"><img src="Paintball/arrow-left.png" alt="arrow left"></button>',
    nextArrow: '<button class="main_slider__arrow right"><img src="Paintball/arrow-left.png" alt="arrow right"></button>',
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }
    ]
});

function makeScroller (el, attr) {
    $(el).on('click', function (e) {
        e.preventDefault()
    
        $('html').animate({
            scrollTop: $($(this).attr(attr)).offset().top
        }, 500)
    })
}

makeScroller('.head_nav__link', 'href')
makeScroller('.btn_form', 'data-href')
makeScroller('.toTop', 'data-href')


$('.photos_slider').slick({
    dots: true,
    centerPadding: '60px',
    speed: 300,
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
        }
    ]
});

new WOW().init();

// стрелочка вврех

var toTop = '#toTop'

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 800) {

            $(toTop).fadeIn();

        } else {

            $(toTop).fadeOut();

        }

    });


});