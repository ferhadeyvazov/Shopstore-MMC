let citySelect = document.querySelector(".city__select");
document.addEventListener('DOMContentLoaded', getCity);

async function getCity(){
    let response = await fetch("../../data/az.json");
    let data = await response.json();
     setCity(data);
    
    
}
function setCity(cities) {
    cities.forEach(item=>{
        let option = document.createElement("option");
        option.textContent = item.city;
        option.setAttribute("value", item.city);
        citySelect.appendChild(option);
    })
}