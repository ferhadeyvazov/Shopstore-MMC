// =====================SEBETIN GORSENMESI=====================
let sebetMehsul = document.getElementById("sebetMehsul");
let sebet = document.querySelector(".sebet");
let exitSebetBtn = document.querySelector(".sebet__hero i");

sebetMehsul.addEventListener("click", () => {
    sebet.classList.toggle("activeBlock");
})
exitSebetBtn.addEventListener("click", () => {
    sebet.classList.remove("activeBlock")
});

