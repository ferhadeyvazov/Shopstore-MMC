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


// ==================TAKSIT KARTLA ODENIS =============================
const taksitAyi = document.querySelector(".taksitAyi");
taksitAyi.addEventListener("change", calculateTaksit);
function calculateTaksit() {
    console.log(taksitAyi.value);
    let sebetPayment = document.querySelector(".sebet__total--cem");
    sebetPayment = parseFloat(sebetPayment.textContent);
    console.log(sebetPayment);
}


// ==================GET ELEMENT FROM LOCALSTORAGE=============================
    let array = [];
    let getfromLS = JSON.parse(localStorage.getItem("myCartItems"));
    if(getfromLS){
        productUI(getfromLS);
    }

function sendLS(array) {
    localStorage.setItem('myCartItems', JSON.stringify(array));
    // localStorage.clear();
    productUI(array);

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



// ==================FINAL PRICES=============================
function finalPriceCalculate(getfromLS) {
    let expressDelivery = document.querySelector(".expressDelivery");
    let totalPrices = document.querySelector(".sebet__total--price");
    let finalPrice = document.querySelector(".final__Price");
    let totalPrice = getfromLS.reduce((acc, user) => (acc + (user.price * user.value)), 0);
    totalPrice = totalPrice.toFixed(2);

    
    finalPrice.innerHTML = `
    ${totalPrice}<i class="fa-solid fa-manat-sign"></i>
    `;

    totalPrices.innerHTML = `
    Cəmi:
    <h3 class="sebet__total--cem">${totalPrice}<i class="fa-solid fa-manat-sign" style="color: #000000;"></i></h3>
    `

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
}


