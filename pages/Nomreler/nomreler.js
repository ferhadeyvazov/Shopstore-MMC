const allInputs = document.querySelectorAll(".nomreler__Inp input");

allInputs.forEach(item => {

    item.setAttribute("min", "0");
    item.setAttribute("max", "9");

    item.addEventListener("input", function () {
        if (item.value.length > 1) {
            item.value = item.value.slice(0, 1);
        }
    });
});
// ==================FETCH========================
let numberSection = document.querySelector(".numbers__section");
let formControl = document.querySelectorAll(".form__control");


window.onload = getNumber();

async function getNumber() {
    let response = await fetch("../../data/number.json");
    let data = await response.json();

    setNumber(data);
}
function setNumber(data) {
    console.log(data);
    data.forEach(item => {
        console.log(item);
        numberSection.innerHTML += `
                        <aside class=" numbers__aside p-2  
                            border border-3 rounded-2 
                            d-flex flex-column justify-content-between 
                            flex-sm-row">
                            <div class="d-flex justify-content-between
                                flex-sm-column            
                                fs-6 fs-md-4">
                                <p>${item.number}</p>
                                <p class="type__number--gold">${item.type}</p>
                            </div>
                            <div class="
                                d-flex justify-content-between
                                align-items-center
                                flex-sm-column
                                buy__btns text-end">
                                <span class="buy__btns--price 
                                    text-center 
                                    rounded">
                                    ${item.price}
                                    <i class="fa-solid fa-manat-sign fa-xs" style="color: #ffffff;"></i>
                                </span>
                                <button class="btn btn-link btn-color fw-bold fs-md-6 fs-6 text-end">Sifaris et</button>
                            </div>
                        </aside>

        `;
    })
}

let emty = "";
function filterNumber() {
    formControl.forEach(item=>{
        item.addEventListener('change',()=>{

        })
    })
}