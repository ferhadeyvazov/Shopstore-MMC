// ====================SEARHBAR======================
const searchSection = document.getElementById('search__section');
const search = document.getElementById('faSearch');
const cancelSearch = document.getElementById('faBack');

// ======================ONLOAD======================
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
}

function searchActive() {
    searchSection.classList.add('activeSearch');
}

function cancelSearchActive() {
    searchSection.classList.remove('activeSearch');
}

// ==================================================


