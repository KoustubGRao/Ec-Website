let nav= document.getElementById("navigation");
let nav4 = document.getElementById("nav4");
let nav7 = document.getElementById("nav7");
let dropdown1 = document.getElementById("myDropdown1");
let dropdown2 = document.getElementById("myDropdown2");
let acc_1 = document.getElementById("wwd-heading1");
let acc_2 = document.getElementById("wwd-heading2");
let acc_3 = document.getElementById("wwd-heading3");
let desc_1 = document.getElementById("wwd-desc1");
let desc_2 = document.getElementById("wwd-desc2");
let desc_3 = document.getElementById("wwd-desc3");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let menu = document.getElementById("menu-icon");

console.log("reading JS");

nav4.addEventListener(("click"),()=>{
    dropdown1.classList.toggle("hidden");
});

nav7.addEventListener(("click"),()=>{
    dropdown2.classList.toggle("hidden");
});

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

document.onclick = ()=>{
    if((!dropdown1.classList.contains("hidden"))&&(!event.target.matches(".pbtn")))
    {
    dropdown1.classList.toggle("hidden");
    }
    if(!dropdown2.classList.contains("hidden")&&(!event.target.matches(".tbtn")))
    {
    dropdown2.classList.toggle("hidden");
    }
};

// let k=0;
// for(let i=0 ; i< accordion.length;i++)
// {
//     accordion[i].addEventListener('click',()=>{
//         if(i!=k)
//         {
//             context[i].classList.toggle("hidden");
//             highlight[i].classList.toggle("border-l-4");
//             highlight[i].classList.toggle("mt-2");
//             highlight[i].classList.toggle("mr-2");
//             highlight[i].classList.toggle("border-blue-600");
//             for(let j=0;j<3;j++)
//             {
//                 if(i==j)
//                 {
//                     image[i].classList.toggle("hidden");
//                     image[j].style.opacity="1";
//                 }
//                 else{
//                     image[j].style.opacity="0";
//                     if(!image[j].matches(".hidden"))
//                     {
//                         image[j].classList.toggle("hidden");
//                     }
//                     if(!context[j].matches('.hidden')){
//                         context[j].classList.toggle("hidden");
//                         highlight[j].classList.toggle("border-l-4");
//                         highlight[j].classList.toggle("mt-2");
//                         highlight[j].classList.toggle("mr-2");
//                         highlight[j].classList.toggle("border-blue-600");
//                     }
//                 }
//             }
//         }
//         k=i;
//     });
// }