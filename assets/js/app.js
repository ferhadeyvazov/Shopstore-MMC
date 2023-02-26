// ====================SEARHBAR======================
const searchSection = document.getElementById('search__section');
const search = document.getElementById('faSearch');
const cancelSearch = document.getElementById('faBack');

addeventliseners();
function addeventliseners() {
    search.addEventListener('click', searchActive);
    cancelSearch.addEventListener('click', cancelSearchActive);
}

function searchActive() {
    searchSection.classList.add('activeSearch');
}

function cancelSearchActive() {
    searchSection.classList.remove('activeSearch');
}

// ==========ACTIVE MENU__LINK================
let links = document.querySelectorAll('.menu__link a');

links.forEach(item => {
    item.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('menuActive'));
        item.classList.add('menuActive');
    })
})


// ===============SWIPER-JS====================
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // autoplay: {
    //     delay: 2500,
    // },
    keyboard: {
        enabled: true,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.prevBtn',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const reklamSwiper = new Swiper('.reklam_swiper', {
    // Optional parameters
    loop: true,
    // autoplay: {
    //     delay: 2500,
    // },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.prevBtn',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// ============DATE============
let san = document.querySelector('.san');
let deq = document.querySelector('.deq');
let saat = document.querySelector('.saat');

let startsaniye = 14400;
let startdeqiqe = 60;
let startHours = 4;

setInterval(updateTime, 1000);

function updateTime() {
    let deqInt = Math.floor(startsaniye % 60);
    san.textContent = deqInt;

    if(deqInt===0){
        startdeqiqe--;
    }
    deq.textContent = startdeqiqe;

    
    if(startdeqiqe===0){
        startHours--;
    };
    saat.textContent = startHours;
    

    startsaniye--;
}
updateTime();