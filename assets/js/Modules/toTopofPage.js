// ===============TO TOP OF PAGE============================
const toTop = document.querySelector('.btn-up');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('to-active-btn');
        popupCatalog__container.classList.add('activeCatalog-90');
    }
    else {
        toTop.classList.remove('to-active-btn');
        popupCatalog__container.classList.remove('activeCatalog-90')

    }
})

// ===============POPUP CATALOG============================
const popup = document.getElementById('catalogPopup');
const popupCatalog__container = document.querySelector('.catalog__Popup--container');
console.log(popup);
function catalogPopup() {
    popup.classList.toggle('activePopUp');

    if (popup.classList.contains("activePopUp")) {
        popupCatalog__container.classList.add('activeCatalog');
    }
    else {
        popupCatalog__container.classList.remove('activeCatalog');
    }

}

popup.addEventListener("click", (e) => {
    if (e.target.id == "catalogPopup") {
        popup.classList.remove('activePopUp')
        popupCatalog__container.classList.remove('activeCatalog');
    }
});
