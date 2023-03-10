// ====================SEARHBAR======================
const searchSection = document.getElementById('search__section');
const search = document.getElementById('faSearch');
const cancelSearch = document.getElementById('faBack');
const productCatalog = document.querySelector(".product--catalog");

// ======================ONLOAD================
let lin = document.querySelectorAll('link');
lin.forEach(item => {
    item.disabled = true;
})
function onLoad() {
    addeventliseners();
    lin.forEach(item => {
        item.disabled = false;
    })


}

window.addEventListener('load', onLoad);


function addeventliseners() {
    search.addEventListener('click', searchActive);
    cancelSearch.addEventListener('click', cancelSearchActive);
    productCatalog.addEventListener('click', catalogPopup);

}

function searchActive() {
    searchSection.classList.add('activeSearch');
}

function cancelSearchActive() {
    searchSection.classList.remove('activeSearch');
}

// ==========ACTIVE ALT__MENU__LINK================
let links = document.querySelectorAll('.menu__link a');

links.forEach(item => {
    item.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('menuActive'));
        item.classList.add('menuActive');
    })
})




// ============DATE============
let saniye = document.querySelectorAll('.san');
let deqiqe = document.querySelectorAll('.deq');
let saat = document.querySelectorAll('.saat');


let startsaniye = 60;
let startdeqiqe = 60;
let startHours = 24;

function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let dateNow = {
        san: startsaniye - seconds,
        deq: startdeqiqe - minutes,
        saat: startHours - hours
    }
    saat.forEach(item => item.innerHTML = dateNow.saat < 10 ? `0${dateNow.saat}<br>saat` : `${dateNow.saat}<br>saat`);
    deqiqe.forEach(item => item.innerHTML = dateNow.deq < 10 ? `0${dateNow.deq}<br>dəqiqə` : `${dateNow.deq}<br>dəqiqə`);
    saniye.forEach(item => item.innerHTML = dateNow.san < 10 ? `0${dateNow.san}<br>saniyə` : `${dateNow.san}<br>saniyə`);
}
setInterval(updateTime, 1000);

// ==========OWL CAROUSEL =================
setTimeout(() => {
    $(document).ready(function () {
        var saj = $('.ferhad-2');
        saj.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 10,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4400
        });

        var nonloop = $(".nonloop");
        nonloop.owlCarousel({
            loop: true,
            margin: 10,
            items: 1,
            autoplay: true,
            dots: false,
            nav: true
        });

        var satLider__carousel = $('.satLider__Carousel');
        satLider__carousel.owlCarousel({
            loop: true,
            margin: 1,
            items: 1,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 2
                },
                500: {
                    items: 3
                },
                933: {
                    items: 4
                },
                1100: {
                    items: 5
                }

            }
        });


    });

}, 10)




// ============HEART=====================
let satLider__Heart = document.querySelectorAll('.satLider__link--favor button');
let secilmisler = document.getElementById('secilmisler');
let secilmislerAfter = window.getComputedStyle(secilmisler, "::after");
satLider__Heart.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle('satLiderActive');
        let satLiderActive = document.querySelectorAll('.satLiderActive');
        let secilmislerLength = satLiderActive.length;
        console.log(secilmislerLength);
        secilmisler.getAttribute("content", secilmislerLength);
    });
})



// ===============TO TOP OF PAGE============================
const toTop = document.querySelector('.btn-up');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('to-active-btn');
    }
    else {
        toTop.classList.remove('to-active-btn');
    }
})

// ===============POPUP CATALOG============================
const popup = document.getElementById('catalogPopup');

function catalogPopup() {
    popup.classList.toggle('activePopUp');
}


