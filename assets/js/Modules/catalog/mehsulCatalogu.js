// ===============MEHSUL KATALOQU============================
const productCatalog = document.querySelector(".product--catalog");
const popup = document.getElementById('catalogPopup');
const popupCatalog__container = document.querySelector('.catalog__Popup--container');

function catalogPopup() {
    popup.classList.toggle('activePopUp');

    if (popup.classList.contains("activePopUp")) {
        popupCatalog__container.classList.add('activeCatalog');
    }
    else {
        popupCatalog__container.classList.remove('activeCatalog');
    }
}

productCatalog.addEventListener('click', catalogPopup);

popup.addEventListener("click", (e) => {
    if (e.target.id == "catalogPopup") {
        popup.classList.remove('activePopUp')
        popupCatalog__container.classList.remove('activeCatalog');
    }
});
