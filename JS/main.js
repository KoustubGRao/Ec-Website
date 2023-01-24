let nav= document.getElementById("navigation");

let acc_1 = document.getElementById("wwd-heading1");
let acc_2 = document.getElementById("wwd-heading2");
let acc_3 = document.getElementById("wwd-heading3");
let desc_1 = document.getElementById("wwd-desc1");
let desc_2 = document.getElementById("wwd-desc2");
let desc_3 = document.getElementById("wwd-desc3");
let menu = document.getElementById("menu-icon");

console.log("reading JS");

acc_1.addEventListener("click",()=>{
    desc_1.classList.toggle("hidden");
});

acc_2.addEventListener("click",()=>{
    desc_2.classList.toggle("hidden");
});

acc_3.addEventListener("click",()=>{
    desc_3.classList.toggle("hidden");
});

menu.addEventListener('click',()=>{
    nav.classList.toggle("hidden");
});