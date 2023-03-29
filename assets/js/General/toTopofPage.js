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
