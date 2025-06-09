$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});


$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        infinite: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

function togglemenu() {
    var $menu = $('.mobile-nav');

    if ($menu.hasClass('show')) {
        $menu.removeClass('show');
        setTimeout(function () {
            $menu.css('display', 'none');
        }, 300);
    } else {
        $menu.css('display', 'flex');
        setTimeout(function () {
            $menu.addClass('show');
        }, 10);
    }
}