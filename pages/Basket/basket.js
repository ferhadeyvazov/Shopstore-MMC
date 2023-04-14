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
let finalPrice = document.querySelector('.final__Price');
let getfromLS = JSON.parse(localStorage.getItem("myCartItems"));

function finalPriceCalculate() {
    let totalPrice = getfromLS.reduce((acc, user) => (acc + (user.price * user.value)), 0);
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



