const storeBtn = document.querySelector(".store__btn");
const serviceBtn = document.querySelector(".service__btn");

const storeAside = document.querySelector(".stores__aside");
const storeService = document.querySelector(".stores__service");

function changeStore(e){
    storeBtn.classList.remove("active__btn");    
    serviceBtn.classList.remove("active__btn");
    storeAside.style.display = "none";
    storeService.style.display = "none";

    if(e.target.classList.contains("store__btn")){
        storeBtn.classList.add("active__btn");
        storeAside.style.display = "grid";
        
    }
    else if(e.target.classList.contains("service__btn")){
        serviceBtn.classList.add("active__btn");
        storeService.style.display = "grid";
    }
}
