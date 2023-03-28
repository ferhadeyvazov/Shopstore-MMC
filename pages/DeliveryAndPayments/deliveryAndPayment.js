let deliveryBtn = document.querySelector('.delivery__btn');
let paymentBtn = document.querySelector('.payment__btn');
let delivery = document.querySelector('.delivery__description');
let payment = document.querySelector('.payment__description');

function changeSection(e){
    paymentBtn.style.background = "none";
    deliveryBtn.style.background = "none";

    if (e.target== deliveryBtn){
        payment.style.display = 'none';
        delivery.style.display = 'block';
        deliveryBtn.style.backgroundColor = "#ffffff";
    }
    else if (e.target == paymentBtn){
        delivery.style.display = 'none';
        payment.style.display = 'block';
        paymentBtn.style.backgroundColor = "#ffffff";


    }
}