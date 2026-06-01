// hello("Arpit");
// // bye("Arpit");//here it cannot be acceseed
// function hello(Name){
// console.log("Hello",Name)
// }
// let bye=function(Name){
// console.log("Bye-Bye",Name)
// }
// bye("Arpit");

// let Greetings = (a)=>{
// console.log("Namaste Javascript",a)
// return 
// }
// Greetings("Arpit");


let ask=(question,yes,no)=>{
if(confirm(question)) yes();
else no();
}
ask("Do you agree",()=>alert("You agreered"),()=>alert("You diagredd"));
