let carouse = document.querySelector(".splide");
let splideAlt = document.querySelector(".splide__Alt");
let kartSplide = document.querySelector(".kart__Splide");
let altCarousel = document.querySelector(".ekstra__carousel");

let main = new Splide(carouse, {
    type: 'fade',
    heightRatio: 1,
    pagination: false,
    arrows: false,
    cover: true,

    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    speed: 800
});

var thumbnails = new Splide(splideAlt, {
    rewind: true,
    fixedWidth: 66,
    fixedHeight: 66,
    isNavigation: true,
    gap: 5,
    focus: 'center',
    pagination: false,
    cover: true,
    
    arrows: false,
    rewindSpeed: 800,
    lazyLoad: 'nearby',
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints: {
        640: {
            perPage: 1,
            fixedWidth: 66,
            fixedHeight: 66,
        },
    }
});

let kartCarousel = new Splide(kartSplide, {
    rewind: false,
    type: 'loop',
    arrows: false,
    isNavigation: false,
    pagination: false,
    autoplay: true,
    interval: 2500,
    easing: "ease-out"
});

const ekstraCarousel = new Splide(altCarousel, {
    type: 'loop',
    drag: 'free',
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 2500,
    gap: ".2em",
    autoScroll: {
        speed: 2,
    },
    perPage: 5,
    breakpoints: {
        628: {
            perPage: 1,
        },
        885: {
            perPage: 2,
        },
        1122: {
            perPage: 3,
        },
        1295: {
            perPage: 4,
        }
    }

});


main.sync(thumbnails);
main.mount();
thumbnails.mount();
kartCarousel.mount();
ekstraCarousel.mount();