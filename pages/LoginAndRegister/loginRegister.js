let deliveryBtn = document.querySelector('.delivery__btn');
let paymentBtn = document.querySelector('.payment__btn');
let trackBtn = document.querySelector('.track__btn');
let delivery = document.querySelector('.delivery__description');
let payment = document.querySelector('.payment__description');
let track = document.querySelector('.track__description');

function changeSection(e) {
    paymentBtn.style.background = "none";
    deliveryBtn.style.background = "none";
    trackBtn.style.background = "none";
    deliveryBtn.style.fontWeight = "normal";
    paymentBtn.style.fontWeight = "normal";
    trackBtn.style.fontWeight = "normal";



    if (e.target == deliveryBtn) {
        payment.style.display = 'none';
        track.style.display = 'none';
        delivery.style.display = 'block';
        deliveryBtn.style.backgroundColor = "#ffffff";
        deliveryBtn.style.fontWeight = 600;
    }
    else if (e.target == paymentBtn) {
        delivery.style.display = 'none';
        track.style.display = 'none';
        payment.style.display = 'block';
        paymentBtn.style.backgroundColor = "#ffffff";
        paymentBtn.style.fontWeight = 600;
    }
    else if (e.target == trackBtn) {
        delivery.style.display = 'none';
        payment.style.display = 'none';
        track.style.display = 'block';
        trackBtn.style.backgroundColor = "#ffffff";
        trackBtn.style.fontWeight = 600;
    }
    
}

// ====================================================
const email = document.querySelector(".delivery__form--input:nth-child(1)");
const password = document.querySelector(".delivery__form--input:nth-child(2)");
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Emailinizi tam daxil edin!");
        email.style.borderColor = "red";
    }
    else if (email.validity.valueMissing){
        email.setCustomValidity("Emailinizi daxil edin.");
        email.style.borderColor = "red";
    }
    else {
        email.setCustomValidity("");
        email.style.borderColor = "#b2b3b2";

    }
});
password.addEventListener("input", (event) => {
    if (password.validity.typeMismatch) {
        password.setCustomValidity("Şifrənizi düzgün daxil edin!");
        password.style.borderColor = "red";
    }
    else if (password.validity.valueMissing){
        password.setCustomValidity("Şifrənizi daxil edin.");
        password.style.borderColor = "red";
    }
    else {
        password.setCustomValidity("");
        password.style.borderColor = "#b2b3b2";

    }
});
