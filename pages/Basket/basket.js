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
    data.forEach(item=>{
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

// ==================FINAL PRICES=============================
function getElfromLs() {
    let getfromLS = JSON.parse(localStorage.getItem("myCartItems"));
    finalPriceCalculate(getfromLS);
}

function finalPriceCalculate(getfromLS) {
    let totalPrices = document.querySelector(".sebet__total--price");
    let finalPrice = document.querySelector('.final__Price');
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
getElfromLs(); //Bu Funksiya gedecek productUI() <-icerisine

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


