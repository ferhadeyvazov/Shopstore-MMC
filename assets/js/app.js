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

links.forEach(item=>{
    item.addEventListener('click', ()=>{
        links.forEach(link=>link.classList.remove('menuActive'));
        item.classList.add('menuActive');
    })
})

