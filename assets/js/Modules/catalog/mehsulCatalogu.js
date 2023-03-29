// ===============MEHSUL KATALOQU============================
const productCatalog = document.querySelector(".product--catalog");
const popup = document.getElementById('catalogPopup');
const popupCatalog__container = document.querySelector('.catalog__Popup--container');

function catalogPopup() {
    popup.classList.toggle('activePopUp');

    if (popup.classList.contains("activePopUp")) {
        popupCatalog__container.classList.add('activeCatalog');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50 && popup.classList.contains("activePopUp")) {
                popupCatalog__container.classList.add('activeCatalog-90');
            }
            else {
                popupCatalog__container.classList.remove('activeCatalog-90')
            }
        })
        
    }
    else {
        popupCatalog__container.classList.remove('activeCatalog-90')
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
