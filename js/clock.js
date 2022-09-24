let info = prompt("Adınız Nedir?");
let userName = document.querySelector("#myName")

userName.innerHTML= `${info}`

let days = ["Pazar","Pazartesi","Salı", "Çarşamba", "Perşembe","Cuma","Cumartesi"];
let tarih = new Date();
let d = days[tarih.getDay()];
let h = tarih.getHours();
let m = tarih.getMinutes();
let s = tarih.getSeconds();


let saat = document.querySelector("#myClock")
saat.innerHTML= `${h}:${m}:${s} ${d}`