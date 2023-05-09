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
// ===>>Inputlari bosalt
let emtyString = "";
let arrOfInputs = [];
function resetString() {
    emtyString = '';
    arrOfInputs = [];	
}

const form = document.querySelector(".nomreler form");
const inputs = form.querySelectorAll(".form-control");
const num1 = document.getElementsByName("n1");
const num2 = document.getElementsByName("n2");
const num3 = document.getElementsByName("n3");
const num4 = document.getElementsByName("n4");
const num5 = document.getElementsByName("n5");
const num6 = document.getElementsByName("n6");
const num7 = document.getElementsByName("n7");

function getNumData(e) {
    console.log(e.target.value);

    
}








// FOCUS NEXT INPUTS=============================
form.addEventListener("input", handleInput);
function handleInput(e, i){
    const input = e.target;
    let nextInput = input.parentElement.nextElementSibling;
    nextInput=nextInput.firstElementChild;

    if (nextInput&&input.value){
        nextInput.focus();
    }

    emtyString += input.value;

}

// PASTE INPUTS AND VALUES
inputs[0].addEventListener("paste", handlePaste);
function handlePaste(e){
    const paste = e.clipboardData.getData("text");
    console.log(paste);

    inputs.forEach((input,i)=>{
        input.value = paste[i] || '';
    })
}

// 123
// 4532191

