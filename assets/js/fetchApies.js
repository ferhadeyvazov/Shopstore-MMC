const allFetches = () => {
    serviceData();
    xidmetData();
    brandsData();
}
allFetches();

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
        let h3 = document.createElement('h3');
        let p = document.createElement("p");
        h3.textContent = item.name;
        p.textContent = item.name_description;
        div.appendChild(h3);
        div.appendChild(p);
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
    console.log(data);

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
// =================FETCH GUNUN TEKLIFLERI=================
