let kampaniya__statisticDate = document.querySelector(".kampaniya__statistic--date");

let date = new Date();
console.log(date);
let year = date.getFullYear();
let month = date.getMonth()+1;
if(month<10){
    month = `0${month}`;
}

let day = date.getDate();

let  fullDay = `${day}.${month}.${year}`;
kampaniya__statisticDate.textContent = fullDay;