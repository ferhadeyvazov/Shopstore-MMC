const allFetches = () => {
    catalog__();
    serviceData();
    xidmetData();
    brandsData();
}
window.onload = allFetches();
// allFetches();

// =================FETCH SERVICES=================
async function serviceData() {
    const res = await fetch("../../data/services.json");
    const data = await res.json();

    setServiceData(data);
}
const rightSide = document.querySelector(".service__right--side");

function setServiceData(data) {
    data.forEach(item => {
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement("p");
        let imag = document.createElement('img');
        h3.textContent = item.name;
        p.textContent = item.name_description;
        imag.src = item.bgImage;
        div1.appendChild(h3);
        div1.appendChild(p);
        div2.appendChild(imag);
        div.appendChild(div1);
        div.appendChild(div2);
        rightSide.appendChild(div);
        div.classList.add('right__side--element');
    })
}
// =================FETCH BRANDS=================
async function brandsData() {
    let res = await fetch("../../data/brands.json");
    let data = await res.json();

    setBrandsData(data);
}
function setBrandsData(data) {
    let allBrends = document.querySelector('.all__brends');
    data.forEach(item => {
        let div = document.createElement("div");
        let a = document.createElement("a");
        let img = document.createElement("img");
        img.src = item;
        let att = document.createAttribute("loading");
        att.value = "lazy";
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", "brendName");
        div.classList.add('brends__cards');
        a.classList.add("brend--card");
        a.appendChild(img);
        div.appendChild(a);
        allBrends.appendChild(div);

    })
}


// =================FETCH XIDMETLER=================
async function xidmetData() {
    const res = await fetch("../../data/xidmetler.json");
    const data = await res.json();

    setXidmetData(data);
}

function setXidmetData(data) {
    let cards = document.querySelector('.cards');

    data.forEach(item => {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let span = document.createElement("span");
        div.classList.add("card");
        div.innerHTML = item.icon;
        h2.textContent = item.name;
        span.textContent = item.description;
        div.appendChild(h2);
        div.appendChild(span);
        cards.appendChild(div);

    })


}
// =================FETCH CATALOG=================
let catalog__list = document.querySelector(".catalog__list");
let altCatalog__list = document.querySelector(".altCatalog__list");

async function catalog__() {
    let res = await fetch("../../data/catalogMenu.json");
    let data = await res.json();
    setCatalog__(data);
}

function setCatalog__(data) {
    data.forEach((item) => {
        catalog__list.innerHTML += `
        <li onclick="activeCatalogAlt()" class="catalog__list--link">
            <div>
                ${item.icon}
                <p>${item.name}</p>
            </div>
            <i class="fa-solid fa-angle-right"></i>
        </li>
        `

        item.altCategory.forEach(altItem => {
            altCatalog__list.innerHTML += `
                <li class="catalog__list--link">
                    <div>
                        <p>${altItem.altName}</p>
                    </div>
                    <i class="fa-solid fa-angle-right"></i>
                </li>

            `
        })

    });
}

let section__catalog = document.getElementById('section__catalog');
let section__catalogAlt = document.getElementById('section__catalog-alt');
function activeCatalog() {
    section__catalog.classList.toggle("catalog__active");
    console.log(section__catalog.classList.value);
}
function cancelCatalog() {
    section__catalog.classList.remove("catalog__active");
    section__catalogAlt.classList.remove("catalog__active");
}
function activeCatalogAlt() {
    section__catalogAlt.classList.add("catalog__active");
}
function cancelCatalogAlt() {
    section__catalogAlt.classList.remove("catalog__active");
}
