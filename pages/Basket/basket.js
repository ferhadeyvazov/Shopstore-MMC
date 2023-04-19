// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// ======================YEKUN PRICE ======================
let finalPrice = document.querySelector(".final__Price");
let finalPriceValue;
let yekunPrice = JSON.parse(localStorage.getItem("final__Price"));
if(yekunPrice){
    yekunUI(yekunPrice);
}

function yekunUI(yekunPrice){
    finalPrice.innerHTML = `${yekunPrice}<i class="fa-solid fa-manat-sign"></i>`
}

function localStYekun(yekunPrice){
    localStorage.setItem('userLastPrice', JSON.stringify(yekunPrice));
    yekunUI(yekunPrice);
} 

// ==================REGION APIES =============================
let regionSelect = document.getElementById("regions");
console.log(regionSelect);
let getRegions = async () => {
    let resp = await fetch("../../data/az.json");
    let data = await resp.json();
    regionUI(data);
}
function regionUI(data) {
    data.forEach(item => {
        let option = document.createElement("option");
        option.value = item.city;
        option.textContent = item.city;
        regionSelect.appendChild(option);
    });


}
getRegions();


// ==================GET ELEMENT FROM LOCALSTORAGE=============================
let array = [];
let getfromLS = JSON.parse(localStorage.getItem("myCartItems"));
if (getfromLS) {
    productUI(getfromLS);
    calculateTaksit(getfromLS);
}

function sendLS(array) {
    localStorage.setItem('myCartItems', JSON.stringify(array));
    // localStorage.clear();
    productUI(array);
    calculateTaksit(getfromLS);


}

function plusProduct(id) {
    getfromLS[id].value += 1;

    sendLS(getfromLS);

}
function minusProduct(id) {
    getfromLS[id].value -= 1;

    if (getfromLS[id].value < 1) {
        getfromLS[id].value = 1;
    }
    sendLS(getfromLS);
}


//  Remove Items From Cart
function delItemFromCart(id) {
    getfromLS.splice(id, 1);
    sendLS(getfromLS);
}


// =========================TAKSITLERIN AYLARA GORE HESABLANMASI======================================
let birKart = document.querySelector(".kb-tk");
let tamKart = document.querySelector(".tamk-tk");
let bolKart = document.querySelector(".bolk-tk");
let pulPay = document.querySelector(".pulpal-tk");

let birMebleg = document.querySelector(".birkart__mebleg");
let tamMebleg = document.querySelector(".tamkart__mebleg");
let bolMebleg = document.querySelector(".bolkart__mebleg");

let birAyliq = document.querySelector(".birkart__ayliq");
let tamAyliq = document.querySelector(".tamkart__ayliq");
let bolAyliq = document.querySelector(".bolkart__ayliq");

function calculateTaksit(data) {
    const taksitAyi = document.querySelector(".taksitAyi");

    let totalPrice = data.reduce((acc, user) => (acc + (user.price * user.value)), 0);
    totalPrice = Number(totalPrice.toFixed(2));

    taksitMuddeti(taksitAyi, totalPrice);    
    
    taksitAyi.addEventListener("change", () => {
        let sebetPayment = document.querySelector(".sebet__total--cem");
        sebetPayment = parseFloat(sebetPayment.textContent);
        
        taksitMuddeti(taksitAyi, totalPrice);

    });

}

function taksitMuddeti(taksitAyi, totalPrice) {
    let birPrice, tamPrice, bolPrice;

    switch (taksitAyi.value) {
        case "3":
            birKart.textContent = "2.5%"
            birPrice = Number(((totalPrice * 2.5) / 100) + totalPrice).toFixed(2)
            birMebleg.innerHTML = `${birPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            birAyliq.innerHTML = `${(birPrice / 3).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            tamKart.textContent = "2.5%"
            tamPrice = Number(((totalPrice * 2.5) / 100) + totalPrice).toFixed(2)
            tamMebleg.innerHTML = `${tamPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            tamAyliq.innerHTML = `${(tamPrice / 3).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            bolKart.textContent = "3%"
            bolPrice = Number(((totalPrice * 3) / 100) + totalPrice).toFixed(2)
            bolMebleg.innerHTML = `${bolPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            bolAyliq.innerHTML = `${(bolPrice / 3).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            break;
        case "6":
            birKart.textContent = "5%"
            birPrice = Number(((totalPrice * 5) / 100) + totalPrice).toFixed(2)
            birMebleg.innerHTML = `${birPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            birAyliq.innerHTML = `${(birPrice / 6).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            tamKart.textContent = "4%"
            tamPrice = Number(((totalPrice * 4) / 100) + totalPrice).toFixed(2)
            tamMebleg.innerHTML = `${tamPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            tamAyliq.innerHTML = `${(tamPrice / 6).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            bolKart.textContent = "6%"
            bolPrice = Number(((totalPrice * 6) / 100) + totalPrice).toFixed(2)
            bolMebleg.innerHTML = `${bolPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            bolAyliq.innerHTML = `${(bolPrice / 6).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            break;

        case "12":
            birKart.textContent = "8%"
            birPrice = Number(((totalPrice * 8) / 100) + totalPrice).toFixed(2)
            birMebleg.innerHTML = `${birPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            birAyliq.innerHTML = `${(birPrice / 12).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            tamKart.textContent = "7%"
            tamPrice = Number(((totalPrice * 7) / 100) + totalPrice).toFixed(2)
            tamMebleg.innerHTML = `${tamPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            tamAyliq.innerHTML = `${(tamPrice / 12).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            bolKart.textContent = "12%"
            bolPrice = Number(((totalPrice * 12) / 100) + totalPrice).toFixed(2)
            bolMebleg.innerHTML = `${bolPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            bolAyliq.innerHTML = `${(bolPrice / 12).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            break;

        case "18":
            birKart.textContent = "10%"
            birPrice = Number(((totalPrice * 10) / 100) + totalPrice).toFixed(2)
            birMebleg.innerHTML = `${birPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            birAyliq.innerHTML = `${(birPrice / 18).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            tamKart.textContent = "10%"
            tamPrice = Number(((totalPrice * 10) / 100) + totalPrice).toFixed(2)
            tamMebleg.innerHTML = `${tamPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            tamAyliq.innerHTML = `${(tamPrice / 18).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`

            bolKart.textContent = "16%"
            bolPrice = Number(((totalPrice * 16) / 100) + totalPrice).toFixed(2)
            bolMebleg.innerHTML = `${bolPrice}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            bolAyliq.innerHTML = `${(bolPrice / 18).toFixed(2)}<i
                                                class="fa-solid fa-manat-sign fa-sm"></i>`
            break;
    }

}
// ==================SELECT BANK-CARD=============================
let selectBank = document.querySelectorAll(".bankTable tbody input");
selectBank.forEach(item => {
    item.addEventListener("change", taksitToFinalPrice);

});
function taksitToFinalPrice(event) {
    switch (event.target.id) {
        case "birkart":
            localStYekun(Number(birMebleg.textContent));
            break;

        case "bolkart":
            localStYekun(Number(bolMebleg.textContent));
            break;

        case "tamkart":
            localStYekun(Number(tamMebleg.textContent));
            break;

    }

}

// ==================FINAL PRICES=============================
function finalPriceCalculate(getfromLS) {
    let expressDelivery = document.querySelector(".expressDelivery");
    let giftInp = document.querySelector(".giftPresent");
    let totalPrices = document.querySelector(".sebet__total--price");
    let totalPrice = getfromLS.reduce((acc, user) => (acc + (user.price * user.value)), 0);
    totalPrice = Number(totalPrice.toFixed(2));
    
    // ====>EXPRESS CATDIRILMA===================
    expressDelivery.addEventListener("change", () => {
        // let a = JSON.parse(localStorage.getItem("userLastPrice"));
        // console.log(a);
        let a = document.querySelector(".final__Price");
        if (expressDelivery.checked) {
            totalPrice += 10;
            a = Number(a.textContent)+10;
            localStYekun(a);
            totalPrices.innerHTML = `
            Cəmi:
            <h3 class="sebet__total--cem">${totalPrice}<i class="fa-solid fa-manat-sign" style="color: #000000;"></i></h3>
            `
        }
        else {
            totalPrice -= 10;
            a = Number(a.textContent) - 10;
            localStYekun(a);
            totalPrices.innerHTML = `
            Cəmi:
            <h3 class="sebet__total--cem">${totalPrice}<i class="fa-solid fa-manat-sign" style="color: #000000;"></i></h3>
            `
        }
    });
    
    // ====>HEDIYYE QABLASDIRMA==================
    giftInp.addEventListener("change", () => {
        let a = JSON.parse(localStorage.getItem("userLastPrice"));
        console.log(a);
        if (giftInp.checked) {
            totalPrice += 5;
            a+=5;
            localStYekun(a);
            totalPrices.innerHTML = `
                Cəmi:
                <h3 class="sebet__total--cem">${totalPrice}<i class="fa-solid fa-manat-sign" style="color: #000000;"></i></h3>
            `
            
        }
        else {
            totalPrice -= 5;
            a -= 5;
            localStYekun(a);
            totalPrices.innerHTML = `
                Cəmi:
                <h3 class="sebet__total--cem">${totalPrice}<i class="fa-solid fa-manat-sign" style="color: #000000;"></i></h3>
            `
        }

    });

    totalPrices.innerHTML = `
    Cəmi:
    <h3 class="sebet__total--cem">${totalPrice}<i class="fa-solid fa-manat-sign" style="color: #000000;"></i></h3>
    `
    localStYekun(totalPrice);
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

taksitInps.forEach(inp => {
    inp.addEventListener("change", (e) => {
        if (e.target.classList.contains("flexRadioDefault5")) {
            console.log("checked");
            taksitSelect.setAttribute("required", true);
            taksitSelect.disabled = false;
            document.querySelector(".bankTable").classList.remove("d-none");
        }
        else {
            console.log("uncheck");
            taksitSelect.removeAttribute("required");
            taksitSelect.disabled = true;
            document.querySelector(".bankTable").classList.add("d-none");
            let firstPrice = document.querySelector(".sebet__total--cem");
            localStYekun(Number(firstPrice.textContent));
        }

    })
});









// ============================PRODUCTS WIEW=========================
function productUI(data) {
    let basketProducts = document.querySelector(".sebet__products");
    allElements = "";
    id = 0;

    data.forEach(obj => {
        allElements += `
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

        `;

        id++;
    })

    basketProducts.innerHTML = allElements;
    finalPriceCalculate(data);
    calculateTaksit(data);

}


