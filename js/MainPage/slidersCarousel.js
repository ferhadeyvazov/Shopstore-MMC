// ===============SLICK SLIDER============================
$(document).ready(function () {
    $('.category__grids').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 2700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    var saj = $('.ferhad-2');
    var nonloop = $(".nonloop");

    saj.slick({
        autoplay: true
    });
    nonloop.slick(
        {
            autoplay: true,
            autoplaySpeed: 3600
        }
    );

    var satLiderCarousel = $('.satLider__Carousel');
    satLiderCarousel.slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
