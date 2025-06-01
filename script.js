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
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.mobile-hamburger').click(function () {
        $('.mobile-nav').toggleClass("show")
    });

});

console.log("hello world")