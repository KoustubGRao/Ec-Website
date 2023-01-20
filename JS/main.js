let nav4 = document.getElementById("nav4");
let nav7 = document.getElementById("nav7");
let dropdown1 = document.getElementById("myDropdown1");
let dropdown2 = document.getElementById("myDropdown2");
let accordion= document.getElementsByClassName("accordion");
let context = document.getElementsByClassName("context");
let image = document.getElementsByClassName("dimage");
let highlight = document.getElementsByClassName("highlight");

console.log("reading JS");

nav4.addEventListener(("click"),()=>{
    dropdown1.classList.toggle("hidden");
});

nav7.addEventListener(("click"),()=>{
    dropdown2.classList.toggle("hidden");
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

let k=0;
for(let i=0 ; i< accordion.length;i++)
{
    accordion[i].addEventListener('click',()=>{
        if(i!=k)
        {
            context[i].classList.toggle("hidden");
            highlight[i].classList.toggle("border-l-4");
            highlight[i].classList.toggle("mt-2");
            highlight[i].classList.toggle("mr-2");
            highlight[i].classList.toggle("border-blue-600");
            for(let j=0;j<3;j++)
            {
                if(i==j)
                {
                    image[i].classList.toggle("hidden");
                    image[j].style.opacity="1";
                }
                else{
                    image[j].style.opacity="0";
                    if(!image[j].matches(".hidden"))
                    {
                        image[j].classList.toggle("hidden");
                    }
                    if(!context[j].matches('.hidden')){
                        context[j].classList.toggle("hidden");
                        highlight[j].classList.toggle("border-l-4");
                        highlight[j].classList.toggle("mt-2");
                        highlight[j].classList.toggle("mr-2");
                        highlight[j].classList.toggle("border-blue-600");
                    }
                }
            }
        }
        k=i;
    });

}