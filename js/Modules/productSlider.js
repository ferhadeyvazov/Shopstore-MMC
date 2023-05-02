let carouse = document.querySelector(".splide");
let splideAlt = document.querySelector(".splide__Alt");

let main = new Splide(carouse, {
    type: 'fade',
    heightRatio: 1,
    pagination: false,
    arrows: false,
    cover: true,

    autoplay: true

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
    
    lazyLoad: 'nearby',
    autoplay: true,

    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints: {
        640: {
            fixedWidth: 66,
            fixedHeight: 38,
        },
    },
});



main.sync(thumbnails);
main.mount();
thumbnails.mount();