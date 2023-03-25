// ============DATE============
let saniye = document.querySelectorAll('.san');
let deqiqe = document.querySelectorAll('.deq');
let saat = document.querySelectorAll('.saat');


let startsaniye = 60;
let startdeqiqe = 60;
let startHours = 24;

function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let dateNow = {
        san: startsaniye - seconds,
        deq: startdeqiqe - minutes,
        saat: startHours - hours
    }
    saat.forEach(item => item.innerHTML = dateNow.saat < 10 ? `0${dateNow.saat}<br>saat` : `${dateNow.saat}<br>saat`);
    deqiqe.forEach(item => item.innerHTML = dateNow.deq < 10 ? `0${dateNow.deq}<br>dəqiqə` : `${dateNow.deq}<br>dəqiqə`);
    saniye.forEach(item => item.innerHTML = dateNow.san < 10 ? `0${dateNow.san}<br>saniyə` : `${dateNow.san}<br>saniyə`);
}
setInterval(updateTime, 1000);


// ============HEART=====================
let satLider__Heart = document.querySelectorAll('.satLider__link--favor button');
let secilmisler = document.getElementById('secilmisler');
let secilmislerAfter = window.getComputedStyle(secilmisler, "::after");
satLider__Heart.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle('satLiderActive');
        let satLiderActive = document.querySelectorAll('.satLiderActive');
        let secilmislerLength = satLiderActive.length;
        console.log(secilmislerLength);
        secilmisler.getAttribute("content", secilmislerLength);
    });
})
