let smartfonProducts = document.querySelector(".smartfon__products");

getSmartfon();
async function getSmartfon() {
    let response = await fetch("../../data/mehsullarData/mobilPhones.json");
    let data = await response.json();

    data.forEach((arr, i) => {
        smartfonCards(arr, i);
    })
}

function smartfonCards(array,index) {
    array.forEach((item) => {
        smartfonProductsUI( item.id, item.brand, item.name, item.price, item.bigPrice, item.image, item.colors);
    });
}

function smartfonProductsUI( id, brand, name, price, bigPrice, image, colors) {
    let a = price.length-1;
    smartfonProducts.innerHTML += `
                        <div class="smartfon__products--card">
                            <div class="smartfon__card--icons">
                                <button class="iconUnbalanced">
                                    <i class="fa-solid fa-scale-unbalanced fa-xs" style="color: #9b9b9b;"></i>
                                </button>
                                <button class="iconHeart">
                                    <i class="fa-regular fa-heart fa-xs" style="color: #9b9b9b;"></i>
                                </button>
                            </div>

                            <a href="#" class="product__card--image">
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
                                    <h5>${price[a]}₼</h5>
                                    <del>${bigPrice[a]}₼</del>
                                </div>

                                <button class="shop-btn"><i class="fa-solid fa-cart-shopping"
                                        style="color: #8532ed;"></i></button>
                            </div>
                        </div>
                 `;

    let colorList = document.querySelectorAll(".color__list")[id-1];
    setColor(colorList, colors);

    let cardName = document.querySelectorAll(".smartfon__products--card");
    filterBrands(cardName);
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
let brandsName = document.querySelectorAll(".brandsInp");
function filterBrands(cardName) {
    brandsName.forEach(inp=>{
        console.log(inp.value);
        switch(inp.value){
            
        }
    })
}