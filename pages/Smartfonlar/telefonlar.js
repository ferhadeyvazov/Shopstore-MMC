let smartfonProducts = document.querySelector(".smartfon__products");
let arrSmartfons = [];

getSmartfon();
async function getSmartfon() {
    let response = await fetch("../../data/mehsullarData/mobilPhones.json");
    let data = await response.json();

    let productFilter = data;
    productFilter.forEach(arr => {
        showLength(arr);
        smartfonCards(arr);
    })
}

function smartfonCards(array, index) {
    array.forEach((item) => {
        smartfonProductsUI(item.id, item.brand, item.name, item.price, item.bigPrice, item.image, item.colors);
    });
}

function smartfonProductsUI(id, brand, name, price, bigPrice, image, colors) {
    let a = price.length - 1;
    smartfonProducts.innerHTML += `
                        <div class="smartfon__products--card brand__${brand}">
                            <div class="smartfon__card--icons">
                                <button class="iconUnbalanced">
                                    <i class="fa-solid fa-scale-unbalanced fa-xs" style="color: #9b9b9b;"></i>
                                </button>
                                <button class="iconHeart">
                                    <i class="fa-regular fa-heart fa-xs" style="color: #9b9b9b;"></i>
                                </button>
                            </div>

                            <a href="../Product/product.html" class="product__card--image">
                                <img src="${image}">
                            </a>

                            <div class="smartfon__card--title">
                                <p>Smartfonlar</p>
                                <a class="smartfon__name" href="#">${brand} ${name}</a>
                            </div>

                            <div class="smartfon__card--color">
                                <p>Rəng:</p>

                                <ul class="color__list">
                                </ul>

                            </div>

                            <div class="smartfon__card--price">
                                <div class="main_price">
                                    <h5>${formatNumber(price[a])}</h5>
                                    <del>${formatNumber(bigPrice[a]) }</del>
                                </div>

                                <button class="shop-btn"><i class="fa-solid fa-cart-shopping"
                                        style="color: #8532ed;"></i></button>
                            </div>
                        </div>
                 `;

    // Format number as a Money
    function formatNumber(num) {
        if (Number.isInteger(num)){
            return num + "₼";
        }
        else if(Number.isFinite(num)){
            return num.toFixed(2) + "₼";
        }
    }

    let colorList = document.querySelectorAll(".color__list")[id - 1];
    setColor(colorList, colors);

    let brandCards = document.querySelectorAll(".smartfon__products--card");
}

// ==================BRAND'S COUNT============================
let appleSay = document.querySelector(".appleSay");
let samsungSay = document.querySelector(".samsungSay");
let xiaomiSay = document.querySelector(".xiaomiSay");
let honorSay = document.querySelector(".honorSay");
let realmeSay = document.querySelector(".realmeSay");
let technoSay = document.querySelector(".technoSay");
let nokiaSay = document.querySelector(".nokiaSay");
let itelSay = document.querySelector(".itelSay");
let zteSay = document.querySelector(".zteSay");
function showLength(arr) {
    let apple = 0;
    let samsung = 0;
    let xiaomi = 0;
    let nokia = 0;
    let honor = 0;
    let realme = 0;
    let techno = 0;
    let itel = 0;
    arr.forEach(item => {
        if (item.brand === "Apple") {
            apple++;
            appleSay.innerText = apple;
        }
        else if (item.brand == "Samsung") {
            samsung++;
            samsungSay.innerText = samsung;
        }
        else if (item.brand == "Xiaomi") {
            xiaomi++;
            xiaomiSay.innerText = xiaomi;
        }
        else if (item.brand == "Honor") {
            honor++;
            honorSay.innerText = honor;
        }
        else if (item.brand == "Nokia") {
            nokia++;
            nokiaSay.innerText = nokia;
        }
        else if (item.brand == "Itel") {
            itel++;
            itelSay.innerText = itel;
        }
        else if (item.brand == "realme") {
            realme++;
            realmeSay.innerText = realme;
        }
        else if (item.brand == "techno") {
            techno++;
            technoSay.innerText = techno;
        }

    })
}

// ==================SETCOLORS============================
function setColor(colorList, colors) {
    colors.forEach(color => {
        let li = document.createElement("li");
        li.classList.add(`card_color`);
        li.classList.add(`card_color--${color.color}`);
        li.style.backgroundColor = color.hex;
        colorList.appendChild(li);
    })
}

// ==================FILTER BRANDS============================
let brandsInputs = document.querySelectorAll(".brandsInp");
let uncheckedCheckboxes = [];



// ==================FILTER BRANDS============================
let fromPrice = document.querySelector("fromPrice");
let toPrice = document.querySelector("toPrice");

// ==================OPEN&CLOSE FILTER============================
let smartfonFilter = document.querySelector(".smartfon__filter");
let filterBtn =document.querySelector(".filterBtn");
filterBtn.addEventListener("click",()=>{
    smartfonFilter.classList.toggle("smartfon__filter--active");
});
function removeFilter() {
    smartfonFilter.classList.remove("smartfon__filter--active");
}