let sebetProductsSayi = document.querySelectorAll(".marginContainer");


// ===========Product Sayi ============================
let sebetProductsButton = document.querySelector(".sebet__products--sayi");
sebetProductsButton.innerText = sebetProductsSayi.length;

// ===========ADD PRODUCT TO BASKET ============================
let addBtn = document.querySelectorAll(".sebet-btn");
let arr = [];

addBtn.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        let parentBox = e.target.parentElement.parentElement.parentElement;
        let productName = parentBox.querySelector('.item__info--title').innerText;
        let productImg = parentBox.querySelector('.satLider__img').src;
        let productPrice = parentBox.querySelector('.item__price').textContent;
        productPrice = productPrice.replace(/[^0-9]/gi, ".");



        let value = 1;
        // Arr-a(karta) atmaq ucun yeni object yaradilmasi
        let newShopCart = {
            name: productName,
            image: productImg,
            price: +productPrice,
            value: value

        }

        sendToLocalStr(newShopCart)
    });
})

function sendToLocalStr(object) {
    let beraber = false;

    for (let i = 0; i < arr.length; i++) {
        if (object.name == arr[i].name) {
            beraber = true;
            arr[i].value++;
            plusProduct(i);
            minusProduct(i);
            break;
        }
        else {
            beraber = false;
        }
    }

    beraber == false ? arr.push(object) : beraber;

    sendLS(arr);

}
function sendLS(arr) {
    localStorage.setItem('myCartItems', JSON.stringify(arr));
    // localStorage.clear();
    updateDOM(arr);

}

let getElfromLocalStorage = JSON.parse(localStorage.getItem("myCartItems"));
if (getElfromLocalStorage) {
    arr = getElfromLocalStorage;
    updateDOM(arr);
}

// updateDOM Umumi Function
function updateDOM(elements) {
    const cartBox = document.querySelector(".sebet__products");
    // const sebetElemets = document.querySelector(".sebet__products--elements");
    let listItems = "";
    let id = 0;

    // ===========Product Sayi ============================
    let sebetProductsButton = document.querySelector(".sebet__products--sayi");
    sebetProductsButton.innerText = elements.length;


    elements.forEach(obj => {
        listItems += `
                <div id="${id}" class="shadow-sm grid-3 bg-white my-3 py-4 px-3 marginContainer grid-3">
                    <a href="#" class="basket__img rowFlex basket__img rowFlex">
                        <img src="${obj.image}" alt="basketImg">
                    </a>
                    <div class="basket__product--info">
                        <div class="basket__product--hero">
                            <a href="#">
                                <h4 class="headerContainer">${obj.name}</h4>
                            </a>
                            <div class="basket__product--price">
                                <h5 class="fw-bold">
                                    ${obj.price}
                                    <img class="manat-Icon-small"
                                        src="../../assets/img/Logo/manat-sign-solid.svg" alt="manatIcon">
                                </h5>
                            </div>
                            <div class="basket__product--count">
                                <div class="product__number">
                                    <i onclick="minusProduct(${id})" class="cix fa-solid fa-minus"></i>
                                    <span class="mehsul__sayi">${obj.value}</span>
                                    <i onclick="plusProduct(${id})" class="plus fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <a onclick="delItemFromCart(${id})" class="sebet__product--delete">
                            <i class="fa-solid fa-xmark fa-sm" style="color: #ff3c3c;"></i>
                        </a>
                    </div>
                </div>
        `

        id++;
    })

    cartBox.innerHTML = listItems;


    total();
}
function plusProduct(id) {
    arr[id].value += 1;
    
    sendLS(arr);
}
function minusProduct(id) {
    arr[id].value -= 1;
    
    if(arr[id].value<1){
        arr[id].value = 1;
    }
    sendLS(arr);
}


//  Remove Items From Cart
function delItemFromCart(id) {
    arr.splice(id, 1);
    sendLS(arr);
}

// =====================TOTAL PRICES =====================

function total() {
    let totalPrice = arr.reduce((acc, user) => (acc + (user.price * user.value)), 0);
    totalPrice = totalPrice.toFixed(2);
    let totalPrices = document.querySelector(".sebet__total--cem");
    totalPrices.innerHTML = `
    <h3 class="sebet__total--cem">${totalPrice}<i class="fa-solid fa-manat-sign" style="color: #000000;"></i></h3>
    `

    let finalPrice = document.querySelector('.final__Price');
    finalPrice.innerHTML = `
    ${totalPrice}<i class="fa-solid fa-manat-sign"></i>
    `;

}








// ===============OPEN 4TH SECTİON================================================================
const open4Sectionİnp = document.querySelector(".open4Section");
const section4th = document.getElementById("section4TH");

open4Sectionİnp.addEventListener("change", () => {
    if (open4Sectionİnp.checked) {
        console.log("4 acildi");
        section4th.style.display = "block";
    }
    else {
        section4th.style.display = "none";
        console.log("4 baglandi");
    }
});

// =========================TAKSIT KARTI ILE ODENIS======================================================

const taksitInps = document.querySelectorAll(".odenis__novu");
const taksitSelect = document.querySelector(".taksitSelect");
console.log(taksitSelect);

taksitInps.forEach(inp=>{
    inp.addEventListener("change",(e)=>{
        if (e.target.classList.contains("flexRadioDefault5")){
            console.log("checked");
            taksitSelect.setAttribute("required", true);
            taksitSelect.disabled = false;
            document.querySelector(".bankTable").classList.remove("d-none");
        }
        else{
            console.log("uncheck");
            taksitSelect.removeAttribute("required");
            taksitSelect.disabled = true;
            document.querySelector(".bankTable").classList.add("d-none");
        }
            
    })
});



