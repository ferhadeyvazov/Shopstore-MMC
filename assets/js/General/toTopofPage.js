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
