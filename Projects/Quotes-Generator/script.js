const quote_body=document.querySelector("#quote_body");
const author=document.querySelector("#author");
const button=document.querySelector("#quoteBtn");

let quote_array;//This will store quotes array

button.disabled = true;//disabling button till quotes fetched

// Fetch quotes with error handling

fetch("https://dummyjson.com/quotes")
.then((res,rej)=>{
    button.disabled = false;
    return res.json()}
).then((data)=>{
quote_array=data.quotes;
}).catch(error=>alert(`${error}`))

button.addEventListener("click",()=>{ 
    
// fetch("https://dummyjson.com/quotes")
// .then(res=>res.json())
// .then((data)=>{
//     let length=data.quotes.length;
//     let random=Math.floor(Math.random()*length);
//     body.innerText=data.quotes[random].quote;
// });

let random=Math.floor(Math.random()*quote_array.length);
let quote=quote_array[random];
quote_body.innerText=quote.quote;
author.innerText=quote.author;
})
