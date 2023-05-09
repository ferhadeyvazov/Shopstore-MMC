window.onload = catalog__();

// ==========ACTIVE ALT__MENU__LINK================
let links = document.querySelectorAll('.menu__link a');

links.forEach(item => {
    item.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('menuActive'));
        item.classList.add('menuActive');
    })
});


// ===================================================
// =================FETCH CATALOG=================
let catalog__list = document.querySelector(".catalog__list");
let altCatalog__list = document.querySelector(".altCatalog__list");
let catalog__PopupList = document.querySelector(".catalog__Popup--list");


async function catalog__() {
    let res = await fetch("../../data/catalogMenu.json");
    let data = await res.json();
    setCatalog__(data);
}

function setCatalog__(data) {
    data.forEach((item, index) => {
        let { name, icon } = item;
        // =========DESTKOP CATALOG LIST==============
        catalog__PopupList.innerHTML += `
        <li onmouseover="setAltCatalog(${index})" class="catalog__Popup--link">
        <div>
        ${icon}
        <p>${name}</p>
        </div>
        <i class="fa-solid fa-angle-right"></i>
        </li>
        `;

        // ==========MOBILE CATALOG LIST =================
        catalog__list.innerHTML += `
        <li onclick="activeCatalogAlt(${index})" class="catalog__list--link">
            <div>
                ${icon}
                <p>${name}</p>
            </div>
                <i class="fa-solid fa-angle-right"></i>
        </li>
        `
    });

}
// ===================================================
let section__catalog = document.getElementById('section__catalog');
let section__catalogAlt = document.getElementById('section__catalog-alt');
function activeCatalog() {
    section__catalog.classList.toggle("catalog__active");
}
function cancelCatalog() {
    section__catalog.classList.remove("catalog__active");
    section__catalogAlt.classList.remove("catalog__active");
}
function activeCatalogAlt(index) {
    section__catalogAlt.classList.add("catalog__active");
    // >
    setAltCatalog(index);

}

async function setAltCatalog(index) {
    let res = await fetch("../../data/altCatalogMenu.json");
    let altData = await res.json();
    altData = altData[index];

    let catalogAltHero = document.querySelector(".catalog-alt--hero");
    catalogAltHero.textContent = altData[0].altName;

    let altCategory = document.querySelector(".altCategory");
    altCategory.innerHTML = "";
    altCatalog__list.innerHTML = "";
    altData.forEach(item => {
        let { img, altName, link } = item;

        altCatalog__list.innerHTML += `
                <li class="catalog__list--link">
                    <a href="/">
                        <div>
                            <p>${altName}</p>
                        </div>
                            <i class="fa-solid fa-angle-right"></i>
                    </a>
                </li>
                `
        altCategory.innerHTML += `
                <a class="altCategory--link" href="${link}">
                    <img src="${img}" alt="altCategory" loading="lazy">
                    <p class="text-center">${altName}</p>
                </a>
            `


    })
}

function cancelCatalogAlt() {
    section__catalogAlt.classList.remove("catalog__active");
}


