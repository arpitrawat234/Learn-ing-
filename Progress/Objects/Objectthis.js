"use strict "


let user={
//defining methods 
sayno:function(){
console.log("no");
}
,
//using shorthand for defining methods
sayyes(){
    console.log("yes");
}
}


let sayhi=function hi(){
console.log("Hi");
}
user.sayhi=sayhi;//we can add a functions as a object property (method)

user.saybye=function()
{
    console.log("bye");
}

for(let key in user){
console.log(key);
}
user.sayhi();
user.sayno();
user.sayyes();
user.saybye();
// using a this keyword representing the object
let sayname=function(){
console.log(this.name);//using this
}

user.sayname=sayname;
user.name="Arpit";
user.sayname();

user.saynametwice=function(){
let arrow=()=>{
this.sayname();
this.sayname();
}
arrow();
}
user.saynametwice();