let teams = document.getElementById("nav7");
let dropdown = document.getElementById("myDropdown");
let accordion= document.getElementsByClassName("accordion");
let context = document.getElementsByClassName("context");
let image = document.getElementsByClassName("dimage");

console.log("reading JS");

teams.addEventListener(("click"),()=>{
    dropdown.classList.toggle("hidden");
});

for(let i=0 ; i< accordion.length;i++)
{
    accordion[i].addEventListener('click',()=>{
        accordion[i].classList.toggle("active");
        context[i].classList.toggle("hidden");
        for(let j=0;j<3;j++)
        {
            if(i===j)
            {
                image[j].style.opacity="1";
            }
            else{
                image[j].style.opacity="0";
                if(!context[j].matches('.hidden')){
                    context[j].classList.toggle("hidden");
                }
            }
        }
    });

}
