const first=document.querySelector(".first");//use # for id . for class and names for tags
const second=document.querySelector(".second");
const button=document.querySelector("#button");
first.innerText="Hello";
second.innerText="World";
first.style.color="white";
let i=0;
button.addEventListener("click",()=>{
i++;
second.innerText="Button Clicked"+i;

})

