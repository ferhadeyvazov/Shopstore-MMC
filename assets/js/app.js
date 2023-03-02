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
var saj = $('.ferhad-2');
saj.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4400,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 1
        }
    }
});

var nonloop = $(".nonloop");
nonloop.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 1,
        }
    }
});






// =========FETCH FROM JSON============================
// const reklamSlider = document.querySelector(".reklam__slider");

// const getData = async () => {
//     let res = await fetch('../../data/dailySales.json');
//     let data = await res.json();
//     console.log(data);

//     setData(data);
// }
// getData();

// function setData(data) {
//     data.forEach(item => {
//         let div = document.createElement('div');
//         div.style.backgroundImage = item.img;
//         div.classList.add("item");
//         reklamSlider.appendChild(div);

//     })
// }


